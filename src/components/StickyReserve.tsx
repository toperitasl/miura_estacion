import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const StickyReserve = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-3 md:hidden"
        >
          <div className="bg-background/95 backdrop-blur-md border-t border-primary/30 px-4 py-3">
            <a
              href="tel:+34621141306"
              className="btn-trap w-full text-center text-lg py-3.5 block"
            >
              Reservar Mesa
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyReserve;
