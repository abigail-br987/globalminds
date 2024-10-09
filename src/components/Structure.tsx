import Figure11 from "../svg/Figure11";
import Figure12 from "../svg/Figure12";
import Figure3 from "../svg/Figure3";

function Structure() {
  return (
    <>
      <div className="text-center my-5 mt-20 text-gbWhite">
        <span className="bg-gbWhite tracking-wider px-10 text-4xl font-bold py-2 rounded-full text-gbBlack">
          <span className="text-gbBlue">S</span>
          <span className="text-gbRed">T</span>
          <span className="text-yellow-500">R</span>
          <span className="text-gbGreen">U</span>
          <span className="text-gbBlue">C</span>
          <span className="text-gbRed">T</span>
          <span className="text-yellow-500">U</span>
          <span className="text-gbGreen">R</span>
          <span className="text-gbBlue">E</span>
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 text-center gap-14">
  
            <div className="relative">
              <div className="flex items-center justify-center mb-5">
                <h3 className="z-10">Inspirar</h3>
                <Figure11 color="gbGreen" className="w-10 absolute -rotate-45 z-0" />
              </div>
              <p>
                Charlas semanales con latinos exitosos para inspirar a los
                estudiantes y ayudarles a definir sus metas.
              </p>
            </div>

            <div className="relative">
              <div className="flex items-center justify-center mb-5">
                <h3 className="z-10">Apoyar</h3>
                <Figure12
                  color="gbBlue"
                  className="w-10 absolute -rotate-45 z-0"
                />
              </div>
              <p>
                Mentoría personalizada para guiar a los estudiantes en sus
                aplicaciones a concursos, becas y universidades.
              </p>
            </div>

            <div className="relative">
              <div className="flex items-center justify-center mb-5">
                <h3 className="z-10">Preparar</h3>
                <Figure12
                  color="gbRed"
                  className="w-10 absolute rotate-45 z-0"
                />
              </div>
              <p>
                Talleres y capacitaciones para fortalecer los currículums y
                preparar a los estudiantes para actividades relevantes.
              </p>
            </div>

            <div className="relative">
              <div className="flex items-center justify-center mb-5">
                <h3 className="z-10">Conectar</h3>
                <Figure3 className="w-10 absolute -rotate-45 z-0" />
              </div>
              <p>
                Crear una comunidad de apoyo y networking entre estudiantes y
                mentores para fomentar la colaboración y el intercambio de
                experiencias.
              </p>
            </div>
        </div>
      </div>
    </>
  );
}

export default Structure;
