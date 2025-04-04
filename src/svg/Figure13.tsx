import React from "react";

const gbYellow = "#FFD700";

interface Props {
  className?: string;
  color?: string;
}

const Figure13: React.FC<Props> = ({ className, color = gbYellow }) => {
  const defaultColor = "gbYellow";
  const colorClass = color ? `fill-${color}` : `fill-${defaultColor}`;

  return (
    <svg
      id="Layer_2"
      className={className}
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 88.57 89.42"
    >
      <g id="Layer_1-2" data-name="Layer 1">
        <path
          className={colorClass}
          d="M67.39,11.21c.09,1.99-.75,4.08-1.53,6.18-2.25,6.08-4.41,12.19-6.76,18.22-.81,2.08-.46,2.97,1.73,3.74,7.17,2.53,14.35,5.06,21.32,8.05,6.1,2.61,7.84,7.87,5.25,13.92-2.38,5.56-7.18,7.81-13.16,5.82-6.86-2.28-13.68-4.7-20.39-7.36-2.72-1.08-3.64-.35-4.5,2.18-2.19,6.49-4.53,12.94-7,19.33-2.91,7.52-9.25,10.08-15.87,6.59-4.38-2.31-6.62-6.47-5.15-11.24,2.28-7.37,4.95-14.63,7.78-21.81,1.12-2.84,.83-4.01-2.21-5.02-6.85-2.28-13.61-4.88-20.32-7.56C2.31,40.55-.44,35.87,.06,31.88c.72-5.78,4.12-9.61,9.19-10.31,2.3-.32,4.45,.38,6.56,1.15,6.09,2.22,12.25,4.28,18.2,6.83,3.28,1.4,4.4,.51,5.42-2.62,2.12-6.51,4.49-12.95,7.05-19.31C49.53,0,56.57-2.13,63.19,2.25c3.13,2.07,4.33,5.01,4.19,8.95Z"
        />
      </g>
    </svg>
  );
};

export default Figure13;
