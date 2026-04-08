"use client";

import { useState, useTransition } from "react";
import { siteConfig } from "@/lib/site-config";

type CheckoutButtonProps = {
  className?: string;
  label?: string;
};

export function CheckoutButton({
  className,
  label = "Chci express audit do 24 hodin (1 500 Kč)",
}: CheckoutButtonProps) {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const classes = [
    "inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-base font-semibold text-background transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const directCheckoutHref = siteConfig.payments.expressAuditHref;

  const handleCheckout = () => {
    setError(null);

    if (directCheckoutHref) {
      window.location.assign(directCheckoutHref);
      return;
    }

    startTransition(async () => {
      try {
        const response = await fetch("/api/checkout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = (await response.json()) as {
          error?: string;
          url?: string;
        };

        if (!response.ok || !data.url) {
          throw new Error(data.error ?? "Stripe checkout se nepodařilo vytvořit.");
        }

        window.location.assign(data.url);
      } catch (checkoutError) {
        const message =
          checkoutError instanceof Error
            ? checkoutError.message
            : "Stripe checkout se nepodařilo spustit.";

        setError(message);
      }
    });
  };

  return (
    <div className="space-y-2">
      <button type="button" onClick={handleCheckout} disabled={isPending} className={classes}>
        {isPending ? "Přesměrovávám do Stripe..." : label}
      </button>
      {error ? <p className="text-sm text-[#ffb28b]">{error}</p> : null}
    </div>
  );
}
