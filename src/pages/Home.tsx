import Landing from "../components/Landing";
import NavBar from "../components/NavBar";
import AboutUs from "../components/AboutUs";
import Mission from "../components/Mission";
import Structure from "../components/Structure";
import Photo from "../components/Photo";
import Figures from "../components/Figures";
import JoinUs from "../components/JoinUs";
import Donate from "../components/Donate";
import Impact from "../components/Impact";
import Footer from "../components/Footer";
function Home() {
  return (
    <div className="flex flex-col justify-center items-center m-auto bg-gbBlack">
      <NavBar />
      <Figures />
      <Landing />
      <div className="max-w-screen-xl p-10 z-10 space-y-12">
        <AboutUs />
        <Mission />
        <Photo />
        <Structure />
        <Impact />
        <JoinUs />
        <Donate />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
