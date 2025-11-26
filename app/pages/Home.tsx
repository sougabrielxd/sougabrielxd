"use client";

import { useEffect, useState } from "react";

// Components
import MobileMenu from "@/components/MobileMenu";
import Particles from "@/components/Particles";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import ScrollToTop from "@/components/ScrollToTop";
import LoadingScreen from "@/components/LoadingScreen";
import ThemeButton from "@/components/ThemeButton";
import LanguageButton from "@/components/LanguageButton";

// Contexts
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

// Icons
import { FileText, Github, Instagram, Linkedin } from "lucide-react";

// Sections
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

export default function Home() {
  const { theme } = useTheme();
  const { language } = useLanguage();

  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 768) {
        if (window.scrollY > lastScrollY) {
          setIsVisible(false);
          setIsOpen(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  function scrollToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <LoadingScreen autoHide autoHideDelay={2000} />
      <Particles />
      <ScrollToTop />

      {/* Theme & Language Buttons */}
      <div
        className={`fixed top-6 right-6 z-50 flex gap-3 transition-all duration-500 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <LanguageButton />
        <ThemeButton />
      </div>

      <Navigation
        isVisible={isVisible}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        language={language}
        scrollToSection={scrollToSection}
      />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-[calc(100vh-6rem)] flex items-center justify-center relative mb-20"
        >
          <div className="text-center">
            <div className="mb-6 animate-float relative flex justify-center">
              <img
                src={theme === "dark" ? "./img/x-red.svg" : "./img/x-dark.svg"}
                alt="Logo"
                className="transition-all duration-300 h-30"
              />
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
              {language === "pt" ? "Olá, sou" : "Hello, I'm"}
              <span className="block text-red-500">Gabriel Lucas</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              {language === "pt"
                ? "Desenvolvedor Front-End"
                : "Front-End Developer"}
            </p>

            <div className="flex justify-center gap-4">
              <a href="#contact">
                <Button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105 shadow-lg shadow-red-500/30">
                  {language === "pt" ? "Entre em Contato" : "Get in Touch"}
                </Button>
              </a>

              <a href="/Curriculo.pdf" download>
                <Button
                  variant="outline"
                  className="bg-transparent border-black/50 dark:border-red-500/50 hover:bg-black/10 dark:hover:bg-red-500/10 text-black dark:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  {language === "pt" ? "Baixar CV" : "Download CV"}
                </Button>
              </a>
            </div>

            <div className="mt-8 flex justify-center gap-6">
              <a
                href="https://www.linkedin.com/in/gabriellucasafb/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-white hover:text-red-500 dark:hover:text-red-500 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>

              <a
                href="https://github.com/sougabrielxd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-white hover:text-red-500 dark:hover:text-red-500 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>

              <a
                href="https://www.instagram.com/gabriellucasafb/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-white hover:text-red-500 dark:hover:text-red-500 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </section>

        {/* Sections */}
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="py-8 px-4 border-t border-black/10 dark:border-red-500/20 text-center text-muted-foreground">
        <p>
          {language === "pt"
            ? "© 2025 Gabriel Lucas. Todos os direitos reservados."
            : "© 2025 Gabriel Lucas. All rights reserved."}
        </p>
      </footer>
    </div>
  );
}
