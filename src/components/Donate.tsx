import { donateMessage } from "@/script/content";
import ButtonWithArrow from "./small_components/ButtonWithArrow";
function Donate() {
  return (
    <div className="flex text-gbWhite items-center">
      <div className="flex-shrink-0 basis-1/6 max-lg:hidden">
        <img  src={"/logo/mainlogo.png"} alt="image" className="w-full h-full object-cover" />
      </div>
      <div className="lg:pl-6 flex-shrink">
        <ul>
          {donateMessage.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
        <ButtonWithArrow className="text-2xl font-bold bg-gbWhite text-gbBlack">Donar ahora</ButtonWithArrow>
      </div>
    </div>
  );
}

export default Donate;
