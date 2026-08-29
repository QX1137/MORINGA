import Link from "next/link";
import { createServerSupabase } from "@/lib/supabase/server";
import { FileText, LayoutGrid, PlusCircle } from "lucide-react";

export default async function AdminDashboard() {
  const supabase = await createServerSupabase();

  const [{ count: published }, { count: drafts }] = await Promise.all([
    supabase.from("blog_posts").select("*", { count: "exact", head: true }).eq("status", "published"),
    supabase.from("blog_posts").select("*", { count: "exact", head: true }).eq("status", "draft"),
  ]);

  const stats = [
    { label: "Published posts", value: published ?? 0 },
    { label: "Drafts", value: drafts ?? 0 },
    { label: "Core pages", value: 4 },
  ];

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Manage Go Moringa&rsquo;s blog, core pages and site settings.
      </p>

      <div className="mt-6 grid grid-cols-3 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-border bg-card p-4">
            <div className="text-2xl font-semibold">{s.value}</div>
            <div className="text-xs text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        <Link
          href="/admin/blog/new"
          className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:bg-muted/50"
        >
          <PlusCircle className="size-5 text-primary" />
          <div>
            <div className="font-medium">New blog post</div>
            <div className="text-xs text-muted-foreground">Write and publish an article</div>
          </div>
        </Link>
        <Link
          href="/admin/blog"
          className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:bg-muted/50"
        >
          <FileText className="size-5 text-primary" />
          <div>
            <div className="font-medium">All blog posts</div>
            <div className="text-xs text-muted-foreground">Edit, publish or unpublish</div>
          </div>
        </Link>
        <Link
          href="/admin/pages"
          className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:bg-muted/50"
        >
          <LayoutGrid className="size-5 text-primary" />
          <div>
            <div className="font-medium">Core pages</div>
            <div className="text-xs text-muted-foreground">Home, About, Contact, Services</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
