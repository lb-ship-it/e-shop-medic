import type { Metadata } from "next";
import { Manrope, Noto_Sans, Rubik_Vinyl } from "next/font/google";
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

const rubikVinyl = Rubik_Vinyl({
  variable: "--font-rubik-vinyl",
  subsets: ["latin-ext"],
  weight: "400",
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
      className={`${notoSans.variable} ${manrope.variable} ${rubikVinyl.variable} h-full antialiased`}
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
