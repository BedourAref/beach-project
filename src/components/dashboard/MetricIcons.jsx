function IconBase({ children }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function BookingIcon() {
  return (
    <IconBase>
      <path d="M5 11h14" />
      <path d="M7 11V8a5 5 0 0 1 10 0v3" />
      <path d="M6 11v5" />
      <path d="M18 11v5" />
      <path d="M5 16h14" />
    </IconBase>
  );
}

export function RevenueIcon() {
  return (
    <IconBase>
      <path d="M12 3v18" />
      <path d="M16.5 7.5c0-1.66-2.01-3-4.5-3s-4.5 1.34-4.5 3 2.01 3 4.5 3 4.5 1.34 4.5 3-2.01 3-4.5 3-4.5-1.34-4.5-3" />
    </IconBase>
  );
}

export function RatingIcon() {
  return (
    <IconBase>
      <path d="m12 3.5 2.6 5.2 5.7.8-4.1 4 1 5.7L12 16.7 6.8 19.2l1-5.7-4.1-4 5.7-.8L12 3.5Z" />
    </IconBase>
  );
}

export function UsersIcon() {
  return (
    <IconBase>
      <circle cx="9" cy="9" r="2.5" />
      <circle cx="15.5" cy="8" r="2" />
      <path d="M4.5 18c.6-2.4 2.5-3.8 4.5-3.8s3.9 1.4 4.5 3.8" />
      <path d="M13.3 14.6c1.7.2 3.2 1.2 4 3" />
    </IconBase>
  );
}
