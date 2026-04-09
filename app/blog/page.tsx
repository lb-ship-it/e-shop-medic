export default function BlogPage() {
  const posts = [
    "Jak poznat, že e-shop ztrácí peníze už na první obrazovce",
    "Co zkontrolovat dřív: checkout, tracking nebo rychlost načítání",
    "Proč slabá struktura kategorií dusí SEO i konverzi zároveň",
  ];

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-10 lg:px-12">
      <section className="mb-10 max-w-3xl">
        <p className="text-base font-semibold uppercase tracking-[0.24em] text-white/35">
          Blog
        </p>
        <h1 className="mt-4 font-display text-3xl tracking-tight text-white sm:text-4xl">
          Praktické poznámky z auditů a oprav e-shopů
        </h1>
        <p className="mt-5 text-base leading-8 text-white/64">
          Blog je připravený pro články, které vysvětlí nejčastější problémy s výkonem, UX a
          důvěrou v e-commerce. První témata už čekají na rozpracování.
        </p>
      </section>

      <section className="space-y-4">
        {posts.map((post, index) => (
          <article
            key={post}
            className="panel flex flex-col gap-4 rounded-[1.6rem] border border-white/8 px-6 py-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="text-base uppercase tracking-[0.22em] text-white/35">
                Téma {index + 1}
              </p>
              <h2 className="mt-3 text-xl font-semibold text-white sm:text-[1.6rem]">{post}</h2>
            </div>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-base text-white/64">
              Připravujeme
            </span>
          </article>
        ))}
      </section>
    </main>
  );
}
