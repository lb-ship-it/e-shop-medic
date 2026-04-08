import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl items-center px-6 py-12 sm:px-10">
      <section className="surface-strong w-full rounded-[34px] p-8 sm:p-10">
        <p className="text-sm uppercase tracking-[0.22em] text-muted">Platba dokončena</p>
        <h1 className="mt-4 font-display text-4xl tracking-tight text-foreground">
          Stripe vrátil zákazníka zpět do aplikace.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
          Tohle je úspěšná návratová stránka po zaplacení. Další krok bude napojit objednávky,
          e-mail a fulfillment podle toho, jak bude e-shop-medic fungovat v ostrém provozu.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:opacity-90"
          >
            Zpět na homepage
          </Link>
          <Link
            href="/#sluzby"
            className="inline-flex items-center justify-center rounded-full border border-line px-6 py-3 text-sm font-medium text-foreground transition hover:bg-white/60"
          >
            Projít další sekce
          </Link>
        </div>
      </section>
    </main>
  );
}
