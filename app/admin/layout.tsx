/**
 * Root /admin layout. Deliberately thin — it wraps BOTH the login screen and
 * the authenticated panel. The panel's own layout (admin/(panel)/layout.tsx)
 * adds the sidebar chrome + admin gate. Force dynamic so nothing here is
 * statically cached.
 */
export const dynamic = "force-dynamic";

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-background text-foreground">{children}</div>;
}
