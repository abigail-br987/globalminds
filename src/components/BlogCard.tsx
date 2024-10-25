import { MdDateRange } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { getIconByType } from "@/app/lib/utils";
interface FormattedDate {
  day: string;
  month: string;
  hour: string;
  minutes: string;
}

interface BlogCardProps {
  images: string[];
  formattedDate?: FormattedDate;
  title: string;
  articleType: string;
  readTime: string;
  description: string;
  slug: string;
  id: string;
  onClick?: () => void;
  className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  images,
  formattedDate,
  title,
  articleType,
  id,
  slug,
  description,
  className,
}) => {
  return (
    <div className={`${className} w-full h-full`}>
      <Link key={id} href={`/blog/${slug}`}>
        <figure className="w-full h-3/5 overflow-hidden relative">
          <Image
            src={images[0]}
            alt="First Image"
            layout="fill"
            className="object-cover p-1 rounded-2xl"
          />
        </figure>
        {images.length > 1 && (
          <figure className="w-full h-2/5 rounded-2xl overflow-hidden relative">
            <Image
              src={images[1]}
              alt="Second Image"
              layout="fill"
              className="object-cover p-1 rounded-2xl"
            />
          </figure>
        )}
        <div className="bg-gbWhite rounded-2xl space-y-2 max-w-72 p-6 bottom-0 right-0 absolute text-gbBlack">
          <h3 className="pb-1">{title}</h3>
          <h5 className="text-xs opacity-70 w-full flex justify-between">
            <span className="flex items-center space-x-1">
              {getIconByType(articleType)}
              <span>{articleType}</span>
            </span>

            {formattedDate && (
              <div className={`flex items-center space-x-1`}>
                <MdDateRange />
                <span>
                  {formattedDate.month} {formattedDate.day}
                </span>
              </div>
            )}
          </h5>
          <hr className="border-t border-gbBlack" />
          <p className="text-xs">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
