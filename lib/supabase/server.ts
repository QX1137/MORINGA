/**
 * Server-side Supabase clients.
 *
 * - `createServerSupabase()` is request-scoped and cookie-aware — it carries the
 *   logged-in admin's session, so RLS runs as that user. Use it in Server
 *   Components, Route Handlers, and Server Actions inside /admin.
 * - `createPublicSupabase()` is a plain anon client with no session — used for
 *   rendering the public site (reads only published rows via RLS). Safe to cache.
 */

import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export async function createServerSupabase() {
  const cookieStore = await cookies();
  return createServerClient(URL, ANON, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options),
          );
        } catch {
          // Called from a Server Component (read-only cookies). Session refresh
          // is handled by middleware, so this is safe to ignore.
        }
      },
    },
  });
}

/** Sessionless anon client for public reads (published content only). */
export function createPublicSupabase() {
  return createClient(URL, ANON, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
