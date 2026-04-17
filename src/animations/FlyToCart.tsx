import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { EASE } from "./config";

/**
 * Sistema "fly to cart":
 * 1. <FlyToCartProvider> envuelve la app y guarda la ref del carrito.
 * 2. Tu icono de carrito usa useFlyToCartTarget() para registrarse.
 * 3. Cualquier botón llama a flyToCart({ from, imageSrc }) y la burger "vuela".
 *
 * Perf:
 *  - Solo renderiza el elemento volador cuando hay animación activa.
 *  - Usa createPortal → no afecta layout.
 *  - Solo anima transform + opacity → GPU.
 */

type FlyPayload = {
  id: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  size: number;
  imageSrc: string;
};

type FlyContextValue = {
  registerCartTarget: (ref: RefObject<HTMLElement | null>) => void;
  flyToCart: (args: { from: HTMLElement; imageSrc: string }) => void;
};

const FlyCtx = createContext<FlyContextValue | null>(null);

export const FlyToCartProvider = ({ children }: { children: ReactNode }) => {
  const cartRef = useRef<RefObject<HTMLElement | null> | null>(null);
  const [flying, setFlying] = useState<FlyPayload[]>([]);
  const idCounter = useRef(0);

  const registerCartTarget = useCallback((ref: RefObject<HTMLElement | null>) => {
    cartRef.current = ref;
  }, []);

  const flyToCart = useCallback(({ from, imageSrc }: { from: HTMLElement; imageSrc: string }) => {
    const cartEl = cartRef.current?.current;
    if (!cartEl) {
      console.warn("[FlyToCart] Ningún carrito registrado. Usa useFlyToCartTarget().");
      return;
    }

    const fromRect = from.getBoundingClientRect();
    const cartRect = cartEl.getBoundingClientRect();

    const payload: FlyPayload = {
      id: idCounter.current++,
      startX: fromRect.left + fromRect.width / 2,
      startY: fromRect.top + fromRect.height / 2,
      endX: cartRect.left + cartRect.width / 2,
      endY: cartRect.top + cartRect.height / 2,
      size: Math.min(fromRect.width, 120),
      imageSrc,
    };

    setFlying((prev) => [...prev, payload]);

    // Feedback en el carrito cuando "llega" el item
    window.setTimeout(() => {
      cartEl.animate(
        [
          { transform: "scale(1)" },
          { transform: "scale(1.25)" },
          { transform: "scale(1)" },
        ],
        { duration: 320, easing: "cubic-bezier(0.34,1.56,0.64,1)" },
      );
    }, 650);

    // Limpieza
    window.setTimeout(() => {
      setFlying((prev) => prev.filter((p) => p.id !== payload.id));
    }, 900);
  }, []);

  return (
    <FlyCtx.Provider value={{ registerCartTarget, flyToCart }}>
      {children}
      {typeof document !== "undefined" &&
        createPortal(
          <div className="pointer-events-none fixed inset-0 z-[9999]">
            <AnimatePresence>
              {flying.map((f) => (
                <motion.img
                  key={f.id}
                  src={f.imageSrc}
                  alt=""
                  aria-hidden="true"
                  initial={{
                    x: f.startX - f.size / 2,
                    y: f.startY - f.size / 2,
                    scale: 1,
                    opacity: 1,
                    rotate: 0,
                  }}
                  animate={{
                    x: f.endX - f.size / 2,
                    y: f.endY - f.size / 2,
                    scale: 0.2,
                    opacity: 0.4,
                    rotate: 480,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.75, ease: EASE.smooth }}
                  style={{
                    position: "absolute",
                    width: f.size,
                    height: f.size,
                    objectFit: "cover",
                    borderRadius: "50%",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                    willChange: "transform, opacity",
                  }}
                />
              ))}
            </AnimatePresence>
          </div>,
          document.body,
        )}
    </FlyCtx.Provider>
  );
};

/** Hook para acceder a la API en cualquier botón */
export const useFlyToCart = () => {
  const ctx = useContext(FlyCtx);
  if (!ctx) throw new Error("useFlyToCart debe estar dentro de <FlyToCartProvider>");
  return ctx.flyToCart;
};

/** Hook que registra tu icono del carrito como destino */
export const useFlyToCartTarget = () => {
  const ctx = useContext(FlyCtx);
  if (!ctx) throw new Error("useFlyToCartTarget debe estar dentro de <FlyToCartProvider>");
  const ref = useRef<HTMLElement | null>(null);
  // Registro una vez
  if (!ref.current) ctx.registerCartTarget(ref);
  return ref;
};
