interface ColorfulTextProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string ;
  className?: string; 
  onClick?: () => void;
}

const colorClasses = [
  "text-gbBlue",
  "text-gbRed",
  "text-gbYellow", 
  "text-gbGreen" ,
];

const ColorfulTitle: React.FC<ColorfulTextProps> = ({ text, className = "", onClick, ...props }) => {
  return (
    <div 
      className={`bg-gbWhite w-fit tracking-wider px-10 text-4xl font-gotaRegular font-bold py-2 rounded-full text-gbBlack ${className}`}
      onClick={onClick} 
      {...props}
    >
      {Array.from(text).map((letter, index) => (
        <span key={index} style={{ WebkitTextStroke: "2px #2B2B2B",}} className={colorClasses[index % colorClasses.length]}>
          {letter}
        </span>
      ))}
    </div>
  );
};

export default ColorfulTitle;
