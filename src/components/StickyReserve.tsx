import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const StickyReserve = () => {
  const [show, setShow] = useState(false);
  const frameRef = useRef<number | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      if (frameRef.current !== null) {
        return;
      }

      frameRef.current = window.requestAnimationFrame(() => {
        const nextShow = window.scrollY > 560;
        setShow((prev) => (prev === nextShow ? prev : nextShow));
        frameRef.current = null;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={
            reduceMotion
              ? { duration: 0.2 }
              : { type: "spring", damping: 28, stiffness: 240, mass: 0.7 }
          }
          className="fixed bottom-0 left-0 right-0 z-50 p-3 md:hidden"
        >
          <div className="bg-background/92 backdrop-blur-xl border border-primary/25 px-4 py-3 shadow-[0_-10px_26px_rgba(0,0,0,0.35)]">
            <a href="tel:+34621141306" className="btn-trap-gold w-full flex justify-center">
              <span>Reservar Mesa</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyReserve;
