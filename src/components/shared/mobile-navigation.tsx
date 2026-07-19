"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/achievements", label: "Achievements" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
];

export function MobileNavigation() {
  const pathname = usePathname();
  const activeIndex = navigationItems.findIndex((item) => item.href === pathname);
  const currentIndex = activeIndex === -1 ? 0 : activeIndex;
  const previousItem = navigationItems[(currentIndex - 1 + navigationItems.length) % navigationItems.length];
  const nextItem = navigationItems[(currentIndex + 1) % navigationItems.length];
  const currentItem = navigationItems[currentIndex];

  return (
    <nav className="flex items-center justify-between font-mono text-sm" aria-label="Page navigation">
      <Link href={previousItem.href} className="focus-ring inline-flex size-9 items-center justify-center text-muted-foreground transition-colors hover:text-foreground" aria-label={`Go to ${previousItem.label}`}>
        <ChevronLeft size={17} strokeWidth={1.5} aria-hidden="true" />
      </Link>
      <span className="text-muted-foreground">_{currentItem.label.toLowerCase()}</span>
      <Link href={nextItem.href} className="focus-ring inline-flex size-9 items-center justify-center text-muted-foreground transition-colors hover:text-foreground" aria-label={`Go to ${nextItem.label}`}>
        <ChevronRight size={17} strokeWidth={1.5} aria-hidden="true" />
      </Link>
    </nav>
  );
}
