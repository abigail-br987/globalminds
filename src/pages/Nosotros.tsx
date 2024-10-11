import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import OurTeam from "../components/OurTeam";
import FollowUs from "../components/FollowUs";
function Nosotros() {

  return (
    <div className="bg-gbBlack">
      <NavBar />
      <div className="max-w-screen-xl p-10 z-10 flex flex-col items-center justify-center m-auto">
        <h1 className="max-lg:text-5xl">NUESTRO EQUIPO</h1>
        <OurTeam/>
      </div>
      <FollowUs/>
      <Footer />
    </div>
  );
}

export default Nosotros;
