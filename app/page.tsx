import Image from "next/image";
import type { ReactNode } from "react";
import { CheckoutButton } from "@/components/checkout-button";
import { LeadCaptureForm } from "@/components/lead-capture-form";
import { NetworkBackground } from "@/components/network-background";
import { ProtectedEmailLink } from "@/components/protected-email-link";
import { MailIcon, PinIcon } from "@/components/site-icons";
import { siteConfig } from "@/lib/site-config";

type Service = {
  title: string;
  price: string;
  description: string;
  icon: "audit" | "fix" | "seo" | "consulting" | "restart";
  cta?: {
    label: string;
    href: string;
    note?: string;
    tone?: "yellow" | "green";
  };
};

type Symptom = {
  title: string;
  description: string;
  tone: "green" | "blue";
};

type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

type QuickAction = {
  label: string;
  href: string;
  helper: string;
  tone: "green" | "yellow";
};

const services: Service[] = [
  {
    title: "Rychlý audit",
    price: "1 500 Kč",
    description:
      "Do 24 hodin dostaneš jasný seznam největších úniků, priorit a doporučených zásahů.",
    icon: "audit",
    cta: {
      label: "CHCI RYCHLÝ AUDIT",
      href: siteConfig.payments.expressAuditHref,
      note: "Expresní rezervace a platba bezpečně přes Stripe.",
      tone: "yellow",
    },
  },
  {
    title: "SOS oprava",
    price: "3 500 Kč",
    description:
      "Akutní zásah, když se rozpadá checkout, měření, šablona nebo klíčová část funnelu.",
    icon: "fix",
    cta: {
      label: "CHCI SOS OPRAVU",
      href: siteConfig.payments.sosRepairHref,
      note: "Akutní rezervace a platba bezpečně přes Stripe.",
      tone: "yellow",
    },
  },
  {
    title: "SEO optimalizace",
    price: "od 6 500 Kč",
    description:
      "Technická i obsahová hygiena, aby e-shop nestál jen na placené návštěvnosti.",
    icon: "seo",
    cta: {
      label: "CHCI SEO OPTIMALIZACI",
      href: siteConfig.payments.seoOptimizationHref,
      note: "Přímá rezervace a platba bezpečně přes Stripe.",
      tone: "yellow",
    },
  },
  {
    title: "Konzultace",
    price: "900 Kč / hod",
    description:
      "Rychlé rozhodnutí nad UX, akvizicí, platformou, prioritami a dalším postupem.",
    icon: "consulting",
  },
  {
    title: "Kompletní restart",
    price: "od 15 000 Kč",
    description:
      "Když je potřeba srovnat design, strukturu, obsah i technický základ do jednoho směru.",
    icon: "restart",
  },
];

const symptoms: Symptom[] = [
  {
    title: "Návštěvnost stojí peníze, ale nevydělává",
    description:
      "Reklamy běží, rozpočet mizí, ale landing nebo košík nedokáže návštěvu proměnit v objednávku.",
    tone: "green",
  },
  {
    title: "Měření vypadá dobře, realita bolí",
    description:
      "GA4, pixel nebo eventy lžou, takže rozhoduješ podle neúplných nebo chybných dat.",
    tone: "blue",
  },
  {
    title: "Technický dluh brzdí růst",
    description:
      "Pomalé načítání, rozbitý mobil, šablonové chyby nebo pluginový chaos ničí důvěru i výkon.",
    tone: "green",
  },
  {
    title: "SEO a obsah nemají jasnou strukturu",
    description:
      "Kategorie, produktové stránky a interní navigace nepracují pro organický růst, jen zabírají prostor.",
    tone: "blue",
  },
];

const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Analýza zdarma",
    description:
      "Rychle vytáhnu kritická místa, která dnes stojí obchod důvěru, data nebo objednávky.",
  },
  {
    step: "02",
    title: "Návrh řešení",
    description:
      "Dostaneš srozumitelný plán priorit, aby bylo jasné, co opravit hned a co má největší dopad.",
  },
  {
    step: "03",
    title: "Implementace",
    description:
      "Zásah provedu bez zbytečné vaty, s důrazem na rychlost, čitelnost a reálnou konverzi.",
  },
];

