import { ProtectedEmailLink } from "@/components/protected-email-link";
import { siteConfig } from "@/lib/site-config";

export default function GdprPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-10 lg:px-12">
      <section className="panel-strong rounded-[1.55rem] border border-white/10 px-5 py-6 sm:px-7 sm:py-8">
        <p className="text-[0.82rem] font-semibold uppercase tracking-[0.22em] text-white/35 sm:text-sm">
          Ochrana osobních údajů
        </p>
        <h1 className="mt-3 font-display text-[1.7rem] tracking-tight text-white sm:text-[2.3rem]">
          Jak pracuji s údaji z poptávky
        </h1>
        <p className="mt-4 text-[0.82rem] leading-6 text-white/48 sm:text-[0.88rem]">
          Správce: {siteConfig.contact.operatorName}, IČO: {siteConfig.contact.ico},{" "}
          {siteConfig.contact.legalStatus}.
        </p>
        <div className="mt-6 space-y-5 text-[0.94rem] leading-7 text-white/68">
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
