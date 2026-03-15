import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "filled",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-xl font-semibold transition-all duration-300",
        size === "sm" && "px-4 py-2 text-sm",
        size === "md" && "px-6 py-3 text-sm",
        size === "lg" && "px-8 py-4 text-base",
        variant === "filled" &&
          "bg-accent text-[#0A0A0B] hover:bg-accent-light shadow-lg shadow-accent/20",
        variant === "ghost" &&
          "border border-border text-text-primary hover:border-accent hover:text-accent",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
