import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import OurTeam from "../components/OurTeam";
import FollowUs from "../components/FollowUs";
import banner from "/images/banner.png";
import Header from "../components/small_components/Header";
function Nosotros() {
  return (
    <div className="bg-gbBlack">
      <Header image={banner}>NUESTRO EQUIPO</Header>
      <NavBar />
      <OurTeam />
      <FollowUs />
      <Footer />
    </div>
  );
}

export default Nosotros;
