import Landing from "../components/Landing";
import NavBar from "../components/NavBar";
import AboutUs from "../components/AboutUs";
import Mission from "../components/Mission";
import Structure from "../components/Structure";
import Photos from "../components/Photos";
function Home() {
  return (
    <div className="flex flex-col justify-center items-center m-auto bg-gbBlack">
      <NavBar />

      <Landing />
      <div className="max-w-screen-xl pb-20">
      <AboutUs />
      <Mission />
      <Photos/>
      <Structure />
      </div>
    </div>
  );
}

export default Home;
