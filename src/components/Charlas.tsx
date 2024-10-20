import { link } from "fs";
import ButtonWithArrow from "./small_components/ButtonWithArrow";
import { FaLinkedin, FaInstagram, FaFacebook, FaGlobe } from "react-icons/fa";

interface Props {
  emoji: string;
  title: string;
  photo?: string;
  date?: string;
  description: string;
  linkName: string;
  url: string;
  color: string;
  type: string;
  sociallinks?: { platform: string; url: string }[];
  mode?: string;
}
const formatDate = (isoDate: string) => {
  const dateObject = new Date(isoDate);

  // Format the date and time separately
  const formattedDate = dateObject.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const formattedTime = dateObject.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });

  // Get the timezone name
  const timeZone = dateObject
    .toLocaleTimeString(undefined, { timeZoneName: "short" })
    .split(" ")
    .pop();

  return `${formattedDate}, ${formattedTime} ${timeZone}`;
};

const ProgramasComponent: React.FC<Props> = ({
  photo,
  emoji,
  title,
  date,
  color,
  mode,
  description,
  sociallinks,
  type,
  url,
}) => {
  const renderSocialIcon = (platform: string) => {
    switch (platform) {
      case "linkedin":
        return <FaLinkedin className="text-blue-600" />;
      case "instagram":
        return <FaInstagram className="text-pink-500" />;
      case "facebook":
        return <FaFacebook className="text-blue-700" />;
      case "otro":
        return <FaGlobe />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`p-6 bg-${color} space-y-2 bg-gbWhite rounded-lg`}
    >
      {photo && (
        <img
          src={photo}
          alt={`${title} image`}
          className="w-full h-48 object-cover rounded-lg"
        />
      )}
      <div className="flex justify-between items-center">
        <h3>{title}</h3>
        {type === "mentores" && sociallinks ? (
          <div className="flex space-x-4">
            {sociallinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:opacity-75 transition-opacity"
              >
                {renderSocialIcon(link.platform)}
              </a>
            ))}
          </div>
        ) : (
          <span className="text-lg">{emoji}</span>
        )}
      </div>
      <p className="">{description}</p>
      <div> 
      {mode && (
        <p className="text-sm font-medium text-gray-600">Modalidad: {mode}</p>
      )}
      {date && <p className="text-sm text-gray-500">{formatDate(date)}</p>}
      </div>
      {type === "talleres" || type === "networking" || type === "charlas" ? (
        <ButtonWithArrow className="border-gbBlack  border">
          <a href={url} target="_blank" rel="noopener noreferrer">
            {type === "networking" ? "Únete" : "Inscríbete!"}
          </a>
        </ButtonWithArrow>
      ) : null}
    </div>
  );
};

export default ProgramasComponent;
