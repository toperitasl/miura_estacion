import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 42);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    // Esperamos a que se restaure el overflow del body antes de scrollear,
    // si no el navegador ignora el scrollIntoView mientras hay overflow:hidden.
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 220);
  };

  const links = [
    { label: "Carta", id: "carta" },
    { label: "Nosotros", id: "experiencia" },
    { label: "Reservar", id: "reservas" },
    { label: "Ubicacion", id: "ubicacion" },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-[100] will-change-transform isolation-isolate ${
          scrolled || menuOpen
            ? "bg-background/90 backdrop-blur-xl border-b border-primary/15 shadow-[0_8px_18px_rgba(0,0,0,0.35)]"
            : "bg-transparent"
        }`}
        style={{ transition: "background-color 300ms, border-color 300ms, box-shadow 300ms", isolation: "isolate" }}
        initial={{ y: -90 }}
        animate={{ y: 0 }}
        transition={{ duration: reduceMotion ? 0.2 : 0.45, delay: 0.1 }}
      >
        <div className="max-w-[1600px] mx-auto flex items-center justify-between px-6 lg:px-12 py-4">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display text-2xl text-glow tracking-[0.04em]"
          >
            MIURA
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="relative font-heading text-sm tracking-[0.2em] uppercase text-foreground/70 hover:text-primary transition-colors duration-200 group"
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
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 bg-background/97 backdrop-blur-xl z-[999] flex flex-col items-center justify-center overflow-y-auto"
          >
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Cerrar menú"
              className="absolute top-4 right-4 z-20 rounded-full border border-primary/20 bg-background/90 p-3 text-foreground shadow-lg shadow-black/10 transition hover:bg-primary/10"
            >
              ✕
            </button>
            <div className="flex flex-col items-center gap-6 py-20">
              {links.map((l, i) => (
                <motion.button
                  key={l.id}
                  onClick={() => scrollTo(l.id)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ delay: reduceMotion ? 0 : 0.05 + i * 0.06, duration: 0.3 }}
                  className="font-heading text-3xl tracking-[0.15em] uppercase text-foreground/85 hover:text-primary active:text-primary transition-colors py-2 px-6"
                >
                  {l.label}
                </motion.button>
              ))}
              <motion.a
                href="tel:+34621141306"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: reduceMotion ? 0 : 0.35 }}
                className="btn-trap-gold mt-6"
              >
                <span className="px-4">Reservar Mesa</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
