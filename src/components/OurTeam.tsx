"use client"
import { useState } from "react";
import { teamMembers } from "@/script/content";
import { globalMindsColors } from "@/script/content";
import Modal from "./Modal";
const logo = "/logo/mainlogo.png";

const OurTeam: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const handleMemberClick = (index: number) => {
    setSelectedMember(index);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="bg-gbBlack max-w-screen-xl my-10 m-auto">
      <div className="max-w-lg mb-6">
        <p>Conoce al Equipo detrás de </p>
        <h2>GlobalMinds</h2>
        <p className="mt-3">
          Global Minds es una organización juvenil creada para empoderar a
          jóvenes latinos, proporcionando acceso a recursos, conexiones y
          mentoría personalizada.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 h-min gap-6">
        {teamMembers.map((member, index) => {
          return (
            <div
              key={index}
              onClick={() => handleMemberClick(index)}
              className={`group relative cursor-pointer opacity-90 transition-transform duration-300 hover:scale-105 hover:opacity-100`}
            >
              <img
                src={logo}
                alt={`Logo for ${member.name}`}
                className="w-full h-fit duration-300 transition-all"
              />
              <div
                className={`absolute text-sm bottom-0 m-2 border-gbBlack border px-1 bg-gbBlack text-gbWhite transition-all 
                }`}
              >
                <h3>{member.name}</h3>
                <p>{member.position}</p>
              </div>
            </div>
          );
        })}
      </div>

      <Modal isOpen={selectedMember !== null} onClose={handleCloseModal}>
        {selectedMember !== null && (
          <div className="text-center">
            <h2 className="text-lg font-bold">
              {teamMembers[selectedMember].name}
            </h2>
            <img
              src={logo}
              alt={teamMembers[selectedMember].name}
              className="w-32 h-32 mx-auto rounded-full"
            />
            <p className="mt-2">{teamMembers[selectedMember].description}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default OurTeam;
