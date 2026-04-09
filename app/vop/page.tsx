import { siteConfig } from "@/lib/site-config";

export default function TermsPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-10 lg:px-12">
      <section className="panel-strong rounded-[1.55rem] border border-white/10 px-5 py-6 sm:px-7 sm:py-8">
        <p className="text-[0.82rem] font-semibold uppercase tracking-[0.22em] text-white/35 sm:text-sm">
          Všeobecné obchodní podmínky
        </p>
        <h1 className="mt-3 font-display text-[1.7rem] tracking-tight text-white sm:text-[2.3rem]">
          Jednoduchý rámec spolupráce
        </h1>
        <p className="mt-4 text-[0.82rem] leading-6 text-white/48 sm:text-[0.88rem]">
          Poskytovatel služeb: {siteConfig.contact.operatorName}, IČO: {siteConfig.contact.ico},{" "}
          {siteConfig.contact.legalStatus}.
        </p>
        <div className="mt-6 space-y-5 text-[0.94rem] leading-7 text-white/68">
          <p>
            Spolupráce obvykle začíná úvodní analýzou nebo nezávaznou poptávkou. Na základě zadání
            připravím doporučení dalšího postupu, rozsah prací a orientační cenu.
          </p>
          <p>
            Pokud se domluvíme na realizaci, potvrzení probíhá e-mailem nebo jinou prokazatelnou
            formou. Každý zásah má vlastní rozsah, termín a způsob předání, který si odsouhlasíme
            předem.
          </p>
          <p>
            U rychlých auditů a jednorázových zásahů je výstupem typicky seznam priorit, návrh
            úprav nebo samotná implementace do dohodnutého rozsahu. U větších projektů následuje
            samostatná nabídka nebo etapizace.
          </p>
          <p>
            Pokud je potřeba přístup do systému, e-shopu nebo reklamních účtů, pracuji pouze s
            údaji, které jsou nutné pro provedení domluveného zásahu. Přístupy po dokončení
            spolupráce nemažu automaticky ze strany klienta, proto doporučuji jejich následnou
            změnu.
          </p>
        </div>
      </section>
    </main>
  );
}
