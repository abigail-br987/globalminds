import { RiArticleLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";

export const formatDate = (isoDate: string) => {
  const dateObject = new Date(isoDate);
  const day = dateObject.getDate().toString();
  const fullMonth = dateObject.toLocaleString("default", { month: "long" });
  const month = fullMonth.slice(0, 3);
  const hour = dateObject.getHours().toString();
  const minutes = dateObject.getMinutes().toString().padStart(2, "0");

  return { day, month, hour, minutes };
};

export const getIconByType = (type: string) => {
  switch (type) {
    case "Artículo":
      return <RiArticleLine />;
    case "Testimonio":
      return <FaHeart />;
    case "Noticias":
      return <FaRegNewspaper />;
    default:
      return <IoDocumentTextOutline />;
  }
};
