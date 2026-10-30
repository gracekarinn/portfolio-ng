import { HomepageEntryProvider } from "@/components/shared/homepage-entry-provider";
import { SiteBackdrop } from "@/components/layout/site-backdrop";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteShell } from "@/components/layout/site-shell";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/shared/theme-provider";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

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
      <body className={`${plusJakartaSans.variable} min-h-full antialiased`}>
        <SiteBackdrop />
        <div className="site-content">
          <ThemeProvider>
            <HomepageEntryProvider>
              <SiteShell>
                <SiteHeader />
                {children}
                <SiteFooter />
              </SiteShell>
            </HomepageEntryProvider>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
