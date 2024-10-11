import {
  FaLinkedin,
  FaInstagram,
  FaDiscord,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import banner from "/images/banner.png";
const FollowUs = () => {
  const links = [
    {
      href: "https://www.linkedin.com",
      bgColor: "bg-gbBlue",
      text: "Síguenos en LinkedIn",
      icon: <FaLinkedin />,
    },
    {
      href: "https://www.instagram.com",
      bgColor: "bg-gsPink",
      text: "Síguenos en Instagram",
      icon: <FaInstagram />,
    },
    {
      href: "https://discord.com",
      bgColor: "bg-gsLightPurple",
      text: "Únete a nuestro Discord",
      icon: <FaDiscord />,
    },
    {
      href: "https://www.whatsapp.com",
      bgColor: "bg-gbGreen",
      text: "Únete a nuestro grupo de WhatsApp",
      icon: <FaWhatsapp />,
    },
    {
      href: "mailto:info@.com",
      bgColor: "bg-gbYellow",
      text: "Escríbenos por Email",
      icon: <FaEnvelope />,
    },
  ];

  return (
    <div
      style={{ backgroundImage: `url(${banner})` }}
      className="bg-cover bg-center flex py-12 justify-center"
    >
      <div className="p-8 bg-gbBlack rounded-lg shadow-lg text-center max-w-lg space-y-6">
        <h2>¡Síguenos y Únete a Nuestra Comunidad!</h2>
        <div className="flex flex-col">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className={`flex w-full items-center justify-center ${link.bgColor}
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
