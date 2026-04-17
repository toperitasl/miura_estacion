/**
 * Central animation config.
 * Cambia aquí y se actualiza TODO el sistema.
 */

// Easings — "juicy" = ligero overshoot / bounce controlado
export const EASE = {
  // Salida suave, tipo material — por defecto para la mayoría de cosas
  smooth: [0.22, 1, 0.36, 1] as [number, number, number, number],
  // Entrada rápida, salida lenta — para reveals de scroll
  out: [0.16, 1, 0.3, 1] as [number, number, number, number],
  // Overshoot controlado — para hovers y presses
  juicy: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
  // Rápido y seco — para taps / micro-feedback
  snap: [0.4, 0, 0.2, 1] as [number, number, number, number],
};

// Duraciones (segundos) — framer usa segundos, no ms
export const DURATION = {
  instant: 0.12, // feedback táctil
  fast: 0.18, // botones, hover
  base: 0.35, // transiciones por defecto
  slow: 0.6, // reveals
  hero: 0.9, // intro de hero
};

// Spring presets "juicy" (tipo iOS / apps modernas)
export const SPRING = {
  // Por defecto — pequeño bounce, rápido
  juicy: { type: "spring" as const, stiffness: 420, damping: 26, mass: 0.8 },
  // Más firme — para cards que no deben rebotar demasiado
  firm: { type: "spring" as const, stiffness: 500, damping: 34, mass: 0.6 },
  // Más suave — para entradas grandes
  soft: { type: "spring" as const, stiffness: 180, damping: 20, mass: 1 },
  // Para "tap" — reacción inmediata
  tap: { type: "spring" as const, stiffness: 800, damping: 28, mass: 0.4 },
};

// Delays de stagger
export const STAGGER = {
  tight: 0.04, // listas largas, no queremos esperar
  base: 0.08, // el estándar
  dramatic: 0.14, // para hero
};

// Viewport por defecto para whileInView (solo animar una vez)
export const VIEWPORT_ONCE = { once: true, amount: 0.2 };
