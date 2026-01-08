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
    const sections = ["home", "about", "projects", "testimonials", "contact"];
    
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
    ? ["Início", "Sobre", "Projetos", "Depoimentos", "Contato"]
    : ["Home", "About", "Projects", "Testimonials", "Contact"];

  const sections = ["home", "about", "projects", "testimonials", "contact"];

  const handleNavClick = (section: string, idx: number) => {
    setActiveSection(section);
    scrollToSection(section);
  };

  return (
    <>
      <nav
        className={`fixed top-6 left-6 z-[9999] flex gap-6 transition-all duration-300 ease-in-out ${
          isVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 -translate-y-2 pointer-events-none dark:pointer-events-auto"
        }`}
      >
        <div className="hidden md:flex gap-6 cursor-pointer ">
          {navItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleNavClick(sections[idx], idx)}
              className={`text-sm transition-colors font-semibold ${
                activeSection === sections[idx]
                  ? "text-red-500 cursor-pointer"
                  : "text-black dark:text-white hover:text-red-500 dark:hover:text-red-500 cursor-pointer"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* Menu mobile button - sempre visível, independente do isVisible */}
      <button
        className={`md:hidden fixed top-6 left-6 z-[10001] p-2 transition-all duration-300 ease-in-out ${
          isVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-100 translate-y-0"
        }`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={language === "pt" ? "Abrir menu" : "Open menu"}
      >
        <IoMenu size={26} className="dark:text-red-500 text-red-500"  />
      </button>
    
      {/* MobileMenu renderizado fora do nav para garantir z-index correto */}
      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        language={language}
        onNavigate={scrollToSection}
      />
    </>
  );
}
