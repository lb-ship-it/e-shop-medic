import { ProtectedEmailLink } from "@/components/protected-email-link";
import { siteConfig } from "@/lib/site-config";

export default function GdprPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-16 sm:px-10 lg:px-12">
      <section className="panel-strong rounded-[2rem] border border-white/10 px-6 py-8 sm:px-8 sm:py-10">
        <p className="text-base font-semibold uppercase tracking-[0.24em] text-white/35">
          Ochrana osobních údajů
        </p>
        <h1 className="mt-4 font-display text-4xl tracking-tight text-white sm:text-5xl">
          Jak pracuji s údaji z poptávky
        </h1>
        <p className="mt-5 text-sm leading-7 text-white/48">
          Správce: {siteConfig.contact.operatorName}, IČO: {siteConfig.contact.ico},{" "}
          {siteConfig.contact.legalStatus}.
        </p>
        <div className="mt-8 space-y-6 text-base leading-8 text-white/68">
          <p>
            Pokud odešleš e-mail nebo URL svého e-shopu přes kontaktní formulář, zpracovávám jen
            údaje potřebné k tomu, abych mohl odpovědět na poptávku a navrhnout další postup.
          </p>
          <p>
            Typicky jde o kontaktní e-mail, adresu webu a případné informace, které dobrovolně
            doplníš v komunikaci. Tyto údaje neslouží k dalšímu prodeji, nepředávám je třetím
            stranám bez důvodu a používám je pouze pro vyřízení poptávky nebo navazující spolupráci.
          </p>
          <p>
            Pokud si budeš přát údaje upravit nebo smazat, napiš na{" "}
            <ProtectedEmailLink
              ariaLabel="Poslat e-mail"
              fallbackText="kontaktní e-mail"
              showAddress
              className="text-accent-green transition hover:text-white"
            />
            .
          </p>
          <p>
            Tento text je základní provozní informace pro návštěvníky webu. Pokud bude web
            napojený na CRM, newsletter nebo pokročilejší analytiku, zásady ochrany osobních údajů
            rozšířím o konkrétní seznam nástrojů a právní tituly zpracování.
          </p>
        </div>
      </section>
    </main>
  );
}
