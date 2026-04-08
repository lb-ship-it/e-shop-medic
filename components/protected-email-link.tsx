"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";

type ProtectedEmailLinkProps = {
  className?: string;
  ariaLabel?: string;
  children?: ReactNode;
  fallbackText?: string;
  showAddress?: boolean;
  prefix?: ReactNode;
};

function decodeEmail() {
  const local = window.atob(siteConfig.contact.emailLocalEncoded);
  const domain = window.atob(siteConfig.contact.emailDomainEncoded);
  const tld = window.atob(siteConfig.contact.emailTldEncoded);

  return `${local}@${domain}.${tld}`;
}

export function ProtectedEmailLink({
  className,
  ariaLabel,
  children,
  fallbackText = "Zobrazit e-mail",
  showAddress = false,
  prefix,
}: ProtectedEmailLinkProps) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      setIsReady(true);
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  const email = isReady ? decodeEmail() : "";
  const href = email ? `mailto:${email}` : undefined;
  const content = children ?? (showAddress ? email || fallbackText : fallbackText);

  return (
    <a href={href} aria-label={ariaLabel} className={className}>
      {prefix}
      {content}
    </a>
  );
}
