"use client";
import { motion } from "framer-motion";
import { animations } from "./animations/animations";
import Star9sides from "@/svg/Star9sides";
import Image from "next/image";
interface ContentItem {
  title: string;
  description: string;
}

export const aboutUsContent: ContentItem[] = [
  {
      title: "¿Quiénes Somos?",
      description: "Somos una organización juvenil que empodera jóvenes latinos..."
  },
];

export const missionContent: ContentItem[] = [
  {
      title: "Nuestra Misión",
      description: "Nuestra misión es crear una plataforma donde los jóvenes puedan acceder..."
  },
];

function Presentation() {
  return (
    <>
      <motion.div
        className="md:flex gap-6 text-gbBlack "
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={animations.sectionVariant}
      >
        <Star9sides className="max-sm:hidden absolute -top-20 right-0 w-32 fill-gbGreen z-10" />
        <div className="flex-1 space-y-6">
          {aboutUsContent.map((item, index) => (
            <div key={index} className="bg-gbYellow p-8 rounded-lg -rotate-1">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
          <div>
            <Image
              className="h-auto  max-w-full object-cover rounded-lg  rotate-1 border-gbYellow border-[10px]"
              src="https://placehold.co/600x400"
              alt="Description"
            />
          </div>
        </div>
        <div className="flex-1 space-y-6 flex flex-col items-center justify-center">
          <div className="max-md:hidden">
            <Image
              className="h-auto max-w-full object-cover rounded-lg -rotate-1 border-gbGreen border-[10px]"
              src="https://placehold.co/600x400"
              alt="..."
            />
          </div>

          {missionContent.map((item, index) => (
            <div key={index} className="bg-gbGreen p-8 rounded-lg rotate-1">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
}

export default Presentation;