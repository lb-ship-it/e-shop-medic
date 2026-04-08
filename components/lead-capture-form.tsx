"use client";

import { useState } from "react";

type LeadCaptureFormProps = {
  align?: "left" | "center";
};

function normalizeLeadUrl(rawValue: string) {
  let value = rawValue.trim();

  if (!value) {
    return null;
  }

  // Accept forgiving variants like "/www.example.cz", "http:/example.cz" or bare domains.
  value = value.replace(/^\/+/, "");
  value = value.replace(/^https?:\/(?!\/)/i, (match) => `${match}/`);

  if (value.startsWith("//")) {
    value = `https:${value}`;
  } else if (!/^[a-z][a-z\d+.-]*:\/\//i.test(value)) {
    value = `https://${value}`;
  }

  try {
    const parsed = new URL(value);

    if (!parsed.hostname || !parsed.hostname.includes(".")) {
      return null;
    }

    return parsed.toString();
  } catch {
    return null;
  }
}

export function LeadCaptureForm({ align = "center" }: LeadCaptureFormProps) {
  const [url, setUrl] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedUrl = normalizeLeadUrl(url);

    if (!normalizedUrl) {
      setSubmitted(false);
      setError("Prosím, zadejte platnou URL adresu vašeho e-shopu.");
      return;
    }

    setUrl(normalizedUrl);
    setError(null);
    setSubmitted(true);
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
      <div className="panel-strong glow-blue flex w-full items-center gap-3 rounded-2xl px-5 py-4">
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

      <div className={`flex flex-col gap-4 sm:flex-row sm:gap-7 ${ctaRowClass}`}>
        <button
          type="submit"
          className={`inline-grid min-h-14 w-full max-w-[20rem] grid-cols-[1fr_auto] items-center gap-7 rounded-xl px-6 py-3 text-base font-semibold transition sm:min-w-[20rem] sm:px-8 ${
            submitted
              ? "bg-[#00cc7d] text-black shadow-[0_0_28px_rgba(0,204,125,0.22)]"
              : "glow-green bg-accent-green text-black hover:translate-y-[-1px]"
          }`}
        >
          <span
            className={
              align === "left" ? "text-left leading-tight" : "text-center leading-tight"
            }
          >
            {submitted ? (
              "Odesláno! Brzy se ozvu."
            ) : (
              <>
                Pošli URL svého e-shopu
                <br />
                a začnu hned
              </>
            )}
          </span>
          <span aria-hidden="true" className="pr-1 text-lg leading-none">
            &gt;
          </span>
        </button>

        <div className="flex items-center gap-3 pl-1 text-base text-white/55 sm:pl-0">
          <span className="h-2.5 w-2.5 rounded-full bg-accent-green" />
          Odpověď do 24 hodin
        </div>
      </div>

      {error ? <p className="text-base text-[#ff8e8e]">{error}</p> : null}
      <p className="text-base text-white/45">Analýza je zcela nezávazná.</p>
    </form>
  );
}
