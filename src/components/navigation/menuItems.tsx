import { Bolt } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { BellDot } from "lucide-react";
import { CircleHelp } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { MapPin } from "lucide-react";
import { Database } from "lucide-react";
import { PanelTop } from "lucide-react";

export interface SubMenuItem {
  name: string;
  desc?: string;
  icon?: React.ElementType;
}

export interface MenuItem {
  name: string;
  subMenu?: SubMenuItem[];
  gridCols?: number;
}

export const menuItems: MenuItem[] = [
  {
    name: "Inicio",
    subMenu: [
      {
        name: "Misión",
        desc: "Browse templates",
        icon: ShoppingBag,
      },
      {
        name: "Visión",
        desc: "Upcoming events",
        icon: MapPin,
      },
      {
        name: "Estructura",
        desc: "Upcoming events",
        icon: MapPin,
      },
      {
        name: "Impacto",
        desc: "Upcoming events",
        icon: MapPin,
      },
    ],
  },
  {
    name: "Áreas",
    subMenu: [
      {
        name: "Dir. General",
        desc: "Link pages",
        icon: PanelTop,
      },
      {
        name: "Programas",
        desc: "Site control",
        icon: Bolt,
      },
      {
        name: "Mentorías",
        desc: "Management content",
        icon: Database,
      },
      {
        name: "Comunicación",
        desc: "Management content",
        icon: Database,
      },
      {
        name: "Contenido",
        desc: "Management content",
        icon: Database,
      },
      {
        name: "Operaciones",
        desc: "Management content",
        icon: Database,
      },
      {
        name: "Educación",
        desc: "Management content",
        icon: Database,
      },
      {
        name: "Desarrollo Digital",
        desc: "Management content",
        icon: Database,
      },
    ],
    gridCols: 2,
  },
  {
    name: "Programas",
    subMenu: [
      {
        name: "Charlas",
        desc: "Browse templates",
        icon: ShoppingBag,
      },
      {
        name: "Talleres",
        desc: "Upcoming events",
        icon: MapPin,
      },
      {
        name: "Mentoría",
        desc: "Changelog",
        icon: BellDot,
      },
    ],
    gridCols: 1,
  },
  {
    name: "Unete",
    subMenu: [
      {
        name: "Comunidad",
        desc: "Center",
        icon: CircleHelp,
      },
      {
        name: "Alianzas",
        desc: "Project help",
        icon: MessageCircle,
      },
    ],
    gridCols: 1,
  },
  {
    name: "GM Blogs",
  },
];
