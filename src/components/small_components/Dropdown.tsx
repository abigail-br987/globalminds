import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdArrowDropUp } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  name: React.ReactNode;
  options: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({
  className,
  name,
  options,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`relative ${className}`} {...rest}>
      <div
        onClick={toggleDropdown}
        className="cursor-pointer text-left flex justify-between items-center"
      >
        {name}
        {isOpen ? (
          <MdArrowDropUp className="text-2xl" />
        ) : (
          <MdArrowDropDown className="text-2xl" />
        )}
      </div>

      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="pb-3"
        >
          {options}
        </motion.ul>
      )}
    </div>
  );
};

export default Dropdown;
