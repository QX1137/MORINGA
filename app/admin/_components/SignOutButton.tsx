"use client";

import { createBrowserSupabase } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export function SignOutButton() {
  async function signOut() {
    const supabase = createBrowserSupabase();
    await supabase.auth.signOut();
    window.location.href = "/admin/login";
  }
  return (
    <Button variant="outline" size="sm" className="w-full" onClick={signOut}>
      <LogOut className="size-3.5" />
      Sign out
    </Button>
  );
}
