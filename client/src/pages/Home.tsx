import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Github, Linkedin, Instagram, Mail, ExternalLink, Moon, Sun, ChevronDown } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { Globe, Menu } from "lucide-react";
import Particles from "@/components/Particles";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <Particles />
      {/* Theme & Language Buttons */}
      <div className="fixed top-6 right-6 z-50 flex gap-3">
        {/* Language Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowLanguageMenu(!showLanguageMenu)}
            className="p-3 rounded-full border border-black/50 dark:border-red-500/50 
              hover:border-black dark:hover:border-red-500 
              bg-gradient-to-br from-black/10 to-gray-700/10 dark:from-red-500/10 dark:to-red-400/10 
              hover:from-black/20 hover:to-gray-800/20 dark:hover:from-red-400/20 dark:hover:to-red-400/20 
              text-black dark:text-white 
              hover:text-black dark:hover:text-red-500 
              transition-all duration-300 transform hover:scale-110 
              hover:shadow-lg hover:shadow-black/40 dark:hover:shadow-red-500/40 group"
            aria-label="Select language"
          >
            <Globe className="w-5 h-5 transition-all duration-300 group-hover:rotate-6" />
          </button>

          {showLanguageMenu && (
            <div
              className="absolute right-0 mt-2 w-32 rounded-lg border border-black/60 dark:border-red-500/50 
              bg-background shadow-lg shadow-black/40 dark:shadow-red-500/20 z-50 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => {
                  if (language !== "pt") toggleLanguage();
                  setShowLanguageMenu(false);
                }}
                className="w-full px-4 py-2 text-left 
                border-t border-black/20 dark:border-red-500/20 
                hover:bg-black/10 dark:hover:bg-red-500/10 
                transition-colors flex items-center gap-2"
              >
                <span className="text-sm font-semibold">Português</span>
                {language === "pt" && <span className="ml-auto text-black dark:text-red-500">✓</span>}
              </button>
              <button
                onClick={() => {
                  if (language !== "en") toggleLanguage();
                  setShowLanguageMenu(false);
                }}
                className="w-full px-4 py-2 text-left 
                border-t border-black/20 dark:border-red-500/20 
                hover:bg-black/10 dark:hover:bg-red-500/10 
                transition-colors flex items-center gap-2"
              >
                <span className="text-sm font-semibold">English</span>
                {language === "en" && <span className="ml-auto text-black dark:text-red-500">✓</span>}
              </button>
            </div>
          )}
        </div>




        {/* Theme Button */}
        <button
          onClick={toggleTheme}
          className="p-3 rounded-full border border-black/50 dark:border-red-500/50 
                    hover:border-black dark:hover:border-red-500 
                    bg-gradient-to-br from-black/10 to-gray-700/10 dark:from-red-500/10 dark:to-red-400/10 
                    hover:from-black/20 hover:to-gray-800/20 dark:hover:from-red-400/20 dark:hover:to-red-400/20 
                    text-black dark:text-white 
                    hover:text-black dark:hover:text-white 
                    transition-all duration-300 transform hover:scale-110 
                    hover:shadow-lg hover:shadow-black/40 dark:hover:shadow-red-500/40 group"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-white transition-transform duration-300 group-hover:rotate-180" />
                ) : (
                  <Moon className="w-5 h-5 text-black transition-transform duration-300 group-hover:rotate-180" />
                )}
              </button>

      </div>

      <nav className="fixed top-6 left-6 z-[9999] flex gap-6">
  {/* Menu Desktop */}
  <div className="hidden md:flex gap-8">
    <Link href="/">
      <a className="text-sm hover:text-red-500 transition-colors font-semibold">
        {language === "pt" ? "Inicio" : "Home"}
      </a>
    </Link>
    <Link href="/about">
      <a className="text-sm hover:text-red-500 transition-colors font-semibold">
        {language === "pt" ? "Sobre" : "About"}
      </a>
    </Link>
    <Link href="/projects">
      <a className="text-sm hover:text-red-500 transition-colors font-semibold">
        {language === "pt" ? "Projetos" : "Projects"}
      </a>
    </Link>
    <Link href="/contact">
      <a className="text-sm hover:text-red-500 transition-colors font-semibold">
        {language === "pt" ? "Contato" : "Contact"}
      </a>
    </Link>
  </div>

  {/* Menu Mobile */}
  <button
    className="md:hidden p-2 rounded-md hover:bg-accent/10 transition-colors z-50"
    onClick={() => setIsOpen(!isOpen)}
  >
    <Menu size={26} className="dark:text-red-500 text-black" />
  </button>

  {/* Menu Mobile Dropdown */}
  {isOpen && (
    <div
      className="fixed top-16 left-6 z-[9999] border border-black dark:border-red-500/60 
                 bg-white dark:bg-black 
                 hover:bg-black/10 dark:hover:bg-red-500/20 
                 transition-colors shadow-md flex flex-col items-start p-4 md:hidden 
                 rounded-lg"
    >
      <Link href="/">
        <a className="text-sm hover:text-red-500 dark:text-red-500 transition-colors font-semibold">
          {language === "pt" ? "Inicio" : "Home"}
        </a>
      </Link>
      <Link href="/about">
        <a className="text-sm hover:text-red-500 dark:text-red-500 transition-colors font-semibold">
          {language === "pt" ? "Sobre" : "About"}
        </a>
      </Link>
      <Link href="/projects">
        <a className="text-sm hover:text-red-500 dark:text-red-500 transition-colors font-semibold">
          {language === "pt" ? "Projetos" : "Projects"}
        </a>
      </Link>
      <Link href="/contact">
        <a className="text-sm hover:text-red-500 dark:text-red-500 transition-colors font-semibold">
          {language === "pt" ? "Contato" : "Contact"}
        </a>
      </Link>
    </div>
  )}
