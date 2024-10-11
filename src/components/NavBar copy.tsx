import { Link } from "react-scroll";
import logo from "/logo/mainlogo.png"
const navItems = [
  { name: "Nosotros", to: "", style: "bg-gbRed" },
  { name: "Programas", to: "", style: "bg-gbGreen" },
  { name: "Impacto", to: "", style: "bg-gbBlue" },
  { name: "Contacto", to: "", style: "bg-gbRed" },
];

function NavBar() {
  return (
    <nav className="p-2 fixed  w-full top-0 z-20">
      <ul className="items-start flex justify-between">
        <Link
          activeClass="active"
          offset={-70}
          smooth
          spy
          to={"home"}
          duration={500}
        >
          <div className="max-w-16 cursor-pointer">
            <img src={logo} alt="Home Logo" className="h-full" />
          </div>
        </Link>

        <div className="flex space-x-2 md:space-x-4 p-3 bg-gbBlack z-0 rounded-md px-3">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="relative uppercase cursor-pointer text-gbWhite font-bold group"
            >
              <Link
                activeClass="active"
                offset={-70}
                smooth
                spy
                to={item.to}
                duration={500}
                className={`relative inline-block `}
              >
                {item.name}
                <span
                  className={`absolute left-0 rounded-sm -bottom-1 h-1.5 w-full ${item.style} -z-10 transition-all duration-300 transform origin-bottom group-hover:h-8`}
                ></span>
              </Link>
            </li>
          ))}
        </div>

      </ul>
    </nav>
  );
}

export default NavBar;
