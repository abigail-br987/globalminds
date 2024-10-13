import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import DetailedStructure from "../components/DetailedStructure";
import banner from "/images/banner.png";
import Header from "../components/small_components/Header";
function Programas() {
  return (
    <div className="flex flex-col justify-center items-center m-auto bg-gbBlack">
      <Header image={banner}>OPORTUNIDADES</Header>
      <NavBar />
      <DetailedStructure />
      <Footer />
    </div>
  );
}
export default Programas;
