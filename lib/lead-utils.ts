export function normalizeLeadUrl(rawValue: string) {
  let value = rawValue.trim();

  if (!value) {
    return null;
  }

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

export function normalizeLeadEmail(rawValue: string) {
  const value = rawValue.trim().toLowerCase();

  if (!value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return null;
  }

  return value;
}
