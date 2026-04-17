import { memo, useRef, type ReactNode, type MouseEvent } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { productCardVariants } from "./variants";
import { SPRING } from "./config";

type ProductCardProps = {
  children: ReactNode;
  className?: string;
  /** Activa el tilt 3D con el ratón */
  tilt?: boolean;
  /** Intensidad del tilt en grados (máximo de rotación) */
  tiltIntensity?: number;
  /** Callback de click — recibe el evento */
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
  /** Si usas <ProductCard as="button">, lo renderiza como botón accesible */
  as?: "div" | "button" | "article";
};

/**
 * Card de producto con:
 *  - hover: scale 1.05 + shadow elev + lift (y: -6)
 *  - tap: scale 0.97 (feedback físico)
 *  - tilt 3D opcional siguiendo el cursor (usa MotionValues → 0 re-renders)
 *  - respeta prefers-reduced-motion
 *
 * Perf:
 *  - useMotionValue + useSpring viven fuera del ciclo React → NO re-renderiza
 *    el componente al mover el ratón. Solo actualiza transform en GPU.
 */
const ProductCardInner = ({
  children,
  className = "",
  tilt = true,
  tiltIntensity = 8,
  onClick,
  as = "div",
}: ProductCardProps) => {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  // Mouse position [-0.5, 0.5] relativa al centro de la card
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  // Spring suavizado → da la sensación "juicy"
  const smoothX = useSpring(mx, SPRING.firm);
  const smoothY = useSpring(my, SPRING.firm);

  // Convierte a grados de rotación
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-tiltIntensity, tiltIntensity]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [tiltIntensity, -tiltIntensity]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!tilt || reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      ref={ref}
      className={className}
      variants={productCardVariants}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      animate="rest"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        tilt && !reduce
          ? {
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
              transformPerspective: 900,
              willChange: "transform",
            }
          : { willChange: "transform" }
      }
    >
      {children}
    </MotionTag>
  );
};

export const ProductCard = memo(ProductCardInner);
