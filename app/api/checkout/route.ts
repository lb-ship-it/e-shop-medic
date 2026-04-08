import { NextResponse } from "next/server";
import { getStripeClient } from "@/lib/stripe";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const priceId = process.env.STRIPE_PRICE_ID;

  if (!priceId) {
    return NextResponse.json(
      {
        error:
          "Chybí STRIPE_PRICE_ID. Vytvoř cenu ve Stripe a doplň ji do env proměnných.",
      },
      { status: 500 },
    );
  }

  try {
    const origin =
      process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
      new URL(request.url).origin;

    const session = await getStripeClient().checkout.sessions.create({
      mode: "payment",
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cancel`,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      allow_promotion_codes: true,
      billing_address_collection: "required",
      customer_creation: "always",
      metadata: {
        source: "e-shop-medic-starter",
      },
    });

    if (!session.url) {
      throw new Error("Stripe nevrátil checkout URL.");
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Stripe checkout se nepodařilo vytvořit.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
