"use client";
import Star9sides from "@/svg/Star9sides";
import AnimatedDiv from "./small_components/AnimatedDiv";
import AnimatedDiv2 from "./small_components/AnimatedDiv2";
import { useRef } from "react";
import { useInView } from "framer-motion";
interface ContentItem {
  title: string;
  description: string;
}

export const aboutUsContent: ContentItem[] = [
  {
    title: "¿Quiénes Somos?",
    description:
      "Somos una organización juvenil que empodera jóvenes latinos, proporcionando acceso a recursos, conexiones y mentoría personalizada. Creemos que el éxito individual puede multiplicarse para el beneficio de la comunidad, por lo que ofrecemos asesoría gratuita para apoyar a los estudiantes a lograr sus metas educativas y profesionales en el extranjero.",
  },
];

export const missionContent: ContentItem[] = [
  {
    title: "Nuestra Misión",
    description:
      "Nuestra misión es crear una plataforma donde los jóvenes puedan acceder a mentores, charlas inspiradoras y talleres prácticos, eliminando barreras económicas y culturales que limitan las oportunidades de muchos.",
  },
];

function Presentation() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-40% 0px" });


  return (
    <div ref={containerRef}>
    <AnimatedDiv key={1} className="md:flex gap-6 text-gbBlack">
      <Star9sides className="max-sm:hidden absolute -top-20 right-0 w-32 fill-gbGreen z-10" />
      <div className="flex-1 space-y-6">
        {aboutUsContent.map((item, index) => (
          <div key={index} className="bg-gbYellow p-8 rounded-lg -rotate-1">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
        <AnimatedDiv2 isInViewContainer={isInView}>
          <img
            className="h-auto max-w-full object-cover rounded-lg rotate-1 border-gbYellow border-[10px]"
            src="https://placehold.co/600x400"
            alt="Description"
          />
        </AnimatedDiv2>
      </div>
      <div className="flex-1 space-y-6 flex flex-col items-center justify-center">
        <AnimatedDiv2 className="max-md:hidden" isInViewContainer={isInView}>
          <img
            className="h-auto max-w-full object-cover rounded-lg -rotate-1 border-gbGreen border-[10px]"
            src="https://placehold.co/600x400"
            alt="..."
          />
        </AnimatedDiv2>
        {missionContent.map((item, index) => (
          <div key={index} className="bg-gbGreen p-8 rounded-lg rotate-1">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </AnimatedDiv>
    </div>
  );
}

export default Presentation;