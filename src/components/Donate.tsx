import { donateMessage } from "@/script/content";
import ButtonWithArrow from "./small_components/ButtonWithArrow";
import AnimatedDiv from "./small_components/AnimatedDiv";
import Image from "next/image";
function Donate() {
  return (
    <AnimatedDiv className="flex text-gbWhite items-center">
      <div className="flex-shrink-0 basis-1/6 max-lg:hidden">
        <Image  src={"/logo/mainlogo.png"} alt="image"  layout="responsive" width={100} height={100}
       objectFit="cover" className="w-full h-full object-cover" />
      </div>
      <div className="lg:pl-6 flex-shrink">
      <ButtonWithArrow className="text-2xl font-bold bg-gbWhite text-gbBlack">Donar ahora</ButtonWithArrow>
        <ul>
          {donateMessage.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      </div>
    </AnimatedDiv>
  );
}

export default Donate;
