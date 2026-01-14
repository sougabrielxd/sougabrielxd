"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function SkipLink() {
  const { language } = useLanguage();

  return (
    <a
      href="#about"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-9999 focus:px-4 focus:py-2 focus:bg-red-500 focus:text-white focus:rounded-lg focus:font-semibold focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
    >
      {language === "pt" ? "Pular para conteúdo principal" : "Skip to main content"}
    </a>
  );
}
