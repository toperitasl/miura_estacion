import { forwardRef, type ReactNode, type ButtonHTMLAttributes } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { juicyButton } from "./variants";

type JuicyButtonProps = Omit<HTMLMotionProps<"button">, "children"> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
} & Pick<ButtonHTMLAttributes<HTMLButtonElement>, "type" | "disabled">;

const variantStyles = {
  primary:
    "bg-primary text-primary-foreground hover:brightness-110 shadow-lg shadow-primary/20",
  secondary:
    "bg-secondary text-foreground border border-border hover:border-primary/60",
  ghost: "bg-transparent text-foreground hover:bg-white/5",
};

const sizeStyles = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

/**
 * Botón con microinteracción "juicy":
 *  - hover: scale 1.04 (spring)
 *  - tap: scale 0.94 (spring rápido) — feedback físico tipo app móvil
 *  - transiciones <200ms
 *
 * Usa forwardRef para que funcione con libs tipo react-router (<Link as>).
 */
export const JuicyButton = forwardRef<HTMLButtonElement, JuicyButtonProps>(
  ({ children, variant = "primary", size = "md", className = "", disabled, ...rest }, ref) => {
    return (
      <motion.button
        ref={ref}
        variants={juicyButton}
        initial="rest"
        animate="rest"
        whileHover={disabled ? undefined : "hover"}
        whileTap={disabled ? undefined : "tap"}
        disabled={disabled}
        className={[
          "inline-flex items-center justify-center gap-2",
          "font-heading tracking-[0.15em] uppercase rounded-md",
          "transition-colors duration-150",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
          "will-change-transform select-none",
          variantStyles[variant],
          sizeStyles[size],
          className,
        ].join(" ")}
        {...rest}
      >
        {children}
      </motion.button>
    );
  },
);

JuicyButton.displayName = "JuicyButton";
