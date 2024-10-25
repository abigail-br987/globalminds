"use client";
import { useState } from "react";
import Modal from "./Modal";
import Image from "next/image";
import { SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import AnimatedDiv3 from "./small_components/AnimatedDiv3";
import AnimatedDiv from "./small_components/AnimatedDiv";
const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

interface OurTeamProps {
  members: SanityDocument[];
}

export default function OurTeam({ members }: OurTeamProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-40% 0px" });

  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const handleMemberClick = (index: number) => {
    setSelectedMember(index);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  if (!members || members.length === 0) {
    return <p>No team members available.</p>;
  }

  return (
    <div  className="max-w-screen-xl my-10 m-auto">
      <div  className="max-w-lg mb-6">
        <p>Conoce al Equipo detrás de </p>
        <h2>GlobalMinds</h2>
        <p className="mt-3">
          Global Minds es una organización juvenil creada para empoderar a
          jóvenes latinos, proporcionando acceso a recursos, conexiones y
          mentoría personalizada.
        </p>
      </div>
      <AnimatedDiv  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 h-min gap-6">
        {members.map((member, index) => {
          const postImageUrl = member.photo
            ? urlFor(member.photo).width(550).height(310).url()
            : "/image/banner.png";
          return (
            <div
              onClick={() => handleMemberClick(index)}
              className="group relative transition-transform cursor-pointer hover:scale-105 "
            >
              <div className="relative w-full aspect-square">
                <Image
                  src={postImageUrl}
                  layout="fill"
                  alt={`Photo of ${member.name}`}
                  className="object-cover duration-300 transition-all rounded"
                />
              </div>
              <div className="absolute text-sm bottom-0 m-2 border-gbBlack border px-1 bg-gbBlack text-gbWhite transition-all">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          );
        })}
      </AnimatedDiv>

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
