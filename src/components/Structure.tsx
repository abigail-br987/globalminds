"use client";
import { structureItems } from "@/script/content";
import ColorfulTitle from "./small_components/ColorfulTitle";
import AnimatedDiv from "./small_components/AnimatedDiv";
import AnimatedDiv3 from "./small_components/AnimatedDiv3";
import { useRef } from "react";
import { useInView } from "framer-motion";

function Structure() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-40% 0px" });

  return (
    <AnimatedDiv className="text-center my-5 text-gbWhite flex flex-col items-center cursor-pointer">
      <ColorfulTitle text="STRUCTURE" />
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
            <div className="flex items-center justify-center">
              <h3 className="z-10">{item.title}</h3>
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