interface Props {
  className?: string;
  color?: string;
}

const Figure12: React.FC<Props> = ({ className, color }) => {
  const defaultColor = "gbYellow";
  const colorClass = color ? `fill-${color}` : `fill-${defaultColor}`;

  return (
    <svg
      id="Layer_2"
      className={className}
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 126.69 129.86"
    >
      <g id="Layer_1-2" data-name="Layer 1">
        <path
          className={colorClass}
          d="M46.6,129.86c-3.6-.13-5.17-2.71-6.44-5.48-7.2-15.77-14.75-31.38-22.81-46.72-5.22-9.93-9.57-20.29-15.17-30.03-3.56-6.2-2.94-7.63,3.14-11.38,15.21-9.37,31.18-17.22,47.61-24.19,8.6-3.65,16.74-8.33,25.56-11.55,2.89-1.06,4.54-.42,6.37,1.87,2.44,3.03,3.24,6.71,4.75,10.1,6.44,14.48,13.93,28.43,21.47,42.36,5.33,9.85,11.42,19.35,14.77,30.18,1.64,5.29,1.06,7.25-3.43,10.57-.8,.59-1.67,1.12-2.59,1.49-22.38,8.94-43.37,20.83-65.34,30.62-2.54,1.13-5.15,1.85-7.9,2.18Z"
        />
      </g>
    </svg>
  );
};

export default Figure12;
