import Landing from "@/components/inicio/Landing";
import Structure from "@/components/inicio/Structure";
import Figures from "@/components/Figures";
import JoinUs from "@/components/inicio/JoinUs";
import Donate from "@/components/Donate";
import Impact from "@/components/inicio/Impact";
import Presentation from "@/components/inicio/Presentation";
import Mission from "@/components/inicio/Mission";
import Vision from "@/components/inicio/Vision";

function Home() {
  return (
    <>
      <Figures />
      <Landing />
      <div className="max-w-screen-md m-auto p-10 space-y-20">
        <Presentation />
        <div className="flex text-center gap-6">
          <Mission/>
          <Vision/>
        </div>
        <Structure />
        <Impact />
        <JoinUs />
        <Donate />
      </div>
    </>
  );
}

export default Home;
