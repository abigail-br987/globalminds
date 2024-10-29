"use client";
import ColorfulTitle from "./small_components/ColorfulTitle";
import AnimatedDiv from "./small_components/AnimatedDiv";
import AnimatedDiv3 from "./small_components/AnimatedDiv3";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Figure11 from "@/svg/Figure11";
import Figure12 from "@/svg/Figure12";
import Figure3 from "@/svg/Figure3";

export const structureItems = [
  {
    title: "Inspirar",
    description:
      "Charlas semanales con latinos exitosos para inspirar a los estudiantes y ayudarles a definir sus metas.",
    figure: (
      <Figure3
        className="w-12 absolute -rotate-45 z-0 fill-gbYellow"
      />
    ),
  },
  {
    title: "Apoyar",
    description:
      "Mentoría personalizada para guiar a los estudiantes en sus aplicaciones a concursos, becas y universidades.",
    figure: (
      <Figure11
        className="w-12 absolute -rotate-45 z-0  fill-purple-400"
      />
    ),
  },
  {
    title: "Preparar",
    description:
      "Talleres y capacitaciones para fortalecer los currículums y preparar a los estudiantes para actividades relevantes.",
    figure: (
      <Figure12
        color="gbBlue"
        className="w-12 absolute -rotate-45 z-0  fill-orange-500"
      />
    ),
  },
  {
    title: "Conectar",
    description:
      "Crear una comunidad de apoyo y networking entre estudiantes y mentores para fomentar la colaboración y el intercambio de experiencias.",
    figure: <Figure12 className="w-12 absolute -rotate-45 z-0  fill-gbGreen" />,
  },
];



function Structure() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-40% 0px" });

  return (
    <AnimatedDiv className="text-center my-5 text-gbWhite flex flex-col items-center cursor-pointer">
      <span>¿Quieres saber cómo funciona Global Minds?</span> 
      <span className="mb-5"> Tenemos una metodología de 4 pasos</span>
      <ColorfulTitle text="METODOLOGÍA" />
      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 text-center">
        {structureItems.map((item, index) => (
          <AnimatedDiv3
            className={`relative py-6 px-3
              ${index === 0 ? "border-b sm:border-r" : ""} 
              ${index === 1 ? "sm:border-b" : ""} 
              ${index === 2 ? "sm:border-r max-sm:border-b max-sm:border-t" : ""} 
              border-gbWhite`}
            key={index}
            index={index}
            isInView={isInView}
          >
            <div className="flex items-center justify-center mb-5">
              <h3 className="z-10 font-gotaRegular lg:text-2xl" style={{ WebkitTextStroke: "2px #2B2B2B",}} 
              >{item.title}</h3>
              {item.figure}
            </div>
            <p>{item.description}</p>
          </AnimatedDiv3>
        ))}
      </div>
    </AnimatedDiv>
  );
}

export default Structure;