interface Props {
    className?: string;
}

interface Props {
  className?: string;
}

const BrainColorSvg: React.FC<Props> = ({ className }) => {
  const paths = [
    {
      color: "fill-[#fad160]",
      d: "M280.63,158.45c1.09,8.77,4.33,17.11,4.68,26.06,.22,5.6-.2,10.99-2.11,16.16-2.31,6.29-4.73,12.57-8.08,18.43-.9,1.58-1.89,2.31-3.81,2.3-25.35-.11-50.71-.18-76.06-.11-3.68,0-5.34-.44-5.91-4.95-1.86-14.7-10-26.26-19.99-36.78-8.06-8.48-17.32-14.59-29.09-16.27-4.57-.65-9.21-.99-13.73,.35-2.68,.79-4.13,0-5.07-2.65-5.79-16.37-14.88-30.72-27.2-42.91-11.7-11.58-26.25-17.37-42.33-19.59-4.89-.68-6.15-1.64-6.12-6.51,.15-23.83,11.5-42.06,29.8-55.89,18.09-13.67,39.15-19.19,61.81-18.49,7.87,.24,14.55,2.5,18.72,10,3.3,5.93,7.92,10.96,10.45,17.54,4.34,11.29,3.41,21.68-2.8,31.79-4.24,6.91-3.09,12.35,3.54,16.11,2.7,1.53,5.57,.96,8.4,.63,6.81-.79,13.68-2.18,20.44-.42,13.95,3.65,23.59,12.6,29.17,25.7,1.46,3.43,1.65,7.54,1.82,11.36,.21,4.74,2.01,8.22,6.37,10.06,4.68,1.97,8.77,.31,12.46-2.66,.87-.7,1.54-1.63,2.3-2.45,7.61-1.09,14.25,1.5,20.11,5.95,3.95,3,7.4,6.68,10.07,10.98,1.21,1.95,2.16,3.91,2.15,6.25Z",
    },
    {
      color: "fill-[#75b7a0]",
      d: "M280.63,158.45c-6.23-14.06-16.84-22.02-32.33-23.19,3.5-5.48,1.77-11.15,.18-16.56-5.11-17.39-16.51-29.75-31.77-38.99-6.75-4.08-14.06-6.27-21.71-7.55-3.65-.61-4.9-2.36-4.59-6.12,.7-8.38-.53-16.63-2.89-24.69-2.43-8.29-6.94-15.37-12.8-21.64-.58-1.09-1.48-2.11-.81-3.49C189.33,3.67,206.55-2.28,226.67,.8c8.76,1.34,17.61,1.96,25.42,6.6,8.47,5.03,15.74,11.42,20.65,20.12,1.17,2.08,2.23,2.46,4.64,1.76,9.59-2.78,19.33-1.83,28.81,.39,35.27,8.27,58.02,29.78,67.54,64.91,.75,2.75,1.1,5.61,1.73,8.4,.59,2.64-.62,4.72-2.24,6.44-8.36,8.91-17.05,17.39-27.13,24.47-13.05,9.15-27.49,13.08-43.18,13.4-3.48,.07-6.97,.33-10.45,.53-6.14,.36-9.62,3.5-11.81,10.62Z",
    },
    {
      color: "fill-[#e3464f]",
      d: "M92.48,220.31c-24.85,0-49.7-.05-74.55,.05-3.55,.01-5.43-.88-6.93-4.55-2.33-5.71-6.31-10.75-7.87-16.84-5.85-22.85-3.76-44.71,8.63-65.13,3.23-5.31,6.88-10.37,10.34-15.54,.91-1.36,2.33-1.68,3.81-2.05,10.56-2.57,21.21-2.38,31.36,1.03,19.64,6.59,35.35,18.19,43.51,38.05,2.99,7.28,3.17,15.02,2.77,22.81-.37,7.13,5.64,11.2,12.48,8.69,2.8-1.03,5.65-1.95,8.42-3.04,13.14-5.19,23.61-.15,32.8,8.86,5.67,5.55,9.58,12.42,12.83,19.63,.61,1.34,1.05,2.83,1.2,4.28,.28,2.73-.21,4.45-3.88,4.42-24.98-.18-49.96-.09-74.93-.09,0-.19,0-.38,0-.57Z",
    },
    {
      color: "fill-[#2e95a2]",
      d: "M376.68,221.4c-25.32,0-50.65-.03-75.97,.04-2.45,0-3.21-.35-2.41-3.05,1.48-5.02,4.05-9.6,5.33-14.7,2.75-10.98,2.68-21.94,.31-32.93-.6-2.8-.52-4.18,3.15-4.58,19.99-2.22,37.75-10.34,54.3-21.43,7.09-4.75,12.14-11.43,17.31-17.98,3.48-4.4,7.1-5.93,12.64-1.79,15.1,11.26,22.5,26.99,26.18,44.73,3.25,15.68,1.49,30.99-5.92,45.35-2.34,4.53-5.69,7.57-11.71,7.12-7.69-.58-15.47-.14-23.2-.14,0-.21,0-.42,0-.64Z",
    },
    {
      color: "fill-[#f2d781]",
      d: "M173.91,16.22c.17,1.19,1.11,2.19,.81,3.49-1.5-.87-2.86-1.78-.81-3.49Z",
    },
  ];

  return (
    <svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 300"
      className={`w-full h-full ${className}`}
    >
      {paths.map((path, index) => (
        <path key={index} className={path.color} d={path.d} />
      ))}
    </svg>
  );
};

export default BrainColorSvg;