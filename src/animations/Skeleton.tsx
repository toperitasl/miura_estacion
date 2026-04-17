import { memo } from "react";
import { motion } from "framer-motion";

type SkeletonProps = {
  className?: string;
  rounded?: "none" | "sm" | "md" | "lg" | "full";
};

/**
 * Skeleton con shimmer animado usando solo transform (GPU).
 * El brillo es un elemento hijo animado con x → muy barato para el navegador.
 */
const SkeletonInner = ({ className = "", rounded = "md" }: SkeletonProps) => {
  const roundedMap = {
    none: "",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-xl",
    full: "rounded-full",
  };

  return (
    <div
      className={[
        "relative overflow-hidden bg-white/5",
        roundedMap[rounded],
        className,
      ].join(" ")}
    >
      <motion.div
        className="absolute inset-y-0 left-0 w-1/3"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
          willChange: "transform",
        }}
        animate={{ x: ["-100%", "350%"] }}
        transition={{
          duration: 1.4,
          ease: "linear",
          repeat: Infinity,
        }}
      />
    </div>
  );
};

export const Skeleton = memo(SkeletonInner);

/* ───────── Skeleton específicos listos para usar ───────── */

export const ProductCardSkeleton = () => (
  <div className="flex flex-col gap-3 p-4 bg-secondary/30 rounded-xl">
    <Skeleton className="aspect-square w-full" rounded="lg" />
    <Skeleton className="h-5 w-3/4" />
    <Skeleton className="h-4 w-1/2" />
    <div className="flex items-center justify-between mt-2">
      <Skeleton className="h-6 w-16" />
      <Skeleton className="h-9 w-24" rounded="lg" />
    </div>
  </div>
);

export const ProductGridSkeleton = ({ count = 6 }: { count?: number }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: count }).map((_, i) => (
      <ProductCardSkeleton key={i} />
    ))}
  </div>
);
