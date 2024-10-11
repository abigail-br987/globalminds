import ColorfulTitle from "./small_components/ColorfulTitle";
import { impactData } from "../assets/script/content";
import { FaArrowRightLong } from "react-icons/fa6";
function Impact() {
  return (
    <div className="hyphens-auto text-gbWhite space-y-6">
      <div className="relative flex items-center justify-center w-full">
        <ColorfulTitle text="IMPACTO" />
        <button className="absolute group right-0 bg-gbBlue text-white px-4 py-2 rounded-full hover:bg-gbDarkBlue">
          Testimonios
          <FaArrowRightLong className="inline-block group-hover:ml-5 transition-all" />
        </button>
      </div>
      <p>
        No solo ofrecemos asesoría académica y profesional gratuita que en otros
        lugares puede costar hasta 10,000 dólares, sino que también creamos un
        espacio seguro y accesible para que los jóvenes latinos sueñen en
        grande.
      </p>
      <div className=" sm:grid max-sm:space-y-6 sm:grid-cols-2 md:grid-cols-3 sm:gap-6 justify-items-center text-gbBlack">
        {impactData.map((item, index) => (
          <div key={index} className="bg-gbYellow p-4 rounded-lg text-center">
            <h3 className="">
              <span className="text-7xl">{item.value}</span> {item.text}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Impact;
