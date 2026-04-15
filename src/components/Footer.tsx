const Footer = () => {
  return (
    <footer className="relative py-16 px-6 border-t border-primary/20 bg-noise">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h2 className="text-5xl font-graffiti text-accent-red">MIURA</h2>
            <p className="font-heading text-sm tracking-[0.2em] uppercase text-accent-gold mt-2">
              Tragos y Bocados
            </p>
            <p className="text-muted-foreground font-body text-sm mt-3">
              Street food elevado a otro nivel en Estacion de Cartama, Malaga.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg tracking-[0.2em] uppercase text-foreground mb-4">Contacto</h3>
            <div className="space-y-2">
              <p className="text-muted-foreground font-body text-sm">C. Sorolla, 19</p>
              <p className="text-muted-foreground font-body text-sm">Estacion de Cartama, Malaga</p>
              <a href="tel:+34621141306" className="text-accent-gold font-body text-sm hover:text-primary transition-colors duration-300 block mt-2">
                +34 621 14 13 06
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-heading text-lg tracking-[0.2em] uppercase text-foreground mb-4">Siguenos</h3>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground font-heading text-sm tracking-wider uppercase hover:text-primary transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href="https://linktr.ee/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground font-heading text-sm tracking-wider uppercase hover:text-primary transition-colors duration-300"
              >
                Linktree
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground/40 text-xs font-body">
            {new Date().getFullYear()} Miura Estacion de Cartama. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
