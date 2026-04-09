# E-shop Medic | Astro

Statický Astro web pro `witdesign.cz` s Tailwind CSS, minimem klientského JavaScriptu a strukturou připravenou pro nasazení na Vercel přes GitHub.

## Stack

- `Astro`
- `Tailwind CSS` přes `@tailwindcss/vite`
- statické `.astro` stránky bez hydratovaných UI ostrovů

## Lokální vývoj

```bash
npm install
npm run dev
```

## Kontrola a build

```bash
npm run lint
npm run build
```

## Nasazení na Vercel

Projekt je připravený jako statický Astro web. Na Vercelu stačí:

1. Připojit GitHub repo.
2. Framework se detekuje jako `Astro`.
3. Není potřeba žádný vlastní runtime ani `vercel.json`.

## Struktura

- `src/layouts/BaseLayout.astro` – SEO metadata, Open Graph a JSON-LD pro lokální byznys
- `src/components/ServiceCard.astro` – karty služeb
- `src/pages/index.astro` – landing page
- `src/pages/gdpr.astro` – zásady ochrany osobních údajů
- `src/pages/vop.astro` – obchodní podmínky
- `src/pages/portfolio.astro` – portfolio placeholder
- `src/pages/blog.astro` – blog placeholder

## Poznámka k UX

Rozestupy a velikosti jsou schválně kompaktní na mobilu. U bloků a tlačítek je preferovaný pattern typu `p-4 md:p-6` namísto robustních desktop-first hodnot.