const quickActions: QuickAction[] = [
  {
    label: "Audit zdarma",
    href: "#audit-zdarma-form",
    helper: "Nezávazný vstup 3-5 dní",
    tone: "green",
  },
  {
    label: "Express audit 24 h",
    href: siteConfig.payments.expressAuditHref,
    helper: "Placená priorita 1 500 Kč",
    tone: "yellow",
  },
  {
    label: "SOS oprava",
    href: siteConfig.payments.sosRepairHref,
    helper: "Akutní zásah 3 500 Kč",
    tone: "yellow",
  },
  {
    label: "SEO optimalizace",
    href: siteConfig.payments.seoOptimizationHref,
    helper: "Rezervace od 6 500 Kč",
    tone: "yellow",
  },
];

const metrics = [
  { value: "24 h", label: "na první diagnostiku" },
  { value: "5 platforem", label: "řeším nejčastěji" },
  { value: "Akutní režim", label: "když je problém hned" },
];

const dashboardItems = [
  { label: "Checkout flow", score: "68 / 100", tone: "green" },
  { label: "SEO hygiena", score: "41 / 100", tone: "blue" },
  { label: "Rychlost načtení", score: "2.8 s", tone: "green" },
  { label: "Tracking", score: "Missing events", tone: "blue" },
];

const platformPills = ["Shoptet", "PrestaShop", "WooCommerce", "WordPress", "Shopify"];
const featuredSymptoms = symptoms.slice(0, 2);
const extraSymptoms = symptoms.slice(2);
const featuredServices = services.slice(0, 3);
const extraServices = services.slice(3);

