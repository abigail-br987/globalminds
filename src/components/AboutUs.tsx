import { motion } from "framer-motion";
import { animations } from "./animations/animations";
import { aboutUsContent } from "../assets/script/content.tsx";

function AboutUs() {
  return (
    <>
      <motion.div
        className="md:grid max-md:space-y-8 max-md:block md:grid-cols-2 md:gap-10"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={animations.sectionVariant}
      >
        {aboutUsContent.map((item, index) => (
          <div
            key={index}
            className="bg-gbYellow h-max p-8 space-y-4 m-3 -rotate-1 rounded-lg w-full"
          >
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
        <div className="">
          <img
            className="w-full h-full object-cover  rounded-lg rotate-2 border-gbYellow border-[10px]"
            src="https://placehold.co/600x400"
            alt="Description"
          />
        </div>
      </motion.div>
    </>
  );
}

export default AboutUs;
