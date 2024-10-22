import ProgramasComponent from "./ProgramasComponent";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { globalMindsColors } from "@/script/content";
import { urlFor } from "@/app/lib/displayImage";
import { formatDate } from "@/app/lib/utils";
const POSTS_QUERY = `*[ 
  _type == "offerings" 
] | order(publishedAt desc)[0...12]{ 
  _id, 
  title, 
  description, 
  type, 
  mode, 
  sociallinks,
  register, 
  emoji, 
  time,
  image,
}`;

const options = { next: { revalidate: 30 } };

export default async function DetailedStructure() {
  const elements = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  const groupedElements = elements.reduce(
    (acc, element) => {
      const { type } = element;
      if (!acc[type]) {
        acc[type] = [];
      }
      acc[type].push(element);
      return acc;
    },
    {} as Record<string, SanityDocument[]>
  );

  const uniqueTypes = Object.keys(groupedElements);


  return (
    <div className="container mx-auto p-4 space-y-10 text-gbBlack ">
      {uniqueTypes.map((type, index) => {
        const color = globalMindsColors[index % globalMindsColors.length];
        const columnClass =
        type === "Mentores" ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6" : "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5";
  
        return (
          <div key={type} className="space-y-4">
            <h2 className="text-gbWhite">{type.toUpperCase()}</h2>
            <div className={`grid ${columnClass} bg-${color} rounded-2xl gap-4 p-3`}>
            {groupedElements[type].map((element) => {
                
                const formattedDate = element.time ? formatDate(element.time) : undefined;
                
                const componentProps = {
                  photo: element.image && element.image.asset ? String(urlFor(element.image.asset)) : undefined,
                  emoji: element.emoji,
                  title: element.title,
                  formattedDate: formattedDate,
                  mode: element.mode,
                  type: element.type,
                  sociallinks: element.sociallinks,
                  color: color,
                  description: element.description,
                  linkName: element.linkName,
                  url: element.url,
                };
                return (
                  <div key={element._id} className="">
                    <ProgramasComponent {...componentProps} />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
