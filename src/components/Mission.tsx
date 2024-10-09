import { motion } from "framer-motion";
import { animations } from "./animations/animations";

function Mission() {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-end justify-center w-full"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{once: true }}
      variants={animations.sectionVariant}
    >
      <div className="relative hidden w-full md:block md:w-1/2 h-64 md:h-52">
        <img
          className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg
     transform -translate-x-6 translate-y-3 -rotate-3 border-gbGreen border-[10px]"
          src="https://placehold.co/600x400"
        />

      </div>

      <div className="text-gbWhite space-y-4 m-3 text-center md:text-left rotate-1 rounded-lg w-full md:w-1/2 ">
        <h2>Nuestra Misión </h2>
        <p>
          Nuestra misión es crear una plataforma donde los jóvenes puedan
          acceder a mentores, charlas inspiradoras y talleres prácticos,
          eliminando barreras económicas y culturales que limitan las
          oportunidades de muchos.
        </p>
      </div>
    </motion.div>
  );
}

export default Mission;
