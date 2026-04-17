import { AnimatePresence, motion } from "framer-motion";
import { Fragment, useMemo, useState } from "react";
import { BeerGlass, BurgerIcon, ChevronPattern, CocktailShaker, CoffeeCup, DessertIcon, ForkKnife, LipsIcon, WineGlass } from "@/components/brand/BrandIcons";
import { Reveal } from "@/animations";

type MenuItem = {
  name: string;
  desc?: string;
  price: string;
};

type Category = {
  id: string;
  title: string;
  subtitle: string;
  note?: string;
  items: MenuItem[];
  Icon?: (props: { className?: string }) => JSX.Element;
};

const EURO_SYMBOL = "\u20AC";

const menuData: Category[] = [
  {
    id: "para-comenzar",
    title: "Para Comenzar",
    subtitle: "Clasicos de la casa para abrir boca",
    Icon: ForkKnife,
    items: [
      { name: "Gildas de boqueron", desc: "Salinas y con actitud, con piparra y aceituna", price: `2${EURO_SYMBOL} / ud` },
      { name: "Gildas de anchoa", desc: "Dos bocados potentes para empezar fuerte", price: `2${EURO_SYMBOL} / ud` },
      { name: "Guacamole y totopos", desc: "Aguacate en lima, pico de gallo y totopos fritos", price: `8${EURO_SYMBOL}` },
      { name: "Torrezno crujiente", desc: "Crujiente por fuera y tierno por dentro", price: `7${EURO_SYMBOL}` },
      { name: "Harumaki de callos", desc: "Rollito crujiente relleno de guiso meloso", price: `3${EURO_SYMBOL} / ud` },
      { name: "Croquetas Miura de cecina", desc: "Con salsa ahumada y lamina de cecina", price: `15${EURO_SYMBOL} / 6 uds` },
    ],
  },
  {
    id: "para-compartir",
    title: "Para Compartir",
    subtitle: "Platos para mesa grande",
    note: `Servicio de pan por persona: 1${EURO_SYMBOL}`,
    Icon: ChevronPattern,
    items: [
      { name: "Ensaladilla rusa con atun y bottarga", desc: "Clasico bien hecho con AOVE y toque italiano", price: `10${EURO_SYMBOL}` },
      { name: "Vieira gratinada", desc: "Vieira y langostinos con parmesano, lima y dashi", price: `6${EURO_SYMBOL} / ud` },
      { name: "Croquetas de boletus", desc: "Con emulsion de wasabi-trufa y furikake", price: `12${EURO_SYMBOL} / 6 uds` },
      { name: "Croquetas de chuleton madurado", desc: "Con salsa ahumada y cecina", price: `15${EURO_SYMBOL} / 6 uds` },
      { name: "Langostino crunchy", desc: "Tempura con leche de tigre y sesamo", price: `9${EURO_SYMBOL} / 6 uds` },
      { name: "Provoleta", desc: "Tomates cherry y chimichurri italiano", price: `10${EURO_SYMBOL}` },
    ],
  },
  {
    id: "frescos",
    title: "Frescos & Cargados",
    subtitle: "Del mar y bocados con caracter",
    Icon: LipsIcon,
    items: [
      { name: "Tartar de atun a la brasa", desc: "Atun rojo cortado a cuchillo con alino japo-peruano", price: `14${EURO_SYMBOL}` },
      { name: "Brioche de tartar de salchichon", desc: "Con mahonesa de yema y parmesano", price: `7${EURO_SYMBOL}` },
      { name: "Ensalada goat", desc: "Queso de cabra, fresas, nueces y arandanos", price: `11${EURO_SYMBOL}` },
      { name: "Dumplings de pato", desc: "Confitado de pato, foie y unagi", price: `12${EURO_SYMBOL} / 6 uds` },
      { name: "Cheeseburger", desc: "Pan brioche, ternera 100g, havarti y salsa Miura", price: `7${EURO_SYMBOL}` },
      { name: "Quesadilla de jarrete birrioso", desc: "Con cheddar fundido en tortilla de maiz", price: `9${EURO_SYMBOL} / 2 uds` },
    ],
  },
  {
    id: "olla-brasa",
    title: "De la Olla & a la Brasa",
    subtitle: "Fuego, melosidad y producto",
    Icon: BurgerIcon,
    items: [
      { name: "Fideos tostados con sepia y langostinos", desc: "Terminados con alioli de ajo negro", price: `15${EURO_SYMBOL}` },
      { name: "Olla de arroz negro con calamar", desc: "Calamar en su tinta, gambas y alioli cremoso", price: `14${EURO_SYMBOL} / pp` },
      { name: "Cachopo de cecina y queso asturiano", desc: "Con yema de huevo y parmesano", price: `18${EURO_SYMBOL}` },
      { name: "Entrecot de rib eye", desc: "Corte de carne bovina", price: `18${EURO_SYMBOL}` },
      { name: "Chuleton 600g", desc: "Lomo bajo de vaca nacional madurada +45 dias", price: `27${EURO_SYMBOL}` },
      { name: "Patatas con trufa y parmesano", desc: "Acompanamiento estrella", price: `4${EURO_SYMBOL}` },
    ],
  },
  {
    id: "cervezas-refrescos",
    title: "Cervezas & Refrescos",
    subtitle: "Grifos, tercios y soft drinks",
    Icon: BeerGlass,
    items: [
      { name: "Grifo Cruzcampo medio vaso", price: `2,4${EURO_SYMBOL}` },
      { name: "Grifo Cruzcampo vaso entero", price: `3,5${EURO_SYMBOL}` },
      { name: "Tercio Cruzcampo Reserva 0,0 tostada", price: `2,5${EURO_SYMBOL}` },
      { name: "Tercio Heineken 0,0", price: `2,5${EURO_SYMBOL}` },
      { name: "Refrescos 350 ml", desc: "Coca Cola, Fanta, Sprite o tonica", price: `2,6${EURO_SYMBOL}` },
      { name: "Zumos naturales", desc: "Melocoton, naranja, pina y limonada", price: `2${EURO_SYMBOL}` },
    ],
  },
  {
    id: "combinados",
    title: "Combinados",
    subtitle: "Destilados y mezclas",
    note: `Suplemento Monster: +1${EURO_SYMBOL}`,
    Icon: CocktailShaker,
    items: [
      { name: "Ginebras", desc: "Larios, Beefeater, Bombay Sapphire, Nordes", price: `5${EURO_SYMBOL} - 8${EURO_SYMBOL}` },
      { name: "Ron", desc: "Bacardi, Barcelo, Brugal, Cacique 500", price: `5${EURO_SYMBOL} - 8${EURO_SYMBOL}` },
      { name: "Whisky", desc: "J&B, Ballantines, Jack Daniel's, Southern Comfort", price: `5${EURO_SYMBOL} - 7${EURO_SYMBOL}` },
      { name: "Vodka", desc: "Absolut y Ciroc", price: `5,5${EURO_SYMBOL} - 8${EURO_SYMBOL}` },
      { name: "Licores y aperitivos", desc: "Tequila, Aperol, Limoncello, Jagermeister, Bailey's", price: `4${EURO_SYMBOL} - 12${EURO_SYMBOL}` },
      { name: "Cafe + Baileys con hielo", price: `+1${EURO_SYMBOL}` },
    ],
  },
  {
    id: "vinos",
    title: "Vinos",
    subtitle: "Copa o botella",
    Icon: WineGlass,
    items: [
      { name: "Vinos blancos", desc: "Pez Volador, Ha Pasado un Angel, Entre Flores", price: `2,8${EURO_SYMBOL} / copa` },
      { name: "Vinos tintos", desc: "Vega Tempranillo, Monteabellon, Ugalde Crianza", price: `2,8${EURO_SYMBOL} - 3${EURO_SYMBOL} / copa` },
      { name: "Vinos rosados", desc: "Wild Rosado (Garnacha, Navarra)", price: `18${EURO_SYMBOL} / botella` },
      { name: "Cafes e infusiones", desc: "Solo, cortado, capuccino, bombon y colacao", price: `2${EURO_SYMBOL} - 2,5${EURO_SYMBOL}` },
      { name: "Agua", desc: "Agua mineral y agua con gas", price: `2${EURO_SYMBOL} - 2,2${EURO_SYMBOL}` },
    ],
  },
];

