import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const links = [
    { label: "Carta", id: "carta" },
    { label: "Nosotros", id: "experiencia" },
    { label: "Reservar", id: "reservas" },
    { label: "Ubicacion", id: "ubicacion" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-6 lg:px-12 py-4">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-2xl text-glow"
        >
          MIURA
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="relative font-heading text-sm tracking-[0.2em] uppercase text-foreground/60 hover:text-primary transition-colors duration-300 group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
          <a href="tel:+34621141306" className="btn-trap-gold text-sm">
            <span className="px-4 py-1">Reservar</span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 relative z-50"
          aria-label="Menu"
        >
          <motion.span
            className="w-7 h-0.5 bg-primary block origin-center"
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-5 h-0.5 bg-primary block"
            animate={menuOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-7 h-0.5 bg-primary block origin-center"
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-background/98 backdrop-blur-md z-40 flex flex-col items-center justify-center"
          >
            <div className="space-y-8 text-center">
              {links.map((l, i) => (
                <motion.button
                  key={l.id}
                  onClick={() => scrollTo(l.id)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.08 }}
                  className="block font-heading text-4xl tracking-[0.15em] uppercase text-foreground/80 hover:text-primary transition-colors"
                >
                  {l.label}
                </motion.button>
              ))}
              <motion.a
                href="tel:+34621141306"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="btn-trap-gold inline-block mt-4"
              >
                <span>Reservar Mesa</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
