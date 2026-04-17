import { useRef, useState, type MouseEvent } from "react";
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
  { src: cartaP0, label: "Para Comenzar", color: "#ffc300" },
  { src: cartaP1, label: "Para Compartir", color: "#ffc300" },
  { src: cartaP5, label: "Frescos & Bocados", color: "#ff3c5f" },
  { src: cartaP4, label: "De la Olla & Brasa", color: "#ffc300" },
  { src: cartaP3, label: "Cervezas & Refrescos", color: "#ffc300" },
  { src: cartaP2, label: "Combinados", color: "#ffc300" },
  { src: cartaP6, label: "Vinos", color: "#ff3c5f" },
];

const CartaShowcase = () => {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0px", "-40px"]);

  // Tilt 3D siguiendo el ratón (MotionValues → 0 re-renders)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smoothX = useSpring(mx, { stiffness: 220, damping: 22, mass: 0.7 });
  const smoothY = useSpring(my, { stiffness: 220, damping: 22, mass: 0.7 });
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [8, -8]);

  const handleTilt = (e: MouseEvent<HTMLDivElement>) => {
    if (!viewerRef.current) return;
    const r = viewerRef.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const resetTilt = () => {
    mx.set(0);
    my.set(0);
  };

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
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[80px]" />
      </motion.div>

      {/* Decorative brand icons */}
      <div className="absolute top-16 right-8 text-primary/20 hidden lg:block soft-float" aria-hidden="true">
        <LipsIcon className="w-32 h-20" />
      </div>
      <div className="absolute bottom-20 left-6 text-primary/15 hidden lg:block" style={{ animation: "soft-float 4.5s ease-in-out infinite reverse" }} aria-hidden="true">
        <BullHead className="w-28 h-28" />
      </div>
      <div className="absolute top-8 left-2 text-primary/30 pointer-events-none soft-float" aria-hidden="true">
        <ChevronPattern className="w-44 h-10" />
      </div>
      <div className="absolute bottom-8 right-4 text-primary/25 pointer-events-none" aria-hidden="true">
        <ChevronPattern className="w-44 h-10" direction="left" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          style={{ y: titleY }}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="section-label">La Carta Real</span>
          <h2 className="brush-title neon-flicker text-5xl md:text-8xl mt-4 leading-none">
            NEGRO · BRASA · NEON
          </h2>
          <p className="font-body text-lg md:text-xl text-foreground/65 max-w-xl mx-auto mt-5 leading-snug">
            La misma carta física que tienes en mano, ahora en pantalla. Contraste, actitud y sabor.
          </p>
          <div className="divider-gold mx-auto mt-7" />
        </motion.div>

        {/* Main display */}
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-start">

          {/* Thumbnail strip — left */}
          <div className="hidden lg:flex flex-col gap-3 pt-8">
            {cartaPages.slice(0, 4).map((page, i) => (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                onHoverStart={() => setHovered(i)}
                onHoverEnd={() => setHovered(null)}
                className={`carta-thumb group ${active === i ? "carta-thumb--active" : ""}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ x: 6, scale: 1.02 }}
              >
                <img
                  src={page.src}
                  alt={page.label}
                  className="w-full h-full object-cover object-top transition-all duration-500 group-hover:brightness-110"
                />
                <div className="carta-thumb-label">
                  <span>{page.label}</span>
                </div>
                {active === i && (
                  <motion.div
                    layoutId="thumb-active-bar"
                    className="absolute inset-y-0 right-0 w-1 bg-primary"
                    style={{ boxShadow: "0 0 12px hsl(46 100% 53%)" }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Main carta viewer */}
          <motion.div
            ref={viewerRef}
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
            className="relative carta-main-viewer"
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
              transformPerspective: 1200,
              willChange: "transform",
            }}
          >
            {/* Corner decorations */}
            <div className="corner-deco corner-deco--tl" />
            <div className="corner-deco corner-deco--tr" />
            <div className="corner-deco corner-deco--bl" />
            <div className="corner-deco corner-deco--br" />

            {/* Neon frame glow */}
            <div className="carta-neon-frame" aria-hidden="true" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.94, rotateY: -8 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 1.04, rotateY: 8 }}
                transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative overflow-hidden"
                style={{ perspective: "1000px", transform: "translateZ(30px)" }}
              >
                <img
                  src={cartaPages[active].src}
                  alt={cartaPages[active].label}
                  className="w-full h-auto block"
                  style={{ maxHeight: "75vh", objectFit: "contain", objectPosition: "top" }}
                />
                {/* Glare sweep on load */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ x: "-100%", opacity: 0.6 }}
                  animate={{ x: "200%", opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  style={{
                    background: "linear-gradient(105deg, transparent 40%, rgba(255,195,0,0.25) 50%, transparent 60%)",
                  }}
                />
                {/* Label badge */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="absolute bottom-4 left-4 neon-pill text-sm"
                >
                  {cartaPages[active].label}
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <div className="flex justify-between mt-4">
              <motion.button
                className="carta-nav-btn"
                onClick={() => setActive((p) => (p - 1 + cartaPages.length) % cartaPages.length)}
                whileHover={{ scale: 1.1, x: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Página anterior"
              >
                ‹ PREV
              </motion.button>
              <div className="flex gap-2 items-center">
                {cartaPages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Página ${i + 1}`}
                    className={`transition-all duration-300 rounded-sm ${
                      i === active
                        ? "w-6 h-2 bg-primary shadow-[0_0_8px_hsl(46_100%_53%)]"
                        : "w-2 h-2 bg-foreground/25 hover:bg-primary/60"
                    }`}
                  />
                ))}
              </div>
              <motion.button
                className="carta-nav-btn"
                onClick={() => setActive((p) => (p + 1) % cartaPages.length)}
                whileHover={{ scale: 1.1, x: 3 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Página siguiente"
              >
                NEXT ›
              </motion.button>
            </div>
          </motion.div>

          {/* Thumbnail strip — right */}
          <div className="hidden lg:flex flex-col gap-3 pt-8">
            {cartaPages.slice(4).map((page, i) => {
              const realIdx = i + 4;
              return (
                <motion.button
                  key={realIdx}
                  onClick={() => setActive(realIdx)}
                  onHoverStart={() => setHovered(realIdx)}
                  onHoverEnd={() => setHovered(null)}
                  className={`carta-thumb group ${active === realIdx ? "carta-thumb--active" : ""}`}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  whileHover={{ x: -6, scale: 1.02 }}
                >
                  <img
                    src={page.src}
                    alt={page.label}
                    className="w-full h-full object-cover object-top transition-all duration-500 group-hover:brightness-110"
                  />
                  <div className="carta-thumb-label">
                    <span>{page.label}</span>
                  </div>
                  {active === realIdx && (
                    <motion.div
                      className="absolute inset-y-0 left-0 w-1 bg-primary"
                      style={{ boxShadow: "0 0 12px hsl(46 100% 53%)" }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Mobile carousel dots only */}
        <div className="lg:hidden mt-6 flex gap-3 overflow-x-auto pb-2 scrollbar-none">
          {cartaPages.map((page, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(i)}
              className={`carta-thumb-mobile shrink-0 ${active === i ? "carta-thumb-mobile--active" : ""}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={page.src} alt={page.label} className="w-full h-full object-cover object-top" />
              {active === i && (
                <div className="absolute inset-0 border-2 border-primary" style={{ boxShadow: "inset 0 0 12px hsl(46 100% 53% / 0.3)" }} />
              )}
            </motion.button>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="font-heading text-foreground/50 uppercase tracking-[0.3em] text-sm mb-5">
            ¿Te convence? Reserva ya tu mesa
          </p>
          <motion.button
            onClick={() => document.getElementById("reservas")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-trap-gold text-base px-10 py-4 carta-cta-btn"
            whileHover={{ scale: 1.04, boxShadow: "0 0 32px hsl(46 100% 53% / 0.55)" }}
            whileTap={{ scale: 0.97 }}
          >
            Reservar Mesa
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CartaShowcase;
