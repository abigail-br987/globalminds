import ButtonWithArrow from "./small_components/ButtonWithArrow";
import { FaLinkedin, FaInstagram, FaFacebook, FaGlobe } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { TbClockHour4 } from "react-icons/tb";
import Image from "next/image";
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

const truncateText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};

const formatDate = (isoDate: string) => {
  const dateObject = new Date(isoDate);
  const day = dateObject.getDate();
  const fullMonth = dateObject.toLocaleString("default", { month: "long" });
  const month = fullMonth.slice(0, 3);
  const hour = dateObject.getHours();
  const minutes = dateObject.getMinutes().toString().padStart(2, "0");

  return { day, month, hour, minutes };
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

  const formattedDate = date ? formatDate(date) : null;

  return (
    <div className={`space-y-2 bg-${color} rounded-lg`}>
      <div className={`relative rounded-lg bg-${color} p-3`}>
        <Image
          src={photo || "/images/banner.png"}
          layout="responsive"
          width={1000}
          alt={"programas"}
          height={500}
          className="rounded-lg"
        />
        {formattedDate && (
          <div
            className={`flex items-center space-x-2 absolute top-0 bg-${color} pr-3 pb-3 pt-3 rounded-br-lg`}
          >
            <div className="flex flex-col items-center font-gotaRegular leading-4">
              <span className="text-sm uppercase leading-4">
                {formattedDate.month}
              </span>
              <span className="text-xl tracking-wider flex items-center justify-center leading-4">
                {formattedDate.day}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="p-3 bg-gbWhite rounded-lg">
        {formattedDate && (
          <div className="flex space-x-2 relative">
            <div className="flex items-center justify-center space-x-1">
              <MdDateRange />
              <p>
                {formattedDate.day} {formattedDate.month}
              </p>
            </div>
            <div>.</div>
            <div className="flex items-center justify-center space-x-1">
              <TbClockHour4 />
              <p>
                {formattedDate.hour}:{formattedDate.minutes}h
              </p>
            </div>

            <div className="text-lg float-right">{emoji}</div>
          </div>
        )}

        <div className="flex justify-between items-center mt-1">
          <h3 className="font-rubik">{title}</h3>
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
          ) : null}
        </div>

        <p>{truncateText(description, 100)}</p>

        {mode && (
          <p className="text-sm font-medium text-gray-600">Modalidad: {mode}</p>
        )}

        {(type === "talleres" ||
          type === "networking" ||
          type === "charlas") && (
          <ButtonWithArrow className="border-gbBlack border rounded-lg">
            <a href={url} target="_blank" rel="noopener noreferrer">
              {type === "networking" ? "Únete" : "Inscríbete!"}
            </a>
          </ButtonWithArrow>
        )}
      </div>
    </div>
  );
};

export default ProgramasComponent;
