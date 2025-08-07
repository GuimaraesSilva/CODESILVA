"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Globe } from "lucide-react";

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: "en", name: "English", flag: "/languages/en.svg" },
  { code: "pt", name: "Português", flag: "/languages/pt.svg" },
];

interface LanguageSwitcherProps {
  defaultLanguage?: string;
  onLanguageChange?: (language: string) => void;
  variant?: "default" | "compact";
  className?: string;
}

export default function LanguageSwitcher({
  defaultLanguage,
  onLanguageChange,
  variant = "compact",
  className = "",
}: LanguageSwitcherProps) {
  const currentLocale = useLocale?.() || defaultLanguage || "en";
  const [selectedLanguage, setSelectedLanguage] =
    useState<string>(currentLocale);
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (value: string) => {
    setSelectedLanguage(value);

    onLanguageChange?.(value);

    try {
      const segments = pathname.split("/").filter(Boolean);
      const hasLocaleInPath = languages.some(
        (lang) => lang.code === segments[0]
      );

      let newPath = pathname;
      if (hasLocaleInPath) {
        newPath = "/" + segments.slice(1).join("/");
      }

      // Adicionar novo locale
      const newUrl = `/${value}${newPath === "/" ? "" : newPath}`;
      router.push(newUrl);
    } catch (error) {
      console.error("Error changing language:", error);
    }
  };

  const currentLanguage =
    languages.find((lang) => lang.code === selectedLanguage) || languages[0];

  return (
    <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
      <SelectTrigger
        className={`w-fit border-none shadow-none bg-transparent hover:bg-white/10 focus:ring-0 focus:ring-offset-0 transition-all duration-200 ${className}`}
      >
        <div className="flex items-center gap-2">
          {variant === "compact" ? (
            <>
              <Image
                src={currentLanguage.flag}
                alt={`${currentLanguage.name} flag`}
                width={20}
                height={15}
                className="rounded-sm"
              />
              <span className="text-sm font-medium text-white/90">
                {currentLanguage.code.toUpperCase()}
              </span>
            </>
          ) : (
            <>
              <Globe className="h-4 w-4 text-white/90" />
              <Image
                src={currentLanguage.flag}
                alt={`${currentLanguage.name} flag`}
                width={20}
                height={15}
                className="rounded-sm"
              />
              <span className="text-sm font-medium text-white/95">
                {currentLanguage.name}
              </span>
            </>
          )}
        </div>
      </SelectTrigger>
      <SelectContent className="bg-transparent backdrop-blur-xs border border-white/10 min-w-[150px]">
        {languages.map((language) => (
          <SelectItem
            key={language.code}
            value={language.code}
            className="hover:bg-black/5 focus:bg-black/10 cursor-pointer"
          >
            <div className="flex items-center justify-center gap-3 w-full">
              <Image
                src={language.flag}
                alt={`${language.name} flag`}
                width={20}
                height={15}
                className="rounded-sm"
              />
              <div className="flex flex-col items-start justify-center">
                <span className="text-sm font-medium text-white/80">
                  {language.name}
                </span>
              </div>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
