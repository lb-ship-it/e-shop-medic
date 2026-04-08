"use client";

import Image from "next/image";
import Link from "next/link";
import { ProtectedEmailLink } from "@/components/protected-email-link";
import { MailIcon, PhoneIcon } from "@/components/site-icons";
import { getHeaderContactLabel, siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  const hasPhone = Boolean(siteConfig.contact.phoneHref);

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-background/78 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:px-12">
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
          {hasPhone ? (
            <a
              href={siteConfig.contact.phoneHref ?? undefined}
              className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/78 transition hover:border-accent-blue/35 hover:text-white"
            >
              <PhoneIcon className="h-4 w-4" />
              {getHeaderContactLabel()}
            </a>
          ) : (
            <ProtectedEmailLink
              ariaLabel="Napsat e-mail"
              fallbackText={siteConfig.contact.emailLabel}
              className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/78 transition hover:border-accent-blue/35 hover:text-white"
              prefix={<MailIcon className="h-4 w-4" />}
            >
              {siteConfig.contact.emailLabel}
            </ProtectedEmailLink>
          )}
          <a
            href={siteConfig.contact.ctaHref}
            className="glow-green inline-flex min-h-10 items-center rounded-full bg-accent-green px-5 py-2 text-sm font-semibold text-black transition hover:translate-y-[-1px]"
          >
            {siteConfig.contact.ctaLabel}
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={siteConfig.contact.ctaHref}
            className="glow-green inline-flex min-h-10 items-center rounded-full bg-accent-green px-3.5 py-2 text-sm font-semibold text-black transition hover:translate-y-[-1px]"
          >
            Audit
          </a>
          {hasPhone ? (
            <a
              href={siteConfig.contact.phoneHref ?? undefined}
              aria-label="Volat"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 transition hover:border-accent-blue/35 hover:text-white"
            >
              <PhoneIcon className="h-5 w-5" />
            </a>
          ) : (
            <ProtectedEmailLink
              ariaLabel="Napsat e-mail"
              fallbackText=""
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 transition hover:border-accent-blue/35 hover:text-white"
              prefix={<MailIcon className="h-5 w-5" />}
            />
          )}
        </div>
      </div>
    </header>
  );
}
