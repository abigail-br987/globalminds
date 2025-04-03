import { socialLinks } from "@/script/content";

const SocialIcons = () => {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className={`${link.bgColor} text-gbBlack text-2xl  p-1 rounded flex items-center`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
