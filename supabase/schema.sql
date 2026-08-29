-- =====================================================================
-- Go Moringa CMS — database schema
-- Run this in the Supabase SQL editor (Dashboard → SQL → New query).
-- Safe to re-run: uses IF NOT EXISTS / CREATE OR REPLACE where possible.
-- =====================================================================

-- ---------- helpers -------------------------------------------------
create extension if not exists "pgcrypto";  -- gen_random_uuid()

-- updated_at auto-touch
create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

-- Is the current auth user an allow-listed admin?
create or replace function public.is_admin()
returns boolean language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from public.admins
    where lower(email) = lower(coalesce(auth.jwt() ->> 'email', ''))
  );
$$;

-- ---------- admins (allow-list) ------------------------------------
create table if not exists public.admins (
  email       text primary key,
  created_at  timestamptz not null default now()
);
alter table public.admins enable row level security;
-- Only admins can read the admin list; nobody edits it via the API (managed in SQL).
drop policy if exists admins_read on public.admins;
create policy admins_read on public.admins for select using (public.is_admin());

-- ---------- blog_posts ---------------------------------------------
create table if not exists public.blog_posts (
  id                uuid primary key default gen_random_uuid(),
  slug              text unique not null,
  title             text not null,               -- <title> / SEO title
  h1                text,                         -- on-page H1
  meta_description  text,
  canonical_path    text,                         -- e.g. /blog/my-post.php  (preserve legacy URLs)
  og_image          text,
  hero_image        text,                         -- optional hero override
  body_html         text,                         -- article HTML
  excerpt           text,
  word_count        integer default 0,
  status            text not null default 'draft' check (status in ('draft','published')),
  sort_index        integer default 0,            -- controls prev/next + listing order
  published_at      timestamptz,
  created_at        timestamptz not null default now(),
  updated_at        timestamptz not null default now()
);
create index if not exists blog_posts_status_idx on public.blog_posts (status);
create index if not exists blog_posts_sort_idx on public.blog_posts (sort_index);
drop trigger if exists blog_posts_touch on public.blog_posts;
create trigger blog_posts_touch before update on public.blog_posts
  for each row execute function public.touch_updated_at();

alter table public.blog_posts enable row level security;
drop policy if exists blog_public_read on public.blog_posts;
create policy blog_public_read on public.blog_posts
  for select using (status = 'published' or public.is_admin());
drop policy if exists blog_admin_write on public.blog_posts;
create policy blog_admin_write on public.blog_posts
  for all using (public.is_admin()) with check (public.is_admin());

-- ---------- pages (editable core-page content) ---------------------
-- One row per code-driven page (home/about/contact/services). Layout stays in
-- code; the editable copy (headings, body, testimonials, faqs) lives in `content`.
create table if not exists public.pages (
  key               text primary key,            -- 'home' | 'about' | 'contact' | 'services'
  title             text,                         -- SEO <title>
  meta_description  text,
  og_image          text,
  content           jsonb not null default '{}',  -- structured, page-specific copy
  updated_at        timestamptz not null default now()
);
drop trigger if exists pages_touch on public.pages;
create trigger pages_touch before update on public.pages
  for each row execute function public.touch_updated_at();

alter table public.pages enable row level security;
drop policy if exists pages_public_read on public.pages;
create policy pages_public_read on public.pages for select using (true);
drop policy if exists pages_admin_write on public.pages;
create policy pages_admin_write on public.pages
  for all using (public.is_admin()) with check (public.is_admin());

-- ---------- site_settings (single row, site-wide constants) --------
create table if not exists public.site_settings (
  id          smallint primary key default 1 check (id = 1),
  data        jsonb not null default '{}',        -- contact, hours, reviews, social, person, analytics
  updated_at  timestamptz not null default now()
);
drop trigger if exists site_settings_touch on public.site_settings;
create trigger site_settings_touch before update on public.site_settings
  for each row execute function public.touch_updated_at();

alter table public.site_settings enable row level security;
drop policy if exists settings_public_read on public.site_settings;
create policy settings_public_read on public.site_settings for select using (true);
drop policy if exists settings_admin_write on public.site_settings;
create policy settings_admin_write on public.site_settings
  for all using (public.is_admin()) with check (public.is_admin());

-- ---------- media (asset library, backed by Storage) ---------------
create table if not exists public.media (
  id          uuid primary key default gen_random_uuid(),
  path        text not null,        -- storage object path within the 'media' bucket
  url         text not null,        -- public URL
  alt         text,
  width       integer,
  height      integer,
  size_bytes  integer,
  created_at  timestamptz not null default now()
);
alter table public.media enable row level security;
drop policy if exists media_public_read on public.media;
create policy media_public_read on public.media for select using (true);
drop policy if exists media_admin_write on public.media;
create policy media_admin_write on public.media
  for all using (public.is_admin()) with check (public.is_admin());

-- =====================================================================
-- Storage bucket for uploaded images
-- =====================================================================
insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do nothing;

-- Public read; admin write on the media bucket.
drop policy if exists media_bucket_read on storage.objects;
create policy media_bucket_read on storage.objects
  for select using (bucket_id = 'media');
drop policy if exists media_bucket_write on storage.objects;
create policy media_bucket_write on storage.objects
  for insert with check (bucket_id = 'media' and public.is_admin());
drop policy if exists media_bucket_update on storage.objects;
create policy media_bucket_update on storage.objects
  for update using (bucket_id = 'media' and public.is_admin());
drop policy if exists media_bucket_delete on storage.objects;
create policy media_bucket_delete on storage.objects
  for delete using (bucket_id = 'media' and public.is_admin());

-- =====================================================================
-- Seed the four editable core pages + the settings row (empty shells).
-- The migration script fills these with the current site content.
-- =====================================================================
insert into public.pages (key) values ('home'), ('about'), ('contact'), ('services')
  on conflict (key) do nothing;
insert into public.site_settings (id, data) values (1, '{}')
  on conflict (id) do nothing;
