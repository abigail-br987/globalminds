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
    title: "¿QUIENES SOMOS?",
    description:
      "Somos una organización juvenil que empodera jóvenes latinos, proporcionando acceso a recursos, conexiones y mentoría personalizada. Creemos que el éxito individual puede multiplicarse para el beneficio de la comunidad, por lo que ofrecemos asesoría gratuita para apoyar a los estudiantes a lograr sus metas educativas y profesionales en el extranjero.",
  },
];

export const missionContent: ContentItem[] = [
  {
    title: "MISIÓN",
    description:
      "Nuestra misión es crear una plataforma donde los jóvenes puedan acceder a mentores, charlas inspiradoras y talleres prácticos, eliminando barreras económicas y culturales que limitan las oportunidades de muchos.",
  },
];

export const visionContent: ContentItem[] = [
  {
    title: "VISIÓN",
    description:
      "Nuestra misión es crear una plataforma donde los jóvenes puedan acceder a mentores, charlas inspiradoras y talleres prácticos, eliminando barreras económicas y culturales que limitan las oportunidades de muchos.",
  },
];

function Presentation() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-40% 0px" });

  return (
    <div ref={containerRef}>
      <AnimatedDiv key={1} className="gap-6 ">
        <Star9sides className="max-sm:hidden absolute -top-20 right-0 w-32 fill-gbGreen z-10" />

        {aboutUsContent.map((item, index) => (
          <>
            <h2 className="text-gbWhite tracking-widest">{item.title}</h2>
            <div
              key={index}
              className="bg-gbYellow p-8 text-gbBlack rounded-lg"
            >
              <p>{item.description}</p>
            </div>
          </>
        ))}

        <div className="flex-1 flex items-center justify-center text-center gap-6 my-10">
        <div>
          {missionContent.map((item, index) => (
            <>
              <h2 className="tracking-widest mb-5">{item.title}</h2>

              <div key={index} className="border-gbRed border-4 p-8 rounded-lg">
                <p>{item.description}</p>
              </div>
              </>
          ))}
          </div>
          <div>
          {visionContent.map((item, index) => (
            <>
              <h2 className="tracking-widest mb-5">{item.title}</h2>

              <div
                key={index}
                className="border-gbGreen border-4 p-8 rounded-lg"
              >
                <p>{item.description}</p>
              </div>
            </>
          ))}
          </div>
        </div>
      </AnimatedDiv>
    </div>
  );
}

export default Presentation;
