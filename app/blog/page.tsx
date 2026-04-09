export default function BlogPage() {
  const posts = [
    "Jak poznat, že e-shop ztrácí peníze už na první obrazovce",
    "Co zkontrolovat dřív: checkout, tracking nebo rychlost načítání",
    "Proč slabá struktura kategorií dusí SEO i konverzi zároveň",
  ];

  return (
    <main className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-10 lg:px-12">
      <section className="mb-8 max-w-3xl">
        <p className="text-[0.82rem] font-semibold uppercase tracking-[0.22em] text-white/35 sm:text-sm">
          Blog
        </p>
        <h1 className="mt-3 font-display text-[1.7rem] tracking-tight text-white sm:text-[2.3rem]">
          Praktické poznámky z auditů a oprav e-shopů
        </h1>
        <p className="mt-4 text-[0.94rem] leading-7 text-white/64">
          Blog je připravený pro články, které vysvětlí nejčastější problémy s výkonem, UX a
          důvěrou v e-commerce. První témata už čekají na rozpracování.
        </p>
      </section>

      <section className="space-y-4">
        {posts.map((post, index) => (
          <article
            key={post}
            className="panel flex flex-col gap-3 rounded-[1.3rem] border border-white/8 px-5 py-5 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="text-[0.8rem] uppercase tracking-[0.2em] text-white/35 sm:text-[0.84rem]">
                Téma {index + 1}
              </p>
              <h2 className="mt-2.5 text-[1.02rem] font-semibold text-white sm:text-[1.24rem]">{post}</h2>
            </div>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[0.9rem] text-white/64">
              Připravujeme
            </span>
          </article>
        ))}
      </section>
    </main>
  );
}
