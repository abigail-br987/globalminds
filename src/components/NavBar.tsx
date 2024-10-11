import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import logo from "/logo/mainlogo.png";

const navItems = [
  { name: "Nosotros", to: "/nosotros", style: "bg-gbRed", type: "page" }, 
  { name: "Home", to: "", style: "bg-gbGreen", type: "scroll" }, 
  { name: "Impacto", to: "impacto", style: "bg-gbBlue", type: "scroll" },
  { name: "Contacto", to: "contacto", style: "bg-gbRed", type: "scroll" },
];

function NavBar() {
  return (
    <nav className="p-2 fixed  w-full top-0 z-20">
      <ul className="items-start flex justify-between">
        <RouterLink to="/">
          <div className="max-w-12 cursor-pointer">
            <img src={logo} alt="Home Logo" className="h-full" />
          </div>
        </RouterLink>

        <div className="flex space-x-2 md:space-x-4 p-3 bg-gbBlack z-0 rounded-md px-3">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="relative uppercase cursor-pointer text-gbWhite font-bold group"
            >
              {item.type === "scroll" ? (
                <ScrollLink
                  activeClass="active"
                  offset={-70}
                  smooth
                  spy
                  to={item.to}
                  duration={500}
                  className={`relative inline-block`}
                >
                  {item.name}
                  <span
                    className={`absolute left-0 rounded-sm -bottom-1 h-1.5 w-full ${item.style} -z-10 transition-all duration-300 transform origin-bottom group-hover:h-8`}
                  ></span>
                </ScrollLink>
              ) : (
                <RouterLink to={item.to} className={`relative inline-block`}>
                  {item.name}
                  <span
                    className={`absolute left-0 rounded-sm -bottom-1 h-1.5 w-full ${item.style} -z-10 transition-all duration-300 transform origin-bottom group-hover:h-8`}
                  ></span>
                </RouterLink>
              )}
            </li>
          ))}
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;