import ButtonWithArrow from "./small_components/ButtonWithArrow";
import { FaLinkedin, FaInstagram, FaFacebook, FaGlobe } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { TbClockHour4 } from "react-icons/tb";
import Image from "next/image";
import { formatDate } from "@/app/lib/utils";
import { getIconByType } from "@/app/lib/utils";

interface FormattedDate {
  day: string;
  month: string;
  hour: string;
  minutes: string;
}

interface Props {
  emoji: string;
  title: string;
  photo?: string;
  formattedDate?: FormattedDate;
  description: string;
  linkName: string;
  url: string;
  color: string;
  type: string;
  sociallinks?: { platform: string; url: string }[];
  mode?: string;
}

const ProgramasComponent: React.FC<Props> = ({
  photo,
  emoji,
  title,
  formattedDate,
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
    <div className={`rounded-lg h-full bg-gbWhite relative`}>
      <div
        className={`relative rounded-lg ${type === "Mentores" ? "aspect-square" : "h-64"} `}
      >
        <Image
          src={photo || "/images/banner.png"}
          layout="fill"
          alt={"programas"}
          className="rounded-lg object-cover"
        />
       
      </div>

      {formattedDate && (
          <div
            className={`flex items-center bg-${color} z-50  space-x-2 absolute top-0  p-3 rounded-br-lg`}
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

      <div className="p-6 bg-gbWhite  rounded-2xl">
        {formattedDate && (
          <h5 className="flex justify-between">
            <div className="flex space-x-2 text-xs opacity-70">
            <span className="flex items-center justify-center space-x-1">
              <MdDateRange />
              <p>
                {formattedDate.day} {formattedDate.month}
              </p>
            </span>

            <span className="flex items-center justify-center space-x-1">
              <TbClockHour4 />
              <p>
                {formattedDate.hour}:{formattedDate.minutes}h
              </p>
            </span>
            </div>
            {emoji}
          </h5>
        )}

        <div className="bg-gbWhite rounded-2xl p-1 space-y-2 text-gbBlack">
          <div className="flex justify-between w-full items-center">
            <h3 className="pb-1">{title}</h3>

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
              null
            )}
          </div>
          <hr className="border-t border-gbBlack" />
          <p className="text-sm text-justify">{description}</p>
          {mode && (
            <p className="text-sm font-medium text-gray-600">
              Modalidad: {mode}
            </p>
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
    </div>
  );
};

export default ProgramasComponent;
