import { IoMenu } from "react-icons/io5";
import { Moon, Sun } from "lucide-react";
import MobileMenu from "@/components/MobileMenu";

interface NavigationProps {
  isVisible: boolean;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  language: "pt" | "en";
  scrollToSection: (section: string) => void;
}

export default function Navigation({
  isVisible,
  isOpen,
  setIsOpen,
  language,
  scrollToSection,
}: NavigationProps) {
  return (
    <nav
      className={`fixed top-6 left-6 z-[9999] flex gap-6 transition-all duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="hidden md:flex gap-8">
        <button className="text-sm hover:text-red-500 transition-colors font-semibold" onClick={() => scrollToSection("hero")}>Início</button>
        <button className="text-sm hover:text-red-500 transition-colors font-semibold" onClick={() => scrollToSection("about")}>Sobre</button>
        <button className="text-sm hover:text-red-500 transition-colors font-semibold" onClick={() => scrollToSection("projects")}>Projetos</button>
        <button className="text-sm hover:text-red-500 transition-colors font-semibold" onClick={() => scrollToSection("contact")}>Contato</button>
      </div>

      {/* Menu mobile */}
      <button
        className="md:hidden p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <IoMenu size={26} className="dark:text-red-500 text-black"  />
      </button>

      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        language={language}
        onNavigate={scrollToSection}
      />
    </nav>
  );
}
