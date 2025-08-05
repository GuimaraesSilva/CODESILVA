'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { 
  Globe,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Github
} from 'lucide-react'

// LanguageSwitcher component integrado
interface Language {
  code: string
  name: string
  nativeName: string
  flag: string
}

const languages: Language[] = [
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇵🇹' },
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' }
]

interface LanguageSwitcherProps {
  defaultLanguage?: string
  onLanguageChange?: (language: string) => void
  variant?: 'default' | 'compact'
  className?: string
}

function LanguageSwitcher({ 
  defaultLanguage = 'pt',
  onLanguageChange,
  variant = 'compact',
  className = ''
}: LanguageSwitcherProps) {
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage)

  const handleLanguageChange = (value: string) => {
    setSelectedLanguage(value)
    onLanguageChange?.(value)
  }

  const currentLanguage = languages.find(lang => lang.code === selectedLanguage)

  return (
    <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
      <SelectTrigger className={`w-fit border-none shadow-none bg-transparent hover:bg-white/10 ${className}`}>
        <div className="flex items-center gap-2">
          {variant === 'compact' ? (
            <>
              <span className="text-sm">{currentLanguage?.flag}</span>
              <span className="text-sm font-medium text-white/90">{currentLanguage?.code.toUpperCase()}</span>
            </>
          ) : (
            <>
              <Globe className="h-4 w-4" />
              <span className="text-sm">{currentLanguage?.flag}</span>
              <SelectValue placeholder="Selecionar idioma" />
            </>
          )}
        </div>
      </SelectTrigger>
      <SelectContent className="bg-white/95 backdrop-blur-md border-white/20">
        {languages.map((language) => (
          <SelectItem key={language.code} value={language.code} className="hover:bg-black/5">
            <div className="flex items-center gap-3">
              <span className="text-base">{language.flag}</span>
              <div className="flex flex-col">
                <span className="text-sm font-medium">{language.nativeName}</span>
                <span className="text-xs text-muted-foreground">{language.name}</span>
              </div>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

// Social Media Links interface
interface SocialLink {
  name: string
  url: string
  icon: React.ReactNode
}

interface HeaderProps {
  logoSrc?: string
  logoAlt?: string
  logoWidth?: number
  logoHeight?: number
  logoHref?: string
  socialLinks?: SocialLink[]
  onLanguageChange?: (language: string) => void
  defaultLanguage?: string
  className?: string
}

export default function Header({
  logoSrc = '/logo.svg',
  logoAlt = 'Logo',
  logoWidth = 250,
  logoHeight = 100,
  logoHref = '/',
  socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com', icon: <Facebook className="h-5 w-5" /> },
    { name: 'Instagram', url: 'https://instagram.com', icon: <Instagram className="h-5 w-5" /> },
    { name: 'Twitter', url: 'https://twitter.com', icon: <Twitter className="h-5 w-5" /> },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: <Linkedin className="h-5 w-5" /> },
    { name: 'YouTube', url: 'https://youtube.com', icon: <Youtube className="h-5 w-5" /> },
    { name: 'GitHub', url: 'https://github.com', icon: <Github className="h-5 w-5" /> }
  ],
  onLanguageChange,
  defaultLanguage = 'en',
}: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                  className="p-2 text-white/60 hover:text-[#B88900] hover:scale-125"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>

            {/* Separator */}
            <div className="h-5 w-0.5 rounded-full bg-[#B88900]" />

            {/* Language Switcher */}
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  )
}