import {
  ClipboardIcon,
  MailIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/site-icons";
import {
  getBottomNavPrimaryHref,
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

  const items = [
    {
      label: primaryLabel,
      href: getBottomNavPrimaryHref(),
    },
    {
      label: secondaryLabel,
      href: getBottomNavSecondaryHref(),
    },
    {
      label: "Poptávka",
      href: siteConfig.contact.ctaHref,
    },
  ];

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-black/88 px-3 py-3 backdrop-blur-xl md:hidden">
      <div className="mx-auto grid max-w-xl grid-cols-3 gap-2">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="inline-flex min-h-14 flex-col items-center justify-center gap-1 rounded-2xl border border-white/8 bg-white/[0.03] px-3 py-2 text-base font-semibold text-white/76 transition hover:border-accent-green/35 hover:text-white"
          >
            {navIcon(item.label)}
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
