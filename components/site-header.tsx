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
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-1.5 sm:px-6 sm:py-2 lg:px-12">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2.5 rounded-2xl transition-opacity hover:opacity-90"
        >
          <Image
            src="/logo-mark.png"
            alt={siteConfig.brand.name}
            width={56}
            height={56}
            className="h-9 w-9 shrink-0 drop-shadow-[0_0_16px_rgba(16,240,160,0.18)] sm:h-10 sm:w-10"
            priority
          />
          <div className="min-w-0">
              <p className="truncate text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-white/42 sm:text-[0.76rem]">
                {siteConfig.brand.name}
              </p>
          </div>
        </Link>

        <div className="hidden items-center gap-3 md:flex">
          {hasPhone ? (
            <a
              href={siteConfig.contact.phoneHref ?? undefined}
              className="inline-flex min-h-9 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[0.84rem] text-white/78 transition hover:border-accent-blue/35 hover:text-white"
            >
              <PhoneIcon className="h-4 w-4" />
              {getHeaderContactLabel()}
            </a>
          ) : (
            <ProtectedEmailLink
              ariaLabel="Napsat e-mail"
              fallbackText={siteConfig.contact.emailLabel}
              className="inline-flex min-h-9 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[0.84rem] text-white/78 transition hover:border-accent-blue/35 hover:text-white"
              prefix={<MailIcon className="h-4 w-4" />}
            >
              {siteConfig.contact.emailLabel}
            </ProtectedEmailLink>
          )}
          <a
            href={siteConfig.payments.sosRepairHref}
            className="inline-flex min-h-9 items-center rounded-full border border-[#ffdd00]/30 bg-[#ffdd00] px-4 py-1.5 text-[0.84rem] font-semibold text-black shadow-[0_18px_42px_rgba(255,221,0,0.16)] transition hover:translate-y-[-1px] hover:bg-[#ffe44d]"
          >
            Urgent zásah
          </a>
        </div>

        <div className="flex items-center gap-1.5 md:hidden">
          <a
            href={siteConfig.payments.sosRepairHref}
            className="inline-flex min-h-8 items-center rounded-full border border-[#ffdd00]/30 bg-[#ffdd00] px-2.5 py-1 text-[0.74rem] font-semibold text-black shadow-[0_14px_28px_rgba(255,221,0,0.14)] transition hover:translate-y-[-1px] hover:bg-[#ffe44d]"
          >
            Urgent
          </a>
          {hasPhone ? (
            <a
              href={siteConfig.contact.phoneHref ?? undefined}
              aria-label="Volat"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 transition hover:border-accent-blue/35 hover:text-white"
            >
              <PhoneIcon className="h-5 w-5" />
            </a>
          ) : (
            <ProtectedEmailLink
              ariaLabel="Napsat e-mail"
              fallbackText=""
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 transition hover:border-accent-blue/35 hover:text-white"
              prefix={<MailIcon className="h-5 w-5" />}
            />
          )}
        </div>
      </div>
    </header>
  );
}
