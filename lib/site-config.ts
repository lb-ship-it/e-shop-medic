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
    // Inferred from a public business-register result for Ladislav Blecha.
    // Confirm before treating this as final legal data.
    ico: "65816382",
  },
  payments: {
    expressAuditHref: "https://buy.stripe.com/fZu8wR7VR6Q38vb6912VG00",
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
