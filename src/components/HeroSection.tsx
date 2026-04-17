import { motion, useReducedMotion } from "framer-motion";
import heroFood from "@/assets/hero-food.jpg";
import { BeerGlass, BullHead, ChevronPattern, DessertIcon, ForkKnife, LipsIcon, WineGlass } from "@/components/brand/BrandIcons";
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

      {/* Floating brand icons from la carta — ambient layer */}
      {!reduceMotion && (
        <>
          <motion.div
            className="absolute top-[18%] left-[6%] text-primary/18 pointer-events-none hidden md:block"
            animate={{ y: [0, -14, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          >
            <LipsIcon className="w-24 h-16" />
          </motion.div>

          <motion.div
            className="absolute top-[30%] right-[5%] text-primary/15 pointer-events-none hidden lg:block"
            animate={{ y: [0, -10, 0], rotate: [0, -6, 0] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            aria-hidden="true"
          >
            <BullHead className="w-20 h-20" />
          </motion.div>

          <motion.div
            className="absolute bottom-[22%] left-[4%] text-primary/12 pointer-events-none hidden lg:block"
            animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            aria-hidden="true"
          >
            <ForkKnife className="w-16 h-24" />
          </motion.div>

          <motion.div
            className="absolute top-[55%] right-[8%] text-primary/12 pointer-events-none hidden xl:block"
            animate={{ y: [0, -12, 0], rotate: [0, -8, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            aria-hidden="true"
          >
            <WineGlass className="w-12 h-16" />
          </motion.div>

          <motion.div
            className="absolute top-[12%] right-[20%] text-primary/10 pointer-events-none hidden xl:block"
            animate={{ y: [0, -6, 0], rotate: [0, 4, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            aria-hidden="true"
          >
            <DessertIcon className="w-14 h-16" />
          </motion.div>

          <motion.div
            className="absolute bottom-[30%] right-[3%] text-primary/10 pointer-events-none hidden xl:block"
            animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            aria-hidden="true"
          >
            <BeerGlass className="w-14 h-16" />
          </motion.div>
        </>
      )}

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
