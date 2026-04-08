import { NextResponse } from "next/server";
import { normalizeLeadEmail, normalizeLeadUrl } from "@/lib/lead-utils";
import { siteConfig } from "@/lib/site-config";

export const runtime = "nodejs";

function getNotificationRecipientEmail() {
  const local = Buffer.from(siteConfig.contact.emailLocalEncoded, "base64").toString("utf8");
  const domain = Buffer.from(siteConfig.contact.emailDomainEncoded, "base64").toString("utf8");
  const tld = Buffer.from(siteConfig.contact.emailTldEncoded, "base64").toString("utf8");

  return `${local}@${domain}.${tld}`;
}

function buildLeadMailto(toEmail: string, leadUrl: string, leadEmail: string) {
  const params = new URLSearchParams({
    subject: `Nová poptávka auditu: ${leadUrl}`,
    body: [
      "Přišla nová poptávka z formuláře na witdesign.cz.",
      "",
      `URL e-shopu: ${leadUrl}`,
      `E-mail zájemce: ${leadEmail}`,
    ].join("\n"),
  });

  return `mailto:${toEmail}?${params.toString()}`;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      email?: string;
      url?: string;
    };

    const leadUrl = normalizeLeadUrl(body.url ?? "");
    const leadEmail = normalizeLeadEmail(body.email ?? "");

    if (!leadUrl || !leadEmail) {
      return NextResponse.json(
        {
          error: "Prosím, doplňte platnou URL adresu i e-mail.",
        },
        { status: 400 },
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.LEAD_FROM_EMAIL;
    const toEmail = process.env.LEAD_TO_EMAIL ?? getNotificationRecipientEmail();

    if (!resendApiKey || !fromEmail) {
      return NextResponse.json(
        {
          ok: true,
          fallbackMailto: buildLeadMailto(toEmail, leadUrl, leadEmail),
        },
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: leadEmail,
        subject: `Nová poptávka auditu: ${leadUrl}`,
        text: [
          "Přišla nová poptávka z formuláře na witdesign.cz.",
          "",
          `URL e-shopu: ${leadUrl}`,
          `E-mail zájemce: ${leadEmail}`,
        ].join("\n"),
        html: `
          <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827">
            <h2 style="margin:0 0 16px">Nová poptávka z witdesign.cz</h2>
            <p style="margin:0 0 8px"><strong>URL e-shopu:</strong> <a href="${leadUrl}">${leadUrl}</a></p>
            <p style="margin:0"><strong>E-mail zájemce:</strong> <a href="mailto:${leadEmail}">${leadEmail}</a></p>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();

      throw new Error(errorText || "Resend nevrátil úspěšnou odpověď.");
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Poptávku se nepodařilo odeslat.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
