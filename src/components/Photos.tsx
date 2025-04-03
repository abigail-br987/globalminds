import { globalMindsColors } from "@/script/content";
import AnimatedDiv from "./small_components/AnimatedDiv";
import Image from "next/image";
interface PhotosProps {
  images: string[];
}
import AnimatedDiv2 from "./small_components/AnimatedDiv2";
const Photos: React.FC<PhotosProps> = ({ images }) => {
  return (
    <AnimatedDiv key={2} className="relative">
      <div
        className={`gap-6 space-y-6 ${
          images.length === 1
            ? "sm:columns-1"
            : images.length === 2
              ? "sm:columns-2"
              : images.length === 3 || images.length > 3
                ? "sm:columns-3"
                : ""
        }`}
      >
        {images.map((src, idx) => {
          const randomChoice = Math.floor(Math.random() * 3);
          const rotationClass =
            randomChoice === 0
              ? "rotate-1"
              : randomChoice === 1
                ? "-rotate-1"
                : "";
          const randomColor =
            globalMindsColors[
              Math.floor(Math.random() * globalMindsColors.length)
            ];
          console.log(randomColor);
          return (
            <AnimatedDiv2 key={idx}>
              <Image
                key={idx}
                className={`w-full max-h-96 h-auto object-cover rounded-lg shadow-lg border-[10px] ${rotationClass} border-${randomColor}`}
                src={src}
                layout="responsive"
                width={100}
                height={100}
                alt={`Image ${idx + 1}`}
              />{" "}
            </AnimatedDiv2>
          );
        })}
      </div>
    </AnimatedDiv>
  );
};

export default Photos;
