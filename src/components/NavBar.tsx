"use client";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { name: "Inicio", to: "/", style: "bg-gbGreen" },
  { name: "Programas", to: "/programas", style: "bg-gbBlue" },
  { name: "Nosotros", to: "/nosotros", style: "bg-gbRed" },
  { name: "Contacto", to: "/contacto", style: "bg-gbYellow" },
  { name: "Blog", to: "/blog", style: "" },
];

function NavBar() {
  return (
    <nav
    className="p-2 pb-10 max-sm:text-sm fixed w-full top-0 z-50 font-mono"
    style={{
      background: "linear-gradient(180deg, #2B2B2B 20%, rgba(43, 43, 43, 0.7) 50%, rgba(43, 43, 43, 0) 100%)",
    }}
  >
      <ul className="items-start flex justify-between">
        <Link href={"/home"} className="max-sm:hidden cursor-pointer flex space-x-3">
          <div className="py-1 px-2 bg-gbBlack h-max rounded-md space-x-2 font-mono font-bold flex items-center">
            <Image
              src={"/logo/mainlogo.png"}
              alt="Home Logo"
              layout="responsive"
              width={50}
              height={50}
              className="max-w-5 max-h-5 rounded-full"
            />
            <span>GLOBAL MINDS</span>
          </div>
        </Link>
        <div className="max-sm:w-full flex space-x-2 md:space-x-4 py-1 bg-gbBlack z-0 rounded-md px-3">
          {navItems.map((item, index) => (
            <Link href={item.to} key={index}>
              <li
                key={index}
                className="relative uppercase cursor-pointer text-gbWhite font-bold group"
              >
                {item.name}
                <span
                  className={`absolute left-0 rounded-sm -bottom-1 h-1.5 w-full ${item.style} -z-10 transition-all duration-300 transform origin-bottom group-hover:h-8`}
                ></span>
              </li>{" "}
            </Link>
          ))}
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
