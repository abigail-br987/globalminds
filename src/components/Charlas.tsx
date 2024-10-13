import ButtonWithArrow from "./small_components/ButtonWithArrow";

interface Props {
  emoji: string;
  title: string;
  speaker?: string;
  photo?: string;
  date?: string;
  description: string;
  linkName: string;
  url: string;
}

const ProgramasComponent: React.FC<Props> = ({
  photo,
  emoji,
  title,
  speaker,
  date,
  description,
  linkName,
  url,
}) => {
  return (
    <div className={`p-4 ${photo ? 'flex items-center' : ''} bg-gbWhite max-w-sm rounded-lg text-gbBlack items-start m-1`}>
      {photo && (
        <img
          src={photo}
          alt={`${title} image`}
          className="max-w-sm rounded-full object-cover"
        />
      )}
      
      <div>
        <h2 className="text-xl font-bold">
          {emoji} {title}
        </h2>
        {speaker && <h3 className="text-lg font-semibold">{speaker}</h3>}
        <p className="mt-2">{description}</p>
        {date && <p className="text-sm text-gray-500 mt-1">{date}</p>}
        <a href={url} target="_blank" rel="noopener noreferrer">
          <ButtonWithArrow className="bg-gbBlack text-gbWhite">{linkName}</ButtonWithArrow>
        </a>
      </div>
    </div>
  );
};

export default ProgramasComponent;
