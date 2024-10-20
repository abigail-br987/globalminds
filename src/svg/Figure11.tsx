interface Props {
    className?: string;
    color?: string;
}

const Figure11: React.FC<Props> = ({ className, color }) => {
    const defaultColor = 'gbYellow';
    const colorClass = color ? `fill-${color}` :  `fill-${defaultColor}`;

    return (
        <svg id="Layer_2" className={className} data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 126.8 137.16">
            <g id="Layer_1-2" data-name="Layer 1">
                <path
                    d="M99.09,.03c2.04-.25,2.91,1.25,3.73,2.63,2.23,3.79,3.6,7.95,4.75,12.16,5.31,19.51,8.4,39.45,11.35,59.42,2.95,19.97,5.42,40,7.81,60.04,.36,3.03-.54,3.19-2.89,2.6-5.37-1.35-10.01-4.39-15.05-6.5-16.36-6.83-33.47-11.54-49.94-18.04-17.41-6.87-34.27-15-51.37-22.58-.9-.4-1.74-.98-2.53-1.58-6.08-4.68-6.63-9.29-1.17-14.65C27.32,50.44,51.55,28.14,79,9.62c4.35-2.93,8.85-5.62,13.65-7.76,2.06-.92,4.19-1.6,6.44-1.83Z"
                    className={colorClass}
                />
            </g>
        </svg>
    );
}

export default Figure11;