"use client";
import DesktopMenu from "./DesktopMenu";
import { MenuItem } from "./menuItems";

interface NavBarProps {
  menuItems: MenuItem[];
}

function NavBar({ menuItems }: NavBarProps) {
  return (
    <ul className="gap-x-1 lg:flex lg:items-center hidden bg-gray-700 rounded-b-lg">
      {menuItems.map((menuItem) => (
        <DesktopMenu menuItem={menuItem} key={menuItem.name} />
      ))}
    </ul>
  );
}

export default NavBar;
