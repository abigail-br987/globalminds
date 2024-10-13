import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import logo from "/logo/mainlogo.png";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const navItems = [
  { name: "Home", to: "/", style: "bg-gbGreen" },
  { name: "Programas", to: "/programas", style: "bg-gbBlue" },
  { name: "Nosotros", to: "/nosotros", style: "bg-gbRed" },
  { name: "Contacto", to: "/contacto", style: "bg-gbYellow" },
];

function NavBar() {
  const location = useLocation(); 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <nav className="p-2 fixed w-full top-0 z-50">
      <ul className="items-start flex justify-between">
        <RouterLink to="/">
          <div className="cursor-pointer flex space-x-3 ">
            <img
              src={logo}
              alt="Home Logo"
              className="max-w-12 max-h-12 rounded-full"
            />
            <span className="py-1 px-3 bg-gbBlack h-max rounded-md font-mono font-bold">
              GLOBAL MINDS
            </span>
          </div>
        </RouterLink>
        <div className="flex space-x-2 md:space-x-4 py-1 bg-gbBlack z-0 rounded-md px-3">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="relative uppercase cursor-pointer text-gbWhite font-bold group"
            >
              <RouterLink to={item.to} className={`relative inline-block`}>
                {item.name}
                <span
                  className={`absolute left-0 rounded-sm -bottom-1 h-1.5 w-full ${item.style} -z-10 transition-all duration-300 transform origin-bottom group-hover:h-8`}
                ></span>
              </RouterLink>
            </li>
          ))}
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
