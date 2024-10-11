import Figure11 from "../svg/Figure11";
import Figure3 from "../svg/Figure3";
import { motion } from "framer-motion";
import { animations } from "./animations/animations";

function Photo() {
  return (
    <>
      <motion.div
        className="md:flex"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={animations.sectionVariant}
      >
        <Figure11 color="gbRed" className="absolute h-10 left-1/2 top-2 z-10" />
        <Figure11
          color="gbYellow"
          className="absolute h-10 right-3 top-20 z-10"
        />
        <Figure3 className="absolute h-10 left-1/3 bottom-10 z-10" />
        <div className="flex w-full">
          <div>
            <img
              className="w-full h-full object-cover rounded-lg shadow-lg rotate-1 scale-95
              border-gbBlue border-[10px]"
              src="https://placehold.co/600x400"
            />
          </div>
          <div>
            <img
              className="w-full h-full object-cover rounded-lg shadow-lg -rotate-1
              border-gbBlue border-[10px]"
              src="https://placehold.co/600x400"
            />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Photo;
