"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { IoIosArrowForward } from "react-icons/io";

export default function AboutIntro() {
  const { language } = useLanguage();

  return (
    <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start mb-12 sm:mb-16 md:mb-20">
      {/* Text Content */}
      <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed animate-slide-up">
        <div className="p-4 sm:p-6 rounded-lg border border-red-500/30 dark:border-red-500/30 bg-gradient-to-br from-red-500/10 to-red-400/10 dark:from-red-500/10 dark:to-red-500/10 hover:border-red-500/60 dark:hover:border-red-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 dark:hover:shadow-red-500">
          <p className="flex items-start gap-3">
            <IoIosArrowForward className="w-5 h-5 dark:text-red-500 text-red-500 flex-shrink-0 mt-1" />
            <span>
              {language === "pt"
                ? "Tenho 2 anos de experiência como "
                : "I have 2 years of experience as "}
              <span className="dark:text-red-500 text-red-500 font-semibold">
                {language === "pt"
                  ? "Desenvolvedor Full-Stack"
                  : "Developer Full-Stack"}
              </span>
              {language === "pt"
                ? ", trabalhando em projetos reais. "
                : ", working on real projects. "}
            </span>
          </p>
        </div>

        <div className="p-4 sm:p-6 rounded-lg border border-red-500/30 dark:border-red-500/30 bg-gradient-to-br from-red-500/5 to-red-500/10 dark:from-red-500/10 dark:to-red-500/10 hover:border-red-500/60 dark:hover:border-red-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-red-500 dark:hover:shadow-red-400">
          <p className="flex items-start gap-2 sm:gap-3">
            <IoIosArrowForward className="w-4 h-4 sm:w-5 sm:h-5 dark:text-red-500 text-red-500 flex-shrink-0 mt-1" />
            <span>
              {language === "pt" ? "Sou uma pessoa " : "I am a person "}
              <span className="dark:text-red-400 text-red-500 font-semibold">
                {language === "pt"
                  ? "dedicada e comprometida"
                  : "dedicated and committed"}
              </span>
              {language === "pt"
                ? ", com foco constante na evolução pessoal e profissional, buscando aprender e aprimorar minhas habilidades a cada novo desafio."
                : ", with a constant focus on personal and professional development, I strive to learn and improve my skills with each new challenge."}
            </span>
          </p>
        </div>

        <div className="p-4 sm:p-6 rounded-lg border border-red-500/30 dark:border-red-500/30 bg-gradient-to-br from-red-500/5 to-red-500/10 dark:from-red-500/10 dark:to-red-500/10 hover:border-red-500/60 dark:hover:border-red-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-red-500 dark:hover:shadow-red-500">
          <p className="flex items-start gap-2 sm:gap-3">
            <IoIosArrowForward className="w-4 h-4 sm:w-5 sm:h-5 dark:text-red-500 text-red-500 flex-shrink-0 mt-1" />
            <span>
              {language === "pt"
                ? "Nascido e crescido em Pernambuco, de volta às origens após uma temporada no Ceará."
                : "Born and raised in Pernambuco, back to my roots after a period in Ceará."}
            </span>
          </p>
        </div>
      </div>

      {/* Profile Image */}
      <div className="flex flex-col items-center md:items-end animate-float w-full max-w-sm md:max-w-none">
        <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:w-[340px] aspect-[340/360] rounded-2xl overflow-hidden shadow-lg shadow-red-500/30 dark:shadow-red-500/30 border border-red-500/40 dark:border-red-500/40 bg-gradient-to-br from-red-500/20 via-red-500/10 to-red-500/20 dark:from-red-500/20 dark:via-red-400/10 dark:to-red-500/20 transition-all duration-300 hover:shadow-red-500 dark:hover:shadow-red-500 hover:scale-105 mb-4">
          <Image
            src="/img/photo.png"
            alt="Foto de perfil"
            width={340}
            height={360}
            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
            priority
          />
          <div className="absolute inset-0 rounded-2xl ring-1 dark:ring-red-500/40 ring-red-500/40 blur-sm"></div>
        </div>
      </div>
    </div>
  );
}
