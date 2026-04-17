import type { Variants } from "framer-motion";
import { DURATION, EASE, SPRING, STAGGER } from "./config";

/* ──────────────────────────────────────────────────
   REVEAL — fade + translateY + ligera escala
   ────────────────────────────────────────────────── */
export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: DURATION.slow, ease: EASE.out },
  },
};

/* Variantes por dirección (útiles para diseño asimétrico) */
export const revealFrom = (direction: "up" | "down" | "left" | "right" = "up"): Variants => {
  const offset = 32;
  const map = {
    up: { y: offset, x: 0 },
    down: { y: -offset, x: 0 },
    left: { y: 0, x: offset },
    right: { y: 0, x: -offset },
  }[direction];
  return {
    hidden: { opacity: 0, ...map, scale: 0.97 },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: DURATION.slow, ease: EASE.out },
    },
  };
};

/* ──────────────────────────────────────────────────
   STAGGER CONTAINER — para listas y hero
   ────────────────────────────────────────────────── */
export const staggerContainer = (delayChildren = 0, staggerChildren = STAGGER.base): Variants => ({
  hidden: {},
  show: {
    transition: { delayChildren, staggerChildren },
  },
});

/* Item hijo "juicy" — útil como default para cards / items de lista */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: SPRING.juicy,
  },
};

/* ──────────────────────────────────────────────────
   HERO — texto en stagger dramático + imagen propia
   ────────────────────────────────────────────────── */
export const heroContainer: Variants = staggerContainer(0.1, STAGGER.dramatic);

export const heroText: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: DURATION.hero, ease: EASE.out },
  },
};

export const heroImage: Variants = {
  hidden: { opacity: 0, scale: 1.08, filter: "blur(12px)" },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: EASE.out },
  },
};

/* ──────────────────────────────────────────────────
   CARDS DE PRODUCTO — hover spring + shadow elev
   ────────────────────────────────────────────────── */
export const productCardVariants = {
  rest: {
    scale: 1,
    y: 0,
    boxShadow: "0 4px 14px rgba(0,0,0,0.12)",
    transition: SPRING.firm,
  },
  hover: {
    scale: 1.05,
    y: -6,
    boxShadow: "0 18px 38px rgba(0,0,0,0.28)",
    transition: SPRING.juicy,
  },
  tap: {
    scale: 0.97,
    transition: SPRING.tap,
  },
};

/* ──────────────────────────────────────────────────
   BOTONES — hover + tap feedback físico
   ────────────────────────────────────────────────── */
export const juicyButton = {
  rest: { scale: 1 },
  hover: { scale: 1.04, transition: SPRING.juicy },
  tap: { scale: 0.94, transition: SPRING.tap },
};

/* ──────────────────────────────────────────────────
   FLY-TO-CART — path animado
   ────────────────────────────────────────────────── */
export const flyToCartVariants: Variants = {
  start: { scale: 1, opacity: 1 },
  end: {
    scale: 0.2,
    opacity: 0,
    transition: { duration: 0.75, ease: EASE.smooth },
  },
};
