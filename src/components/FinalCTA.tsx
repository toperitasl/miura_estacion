import { motion } from "framer-motion";

const FinalCTA = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="absolute inset-0 bg-noise" />

      {/* Decorative border frame */}
      <div className="absolute top-10 left-10 right-10 bottom-10 border border-primary/8 pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-graffiti text-foreground leading-tight glitch-text"
            data-text="SI HAS LLEGADO HASTA AQUI"
          >
            SI HAS LLEGADO HASTA AQUI
          </h2>
          <p className="font-heading text-2xl md:text-3xl text-accent-gold tracking-[0.15em] mt-4 uppercase">
            Ya sabes que quieres venir
          </p>
          <div className="divider-red mt-8 mb-12" />

          <a href="tel:+34621141306" className="btn-trap text-xl md:text-2xl py-5 px-14">
            RESERVAR MESA
          </a>

          <p className="mt-10 text-muted-foreground font-body text-sm italic">
            "El sitio del que hablaras despues"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
