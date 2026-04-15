import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type MenuItem = { name: string; desc: string; price: string };
type Category = { title: string; items: MenuItem[] };

const menuData: Category[] = [
  {
    title: "Para Compartir",
    items: [
      { name: "Transmision de patatas... mas la salsa que tu quieras", desc: "Patatas fritas con salsa a elegir", price: "5,00" },
      { name: "Aros de cebolla", desc: "Crujientes aros de cebolla empanados", price: "5,00" },
      { name: "Fingers de pollo", desc: "Tiras de pollo crujientes", price: "6,00" },
      { name: "Jalapeño cheese bites", desc: "Bocados de jalapeno rellenos de queso", price: "5,00" },
      { name: "Mozzarella sticks", desc: "Palitos de mozzarella empanados", price: "5,50" },
      { name: "Nuggets de pollo", desc: "Clasicos nuggets crujientes", price: "5,00" },
      { name: "Tequeños", desc: "Rollitos rellenos de queso", price: "6,00" },
      { name: "Nachos con queso", desc: "Nachos con salsa de queso fundido", price: "7,50" },
      { name: "Nachos completos", desc: "Con guacamole, pico de gallo y queso", price: "9,50" },
    ],
  },
  {
    title: "Bocados Brutales",
    items: [
      { name: "Cachopo", desc: "Clasico cachopo relleno", price: "14,50" },
      { name: "Smash Burger Miura", desc: "Doble carne smash con queso y salsa secreta", price: "9,50" },
      { name: "Burger Clasica", desc: "Hamburguesa tradicional completa", price: "9,50" },
      { name: "Crispy Chicken Burger", desc: "Pollo crujiente con lechuga y salsa", price: "9,50" },
      { name: "Miura XL", desc: "Nuestra burger mas bestia, para valientes", price: "13,50" },
    ],
  },
  {
    title: "Acompañamientos",
    items: [
      { name: "Patatas fritas clasicas", desc: "", price: "3,50" },
      { name: "Batatas (boniato) fritas", desc: "", price: "4,50" },
      { name: "Ensalada cesar", desc: "Lechuga, pollo, parmesano y croutons", price: "5,00" },
      { name: "Ensalada mixta", desc: "Mix de hojas frescas", price: "3,50" },
    ],
  },
  {
    title: "Dulce Final",
    items: [
      { name: "Coulant de chocolate", desc: "Corazon fundido con helado de vainilla", price: "7,50" },
      { name: "Cheesecake quemada", desc: "Estilo San Sebastian con frutos rojos", price: "6,50" },
      { name: "Churros con chocolate", desc: "Masa artesana con chocolate belga caliente", price: "5,50" },
    ],
  },
  {
    title: "Combinados",
    items: [
      { name: "Cubata estandar", desc: "Ron, whisky, vodka o ginebra con refresco", price: "6,00" },
      { name: "Cubata premium", desc: "Destilados premium a elegir", price: "8,00" },
    ],
  },
  {
    title: "Refrescos",
    items: [
      { name: "Coca-Cola / Zero / Light", desc: "", price: "2,50" },
      { name: "Fanta Naranja / Limon", desc: "", price: "2,50" },
      { name: "Aquarius", desc: "", price: "2,50" },
      { name: "Nestea", desc: "", price: "2,50" },
      { name: "Agua mineral", desc: "", price: "1,50" },
      { name: "Red Bull", desc: "", price: "3,00" },
    ],
  },
];

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="carta" className="relative py-28 px-6 bg-noise bg-gradient-section overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/4 w-px h-40 bg-primary/15" />
      <div className="absolute right-0 top-2/3 w-px h-32 bg-primary/10" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-heading text-sm tracking-[0.4em] uppercase text-primary">Nuestra carta</span>
          <h2 className="text-5xl md:text-7xl font-graffiti text-foreground mt-4">ABRE EL APETITO</h2>
          <div className="divider-red mt-8" />
        </motion.div>

        {/* Category tabs - skewed style */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {menuData.map((cat, i) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(i)}
              className={`px-5 py-2.5 font-heading text-sm tracking-[0.15em] uppercase transition-all duration-300 ${
                activeCategory === i
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground border border-border hover:border-primary/50 hover:text-primary"
              }`}
              style={{ clipPath: "polygon(3% 0%, 100% 0%, 97% 100%, 0% 100%)" }}
            >
              {cat.title}
            </button>
          ))}
        </motion.div>

        {/* Menu items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="space-y-1"
          >
            {menuData[activeCategory].items.map((item, i) => (
              <motion.div
                key={item.name}
                className="group flex items-baseline justify-between gap-4 py-4 px-4 border-b border-border/50 hover:bg-card/50 hover:border-primary/20 transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-primary flex-shrink-0 group-hover:w-3 transition-all duration-300" />
                    <h4 className="font-heading text-lg tracking-[0.1em] uppercase text-foreground group-hover:text-accent-gold transition-colors duration-300">
                      {item.name}
                    </h4>
                  </div>
                  {item.desc && (
                    <p className="text-muted-foreground text-sm font-body mt-1 ml-[18px]">
                      {item.desc}
                    </p>
                  )}
                </div>
                <span className="text-primary font-heading text-2xl tracking-wider whitespace-nowrap">
                  {item.price}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MenuSection;
