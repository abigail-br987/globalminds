import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import BlogServer from "./BlogServer";


export default async function IndexPage() {

  return (
    <div>
      <NavBar />
        <BlogServer/>
      <Footer />
    </div>
  );
}
