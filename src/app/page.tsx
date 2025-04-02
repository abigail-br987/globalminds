import Landing from "@/components/Landing";
import Structure from "@/components/Structure";
import Photos from "@/components/Photos";
import Figures from "@/components/Figures";
import JoinUs from "@/components/JoinUs";
import Donate from "@/components/Donate";
import Impact from "@/components/Impact";
import Footer from "@/components/Footer";
import Presentation from "@/components/Presentation";

function Home() {
  return (
    <div className="flex flex-col justify-center items-center m-auto bg-gbBlack">
      <Figures />
      <Landing />
    <div className="max-w-screen-xl p-10 z-10 space-y-28">
       <Presentation/>
       <Photos
          images={[
            "https://placehold.co/600x400",
            "https://placehold.co/700x400",
          ]}
        /> 
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
