import { HomepageEntryProvider } from "@/components/shared/homepage-entry-provider";
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
        <ThemeProvider><HomepageEntryProvider>{children}</HomepageEntryProvider></ThemeProvider>
      </body>
    </html>
  );
}
