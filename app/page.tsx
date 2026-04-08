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

type Evidence = {
  label: string;
  issue: string;
  outcome: string;
};

const services: Service[] = [
  {
    title: "RychlĂ˝ audit",
    price: "1 500 KÄŤ",
    description:
      "Do 24 hodin dostaneĹˇ jasnĂ˝ seznam nejvÄ›tĹˇĂ­ch ĂşnikĹŻ, priorit a doporuÄŤenĂ˝ch zĂˇsahĹŻ.",
    icon: "audit",
    cta: {
      label: "CHCI RYCHLĂť AUDIT",
      href: siteConfig.payments.expressAuditHref,
      note: "ExpresnĂ­ rezervace a platba bezpeÄŤnÄ› pĹ™es Stripe.",
      tone: "yellow",
    },
  },
  {
    title: "SOS oprava",
    price: "3 500 KÄŤ",
    description:
      "AkutnĂ­ zĂˇsah, kdyĹľ se rozpadĂˇ checkout, mÄ›Ĺ™enĂ­, Ĺˇablona nebo klĂ­ÄŤovĂˇ ÄŤĂˇst funnelu.",
    icon: "fix",
    cta: {
      label: "CHCI SOS OPRAVU",
      href: siteConfig.payments.sosRepairHref,
      note: "AkutnĂ­ rezervace a platba bezpeÄŤnÄ› pĹ™es Stripe.",
      tone: "yellow",
    },
  },
  {
    title: "SEO optimalizace",
    price: "od 6 500 KÄŤ",
    description:
      "TechnickĂˇ i obsahovĂˇ hygiena, aby e-shop nestĂˇl jen na placenĂ© nĂˇvĹˇtÄ›vnosti.",
    icon: "seo",
    cta: {
      label: "CHCI SEO OPTIMALIZACI",
      href: siteConfig.payments.seoOptimizationHref,
      note: "PĹ™Ă­mĂˇ rezervace a platba bezpeÄŤnÄ› pĹ™es Stripe.",
      tone: "yellow",
    },
  },
  {
    title: "Konzultace",
    price: "900 KÄŤ / hod",
    description:
      "RychlĂ© rozhodnutĂ­ nad UX, akvizicĂ­, platformou, prioritami a dalĹˇĂ­m postupem.",
    icon: "consulting",
  },
  {
    title: "KompletnĂ­ restart",
    price: "od 15 000 KÄŤ",
    description:
      "KdyĹľ je potĹ™eba srovnat design, strukturu, obsah i technickĂ˝ zĂˇklad do jednoho smÄ›ru.",
    icon: "restart",
  },
];

const symptoms: Symptom[] = [
  {
    title: "NĂˇvĹˇtÄ›vnost stojĂ­ penĂ­ze, ale nevydÄ›lĂˇvĂˇ",
    description:
      "Reklamy bÄ›ĹľĂ­, rozpoÄŤet mizĂ­, ale landing nebo koĹˇĂ­k nedokĂˇĹľe nĂˇvĹˇtÄ›vu promÄ›nit v objednĂˇvku.",
    tone: "green",
  },
  {
    title: "MÄ›Ĺ™enĂ­ vypadĂˇ dobĹ™e, realita bolĂ­",
    description:
      "GA4, pixel nebo eventy lĹľou, takĹľe rozhodujeĹˇ podle neĂşplnĂ˝ch nebo chybnĂ˝ch dat.",
    tone: "blue",
  },
  {
    title: "TechnickĂ˝ dluh brzdĂ­ rĹŻst",
    description:
      "PomalĂ© naÄŤĂ­tĂˇnĂ­, rozbitĂ˝ mobil, ĹˇablonovĂ© chyby nebo pluginovĂ˝ chaos niÄŤĂ­ dĹŻvÄ›ru i vĂ˝kon.",
    tone: "green",
  },
  {
    title: "SEO a obsah nemajĂ­ jasnou strukturu",
    description:
      "Kategorie, produktovĂ© strĂˇnky a internĂ­ navigace nepracujĂ­ pro organickĂ˝ rĹŻst, jen zabĂ­rajĂ­ prostor.",
    tone: "blue",
  },
];

