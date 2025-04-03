import FollowUs from "@/components/FollowUs";
import Header from "@/components/small_components/Header";
import Figures2 from "@/components/figures/Figures2";
const banner =
  "https://media.licdn.com/dms/image/C4D12AQFS2QZ8phBvvw/article-cover_image-shrink_600_2000/0/1590074321257?e=2147483647&v=beta&t=lAnXk5kw_JqvOx3dg93X_zIcz7TTEnkNpRyqhYAIQ8Q";

export default async function Nosotros() {
  return (
    <>
      <div className="z-50">
        <Header image={banner} />
        <FollowUs />
      </div>
      <Figures2 />
    </>
  );
}
