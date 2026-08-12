import { useRef, useState, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Ripple = { id: number; x: number; y: number };

interface RippleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
}

const variants: Record<string, string> = {
  primary:
    "text-primary-foreground shadow-[var(--shadow-soft)]  [background:var(--gradient-primary)]",
  outline:
    "border border-border bg-background text-foreground hover:border-primary/40 hover:text-primary",
  ghost: "text-foreground hover:bg-muted",
  dark: "bg-charcoal text-primary-foreground hover:bg-charcoal/90",
};

const sizes: Record<string, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

export function RippleButton({
  variant = "primary",
  size = "md",
  className,
  children,
  onClick,
  ...props
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const id = useRef(0);

  return (
    <button
      {...props}
      onClick={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const next = {
          id: id.current++,
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        };
        setRipples((prev) => [...prev, next]);
        window.setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== next.id)), 650);
        onClick?.(event);
      }}
      className={cn(
        "press relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold tracking-tight",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          aria-hidden
          className="pointer-events-none absolute h-2 w-2 animate-[ripple_0.65s_ease-out] rounded-full bg-current opacity-25"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: "translate(-50%, -50%) scale(1)",
            animation: "ripple 0.65s ease-out forwards",
          }}
        />
      ))}
      <style>{`@keyframes ripple{to{transform:translate(-50%,-50%) scale(38);opacity:0}}`}</style>
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </button>
  );
}
