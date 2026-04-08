import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function PhoneIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M22 16.92v2a2 2 0 0 1-2.18 2 19.84 19.84 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.84 19.84 0 0 1 2.12 3.18 2 2 0 0 1 4.11 1h2a2 2 0 0 1 2 1.72l.38 2.62a2 2 0 0 1-.57 1.72L6.8 8.2a16 16 0 0 0 9 9l1.14-1.12a2 2 0 0 1 1.72-.57l2.62.38A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
      <path d="m22 7-10 7L2 7" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M20.52 3.48A11.8 11.8 0 0 0 12.06 0C5.66 0 .42 5.19.42 11.59c0 2.05.54 4.05 1.56 5.81L0 24l6.84-1.92a11.72 11.72 0 0 0 5.22 1.24h.01c6.4 0 11.59-5.19 11.59-11.59 0-3.09-1.2-5.98-3.14-8.25Z" />
      <path d="M8.6 7.75c-.23-.5-.48-.51-.7-.52h-.6c-.2 0-.52.07-.8.38-.27.31-1.04 1.02-1.04 2.48 0 1.45 1.07 2.86 1.22 3.06.14.2 2.07 3.31 5.12 4.5 2.53.99 3.05.8 3.6.75.56-.05 1.8-.73 2.05-1.43.26-.7.26-1.3.18-1.43-.07-.13-.27-.2-.56-.35-.28-.14-1.67-.83-1.93-.93-.25-.1-.44-.14-.62.14-.18.28-.71.93-.87 1.12-.16.2-.31.22-.59.07-.28-.14-1.17-.43-2.23-1.36-.82-.73-1.38-1.62-1.54-1.9-.16-.28-.02-.43.12-.57.12-.12.28-.31.42-.46.14-.16.18-.28.28-.47.09-.2.05-.36-.03-.5-.07-.14-.62-1.51-.85-2.07Z" />
    </svg>
  );
}

export function ClipboardIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <path d="M9 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3" />
      <path d="m9.5 13 1.8 1.8L15.5 10.6" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
      <path d="M2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 21s7-4.35 7-11a7 7 0 1 0-14 0c0 6.65 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
