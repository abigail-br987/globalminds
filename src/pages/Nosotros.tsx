import logo from "/logo/mainlogo.png";
import { FaSquareFull } from "react-icons/fa6";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState } from "react";
import { teamMembers } from "../assets/script/content";
import { globalMindsColors } from "../assets/script/content"; 

function Nosotros() {
    const [selectedMember, setSelectedMember] = useState<number | null>(null);

  return (
    <div className="bg-gbBlack">
      <NavBar />
      <div className="max-w-screen-xl p-10 z-10 flex m-auto">
        <div className="flex justify-between w-full">
          <div className="space-y-3 text-gbWhite pr-10">
            <p>
              Global Minds no sería posible sin el increíble equipo que lo hace
              funcionar día a día. Conoce a los líderes que están detrás de cada
              área:
            </p>
            <p>
              Cada uno de ellos trabaja arduamente para asegurar que nuestros
              estudiantes tengan acceso a las mejores oportunidades educativas y
              profesionales.
            </p>
            <h1>EQUIPO</h1>
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
                  } opacity-${
                    isSelected ? "100" : "90" 
                  } text-${textColor}`}
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
                    src={ member.image || logo}
                    alt={`Logo for ${member.name}`}
                    className="w-full h-fit duration-300 transition-all"
                    onMouseEnter={() => setSelectedMember(index)}
                    onMouseLeave={() => setSelectedMember(null)}
                  />
                  <div
                    className={`absolute text-sm bottom-0 m-2 border-gbBlack border px-1 bg-gbBlack text-gbWhite transition-all ${
                      isSelected ? `bg-${globalMindsColors[index % globalMindsColors.length]}` : ""
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
      <Footer />
    </div>
  );
}

export default Nosotros;
