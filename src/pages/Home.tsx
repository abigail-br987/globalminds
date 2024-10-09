import Landing from "../components/Landing";
import NavBar from "../components/NavBar";
import AboutUs from "../components/AboutUs";
import Mission from "../components/Mission";
import Structure from "../components/Structure";
import Photo from "../components/Photo";
import Figures from "../components/Figures";
import JoinUs from "../components/JoinUs";
function Home() {
  return (
    <div className="flex flex-col justify-center items-center m-auto bg-gbBlack">
      <NavBar />
      <Figures />
      <Landing />      

      <div className="max-w-screen-xl pb-20 p-6">
      <AboutUs />
     <Mission />
      <Photo/>
      <Structure />
      <JoinUs />
      </div>
    </div>
  );
}

export default Home;
