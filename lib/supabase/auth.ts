/**
 * Server-side admin gate. Used by the /admin layout and server actions.
 * Verifies (a) a valid Supabase session and (b) that the user's email is on
 * the `admins` allow-list. Returns the user, or null when not authorised.
 */

import { createServerSupabase } from "./server";

export type AdminUser = { id: string; email: string };

export async function getAdminUser(): Promise<AdminUser | null> {
  const supabase = await createServerSupabase();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user?.email) return null;

  // is_admin() RLS helper also gates data, but we check explicitly here so the
  // UI can show a clean "not authorised" state instead of empty tables.
  const { data, error } = await supabase
    .from("admins")
    .select("email")
    .eq("email", user.email.toLowerCase())
    .maybeSingle();

  if (error || !data) return null;
  return { id: user.id, email: user.email };
}
