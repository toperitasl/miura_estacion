import { motion } from "framer-motion";

const schedule = [
  { day: "Miercoles - Jueves", hours: "13:30-16:00 / 20:00-23:00" },
  { day: "Viernes", hours: "13:30-16:00 / 20:00-23:30" },
  { day: "Sabado", hours: "13:30-16:30 / 20:00-23:30" },
  { day: "Domingo", hours: "13:30-16:30 / 20:00-23:00" },
  { day: "Lunes - Martes", hours: "Cerrado" },
];

const LocationSection = () => {
  return (
    <section id="ubicacion" className="relative py-28 px-6 bg-noise bg-gradient-section overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-heading text-sm tracking-[0.4em] uppercase text-primary">Donde encontrarnos</span>
          <h2 className="text-5xl md:text-7xl font-graffiti text-foreground mt-4">VEN A VERNOS</h2>
          <div className="divider-red mt-8" />
        </motion.div>

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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.5!2d-4.6289!3d36.7456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQ0JzQ0LjIiTiA0wrAzNyc0NC4wIlc!5e0!3m2!1ses!2ses!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) saturate(0.3) brightness(0.7)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicacion Miura Estacion de Cartama"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {/* Address */}
            <div className="card-brutal p-7">
              <h3 className="font-heading text-xl text-accent-gold tracking-[0.2em] uppercase mb-4">Direccion</h3>
              <p className="text-foreground font-body text-base">C. Sorolla, 19</p>
              <p className="text-muted-foreground font-body text-sm mt-0.5">Estacion de Cartama, Malaga</p>
              <a
                href="https://maps.google.com/?q=C.+Sorolla+19+Estacion+de+Cartama+Malaga"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-5 font-heading text-sm tracking-[0.2em] uppercase px-6 py-2.5 border border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-black transition-all duration-300"
                style={{ clipPath: "polygon(3% 0%, 100% 0%, 97% 100%, 0% 100%)" }}
              >
                Como Llegar
              </a>
            </div>

            {/* Schedule */}
            <div className="card-brutal p-7">
              <h3 className="font-heading text-xl text-accent-gold tracking-[0.2em] uppercase mb-5">Horario</h3>
              <div className="space-y-3">
                {schedule.map((s) => (
                  <div key={s.day} className="flex justify-between items-center pb-3 border-b border-border/50 last:border-0 last:pb-0">
                    <span className="text-foreground font-body text-sm">{s.day}</span>
                    <span
                      className={`font-heading text-sm tracking-wider ${
                        s.hours === "Cerrado"
                          ? "text-primary"
                          : "text-accent-gold"
                      }`}
                    >
                      {s.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
