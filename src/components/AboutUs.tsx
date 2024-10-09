import { motion } from "framer-motion";
import { animations } from "./animations/animations";
function AboutUs() {
  return (
    <>
      <motion.div
        className="flex flex-col md:flex-row items-center w-full"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={animations.sectionVariant}
      >
        <div className="bg-gbYellow p-8 md:p-10 rotate space-y-4 m-3 -rotate-1 rounded-lg w-full md:w-1/2">
          <h2>¿Quiénes Somos?</h2>
          <p>
            Global Minds es una organización juvenil creada para empoderar a
            jóvenes latinos, proporcionando acceso a recursos, conexiones y
            mentoría personalizada. Creemos que el éxito individual puede
            multiplicarse para el beneficio de la comunidad, por lo que
            ofrecemos asesoría gratuita para apoyar a los estudiantes a lograr
            sus metas educativas y profesionales en el extranjero.
          </p>
        </div>
        <div className="relative w-full md:w-1/2 h-64 md:h-96">
          <img
            className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg
             transform translate-x-0 md:translate-x-8 translate-y-5 md:translate-y-8 rotate-2 md:rotate-4 border-gbYellow border-[10px]"
            src="https://placehold.co/600x400"
            alt="Description"
          />
        </div>
      </motion.div>
    </>
  );
}

export default AboutUs;