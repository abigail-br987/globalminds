import ProgramasComponent from "./Charlas";
import { type SanityDocument } from "next-sanity";
import ColorfulTitle from "./small_components/ColorfulTitle";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const builder = imageUrlBuilder(client);

// Ensure urlFor returns a string or undefined
function urlFor(source: SanityImageSource | null): string | undefined {
  return source ? builder.image(source).url() : undefined; // Use .url() to get a string URL
}

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

  // Group elements by type
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

  return (
    <div className="container mx-auto p-4 space-y-6 text-gbBlack ">
      {Object.keys(groupedElements).map((type) => (
        <div key={type} className="space-y-4">
          <ColorfulTitle text={type.toUpperCase()} />

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 ">
            {groupedElements[type].map((element) => {
              const componentProps = {
                photo: element.image && element.image.asset ? urlFor(element.image.asset) : undefined,
                emoji: element.emoji,
                title: element.title,
                date: element.time,
                mode: element.mode,
                type: element.type,
                sociallinks: element.sociallinks,
                color: element.color,
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
      ))}
    </div>
  );
}
