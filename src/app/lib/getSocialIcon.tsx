import { IoDocumentTextOutline } from "react-icons/io5";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

export const getSocialIcon = (type: string) => {
  switch (type.toLowerCase()) {
    case "facebook":
      return <FaFacebook className="text-blue-600 hover:text-blue-800" />;
    case "twitter":
      return <FaTwitter className="text-sky-500 hover:text-sky-700" />;
    case "instagram":
      return (
        <FaSquareInstagram className="text-pink-500 hover:text-pink-700" />
      );
    case "linkedin":
      return <FaLinkedin className="text-blue-700 hover:text-blue-900" />;
    default:
      return (
        <IoDocumentTextOutline className="text-gray-500 hover:text-gray-700" />
      );
  }
};
