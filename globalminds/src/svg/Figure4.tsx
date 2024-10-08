interface Props {
    className?: string;
}

const Figure4: React.FC<Props> = ({ className }) => {
  return (
    <svg
      id="Layer_2"
      className={className}
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 134.14 138.54"
    >
      <defs>
        <style>
          {`.cls-1 {
                fill: #58aab3;
              }`}
        </style>
      </defs>
      <g id="Layer_1-2" data-name="Layer 1">
        <path
          className="cls-1"
          d="M134.1,78.68c-2.28,17.63-9.8,38.66-31.54,51.77-7.04,4.25-15.14,5.81-23.12,7.05-13.74,2.14-27.35,.94-40.65-3.17-10.21-3.15-18.01-9.25-23.3-18.69C7.67,101.66,2.22,86.88,.29,70.97c-1.54-12.7,3.41-23.99,8.84-35.02C16.87,20.23,28.3,8.38,45.16,2.44,53.97-.67,63.11,.02,72.2,.17c1.74,.03,3.49,.37,5.22,.26,17.74-1.13,30.78,7.18,40.53,21,10.75,15.23,16.72,32.23,16.15,57.24Z"
        />
      </g>
    </svg>
  );
}

export default Figure4;
