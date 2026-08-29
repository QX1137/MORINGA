/**
 * Browser Supabase client — used by client components in /admin
 * (login form, image uploads, live editor autosave).
 */
"use client";

import { createBrowserClient } from "@supabase/ssr";

export function createBrowserSupabase() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
