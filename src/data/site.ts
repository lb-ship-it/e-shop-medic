const nbsp = "\u00A0";
const price1500 = `1${nbsp}500${nbsp}Kč`;
const price3500 = `3${nbsp}500${nbsp}Kč`;
const price6500 = `6${nbsp}500${nbsp}Kč`;
const price15000 = `15${nbsp}000${nbsp}Kč`;
const price900Hour = `900${nbsp}Kč${nbsp}/${nbsp}hod`;
const fromPrice = (price: string) => `od${nbsp}${price}`;
const forPrice = (price: string) => `za${nbsp}${price}`;
const withinHours = `24${nbsp}h`;
const withinTwentyFourHours = `24${nbsp}hodin`;

export const site = {
  brand: {
    name: "E-shop Medic",
    domain: "witdesign.cz",
    siteUrl: "https://witdesign.cz",
    title: "E-shop Medic | Diagnostika a rychlé zásahy pro e-shopy",
    description:
      "Diagnostika, stabilizace a rychlé zásahy pro e-shopy, které chtějí růst bez slepých míst.",
    heroTitle: "Krvácející e-shop potřebuje zásah",
    heroLead:
      "Technický audit, UX diagnostika a rychlá stabilizace pro e-shopy, které mají potenciál, ale ztrácejí peníze v tichosti.",
    heroBody:
      "Řeším situace, kdy traffic stojí peníze, ale checkout drhne, data lžou, SEO nepomáhá a důvěra je slabší, než by měla být. Nejdřív najdeme kritické místo, pak opravíme to, co má největší dopad.",
  },
  contact: {
    operatorName: "Ladislav Blecha",
    email: "lblecha@witdesign.cz",
    location: "Letkov / Plzeň a celá ČR",
    registeredOffice: "Hlohová 367, 326 00 Letkov",
    ico: "01670816",
    legalStatus: "Fyzická osoba zapsaná v živnostenském rejstříku",
    vatStatus: "Nejsem plátce DPH",
  },
  payments: {
    expressAuditHref: "https://buy.stripe.com/fZu8wR7VR6Q38vb6912VG00",
    sosRepairHref: "https://buy.stripe.com/14A7sN2BxeivbHn0OH2VG01",
    seoOptimizationHref: "https://buy.stripe.com/dRm14pdgbfmz3aR2WP2VG02",
  },
  legal: {
    privacyHref: "/gdpr",
    termsHref: "/vop",
  },
  platforms: ["Shoptet", "PrestaShop", "WooCommerce", "WordPress", "Shopify"],
  metrics: [
    { value: withinHours, label: "na první diagnostiku" },
    { value: "5 platforem", label: "řeším nejčastěji" },
    { value: "Akutní režim", label: "když je problém hned" },
  ],
  quickActions: [
    {
      label: `Audit do ${withinHours}`,
      helper: `Hloubkový audit ${forPrice(price1500)}`,
      href: "https://buy.stripe.com/fZu8wR7VR6Q38vb6912VG00",
    },
    {
      label: "SOS oprava",
      helper: `Urgentní zásah ${forPrice(price3500)}`,
      href: "https://buy.stripe.com/14A7sN2BxeivbHn0OH2VG01",
    },
    {
      label: "SEO optimalizace",
      helper: `Rezervace práce ${fromPrice(price6500)}`,
      href: "https://buy.stripe.com/dRm14pdgbfmz3aR2WP2VG02",
    },
  ],
  symptoms: [
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
  ],
  services: [
    {
      title: "Rychlý audit",
      price: price1500,
      description:
        `Do ${withinTwentyFourHours} dostaneš jasný seznam největších úniků, priorit a doporučených zásahů.`,
      icon: "audit",
      ctaLabel: `Audit ${price1500}`,
      ctaHref: "https://buy.stripe.com/fZu8wR7VR6Q38vb6912VG00",
      note: `Rezervace auditu ${forPrice(price1500)} s výstupem do ${withinHours}.`,
    },
    {
      title: "SOS oprava",
      price: price3500,
      description:
        "Akutní zásah, když se rozpadá checkout, měření, šablona nebo důležitý krok objednávky.",
      icon: "fix",
      ctaLabel: "Urgentní zásah",
      ctaHref: "https://buy.stripe.com/14A7sN2BxeivbHn0OH2VG01",
      note: `Rezervuješ akutní zásah ${forPrice(price3500)}.`,
    },
    {
      title: "SEO optimalizace",
      price: fromPrice(price6500),
      description:
        "Technická i obsahová hygiena, aby e-shop nestál jen na placené návštěvnosti.",
      icon: "seo",
      ctaLabel: "SEO zásah",
      ctaHref: "https://buy.stripe.com/dRm14pdgbfmz3aR2WP2VG02",
      note: `Rezervuješ SEO optimalizaci ${fromPrice(price6500)}.`,
    },
    {
      title: "Konzultace",
      price: price900Hour,
      description:
        "Rychlé rozhodnutí nad UX, akvizicí, platformou, prioritami a dalším postupem.",
      icon: "consulting",
    },
    {
      title: "Kompletní restart",
      price: fromPrice(price15000),
      description:
        "Když je potřeba srovnat design, strukturu, obsah i technický základ do jednoho směru.",
      icon: "restart",
    },
  ],
  process: [
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
  ],
  deliverables: [
    "Prioritizovaný seznam problémů od kritických po kosmetické.",
    "Jasné doporučení, co opravit hned a co může počkat.",
    "Směr pro design, UX, obsah i technickou hygienu.",
    "Kontext, proč problém vzniká a kde přesně bolí výkon obchodu.",
  ],
  diagnostic: {
    title: "Operační pohled na e-shop",
    pulseLabel: "Pulse of the store",
    modeLabel: "Live audit mode",
    statusLabel: "Monitoring active",
    cards: [
      { label: "Checkout flow", score: "68 / 100", tone: "green" },
      { label: "SEO hygiena", score: "41 / 100", tone: "blue" },
      { label: "Rychlost načtení", score: "2.8 s", tone: "green" },
      { label: "Tracking", score: "Chybí 2 události", tone: "blue" },
    ],
  },
} as const;

export type ServiceIcon = (typeof site.services)[number]["icon"];
