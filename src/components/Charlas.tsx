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
  color:string;
}

const ProgramasComponent: React.FC<Props> = ({
  photo,
  emoji,
  title,
  speaker,
  date,
  color,
  description,
  linkName,
  url,
}) => {
  return (
    <div className={`p-4 ${photo ? 'flex items-center' : ''} bg-${color} max-w-sm rounded-lg items-start my-1 mx-2 text-gbBlack`}>
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
        {date && <p className="text-sm text-gray-700 mt-1">{date}</p>}
        <a href={url} target="_blank" rel="noopener noreferrer">
          <ButtonWithArrow className="bg-gbWhite text-gbBlack">{linkName}</ButtonWithArrow>
        </a>
      </div>
    </div>
  );
};

export default ProgramasComponent;
