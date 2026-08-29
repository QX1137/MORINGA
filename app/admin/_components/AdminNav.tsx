"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, Home, LayoutGrid, Settings, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/admin", label: "Dashboard", icon: Home, exact: true },
  { href: "/admin/blog", label: "Blog posts", icon: FileText },
  { href: "/admin/pages", label: "Pages", icon: LayoutGrid },
  { href: "/admin/media", label: "Media", icon: ImageIcon },
  { href: "/admin/settings", label: "Site settings", icon: Settings },
];

export function AdminNav() {
  const pathname = usePathname();
  return (
    <nav className="space-y-0.5">
      {LINKS.map(({ href, label, icon: Icon, exact }) => {
        const active = exact ? pathname === href : pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm transition-colors",
              active
                ? "bg-muted font-medium text-foreground"
                : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
            )}
          >
            <Icon className="size-4" />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
