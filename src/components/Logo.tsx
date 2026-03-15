export function Logo({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Rounded square container */}
      <rect
        x="2"
        y="2"
        width="28"
        height="28"
        rx="8"
        stroke="#00F0FF"
        strokeWidth="2"
        fill="none"
      />
      {/* Stylized "И" as two vertical bars + diagonal connector forming a progress arrow */}
      <path
        d="M9 22V10M23 22V10M9 22L23 10"
        stroke="#00F0FF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
