"use client";
import ColorfulTitle from "../small_components/ColorfulTitle";
import AnimatedDiv3 from "../small_components/AnimatedDiv3";
import AnimatedDiv from "../small_components/AnimatedDiv";
import { useRef } from "react";
import { useInView } from "framer-motion";
import AnimatedNumber from "../small_components/AnimatedNumber";

export const impactData = [
  {
    value: "+25",
    text: "charlas con expertos ",
  },
  {
    value: "+1450",
    text: "estudiantes impactados",
  },
  {
    value: "+35",
    text: "mentores activos",
  },
  {
    value: "50%",
    text: "crecimiento mensual",
  },
];

function Impact() {
  return (
    <AnimatedDiv className="hyphens-auto text-gbWhite space-y-6">
      <ColorfulTitle text="IMPACTO" className="w-fit mx-auto" />

      <p>
        Ofrecemos asesoría gratuita valorada en $10,000 y creamos un espacio
        seguro y accesible para que los jóvenes latinos sueñen en grande.
      </p>
      <div className="sm:grid items-center max-sm:space-y-6 sm:grid-cols-2 sm:gap-4 justify-items-center text-gbBlack">
        {impactData.map((item, index) => (
          <div
            key={index}
            className="bg-gbYellow w-full flex space-x-3 text-left items-center justify-center p-4 rounded-lg"
          >
            <AnimatedNumber
              targetNumber={parseInt(
                item.value.replace("+", "").replace("%", ""),
              )}
              displayValue={item.value}
            />
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </AnimatedDiv>
  );
}

export default Impact;
