// SVG icons extracted from the restaurant's physical menu (la carta).
// Style: bold, flat, line-art in gold/yellow. Used as decorative elements.

type IconProps = { className?: string; stroke?: string };

/* ────────────────────────────────────────────────────────────
   CHEVRONS — the diagonal yellow ">>>" pattern from the carta
   ──────────────────────────────────────────────────────────── */
export const ChevronPattern = ({ className = "", direction = "right" }: { className?: string; direction?: "right" | "left" | "up" | "down" }) => {
  const rotation = { right: 0, down: 90, left: 180, up: 270 }[direction];
  return (
    <div
      className={className}
      aria-hidden="true"
      style={{ transform: `rotate(${rotation}deg)`, transformOrigin: "center" }}
    >
      <svg viewBox="0 0 200 40" className="w-full h-full" fill="none">
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <path
            key={i}
            d={`M ${10 + i * 28} 5 L ${30 + i * 28} 20 L ${10 + i * 28} 35`}
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
        ))}
      </svg>
    </div>
  );
};

/* Corner chevron group — like the corners of the carta */
export const ChevronCorner = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 80 80" className={className} fill="none" aria-hidden="true">
    <path d="M 10 40 L 30 25 L 30 55 Z" fill="currentColor" />
    <path d="M 32 40 L 52 25 L 52 55 Z" fill="currentColor" opacity="0.7" />
    <path d="M 54 40 L 74 25 L 74 55 Z" fill="currentColor" opacity="0.4" />
  </svg>
);

/* ────────────────────────────────────────────────────────────
   MIURA BULL HEAD — the brand icon from the carta
   ──────────────────────────────────────────────────────────── */
export const BullHead = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 200 180" className={className} fill="none" aria-hidden="true">
    {/* Horns — wide arc */}
    <path
      d="M 30 60 Q 20 40 35 25 Q 55 15 80 40 M 170 60 Q 180 40 165 25 Q 145 15 120 40"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      fill="none"
    />
    {/* Head — rounded trapezoidal */}
    <path
      d="M 65 45 Q 60 80 65 120 Q 70 150 100 160 Q 130 150 135 120 Q 140 80 135 45 Q 120 35 100 35 Q 80 35 65 45 Z"
      fill="currentColor"
    />
    {/* Eyes — cutouts */}
    <circle cx="82" cy="85" r="5" fill="#000" />
    <circle cx="118" cy="85" r="5" fill="#000" />
    {/* Nose ring */}
    <circle cx="100" cy="135" r="6" stroke="#000" strokeWidth="3" fill="none" />
    {/* Nostrils */}
    <ellipse cx="90" cy="120" rx="2.5" ry="4" fill="#000" />
    <ellipse cx="110" cy="120" rx="2.5" ry="4" fill="#000" />
  </svg>
);

/* ────────────────────────────────────────────────────────────
   GOLDEN TROPHY CUP — the decorative cup from "Acompañamientos"
   ──────────────────────────────────────────────────────────── */
export const Trophy = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 120 140" className={className} fill="none" aria-hidden="true">
    {/* Left handle */}
    <path
      d="M 30 45 Q 10 50 10 70 Q 10 90 30 90"
      stroke="currentColor"
      strokeWidth="5"
      fill="none"
    />
    {/* Right handle */}
    <path
      d="M 90 45 Q 110 50 110 70 Q 110 90 90 90"
      stroke="currentColor"
      strokeWidth="5"
      fill="none"
    />
    {/* Cup body */}
    <path
      d="M 25 40 L 95 40 L 90 95 Q 85 105 60 105 Q 35 105 30 95 Z"
      fill="currentColor"
    />
    {/* Cup rim */}
    <rect x="22" y="35" width="76" height="8" fill="currentColor" />
    {/* Stem */}
    <rect x="55" y="105" width="10" height="15" fill="currentColor" />
    {/* Base */}
    <rect x="40" y="120" width="40" height="10" fill="currentColor" />
    {/* Decorative star */}
    <path
      d="M 60 55 L 63 65 L 73 65 L 65 71 L 68 81 L 60 75 L 52 81 L 55 71 L 47 65 L 57 65 Z"
      fill="#000"
      opacity="0.4"
    />
  </svg>
);

/* ────────────────────────────────────────────────────────────
   BEER GLASS — with foam (for "Cervezas" / "Refrescos")
   ──────────────────────────────────────────────────────────── */
