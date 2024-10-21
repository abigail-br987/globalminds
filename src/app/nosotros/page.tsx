import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import OurTeam from "@/components/OurTeam";
import FollowUs from "@/components/FollowUs";
import Header from "@/components/small_components/Header";

const banner = "https://media.licdn.com/dms/image/C4D12AQFS2QZ8phBvvw/article-cover_image-shrink_600_2000/0/1590074321257?e=2147483647&v=beta&t=lAnXk5kw_JqvOx3dg93X_zIcz7TTEnkNpRyqhYAIQ8Q";

function Nosotros() {
  return (
    <div className="bg-gbBlack">
      <Header image={banner}></Header>
      <NavBar />
      <OurTeam />
      <FollowUs />
      <Footer />
    </div>
  );
}

export default Nosotros;
