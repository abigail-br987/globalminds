
import { globalMindsColors } from "../assets/script/content";
import ProgramasComponent from "./Charlas";
import { programs } from "../assets/script/content";

const DetailedStructure: React.FC = () => {
  return (
    <div className="container mx-auto p-4 space-y-6">
      {programs.map((program, index) => (
        <div
          key={index}
          className={`bg-${globalMindsColors[index % globalMindsColors.length]} rounded-lg p-6 ${
            ['gbYellow', 'gbGreen'].includes(globalMindsColors[index % globalMindsColors.length])
              ? 'text-gbBlack'
              : 'text-white'
          }`}
        >
          <h2>{program.title}</h2>
          <h3>{program.h2}</h3>
          <p className="mt-2">{program.description}</p>

          <div className="flex flex-wrap mt-3">
            {program.details.map((detail, detailIndex) => (
              <ProgramasComponent
                key={detailIndex}
                emoji={detail.emoji || ''}
                title={detail.title || ''}
                speaker={detail.speaker}
                photo={detail.photo}
                date={detail.date}
                description={detail.description || ''}
                linkName={detail.linkName || 'Learn More'}
                url={detail.url || '#'}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailedStructure;