export const BeerGlass = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 120 160" className={className} fill="none" aria-hidden="true">
    {/* Foam — curly top */}
    <path
      d="M 25 40 Q 20 20 35 22 Q 45 10 55 25 Q 65 10 75 25 Q 85 10 95 22 Q 100 20 95 40 Q 85 45 75 40 Q 65 45 55 40 Q 45 45 35 40 Q 28 45 25 40 Z"
      fill="currentColor"
    />
    {/* Glass body */}
    <path
      d="M 30 40 L 35 140 Q 35 148 45 148 L 85 148 Q 95 148 95 140 L 90 40 Z"
      stroke="currentColor"
      strokeWidth="5"
      fill="currentColor"
      fillOpacity="0.15"
    />
    {/* Handle */}
    <path
      d="M 95 60 Q 115 65 115 90 Q 115 115 95 120"
      stroke="currentColor"
      strokeWidth="5"
      fill="none"
    />
    {/* Foam drip */}
    <circle cx="45" cy="55" r="3" fill="currentColor" />
    {/* Bubbles inside */}
    <circle cx="55" cy="80" r="3" fill="currentColor" opacity="0.6" />
    <circle cx="70" cy="100" r="2" fill="currentColor" opacity="0.6" />
    <circle cx="50" cy="115" r="2" fill="currentColor" opacity="0.6" />
    <circle cx="75" cy="130" r="3" fill="currentColor" opacity="0.6" />
  </svg>
);

/* ────────────────────────────────────────────────────────────
   COCKTAIL SHAKER — for "Combinados"
   ──────────────────────────────────────────────────────────── */
export const CocktailShaker = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 100 160" className={className} fill="none" aria-hidden="true">
    {/* Cap */}
    <rect x="40" y="10" width="20" height="12" fill="currentColor" />
    {/* Neck */}
    <path d="M 35 22 L 65 22 L 62 32 L 38 32 Z" fill="currentColor" />
    {/* Body */}
    <path
      d="M 25 32 L 75 32 L 70 140 Q 68 150 60 150 L 40 150 Q 32 150 30 140 Z"
      fill="currentColor"
    />
    {/* Highlight line */}
    <rect x="34" y="45" width="4" height="85" fill="#000" opacity="0.25" />
    {/* Top circle decor */}
    <circle cx="50" cy="16" r="3" fill="#000" opacity="0.3" />
  </svg>
);

/* ────────────────────────────────────────────────────────────
   LIPS WITH TEETH — "Frescos & Cortados de Vida" icon
   ──────────────────────────────────────────────────────────── */
export const LipsIcon = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 180 100" className={className} fill="none" aria-hidden="true">
    {/* Top lip */}
    <path
      d="M 20 45 Q 40 20 70 30 Q 90 15 110 30 Q 140 20 160 45 Q 120 40 90 42 Q 60 40 20 45 Z"
      fill="currentColor"
    />
    {/* Bottom lip */}
    <path
      d="M 25 50 Q 60 85 90 85 Q 120 85 155 50 Q 120 58 90 58 Q 60 58 25 50 Z"
      fill="currentColor"
    />
    {/* Teeth (white rectangles between lips) */}
    <rect x="50" y="44" width="8" height="8" fill="#fff" />
    <rect x="62" y="44" width="8" height="8" fill="#fff" />
    <rect x="74" y="44" width="8" height="8" fill="#fff" />
    <rect x="86" y="44" width="8" height="8" fill="#fff" />
    <rect x="98" y="44" width="8" height="8" fill="#fff" />
    <rect x="110" y="44" width="8" height="8" fill="#fff" />
    <rect x="122" y="44" width="8" height="8" fill="#fff" />
  </svg>
);

/* ────────────────────────────────────────────────────────────
   BURGER — for "Bocados Brutales"
   ──────────────────────────────────────────────────────────── */
export const BurgerIcon = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 140 120" className={className} fill="none" aria-hidden="true">
    {/* Top bun */}
    <path d="M 15 50 Q 15 15 70 15 Q 125 15 125 50 Z" fill="currentColor" />
    {/* Seeds on bun */}
    <ellipse cx="45" cy="30" rx="3" ry="4" fill="#000" opacity="0.3" />
    <ellipse cx="70" cy="22" rx="3" ry="4" fill="#000" opacity="0.3" />
    <ellipse cx="95" cy="30" rx="3" ry="4" fill="#000" opacity="0.3" />
    {/* Lettuce */}
    <path d="M 10 55 Q 20 50 30 55 Q 40 50 50 55 Q 60 50 70 55 Q 80 50 90 55 Q 100 50 110 55 Q 120 50 130 55 L 130 62 L 10 62 Z" fill="currentColor" opacity="0.7" />
    {/* Patty */}
    <rect x="15" y="62" width="110" height="14" fill="currentColor" />
    {/* Cheese */}
    <path d="M 20 76 L 120 76 L 130 82 L 10 82 Z" fill="currentColor" opacity="0.6" />
    {/* Bottom bun */}
    <path d="M 15 82 L 125 82 Q 125 110 70 110 Q 15 110 15 82 Z" fill="currentColor" />
  </svg>
);

/* ────────────────────────────────────────────────────────────
   FORK-KNIFE — for "Para Comenzar" / "Para Compartir"
   ──────────────────────────────────────────────────────────── */
