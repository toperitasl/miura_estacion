import { motion } from "framer-motion";
import { Reveal, JuicyButton } from "@/animations";

const ReservationSection = () => {
  return (
    <section id="reservas" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute inset-0 bg-noise" />

      {/* Líneas verticales de ambiente */}
      {[1 / 4, 1 / 2, 3 / 4].map((pos, i) => (
        <motion.div
          key={i}
          className="absolute top-0 w-px h-full bg-primary/5"
          style={{ left: `${pos * 100}%` }}
          animate={{ opacity: [0.03, 0.09, 0.03] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: i * 1.2 }}
        />
      ))}

      <div className="max-w-3xl mx-auto relative z-10">
        <Reveal className="text-center">
          <span className="font-heading text-sm tracking-[0.4em] uppercase text-primary/70">
            Reserva
          </span>
          <h2 className="text-5xl md:text-7xl font-display text-glow mt-4 leading-none">
            RESERVA TU MESA
          </h2>
          <div className="divider-gold mt-8 mb-10" />

          <p className="text-foreground/60 font-body text-lg md:text-xl font-light max-w-lg mx-auto">
            No te quedes sin sitio. Las mejores noches empiezan con una buena reserva.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="text-center">
          <motion.div
            className="inline-flex items-center gap-3 mt-8 px-6 py-3"
            style={{
              border: "1px solid",
              borderColor: "hsl(45 100% 50% / 0.3)",
              clipPath: "polygon(2% 0%, 100% 0%, 98% 100%, 0% 100%)",
            }}
            animate={{
              borderColor: [
                "hsl(45 100% 50% / 0.2)",
                "hsl(45 100% 50% / 0.6)",
                "hsl(45 100% 50% / 0.2)",
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <span className="w-2 h-2 bg-primary animate-pulse flex-shrink-0" />
            <span className="text-primary font-heading text-sm tracking-[0.2em] uppercase">
              Plazas limitadas los fines de semana
            </span>
          </motion.div>
        </Reveal>

        <Reveal delay={0.25} className="text-center mt-12">
          <JuicyButton
            size="lg"
            onClick={() => (window.location.href = "tel:+34621141306")}
            className="text-lg md:text-xl"
          >
            Reservar Ahora
          </JuicyButton>

          <p className="mt-8 text-muted-foreground font-body text-sm">
            Llama al{" "}
            <a
              href="tel:+34621141306"
              className="text-primary hover:text-white font-medium transition-colors duration-300"
            >
              +34 621 14 13 06
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default ReservationSection;