const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "AnalĂ˝za zdarma",
    description:
      "Rychle vytĂˇhnu kritickĂˇ mĂ­sta, kterĂˇ dnes stojĂ­ obchod dĹŻvÄ›ru, data nebo objednĂˇvky.",
  },
  {
    step: "02",
    title: "NĂˇvrh Ĺ™eĹˇenĂ­",
    description:
      "DostaneĹˇ srozumitelnĂ˝ plĂˇn priorit, aby bylo jasnĂ©, co opravit hned a co mĂˇ nejvÄ›tĹˇĂ­ dopad.",
  },
  {
    step: "03",
    title: "Implementace",
    description:
      "ZĂˇsah provedu bez zbyteÄŤnĂ© vaty, s dĹŻrazem na rychlost, ÄŤitelnost a reĂˇlnou konverzi.",
  },
];

const evidence: Evidence[] = [
  {
    label: "AnonymizovanĂ˝ zĂˇsah / Shoptet",
    issue: "NejasnĂ˝ produktovĂ˝ detail a slabĂ˝ mobilnĂ­ nĂˇkupnĂ­ tok.",
    outcome:
      "JasnÄ›jĹˇĂ­ CTA, ÄŤistĹˇĂ­ struktura a rychlejĹˇĂ­ cesta k prvnĂ­ objednĂˇvce bez kompletnĂ­ho rebrandu.",
  },
  {
    label: "AnonymizovanĂ˝ zĂˇsah / PrestaShop",
    issue: "RozpadlĂ© mÄ›Ĺ™enĂ­ a nepĹ™esnĂˇ data pro kampanÄ›.",
    outcome:
      "SrovnanĂ˝ tracking, lepĹˇĂ­ orientace ve vĂ˝konu a bezpeÄŤnÄ›jĹˇĂ­ rozhodovĂˇnĂ­ nad rozpoÄŤtem.",
  },
  {
    label: "AnonymizovanĂ˝ zĂˇsah / WooCommerce",
    issue: "SEO obsah existoval, ale nepracoval pro kategorii ani produkt.",
    outcome:
      "SilnÄ›jĹˇĂ­ informaÄŤnĂ­ architektura a obsahovĂ˝ rĂˇmec, kterĂ˝ mĹŻĹľe rĹŻst spolu s obchodem.",
  },
];

const metrics = [
  { value: "24 h", label: "na prvnĂ­ diagnostiku" },
  { value: "5 platforem", label: "kterĂ© Ĺ™eĹˇĂ­m nejÄŤastÄ›ji" },
  { value: "AkutnĂ­ reĹľim", label: "kdyĹľ je problĂ©m teÄŹ" },
];

const dashboardItems = [
  { label: "Checkout flow", score: "68 / 100", tone: "green" },
  { label: "SEO hygiena", score: "41 / 100", tone: "blue" },
  { label: "Rychlost naÄŤtenĂ­", score: "2.8 s", tone: "green" },
  { label: "Tracking", score: "Missing events", tone: "blue" },
];

