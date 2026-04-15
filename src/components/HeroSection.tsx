import { motion } from "framer-motion";
import heroFood from "@/assets/hero-food.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroFood}
          alt="Miura street food"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Location badge */}
          <motion.div
            className="inline-flex items-center gap-3 px-5 py-2 border border-primary/40 mb-8 mx-auto md:mx-0 md:ml-0 md:mr-[80px] md:-translate-x-16 lg:-translate-x-24"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <span className="w-2 h-2 bg-primary animate-pulse" />
            <span className="text-primary font-heading text-sm tracking-[0.25em] uppercase">
              Estacion de Cartama -- Malaga
            </span>
          </motion.div>

          {/* Brand - graffiti style with glitch */}
          <h1
            className="font-display text-8xl md:text-[11rem] lg:text-[14rem] text-glow leading-none tracking-tight glitch-wrap parpadeo"
            data-text="MIURA"
          >
            MIURA
          </h1>

          {/* Subtitle */}
          <motion.p
            className="font-heading text-2xl md:text-4xl text-foreground/80 tracking-[0.2em] uppercase mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Tragos <span className="text-stroke">&</span> Bocados
          </motion.p>

          <div className="divider-gold my-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <p className="font-body text-lg md:text-xl text-foreground/60 font-light max-w-xl mx-auto">
            Street food elevado a otro nivel
          </p>
        </motion.div>

        {/* CTA - Trapezoid buttons like xpecado */}
        <motion.div
          className="flex flex-col sm:flex-row gap-5 justify-center mt-14"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
        >
          <button onClick={() => scrollTo("reservas")} className="btn-trap-gold">
            <span>Reservar Mesa</span>
          </button>
          <button onClick={() => scrollTo("carta")} className="btn-trap">
            <span>Ver Carta</span>
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="font-heading text-xs tracking-[0.3em] uppercase text-primary/50">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-primary/60 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
