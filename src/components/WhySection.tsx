import { Reveal, StaggerList } from "@/animations";

const reasons = [
  {
    num: "01",
    title: "Producto diferente",
    desc: "Ingredientes seleccionados, tecnica de verdad y platos que no encuentras en otro sitio.",
  },
  {
    num: "02",
    title: "Ambiente de noche",
    desc: "Buena musica y una terraza donde las horas pasan sin darte cuenta.",
  },
  {
    num: "03",
    title: "Para dos o para diez",
    desc: "Ideal para una cita, una celebracion o esa quedada con amigos que siempre se pospone.",
  },
  {
    num: "04",
    title: "Ubicacion comoda",
    desc: "A un paso en Estacion de Cartama. Sin complicaciones, sin agobios, con aparcamiento.",
  },
];

const WhySection = () => {
  return (
    <section className="relative py-28 px-6 bg-noise bg-gradient-dark overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        <Reveal className="text-center mb-20">
          <span className="font-heading text-sm tracking-[0.4em] uppercase text-primary/70">
            Por que elegirnos
          </span>
          <h2 className="text-5xl md:text-7xl font-display leading-none mt-4">
            <span className="text-glow">NO ES</span>{" "}
            <span className="text-stroke font-display">UN SITIO MAS</span>
          </h2>
          <div className="divider-gold mt-8" />
        </Reveal>

        <StaggerList
          items={reasons}
          getKey={(r) => r.num}
          className="grid md:grid-cols-2 gap-4"
          renderItem={(r) => (
            <div className="card-brutal p-8 group h-full">
              <div className="flex gap-5 items-start">
                <span className="font-display text-6xl text-primary/15 group-hover:text-primary/30 transition-colors duration-500 leading-none select-none flex-shrink-0">
                  {r.num}
                </span>
                <div>
                  <h3 className="font-heading text-xl text-primary tracking-[0.15em] uppercase">
                    {r.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm mt-2 leading-relaxed font-light">
                    {r.desc}
                  </p>
                </div>
              </div>
            </div>
          )}
        />
      </div>
    </section>
  );
};

export default WhySection;
