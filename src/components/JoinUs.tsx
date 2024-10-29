"use client";
import { joinOptions } from "@/script/content";
import { useState } from "react";
import ButtonWithArrow from "./small_components/ButtonWithArrow";
import Modal from "./Modal";
import AnimatedDiv3 from "./small_components/AnimatedDiv3";
import AnimatedDiv from "./small_components/AnimatedDiv";
import ColorfulTitle from "./small_components/ColorfulTitle";
import { globalMindsColors } from "@/script/content";
import { useRef } from "react";
import { useInView } from "framer-motion";

interface JoinOption {
  title: string;
  icon: JSX.Element;
  description: string;
  offerings: string[];
  responsibilities: string[];
  image: string;
}

const JoinUs: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<JoinOption | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-40% 0px" });

  const toggleModal = (option: JoinOption | null) => {
    setSelectedOption(option);
    setModalOpen(!modalOpen);
  };

  return (
    <AnimatedDiv>
      <ColorfulTitle text="UNETE" className="m-auto" />
      <div className="mt-6 mb-10 space-y-4 rounded text-gbWhite hyphens-auto">
        <div
          ref={containerRef}
          className="sm:grid max-sm:space-y-8 max-sm:block
         grid-cols-2 gap-4"
        >
          {joinOptions.map((option, index) => (
            <AnimatedDiv3
              index={index}
              isInView={isInView}
              key={index}
              className={`sm:flex text-gbBlack p-4 rounded-lg bg-${
                globalMindsColors[index % globalMindsColors.length]
              }`}
            >
              <div className={"flex-1"}>
                <div className="rounded-full absolute -right-2 -top-1
                 float-right p-2 text-4xl border-2 border-gbBlack bg-gbWhite">
                  {option.icon}
                </div>
                <div className="flex items-center justify-between space-x-2">
                  <h3 className="uppercase lg:text-xl">{option.title}</h3>
                </div>
                <p>{option.description}</p>
                <ButtonWithArrow
                  className=" bg-gbBlack self-end text-gbWhite "
                  onClick={() => toggleModal(option)}
                >
                  Más información
                </ButtonWithArrow>
              </div>
            </AnimatedDiv3>
          ))}
        </div>
      </div>
      <Modal isOpen={modalOpen} onClose={() => toggleModal(null)}>
        {selectedOption && (
          <>
            <h3 className="text-lg font-bold">{selectedOption.title}</h3>
            <h4 className="mt-2 font-semibold">¿Qué ofrecemos?</h4>
            <ul>
              {selectedOption.offerings.map((offering, i) => (
                <li key={i}>- {offering}</li>
              ))}
            </ul>
            <h4 className="mt-2 font-semibold">Responsabilidades</h4>
            <ul>
              {selectedOption.responsibilities.map((responsibility, i) => (
                <li key={i}>- {responsibility}</li>
              ))}
            </ul>
          </>
        )}
      </Modal>
    </AnimatedDiv>
  );
};

export default JoinUs;
