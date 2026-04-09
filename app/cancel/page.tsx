import Link from "next/link";

export default function CancelPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl items-center px-6 py-12 sm:px-10">
      <section className="panel-strong w-full rounded-[34px] p-8 sm:p-10">
        <p className="text-base uppercase tracking-[0.22em] text-white/48">Platba zrušena</p>
        <h1 className="mt-4 font-display text-3xl tracking-tight text-white sm:text-4xl">
          Zákazník checkout opustil a může se vrátit zpět.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/62">
          Tohle je bezpečný návrat po zrušené nebo nedokončené platbě. Později sem můžeme přidat
          remarketing, FAQ nebo lehčí nabídku pro návrat do nákupu.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-base font-medium text-background transition hover:opacity-90"
          >
            Zkusit to znovu
          </Link>
          <Link
            href="/#sluzby"
            className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-base font-medium text-foreground transition hover:bg-white/6"
          >
            Vrátit se ke službám
          </Link>
        </div>
      </section>
    </main>
  );
}
