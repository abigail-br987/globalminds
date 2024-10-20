
import { socialLinks } from "@/script/content";
const banner = "/images/banner.png";

const FollowUs = () => {

  return (
    <div
      style={{ backgroundImage: `url(${banner})` }}
      className="bg-cover bg-center flex py-12 justify-center"
    >
      <div className="p-8 bg-gbBlack rounded-lg shadow-lg text-center max-w-lg space-y-4 ">
        <h2>¡Síguenos y Únete a Nuestra Comunidad!</h2>
        <div className="flex flex-col">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className={`flex w-full items-center justify-center bg-transparent p-1 m-0
           rounded-lg saturate-200 shadow transition-transform hover:scale-105  hover:bg-opacity-100 bg-opacity-80`}
              >
                {link.icon}
                {" . "} {link.text}
              </button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
