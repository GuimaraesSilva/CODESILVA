"use client";

import { useRouter, usePathname } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { routing } from "@/i18n/routing";
import { Globe, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface LanguageSelectorProps {
  variant?: "default" | "compact" | "minimal";
  showIcon?: boolean;
  showFlag?: boolean;
  showLabel?: boolean;
  className?: string;
}

const LanguageSelector = ({
  variant = "default",
  showIcon = true,
  showFlag = true,
  showLabel = true,
  className,
}: LanguageSelectorProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const t = useTranslations("common");

  // Configuração dos idiomas disponíveis
  const languages = {
    pt: {
      label: t("portuguese"),
      nativeLabel: "Português",
      flag: "🇵🇹",
      code: "PT",
    },
    en: {
      label: t("english"),
      nativeLabel: "English",
      flag: "🇺🇸",
      code: "EN",
    },
  };

  const handleLanguageChange = (newLocale: string) => {
    if (newLocale !== currentLocale) {
      // Adiciona uma pequena transição suave
      document.documentElement.style.opacity = "0.8";
      router.replace(pathname, { locale: newLocale });
      
      // Restaura a opacidade após a navegação
      setTimeout(() => {
        document.documentElement.style.opacity = "1";
      }, 150);
    }
  };

  const renderTriggerContent = () => {
    const currentLang = languages[currentLocale as keyof typeof languages];
    
    switch (variant) {
      case "compact":
        return (
          <div className="flex items-center gap-1">
            {showFlag && <span className="text-sm">{currentLang?.flag}</span>}
            <span className="text-xs font-medium">{currentLang?.code}</span>
          </div>
        );
      case "minimal":
        return showFlag ? currentLang?.flag : currentLang?.code;
      default:
        return (
          <div className="flex items-center gap-2">
            {showFlag && <span>{currentLang?.flag}</span>}
            {showLabel && (
              <span className="hidden sm:inline">
                {currentLang?.nativeLabel}
              </span>
            )}
            {!showLabel && (
              <span className="text-sm font-medium">
                {currentLang?.code}
              </span>
            )}
          </div>
        );
    }
  };

  const getTriggerClassName = () => {
    const baseClasses = "bg-background/10 backdrop-blur-sm border-white/20 text-white transition-all duration-200 hover:bg-background/20";
    
    switch (variant) {
      case "compact":
        return cn("w-auto min-w-[70px] h-8", baseClasses);
      case "minimal":
        return cn("w-10 h-8 px-2", baseClasses);
      default:
        return cn("w-auto min-w-[140px]", baseClasses);
    }
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {showIcon && variant !== "minimal" && (
        <Globe className="w-4 h-4 text-muted-foreground" />
      )}
      <Select value={currentLocale} onValueChange={handleLanguageChange}>
        <SelectTrigger className={getTriggerClassName()}>
          <SelectValue>
            {renderTriggerContent()}
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="bg-background/95 backdrop-blur-sm border-white/20 min-w-[160px]">
          {routing.locales.map((locale) => {
            const lang = languages[locale as keyof typeof languages];
            const isSelected = locale === currentLocale;
            
            return (
              <SelectItem
                key={locale}
                value={locale}
                className="cursor-pointer hover:bg-white/10 focus:bg-white/10 text-white transition-colors duration-150"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <span>{lang?.flag}</span>
                    <span>{lang?.nativeLabel}</span>
                  </div>
                  {isSelected && (
                    <Check className="w-4 h-4 text-green-400" />
                  )}
                </div>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};
