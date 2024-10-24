import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import DetailedStructure from "@/components/DetailedStructure";
import Header from "@/components/small_components/Header";

function Programas() {
  return (
    <div className="flex flex-col justify-center items-center m-auto bg-gbBlack">
      <NavBar />
      <Header image={"/images/banner.png"}></Header>
      <div className="p-6 mt-4"> 
      <DetailedStructure /></div>
      <Footer />
    </div>
  );
}
export default Programas;
