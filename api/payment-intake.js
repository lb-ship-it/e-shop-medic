const DEFAULT_NOTIFICATION_EMAIL = "lblecha@witdesign.cz";

function normalizeName(rawValue) {
  const value = String(rawValue || "")
    .trim()
    .replace(/\s+/g, " ");

  return value.length >= 3 ? value : null;
}

function normalizePhone(rawValue) {
  const value = String(rawValue || "")
    .trim()
    .replace(/\s+/g, " ");
  const digits = value.replace(/[^\d]/g, "");

  return digits.length >= 9 ? value : null;
}

function normalizeEmail(rawValue) {
  const value = String(rawValue || "").trim().toLowerCase();

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? value : null;
}

function normalizeUrl(rawValue) {
  const trimmed = String(rawValue || "").trim();

  if (!trimmed) {
    return null;
  }

  const fixedProtocol = trimmed.replace(/^https?:\/(?!\/)/i, (match) => `${match}/`);
  const withProtocol = /^[a-z][a-z\d+\-.]*:\/\//i.test(fixedProtocol)
    ? fixedProtocol
    : `https://${fixedProtocol.replace(/^\/+/, "")}`;

  try {
    const parsed = new URL(withProtocol);

    if (!parsed.hostname || !parsed.hostname.includes(".")) {
      return null;
    }

    return parsed.toString();
  } catch {
    return null;
  }
}

function normalizeNote(rawValue) {
  const value = String(rawValue || "")
    .trim()
    .replace(/\s+/g, " ");

  return value.length >= 3 ? value : null;
}

function normalizeShortText(rawValue, fallback, maxLength = 120) {
  const value = String(rawValue || "")
    .trim()
    .replace(/\s+/g, " ");

  return value ? value.slice(0, maxLength) : fallback;
}

function normalizePaymentUrl(rawValue) {
  const value = String(rawValue || "").trim();

  try {
    const parsed = new URL(value);

    if (parsed.hostname !== "buy.stripe.com") {
      return null;
    }

    return parsed.toString();
  } catch {
    return null;
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildMailto(toEmail, payload) {
  const params = new URLSearchParams({
    subject: `Nová platba před Stripe: ${payload.offer}`,
    body: [
      "Přišla nová poptávka před přechodem na Stripe platbu.",
      "",
      `Služba: ${payload.offer}`,
      `Umístění CTA: ${payload.placement}`,
      `Stripe odkaz: ${payload.paymentUrl}`,
      "",
      `Jméno: ${payload.name}`,
      `Telefon: ${payload.phone}`,
      `E-mail: ${payload.email}`,
      `URL e-shopu: ${payload.url}`,
      "",
      "Poznámka:",
      payload.note,
    ].join("\n"),
  });

  return `mailto:${toEmail}?${params.toString()}`;
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ ok: false, error: "Povolena je jen metoda POST." });
  }

  try {
    const body =
      typeof request.body === "string" && request.body
        ? JSON.parse(request.body)
        : request.body || {};

    const payload = {
      name: normalizeName(body.name),
      phone: normalizePhone(body.phone),
      email: normalizeEmail(body.email),
      url: normalizeUrl(body.url),
      note: normalizeNote(body.note),
      offer: normalizeShortText(body.offer, "Stripe platba"),
      placement: normalizeShortText(body.placement, "site"),
      paymentUrl: normalizePaymentUrl(body.paymentUrl),
    };

    if (!payload.name) {
      return response.status(400).json({ ok: false, error: "Doplň prosím jméno a příjmení." });
    }

    if (!payload.phone) {
      return response.status(400).json({ ok: false, error: "Doplň prosím platné telefonní číslo." });
    }

    if (!payload.email) {
      return response.status(400).json({ ok: false, error: "Doplň prosím platný e-mail." });
    }

    if (!payload.url) {
      return response.status(400).json({ ok: false, error: "Doplň prosím platnou URL adresu e-shopu." });
    }

    if (!payload.note) {
      return response.status(400).json({ ok: false, error: "Doplň prosím poznámku k problému." });
    }

    if (!payload.paymentUrl) {
      return response.status(400).json({ ok: false, error: "Nepodařilo se připravit Stripe platbu." });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.LEAD_FROM_EMAIL;
    const toEmail = process.env.LEAD_TO_EMAIL || DEFAULT_NOTIFICATION_EMAIL;

    if (!resendApiKey || !fromEmail) {
      return response.status(200).json({
        ok: true,
        fallbackMailto: buildMailto(toEmail, payload),
      });
    }

    const textBody = [
      "Přišla nová poptávka před přechodem na Stripe platbu.",
      "",
      `Služba: ${payload.offer}`,
      `Umístění CTA: ${payload.placement}`,
      `Stripe odkaz: ${payload.paymentUrl}`,
      "",
      `Jméno: ${payload.name}`,
      `Telefon: ${payload.phone}`,
      `E-mail: ${payload.email}`,
      `URL e-shopu: ${payload.url}`,
      "",
      "Poznámka:",
      payload.note,
    ].join("\n");

    const htmlBody = `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827">
        <h2 style="margin:0 0 16px">Nová poptávka před Stripe platbou</h2>
        <p style="margin:0 0 8px"><strong>Služba:</strong> ${escapeHtml(payload.offer)}</p>
        <p style="margin:0 0 8px"><strong>Umístění CTA:</strong> ${escapeHtml(payload.placement)}</p>
        <p style="margin:0 0 8px"><strong>Stripe odkaz:</strong> <a href="${escapeHtml(payload.paymentUrl)}">${escapeHtml(payload.paymentUrl)}</a></p>
        <hr style="margin:16px 0;border:none;border-top:1px solid #e5e7eb" />
        <p style="margin:0 0 8px"><strong>Jméno:</strong> ${escapeHtml(payload.name)}</p>
        <p style="margin:0 0 8px"><strong>Telefon:</strong> ${escapeHtml(payload.phone)}</p>
        <p style="margin:0 0 8px"><strong>E-mail:</strong> <a href="mailto:${escapeHtml(payload.email)}">${escapeHtml(payload.email)}</a></p>
        <p style="margin:0 0 8px"><strong>URL e-shopu:</strong> <a href="${escapeHtml(payload.url)}">${escapeHtml(payload.url)}</a></p>
        <p style="margin:16px 0 8px"><strong>Poznámka:</strong></p>
        <p style="margin:0;white-space:pre-line">${escapeHtml(payload.note)}</p>
      </div>
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: payload.email,
        subject: `Nová platba před Stripe: ${payload.offer}`,
        text: textBody,
        html: htmlBody,
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      throw new Error(errorText || "Resend nevrátil úspěšnou odpověď.");
    }

    return response.status(200).json({ ok: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Údaje před platbou se nepodařilo odeslat.";

    return response.status(500).json({ ok: false, error: message });
  }
}
