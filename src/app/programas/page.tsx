import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import DetailedStructure from "@/components/DetailedStructure";
import Header from "@/components/small_components/Header";

const banner = "https://www.marthadebayle.com/wp-content/uploads/2024/01/Asi-se-pueden-identificar-oportunidades-de-negocio.jpg";

function Programas() {
  return (
    <div className="flex flex-col justify-center items-center m-auto bg-gbBlack">
      <NavBar />
      <Header image={banner}>.</Header>

      <DetailedStructure />
      <Footer />
    </div>
  );
}
export default Programas;
