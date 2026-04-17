import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform, animate } from "framer-motion";
import cartaP1 from "@/assets/cartaprimeraparte.PNG";
import cartaP4 from "@/assets/cartacuartaparte.PNG";
import cartaP5 from "@/assets/cartaquintaparte.PNG";
import { ChevronPattern, SpraySplat } from "@/components/brand/BrandIcons";
import { Reveal, JuicyButton } from "@/animations";

/* ─────────────────────────────────────────
   Pequeño hook — contador animado de 0 → value
   ───────────────────────────────────────── */
const useCounter = (to: number, duration = 1.6) => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return controls.stop;
  }, [inView, to, duration]);

  return { value, ref };
};

const Stat = ({ to, suffix = "", label }: { to: number; suffix?: string; label: string }) => {
  const { value, ref } = useCounter(to);
  return (
    <div className="text-center md:text-left">
      <span ref={ref} className="manifiesto-stat block">
        {value}
        {suffix}
      </span>
      <span className="font-heading text-xs md:text-sm tracking-[0.25em] uppercase text-foreground/55 mt-1 block">
        {label}
      </span>
    </div>
  );
};

/* ─────────────────────────────────────────
   Card del manifiesto con fragmento de carta
   ───────────────────────────────────────── */
type Pillar = {
  num: string;
  title: string;
  desc: string;
  carta: string;
};

const pillars: Pillar[] = [
  {
    num: "01",
    title: "Producto con apellidos",
    desc: "Vaca madurada +45 días, atún cortado a cuchillo, croquetas de cecina de la casa. No improvisamos.",
    carta: cartaP4,
  },
  {
    num: "02",
    title: "Una carta con intención",
    desc: "Picoteo, brasa, frescos, combinados. Cada sección está pensada para que la noche fluya sola.",
    carta: cartaP1,
  },
  {
    num: "03",
    title: "Ambiente de barrio, energía de centro",
    desc: "Estación de Cártama a tu ritmo: terraza, neón y una cocina que suena a viernes incluso los martes.",
    carta: cartaP5,
  },
];

const WhySection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax multinivel de los fragmentos de carta
  const floatY1 = useTransform(scrollYProgress, [0, 1], [80, -120]);
  const floatY2 = useTransform(scrollYProgress, [0, 1], [120, -180]);
  const floatRotate = useTransform(scrollYProgress, [0, 1], [-8, 12]);
  const bullY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const bullScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.05, 0.9]);

  return (
    <section
      id="manifiesto"
      ref={ref}
      className="relative py-32 px-6 bg-gradient-dark bg-noise overflow-hidden"
    >
      {/* Líneas horizontales */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

      {/* FRAGMENTOS DE CARTA FLOTANTES (parallax) */}
      <motion.img
        src={cartaP1}
        alt=""
        aria-hidden="true"
        className="manifiesto-float hidden lg:block"
        style={{
          y: floatY1,
          rotate: floatRotate,
          top: "10%",
          right: "-80px",
          width: "220px",
        }}
      />
      <motion.img
        src={cartaP5}
        alt=""
        aria-hidden="true"
        className="manifiesto-float hidden lg:block"
        style={{
          y: floatY2,
          rotate: useTransform(floatRotate, (v) => -v),
          bottom: "8%",
          left: "-60px",
          width: "180px",
        }}
      />

      {/* Chevrons y spray */}
      <div
        className="absolute top-10 left-4 text-primary/30 pointer-events-none"
        aria-hidden="true"
      >
        <ChevronPattern className="w-40 h-9" />
      </div>
      <div
        className="absolute bottom-10 right-6 text-primary/15 pointer-events-none hidden md:block"
        aria-hidden="true"
      >
        <SpraySplat className="w-28 h-28" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* HEADER — impactante */}
        <Reveal className="text-center mb-20">
          <span className="section-label">Manifiesto Miura</span>
          <h2 className="brush-title text-5xl md:text-8xl lg:text-[9rem] mt-4 leading-[0.9]">
            <span className="text-glow">ESTO NO</span>
            <br />
            <span className="text-stroke">es un restaurante</span>
          </h2>
          <p className="font-heading text-lg md:text-2xl text-foreground/65 tracking-[0.2em] uppercase mt-6">
            Es un <span className="text-primary">plan</span> que empieza con hambre
            <br className="hidden md:block" /> y termina con ganas de volver
          </p>
          <div className="divider-gold mt-10 mx-auto" />
        </Reveal>

        {/* STATS animadas */}
        <Reveal delay={0.1}>
          <div className="grid grid-cols-3 gap-6 md:gap-12 mb-24 max-w-3xl mx-auto">
            <Stat to={45} suffix="+" label="Dias de maduracion" />
            <Stat to={7} suffix="" label="Capitulos en la carta" />
            <Stat to={100} suffix="%" label="Producto seleccionado" />
          </div>
        </Reveal>

        {/* MANIFIESTO CARDS — cada una con su fragmento de carta */}
        <div className="grid md:grid-cols-3 gap-5">
          {pillars.map((p, i) => (
            <motion.article
              key={p.num}
              className="manifiesto-card group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.55,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 420, damping: 24 },
              }}
            >
              {/* Fragmento de carta como fondo */}
              <img
                src={p.carta}
                alt=""
                aria-hidden="true"
                className="manifiesto-carta-bg w-full h-full object-cover object-top"
              />

              <div className="relative z-10">
                <span className="manifiesto-number block">{p.num}</span>
                <div className="divider-gold mt-4 mb-5 mx-0 max-w-[60px]" />
                <h3 className="font-heading text-xl md:text-2xl tracking-[0.12em] uppercase text-foreground/95 leading-tight">
                  {p.title}
                </h3>
                <p className="text-foreground/65 font-body text-base mt-4 leading-relaxed">
                  {p.desc}
                </p>

                {/* Decorative arrow that moves on hover */}
                <motion.div
                  className="mt-6 flex items-center gap-2 text-primary font-heading text-xs tracking-[0.3em] uppercase"
                  initial={{ x: 0 }}
                  whileHover={{ x: 6 }}
                >
                  <span>Sigue mirando</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA final */}
        <Reveal delay={0.2} className="text-center mt-20">
          <JuicyButton
            size="lg"
            onClick={() =>
              document.getElementById("carta-real")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Abrir la carta
          </JuicyButton>
        </Reveal>
      </div>
    </section>
  );
};

export default WhySection;
