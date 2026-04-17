import { memo, type ReactNode } from "react";
import { motion, type HTMLMotionProps, type Variants } from "framer-motion";

type MotionWrapperProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  variants?: Variants;
  /** Modo: "viewport" = se anima al entrar, "mount" = se anima al montar */
  trigger?: "viewport" | "mount";
  once?: boolean;
  amount?: number;
  className?: string;
};

/**
 * Wrapper genérico si necesitas algo más custom que <Reveal />.
 * - Acepta cualquier prop de motion.div.
 * - Por defecto se anima en viewport una sola vez.
 */
const MotionWrapperInner = ({
  children,
  variants,
  trigger = "viewport",
  once = true,
  amount = 0.2,
  ...rest
}: MotionWrapperProps) => {
  const animationProps =
    trigger === "viewport"
      ? {
          initial: "hidden",
          whileInView: "show",
          viewport: { once, amount },
        }
      : {
          initial: "hidden",
          animate: "show",
        };

  return (
    <motion.div variants={variants} {...animationProps} {...rest}>
      {children}
    </motion.div>
  );
};

export const MotionWrapper = memo(MotionWrapperInner);
