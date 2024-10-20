import { motion } from "framer-motion";
import { animations } from "./animations/animations";
import { missionContent } from "../assets/script/content.tsx";

function Mission() {
  return (
    <motion.div
      className="md:grid space-y-8 block md:grid-cols-2 md:gap-10 text-gbWhite "
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      variants={animations.sectionVariant}
    >
      <div className="max-md:hidden bg-gbGreen rounded-lg">
        <img
          className="w-full h-full max-h-80 object-cover rounded-lg -rotate-3 border-gbGreen border-[10px]"
          src="https://placehold.co/600x400"
          alt="Description"
        />
      </div>

      {missionContent.map((item, index) => (
        <div
          key={index}
          className="space-y-4 md:text-right rotate-1 flex flex-col justify-center "
        >
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </motion.div>
  );
}

export default Mission;
