import { ExternalLink, Github, Moon, Sun, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { Globe } from "lucide-react";
import { IoMenu } from "react-icons/io5";

export default function Projects() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const projects = [
    {
      title: "CoWatch",
      description:
        language === "pt"
          ? "Revolucione a gestão do seu rebanho com o CoWatch. Monitore a alimentação de cada animal com precisão, otimize sua produção e maximize seus lucros."
          : "Revolutionize your herd management with CoWatch. Monitor each animal’s feeding precisely, optimize your production, and maximize profits.",
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://www.cowatch.com.br/",
      github: "#",
    },
    {
      title: "Learn Skills",
      description:
        language === "pt"
          ? "O NExTI é uma plataforma digital de editora que oferece uma estante virtual de livros e materiais educacionais gratuitos, com foco em tecnologia, programação e saúde."
          : "NExTI is a digital publishing platform offering a virtual bookshelf with free educational materials focused on technology, programming, and health.",
      tags: ["React.js", "PHP", "Laravel", "MySQL", "TailwindCSS"],
      link: "https://learnskills.com.br",
      github: "#",
    },
    {
      title: "Logos",
      description:
        language === "pt"
          ? "Freelance de uma Landing Page para uma retífica de motores."
          : "Freelance Landing Page for an engine repair company.",
      tags: ["HTML", "CSS"],
      link: "https://sougabrielxd.github.io/logos/",
      github: "https://github.com/sougabrielxd/logos",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
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
                  setLanguage("pt");
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
                  setLanguage("en");
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

        {/* Theme Buttib */}
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
    <IoMenu size={26} className="dark:text-red-500 text-black" />
  </button>

  {/* Menu Mobile Dropdown */}
  {isOpen && (
    <div className="fixed top-16 left-6 z-[9999] border border-black dark:border-red-500/20 
               hover:bg-black/10 dark:hover:bg-red-500/10 
               transition-colors shadow-md flex flex-col items-start p-4 md:hidden 
               dark:bg-red-500/20 rounded-lg bg-white">
      <Link href="/">
        <a className="text-sm hover:text-red-500 dark:text-white transition-colors font-semibold">
          {language === "pt" ? "Inicio" : "Home"}
        </a>
      </Link>
      <Link href="/about">
        <a className="text-sm hover:text-red-500 dark:text-white transition-colors font-semibold">
          {language === "pt" ? "Sobre" : "About"}
        </a>
      </Link>
      <Link href="/projects">
        <a className="text-sm hover:text-red-500 dark:text-white transition-colors font-semibold">
          {language === "pt" ? "Projetos" : "Projects"}
        </a>
      </Link>
      <Link href="/contact">
        <a className="text-sm hover:text-red-500 dark:text-white transition-colors font-semibold">
          {language === "pt" ? "Contato" : "Contact"}
        </a>
      </Link>
    </div>
  )}
</nav>

      {/* Conteúdo principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <section>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {language === "pt"
                      ? "Projetos"
                      : "Projects"
                      }
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            {language === "pt"
                      ? "Confira alguns dos projetos que "
                      : "Check out some of the projects that "
                      }
            <span className="text-black dark:text-red-500 font-semibold">
            {language === "pt"
                      ? "desenvolvi/participei"
                      : "I developed/participated"
                      }
            </span>{" "}
            {language === "pt"
                      ? "ao longo da minha carreira."
                      : "throughout my career."
                      }
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="border border-neutral-400/90 dark:border-red-500/30 
                  rounded-lg p-6 
                  bg-gradient-to-br from-neutral-300/10 to-neutral-500/10 dark:from-red-500/5 dark:to-red-400/5 
                  hover:border-black/50 dark:hover:border-red-800 
                  hover:from-neutral-400/20 hover:to-neutral-500/20 dark:hover:from-red-500/10 dark:hover:to-red-400/10 
                  transition-all duration-300 group card-hover 
                  hover:shadow-lg hover:shadow-black/20 dark:hover:shadow-red-500/20 
                  animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2 dark:group-hover:text-red-500 transition-colors flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-black to-black dark:from-red-500 dark:to-red-800 group-hover:animate-pulse"></span>
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full 
                        bg-gradient-to-r from-black/10 to-black/10 dark:from-red-500/20 dark:to-red-400/20 
                        text-black dark:text-accent-foreground 
                        border border-black/40 dark:border-red-500/50 
                        hover:border-black hover:from-black/20 hover:to-black/20 
                        dark:hover:border-red-500 dark:hover:from-red-500/30 dark:hover:to-red-400/30 
                        transition-all duration-300 transform hover:scale-105"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-black hover:border-black hover:bg-black/10 text-black
  dark:border-red-400/50 dark:hover:border-red-400 dark:hover:bg-red-400/10 dark:text-white
  hover:shadow-lg hover:shadow-black/20 transition-all duration-300 transform hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {language === "pt"
                      ? "Ver"
                      : "View"
                      }
                    </Button>
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-black hover:border-black hover:bg-black/10 text-black
  dark:border-red-400/50 dark:hover:border-red-400 dark:hover:bg-red-400/10 dark:text-white
  hover:shadow-lg hover:shadow-black/20 transition-all duration-300 transform hover:scale-105"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      {language === "pt"
                      ? "Código"
                      : "Code"
                      }
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
