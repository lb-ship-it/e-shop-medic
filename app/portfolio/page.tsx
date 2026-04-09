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
    <main className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 lg:px-12">
      <section className="mb-10 max-w-3xl">
        <p className="text-base font-semibold uppercase tracking-[0.24em] text-white/35">
          Portfolio
        </p>
        <h1 className="mt-4 font-display text-3xl tracking-tight text-white sm:text-4xl">
          Typy zásahů, které dávají e-shopům rychlý klid
        </h1>
        <p className="mt-5 text-base leading-8 text-white/64">
          Část realizací sdílím jen v anonymizované podobě, protože řeším interní výkon, data nebo
          technické problémy. Tohle jsou nejčastější scénáře, se kterými pomáhám.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {cases.map((item) => (
          <article
            key={item.title}
            className="panel rounded-[1.8rem] border border-white/8 p-6"
          >
            <p className="text-base font-semibold uppercase tracking-[0.2em] text-white/35">
              Case type
            </p>
            <h2 className="mt-5 text-xl font-semibold text-white sm:text-[1.6rem]">{item.title}</h2>
            <p className="mt-4 text-base leading-7 text-white/62">{item.text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
