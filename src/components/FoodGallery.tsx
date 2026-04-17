import { motion } from "framer-motion";
import { BeerGlass, BurgerIcon, DessertIcon, ForkKnife, WineGlass } from "@/components/brand/BrandIcons";

type IconComponent = (props: { className?: string }) => JSX.Element;

type BrutalBlock = {
  title: string;
  subtitle: string;
  Icon: IconComponent;
  picks: { name: string; price: string }[];
};

const EUR = "\u20AC";

const brutalBlocks: BrutalBlock[] = [
  {
    title: "Para Comenzar",
    subtitle: "Clasicos para abrir boca",
    Icon: ForkKnife,
    picks: [
      { name: "Gildas de anchoa", price: `2${EUR} / ud` },
      { name: "Guacamole y totopos", price: `8${EUR}` },
      { name: "Torrezno crujiente", price: `7${EUR}` },
    ],
  },
  {
    title: "Bocados Brutales",
    subtitle: "Lo que mas se pide",
    Icon: BurgerIcon,
    picks: [
      { name: "Dumplings de pato", price: `12${EUR}` },
      { name: "Cheeseburger Miura", price: `7${EUR}` },
      { name: "Quesadilla birriosa", price: `9${EUR}` },
    ],
  },
  {
    title: "Brasa y Olla",
    subtitle: "Fuego y melosidad",
    Icon: BeerGlass,
    picks: [
      { name: "Fideos tostados", price: `15${EUR}` },
      { name: "Arroz negro con calamar", price: `14${EUR}` },
      { name: "Cachopo de cecina", price: `18${EUR}` },
    ],
  },
  {
    title: "Vinos y Dulce Final",
    subtitle: "Copa, postre y cierre",
    Icon: WineGlass,
    picks: [
      { name: "Vinos blancos", price: `2,8${EUR} / copa` },
      { name: "Vinos tintos", price: `3${EUR} / copa` },
      { name: "Cheesecake del dia", price: `5,5${EUR}` },
    ],
  },
];

const FoodGallery = () => {
  return (
    <section className="relative py-28 px-6 bg-gradient-section bg-noise overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute right-6 top-16 text-primary/15 hidden lg:block" aria-hidden="true">
        <DessertIcon className="w-24 h-24" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="section-label">Lo que te espera</span>
              <h2 className="text-5xl md:text-7xl font-display leading-none mt-2">
                <span className="text-glow">BOCADOS</span> <span className="text-stroke font-display">BRUTALES</span>
              </h2>
            </div>
            <p className="font-body text-base md:text-lg text-foreground/60 max-w-md md:text-right leading-snug">
              Quitamos las fotos que no aportaban y lo convertimos en una lectura rapida y util: que pedir, cuanto cuesta y por donde empezar.
            </p>
          </div>
          <div className="divider-gold mt-6 mx-0" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {brutalBlocks.map((block, index) => (
            <motion.article
              key={block.title}
              className="menu-panel"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="brush-title text-3xl md:text-4xl">{block.title}</h3>
                  <p className="text-foreground/65 mt-1 text-base md:text-lg">{block.subtitle}</p>
                </div>
                <block.Icon className="w-14 h-14 text-primary/45 shrink-0" />
              </div>

              <ul className="mt-5 space-y-3">
                {block.picks.map((pick) => (
                  <li
                    key={`${block.title}-${pick.name}`}
                    className="flex items-center justify-between gap-3 border-b border-border/45 pb-2 last:border-0 last:pb-0"
                  >
                    <span className="font-heading uppercase tracking-[0.08em] text-sm md:text-base text-foreground/85">{pick.name}</span>
                    <span className="menu-price text-xl">{pick.price}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
        >
          <button
            onClick={() => document.getElementById("carta")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-trap-gold"
          >
            <span>Ver la Carta Completa</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FoodGallery;