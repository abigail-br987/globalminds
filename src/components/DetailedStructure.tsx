import ProgramasComponent from "./Charlas";
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { type SanityDocument } from "next-sanity"; 
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
const { projectId, dataset } = client.config();
import ColorfulTitle from "./small_components/ColorfulTitle";

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

  const groupedElements = elements.reduce((acc, element) => {
    const { type } = element;
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(element);
    return acc;
  }, {} as Record<string, SanityDocument[]>);

  return (
    <div className="container mx-auto p-4 space-y-6 text-gbBlack">
      {Object.keys(groupedElements).map((type) => (
        <div key={type} className="space-y-4">

          {type === "charlas" && (<> 
            <ColorfulTitle text="CHARLAS"/></>
          )}
          {type === "networking" && (
            <ColorfulTitle text="NETWORKING"/>
          )}
          {type === "talleres" && (
            <ColorfulTitle text="TALLERES"/>
          )}
          {type === "mentores" && (
            <ColorfulTitle text="MENTORES"/>
          )}
  
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {groupedElements[type].map((element) => (
              <div key={element._id} className="border rounded-lg">
                <ProgramasComponent
                  photo={element.image ? element.image._upload.previewImage : null}
                  emoji={element.emoji}
                  title={element.title}
                  date={element.time}
                  mode={element.mode}
                  type={element.type}
                  sociallinks={element.sociallinks}
                  color={element.color}
                  description={element.description}
                  linkName={element.linkName}
                  url={element.url}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )}
