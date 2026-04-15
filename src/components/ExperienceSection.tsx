import { motion } from "framer-motion";
import experienceImg from "@/assets/experience-table.jpg";
import cocktailsImg from "@/assets/cocktails.jpg";

const features = [
  { title: "Cocina creativa", desc: "Producto local elevado con tecnica de verdad" },
  { title: "Ambiente exclusivo", desc: "Terraza, buena musica y noches que no quieres que acaben" },
  { title: "El sitio del que hablaras", desc: "Una experiencia que se repite, siempre" },
];

const ExperienceSection = () => {
  return (
    <section id="experiencia" className="relative py-28 px-6 bg-noise bg-gradient-dark overflow-hidden">
      <div className="max-w-[1600px] mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-heading text-sm tracking-[0.4em] uppercase text-primary/70">La experiencia</span>
          <h2 className="text-5xl md:text-7xl font-display text-glow mt-4">
            NO VIENES A CENAR
          </h2>
          <p className="font-heading text-2xl md:text-3xl text-foreground/60 tracking-[0.15em] mt-3 uppercase">
            Vienes a <strong>disfrutar</strong>
          </p>
          <div className="divider-gold mt-8" />
        </motion.div>

        {/* Bento grid */}
        <div className="grid md:grid-cols-12 gap-4 max-w-6xl mx-auto">
          {/* Large image */}
          <motion.div
            className="md:col-span-7 card-brutal group h-[350px] md:h-[450px]"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={experienceImg}
              alt="Mesa compartiendo platos en Miura"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <span className="text-primary font-heading text-sm tracking-[0.25em] uppercase">Terraza & Ambiente</span>
              <p className="text-foreground font-body text-lg mt-1 font-light">
                El plan perfecto empieza aqui
              </p>
            </div>
          </motion.div>

          {/* Right column */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <motion.div
              className="card-brutal group h-[200px]"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <img
                src={cocktailsImg}
                alt="Cocteles en Miura"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <span className="text-primary font-heading text-sm tracking-[0.25em] uppercase">Buenos Cocteles</span>
              </div>
            </motion.div>

            <motion.div
              className="card-brutal p-6 flex-1 flex flex-col justify-center"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="space-y-5">
                {features.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.12 }}
                  >
                    <div className="w-2 h-2 mt-2 bg-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-heading text-base tracking-[0.15em] uppercase text-primary">{item.title}</h4>
                      <p className="text-muted-foreground font-body text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
