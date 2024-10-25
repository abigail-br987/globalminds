

import NavBar from "@/components/NavBar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedDiv from "@/components/small_components/AnimatedDiv";
const Contacto = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gbBlack text-white">
      <div
        className="w-full h-64 bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${"/images/banner.png"})` }}
      >
        <h1 style={{ textShadow: "3px 3px 2px rgba(2, 2, 2, 2)" }} className="max-sm:text-lg">
          CONTÁCTANOS
        </h1>
      </div>
      <AnimatedDiv className="max-w-screen-xl p-10 z-10 space-y-20">
        <Contact />
      </AnimatedDiv>
      <NavBar />
      <Footer />
    </div>
  );
};

export default Contacto;
