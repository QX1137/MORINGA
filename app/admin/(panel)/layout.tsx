import { redirect } from "next/navigation";
import Link from "next/link";
import { getAdminUser } from "@/lib/supabase/auth";
import { AdminNav } from "../_components/AdminNav";
import { SignOutButton } from "../_components/SignOutButton";

export default async function PanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getAdminUser();
  if (!user) redirect("/admin/login");

  return (
    <div className="flex min-h-screen">
      <aside className="hidden w-60 shrink-0 flex-col border-r border-border bg-card md:flex">
        <div className="flex h-14 items-center border-b border-border px-5">
          <Link href="/admin" className="font-semibold tracking-tight">
            Go Moringa
          </Link>
          <span className="ml-2 rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
            CMS
          </span>
        </div>
        <div className="flex-1 overflow-y-auto p-3">
          <AdminNav />
        </div>
        <div className="border-t border-border p-3">
          <div className="mb-2 truncate px-2 text-xs text-muted-foreground">{user.email}</div>
          <SignOutButton />
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-14 items-center justify-between border-b border-border px-5 md:hidden">
          <Link href="/admin" className="font-semibold">
            Go Moringa CMS
          </Link>
          <SignOutButton />
        </header>
        <main className="flex-1 overflow-y-auto p-5 md:p-8">{children}</main>
      </div>
    </div>
  );
}
