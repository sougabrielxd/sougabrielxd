"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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

// Hooks
import { useTypewriter } from "@/hooks/useTypewriter";

// Icons
import { FileText, Github, Instagram, Linkedin } from "lucide-react";

// Sections
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Testimonials from "./Testimonials";

export default function Home() {
  const { theme } = useTheme();
  const { language } = useLanguage();

  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Textos para o efeito de digitação
  const typewriterTexts = {
    pt: [
      "Desenvolvedor Full-Stack especializado em automação e IA",
      "Transformo ideias em soluções escaláveis",
      "Especialista em desenvolvimento web",
      "Criando experiências digitais excepcionais",
    ],
    en: [
      "Full-Stack Developer specialized in automation and AI",
      "I transform ideas into scalable solutions",
      "Web development specialist",
      "Creating exceptional digital experiences",
    ],
  };

  // Efeito de digitação com delay do loading screen (2000ms + 800ms fade = 2800ms)
  const { text: typewriterText, cursor } = useTypewriter({
    texts: typewriterTexts[language],
    typingSpeed: 50,
    pauseDelay: 2500,
    deleteSpeed: 30,
    loop: true,
    startDelay: 2800, // Delay do loading screen
    showCursor: true,
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = 100; // Só começa a esconder após 100px de scroll
      
      // Se estiver no topo, sempre mostrar
      if (currentScrollY < scrollThreshold) {
        setIsVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }

      // Esconder quando desce, mostrar quando sobe
      if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
        setIsVisible(false);
        // Só fecha o menu mobile ao rolar para baixo (comportamento padrão)
        if (window.innerWidth <= 768) {
          setIsOpen(false);
        }
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
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
        className={`fixed top-6 right-6 z-50 flex gap-3 transition-all duration-300 ease-in-out ${
          isVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-2 pointer-events-none"
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

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 overflow-x-hidden">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-[85vh] md:min-h-[85vh] flex items-center justify-center relative mb-12 md:mb-20 px-4"
        >
          <div className="text-center w-full max-w-4xl">
            <div className="mb-4 md:mb-6 animate-float relative flex justify-center">
              <Image
                src={theme === "dark" ? "/img/x-red.svg" : "/img/x-dark.svg"}
                alt="Logo"
                width={120}
                height={120}
                className="transition-all duration-300 w-20 h-20 md:w-28 md:h-28"
                priority
              />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-3 md:mb-4 leading-tight px-2 text-black dark:text-white">
              {language === "pt" ? "Olá, sou" : "Hello, I'm"}
              <span className="block text-red-500">Gabriel Lucas</span>
            </h1>

            <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-muted-foreground mb-6 md:mb-8 px-2 leading-relaxed min-h-10 sm:min-h-12 md:min-h-14 lg:min-h-16 flex items-center justify-center">
              <span className="inline-block">
                {typewriterText}
                <span
                  className={`inline-block ml-1 ${
                    cursor ? "animate-pulse" : ""
                  }`}
                  aria-hidden="true"
                >
                  {cursor}
                </span>
              </span>
              {/* Texto completo para acessibilidade (oculto visualmente) */}
              <span className="sr-only">
                {language === "pt"
                  ? "Desenvolvedor Full-Stack especializado em automação e IA. Transformo ideias em soluções escaláveis."
                  : "Full-Stack Developer specialized in automation and AI. I transform ideas into scalable solutions."}
              </span>
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-4 px-4">
              <a href="#contact" className="w-full sm:w-auto">
                <Button className="w-full cursor-pointer sm:w-auto bg-red-500 hover:bg-red-600 text-white font-semibold py-2.5 md:py-3 px-4 md:px-6 text-sm md:text-base rounded-lg transition-colors duration-300 transform hover:scale-105 shadow-lg shadow-red-500/30">
                  {language === "pt" ? "Vamos automatizar seu processo?" : "Let's automate your process?"}
                </Button>
              </a>

              <a href="/Curriculo.pdf" download className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full cursor-pointer sm:w-auto bg-transparent border-red-500/50 dark:border-red-500/50 hover:bg-red-500/10 dark:hover:bg-red-500/10 text-red-600 dark:text-white font-semibold py-2.5 md:py-3 px-4 md:px-6 text-sm md:text-base rounded-lg transition-colors duration-300 transform hover:scale-105"
                >
                  <FileText className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  {language === "pt" ? "Baixar CV" : "Download CV"}
                </Button>
              </a>
            </div>

            <div className="mt-6 md:mt-8 flex justify-center gap-4 md:gap-6">
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
        <Testimonials />
        <Contact />
      </main>

      <footer className="py-8 px-4 border-t border-red-500/20 dark:border-red-500/20 text-center">
        <p className="text-gray-700 dark:text-muted-foreground">
          {language === "pt"
            ? "© 2025 Gabriel Lucas. Todos os direitos reservados."
            : "© 2025 Gabriel Lucas. All rights reserved."}
        </p>
      </footer>
    </div>
  );
}
