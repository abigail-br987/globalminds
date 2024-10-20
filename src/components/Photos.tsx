import { globalMindsColors } from "@/script/content";
interface PhotosProps {
  images: string[];
}
const Photos: React.FC<PhotosProps> = ({ images }) => {
  return (
    <div className="relative">
      <div
        className={`gap-6 space-y-6 ${
          images.length === 1
            ? "columns-1"
            : images.length === 2
            ? "columns-2"
            : images.length === 3 || images.length > 3
            ? "columns-3"
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
            <img
              key={idx}
              className={`w-full max-h-96 h-auto object-cover rounded-lg shadow-lg border-[10px] ${rotationClass} border-${randomColor}`}
              src={src} 
              alt={`Image ${idx + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Photos;
