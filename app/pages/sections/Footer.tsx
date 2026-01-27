"use client";

import Image from "next/image";
import { ArrowUp, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

interface FooterProps {
  scrollToSection: (section: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  const { language } = useLanguage();
  const { theme } = useTheme();

  return (
    <footer className="bg-background text-foreground border-t border-red-500/20 dark:border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8">
          {/* Coluna 1: Logo e Apresentação */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={theme === "dark" ? "/img/x-red.svg" : "/img/x-dark.svg"}
                alt="Logo"
                width={40}
                height={40}
                className="w-10 h-10 transition-all duration-300"
              />
              <span className="text-xl font-bold text-foreground">Gabriel Lucas</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground max-w-xs whitespace-pre-line">
              {language === "pt"
                ? "Desenvolvedor Full Stack\nMais de 3 anos criando produtos digitais e sistemas escaláveis."
                : "Full Stack Developer\nMore than 3 years creating digital products and scalable systems."}
            </p>
          </div>

          {/* Coluna 2: Explorar */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold dark:text-white text-red-500 uppercase tracking-wider mb-4">
              {language === "pt" ? "Explorar" : "Explore"}
            </h3>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-2">
              {[
                { pt: "Início", en: "Home", id: "home" },
                { pt: "Sobre", en: "About", id: "about" },
                { pt: "Projetos", en: "Projects", id: "projects" },
                { pt: "Depoimentos", en: "Testimonials", id: "testimonials" },
                { pt: "Contato", en: "Contact", id: "contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm text-muted-foreground hover:text-red-500 dark:hover:text-red-500 transition-colors duration-200 text-left cursor-pointer"
                >
                  {language === "pt" ? item.pt : item.en}
                </button>
              ))}
            </nav>
          </div>

          {/* Coluna 3: Contato Profissional */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold dark:text-white text-red-500 uppercase tracking-wider mb-4">
              {language === "pt" ? "Contato Profissional" : "Professional Contact"}
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:gabriellucasafb@gmail.com"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-red-500 dark:hover:text-red-500 transition-colors duration-200 group"
              >
                <Mail className="w-4 h-4 shrink-0 group-hover:text-red-500 transition-colors" />
                <span>contato@gabriellucasafb.com.br</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>{language === "pt" ? "Araripina - PE, Brasil" : "Araripina - PE, Brazil"}</span>
              </div>
              <button
                onClick={() => scrollToSection("home")}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-red-500 dark:hover:text-red-500 transition-colors duration-200 mt-4 group cursor-pointer"
                aria-label={language === "pt" ? "Voltar ao topo" : "Back to top"}
              >
                <ArrowUp className="w-4 h-4 group-hover:text-red-500 transition-colors" />
                <span>{language === "pt" ? "Voltar ao topo" : "Back to top"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="border-t border-red-500/20 dark:border-red-500/20 pt-8 mt-8">
          <p className="text-xs text-muted-foreground text-center">
            {language === "pt"
              ? "© 2025 Gabriel Lucas. Todos os direitos reservados."
              : "© 2025 Gabriel Lucas. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
}
