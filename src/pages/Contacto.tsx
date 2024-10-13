import NavBar from "../components/NavBar"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import banner from "/images/banner.png"
const Contacto = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gbBlack text-white">
            <div 
                className="w-full h-64 bg-cover bg-center flex justify-center items-center" 
                style={{ backgroundImage: `url(${banner})` }}
            >
                <h1>CONTÁCTANOS</h1>
            </div>
            <div className="max-w-screen-xl p-10 z-10 space-y-20">
            <Contact />
            </div>
            <NavBar />
            <Footer />
        </div>
    );
};

export default Contacto;
