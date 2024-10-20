import { donateMessage } from "@/script/content";
import Image from "next/image";
function Donate() {
  return (
    <div className="flex text-gbWhite items-center">
      <div className="flex-shrink-0 basis-1/6 max-lg:hidden">
        <Image src={"/logo/mainlogo.png"} alt="image" className="w-full h-full object-cover" />
      </div>
      <div className="lg:pl-6 flex-shrink">
        <h2>Donar!</h2>
        <ul>
          {donateMessage.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
        <button className="text-2xl font-bold">Donar ahora</button>
      </div>
    </div>
  );
}

export default Donate;
