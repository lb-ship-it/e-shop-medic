export const siteConfig = {
  brand: {
    name: "E-shop Medic",
    domain: "witdesign.cz",
    description:
      "Diagnostika, stabilizace a rychlé zásahy pro e-shopy, které chtějí růst bez slepých míst.",
    studioBlurb:
      "Witdesign navrhuje, audituje a opravuje e-shopy se zaměřením na výkon, důvěru a konverze.",
  },
  contact: {
    operatorName: "Ladislav Blecha",
    legalStatus: "fyzická osoba zapsaná v živnostenském rejstříku",
    ctaLabel: "Audit zdarma",
    ctaHref: "/#kontakt",
    emailLabel: "Napsat e-mail",
    emailLocalEncoded: "bGJsZWNoYQ==",
    emailDomainEncoded: "d2l0ZGVzaWdu",
    emailTldEncoded: "Y3o=",
    phoneDisplay: null as string | null,
    phoneHref: null as string | null,
    whatsappHref: null as string | null,
    linkedInHref: null as string | null,
    location: "Působím po celé ČR",
    cityLine: "Online / celá ČR",
    ico: "01670816",
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
  footer: {
    copyright: "© 2026 witdesign.cz",
  },
} as const;

export function getHeaderContactLabel() {
  return siteConfig.contact.phoneDisplay ?? siteConfig.contact.emailLabel;
}

export function getBottomNavPrimaryLabel() {
  return siteConfig.contact.phoneHref ? "Volat" : "E-mail";
}

export function getBottomNavSecondaryLabel() {
  return siteConfig.contact.whatsappHref ? "WhatsApp" : "Kontakt";
}

export function getBottomNavSecondaryHref() {
  return siteConfig.contact.whatsappHref ?? siteConfig.contact.ctaHref;
}
