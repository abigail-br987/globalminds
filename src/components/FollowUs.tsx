import { socialLinks } from "@/script/content";
import SocialIcons from "./SocialIcons";
const banner = "/images/banner3.png";

const FollowUs = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
      className="flex py-12 justify-center"
    >
      <div className="p-3 rounded-lg scale-150 mt-32 mb-10 bg-gbBlack m-auto text-center">
        <h2 className="text-lg">¡Síguenos y Únete!</h2>
        <div className="">
          <SocialIcons/>
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
