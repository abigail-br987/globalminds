"use client"
import { joinOptions } from "@/script/content";
import { useState } from "react";
import ButtonWithArrow from "./small_components/ButtonWithArrow";
import Modal from "./Modal";
import { globalMindsColors } from "@/script/content";
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

  const toggleModal = (option: JoinOption | null) => {
    setSelectedOption(option);
    setModalOpen(!modalOpen);
  };

  return (
    <div>
      <h2 className="text-center text-gbWhite">Únete</h2>
      <div className="mt-6 mb-10 space-y-4 rounded text-gbWhite hyphens-auto">
        <div className="sm:grid max-sm:space-y-8 max-sm:block grid-cols-2 gap-10">
          {joinOptions.map((option, index) => (
            <div
              key={index}
              className={`sm:flex text-gbBlack p-4 rounded-lg bg-${
                globalMindsColors[index % globalMindsColors.length]
              }`}
            >
              <div className={"flex-1"}>
                <div className="flex items-center">
                  {option.icon} {". "}
                  <h3 className="">{option.title}</h3>
                </div>
                <p>{option.description}</p>
                <ButtonWithArrow
                  className="bg-gbWhite bg-opacity-50"
                  onClick={() => toggleModal(option)}
                >
                  Más información
                </ButtonWithArrow>
              </div>
            </div>
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
    </div>
  );
};

export default JoinUs;
