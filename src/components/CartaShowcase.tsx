import { useEffect, useRef, useState, type MouseEvent } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import cartaP0 from "@/assets/cartapartecero.PNG";
import cartaP1 from "@/assets/cartaprimeraparte.PNG";
import cartaP2 from "@/assets/cartasegundaparte.PNG";
import cartaP3 from "@/assets/cartaterceraparte.PNG";
import cartaP4 from "@/assets/cartacuartaparte.PNG";
import cartaP5 from "@/assets/cartaquintaparte.PNG";
import cartaP6 from "@/assets/cartasextaparte.PNG";
import { ChevronPattern, LipsIcon, BullHead } from "@/components/brand/BrandIcons";

const cartaPages = [
  { src: cartaP0, label: "Para Comenzar" },
  { src: cartaP1, label: "Para Compartir" },
  { src: cartaP5, label: "Frescos & Bocados" },
  { src: cartaP4, label: "De la Olla & Brasa" },
  { src: cartaP3, label: "Cervezas & Refrescos" },
  { src: cartaP2, label: "Combinados" },
  { src: cartaP6, label: "Vinos" },
];

// Precarga todas las imágenes en cuanto el componente monta → sin lag al navegar
const usePreloadImages = (srcs: string[]) => {
  useEffect(() => {
    srcs.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
};

const CartaShowcase = () => {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<HTMLDivElement>(null);

  usePreloadImages(cartaPages.map((p) => p.src));

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0px", "-40px"]);

  // Tilt 3D con el ratón (MotionValues → 0 re-renders)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smoothX = useSpring(mx, { stiffness: 220, damping: 24, mass: 0.6 });
  const smoothY = useSpring(my, { stiffness: 220, damping: 24, mass: 0.6 });
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-9, 9]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [7, -7]);

  const handleTilt = (e: MouseEvent<HTMLDivElement>) => {
    if (!viewerRef.current) return;
    const r = viewerRef.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const resetTilt = () => { mx.set(0); my.set(0); };

  const goPrev = () => setActive((p) => (p - 1 + cartaPages.length) % cartaPages.length);
  const goNext = () => setActive((p) => (p + 1) % cartaPages.length);

  return (
    <section
      ref={sectionRef}
      id="carta-real"
      className="relative py-28 px-4 md:px-8 bg-gradient-dark bg-noise"
    >
      {/* Scanline overlay */}
      <div className="scanlines-overlay pointer-events-none" aria-hidden="true" />

      {/* Parallax BG glow */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[320px] h-[320px] bg-primary/3 rounded-full blur-[70px]" />
      </motion.div>

      {/* Decorative icons */}
      <div className="absolute top-16 right-8 text-primary/18 hidden lg:block soft-float" aria-hidden="true">
        <LipsIcon className="w-28 h-18" />
      </div>
      <div className="absolute bottom-20 left-6 text-primary/13 hidden lg:block soft-float-reverse" aria-hidden="true">
        <BullHead className="w-24 h-24" />
      </div>
      <div className="absolute top-8 left-2 text-primary/28 pointer-events-none soft-float" aria-hidden="true">
        <ChevronPattern className="w-40 h-9" />
      </div>
      <div className="absolute bottom-8 right-4 text-primary/22 pointer-events-none" aria-hidden="true">
        <ChevronPattern className="w-40 h-9" direction="left" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          style={{ y: titleY }}
          className="text-center mb-14"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">La Carta Real</span>
          <h2 className="brush-title neon-flicker text-5xl md:text-8xl mt-4 leading-none">
            NEGRO · BRASA · NEON
          </h2>
          <p className="font-body text-lg md:text-xl text-foreground/60 max-w-xl mx-auto mt-4 leading-snug">
            La carta física que tienes en mano, ahora en pantalla. Contraste, actitud y sabor.
          </p>
          <div className="divider-gold mx-auto mt-6" />
        </motion.div>

        {/* Layout principal */}
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-8 items-start">

          {/* Thumbnails izquierda */}
          <div className="hidden lg:flex flex-col gap-3 pt-4">
            {cartaPages.slice(0, 4).map((page, i) => (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                className={`carta-thumb group ${active === i ? "carta-thumb--active" : ""}`}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ x: 5, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <img src={page.src} alt={page.label} className="w-full h-full object-cover object-top" loading="eager" />
                <div className="carta-thumb-label"><span>{page.label}</span></div>
                {active === i && (
                  <motion.div
                    layoutId="active-bar-l"
                    className="absolute inset-y-0 right-0 w-1 bg-primary"
                    style={{ boxShadow: "0 0 10px hsl(46 100% 53%)" }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Visor principal — altura fija = sin salto */}
          <motion.div
            ref={viewerRef}
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
            className="relative carta-main-viewer"
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
              transformPerspective: 1100,
              willChange: "transform",
            }}
          >
            <div className="corner-deco corner-deco--tl" />
            <div className="corner-deco corner-deco--tr" />
            <div className="corner-deco corner-deco--bl" />
            <div className="corner-deco corner-deco--br" />
            <div className="carta-neon-frame" aria-hidden="true" />

            {/*
              CONTENEDOR DE ALTURA FIJA → el AnimatePresence nunca mueve el DOM fuera.
              position:relative + overflow:hidden + aspect-ratio fijo = sin salto.
            */}
            <div className="carta-viewer-fixed">
              <AnimatePresence mode="sync">
                <motion.div
                  key={active}
                  className="carta-viewer-slide"
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24, position: "absolute" as const }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transform: "translateZ(28px)" }}
                >
                  <img
                    src={cartaPages[active].src}
                    alt={cartaPages[active].label}
                    className="w-full h-full object-contain object-top select-none"
                    draggable={false}
                  />

                  {/* Glare sweep */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ x: "-100%", opacity: 0.55 }}
                    animate={{ x: "220%", opacity: 0 }}
                    transition={{ duration: 0.65, ease: "easeOut" }}
                    style={{
                      background:
                        "linear-gradient(108deg, transparent 38%, rgba(255,195,0,0.22) 50%, transparent 62%)",
                    }}
                  />

                  {/* Badge */}
                  <motion.div
                    key={`badge-${active}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12 }}
                    className="absolute bottom-3 left-3 neon-pill text-xs"
                  >
                    {cartaPages[active].label}
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navegación */}
            <div className="flex items-center justify-between mt-4 gap-2">
              <motion.button
                className="carta-nav-btn"
                onClick={goPrev}
                whileHover={{ scale: 1.08, x: -2 }}
                whileTap={{ scale: 0.94 }}
                aria-label="Página anterior"
              >
                ‹ Anterior
              </motion.button>

              <div className="flex gap-1.5 items-center">
                {cartaPages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Página ${i + 1}`}
                    className={`transition-all duration-200 rounded-sm ${
                      i === active
                        ? "w-5 h-1.5 bg-primary shadow-[0_0_6px_hsl(46_100%_53%)]"
                        : "w-1.5 h-1.5 bg-foreground/20 hover:bg-primary/50"
                    }`}
                  />
                ))}
              </div>

              <motion.button
                className="carta-nav-btn"
                onClick={goNext}
                whileHover={{ scale: 1.08, x: 2 }}
                whileTap={{ scale: 0.94 }}
                aria-label="Página siguiente"
              >
                Siguiente ›
              </motion.button>
            </div>
          </motion.div>

          {/* Thumbnails derecha */}
          <div className="hidden lg:flex flex-col gap-3 pt-4">
            {cartaPages.slice(4).map((page, i) => {
              const realIdx = i + 4;
              return (
                <motion.button
                  key={realIdx}
                  onClick={() => setActive(realIdx)}
                  className={`carta-thumb group ${active === realIdx ? "carta-thumb--active" : ""}`}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ x: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <img src={page.src} alt={page.label} className="w-full h-full object-cover object-top" loading="eager" />
                  <div className="carta-thumb-label"><span>{page.label}</span></div>
                  {active === realIdx && (
                    <motion.div
                      layoutId="active-bar-r"
                      className="absolute inset-y-0 left-0 w-1 bg-primary"
                      style={{ boxShadow: "0 0 10px hsl(46 100% 53%)" }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Mobile thumbnails */}
        <div className="lg:hidden mt-5 flex gap-2.5 overflow-x-auto pb-2 scrollbar-none">
          {cartaPages.map((page, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(i)}
              className={`carta-thumb-mobile shrink-0 ${active === i ? "carta-thumb-mobile--active" : ""}`}
              whileTap={{ scale: 0.94 }}
            >
              <img src={page.src} alt={page.label} className="w-full h-full object-cover object-top" />
              {active === i && (
                <div
                  className="absolute inset-0 border-2 border-primary"
                  style={{ boxShadow: "inset 0 0 10px hsl(46 100% 53% / 0.25)" }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="font-heading text-foreground/45 uppercase tracking-[0.3em] text-sm mb-5">
            ¿Te convence? Reserva ya tu mesa
          </p>
          <motion.button
            onClick={() => document.getElementById("reservas")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-trap-gold text-base px-10 py-4"
            whileHover={{ scale: 1.04, boxShadow: "0 0 28px hsl(46 100% 53% / 0.5)" }}
            whileTap={{ scale: 0.96 }}
          >
            Reservar Mesa
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CartaShowcase;