export const ForkKnife = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 100 160" className={className} fill="none" aria-hidden="true">
    {/* Fork */}
    <path d="M 20 10 L 20 50 M 28 10 L 28 45 M 36 10 L 36 50" stroke="currentColor" strokeWidth="4" strokeLinecap="square" />
    <path d="M 15 45 Q 28 55 41 45 L 41 55 Q 28 60 15 55 Z" fill="currentColor" />
    <rect x="26" y="55" width="4" height="95" fill="currentColor" />
    {/* Knife */}
    <path d="M 62 10 Q 72 10 78 25 L 78 70 L 62 70 Z" fill="currentColor" />
    <rect x="66" y="70" width="10" height="80" fill="currentColor" />
  </svg>
);

/* ────────────────────────────────────────────────────────────
   COFFEE CUP — for "Cafes & Infusiones"
   ──────────────────────────────────────────────────────────── */
export const CoffeeCup = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 140 120" className={className} fill="none" aria-hidden="true">
    {/* Steam */}
    <path
      d="M 40 15 Q 45 5 40 0 M 60 15 Q 55 5 60 0 M 80 15 Q 85 5 80 0"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
      opacity="0.6"
    />
    {/* Cup */}
    <path
      d="M 25 30 L 95 30 L 90 95 Q 88 105 78 105 L 42 105 Q 32 105 30 95 Z"
      fill="currentColor"
    />
    {/* Handle */}
    <path d="M 95 45 Q 120 50 120 70 Q 120 90 95 90" stroke="currentColor" strokeWidth="5" fill="none" />
    {/* Saucer */}
    <ellipse cx="60" cy="110" rx="50" ry="6" fill="currentColor" />
  </svg>
);

/* ────────────────────────────────────────────────────────────
   DESSERT (ice-cream cup) — for "Dulce Final"
   ──────────────────────────────────────────────────────────── */
export const DessertIcon = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 100 140" className={className} fill="none" aria-hidden="true">
    {/* Ice cream scoops */}
    <circle cx="50" cy="35" r="22" fill="currentColor" />
    <circle cx="35" cy="45" r="15" fill="currentColor" opacity="0.7" />
    <circle cx="65" cy="45" r="15" fill="currentColor" opacity="0.7" />
    {/* Cherry on top */}
    <circle cx="50" cy="15" r="6" fill="currentColor" />
    {/* Cup */}
    <path d="M 20 55 L 80 55 L 68 125 Q 65 135 55 135 L 45 135 Q 35 135 32 125 Z" fill="currentColor" opacity="0.6" stroke="currentColor" strokeWidth="3" />
  </svg>
);

/* ────────────────────────────────────────────────────────────
   WINE GLASS — for "Vinos"
   ──────────────────────────────────────────────────────────── */
export const WineGlass = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 80 140" className={className} fill="none" aria-hidden="true">
    {/* Bowl */}
    <path d="M 15 15 L 65 15 Q 65 55 40 65 Q 15 55 15 15 Z" fill="currentColor" />
    {/* Stem */}
    <rect x="38" y="65" width="4" height="55" fill="currentColor" />
    {/* Base */}
    <rect x="20" y="120" width="40" height="5" fill="currentColor" />
    {/* Liquid highlight */}
    <path d="M 20 20 L 60 20 Q 60 50 40 58 Q 20 50 20 20 Z" fill="#000" opacity="0.2" />
  </svg>
);

/* ────────────────────────────────────────────────────────────
   SPRAY SPLAT — graffiti texture for backgrounds
   ──────────────────────────────────────────────────────────── */
export const SpraySplat = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 200 200" className={className} fill="currentColor" aria-hidden="true">
    <circle cx="100" cy="100" r="40" />
    <circle cx="60" cy="90" r="10" opacity="0.7" />
    <circle cx="140" cy="70" r="8" opacity="0.6" />
    <circle cx="150" cy="130" r="12" opacity="0.7" />
    <circle cx="50" cy="130" r="7" opacity="0.5" />
    <circle cx="170" cy="100" r="5" opacity="0.5" />
    <circle cx="30" cy="110" r="4" opacity="0.4" />
    <circle cx="110" cy="40" r="6" opacity="0.5" />
    <circle cx="90" cy="170" r="5" opacity="0.4" />
    <circle cx="130" cy="160" r="3" opacity="0.3" />
    <circle cx="80" cy="50" r="3" opacity="0.3" />
    <circle cx="160" cy="50" r="4" opacity="0.4" />
    <circle cx="20" cy="80" r="3" opacity="0.3" />
    <circle cx="180" cy="150" r="2" opacity="0.3" />
  </svg>
);

/* ────────────────────────────────────────────────────────────
   ARROW MARKER (single angular arrow, like in the carta)
   ──────────────────────────────────────────────────────────── */
export const ArrowMark = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 40 40" className={className} fill="currentColor" aria-hidden="true">
    <path d="M 5 10 L 25 20 L 5 30 L 12 20 Z" />
  </svg>
);
