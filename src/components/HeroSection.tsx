import { motion, useReducedMotion } from "framer-motion";
import heroFood from "@/assets/hero-food.jpg";
import { ChevronPattern } from "@/components/brand/BrandIcons";
import { HeroStagger, HeroItem, JuicyButton } from "@/animations";

const HeroSection = () => {
  const reduceMotion = useReducedMotion();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-marble">
      {/* Background image + overlay */}
      <div className="absolute inset-0">
        <img
          src={heroFood}
          alt="Miura street food"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/92 via-background/80 to-background" />
      </div>

      {/* Decoración lateral */}
      <div
        className="absolute top-24 left-6 lg:left-14 text-primary/25 pointer-events-none hidden md:block"
        aria-hidden="true"
      >
        <ChevronPattern className="w-40 h-9" />
      </div>

      {/* Contenido principal */}
      <HeroStagger className="relative z-10 text-center px-6 max-w-6xl pt-24 md:pt-28">
        <HeroItem>
          <span className="neon-pill">Estacion de Cartama · Malaga</span>
        </HeroItem>

        <HeroItem>
          <h1
            className="brush-title neon-flicker text-[5rem] sm:text-[7rem] md:text-[10rem] lg:text-[12rem] mt-6 leading-none glitch-text"
            data-text="MIURA"
          >
            MIURA
          </h1>
        </HeroItem>

        <HeroItem>
          <p className="font-heading text-xl md:text-3xl text-foreground/85 tracking-[0.18em] uppercase mt-2">
            Tragos <span className="text-stroke">&amp;</span> bocados
          </p>
        </HeroItem>

        <HeroItem>
          <div className="divider-gold mx-auto my-8" />
        </HeroItem>

        <HeroItem>
          <p className="font-body text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Cocina de calle con alma de carta nocturna. Contraste, caracter y una
            experiencia pensada para disfrutar sin prisa.
          </p>
        </HeroItem>

        <HeroItem>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10">
            <JuicyButton size="lg" onClick={() => scrollTo("reservas")}>
              Reservar Mesa
            </JuicyButton>
            <JuicyButton variant="secondary" size="lg" onClick={() => scrollTo("carta")}>
              Ver Carta
            </JuicyButton>
          </div>
        </HeroItem>

        <HeroItem>
          <motion.div
            className="mt-16 sm:mt-20 flex flex-col items-center gap-2"
            animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
            transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="font-heading text-xs tracking-[0.3em] uppercase text-primary/55">
              Scroll
            </span>
            <div className="w-px h-9 bg-gradient-to-b from-primary/70 to-transparent" />
          </motion.div>
        </HeroItem>
      </HeroStagger>

      {/* Ticker inferior */}
      <div className="hero-typing-ribbon" aria-hidden="true">
        <span className="hero-ribbon-track">
          PARA COMENZAR · PARA COMPARTIR · BOCADOS BRUTALES · DE LA OLLA A LA BRASA · VINOS · COMBINADOS ·{" "}
        </span>
        <span className="hero-ribbon-track">
          PARA COMENZAR · PARA COMPARTIR · BOCADOS BRUTALES · DE LA OLLA A LA BRASA · VINOS · COMBINADOS ·{" "}
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
