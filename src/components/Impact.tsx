import ColorfulTitle from "./small_components/ColorfulTitle";
import { impactData } from "@/script/content";

function Impact() {
  return (
    <div className="hyphens-auto text-gbWhite space-y-6">
      <div className="relative flex items-center justify-center w-full">
        <ColorfulTitle text="IMPACTO" />
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
        {/*
        <button className="bg-gbWhite text-gbBlack h-max self-center py-4 rounded-xl"> <p> Leer Testimonios </p><FaReadme className="text-3xl m-auto"/> </button>
      */} </div>
    </div>
  );
}

export default Impact;
