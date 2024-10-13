import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import DetailedStructure from "../components/DetailedStructure";
import banner from "/images/banner.png";
function Programas() {
  return (
    <div className="flex flex-col justify-center items-center m-auto bg-gbBlack">
      <div
        className="w-full h-64 bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h1 style={{ textShadow: "3px 3px 2px rgba(2, 2, 2, 2)" }} className="">
          OPORTUNIDADES
        </h1>
      </div>
      <NavBar />
      <DetailedStructure />
      <Footer />
    </div>
  );
}
export default Programas;
