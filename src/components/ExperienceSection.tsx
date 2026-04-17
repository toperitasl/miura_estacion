import { motion } from "framer-motion";
import { ChevronPattern, SpraySplat } from "@/components/brand/BrandIcons";

const EUR = "\u20AC";

const experiencePillars = [
  {
    title: "Cocina con personalidad",
    desc: "Producto local, tecnica real y platos que salen con identidad propia.",
  },
  {
    title: "Ambiente de noche",
    desc: "Terraza, musica y ritmo para una cena que se alarga sin prisas.",
  },
  {
    title: "Carta con criterio",
    desc: "Pocas tonterias, mucho sabor: picoteo, brasa, vinos y combinados.",
  },
];

const quickPicks = [
  { dish: "Tartar de atun a la brasa", price: `14${EUR}` },
  { dish: "Dumplings de pato (6 uds)", price: `12${EUR}` },
  { dish: "Cachopo de cecina", price: `18${EUR}` },
  { dish: "Chuleton 600g", price: `27${EUR}` },
];

const ExperienceSection = () => {
  return (
    <section id="experiencia" className="relative py-28 px-6 bg-noise bg-gradient-dark overflow-hidden">
      <div className="absolute right-4 top-16 text-primary/20 hidden lg:block" aria-hidden="true">
        <ChevronPattern className="w-44 h-10" />
      </div>
      <div className="absolute left-8 bottom-10 text-primary/12 hidden lg:block" aria-hidden="true">
        <SpraySplat className="w-28 h-28" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">La experiencia</span>
          <h2 className="brush-title text-5xl md:text-7xl mt-4 leading-none">NO VIENES A CENAR</h2>
          <p className="font-heading text-xl md:text-3xl text-foreground/55 tracking-[0.15em] mt-3 uppercase">
            Vienes a <strong>disfrutar</strong>
          </p>
          <div className="divider-gold mt-8 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-12 gap-4">
          <motion.article
            className="md:col-span-7 menu-panel"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="brush-ghost text-3xl md:text-5xl text-primary/80 mb-6">NOCHE MIURA</p>
            <p className="text-foreground/80 text-lg md:text-xl leading-snug max-w-2xl">
              Hemos cambiado fotos que no aportaban por una lectura clara de lo importante: que tipo de plan vas a vivir,
              que se come y por que merece venir.
            </p>

            <div className="mt-8 space-y-5">
              {experiencePillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <span className="font-heading text-primary text-lg tracking-[0.2em] mt-0.5">0{index + 1}</span>
                  <div>
                    <h4 className="font-heading uppercase tracking-[0.14em] text-primary text-sm md:text-base">{pillar.title}</h4>
                    <p className="text-foreground/65 text-base md:text-lg mt-1 leading-snug">{pillar.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.article>

          <div className="md:col-span-5 flex flex-col gap-4">
            <motion.article
              className="card-brutal p-6 md:p-7"
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              <h3 className="brush-title text-3xl md:text-4xl">Lo mas pedido</h3>
              <p className="text-foreground/60 mt-2 text-base">Selecciones que salen cada noche.</p>

              <ul className="mt-5 space-y-3">
                {quickPicks.map((item) => (
                  <li key={item.dish} className="flex items-center justify-between gap-3 border-b border-border/50 pb-2 last:border-0 last:pb-0">
                    <span className="font-heading uppercase tracking-[0.08em] text-sm md:text-base text-foreground/85">{item.dish}</span>
                    <span className="menu-price text-xl">{item.price}</span>
                  </li>
                ))}
              </ul>
            </motion.article>

            <motion.article
              className="card-brutal p-6 md:p-7"
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.14 }}
            >
              <h3 className="font-heading uppercase tracking-[0.2em] text-primary text-sm">Plan recomendado</h3>
              <p className="brush-ghost text-3xl md:text-4xl text-primary/85 mt-2">Comparte + Brasa + Copa</p>
              <p className="text-foreground/65 mt-3 text-base md:text-lg leading-snug">
                Empieza por para compartir, sube a de la olla y termina con vinos o combinados. Ese es el ritmo que mejor funciona aqui.
              </p>
              <button
                onClick={() => document.getElementById("carta")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-trap-gold mt-5 text-sm"
              >
                <span>Ver Carta Completa</span>
              </button>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;