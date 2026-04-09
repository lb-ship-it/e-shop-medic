import { ProtectedEmailLink } from "@/components/protected-email-link";
import {
  ClipboardIcon,
  MailIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/site-icons";
import {
  getBottomNavPrimaryLabel,
  getBottomNavSecondaryHref,
  getBottomNavSecondaryLabel,
  siteConfig,
} from "@/lib/site-config";

function navIcon(label: string) {
  if (label === "Volat") {
    return <PhoneIcon className="h-5 w-5" />;
  }

  if (label === "WhatsApp") {
    return <WhatsAppIcon className="h-5 w-5" />;
  }

  if (label === "E-mail") {
    return <MailIcon className="h-5 w-5" />;
  }

  return <ClipboardIcon className="h-5 w-5" />;
}

export function MobileBottomNav() {
  const primaryLabel = getBottomNavPrimaryLabel();
  const secondaryLabel = getBottomNavSecondaryLabel();
  const hasPhone = Boolean(siteConfig.contact.phoneHref);

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-black/88 px-2.5 py-2 backdrop-blur-xl md:hidden">
      <div className="mx-auto grid max-w-xl grid-cols-[0.88fr_0.88fr_1.24fr] gap-2">
        {hasPhone ? (
          <a
            href={siteConfig.contact.phoneHref ?? undefined}
            className="inline-flex min-h-11 flex-col items-center justify-center gap-0.5 rounded-[1rem] border border-white/8 bg-white/[0.03] px-2.5 py-2 text-[0.72rem] font-semibold text-white/76 transition hover:border-accent-green/35 hover:text-white"
          >
            {navIcon(primaryLabel)}
            <span>{primaryLabel}</span>
          </a>
        ) : (
          <ProtectedEmailLink
            ariaLabel="Napsat e-mail"
            fallbackText="E-mail"
            className="inline-flex min-h-11 flex-col items-center justify-center gap-0.5 rounded-[1rem] border border-white/8 bg-white/[0.03] px-2.5 py-2 text-[0.72rem] font-semibold text-white/76 transition hover:border-accent-green/35 hover:text-white"
            prefix={navIcon(primaryLabel)}
          >
            {primaryLabel}
          </ProtectedEmailLink>
        )}

        <a
          href={getBottomNavSecondaryHref()}
          className="inline-flex min-h-11 flex-col items-center justify-center gap-0.5 rounded-[1rem] border border-white/8 bg-white/[0.03] px-2.5 py-2 text-[0.72rem] font-semibold text-white/76 transition hover:border-accent-green/35 hover:text-white"
        >
          {navIcon(secondaryLabel)}
          <span>{secondaryLabel}</span>
        </a>

        <a
          href={siteConfig.contact.ctaHref}
          className="glow-green inline-flex min-h-11 flex-col items-center justify-center gap-0.5 rounded-[1rem] border border-accent-green/20 bg-accent-green text-[0.72rem] font-semibold text-black transition hover:bg-[#37ffb3]"
        >
          {navIcon("Poptávka")}
          <span>Poptávka</span>
        </a>
      </div>
    </nav>
  );
}
