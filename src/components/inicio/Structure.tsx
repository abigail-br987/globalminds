"use client";
import ColorfulTitle from "../small_components/ColorfulTitle";
import AnimatedDiv from "../small_components/AnimatedDiv";
import AnimatedDiv3 from "../small_components/AnimatedDiv3";
import Figure11 from "@/svg/Figure11";
import Figure12 from "@/svg/Figure12";
import Figure3 from "@/svg/Figure3";

export const structureItems = [
  {
    title: "INSPIRAR",
    description:
      "Charlas semanales con latinos exitosos para inspirar a los estudiantes y ayudarles a definir sus metas.",
    figure: (
      <Figure3 className="w-12 mx-auto absolute -rotate-45 z-0 fill-gbYellow" />
    ),
  },
  {
    title: "APOYAR",
    description:
      "Mentoría personalizada para guiar a los estudiantes en sus aplicaciones a concursos, becas y universidades.",
    figure: (
      <Figure11 className="w-12 mx-auto absolute -rotate-45 z-0  fill-purple-400" />
    ),
  },
  {
    title: "PREPARAR",
    description:
      "Talleres y capacitaciones para fortalecer los currículums y preparar a los estudiantes para actividades relevantes.",
    figure: (
      <Figure12
        color="gbBlue"
        className="w-12 -rotate-45 mx-auto absolute z-0  fill-orange-500"
      />
    ),
  },
  {
    title: "CONECTAR",
    description:
      "Crear una comunidad de apoyo y networking entre estudiantes y mentores para fomentar la colaboración y el intercambio de experiencias.",
    figure: (
      <Figure12 className="w-12 mx-auto  absolute -rotate-45 z-0  fill-gbGreen" />
    ),
  },
];

function Structure() {
  return (
    <AnimatedDiv className="text-center space-y-10 text-gbWhite flex flex-col items-center cursor-pointer">
      <ColorfulTitle text="ESTRUCTURA" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center">
        {structureItems.map((item, index) => (
          <div key={index} className="flex flex-col justify-content">
            <div className="flex items-center mt-2 justify-center mb-5">
              <h2 className="z-10">{item.title}</h2> {item.figure}
            </div>
            <p className="text-justify">{item.description}</p>
          </div>
        ))}
      </div>
    </AnimatedDiv>
  );
}

export default Structure;
