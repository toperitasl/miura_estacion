import { motion } from "framer-motion";

const reasons = [
  {
    num: "01",
    title: "Producto diferente",
    desc: "Ingredientes seleccionados, tecnica de verdad y platos que no encuentras en otro sitio.",
  },
  {
    num: "02",
    title: "Experiencia nocturna",
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
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-heading text-sm tracking-[0.4em] uppercase text-primary">Por que este sitio</span>
          <h2 className="text-5xl md:text-7xl font-graffiti text-foreground mt-4">
            NO ES UN SITIO MAS
          </h2>
          <div className="divider-red mt-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              className="card-brutal p-8 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="flex gap-5 items-start">
                {/* Number */}
                <span className="font-graffiti text-5xl text-primary/20 group-hover:text-primary/40 transition-colors duration-500 leading-none">
                  {r.num}
                </span>
                <div>
                  <h3 className="font-heading text-xl text-accent-gold tracking-[0.15em] uppercase">{r.title}</h3>
                  <p className="text-muted-foreground font-body text-sm mt-2 leading-relaxed">{r.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
