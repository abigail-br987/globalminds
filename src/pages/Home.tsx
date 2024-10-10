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
import OurTeam from "../components/OurTeam";
function Home() {
  return (
    <div className="flex flex-col justify-center items-center m-auto bg-gbBlack">
      <NavBar />
      <Figures />
      <Landing />      

      <div className="max-w-screen-xl pb-20 p-6 z-10">
      <AboutUs />
     <Mission />
      <Photo/>
      <Structure />
      <JoinUs />
      <Donate />
      <Impact /> </div>
      <OurTeam/>
      <Structure />

      <Structure />

      <Structure />

     
    </div>
  );
}

export default Home;
