import type { Metadata } from "next";
import { K2D, Manrope, Noto_Sans } from "next/font/google";
import { MobileBottomNav } from "@/components/mobile-bottom-nav";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin-ext"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin-ext"],
  display: "swap",
});

const k2d = K2D({
  variable: "--font-k2d",
  subsets: ["latin-ext"],
  weight: "700",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.brand.name} | Záchrana vašeho e-shopu`,
  description: siteConfig.brand.description,
  icons: {
    icon: "/logo-mark.png",
    shortcut: "/logo-mark.png",
    apple: "/logo-mark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${notoSans.variable} ${manrope.variable} ${k2d.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <SiteHeader />
        <div className="pb-24 md:pb-0">{children}</div>
        <SiteFooter />
        <MobileBottomNav />
      </body>
    </html>
  );
}
