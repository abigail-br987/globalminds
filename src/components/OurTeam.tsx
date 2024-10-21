"use client";
import { useState } from "react";
import { teamMembers } from "@/script/content";
import Modal from "./Modal";
import Image from "next/image";
import { SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const builder = imageUrlBuilder(client);

const POSTS_QUERY = `*[ 
  _type == "member" 
]`;

const options = { next: { revalidate: 30 } };

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export default async function OurTeam() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);
  const members = await client.fetch<SanityDocument[]>(
    POSTS_QUERY,
    {},
    options
  );

  const handleMemberClick = (index: number) => {
    setSelectedMember(index);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="bg-gbBlack max-w-screen-xl my-10 m-auto">
      <div className="max-w-lg mb-6">
        <p>Conoce al Equipo detrás de </p>
        <h2>GlobalMinds</h2>
        <p className="mt-3">
          Global Minds es una organización juvenil creada para empoderar a
          jóvenes latinos, proporcionando acceso a recursos, conexiones y
          mentoría personalizada.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 h-min gap-6">
        {members.map((member, index) => {
          const postImageUrl = member.photo
            ? urlFor(member.photo).width(550).height(310).url()
            : "/default-image.png";

          return (
            <div
              key={index}
              onClick={() => handleMemberClick(index)}
              className="group relative cursor-pointer opacity-90 transition-transform duration-300 hover:scale-105 hover:opacity-100"
            >
              <Image
                src={postImageUrl}
                alt={`Photo of ${member.name}`}
                className="w-full h-fit duration-300 transition-all"
              />
              <div className="absolute text-sm bottom-0 m-2 border-gbBlack border px-1 bg-gbBlack text-gbWhite transition-all">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          );
        })}
      </div>

      <Modal isOpen={selectedMember !== null} onClose={handleCloseModal}>
        {selectedMember !== null && (
          <div className="text-center">
            <h2 className="text-lg font-bold">
              {members[selectedMember].name}
            </h2>
            <Image
              src={
                urlFor(members[selectedMember].photo)
                  .width(150)
                  .height(150)
                  .url() || "/default-image.png"
              }
              width={150}
              height={150}
              alt={members[selectedMember].name}
              className="w-32 h-32 mx-auto rounded-full"
            />
            <p className="mt-2">{members[selectedMember].description}</p>
          </div>
        )}
      </Modal>
    </div>
  );
}
