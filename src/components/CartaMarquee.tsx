import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import cartaP0 from "@/assets/cartapartecero.PNG";
import cartaP1 from "@/assets/cartaprimeraparte.PNG";
import cartaP2 from "@/assets/cartasegundaparte.PNG";
import cartaP3 from "@/assets/cartaterceraparte.PNG";
import cartaP4 from "@/assets/cartacuartaparte.PNG";
import cartaP5 from "@/assets/cartaquintaparte.PNG";
import cartaP6 from "@/assets/cartasextaparte.PNG";
import { ChevronPattern } from "@/components/brand/BrandIcons";

/**
 * Banda infinita con fragmentos de la carta física.
 * - Scroll horizontal auto (CSS keyframes) — barato y fluido.
 * - Parallax vertical ligero (framer-motion useScroll) — el contenido flota cuando scrolleas.
 * - Duplicado 2× para loop sin costura.
 */
const pages = [cartaP0, cartaP1, cartaP2, cartaP3, cartaP4, cartaP5, cartaP6];
const loop = [...pages, ...pages];

const CartaMarquee = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Parallax sutil: la banda sube mientras la sección baja
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-1.5, 1.5]);

  return (
    <section
      ref={ref}
      className="relative py-20 bg-background overflow-hidden"
      aria-label="Vista previa de la carta"
    >
      {/* Líneas superior / inferior */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* Chevrons decorativos */}
      <div
        className="absolute left-0 top-8 text-primary/25 pointer-events-none"
        aria-hidden="true"
      >
        <ChevronPattern className="w-48 h-10" />
      </div>
      <div
        className="absolute right-0 bottom-8 text-primary/25 pointer-events-none"
        aria-hidden="true"
      >
        <ChevronPattern className="w-48 h-10" direction="left" />
      </div>

      {/* Label flotante */}
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
      </motion.div>

      {/* Banda infinita */}
      <motion.div
        style={{ y, rotate, willChange: "transform" }}
        className="relative"
      >
        <div className="carta-marquee-track">
          {loop.map((src, i) => (
            <motion.div
              key={i}
              className="carta-marquee-item"
              whileHover={{
                scale: 1.08,
                y: -10,
                transition: { type: "spring", stiffness: 400, damping: 22 },
              }}
            >
              <img
                src={src}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="w-full h-full object-cover object-top"
              />
              {/* Overlay neón al hacer hover */}
              <div className="carta-marquee-glow" />
            </motion.div>
          ))}
        </div>

        {/* Máscaras laterales (fade-out izquierda/derecha) */}
        <div className="carta-marquee-mask carta-marquee-mask--l" />
        <div className="carta-marquee-mask carta-marquee-mask--r" />
      </motion.div>

      {/* Sub-texto */}
      <motion.p
        className="text-center text-foreground/55 mt-8 font-body text-sm md:text-base px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        Pasa por encima para congelar una página — o desplázate para verla al completo más abajo.
      </motion.p>
    </section>
  );
};

export default CartaMarquee;
