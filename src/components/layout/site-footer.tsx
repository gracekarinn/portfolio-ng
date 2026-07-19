import { Mail } from "lucide-react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";

export function SiteFooter() {
  return (
    <footer className="site-footer border-t border-border font-mono text-[0.62rem] text-muted-foreground">
      <div><p><span className="text-accent">grace@portfolio:~$</span> pwd</p><p className="mt-2">Grace Karina — building things that matter.</p></div>
      <div className="flex gap-2" aria-label="Social links">
        <a href="https://www.instagram.com/" className="hero-social focus-ring" aria-label="Instagram"><FaInstagram size={14} aria-hidden="true" /></a>
        <a href="https://www.linkedin.com/" className="hero-social focus-ring" aria-label="LinkedIn"><FaLinkedinIn size={14} aria-hidden="true" /></a>
        <a href="mailto:hello@example.com" className="hero-social focus-ring" aria-label="Email"><Mail size={14} strokeWidth={1.4} aria-hidden="true" /></a>
      </div>
      <div className="text-right"><p>© 2026 Grace Karina</p><p className="mt-2">All rights reserved.</p></div>
    </footer>
  );
}
