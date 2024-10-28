"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import AnimatedDiv from "./small_components/AnimatedDiv";
import { getSocialIcon } from "@/app/lib/getSocialIcon";
const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

interface OurTeamProps {
  members: SanityDocument[];
}

export default function OurTeam({ members }: OurTeamProps) {
  const [sortedMembers, setSortedMembers] = useState<SanityDocument[]>([]);
  // const [selectedMember, setSelectedMember] = useState<number | null>(null);

  useEffect(() => {
    const sorted = [...members].sort((a, b) => {
      if (a.role === "Dir. General" || a.role === "Directora de Programas") return -1;
      if (b.role === "Dir. General" || b.role === "Directora de Programas") return 1;
      if (a.area < b.area) return -1;
      if (a.area > b.area) return 1;
      return 0;
    });
    setSortedMembers(sorted);
  }, [members]);

  // const handleMemberClick = (index: number) => {
    //setSelectedMember(index);
  // };

  // const handleCloseModal = () => {
    // setSelectedMember(null);
  // };

  if (!members || members.length === 0) {
    return <p>No team members available.</p>;
  }

  return (
    <div className="max-w-screen-xl my-10 m-auto">
      <div className="max-w-lg mb-6">
        <p>Conoce al Equipo detrás de </p>
        <h2>GlobalMinds</h2>
        <p className="mt-3">
          Global Minds es una organización juvenil creada para empoderar a
          jóvenes latinos, proporcionando acceso a recursos, conexiones y
          mentoría personalizada.
        </p>
      </div>
      <AnimatedDiv className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 h-min gap-6">
  {sortedMembers.map((member, index) => {
    const postImageUrl = member.photo
      ? urlFor(member.photo).url()
      : "/image/banner.png";

    return (
      <div
        key={index}
        className="group relative transition-transform cursor-pointer hover:scale-105"
      >
        <div className="relative aspect-square">
          <Image
            src={postImageUrl}
            layout="fill"
            alt={`Imagen de ${member.name}`}
            className="object-cover duration-300 transition-all rounded"
          />
        </div>
        <div className="absolute bottom-0 p-2 bg-gbBlack text-gbWhite transition-all rounded-tr-lg">
          <h3>{member.name}</h3>
          <p className="leading-3 text-xs uppercase">{member.role}</p>
        </div>
        {member.socialLinks && member.socialLinks.length > 0 && (
          <div className="absolute flex bg-gbBlack p-1 gap-1 right-0 top-0 rounded-bl-lg">
            {member.socialLinks.map((link: { url: string | undefined; platform: string }, idx: number) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl"
              >
                {getSocialIcon(link.platform)}
              </a>
            ))}
          </div>
        )}
      </div>
    );
  })}
</AnimatedDiv>

{/*
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
      </Modal> */}
    </div>
  );
}
