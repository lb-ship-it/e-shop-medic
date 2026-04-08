"use client";

import Image from "next/image";
import Link from "next/link";
import { MailIcon, PhoneIcon } from "@/components/site-icons";
import {
  getHeaderContactHref,
  getHeaderContactLabel,
  getHeaderContactTarget,
  siteConfig,
} from "@/lib/site-config";

export function SiteHeader() {
  const hasPhone = Boolean(siteConfig.contact.phoneHref);
  const contactTarget = getHeaderContactTarget();

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-background/78 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-12">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 rounded-2xl transition-opacity hover:opacity-90"
        >
          <Image
            src="/logo-mark.png"
            alt={siteConfig.brand.name}
            width={56}
            height={56}
            className="h-12 w-12 shrink-0 drop-shadow-[0_0_16px_rgba(16,240,160,0.18)]"
            priority
          />
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold uppercase tracking-[0.28em] text-white/42">
              {siteConfig.brand.name}
            </p>
            <p className="hidden truncate text-base text-white/72 sm:block">
              Diagnostika, stabilizace a rychlý zásah pro e-shopy
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={getHeaderContactHref()}
            target={contactTarget}
            rel={contactTarget ? "noreferrer" : undefined}
            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-base text-white/78 transition hover:border-accent-blue/35 hover:text-white"
          >
            {hasPhone ? <PhoneIcon className="h-4 w-4" /> : <MailIcon className="h-4 w-4" />}
            {getHeaderContactLabel()}
          </a>
          <a
            href={siteConfig.contact.ctaHref}
            className="glow-green inline-flex min-h-12 items-center rounded-full bg-accent-green px-6 py-3 text-base font-semibold text-black transition hover:translate-y-[-1px]"
          >
            {siteConfig.contact.ctaLabel}
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={siteConfig.contact.ctaHref}
            className="glow-green inline-flex min-h-11 items-center rounded-full bg-accent-green px-4 py-2 text-base font-semibold text-black transition hover:translate-y-[-1px]"
          >
            Audit
          </a>
          <a
            href={getHeaderContactHref()}
            aria-label={hasPhone ? "Volat" : "Napsat e-mail"}
            target={contactTarget}
            rel={contactTarget ? "noreferrer" : undefined}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 transition hover:border-accent-blue/35 hover:text-white"
          >
            {hasPhone ? <PhoneIcon className="h-5 w-5" /> : <MailIcon className="h-5 w-5" />}
          </a>
        </div>
      </div>
    </header>
  );
}
