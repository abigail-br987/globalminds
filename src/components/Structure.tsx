import { structureItems } from "../assets/script/content";
import ColorfulTitle from "./small_components/ColorfulTitle";
function Structure() {
  return (
    <>
      <div className="text-center my-5 mt-20 text-gbWhite flex flex-col items-center">
        <ColorfulTitle text="STRUCTURE"/>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 text-center gap-14">
          {structureItems.map((item, index) => (
            <div className="relative" key={index}>
              <div className="flex items-center justify-center mb-5">
                <h3 className="z-10">{item.title}</h3>
                {item.figure}
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Structure;
