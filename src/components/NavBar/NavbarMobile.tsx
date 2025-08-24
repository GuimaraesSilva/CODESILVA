"use client";

import React, { useState } from "react";
import { 
  Home, 
  Briefcase, 
  User, 
  FolderOpen, 
  Mail, 
  UserPlus,
  BookCheck,
  X
} from "lucide-react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";

export default function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("navbar");

  const menuItems = [
    { name: t("home"), icon: Home, href: "/" },
    { name: t("services"), icon: Briefcase, href: "/services" },
    { name: t("about"), icon: User, href: "/about" },
    { name: t("work"), icon: FolderOpen, href: "/work" },
    { name: t("education"), icon: BookCheck, href: "/education" },
    { name: t("contact"), icon: Mail, href: "/contact" },
    { name: t("hireMe"), icon: UserPlus, href: "/hire" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed left-4 bottom-4 z-50">
      {/* Menu Items - Aparecem acima do botão hambúrguer */}
      <div className={`flex flex-col items-start space-y-4 mb-4 transition-all duration-500 transform ${
        isOpen 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 translate-y-8 pointer-events-none'
      }`}>
        <nav className="flex flex-col items-start space-y-4 p-4 bg-transparent backdrop-blur-xs rounded-4xl border border-white/10 group/nav transition-all duration-300">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index} 
                className="group relative"
                style={{
                  animationDelay: isOpen ? `${index * 50}ms` : '0ms',
                  animation: isOpen ? 'slideInUp 0.5s ease-out forwards' : 'none'
                }}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-2 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <IconComponent 
                    className="h-8 text-white/80 transition-colors duration-300 flex-shrink-0" 
                    strokeWidth={1.25}
                  />
                  <span
                    className={`text-white/80 font-medium transition-all duration-300 whitespace-nowrap ${
                      isOpen ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              </div>
            );
          })}
        </nav>
      </div>

      {/* Botão Hambúrguer */}
      <Button
        onClick={toggleMenu}
        className="flex items-center justify-center w-14 h-14 bg-transparent backdrop-blur-xs rounded-full border border-white/10 transition-all duration-300 group"
      >
        {isOpen ? (
          <X 
            className=" text-[#B88900] transition-colors duration-300"
            strokeWidth={1.25}
            style={{ height: "1.5rem", width: "1.5rem" }}
          />
        ) : (
          <HiOutlineMenuAlt2 
            className="text-white/80 transition-colors duration-300"
            strokeWidth={1.25}
            style={{ height: "1.5rem", width: "1.5rem" }}
          />
        )}
      </Button>
    </div>
  );
}