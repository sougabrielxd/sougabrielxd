"use client"

import { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
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
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "projects", "contact"];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-100px 0px -50% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const navItems = language === "pt" 
    ? ["Início", "Sobre", "Projetos", "Contato"]
    : ["Home", "About", "Projects", "Contact"];

  const sections = ["home", "about", "projects", "contact"];

  const handleNavClick = (section: string, idx: number) => {
    setActiveSection(section);
    scrollToSection(section);
  };

  return (
    <nav
      className={`fixed top-6 left-6 z-[9999] flex gap-6 transition-all duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="hidden md:flex gap-8">
        {navItems.map((item, idx) => (
          <button
            key={idx}
            onClick={() => handleNavClick(sections[idx], idx)}
            className={`text-sm transition-colors font-semibold ${
              activeSection === sections[idx]
                ? "text-red-500 dark:text-red-500"
                : "text-black dark:text-white hover:text-red-500 dark:hover:text-red-500"
            }`}
          >
            {item}
          </button>
        ))}
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
