"use client";

import { LucideIcon } from "lucide-react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button1({ children, className = "", icon: Icon, iconPosition = "left", ...props }: ButtonProps) {
  return (
    <button
      className={`uppercase shadow rounded-full flex items-center gap-2 px-4 py-2 ${className}`}
      {...props}
    >
      {Icon && iconPosition === "left" && <Icon className="w-5 h-5" />}
      {children}
      {Icon && iconPosition === "right" && <Icon className="w-5 h-5" />}
    </button>
  );
}

export default Button1;
