import Landing from "@/components/Landing";
import NavBar from "@/components/NavBar";
import Structure from "@/components/Structure";
import Photos from "@/components/Photos";
import Figures from "@/components/Figures";
import JoinUs from "@/components/JoinUs";
import Donate from "@/components/Donate";
import Impact from "@/components/Impact";
import Footer from "@/components/Footer";
import Presentation from "@/components/Presentation";

export const aboutUsContent = [
  {
    title: "¿Quiénes Somos?",
    description:
      "Somos una organización juvenil que empodera jóvenes latinos, proporcionando acceso a recursos, conexiones y mentoría personalizada. Creemos que el éxito individual puede multiplicarse para el beneficio de la comunidad, por lo que ofrecemos asesoría gratuita para apoyar a los estudiantes a lograr sus metas educativas y profesionales en el extranjero.",
  },
];
export const missionContent = [
  {
    title: "Nuestra Misión",
    description:
      "Nuestra misión es crear una plataforma donde los jóvenes puedan acceder a mentores, charlas inspiradoras y talleres prácticos, eliminando barreras económicas y culturales que limitan las oportunidades de muchos.",
  },
];

function Home() {
  return (
    <div className="flex flex-col justify-center items-center m-auto bg-gbBlack">
      <NavBar />
      <Figures />
      <Landing />
    <div className="max-w-screen-xl p-10 z-10 space-y-10">
       <Presentation aboutUsContent={aboutUsContent} missionContent={missionContent}/>
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
