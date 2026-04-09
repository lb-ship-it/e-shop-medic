export default function PortfolioPage() {
  const cases = [
    {
      title: "Audit nákupního toku",
      text: "Rychlá diagnostika míst, kde e-shop ztrácí objednávky kvůli tření v detailu produktu a checkoutu.",
    },
    {
      title: "Stabilizace trackingu",
      text: "Srovnání měření a eventů, aby rozhodování nad kampaněmi nestálo na zkreslených datech.",
    },
    {
      title: "Obsah a SEO struktura",
      text: "Nastavení kategorií, interních vazeb a obsahového rámce pro dlouhodobější organický růst.",
    },
  ];

  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-10 lg:px-12">
      <section className="mb-8 max-w-3xl">
        <p className="text-[0.82rem] font-semibold uppercase tracking-[0.22em] text-white/35 sm:text-sm">
          Portfolio
        </p>
        <h1 className="mt-3 font-display text-[1.7rem] tracking-tight text-white sm:text-[2.3rem]">
          Typy zásahů, které dávají e-shopům rychlý klid
        </h1>
        <p className="mt-4 text-[0.94rem] leading-7 text-white/64">
          Část realizací sdílím jen v anonymizované podobě, protože řeším interní výkon, data nebo
          technické problémy. Tohle jsou nejčastější scénáře, se kterými pomáhám.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {cases.map((item) => (
          <article
            key={item.title}
            className="panel rounded-[1.4rem] border border-white/8 p-5"
          >
            <p className="text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-white/35 sm:text-[0.84rem]">
              Case type
            </p>
            <h2 className="mt-3.5 text-[1.02rem] font-semibold text-white sm:text-[1.24rem]">{item.title}</h2>
            <p className="mt-3 text-[0.92rem] leading-6 text-white/62">{item.text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
