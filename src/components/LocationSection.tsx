import { motion } from "framer-motion";
import { Reveal, JuicyButton } from "@/animations";

const schedule = [
  { day: "Miercoles - Jueves", hours: "13:30-16:00 / 20:00-23:00" },
  { day: "Viernes",            hours: "13:30-16:00 / 20:00-23:30" },
  { day: "Sabado",             hours: "13:30-16:30 / 20:00-23:30" },
  { day: "Domingo",            hours: "13:30-16:30 / 20:00-23:00" },
  { day: "Lunes - Martes",     hours: "Cerrado"                    },
];

const LocationSection = () => {
  return (
    <section id="ubicacion" className="relative py-28 px-6 bg-noise bg-gradient-section overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">

        <Reveal className="text-center mb-16">
          <span className="font-heading text-sm tracking-[0.4em] uppercase text-primary/70">
            Donde encontrarnos
          </span>
          <h2 className="text-5xl md:text-7xl font-display text-glow mt-4 leading-none">
            VEN A VERNOS
          </h2>
          <div className="divider-gold mt-6" />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-6">

          {/* Map */}
          <motion.div
            className="card-brutal overflow-hidden h-[320px] lg:h-[440px]"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <iframe
              src="https://www.google.com/maps?q=C.+Sorolla+19,+Estaci%C3%B3n+de+C%C3%A1rtama,+M%C3%A1laga&output=embed&z=16"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicacion Miura Estacion de Cartama"
            />
          </motion.div>

          {/* Info + Schedule */}
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {/* Address */}
            <div className="card-brutal p-7">
              <h3 className="font-heading text-base tracking-[0.25em] uppercase text-primary mb-3">Direccion</h3>
              <p className="text-foreground font-body text-base font-light">C. Sorolla, 19</p>
              <p className="text-muted-foreground font-body text-sm">Estacion de Cartama, Malaga</p>
              <JuicyButton
                size="sm"
                className="mt-5"
                onClick={() =>
                  window.open(
                    "https://maps.google.com/?q=C.+Sorolla+19+Estacion+de+Cartama+Malaga",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
              >
                Como Llegar
              </JuicyButton>
            </div>

            {/* Schedule */}
            <div className="card-brutal p-7">
              <h3 className="font-heading text-base tracking-[0.25em] uppercase text-primary mb-5">Horario</h3>
              <div className="space-y-3">
                {schedule.map((s) => (
                  <div
                    key={s.day}
                    className="flex justify-between items-center pb-3 border-b border-border/40 last:border-0 last:pb-0"
                  >
                    <span className="text-foreground/70 font-body text-sm font-light">{s.day}</span>
                    <span
                      className={`font-heading text-sm tracking-wider ${
                        s.hours === "Cerrado" ? "text-red-500/70" : "text-primary"
                      }`}
                    >
                      {s.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="card-brutal p-7">
              <h3 className="font-heading text-base tracking-[0.25em] uppercase text-primary mb-3">Contacto</h3>
              <a href="tel:+34621141306" className="text-foreground font-body text-2xl font-light hover:text-primary transition-colors duration-300">
                +34 621 14 13 06
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
