"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { HomepageLoader } from "@/components/shared/homepage-loader";

interface SiteShellProps {
  children: ReactNode;
}

export function SiteShell({ children }: SiteShellProps) {
  const pathname = usePathname();
  const sitePage = <div className="site-page">{children}</div>;

  return pathname === "/" ? (
    <HomepageLoader>{sitePage}</HomepageLoader>
  ) : (
    sitePage
  );
}
