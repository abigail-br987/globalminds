import logo from "/logo/mainlogo.png";
import { FaSquareFull } from "react-icons/fa6";
import { useState } from "react";
import { teamMembers } from "../assets/script/content";
import { globalMindsColors } from "../assets/script/content";
import { ourTeamParagraph } from "../assets/script/content";

function OurTeam() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);
  return (
    <div className="bg-gbBlack">
      <div className="max-w-screen-xl p-10 z-10 flex m-auto">
        <div className=" md:flex justify-between w-full">
          <div className="max-md:hidden space-y-3 text-gbWhite pr-10">
            {ourTeamParagraph.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            {teamMembers.map((member, index) => {
              const isSelected = selectedMember === index;
              const textColor = isSelected
                ? globalMindsColors[index % globalMindsColors.length]
                : "gbWhite";
              return (
                <div
                  key={index}
                  className={`group cursor-pointer transition-all duration-300 ${
                    isSelected ? "py-3 underline-offset-2 underline" : ""
                  } opacity-${isSelected ? "100" : "90"} text-${textColor}`}
                  onMouseEnter={() => setSelectedMember(index)}
                  onMouseLeave={() => setSelectedMember(null)}
                  onClick={() => setSelectedMember(index)}
                >
                  <h2>{member.name}</h2>
                  <div className="flex items-center space-x-2">
                    <FaSquareFull />
                    <p className="uppercase">{member.position}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="max-w-screen-md grid grid-cols-3 h-min gap-6">
            {teamMembers.map((member, index) => {
              const isSelected = selectedMember === index;
              return (
                <div
                  key={index}
                  className={`group relative cursor-pointer ${
                    isSelected
                      ? `scale-105 bg-${
                          globalMindsColors[index % globalMindsColors.length]
                        } opacity-100`
                      : "opacity-90"
                  }`}
                >
                  <img
                    src={member.image || logo}
                    alt={`Logo for ${member.name}`}
                    className="w-full h-fit duration-300 transition-all"
                    onMouseEnter={() => setSelectedMember(index)}
                    onMouseLeave={() => setSelectedMember(null)}
                  />
                  <div
                    className={`absolute text-sm bottom-0 m-2 border-gbBlack border px-1 bg-gbBlack text-gbWhite transition-all ${
                      isSelected
                        ? `bg-${
                            globalMindsColors[index % globalMindsColors.length]
                          }`
                        : ""
                    }`}
                  >
                    {member.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
