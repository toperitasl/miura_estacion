import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import cartaP0 from "@/assets/cartapartecero.PNG";
import cartaP1 from "@/assets/cartaprimeraparte.PNG";
import cartaP2 from "@/assets/cartasegundaparte.PNG";
import cartaP3 from "@/assets/cartaterceraparte.PNG";
import cartaP4 from "@/assets/cartacuartaparte.PNG";
import cartaP5 from "@/assets/cartaquintaparte.PNG";
import cartaP6 from "@/assets/cartasextaparte.PNG";
import { ChevronPattern } from "@/components/brand/BrandIcons";

const pages = [
  { src: cartaP0, label: "Para Comenzar" },
  { src: cartaP1, label: "Para Compartir" },
  { src: cartaP2, label: "Combinados" },
  { src: cartaP3, label: "Cervezas & Refrescos" },
  { src: cartaP4, label: "De la Olla & Brasa" },
  { src: cartaP5, label: "Frescos & Bocados" },
  { src: cartaP6, label: "Vinos" },
];

// duplicado 2× para loop sin costura
const loop = [...pages, ...pages];

/* ─────────────────────────────────────────────
   LIGHTBOX — fullscreen zoom de la carta real
   ───────────────────────────────────────────── */
const Lightbox = ({
  index,
  onClose,
  onNext,
  onPrev,
}: {
  index: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) => {
  const page = pages[index];

  // Teclado: Escape cierra, flechas navegan
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, onNext, onPrev]);

  return createPortal(
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
    >
      {/* Backdrop — click fuera cierra */}
      <motion.div
        className="absolute inset-0 bg-black/92 backdrop-blur-sm cursor-zoom-out"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Contenedor de la imagen */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={index}
          className="relative z-10 flex flex-col items-center select-none"
          initial={{ opacity: 0, scale: 0.88, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1.04, y: -10 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          style={{ maxWidth: "min(90vw, 620px)", maxHeight: "92vh" }}
        >
          {/* Glare sweep */}
          <motion.div
            className="absolute inset-0 pointer-events-none z-20 rounded"
            initial={{ x: "-100%", opacity: 0.7 }}
            animate={{ x: "200%", opacity: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            style={{
              background:
                "linear-gradient(108deg, transparent 38%, rgba(255,195,0,0.3) 50%, transparent 62%)",
            }}
          />

          {/* Marco neón */}
          <div
            className="absolute -inset-[3px] z-10 pointer-events-none rounded"
            style={{
              border: "2px solid hsl(46 100% 53% / 0.7)",
              boxShadow:
                "0 0 16px hsl(46 100% 53% / 0.5), inset 0 0 12px hsl(46 100% 53% / 0.12)",
            }}
          />

          <img
            src={page.src}
            alt={page.label}
            className="block w-full h-auto rounded"
            style={{ maxHeight: "84vh", objectFit: "contain" }}
            draggable={false}
          />

          {/* Label inferior */}
          <div className="mt-3 flex items-center gap-4">
            <span
              className="font-heading text-xs tracking-[0.3em] uppercase text-primary/70"
            >
              {index + 1} / {pages.length}
            </span>
            <span className="neon-pill text-sm">{page.label}</span>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Botón cerrar */}
      <motion.button
        className="absolute top-5 right-5 z-20 w-11 h-11 flex items-center justify-center rounded-full border border-primary/40 bg-background/70 backdrop-blur font-heading text-primary text-xl hover:border-primary hover:bg-primary/20 transition-colors"
        onClick={onClose}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.92 }}
        aria-label="Cerrar"
      >
        ✕
      </motion.button>

      {/* Flecha izquierda */}
      <motion.button
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full border border-primary/35 bg-background/60 backdrop-blur font-heading text-primary text-2xl hover:bg-primary/20 hover:border-primary transition-colors"
        onClick={onPrev}
        whileHover={{ scale: 1.12, x: -3 }}
        whileTap={{ scale: 0.92 }}
        aria-label="Anterior"
      >
        ‹
      </motion.button>

      {/* Flecha derecha */}
      <motion.button
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full border border-primary/35 bg-background/60 backdrop-blur font-heading text-primary text-2xl hover:bg-primary/20 hover:border-primary transition-colors"
        onClick={onNext}
        whileHover={{ scale: 1.12, x: 3 }}
        whileTap={{ scale: 0.92 }}
        aria-label="Siguiente"
      >
        ›
      </motion.button>
    </motion.div>,
    document.body,
  );
};

/* ─────────────────────────────────────────────
   BANDA INFINITA
   ───────────────────────────────────────────── */
const CartaMarquee = () => {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-1.5, 1.5]);

  const handleOpen = useCallback((realIdx: number) => {
    // El loop tiene índices 0-13; mapeamos al índice real (0-6)
    setLightboxIdx(realIdx % pages.length);
  }, []);

  const handleClose = useCallback(() => setLightboxIdx(null), []);
  const handleNext = useCallback(
    () => setLightboxIdx((i) => ((i ?? 0) + 1) % pages.length),
    [],
  );
  const handlePrev = useCallback(
    () => setLightboxIdx((i) => ((i ?? 0) - 1 + pages.length) % pages.length),
    [],
  );

  return (
    <section ref={ref} className="relative py-20 bg-background overflow-hidden" aria-label="Vista previa de la carta">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="absolute left-0 top-8 text-primary/25 pointer-events-none" aria-hidden="true">
        <ChevronPattern className="w-48 h-10" />
      </div>
      <div className="absolute right-0 bottom-8 text-primary/25 pointer-events-none" aria-hidden="true">
        <ChevronPattern className="w-48 h-10" direction="left" />
      </div>

      {/* Label */}
      <motion.div
        className="text-center mb-10 relative z-10 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        <span className="section-label">Echa un vistazo</span>
        <h3 className="brush-title text-3xl md:text-5xl mt-3 text-primary">
          NUESTRA CARTA
        </h3>
        <p className="text-foreground/50 font-body text-sm mt-2">
          Toca una página para verla al detalle
        </p>
      </motion.div>

      {/* Banda */}
      <motion.div style={{ y, rotate, willChange: "transform" }} className="relative">
        <div className="carta-marquee-track">
          {loop.map((page, i) => (
            <motion.button
              key={i}
              onClick={() => handleOpen(i)}
              className="carta-marquee-item"
              whileHover={{
                scale: 1.08,
                y: -10,
                transition: { type: "spring", stiffness: 400, damping: 22 },
              }}
              aria-label={`Ver ${page.label} en detalle`}
            >
              <img
                src={page.src}
                alt={page.label}
                loading="lazy"
                className="w-full h-full object-cover object-top pointer-events-none"
              />
              <div className="carta-marquee-glow" />
              {/* Tooltip label */}
              <div className="carta-marquee-tooltip">
                <span className="font-heading text-[0.6rem] tracking-[0.2em] uppercase text-primary/90">
                  {page.label}
                </span>
                <span className="font-heading text-[0.55rem] tracking-widest uppercase text-foreground/50 block mt-0.5">
                  Toca para ampliar
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        <div className="carta-marquee-mask carta-marquee-mask--l" />
        <div className="carta-marquee-mask carta-marquee-mask--r" />
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <Lightbox
            index={lightboxIdx}
            onClose={handleClose}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default CartaMarquee;