const renderPrice = (value: string) => {
  const chunks = value.split(EURO_SYMBOL);

  if (chunks.length === 1) {
    return value;
  }

  return chunks.map((chunk, index) => (
    <Fragment key={`${value}-${index}`}>
      {chunk}
      {index < chunks.length - 1 ? <span className="euro-symbol">{EURO_SYMBOL}</span> : null}
    </Fragment>
  ));
};

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState(menuData[0].id);

  const currentCategory = useMemo(
    () => menuData.find((category) => category.id === activeCategory) ?? menuData[0],
    [activeCategory],
  );

  return (
    <section id="carta" className="relative overflow-hidden px-6 py-28 bg-gradient-section bg-marble bg-noise menu-watermark">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* Floating brand icons — animated */}
      <motion.div
        className="absolute -top-8 left-2 text-primary/35 pointer-events-none"
        animate={{ y: [0, -6, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <ChevronPattern className="w-44 h-10" />
      </motion.div>

      <motion.div
        className="absolute right-6 top-24 text-primary/30 pointer-events-none hidden lg:block"
        animate={{ y: [0, -8, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        aria-hidden="true"
      >
        <BeerGlass className="w-24 h-24" />
      </motion.div>

      <motion.div
        className="absolute left-8 bottom-10 text-primary/25 pointer-events-none hidden lg:block"
        animate={{ y: [0, -6, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        aria-hidden="true"
      >
        <WineGlass className="w-20 h-24" />
      </motion.div>

      <motion.div
        className="absolute right-20 bottom-16 text-primary/15 pointer-events-none hidden xl:block"
        animate={{ y: [0, -5, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        aria-hidden="true"
      >
        <CoffeeCup className="w-20 h-20" />
      </motion.div>

      <p className="absolute right-10 top-40 hidden xl:block brush-ghost text-3xl text-primary/30 pointer-events-none" aria-hidden="true">
        VINOS ROSADOS
      </p>
      <p className="absolute left-10 bottom-28 hidden xl:block brush-ghost text-4xl text-primary/25 pointer-events-none" aria-hidden="true">
        DULCE FINAL
      </p>

      <div className="max-w-6xl mx-auto relative z-10">
        <Reveal className="text-center mb-14">
          <span className="section-label">Carta Miura</span>
          <h2 className="brush-title neon-flicker text-5xl md:text-7xl mt-4">Negro, brasa y neon</h2>
          <p className="max-w-2xl mx-auto mt-5 text-foreground/70 text-lg md:text-xl">
            La misma energia visual de la carta fisica — titulares de brocha, contrastes potentes
            y una lectura clara tanto en movil como en desktop.
          </p>
          <div className="divider-gold mx-auto mt-7" />
        </Reveal>

        <div className="overflow-x-auto menu-tabs-scroll pb-3 mb-8">
          <div className="flex gap-2 min-w-max px-1">
            {menuData.map((category, index) => {
              const isActive = category.id === activeCategory;

              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  aria-pressed={isActive}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  className={`font-heading uppercase tracking-[0.15em] text-xs md:text-sm px-4 py-2 border transition-all duration-300 ${
                    isActive
                      ? "text-primary-foreground border-primary/80 bg-primary shadow-[0_0_14px_rgba(255,195,0,0.35)]"
                      : "text-foreground/70 border-border/70 bg-secondary/70 hover:border-primary/45 hover:text-primary"
                  }`}
                  style={{ clipPath: "polygon(3% 0%, 100% 0%, 97% 100%, 0% 100%)" }}
                >
                  {category.title}
                </motion.button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentCategory.id}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -14, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="menu-panel card-3d"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                {currentCategory.Icon && (
                  <motion.div
                    key={`icon-${currentCategory.id}`}
                    initial={{ scale: 0, rotate: -20, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.1 }}
                    className="text-primary/60 shrink-0 menu-cat-icon"
                  >
                    <currentCategory.Icon className="w-14 h-14" />
                  </motion.div>
                )}
                <div>
                  <motion.h3
                    className="brush-title text-3xl md:text-5xl glitch-text"
                    data-text={currentCategory.title}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.05 }}
                  >
                    {currentCategory.title}
                  </motion.h3>
                  <p className="text-foreground/70 text-base md:text-lg mt-2">{currentCategory.subtitle}</p>
                </div>
              </div>
              {currentCategory.note ? <span className="neon-pill">{renderPrice(currentCategory.note)}</span> : null}
            </div>

            <ul>
              {currentCategory.items.map((item, index) => (
                <motion.li
                  key={`${currentCategory.id}-${item.name}`}
                  className="menu-row group"
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.25 }}
                >
                  <div className="flex-1 min-w-0 pr-2">
                    <p className="font-heading text-xl md:text-2xl tracking-[0.08em] uppercase text-foreground group-hover:text-primary transition-colors duration-200">
                      {item.name}
                    </p>
                    {item.desc ? (
                      <p className="text-foreground/65 mt-1 text-base md:text-lg leading-snug">{item.desc}</p>
                    ) : null}
                  </div>

                  <div className="flex items-center gap-2 pl-2">
                    <span className="hidden sm:block w-10 h-px bg-gradient-to-r from-transparent via-primary/65 to-transparent" />
                    <span className="menu-price">{renderPrice(item.price)}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>

        <motion.p
          className="text-center text-foreground/45 mt-8 text-sm md:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Precios orientativos con IVA incluido. Consulta alergias o cambios al equipo de sala.
        </motion.p>
      </div>
    </section>
  );
};

export default MenuSection;