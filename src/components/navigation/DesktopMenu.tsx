import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function DesktopMenu({ menuItem }) {
  const [isHover, toggleHover] = useState(false);
  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  const hasSubMenu = menuItem?.subMenu?.length;

  return (
    <motion.li
      className="group/link"
      onHoverStart={() => {
        toggleHoverMenu();
      }}
      onHoverEnd={toggleHoverMenu}
      key={menuItem.name}
    >
      <span
        className="flex items-center uppercase gap-1 hover:bg-white/5 cursor-pointer
       px-4 py-3 "
      >
        {menuItem.name}
        {hasSubMenu && (
          <ChevronDown className="mt-[0.6px] group-hover/link:rotate-180 duration-200" />
        )}
      </span>
      {hasSubMenu && (
        <motion.div
          className="absolute bg-gray-700
           top-[3rem] p-4 rounded-b-lg origin-[50%_-170px]
           "
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subMenuAnimate}
        >
          <div
            className={` grid gap-7 ${
              menuItem.gridCols === 3
                ? "grid-cols-3"
                : menuItem.gridCols === 2
                  ? "grid-cols-2"
                  : "grid-cols-1"
            }`}
          >
            {hasSubMenu &&
              menuItem.subMenu.map((submenu, i) => (
                <div className="relative cursor-pointer" key={i}>
                  {menuItem.gridCols > 1 && menuItem?.subMenuHeading?.[i] && (
                    <p className="text-sm mb-4 text-gray-500">
                      {menuItem?.subMenuHeading?.[i]}
                    </p>
                  )}
                  <div className="flex items-center gap-x-4 group/menubox">
                    <div className="bg-white/5 w-fit p-2 rounded-md group-hover/menubox:bg-white group-hover/menubox:text-gray-900 duration-300">
                      {submenu.icon && <submenu.icon />}
                    </div>
                    <div>
                      <h6 className="font-semibold">{submenu.name}</h6>
                      <p className="text-sm text-gray-400">{submenu.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </motion.div>
      )}
    </motion.li>
  );
}