</nav>


      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center min-h-screen px-4 py-20 relative overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 via-transparent to-red-400/5 pointer-events-none"></div>

        {/* Decorative element - logo */}
        <div className="mb-6 animate-float relative">
          <img
            src={theme === "dark" ? "./img/x-red.svg" : "./img/x-dark.svg"}
            alt="Logo"
            className="transition-all duration-300 h-20"
          />
        </div>

        {/* Main content */}
        <div className="text-center max-w-2xl relative z-10 animate-slide-up">
          <p className="text-sm text-muted-foreground mb-4 font-mono">
            {language === "pt"
                      ? "Oi, Eu sou"
                      : "Hi, I'm"}
                      </p>

          <h1
            className="
              text-5xl md:text-6xl font-bold mb-3
              text-black
              dark:bg-gradient-to-r dark:text-red-700
              dark:bg-clip-text  dark:animate-pulse-glow
            "
          >
            Gabriel Lucas
          </h1>

          <div className="space-y-4 mb-8">
            <p className="text-lg text-muted-foreground">
              {language === "pt"
                      ? "Desenvolvedor Full-Stack"
                      : "Developer Full-Stack"
                      }</p>
            <p className="text-lg">
              <span
                className={`animate-pulse text-4xl ${
                  theme === "light" ? "text-black" : "text-red-700"
                }`}
              >
                愛
              </span>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mb-12">
            <a
              href="https://github.com/sougabrielxd"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-black/50 dark:border-red-500/50 
              hover:border-black dark:hover:border-red-500 
              bg-gradient-to-br from-black/10 to-gray-700/10 dark:from-red-500/10 dark:to-red-400/10 
              hover:from-black/20 hover:to-gray-800/20 dark:hover:from-red-400/20 dark:hover:to-red-400/20 
              text-black dark:text-red-400 
              hover:text-black dark:hover:text-red-500 
              transition-all duration-300 transform hover:scale-110 
              hover:shadow-lg hover:shadow-black/40 dark:hover:shadow-red-500 group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 group-hover:animate-pulse" />
            </a>

            <a
              href="https://linkedin.com/in/gabriellucasafb"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-black/50 dark:border-red-500/50 
              hover:border-black dark:hover:border-red-500 
              bg-gradient-to-br from-black/10 to-gray-700/10 dark:from-red-500/10 dark:to-red-400/10 
              hover:from-black/20 hover:to-gray-800/20 dark:hover:from-red-400/20 dark:hover:to-red-400/20 
              text-black dark:text-red-400 
              hover:text-black dark:hover:text-red-500 
              transition-all duration-300 transform hover:scale-110 
              hover:shadow-lg hover:shadow-black/40 dark:hover:shadow-red-500 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 group-hover:animate-pulse" />
            </a>

            <a
              href="https://instagram.com/sougabrielxd"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-black/50 dark:border-red-500/50 
              hover:border-black dark:hover:border-red-500 
              bg-gradient-to-br from-black/10 to-gray-700/10 dark:from-red-500/10 dark:to-red-400/10 
              hover:from-black/20 hover:to-gray-800/20 dark:hover:from-red-400/20 dark:hover:to-red-400/20 
              text-black dark:text-red-400 
              hover:text-black dark:hover:text-red-500 
              transition-all duration-300 transform hover:scale-110 
              hover:shadow-lg hover:shadow-black/40 dark:hover:shadow-red-500 group"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 group-hover:animate-pulse" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="rounded-full px-8 bg-gradient-to-r from-red-500 to-red-800 
                hover:from-red-800 hover:to-red-600 text-white border-0 
                shadow-lg shadow-red-500/25 hover:shadow-lg hover:shadow-red-800
                transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-4 h-4 ml-2" />
                {language === "pt"
                      ? "Entre em contato"
                      : "Get in touch"
                      }
              </Button>
            </Link>
            <Link href="/projects">
              <Button
                size="lg"
                className="rounded-full px-8 border border-black/50 hover:border-black
                bg-gradient-to-br from-black/10 to-gray-800/10 hover:from-black/20 hover:to-gray-800/20
                text-black hover:text-black
                transition-all duration-300 transform hover:scale-105
                hover:shadow-lg hover:shadow-black/30

                dark:border-red-500/50 dark:hover:border-red-500
                dark:bg-gradient-to-br dark:from-red-500/10 dark:to-red-400/10 
                dark:hover:from-red-400/20 dark:hover:to-red-400/20  
                dark:hover:shadow-red-500/30 dark:text-white"
              >
                 {language === "pt"
                      ? "Ver Projetos"
                      : "View Projects"
                      }
                <ExternalLink className="w-4 h-4 ml-2 dark:text-white" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
