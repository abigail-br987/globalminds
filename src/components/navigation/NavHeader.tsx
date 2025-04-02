"use client";
import Link from "next/link";
import DesktopMenu from "./DesktopMenu";
import MobMenu from "./MobMenu";
import { menuItems } from "./menuItems";
import NavBar from "./NavBar";
import Button1 from "../small_components/Button1";

function NavHeader() {
  return (
    <header className="h-fit fixed w-full z-50">
      <nav className="flex w-full">
        <div className="mx-auto">
          <NavBar menuItems={menuItems} />
        </div>
        <div className="flex items-center px-3  gap-x-5">
          <Button1 className="bg-gbBlue">Donar</Button1>
          <div className="lg:hidden">
            <MobMenu menuItems={menuItems} />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavHeader;
