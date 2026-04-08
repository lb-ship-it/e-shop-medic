# e-shop-medic

Starter storefront for `Vercel + Stripe Checkout`, prepared as a fast first version for `witdesign.cz`.

## Stack

- `Next.js 16` with App Router
- `Tailwind CSS 4`
- `Stripe Checkout Sessions`
- deployment target: `Vercel`

## Why this setup

For a first ecommerce launch with one-time payments, Stripe best practices recommend `Checkout Sessions`. It is the fastest safe path to production and fits Vercel very well.

This starter intentionally keeps scope small:

- one featured product flow
- fresh homepage instead of boilerplate
- success and cancel return pages
- no cart, no order database, no webhook fulfillment yet

## Local run

1. Copy `.env.example` to `.env.local`
2. Fill in:
   - `STRIPE_SECRET_KEY`
   - `STRIPE_PRICE_ID`
   - optionally `NEXT_PUBLIC_SITE_URL`
3. Install dependencies:

```bash
npm install
```

4. Start development:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Stripe setup

1. In Stripe Dashboard create a product and a one-time price
2. Copy the resulting `price_...` ID into `STRIPE_PRICE_ID`
3. Copy your secret key into `STRIPE_SECRET_KEY`

The current checkout route is in `app/api/checkout/route.ts`.

## Vercel deploy

1. Import the repo/project into Vercel
2. Add the same environment variables in the Vercel project settings:
   - `STRIPE_SECRET_KEY`
   - `STRIPE_PRICE_ID`
   - `NEXT_PUBLIC_SITE_URL`
3. Set `NEXT_PUBLIC_SITE_URL` to your production URL, for example `https://witdesign.cz`
4. Deploy

## Next recommended step

Before going live with real orders, add a Stripe webhook for `checkout.session.completed` and connect it to order creation, email, or fulfillment.
