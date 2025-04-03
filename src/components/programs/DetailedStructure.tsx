"use client";
import ProgramasComponent from "./ProgramasComponent";
import { globalMindsColors } from "@/script/content";
import { urlFor } from "@/app/lib/displayImage";
import { formatDate } from "@/app/lib/utils";
import AnimatedDiv from "../small_components/AnimatedDiv";
import { SanityDocument } from "next-sanity";

interface ImageAsset {
  _id: string;
  url: string;
}

interface Image {
  asset: ImageAsset;
}

interface Offering {
  _id: string;
  title: string;
  description: string;
  type: string;
  mode?: string;
  sociallinks?: string[];
  register?: string;
  emoji?: string;
  time?: string;
  image?: Image;
}

interface ProcessedOffering extends Offering {
  isPast?: boolean;
  formattedDate?:
    | { day: string; month: string; hour: string; minutes: string }
    | undefined;
}

interface ItemsProps {
  items: SanityDocument[];
}

export default function DetailedStructure({ items }: ItemsProps) {
  const currentDate = new Date();
  const processedElements: ProcessedOffering[] = items.map((element) => {
    const isPast = element.time ? new Date(element.time) < currentDate : false;
    const formattedDate = element.time ? formatDate(element.time) : undefined;

    return {
      _id: element._id,
      title: element.title || "Untitled",
      description: element.description || "No description available",
      type: element.type || "Unknown",
      mode: element.mode || "Unknown",
      sociallinks: element.sociallinks || [],
      register: element.register || "",
      emoji: element.emoji || "",
      time: element.time || "",
      image: element.image || undefined,
      isPast,
      formattedDate,
    };
  });

  processedElements.sort((a, b) => {
    if (a.isPast === b.isPast) {
      return (
        new Date(b.time || "").getTime() - new Date(a.time || "").getTime()
      );
    }
    return a.isPast ? 1 : -1;
  });

  const groupedElements = processedElements.reduce(
    (acc, element) => {
      const { type } = element;
      if (!acc[type]) {
        acc[type] = [];
      }
      acc[type].push(element);
      return acc;
    },
    {} as Record<string, ProcessedOffering[]>,
  );

  const uniqueTypes = Object.keys(groupedElements);

  if (!items || items.length === 0) {
    return <p>No programs available.</p>;
  }

  return (
    <div className="container mx-auto space-y-10 text-gbBlack">
      {uniqueTypes.map((type, index_) => {
        const color = globalMindsColors[index_ % globalMindsColors.length];
        const columnClass =
          type === "Mentores"
            ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
            : "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5";

        return (
          <AnimatedDiv key={type} className="space-y-4">
            <h2 className="text-gbWhite">{type.toUpperCase()}</h2>
            <div
              className={`grid p-1 ${columnClass} bg-${color} rounded-2xl gap-4 p-3`}
            >
              {groupedElements[type].map((element, index) => {
                const componentProps = {
                  photo:
                    element.image && element.image.asset
                      ? String(urlFor(element.image.asset))
                      : undefined,
                  emoji: element.emoji,
                  title: element.title,
                  formattedDate: element.formattedDate,
                  mode: element.mode,
                  type: element.type,
                  sociallinks: element.sociallinks?.map((link: string) => ({
                    platform: "unknown",
                    url: link,
                  })),
                  color: color,
                  description: element.description,
                  url: element.register,
                  past: element.isPast,
                };

                return <ProgramasComponent {...componentProps} key={index} />;
              })}
            </div>
          </AnimatedDiv>
        );
      })}
    </div>
  );
}
