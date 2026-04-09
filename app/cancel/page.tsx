import Link from "next/link";

export default function CancelPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl items-center px-5 py-10 sm:px-10">
      <section className="panel-strong w-full rounded-[1.55rem] p-6 sm:p-8">
        <p className="text-[0.82rem] uppercase tracking-[0.2em] text-white/48 sm:text-sm">Platba zrušena</p>
        <h1 className="mt-3 font-display text-[1.7rem] tracking-tight text-white sm:text-[2.3rem]">
          Zákazník checkout opustil a může se vrátit zpět.
        </h1>
        <p className="mt-4 max-w-2xl text-[0.94rem] leading-7 text-white/62">
          Tohle je bezpečný návrat po zrušené nebo nedokončené platbě. Později sem můžeme přidat
          remarketing, FAQ nebo lehčí nabídku pro návrat do nákupu.
        </p>

        <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-[0.92rem] font-medium text-background transition hover:opacity-90"
          >
            Zkusit to znovu
          </Link>
          <Link
            href="/#sluzby"
            className="inline-flex items-center justify-center rounded-full border border-white/10 px-5 py-2.5 text-[0.92rem] font-medium text-foreground transition hover:bg-white/6"
          >
            Vrátit se ke službám
          </Link>
        </div>
      </section>
    </main>
  );
}
