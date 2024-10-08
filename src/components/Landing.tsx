import LogoBrain from "../svg/LogoBrain";
import Figure1 from "../svg/Figure1";
import Figure3 from "../svg/Figure3";
import Figure8 from "../svg/Figure8";
import Figure11 from "../svg/Figure11";
import Figure10 from "../svg/Figure10";
import Figure12 from "../svg/Figure12";

function Landing() {
  return (
    <>
      <div className=" overflow-hidden relative h-screen w-full flex flex-col justify-center items-center text-center space-y-8 text-white ">
        <div id="logo" className="z-10">
          <h1 className="flex text-7xl items-end">
            <span className="text-[207px]">G</span>
            <span className="text-[222px]">l</span>
            <span>
              <LogoBrain className="inline-block h-64 mb-7" />
            </span>
            <span className="text-[206px]">b</span>
            <span className="text-[184px]">a</span>
            <span className="text-[217px]">l</span>
          </h1>

          <h1 className="font-gotaRegular justify-center text-7xl flex space-x-5">
            <span className="relative flex aspect-square items-center justify-center w-20 h-20">
                <span className="absolute z-10 inset-0 border-gbRed border-[10px] rounded-md"></span>
                <span className="relative">M</span>
            </span>
            <span className="relative flex aspect-square items-center justify-center w-20 h-20">
                <span className="absolute inset-0 border-gbYellow border-[10px] rounded-md"></span>
                <span className="relative z-10">i</span>
            </span>
            <span className="relative flex aspect-square items-center justify-center w-20 h-20">
                <span className="absolute inset-0 border-gbGreen border-[10px] rounded-md"></span>
                <span className="relative z-10">n</span>
            </span>
            <span className="relative flex aspect-square items-center justify-center w-20 h-20">
                <span className="absolute inset-0 border-gbBlue border-[10px] rounded-md"></span>
                <span className="relative z-10">d</span>
            </span>
            <span className="relative flex aspect-square items-center justify-center w-20 h-20">
                <span className="absolute inset-0 border-gbRed border-[10px] rounded-md"></span>
                <span className="relative z-10">s</span>
            </span>
        </h1>

        </div>
        <span className="bg-gbYellow px-4 text-2xl font-bold py-2 rounded-full text-gbBlack">empoderando jóvenes latinos</span>
        <span className="text-2xl font-bold absolute bottom-10 text-gbWhite animate-bounce">↓</span>
        <Figure1 className="absolute h-32 left-36 z-0" />
        <Figure10 className="absolute h-32 -rotate-45 right-36 top-20 z-0" />
        <Figure3 className="absolute h-72 -left-40 rotate-12 z-0 top-20 " />
        <Figure8 className="absolute h-80 opacity-20 -right-44 rotate-90"/>
        <Figure11 color="gbRed" className="absolute h-52 bottom-20 right-24" />
        <Figure11 className="absolute h-20 -rotate-45 top-20 left-48" color="gbRed" />
        <Figure12 color="gbBlue" className="absolute h-16 top-14 right-96"/>
        <Figure12 color="gbGreen" className="absolute h-24 bottom-20 left-72 -rotate-45"/>
      </div>
    </>
  );
}

export default Landing;
