import { memo, type ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { STAGGER, VIEWPORT_ONCE } from "./config";
import { staggerContainer, staggerItem } from "./variants";

type StaggerListProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  /** Función que devuelve la key estable por item (evita re-mounts) */
  getKey: (item: T, index: number) => string | number;
  /** Delay entre items */
  stagger?: number;
  /** Delay inicial antes del primer item */
  delayChildren?: number;
  /** Variant del item (por defecto "juicy") */
  itemVariants?: Variants;
  className?: string;
  itemClassName?: string;
  as?: "ul" | "ol" | "div";
  /** Cuántos items como máximo se animan (resto aparece estático — perf para listas largas) */
  maxAnimated?: number;
};

/**
 * Lista con stagger optimizada.
 *
 * Perf:
 *  - maxAnimated → si la lista es enorme (ej. 200 items) solo se animan
 *    los primeros N visibles; el resto se renderiza estático → sin coste.
 *  - viewport: { once: true } → la animación solo ocurre una vez.
 *  - memo sobre el componente → si los props no cambian, no re-renderiza.
 */
function StaggerListInner<T>({
  items,
  renderItem,
  getKey,
  stagger = STAGGER.base,
  delayChildren = 0,
  itemVariants = staggerItem,
  className,
  itemClassName,
  as = "div",
  maxAnimated = 24,
}: StaggerListProps<T>) {
  const container = staggerContainer(delayChildren, stagger);
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT_ONCE}
    >
      {items.map((item, i) => {
        // Items más allá de maxAnimated: render estático (sin motion) → cero overhead
        if (i >= maxAnimated) {
          return (
            <div key={getKey(item, i)} className={itemClassName}>
              {renderItem(item, i)}
            </div>
          );
        }
        return (
          <motion.div
            key={getKey(item, i)}
            variants={itemVariants}
            className={itemClassName}
          >
            {renderItem(item, i)}
          </motion.div>
        );
      })}
    </MotionTag>
  );
}

// memo con cast — para mantener el genérico <T>
export const StaggerList = memo(StaggerListInner) as typeof StaggerListInner;
