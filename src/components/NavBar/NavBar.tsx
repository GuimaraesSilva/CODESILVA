import React from "react";
import { 
  Home, 
  Briefcase, 
  User, 
  FolderOpen, 
  Mail, 
  UserPlus,
  BookCheck
} from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function NavBar() {
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

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50">
      <nav className="flex flex-col items-start space-y-8 p-4 bg-transparent backdrop-blur-xs rounded-4xl border border-white/10 hover:border-[#B88900]/30 group/nav transition-all duration-300 hover:pr-30">
        {menuItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div key={index} className="group relative">
              <Link
                href={item.href}
                className="flex items-center transition-all duration-300"
              >
                <IconComponent 
                  className="h-8 text-white/80 group-hover:text-[#B88900] transition-colors duration-300 flex-shrink-0" 
                  strokeWidth={1.25}
                />
                <span className="absolute left-10 text-white/80 group-hover:text-[#B88900] font-medium transition-all duration-300 opacity-0 group-hover:opacity-100 whitespace-nowrap">
                  {item.name}
                </span>
              </Link>
            </div>
          );
        })}
      </nav>
    </div>
  );
}