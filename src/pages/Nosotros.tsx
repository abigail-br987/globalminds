import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import OurTeam from "../components/OurTeam";
import FollowUs from "../components/FollowUs";
import banner from "/images/banner.png"

function Nosotros() {

  return (
    <div className="bg-gbBlack">
       <div
        className="w-full h-64 bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h1 style={{ textShadow: "3px 3px 2px rgba(2, 2, 2, 2)" }} className="">
          NUESTRO EQUIPO
        </h1>
      </div>
      <NavBar />
      <OurTeam/>
      <FollowUs/>
      <Footer />
    </div>
  );
}

export default Nosotros;
