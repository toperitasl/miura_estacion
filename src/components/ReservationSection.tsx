import { motion } from "framer-motion";

const ReservationSection = () => {
  return (
    <section id="reservas" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute inset-0 stripe-accent pointer-events-none" />

      {/* Vertical accent lines */}
      <motion.div
        className="absolute top-0 left-1/4 w-px h-full bg-primary/5"
        animate={{ opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-0 right-1/3 w-px h-full bg-primary/5"
        animate={{ opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-heading text-sm tracking-[0.4em] uppercase text-primary">No esperes mas</span>
          <h2 className="text-5xl md:text-8xl font-graffiti text-foreground mt-4 leading-tight">
            RESERVA TU MESA
          </h2>
          <div className="divider-red mt-8 mb-10" />

          <p className="text-foreground/70 font-body text-lg md:text-xl font-light max-w-lg mx-auto">
            No te quedes sin tu sitio. Las mejores noches empiezan con una buena reserva.
          </p>

          {/* Urgency badge */}
          <motion.div
            className="inline-flex items-center gap-3 mt-8 px-6 py-3 border border-primary/40 bg-primary/5"
            style={{ clipPath: "polygon(2% 0%, 100% 0%, 98% 100%, 0% 100%)" }}
            animate={{ borderColor: ["hsl(355 75% 45% / 0.3)", "hsl(355 75% 45% / 0.6)", "hsl(355 75% 45% / 0.3)"] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <span className="w-2 h-2 bg-primary animate-pulse" />
            <span className="text-primary font-heading text-sm tracking-[0.2em] uppercase">
              Plazas limitadas los fines de semana
            </span>
          </motion.div>

          {/* Main CTA */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <a href="tel:+34621141306" className="btn-trap text-2xl md:text-3xl py-6 px-16">
              RESERVAR AHORA
            </a>
          </motion.div>

          <p className="mt-10 text-muted-foreground font-body text-sm">
            Llama directamente al{" "}
            <a href="tel:+34621141306" className="text-accent-gold hover:text-primary font-semibold transition-colors duration-300">
              +34 621 14 13 06
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ReservationSection;
