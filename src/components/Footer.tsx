export default function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t border-primary/15 bg-noise">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <h2 className="text-5xl font-display text-glow neon-flicker">MIURA</h2>
            <p className="font-heading text-xs tracking-[0.25em] uppercase text-primary/60 mt-2">Tragos y Bocados</p>
            <p className="text-muted-foreground font-body text-sm mt-4 font-light leading-relaxed">
              Street food elevado a otro nivel en Estacion de Cartama, Malaga.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm tracking-[0.25em] uppercase text-foreground/60 mb-5">Contacto</h3>
            <div className="space-y-2">
              <p className="text-muted-foreground font-body text-sm font-light">C. Sorolla, 19</p>
              <p className="text-muted-foreground font-body text-sm font-light">Estacion de Cartama, Malaga</p>
              <a
                href="tel:+34621141306"
                className="text-primary font-body text-sm hover:text-white transition-colors duration-300 block mt-3"
              >
                +34 621 14 13 06
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm tracking-[0.25em] uppercase text-foreground/60 mb-5">Redes sociales</h3>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.instagram.com/miura.tragosybocados/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading text-sm tracking-[0.14em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Instagram - @miura.tragosybocados
              </a>
            </div>
            <div className="mt-8">
              <a href="tel:+34621141306" className="btn-trap-gold text-sm">
                <span className="px-2">Reservar Mesa</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-muted-foreground/30 text-xs font-body">
            &copy; {new Date().getFullYear()} Miura - Estacion de Cartama. Todos los derechos reservados.
          </p>
          <p className="text-muted-foreground/20 text-xs font-body">Estacion de Cartama, Malaga</p>
        </div>
      </div>
    </footer>
  );
}