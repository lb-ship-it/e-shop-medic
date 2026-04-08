import Image from "next/image";
import Link from "next/link";
import { ProtectedEmailLink } from "@/components/protected-email-link";
import { LinkedInIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/site-icons";
import { siteConfig } from "@/lib/site-config";

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-lg font-semibold uppercase tracking-[0.22em] text-white/78">
      {children}
    </h2>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-white/8 bg-black/38">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-12 sm:px-10 lg:grid-cols-3 lg:px-12">
        <div className="space-y-4">
          <FooterHeading>O mnÄ› / Studio</FooterHeading>
          <div className="flex items-center gap-4">
            <Image
              src="/logo-mark.png"
              alt={siteConfig.brand.name}
              width={64}
              height={64}
              className="h-14 w-14 drop-shadow-[0_0_18px_rgba(16,240,160,0.16)]"
            />
            <div>
              <p className="text-lg font-semibold text-white">{siteConfig.brand.name}</p>
              <p className="text-base text-white/60">{siteConfig.brand.domain}</p>
            </div>
          </div>
          <p className="max-w-md text-base leading-7 text-white/65">
            {siteConfig.brand.studioBlurb}
          </p>
          <div className="flex flex-wrap gap-3">
            {siteConfig.contact.linkedInHref ? (
              <a
                href={siteConfig.contact.linkedInHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-base text-white/78 transition hover:border-accent-blue/35 hover:text-white"
              >
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn
              </a>
            ) : (
              <ProtectedEmailLink
                ariaLabel="Napsat e-mail"
                fallbackText={siteConfig.contact.emailLabel}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-base text-white/78 transition hover:border-accent-blue/35 hover:text-white"
                prefix={<MailIcon className="h-4 w-4" />}
              >
                {siteConfig.contact.emailLabel}
              </ProtectedEmailLink>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <FooterHeading>RychlĂ© odkazy</FooterHeading>
          <nav className="flex flex-col gap-3 text-base text-white/72">
            <Link href={siteConfig.legal.privacyHref} className="transition hover:text-accent-green">
              GDPR / Ochrana osobnĂ­ch ĂşdajĹŻ
            </Link>
            <Link href={siteConfig.legal.termsHref} className="transition hover:text-accent-green">
              VOP
            </Link>
          </nav>
        </div>

        <div className="space-y-4">
          <FooterHeading>Kontakt</FooterHeading>
          <div className="space-y-3 text-base text-white/72">
            {siteConfig.contact.phoneHref ? (
              <a
                href={siteConfig.contact.phoneHref}
                className="flex items-start gap-3 transition hover:text-accent-green"
              >
                <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </a>
            ) : null}
            <ProtectedEmailLink
              ariaLabel="Poslat e-mail"
              fallbackText="Zobrazit e-mail"
              showAddress
              className="flex items-start gap-3 transition hover:text-accent-green"
              prefix={<MailIcon className="mt-0.5 h-5 w-5 shrink-0" />}
            />
            <div className="flex items-start gap-3">
              <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-white/55" />
              <span>
                {siteConfig.contact.location}
                <br />
                <span className="text-white/52">{siteConfig.contact.cityLine}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8 bg-black/72">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-5 text-sm text-white/52 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>{siteConfig.contact.operatorName}</span>
            <span>SĂ­dlo: {siteConfig.contact.registeredOffice}</span>
            <span>IÄŚO: {siteConfig.contact.ico}</span>
            <span>{siteConfig.contact.legalStatus}</span>
            <span>{siteConfig.contact.vatStatus}</span>
          </div>
          <span>
            Â© {year} {siteConfig.brand.domain}
          </span>
        </div>
      </div>
    </footer>
  );
}
