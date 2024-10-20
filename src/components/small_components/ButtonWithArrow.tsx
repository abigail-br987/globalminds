import { FaArrowRightLong } from "react-icons/fa6";
import React from "react";

interface ButtonWithArrowProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string; 
    children: React.ReactNode;
}

const ButtonWithArrow: React.FC<ButtonWithArrowProps> = ({ className = '', children, ...props }) => {
    return (
        <button 
            className={`${className} group`} 
            {...props}
        >
            {children}
            <FaArrowRightLong className="ml-2 inline-block group-hover:ml-5 group-hover:mr-1 transition-all" />
        </button>
    );
}

export default ButtonWithArrow;
