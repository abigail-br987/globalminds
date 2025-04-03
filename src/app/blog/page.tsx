import Landing from "@/components/inicio/Landing";
import Structure from "@/components/inicio/Structure";
import Figures from "@/components/figures/Figures";
import JoinUs from "@/components/inicio/JoinUs";
import Donate from "@/components/inicio/Donate";
import Impact from "@/components/inicio/Impact";
import Presentation from "@/components/inicio/Presentation";
import Mission from "@/components/inicio/Mission";
import Vision from "@/components/inicio/Vision";

export default async function IndexPage() {
  return (
    <div>
      <NavBar />
      <BlogServer />
      <Footer />
    </div>
  );
}
