import { motion } from "framer-motion";
import { Reveal } from "@/animations";

const EUR = "\u20AC";

/*
  Emojis del sistema — se renderizan con la fuente emoji del SO
  (Apple Color Emoji / Noto Emoji / Segoe UI Emoji) → nítidos y reconocibles
  a cualquier tamaño, mucho mejor que SVG casero.
*/
const brutalBlocks = [
  {
    emoji: "🍴",
    title: "Para Comenzar",
    subtitle: "Clásicos para abrir boca",
    picks: [
      { name: "Gildas de anchoa", price: `2${EUR} / ud` },
      { name: "Guacamole y totopos", price: `8${EUR}` },
      { name: "Torrezno crujiente", price: `7${EUR}` },
    ],
  },
  {
    emoji: "🍔",
    title: "Bocados Brutales",
    subtitle: "Lo que más se pide",
    picks: [
      { name: "Dumplings de pato", price: `12${EUR}` },
      { name: "Cheeseburger Miura", price: `7${EUR}` },
      { name: "Quesadilla birriosa", price: `9${EUR}` },
    ],
  },
  {
    emoji: "🔥",
    title: "Brasa y Olla",
    subtitle: "Fuego y melosidad",
    picks: [
      { name: "Fideos tostados", price: `15${EUR}` },
      { name: "Arroz negro con calamar", price: `14${EUR}` },
      { name: "Cachopo de cecina", price: `18${EUR}` },
    ],
  },
  {
    emoji: "🍷",
    title: "Vinos y Dulce Final",
    subtitle: "Copa, postre y cierre",
    picks: [
      { name: "Vinos blancos", price: `2,8${EUR} / copa` },
      { name: "Vinos tintos", price: `3${EUR} / copa` },
      { name: "Cheesecake del día", price: `5,5${EUR}` },
    ],
  },
];

const FoodGallery = () => {
  return (
    <section className="relative py-28 px-6 bg-gradient-section bg-noise overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-[1400px] mx-auto relative z-10">

        {/* Header */}
        <Reveal className="mb-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="section-label">Lo que te espera</span>
              <h2 className="text-5xl md:text-7xl font-display leading-none mt-2">
                <span className="text-glow">BOCADOS</span>{" "}
                <span className="text-stroke font-display">BRUTALES</span>
              </h2>
            </div>
            <p className="font-body text-base md:text-lg text-foreground/60 max-w-md md:text-right leading-snug">
              Una lectura rápida de lo mejor de la carta: qué pedir, cuánto cuesta y por dónde empezar.
            </p>
          </div>
          <div className="divider-gold mt-6 mx-0" />
        </Reveal>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {brutalBlocks.map((block, index) => (
            <motion.article
              key={block.title}
              className="menu-panel group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.08, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{
                y: -6,
                transition: { type: "spring", stiffness: 420, damping: 24 },
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="brush-title text-3xl md:text-4xl group-hover:text-primary transition-colors duration-300">
                    {block.title}
                  </h3>
                  <p className="text-foreground/60 mt-1 text-base md:text-lg">{block.subtitle}</p>
                </div>

                {/* Emoji grande — nítido en cualquier pantalla */}
                <motion.div
                  className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-3xl leading-none select-none"
                  whileHover={{
                    scale: 1.18,
                    rotate: [0, -8, 8, 0],
                    transition: { duration: 0.5 },
                  }}
                  aria-hidden="true"
                >
                  {block.emoji}
                </motion.div>
              </div>

              <ul className="mt-5 space-y-2.5">
                {block.picks.map((pick) => (
                  <li
                    key={`${block.title}-${pick.name}`}
                    className="flex items-center justify-between gap-3 border-b border-border/40 pb-2 last:border-0 last:pb-0 group/item"
                  >
                    <span className="font-heading uppercase tracking-[0.08em] text-sm md:text-base text-foreground/80 group-hover/item:text-foreground transition-colors duration-200">
                      {pick.name}
                    </span>
                    <span className="menu-price text-xl flex-shrink-0">{pick.price}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <motion.button
            onClick={() => document.getElementById("carta-real")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-trap-gold"
            whileHover={{ scale: 1.04, boxShadow: "0 0 22px hsl(46 100% 53% / 0.45)" }}
            whileTap={{ scale: 0.96 }}
          >
            <span>Ver la Carta Completa</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FoodGallery;