function AuditOptionCard({
  eyebrow,
  title,
  description,
  note,
  accent,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  note: string;
  accent: "green" | "yellow";
  children: ReactNode;
}) {
  const accentClass =
    accent === "yellow"
      ? "border-[#ffdd00]/30 bg-[#ffdd00]/[0.06]"
      : "border-accent-green/20 bg-accent-green/[0.05]";

  const noteClass = accent === "yellow" ? "text-[#ffe67a]" : "text-accent-green";

  return (
    <article className={`panel rounded-[1.3rem] border p-3.5 sm:rounded-[1.55rem] sm:p-[1.125rem] ${accentClass}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/40">{eyebrow}</p>
      <h3 className="mt-2.5 text-[1.05rem] font-semibold text-white sm:text-[1.35rem]">{title}</h3>
      <p className="mt-2.5 text-[0.88rem] leading-5 text-white/66 sm:text-[0.95rem] sm:leading-6">{description}</p>
      <p className={`mt-2.5 text-[0.88rem] font-medium sm:mt-3 sm:text-[0.95rem] ${noteClass}`}>{note}</p>
      <div className="mt-3.5 sm:mt-4">{children}</div>
    </article>
  );
}

function QuickActionBlock() {
  return (
    <div className="panel rounded-[1.25rem] border border-white/10 px-3.5 py-3.5 sm:rounded-[1.55rem] sm:px-5 sm:py-4.5">
      <div className="grid gap-2.5 border-b border-white/8 pb-3.5 sm:pb-4 lg:grid-cols-[minmax(0,1fr)_14rem] lg:items-end lg:gap-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/35">
            Rychlá akce
          </p>
          <p className="mt-2 text-[0.88rem] leading-5 text-white/62 sm:mt-2.5 sm:text-[0.96rem] sm:leading-6">
            Vyber si nejrychlejší cestu podle toho, jak moc to hoří.
            <br />
            Bez scrollování k detailům, rovnou k akci.
          </p>
        </div>
        <div className="lg:justify-self-end">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/28">
            Platby
          </p>
          <p className="mt-1 max-w-[12rem] text-[0.76rem] leading-5 text-white/45 sm:mt-1.5 sm:text-[0.82rem] sm:leading-5">
            Placené vstupy pokračují
            <br />
            přímo přes Stripe.
          </p>
        </div>
      </div>

      <div className="mt-3.5 grid grid-cols-2 gap-2 sm:mt-4 xl:grid-cols-4">
        {quickActions.map((action) => {
          const toneClass =
            action.tone === "green"
              ? "border-accent-green/22 bg-accent-green text-black hover:bg-[#37ffb3]"
              : "border-[#ffdd00]/30 bg-[#ffdd00] text-black hover:bg-[#ffe44d]";

          return (
            <a
              key={action.label}
              href={action.href}
              className={`group flex min-h-[3.85rem] flex-col justify-center rounded-[0.95rem] border px-3 py-2 transition hover:-translate-y-0.5 sm:min-h-14 sm:rounded-[1rem] sm:px-3.5 sm:py-2.5 xl:min-h-[4.4rem] ${toneClass}`}
            >
              <span className="text-[0.72rem] font-bold uppercase tracking-[0.03em] sm:text-[0.8rem] xl:text-[0.78rem]">
                {action.label}
              </span>
              <span className="mt-0.5 text-[0.72rem] leading-5 text-black/72 sm:mt-1 sm:text-[0.82rem] xl:text-[0.78rem]">
                {action.helper}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

function MoreDetails({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <>
      <details className="group mt-6 md:hidden">
        <summary className="inline-flex cursor-pointer list-none items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm font-medium text-white/76 transition hover:border-accent-blue/35 hover:text-white">
          <span>{label}</span>
          <span className="text-white/38">+</span>
        </summary>
        <div className="mt-5">{children}</div>
      </details>

      <div className="mt-6 hidden md:block">
        <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm font-medium text-white/76">
          <span>{label}</span>
        </div>
        {children}
      </div>
    </>
  );
}

function ServiceIcon({ icon }: Pick<Service, "icon">) {
  const commonProps = {
    className: "h-6 w-6",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (icon) {
    case "audit":
      return (
        <svg {...commonProps}>
          <path d="M4 12h8" />
          <path d="M4 17h10" />
          <path d="M4 7h12" />
          <circle cx="18" cy="17" r="3" />
          <path d="m20.5 19.5 2 2" />
        </svg>
      );
    case "fix":
      return (
        <svg {...commonProps}>
          <path d="M20 7.5a4.5 4.5 0 0 1-6.3 4.14L7.6 17.7a2 2 0 1 1-2.82-2.82l6.07-6.08A4.5 4.5 0 0 1 16.5 3l-2.2 2.2 4.5 4.3z" />
        </svg>
      );
    case "seo":
      return (
        <svg {...commonProps}>
          <path d="M4 16 10 10l4 4 6-8" />
          <path d="M20 8v5h-5" />
        </svg>
      );
    case "consulting":
      return (
        <svg {...commonProps}>
          <path d="M5 7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H9l-4 4v-4a3 3 0 0 1-3-3V7Z" />
          <path d="M9 10h6" />
        </svg>
      );
    case "restart":
      return (
        <svg {...commonProps}>
          <path d="M21 12a9 9 0 1 1-2.64-6.36" />
          <path d="M21 3v6h-6" />
        </svg>
      );
  }
}

function DiagnosticPanel() {
  return (
      <div className="mx-auto w-full max-w-[42rem] lg:pt-6">
        <div className="hidden">
          <div className="static-copy float-card mb-3 w-fit rounded-2xl border border-red-500/35 bg-black/72 px-4 py-3 text-sm text-white/88 shadow-[0_0_0_1px_rgba(239,68,68,0.14),0_0_28px_rgba(239,68,68,0.18)] backdrop-blur">
          <p className="text-xs uppercase tracking-[0.24em] text-red-300/70">Urgent fix</p>
          <p className="mt-2 font-medium">Checkout friction detected</p>
        </div>

          <div className="static-copy float-card-delayed ml-auto w-fit rounded-2xl border border-accent-blue/25 bg-black/60 px-4 py-3 text-sm text-white/80 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.24em] text-white/35">Tracking</p>
          <p className="mt-2 font-medium">2 events missing in funnel</p>
        </div>
      </div>

      <div className="relative mb-5 hidden h-[7.75rem] w-[28rem] max-w-full lg:ml-auto lg:block">
        <div className="static-copy float-card absolute left-0 top-0 z-20 w-[15rem] rounded-2xl border border-red-500/35 bg-black/72 px-4 py-3 text-sm text-white/88 shadow-[0_0_0_1px_rgba(239,68,68,0.14),0_0_28px_rgba(239,68,68,0.18)] backdrop-blur">
          <p className="text-xs uppercase tracking-[0.24em] text-red-300/70">Urgent fix</p>
          <p className="mt-2 font-medium">Checkout friction detected</p>
        </div>

        <div className="static-copy float-card-delayed absolute left-[13.75rem] top-[3.125rem] z-10 w-[14rem] rounded-2xl border border-accent-blue/25 bg-black/60 px-4 py-3 text-sm text-white/80 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.24em] text-white/35">Tracking</p>
          <p className="mt-2 font-medium">2 events missing in funnel</p>
        </div>
      </div>

      <div className="panel-strong panel-sheen hero-grid relative overflow-hidden rounded-[1.35rem] border border-white/10 p-3.5 sm:rounded-[1.65rem] sm:p-5">
        <div className="scanline pointer-events-none absolute inset-x-[12%] top-0 h-28 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,255,157,0.14)_0%,rgba(0,170,255,0.08)_24%,rgba(0,170,255,0.03)_46%,transparent_72%)] blur-3xl [mask-image:radial-gradient(ellipse_at_center,black_36%,transparent_78%)]" />

        <div className="static-copy flex flex-wrap items-start justify-between gap-3 sm:gap-4">
          <div className="max-w-[18rem]">
            <p className="text-[0.72rem] uppercase tracking-[0.24em] text-white/35 sm:text-[0.78rem]">
              Diagnostický panel
            </p>
            <h2 className="mt-2 font-display text-[1.18rem] font-semibold leading-tight tracking-[-0.03em] text-white sm:mt-2.5 sm:text-[1.5rem]">
              Operační pohled na e-shop
            </h2>
          </div>
          <div className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[0.68rem] text-white/62 sm:px-3 sm:text-[0.78rem]">
            Live audit mode
          </div>
        </div>

          <div className="static-copy mt-4 rounded-[1.15rem] border border-white/8 bg-[#091018]/90 p-3 sm:mt-5 sm:rounded-[1.35rem] sm:p-4">
          <div className="flex items-center justify-between text-[0.66rem] uppercase tracking-[0.18em] text-white/35 sm:text-[0.76rem] sm:tracking-[0.2em]">
            <span>Pulse of the store</span>
            <span className="text-accent-green">Monitoring active</span>
          </div>

          <div className="mt-3 overflow-hidden rounded-[1rem] border border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-2.5 sm:mt-4 sm:rounded-[1.15rem] sm:p-3">
            <svg viewBox="0 0 320 100" className="h-18 w-full sm:h-24" aria-hidden="true">
              <path
                d="M0 50 H54 L72 50 L84 32 L96 70 L112 18 L128 84 L144 50 H196 L214 50 L228 36 L240 66 L254 30 L268 50 H320"
                fill="none"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="2"
              />
              <path
                className="pulse-trace"
                d="M0 50 H54 L72 50 L84 32 L96 70 L112 18 L128 84 L144 50 H196 L214 50 L228 36 L240 66 L254 30 L268 50 H320"
                fill="none"
                stroke="url(#pulseGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="pulseGradient" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="#00ff9d" />
                  <stop offset="100%" stopColor="#00aaff" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-4 sm:gap-2.5">
            {dashboardItems.map((item) => (
              <div
                key={item.label}
                className={`rounded-[0.95rem] border px-2.5 py-2.5 sm:rounded-[1.15rem] sm:px-3 sm:py-3 ${
                  item.tone === "green"
                    ? "border-accent-green/20 bg-accent-green/6"
                    : "border-accent-blue/20 bg-accent-blue/6"
                }`}
              >
                <p className="text-[0.78rem] text-white/55 sm:text-[0.86rem]">{item.label}</p>
                <p className="mt-1 text-[0.9rem] font-semibold text-white sm:mt-1.5 sm:text-[1.1rem]">{item.score}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ title, price, description, icon, cta }: Service) {
  const ctaClass =
    cta?.tone === "green"
      ? "bg-accent-green text-black shadow-[0_18px_42px_rgba(0,255,157,0.18)] hover:bg-[#37ffb3]"
      : "bg-[#ffdd00] text-black shadow-[0_18px_42px_rgba(255,221,0,0.18)] hover:bg-[#ffe44d]";

  return (
    <article className="panel group flex h-full flex-col rounded-[1.25rem] border border-white/8 p-4 transition duration-300 hover:-translate-y-1 hover:border-accent-green/30 hover:bg-white/[0.05] sm:rounded-[1.55rem] sm:p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="glow-green flex h-10 w-10 items-center justify-center rounded-[0.9rem] bg-accent-green/10 text-accent-green transition duration-300 group-hover:scale-105 sm:h-12 sm:w-12 sm:rounded-[1rem]">
          <ServiceIcon icon={icon} />
        </div>
        <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[0.72rem] text-white/62 sm:text-[0.8rem]">
          {price}
        </span>
      </div>
      <h3 className="mt-4 text-[1.05rem] font-semibold text-white sm:text-[1.3rem]">{title}</h3>
      <p className="mt-2.5 text-[0.88rem] leading-5 text-white/60 sm:mt-3 sm:text-[0.95rem] sm:leading-6">{description}</p>
      {cta ? (
        <div className="mt-auto space-y-2 pt-4 sm:space-y-2.5 sm:pt-5">
          <a
            href={cta.href}
            className={`inline-flex min-h-9 w-full items-center justify-center rounded-[0.85rem] px-3 py-2 text-center text-[0.7rem] font-bold tracking-[0.05em] transition hover:-translate-y-0.5 sm:min-h-10 sm:rounded-[0.95rem] sm:px-3.5 sm:py-2.5 sm:text-[0.76rem] sm:tracking-[0.06em] ${ctaClass}`}
          >
            {cta.label}
          </a>
          {cta.note ? <p className="text-[0.76rem] leading-5 text-white/48 sm:text-[0.82rem]">{cta.note}</p> : null}
        </div>
      ) : null}
    </article>
  );
}

function SymptomCard({ title, description, tone }: Symptom) {
  const toneClass =
    tone === "green"
      ? "border-accent-green/18 bg-accent-green/[0.06]"
      : "border-accent-blue/18 bg-accent-blue/[0.06]";

  return (
    <article className={`panel rounded-[1.25rem] border p-4 sm:rounded-[1.55rem] sm:p-5 ${toneClass}`}>
      <div className="flex items-center gap-3">
        <span
          className={`h-3 w-3 rounded-full ${
            tone === "green" ? "bg-accent-green" : "bg-accent-blue"
          }`}
        />
        <p className="text-sm uppercase tracking-[0.24em] text-white/35">První nález</p>
      </div>
      <h3 className="mt-4 text-[1.05rem] font-semibold text-white sm:text-[1.3rem]">{title}</h3>
      <p className="mt-2.5 text-[0.88rem] leading-5 text-white/60 sm:mt-3 sm:text-[0.95rem] sm:leading-6">{description}</p>
    </article>
  );
}

function ProcessCard({ step, title, description }: ProcessStep) {
  return (
    <article className="panel rounded-[1.25rem] border border-white/8 p-4 sm:rounded-[1.55rem] sm:p-5">
      <div className="flex items-center gap-3 sm:gap-3.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-accent-green/20 bg-accent-green/10 text-[0.82rem] font-semibold text-accent-green sm:h-10 sm:w-10 sm:text-sm">
          {step}
        </span>
        <h3 className="text-[1.05rem] font-semibold text-white sm:text-[1.3rem]">{title}</h3>
      </div>
      <p className="mt-3 text-[0.88rem] leading-5 text-white/60 sm:mt-4 sm:text-[0.95rem] sm:leading-6">{description}</p>
    </article>
  );
}

function HeroContextPanel() {
  return (
    <div className="panel rounded-[1.35rem] border border-white/10 px-4 py-4.5 sm:rounded-[1.7rem] sm:px-5 sm:py-5.5 lg:px-6 lg:py-6">
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] xl:gap-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/35">
            Kde a jak zasahuju
          </p>
          <h3 className="mt-2 max-w-2xl text-[1.18rem] font-semibold text-white sm:mt-2.5 sm:text-[1.55rem] lg:text-[1.7rem]">
            Nejčastěji Shoptet, PrestaShop, WooCommerce, WordPress a Shopify.
          </h3>
          <p className="mt-2.5 max-w-2xl text-[0.88rem] leading-5 text-white/62 sm:mt-3 sm:text-[0.96rem] sm:leading-6">
            Tohle jsou prostředí, kde nejčastěji hledám, kudy utíkají objednávky, data nebo
            důvěra v prvních vteřinách. Není to dekorace, ale rychlá orientace, v čem se typicky
            pohybuju.
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {platformPills.map((platform) => (
              <span
                key={platform}
                className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[0.72rem] text-white/72 sm:px-3 sm:text-[0.8rem]"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/35">
              Co čekat po prvním kontaktu
            </p>
            <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-2.5">
              {metrics.map((item) => (
                <div
                  key={item.value}
                  className="rounded-[0.95rem] border border-white/8 bg-white/[0.03] px-2.5 py-2.5 sm:rounded-[1.1rem] sm:px-3 sm:py-3"
                >
                  <p className="text-[0.96rem] font-semibold leading-none text-white sm:text-[1.25rem]">
                    {item.value}
                  </p>
                  <p className="mt-1 text-[0.68rem] leading-5 text-white/48 sm:mt-1.5 sm:text-[0.78rem] sm:leading-5">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.15rem] border border-white/8 bg-white/[0.03] px-3.5 py-3.5 sm:rounded-[1.35rem] sm:px-4 sm:py-4">
            <div className="flex flex-col items-start gap-3.5 sm:flex-row">
              <Image
                src="/logo-mark.png"
                alt="Witdesign"
                width={72}
                height={72}
                className="mt-0.5 h-9 w-9 shrink-0 drop-shadow-[0_0_18px_rgba(16,240,160,0.16)] sm:mt-1 sm:h-10 sm:w-10"
              />
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/35">
                    Studio / přímý kontakt
                  </p>
                  <p className="mt-1.5 text-[1.1rem] font-semibold text-white sm:text-[1.4rem]">
                    Bez přeposílání mezi accounty. Zásah držím osobně.
                  </p>
                </div>
                <p className="max-w-2xl text-[0.86rem] leading-5 text-white/62 sm:text-[0.94rem] sm:leading-6">
                  Když e-shop zlobí, nechceš čekat na kolečko mezi projektovým manažerem, vývojem a
                  marketingem. Potřebuješ člověka, který problém rychle najde a dovede ho do
                  opravy.
                </p>
                <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-2.5">
                  <ProtectedEmailLink
                    ariaLabel="Poslat e-mail"
                    fallbackText="Zobrazit e-mail"
                    showAddress
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[0.82rem] text-white/78 transition hover:border-accent-blue/35 hover:text-white"
                    prefix={<MailIcon className="h-4 w-4" />}
                  />
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[0.82rem] text-white/60">
                    <PinIcon className="h-4 w-4" />
                    {siteConfig.contact.location}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeadCapturePanel() {
  return (
    <div id="kontakt" className="panel-strong rounded-[1.5rem] border border-white/10 px-4 py-5 sm:rounded-[1.9rem] sm:px-8 sm:py-10">
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-7">
        <div>
          <p className="text-[0.82rem] font-semibold uppercase tracking-[0.22em] text-white/35 sm:text-sm">
            Nezávazná analýza
          </p>
          <h2 className="mt-3 text-[1.6rem] font-semibold tracking-tight text-white sm:text-[2.35rem]">
            První dojem z webu musí působit jistě. Stejně jako první zásah.
          </h2>
          <p className="mt-4 max-w-xl text-[0.9rem] leading-6 text-white/58 sm:text-[0.98rem] sm:leading-7">
            Pošli URL svého e-shopu. Podívám se na technický stav, UX tření i první dojem a vrátím
            ti rychlou orientaci, kde obchod ztrácí nejvíc.
          </p>
        </div>

        <div
          id="audit-zdarma-form"
          className="rounded-[1.15rem] border border-white/8 bg-[#0a1118]/88 p-3.5 sm:rounded-[1.45rem] sm:p-5"
        >
          <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-[1rem] font-semibold text-white sm:text-[1.15rem]">
                Audit zdarma s čekací dobou 3–5 dní
              </p>
            </div>
            <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.78rem] text-white/58">
              Omezený rozsah
            </div>
          </div>
          <LeadCaptureForm />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div id="top" className="relative overflow-hidden">
      <NetworkBackground />

      <main className="relative z-10 pb-14 pt-4 md:pt-8">
        <section className="mx-auto w-full max-w-7xl px-4 pb-10 sm:px-10 sm:pb-16 lg:px-12">
          <div className="grid items-start gap-9 lg:grid-cols-[minmax(0,1.03fr)_minmax(22rem,0.97fr)] lg:gap-9 xl:grid-cols-[minmax(0,1.06fr)_minmax(24rem,0.94fr)]">
            <div className="order-1 max-w-none lg:pr-4 xl:pr-8">
              <div className="static-copy glow-blue inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.7rem] text-white/70 sm:gap-2.5 sm:px-3.5 sm:py-1.5 sm:text-[0.8rem]">
                <span className="h-2 w-2 rounded-full bg-accent-green" />
                Akutní diagnostika e-shopů do 24 hodin
              </div>

              <h1 className="static-copy mt-4 max-w-[10ch] text-[1.52rem] font-bold uppercase leading-[1.08] tracking-[-0.025em] text-[#ff5b5b] [font-family:var(--font-k2d)] sm:mt-4 sm:text-[2.1rem] sm:leading-[1.04] lg:text-[2.55rem] lg:leading-[1.01] xl:text-[2.8rem]">
                Krvácející e-shop potřebuje zásah
              </h1>
              <p className="static-copy mt-3 max-w-3xl text-[0.96rem] font-semibold leading-6 text-accent-green sm:mt-4 sm:text-[1.25rem] sm:leading-7">
                Technický audit, UX diagnostika a rychlá stabilizace pro e-shopy, které mají
                potenciál, ale ztrácejí peníze v tichosti.
              </p>
              <p className="static-copy mt-3 max-w-2xl text-[0.88rem] leading-6 text-white/62 sm:mt-4 sm:text-[1rem] sm:leading-7">
                Řeším situace, kdy traffic stojí peníze, ale checkout drhne, data lžou, SEO
                nepomáhá a důvěra je slabší, než by měla být. Nejdřív najdeme kritické místo, pak
                opravíme to, co má největší dopad.
              </p>

            </div>

            <div className="order-2 lg:order-3 lg:col-span-2">
              <QuickActionBlock />
            </div>
            <div className="order-3 lg:order-4 lg:col-span-2 lg:-mt-4 xl:-mt-5">
              <LeadCapturePanel />
            </div>
            <div className="order-4 lg:order-2">
              <DiagnosticPanel />
            </div>
            <div className="order-5 lg:col-span-2">
              <HeroContextPanel />
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 pb-10 sm:px-10 sm:pb-14 lg:px-12">
          <div className="mb-7 max-w-3xl">
            <p className="text-[0.82rem] font-semibold uppercase tracking-[0.22em] text-white/35 sm:text-sm">
              Kdy volat medika
            </p>
            <h2 className="mt-3 text-[1.55rem] font-semibold tracking-tight text-white sm:text-[2.35rem]">
              Tohle jsou symptomy, které obvykle najdu během prvních 15 minut.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 md:gap-5">
            {featuredSymptoms.map((symptom) => (
              <SymptomCard key={symptom.title} {...symptom} />
            ))}
          </div>

          {extraSymptoms.length > 0 ? (
            <MoreDetails label="Více symptomů">
              <div className="grid gap-5 md:grid-cols-2">
                {extraSymptoms.map((symptom) => (
                  <SymptomCard key={symptom.title} {...symptom} />
                ))}
              </div>
            </MoreDetails>
          ) : null}
        </section>

        <section id="sluzby" className="mx-auto w-full max-w-7xl px-4 pb-10 sm:px-10 sm:pb-14 lg:px-12">
          <div className="mb-6 flex flex-col gap-3 lg:mb-8 lg:flex-row lg:items-end lg:justify-between lg:gap-5">
            <div className="max-w-3xl">
              <p className="text-[0.82rem] font-semibold uppercase tracking-[0.22em] text-white/35 sm:text-sm">
                Služby
              </p>
              <h2 className="mt-3 text-[1.55rem] font-semibold tracking-tight text-white sm:text-[2.35rem]">
                Zásahy od rychlé první pomoci po kompletní restart.
              </h2>
            </div>
            <p className="max-w-xl text-[0.9rem] leading-6 text-white/55 sm:text-[0.96rem] sm:leading-7">
              Každá služba míří na jiný typ bolesti. Někdy stačí přesná diagnóza, jindy je potřeba
              akutní technický zásah nebo srovnání celé prezentace obchodu.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2 lg:gap-5 xl:grid-cols-3">
            {featuredServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          {extraServices.length > 0 ? (
            <MoreDetails label="Další služby">
              <div className="grid gap-5 lg:grid-cols-2">
                {extraServices.map((service) => (
                  <ServiceCard key={service.title} {...service} />
                ))}
              </div>
            </MoreDetails>
          ) : null}
        </section>

        <section id="proces" className="mx-auto w-full max-w-7xl px-4 pb-10 sm:px-10 sm:pb-14 lg:px-12">
          <div className="grid gap-4 sm:gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="panel-strong rounded-[1.35rem] border border-white/10 px-4 py-5 sm:rounded-[1.7rem] sm:px-6 sm:py-7">
              <p className="text-[0.82rem] font-semibold uppercase tracking-[0.22em] text-white/35 sm:text-sm">
                Jak to probíhá
              </p>
              <div className="mt-4 grid gap-2.5 sm:mt-6 sm:gap-3">
                {processSteps.map((item) => (
                  <ProcessCard key={item.step} {...item} />
                ))}
              </div>
            </div>

            <div className="panel rounded-[1.35rem] border border-white/10 px-4 py-5 sm:rounded-[1.7rem] sm:px-6 sm:py-7">
              <p className="text-[0.82rem] font-semibold uppercase tracking-[0.22em] text-white/35 sm:text-sm">
                Co dostaneš do ruky
              </p>
              <h2 className="mt-3 text-[1.45rem] font-semibold text-white sm:text-[2.05rem]">
                Ne pocit. Konkrétní orientaci.
              </h2>
              <div className="mt-4 space-y-2.5 sm:mt-6 sm:space-y-3">
                {[
                  "Prioritizovaný seznam problémů od kritických po kosmetické.",
                  "Jasné doporučení, co opravit hned a co může počkat.",
                  "Směr pro design, UX, obsah i technickou hygienu.",
                  "Kontext, proč problém vzniká a kde přesně bolí výkon obchodu.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[1rem] border border-white/8 bg-white/[0.03] px-3 py-3 sm:gap-3.5 sm:rounded-[1.2rem] sm:px-3.5 sm:py-3.5"
                  >
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-blue/12 text-[0.82rem] text-accent-blue">
                      +
                    </span>
                    <p className="text-[0.9rem] leading-6 text-white/72 sm:text-[0.95rem]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="vstupni-varianty"
          className="mx-auto w-full max-w-7xl px-4 pb-10 sm:px-10 sm:pb-14 lg:px-12"
        >
          <div className="mb-6 flex flex-col gap-3 lg:mb-8 lg:flex-row lg:items-end lg:justify-between lg:gap-5">
            <div className="max-w-3xl">
              <p className="text-[0.82rem] font-semibold uppercase tracking-[0.22em] text-white/35 sm:text-sm">
                Vstupní režimy
              </p>
              <h2 className="mt-3 text-[1.55rem] font-semibold tracking-tight text-white sm:text-[2.35rem]">
                Dvě cesty podle toho, jak rychle potřebuješ jasno.
              </h2>
            </div>
            <p className="max-w-xl text-[0.9rem] leading-6 text-white/55 sm:text-[0.96rem] sm:leading-7">
              Audit zdarma je pomalejší orientační vstup. Express audit je placená priorita pro
              chvíli, kdy už je čekání dražší než samotný zásah.
            </p>
          </div>

          <div className="grid gap-4 xl:grid-cols-2">
            <AuditOptionCard
              eyebrow="Varianta A / Free"
              title="Audit zdarma"
              description="Omezený vstupní rozsah pro první orientaci, když nechceš řešit problém naslepo."
              note="Čekací doba 3-5 dní, omezený rozsah."
              accent="green"
            >
              <a
                href="#audit-zdarma-form"
                className="inline-flex min-h-9 items-center justify-center rounded-full border border-accent-green/22 bg-accent-green px-3.5 py-1.5 text-[0.84rem] font-semibold text-black transition hover:translate-y-[-1px]"
              >
                AUDIT ZDARMA
              </a>
              <p className="mt-2.5 text-[0.8rem] text-white/48">Zbývají 3 místa v pomalejším režimu.</p>
            </AuditOptionCard>

            <AuditOptionCard
              eyebrow="Varianta B / Paid"
              title="Express Medic Audit"
              description="Placená priorita pro e-shopy, kde je problém dražší než čekání."
              note="Garance do 24 hodin, hloubková analýza + 15min konzultace."
              accent="yellow"
            >
              <CheckoutButton
                label="CHCI EXPRESS AUDIT DO 24 HODIN (1 500 Kč)"
                className="w-full justify-center rounded-[0.95rem] bg-[#ffdd00] px-3.5 py-2.5 text-center text-[0.84rem] font-bold text-black shadow-[0_18px_42px_rgba(255,221,0,0.18)] hover:bg-[#ffe44d]"
              />
              <p className="mt-2.5 text-[0.8rem] text-white/48">Platba probíhá bezpečně přes Stripe.</p>
            </AuditOptionCard>
          </div>
        </section>

      </main>
    </div>
  );
}
