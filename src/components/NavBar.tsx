"use client";
import Link from "next/link";

const navItems = [
  { name: "Inicio", to: "/", style: "bg-gbGreen" },
  {
    name: "Eventos", 
    to: "/programas",
    style: "bg-gbBlue",
    hasDropdown: true,
    dropdownItems: [
      { name: "Próximos", to: "/proximos" },
      { name: "Pasados", to: "/pasados" },
    ],
  },
  {
    name: "Nosotros",
    to: "/nosotros",
    style: "bg-gbRed",
    hasDropdown: true,
    dropdownItems: [
      { name: "Metodo", to: "/metodo" },
      { name: "Impacto", to: "/impacto" },
    ],
  },
  { name: "Blog", to: "/blog", style: "bg-gbYellow" },
];

function NavBar() {
  return (
    <nav
      className="pb-10 max-sm:text-sm fixed w-full top-0 z-50 font-mono"
      style={{
        background:
          "linear-gradient(180deg, #2B2B2B 20%, rgba(43, 43, 43, 0.7) 50%, rgba(43, 43, 43, 0) 100%)",
      }}
    >
      <ul className="items-start flex justify-center">
        <div className="max-sm:w-full flex py-3 bg-gbGray z-0 rounded-b-3xl ">
          {navItems.map((item, index) => (
            <div key={index} className="relative group flex items-center">
              <Link href={item.to}>
                <li
                  className={`relative uppercase cursor-pointer font-bold group px-8 transition-opacity duration-300 opacity-50 group-hover:opacity-100`}
                >
                  {item.name}
                </li>
              </Link>

              {index !== navItems.length - 1 && (
                <div className="border-r-2 border-gbWhite h-3 "></div> // Vertical line
              )}

              {item.hasDropdown && (
                <div className="absolute bg-gbGray pb-2 top-full left-0 w-full text-center rounded-b-3xl shadow-lg mt-2 opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-300">
                  <ul>
                    {item.dropdownItems?.map((dropdownItem, idx) => (
                      <li
                        key={idx}
                        className="px-4 py-2 cursor-pointer hover:text-gbYellow"
                      >
                        <Link href={dropdownItem.to}>{dropdownItem.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;