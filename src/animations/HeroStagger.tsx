import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { heroContainer, heroImage, heroText } from "./variants";

type HeroStaggerProps = {
  children: ReactNode;
  className?: string;
};

/** Contenedor del hero — orquesta el stagger */
export const HeroStagger = ({ children, className }: HeroStaggerProps) => (
  <motion.div
    className={className}
    variants={heroContainer}
    initial="hidden"
    animate="show"
  >
    {children}
  </motion.div>
);

/** Item de texto — h1, h2, subtítulo, CTA, etc. */
export const HeroItem = ({ children, className }: HeroStaggerProps) => (
  <motion.div className={className} variants={heroText}>
    {children}
  </motion.div>
);

/** Item de imagen — entra con scale + blur, al estilo premium */
export const HeroMedia = ({ children, className }: HeroStaggerProps) => (
  <motion.div className={className} variants={heroImage}>
    {children}
  </motion.div>
);