const platformPills = ["Shoptet", "PrestaShop", "WooCommerce", "WordPress", "Shopify"];
const featuredSymptoms = symptoms.slice(0, 2);
const extraSymptoms = symptoms.slice(2);
const featuredServices = services.slice(0, 3);
const extraServices = services.slice(3);
const featuredEvidence = evidence.slice(0, 1);
const extraEvidence = evidence.slice(1);

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
    <article className={`panel rounded-[1.8rem] border p-5 ${accentClass}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/40">{eyebrow}</p>
      <h3 className="mt-3 text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-base leading-7 text-white/66">{description}</p>
      <p className={`mt-4 text-base font-medium ${noteClass}`}>{note}</p>
      <div className="mt-5">{children}</div>
    </article>
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
      <div className="mb-4 lg:hidden">
        <div className="float-card mb-3 w-fit rounded-2xl border border-red-500/35 bg-black/72 px-4 py-3 text-sm text-white/88 shadow-[0_0_0_1px_rgba(239,68,68,0.14),0_0_28px_rgba(239,68,68,0.18)] backdrop-blur">
          <p className="text-xs uppercase tracking-[0.24em] text-red-300/70">Urgent fix</p>
          <p className="mt-2 font-medium">Checkout friction detected</p>
        </div>

        <div className="float-card-delayed ml-auto w-fit rounded-2xl border border-accent-blue/25 bg-black/60 px-4 py-3 text-sm text-white/80 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.24em] text-white/35">Tracking</p>
          <p className="mt-2 font-medium">2 events missing in funnel</p>
        </div>
      </div>

      <div className="relative mb-5 hidden h-[7.75rem] w-[28rem] max-w-full lg:ml-auto lg:block">
        <div className="float-card absolute left-0 top-0 z-20 w-[15rem] rounded-2xl border border-red-500/35 bg-black/72 px-4 py-3 text-sm text-white/88 shadow-[0_0_0_1px_rgba(239,68,68,0.14),0_0_28px_rgba(239,68,68,0.18)] backdrop-blur">
          <p className="text-xs uppercase tracking-[0.24em] text-red-300/70">Urgent fix</p>
          <p className="mt-2 font-medium">Checkout friction detected</p>
        </div>

        <div className="float-card-delayed absolute left-[13.75rem] top-[3.125rem] z-10 w-[14rem] rounded-2xl border border-accent-blue/25 bg-black/60 px-4 py-3 text-sm text-white/80 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.24em] text-white/35">Tracking</p>
          <p className="mt-2 font-medium">2 events missing in funnel</p>
        </div>
      </div>

      <div className="panel-strong panel-sheen hero-grid relative overflow-hidden rounded-[2rem] border border-white/10 p-6 sm:p-7">
        <div className="scanline pointer-events-none absolute inset-x-[12%] top-0 h-28 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,255,157,0.14)_0%,rgba(0,170,255,0.08)_24%,rgba(0,170,255,0.03)_46%,transparent_72%)] blur-3xl [mask-image:radial-gradient(ellipse_at_center,black_36%,transparent_78%)]" />

        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-[18rem]">
            <p className="text-sm uppercase tracking-[0.28em] text-white/35">
              DiagnostickĂ˝ panel
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-[2.1rem]">
              OperaÄŤnĂ­ pohled na e-shop
            </h2>
          </div>
          <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm text-white/62">
            Live audit mode
          </div>
        </div>

        <div className="mt-8 rounded-[1.6rem] border border-white/8 bg-[#091018]/90 p-5">
          <div className="flex items-center justify-between text-sm uppercase tracking-[0.22em] text-white/35">
            <span>Pulse of the store</span>
            <span className="text-accent-green">Monitoring active</span>
          </div>

          <div className="mt-5 overflow-hidden rounded-2xl border border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-4">
            <svg viewBox="0 0 320 100" className="h-28 w-full" aria-hidden="true">
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

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {dashboardItems.map((item) => (
              <div
                key={item.label}
                className={`rounded-2xl border px-4 py-4 ${
                  item.tone === "green"
                    ? "border-accent-green/20 bg-accent-green/6"
                    : "border-accent-blue/20 bg-accent-blue/6"
                }`}
              >
                <p className="text-base text-white/55">{item.label}</p>
                <p className="mt-2 text-xl font-semibold text-white">{item.score}</p>
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
    <article className="panel group flex h-full flex-col rounded-[1.8rem] border border-white/8 p-6 transition duration-300 hover:-translate-y-1 hover:border-accent-green/30 hover:bg-white/[0.05]">
      <div className="flex items-start justify-between gap-4">
        <div className="glow-green flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-green/10 text-accent-green transition duration-300 group-hover:scale-105">
          <ServiceIcon icon={icon} />
        </div>
        <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-sm text-white/62">
          {price}
        </span>
      </div>
      <h3 className="mt-6 text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-4 text-base leading-7 text-white/60">{description}</p>
      {cta ? (
        <div className="mt-auto pt-6 space-y-3">
          <a
            href={cta.href}
            className={`inline-flex min-h-11 w-full items-center justify-center rounded-xl px-4 py-3 text-center text-[0.8rem] font-bold tracking-[0.06em] transition hover:-translate-y-0.5 ${ctaClass}`}
          >
            {cta.label}
          </a>
          {cta.note ? <p className="text-sm text-white/48">{cta.note}</p> : null}
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
    <article className={`panel rounded-[1.8rem] border p-6 ${toneClass}`}>
      <div className="flex items-center gap-3">
        <span
          className={`h-3 w-3 rounded-full ${
            tone === "green" ? "bg-accent-green" : "bg-accent-blue"
          }`}
        />
        <p className="text-sm uppercase tracking-[0.24em] text-white/35">PrvnĂ­ nĂˇlez</p>
      </div>
      <h3 className="mt-5 text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-4 text-base leading-7 text-white/60">{description}</p>
    </article>
  );
}

function ProcessCard({ step, title, description }: ProcessStep) {
  return (
    <article className="panel rounded-[1.8rem] border border-white/8 p-6">
      <div className="flex items-center gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-accent-green/20 bg-accent-green/10 text-base font-semibold text-accent-green">
          {step}
        </span>
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
      </div>
      <p className="mt-5 text-base leading-7 text-white/60">{description}</p>
    </article>
  );
}

function EvidenceCard({ label, issue, outcome }: Evidence) {
  return (
    <article className="panel rounded-[1.8rem] border border-white/8 p-6">
      <p className="text-sm uppercase tracking-[0.24em] text-white/35">{label}</p>
      <div className="mt-5 space-y-4">
        <div>
          <p className="text-base text-white/42">Situace</p>
          <p className="mt-2 text-base leading-7 text-white/76">{issue}</p>
        </div>
        <div>
          <p className="text-base text-accent-green">Posun po zĂˇsahu</p>
          <p className="mt-2 text-base leading-7 text-white/76">{outcome}</p>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <div id="top" className="relative overflow-hidden">
      <NetworkBackground />

      <main className="relative z-10 pb-20 pt-6 md:pt-10">
        <section className="mx-auto w-full max-w-7xl px-6 pb-20 sm:px-10 lg:px-12">
          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.03fr)_minmax(22rem,0.97fr)] lg:gap-12 xl:grid-cols-[minmax(0,1.06fr)_minmax(24rem,0.94fr)]">
            <div className="max-w-none lg:pr-4 xl:pr-8">
              <div className="glow-blue inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70">
                <span className="h-2.5 w-2.5 rounded-full bg-accent-green" />
                AkutnĂ­ diagnostika e-shopĹŻ do 24 hodin
              </div>

              <p className="mt-8 text-base font-semibold uppercase tracking-[0.3em] text-white/34">
                E-shop Medic
              </p>
              <h1 className="mt-5 max-w-[11ch] font-display text-4xl font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[3rem] sm:leading-[1.02] lg:text-[3.5rem] lg:leading-[0.99] xl:text-[3.85rem]">
                KdyĹľ e-shop krvĂˇcĂ­ vĂ˝konem, nestaÄŤĂ­ hezkĂ˝ text. PotĹ™ebuje zĂˇsah.
              </h1>
              <p className="mt-6 max-w-3xl text-xl font-semibold text-accent-green sm:text-2xl">
                TechnickĂ˝ audit, UX diagnostika a rychlĂˇ stabilizace pro e-shopy, kterĂ© majĂ­
                potenciĂˇl, ale ztrĂˇcejĂ­ penĂ­ze v tichosti.
              </p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/62 sm:text-lg">
                ĹeĹˇĂ­m situace, kdy traffic stojĂ­ penĂ­ze, ale checkout drhne, data lĹľou, SEO
                nepomĂˇhĂˇ a dĹŻvÄ›ra je slabĹˇĂ­, neĹľ by mÄ›la bĂ˝t. NejdĹ™Ă­v najdeme kritickĂ© mĂ­sto, pak
                opravĂ­me to, co mĂˇ nejvÄ›tĹˇĂ­ dopad.
              </p>

              <div className="mt-8 grid gap-4 xl:grid-cols-2">
                <AuditOptionCard
                  eyebrow="Varianta A / Free"
                  title="Audit zdarma"
                  description="OmezenĂ˝ vstupnĂ­ rozsah pro prvnĂ­ orientaci, kdyĹľ nechceĹˇ Ĺ™eĹˇit problĂ©m naslepo."
                  note="ÄŚekacĂ­ doba 3â€“5 dnĂ­, omezenĂ˝ rozsah."
                  accent="green"
                >
                  <a
                    href="#audit-zdarma-form"
                    className="inline-flex min-h-10 items-center justify-center rounded-full border border-accent-green/22 bg-accent-green px-4 py-2 text-sm font-semibold text-black transition hover:translate-y-[-1px]"
                  >
                    AUDIT ZDARMA
                  </a>
                  <p className="mt-3 text-sm text-white/48">ZbĂ˝vajĂ­ 3 mĂ­sta v pomalejĹˇĂ­m reĹľimu.</p>
                </AuditOptionCard>

                <AuditOptionCard
                  eyebrow="Varianta B / Paid"
                  title="Express Medic Audit"
                  description="PlacenĂˇ priorita pro e-shopy, kde je problĂ©m draĹľĹˇĂ­ neĹľ ÄŤekĂˇnĂ­."
                  note="Garance do 24 hodin, hloubkovĂˇ analĂ˝za + 15min konzultace."
                  accent="yellow"
                >
                  <CheckoutButton
                    label="CHCI EXPRESS AUDIT DO 24 HODIN (1 500 KÄŤ)"
                    className="w-full justify-center rounded-xl bg-[#ffdd00] px-4 py-3 text-center text-sm font-bold text-black shadow-[0_18px_42px_rgba(255,221,0,0.18)] hover:bg-[#ffe44d]"
                  />
                  <p className="mt-3 text-sm text-white/48">Platba probĂ­hĂˇ bezpeÄŤnÄ› pĹ™es Stripe.</p>
                </AuditOptionCard>
              </div>

              <div className="panel mt-10 rounded-[2rem] border border-white/10 px-5 py-6 sm:px-6 sm:py-7">
                <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/35">
                      Kde a jak zasahuju
                    </p>
                    <h3 className="mt-3 max-w-xl text-2xl font-semibold text-white sm:text-[2rem]">
                      Nejčastěji Shoptet, PrestaShop, WooCommerce, WordPress a Shopify.
                    </h3>
                    <p className="mt-4 max-w-xl text-base leading-7 text-white/62">
                      Tohle jsou prostředí, kde nejčastěji hledám, kudy utíkají objednávky, data
                      nebo důvěra v prvních vteřinách. Není to dekorace, ale rychlá orientace,
                      v čem se typicky pohybuju.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2.5">
                      {platformPills.map((platform) => (
                        <span
                          key={platform}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm text-white/72"
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/35">
                        Co čekat po prvním kontaktu
                      </p>
                      <div className="mt-4 grid gap-3 sm:grid-cols-3">
                        {metrics.map((item) => (
                          <div
                            key={item.value}
                            className="rounded-[1.35rem] border border-white/8 bg-white/[0.03] px-4 py-4"
                          >
                            <p className="text-2xl font-semibold text-white">{item.value}</p>
                            <p className="mt-2 text-sm leading-6 text-white/48">{item.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[1.6rem] border border-white/8 bg-white/[0.03] px-5 py-5">
                      <div className="flex items-start gap-4">
                        <Image
                          src="/logo-mark.png"
                          alt="Witdesign"
                          width={72}
                          height={72}
                          className="mt-1 h-12 w-12 shrink-0 drop-shadow-[0_0_18px_rgba(16,240,160,0.16)]"
                        />
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/35">
                              Studio / přímý kontakt
                            </p>
                            <p className="mt-2 text-2xl font-semibold text-white">
                              Bez přeposílání mezi accounty. Zásah držím osobně.
                            </p>
                          </div>
                          <p className="max-w-2xl text-base leading-7 text-white/62">
                            Když e-shop zlobí, nechceš čekat na kolečko mezi projektovým
                            manažerem, vývojem a marketingem. Potřebuješ člověka, který problém
                            rychle najde a dovede ho do opravy.
                          </p>
                          <div className="flex flex-wrap gap-3">
                            <ProtectedEmailLink
                              ariaLabel="Poslat e-mail"
                              fallbackText="Zobrazit e-mail"
                              showAddress
                              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm text-white/78 transition hover:border-accent-blue/35 hover:text-white"
                              prefix={<MailIcon className="h-4 w-4" />}
                            />
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm text-white/60">
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
            </div>

            <DiagnosticPanel />
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 pb-16 sm:px-10 lg:px-12">
          <div className="mb-10 max-w-3xl">
            <p className="text-base font-semibold uppercase tracking-[0.24em] text-white/35">
              Kdy volat medika
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Tohle jsou symptomy, kterĂ© obvykle najdu bÄ›hem prvnĂ­ch 15 minut.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {featuredSymptoms.map((symptom) => (
              <SymptomCard key={symptom.title} {...symptom} />
            ))}
          </div>

          {extraSymptoms.length > 0 ? (
            <MoreDetails label="VĂ­ce symptomĹŻ">
              <div className="grid gap-5 md:grid-cols-2">
                {extraSymptoms.map((symptom) => (
                  <SymptomCard key={symptom.title} {...symptom} />
                ))}
              </div>
            </MoreDetails>
          ) : null}
        </section>

        <section id="sluzby" className="mx-auto w-full max-w-7xl px-6 pb-16 sm:px-10 lg:px-12">
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-base font-semibold uppercase tracking-[0.24em] text-white/35">
                SluĹľby
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                ZĂˇsahy od rychlĂ© prvnĂ­ pomoci po kompletnĂ­ restart.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-white/55">
              KaĹľdĂˇ sluĹľba mĂ­Ĺ™Ă­ na jinĂ˝ typ bolesti. NÄ›kdy staÄŤĂ­ pĹ™esnĂˇ diagnĂłza, jindy je potĹ™eba
              akutnĂ­ technickĂ˝ zĂˇsah nebo srovnĂˇnĂ­ celĂ© prezentace obchodu.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {featuredServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          {extraServices.length > 0 ? (
            <MoreDetails label="DalĹˇĂ­ sluĹľby">
              <div className="grid gap-5 lg:grid-cols-2">
                {extraServices.map((service) => (
                  <ServiceCard key={service.title} {...service} />
                ))}
              </div>
            </MoreDetails>
          ) : null}
        </section>

        <section id="proces" className="mx-auto w-full max-w-7xl px-6 pb-16 sm:px-10 lg:px-12">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="panel-strong rounded-[2rem] border border-white/10 px-6 py-8 sm:px-8 sm:py-10">
              <p className="text-base font-semibold uppercase tracking-[0.24em] text-white/35">
                Jak to probĂ­hĂˇ
              </p>
              <div className="mt-8 grid gap-4">
                {processSteps.map((item) => (
                  <ProcessCard key={item.step} {...item} />
                ))}
              </div>
            </div>

            <div className="panel rounded-[2rem] border border-white/10 px-6 py-8 sm:px-8 sm:py-10">
              <p className="text-base font-semibold uppercase tracking-[0.24em] text-white/35">
                Co dostaneĹˇ do ruky
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                Ne pocit. KonkrĂ©tnĂ­ orientaci.
              </h2>
              <div className="mt-8 space-y-4">
                {[
                  "PrioritizovanĂ˝ seznam problĂ©mĹŻ od kritickĂ˝ch po kosmetickĂ©.",
                  "JasnĂ© doporuÄŤenĂ­, co opravit hned a co mĹŻĹľe poÄŤkat.",
                  "SmÄ›r pro design, UX, obsah i technickou hygienu.",
                  "Kontext, proÄŤ problĂ©m vznikĂˇ a kde pĹ™esnÄ› bolĂ­ vĂ˝kon obchodu.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4"
                  >
                    <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-blue/12 text-accent-blue">
                      +
                    </span>
                    <p className="text-base leading-7 text-white/72">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 pb-16 sm:px-10 lg:px-12">
          <div className="mb-10 max-w-3xl">
            <p className="text-base font-semibold uppercase tracking-[0.24em] text-white/35">
              DĹŻvÄ›ra bez pĹ™ikrĂˇĹˇlovĂˇnĂ­
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              TypickĂ© situace, kterĂ© Ĺ™eĹˇĂ­m v anonymizovanĂ© podobÄ›.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-1">
            {featuredEvidence.map((item) => (
              <EvidenceCard key={item.label} {...item} />
            ))}
          </div>

          {extraEvidence.length > 0 ? (
            <MoreDetails label="VĂ­ce ukĂˇzek">
              <div className="grid gap-5 lg:grid-cols-2">
                {extraEvidence.map((item) => (
                  <EvidenceCard key={item.label} {...item} />
                ))}
              </div>
            </MoreDetails>
          ) : null}
        </section>

        <section id="kontakt" className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="panel-strong rounded-[2.2rem] border border-white/10 px-6 py-10 sm:px-10 sm:py-14">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-base font-semibold uppercase tracking-[0.24em] text-white/35">
                  NezĂˇvaznĂˇ analĂ˝za
                </p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  PrvnĂ­ dojem z webu musĂ­ pĹŻsobit jistÄ›. StejnÄ› jako prvnĂ­ zĂˇsah.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-white/58 sm:text-lg">
                  PoĹˇli URL svĂ©ho e-shopu. PodĂ­vĂˇm se na technickĂ˝ stav, UX tĹ™enĂ­ i prvnĂ­ dojem a
                  vrĂˇtĂ­m ti rychlou orientaci, kde obchod ztrĂˇcĂ­ nejvĂ­c.
                </p>
              </div>

              <div
                id="audit-zdarma-form"
                className="rounded-[1.8rem] border border-white/8 bg-[#0a1118]/88 p-5 sm:p-6"
              >
                <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-base font-semibold uppercase tracking-[0.22em] text-white/35">
                      Varianta A / zdarma
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      Audit zdarma s ÄŤekacĂ­ dobou 3â€“5 dnĂ­
                    </p>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm text-white/58">
                    OmezenĂ˝ rozsah
                  </div>
                </div>
                <LeadCaptureForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
