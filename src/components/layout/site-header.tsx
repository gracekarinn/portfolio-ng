"use client";

import { MobileNavigation } from "@/components/shared/mobile-navigation";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useHomepageEntry } from "@/components/shared/homepage-entry-provider";

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/achievements", label: "Achievements" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { enter } = useHomepageEntry();
  const activePath = pathname === "/" ? "home" : pathname.slice(1);

  useEffect(() => {
    if (pathname !== "/") enter();
  }, [enter, pathname]);

  return (
    <header className="site-header w-full border-y border-border/80">
      <div className="flex min-h-15 items-center justify-between border-b border-border/80 pl-5 sm:pl-7">
        <div className="flex items-center gap-6">
          <span className="window-dots" aria-hidden="true"><i /><i /><i /></span>
          <span className="font-mono text-sm tracking-[0.08em] text-muted-foreground">grace@portfolio:~</span>
        </div>
        <div className="flex h-15 items-center">
          <span className="hidden border-r border-border px-7 font-mono text-sm text-muted-foreground sm:block">~ /{activePath}</span>
          <ThemeToggle />
        </div>
      </div>
      <div className="flex min-h-14 items-center px-5 sm:px-7">
        <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary navigation">
          {navigationItems.map((item) => {
            const path = item.label.toLowerCase();
            const isActive = activePath === path;

            return <Link key={item.href} href={item.href} aria-current={isActive ? "page" : undefined} className={`focus-ring nav-link font-mono text-sm ${isActive ? "font-semibold text-muted-foreground" : "text-muted-foreground hover:text-foreground"}`}><span>_</span>{path}</Link>;
          })}
        </nav>
        <div className="w-full lg:hidden"><MobileNavigation /></div>
      </div>
    </header>
  );
}
