import { MdDateRange } from 'react-icons/md';
import { FaRegClock } from 'react-icons/fa';
import Link from 'next/link';
interface BlogCardProps {
    images: string[];
    date: string;
    title: string;
    articleType: string;
    readTime: string;
    description: string;
    slug:string;
    id:string;
    onClick?: () => void; 
    className?: string; 
  }

  const BlogCard: React.FC<BlogCardProps> = ({
    images,
    date,
    title,
    articleType,
    readTime,
    id,
    slug,
    description,
    onClick, 
    className, 
  }) => {
    if (!images.length) {
      throw new Error('At least one image is required.');
    }
  
    return (

      <div
        className={`relative ${className}`}
      >
          <Link key={id} href={`/blog/${slug}`}> 
        <div className="w-full h-3/5">
          <img
            src={images[0]}
            className="w-full h-full p-2 rounded-lg object-cover"
          />
        </div>
  
        {images.length > 1 && (
          <div className="w-full h-2/5">
            <img
              src={images[1]}
              className="w-full h-full p-2 rounded-lg object-cover"
            />
          </div>
        )}
  
        <div className="bg-gbWhite rounded-lg max-w-64 p-6 bottom-0 right-0 absolute text-gbBlack">
          <h5 className="uppercase opacity-70 text-xs font-semibold flex items-center ">
            <MdDateRange />
            {date}
          </h5>
          <h4 className="text-lg leading-4 mb-3 mt-2">
            {title}
          </h4>
          <h5 className="uppercase text-xs font-semibold opacity-70 w-full flex justify-between">
            <span>{articleType}</span>
            <span className="flex items-center">
              <FaRegClock />. {readTime}
            </span>
          </h5>
          <hr className="border-t border-gbBlack my-2" />
          <p className="text-xs">{description}</p>
        </div></Link>
      </div>
    );
  };
  
  export default BlogCard