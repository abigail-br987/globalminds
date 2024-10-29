"use client";
import ColorfulTitle from "./small_components/ColorfulTitle";
import AnimatedDiv3 from "./small_components/AnimatedDiv3";
import AnimatedDiv from "./small_components/AnimatedDiv";
import { useRef } from "react";
import { useInView } from "framer-motion";

export const impactData = [
  {
    value: "+25",
    text: "charlas organizadas con expertos latinos",
  },
  {
    value: "+1450",
    text: "estudiantes impactados, más oportunidades",
  },
  {
    value: "+35",
    text: "mentores activos de universidades de prestigio",
  },
  {
    value: "50%",
    text: "crecimiento mensual en la participación",
  },
];

function Impact() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-40% 0px" });

  return (
    <AnimatedDiv className="hyphens-auto text-gbWhite space-y-6">
      <div className="relative flex items-center justify-center w-full">
        <ColorfulTitle text="IMPACTO" />
      </div>
      <p>
        No solo ofrecemos asesoría académica y profesional gratuita —que en
        otros lugares puede costar hasta $10,000—, sino que también creamos un
        espacio seguro y accesible para que los jóvenes latinos sueñen en
        grande. Desde su creación en 2023, Global Minds ha alcanzado resultados
        impresionantes gracias al esfuerzo conjunto de nuestros mentees,
        mentores y staff. A continuación, compartimos algunos de nuestros
        logros:
      </p>
      <div
        ref={containerRef}
        className=" sm:grid items-center max-sm:space-y-6 sm:grid-cols-2 md:grid-cols-3 sm:gap-6 justify-items-center text-gbBlack"
      >
        {impactData.map((item, index) => (
          <AnimatedDiv3
            key={index}
            isInView={isInView}
            index={index}
            className="bg-gbYellow flex space-x-3 text-left items-center justify-center p-4 rounded-lg"
          >
            <h3 className="text-7xl" style={{ WebkitTextStroke: "2px #2B2B2B",}}>
            {item.value}
            </h3>
            <span>{item.text}</span>
          </AnimatedDiv3>
        ))}
        <div className="col-span-2 text-gbWhite">
          Cada cifra cuenta una historia; detrás de estos números están las
          vidas de jóvenes latinos que están alcanzando sus sueños académicos y
          profesionales. Nuestro compromiso es seguir creciendo, llegar a más
          estudiantes y expandir el impacto de nuestra red global.
        </div>
        {/*
        <button className="bg-gbWhite text-gbBlack h-max self-center py-4 rounded-xl"> <p> Leer Testimonios </p><FaReadme className="text-3xl m-auto"/> </button>
      */}{" "}
      </div>
    </AnimatedDiv>
  );
}

export default Impact;
