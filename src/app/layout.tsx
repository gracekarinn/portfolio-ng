import { HomepageEntryProvider } from "@/components/shared/homepage-entry-provider";
import { SiteBackdrop } from "@/components/layout/site-backdrop";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/shared/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grace Karina — Software Engineer",
  description: "Grace Karina is a software engineer, data enthusiast, and builder.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-full antialiased">
        <SiteBackdrop />
        <div className="site-content"><ThemeProvider><HomepageEntryProvider>{children}</HomepageEntryProvider></ThemeProvider></div>
      </body>
    </html>
  );
}
