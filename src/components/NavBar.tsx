"use client";
import Link from "next/link";
import Image from "next/image";
const navItems = [
  { name: "Home", to: "/", style: "bg-gbGreen" },
  { name: "Programas", to: "/programas", style: "bg-gbBlue" },
  { name: "Nosotros", to: "/nosotros", style: "bg-gbRed" },
  { name: "Contacto", to: "/contacto", style: "bg-gbYellow" },
  { name: "Blog", to: "/blog", style: "" },
];

function NavBar() {
  return (
    <nav className="p-2 fixed w-full top-0 z-50 font-mono">
      <ul className="items-start flex justify-between">
        <Link href={"/home"} className="cursor-pointer flex space-x-3">
            <Image
              src={"/logo/mainlogo.png"}
              alt="Home Logo"
              className="max-w-12 max-h-12 rounded-full"
            ></Image>
            <span className="py-1 px-3 bg-gbBlack h-max rounded-md font-mono font-bold">
              GLOBAL MINDS
            </span>
        </Link>
        <div className="flex space-x-2 md:space-x-4 py-1 bg-gbBlack z-0 rounded-md px-3">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="relative uppercase cursor-pointer text-gbWhite font-bold group"
            >
              <Link href={item.to}>
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
