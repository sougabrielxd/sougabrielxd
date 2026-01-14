"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import AboutIntro from "./sections/AboutIntro";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Certificates from "./sections/Certificates";

export default function About() {
  const { language } = useLanguage();

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 text-red-500 dark:text-white">
            {language === "pt" ? "Sobre Mim" : "About Me"}
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            {language === "pt"
              ? "Um pouco sobre minha jornada, habilidades e formação."
              : "A little about my journey, skills, and background."}
          </p>
        </div>

        {/* About Intro Section */}
        <AboutIntro />

        {/* Skills Section */}
        <Skills />

        {/* Experience Section */}
        <Experience />

        {/* Education Section */}
        <Education />

        {/* Certificates Section */}
        <Certificates />
      </div>
    </section>
  );
}
