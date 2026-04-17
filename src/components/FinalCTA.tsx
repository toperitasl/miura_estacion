import { Reveal, JuicyButton } from "@/animations";

const FinalCTA = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="absolute inset-0 bg-noise" />

      {/* Esquinas decorativas — tono discreto */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-primary/20 pointer-events-none" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-primary/20 pointer-events-none" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-primary/20 pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-primary/20 pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <Reveal>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display leading-none">
            <span className="text-glow">SI HAS LLEGADO</span>
            <br />
            <span className="text-stroke font-display">HASTA AQUI</span>
          </h2>
          <p className="font-heading text-xl md:text-3xl text-foreground/50 tracking-[0.15em] mt-5 uppercase">
            Ya sabes que quieres venir
          </p>
          <div className="divider-gold mt-8 mb-12" />
        </Reveal>

        <Reveal delay={0.15}>
          <JuicyButton
            size="lg"
            className="text-lg md:text-xl"
            onClick={() => (window.location.href = "tel:+34621141306")}
          >
            Reservar Mesa
          </JuicyButton>

          <p className="mt-10 text-muted-foreground/50 font-body text-sm italic">
            "El sitio del que hablaras despues"
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default FinalCTA;
