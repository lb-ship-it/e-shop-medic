"use client";

import { useState } from "react";
import { normalizeLeadEmail, normalizeLeadUrl } from "@/lib/lead-utils";

type LeadCaptureFormProps = {
  align?: "left" | "center";
};

export function LeadCaptureForm({ align = "center" }: LeadCaptureFormProps) {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedUrl = normalizeLeadUrl(url);
    const normalizedEmail = normalizeLeadEmail(email);

    if (!normalizedUrl) {
      setSubmitted(false);
      setError("Prosím, zadejte platnou URL adresu vašeho e-shopu.");
      return;
    }

    if (!normalizedEmail) {
      setSubmitted(false);
      setError("Prosím, zadejte platný e-mail, kam se vám můžu ozvat.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: normalizedUrl,
          email: normalizedEmail,
        }),
      });

      const data = (await response.json()) as {
        error?: string;
        fallbackMailto?: string;
      };

      if (!response.ok) {
        throw new Error(data.error ?? "Poptávku se nepodařilo odeslat.");
      }

      if (data.fallbackMailto) {
        window.location.assign(data.fallbackMailto);
      }

      setUrl(normalizedUrl);
      setEmail(normalizedEmail);
      setSubmitted(true);
    } catch (submitError) {
      const message =
        submitError instanceof Error
          ? submitError.message
          : "Poptávku se nepodařilo odeslat.";

      setSubmitted(false);
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const alignmentClass =
    align === "left" ? "items-start text-left" : "items-center text-center";

  const ctaRowClass =
    align === "left"
      ? "sm:items-center sm:justify-start"
      : "sm:items-center sm:justify-center";

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex w-full max-w-3xl flex-col gap-4 ${alignmentClass}`}
    >
      <div className="panel-strong glow-blue flex w-full items-center gap-3 rounded-2xl px-5 py-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-accent-blue">
          URL
        </span>
        <input
          type="text"
          inputMode="url"
          value={url}
          onChange={(event) => {
            setUrl(event.target.value);
            setError(null);
            setSubmitted(false);
          }}
          placeholder="https://vas-eshop.cz"
          className="w-full bg-transparent text-base text-white outline-none placeholder:text-white/35"
          autoComplete="url"
        />
      </div>

      <div className="panel-strong flex w-full items-center gap-3 rounded-2xl px-5 py-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-accent-blue">
          @
        </span>
        <input
          type="email"
          inputMode="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setError(null);
            setSubmitted(false);
          }}
          placeholder="vas@email.cz"
          className="w-full bg-transparent text-base text-white outline-none placeholder:text-white/35"
          autoComplete="email"
        />
      </div>

      <div className={`flex flex-col gap-4 sm:flex-row sm:gap-7 ${ctaRowClass}`}>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`inline-grid min-h-12 w-full max-w-[18.5rem] grid-cols-[1fr_auto] items-center gap-5 rounded-xl px-5 py-2.5 text-sm font-semibold transition sm:min-w-[18.5rem] sm:px-7 ${
            submitted
              ? "bg-[#00cc7d] text-black shadow-[0_0_28px_rgba(0,204,125,0.22)]"
              : "glow-green bg-accent-green text-black hover:translate-y-[-1px] disabled:cursor-not-allowed disabled:opacity-75"
          }`}
        >
          <span
            className={
              align === "left" ? "text-left leading-tight" : "text-center leading-tight"
            }
          >
            {isSubmitting ? (
              "Odesílám poptávku..."
            ) : submitted ? (
              "Odesláno! Brzy se ozvu."
            ) : (
              <>
                Pošli URL svého e-shopu
                <br />
                a začnu hned
              </>
            )}
          </span>
          <span aria-hidden="true" className="pr-1 text-base leading-none">
            &gt;
          </span>
        </button>

        <div className="flex items-center gap-3 pl-1 text-sm text-white/55 sm:pl-0">
          <span className="h-2.5 w-2.5 rounded-full bg-accent-green" />
          Odpověď do 24 hodin
        </div>
      </div>

      {error ? <p className="text-base text-[#ff8e8e]">{error}</p> : null}
      <p className="text-base text-white/45">Analýza je zcela nezávazná.</p>
    </form>
  );
}
