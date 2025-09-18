"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

interface HeaderProps {
  logoSrc?: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
  logoHref?: string;
  socialLinks?: SocialLink[];
  onLanguageChange?: (language: string) => void;
  defaultLanguage?: string;
  className?: string;
}

export default function Header({
  logoSrc = "/logo.svg",
  logoAlt = "Logo",
  logoWidth = 250,
  logoHeight = 100,
  logoHref = "/",
  socialLinks = [
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: <Instagram className="h-5 w-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      name: "GitHub",
      url: "https://github.com",
      icon: <Github className="h-5 w-5" />,
    },
  ],
  onLanguageChange,
  defaultLanguage = "en",
}: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href={logoHref} className="flex items-center cursor-pointer">
              <Image
                src={logoSrc}
                alt={logoAlt}
                width={logoWidth}
                height={logoHeight}
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Social Links and Language Switcher Container */}
          <div className="flex items-center gap-3 bg-transparent rounded-full px-4 py-2">
            {/* Social Media Icons */}
            <div className="flex items-center gap-0.5">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-white/60 hover:text-[#B88900] hover:scale-125 transition-all duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>

            {/* Separator */}
            <div className="h-5 w-0.5 rounded-full bg-[#B88900]" />

            {/* Language Switcher */}
            <LanguageSwitcher
              defaultLanguage={defaultLanguage}
              onLanguageChange={onLanguageChange}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
