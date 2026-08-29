/**
 * Service-role Supabase client — BYPASSES RLS. Server-only.
 *
 * Use ONLY in trusted server contexts: migration/seed scripts and privileged
 * maintenance tasks. Never import this into a client component or expose the
 * service_role key to the browser.
 */

import { createClient } from "@supabase/supabase-js";

export function createAdminSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in the environment.",
    );
  }
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
