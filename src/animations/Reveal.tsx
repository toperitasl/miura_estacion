import { memo, type ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { DURATION, EASE, VIEWPORT_ONCE } from "./config";
import { revealFrom } from "./variants";

type RevealProps = {
  children: ReactNode;
  /** Dirección desde la que aparece */
  from?: "up" | "down" | "left" | "right";
  /** Delay en segundos (útil para encadenar secciones) */
  delay?: number;
  /** Duración custom */
  duration?: number;
  /** Umbral del viewport (0-1) */
  amount?: number;
  /** Re-animar en cada scroll (por defecto solo 1 vez) */
  repeat?: boolean;
  /** Variants custom si quieres sobrescribir */
  variants?: Variants;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "span";
};

/**
 * Reveal al entrar en viewport.
 * - Animación: opacity + translateY + scale (solo transform/opacity → GPU).
 * - "once: true" por defecto → no se repite al scrollear.
 * - Respeta prefers-reduced-motion.
 */
const RevealInner = ({
  children,
  from = "up",
  delay = 0,
  duration = DURATION.slow,
  amount = 0.2,
  repeat = false,
  variants,
  className,
  as = "div",
}: RevealProps) => {
  const reduce = useReducedMotion();

  // Accesibilidad: si el usuario prefiere menos movimiento, no animamos offset.
  const effectiveVariants: Variants =
    variants ??
    (reduce
      ? {
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { duration: 0.2 } },
        }
      : {
          ...revealFrom(from),
          show: {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            transition: { duration, ease: EASE.out, delay },
          },
        });

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      variants={effectiveVariants}
      initial="hidden"
      whileInView="show"
      viewport={repeat ? { amount } : { ...VIEWPORT_ONCE, amount }}
    >
      {children}
    </MotionTag>
  );
};

/**
 * memo → evita re-renders cuando el padre se re-renderiza
 * pero los props de <Reveal /> no cambian.
 */
export const Reveal = memo(RevealInner);
