"use client"
import ColorfulTitle from "./small_components/ColorfulTitle";
import { impactData } from "@/script/content";
import AnimatedDiv3 from "./small_components/AnimatedDiv3";
import AnimatedDiv from "./small_components/AnimatedDiv";
import { useRef } from "react";
import { useInView } from "framer-motion";
function Impact() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-40% 0px" });

  return (
    <AnimatedDiv className="hyphens-auto text-gbWhite space-y-6">
      <div className="relative flex items-center justify-center w-full">
        <ColorfulTitle text="IMPACTO"/>
      </div>
      <p>
        No solo ofrecemos asesoría académica y profesional gratuita que en otros
        lugares puede costar hasta 10,000 dólares, sino que también creamos un
        espacio seguro y accesible para que los jóvenes latinos sueñen en
        grande.
      </p>
      <div ref={containerRef} className=" sm:grid max-sm:space-y-6 sm:grid-cols-2 md:grid-cols-3 sm:gap-6 justify-items-center text-gbBlack">
        {impactData.map((item, index) => (
          <AnimatedDiv3 key={index} isInView={isInView} index={index} className="bg-gbYellow p-4 rounded-lg text-center">
            <h3 className="">
              <span className="text-7xl">{item.value}</span> {item.text}
            </h3>
          </AnimatedDiv3>
        ))}
        {/*
        <button className="bg-gbWhite text-gbBlack h-max self-center py-4 rounded-xl"> <p> Leer Testimonios </p><FaReadme className="text-3xl m-auto"/> </button>
      */} </div>
    </AnimatedDiv>
  );
}

export default Impact;
