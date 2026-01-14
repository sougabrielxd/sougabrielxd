"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { BookOpen, Download } from "lucide-react";
import { getTechIcon } from "@/lib/techIcons";
import { cloneElement, isValidElement } from "react";

const certificatesData = {
  pt: {
    title: "Certificados",
    subtitle: "Conhecimento e competências validados por instituições de referência.",
    items: [
      {
        name: "Treinamento com Colaboradores",
        institution: "Receita Federal",
        year: 2025,
        file: "treinamento_com_colaboradores.pdf",
        category: "Soft Skills",
      },
      {
        name: "IA Generativa",
        institution: "Santander Open Academy",
        year: 2025,
        file: "ia_generativa.pdf",
        category: "Inteligência Artificial",
      },
      {
        name: "Fundamentos de TI: HARDWARE E SOFTWARE",
        institution: "Fundação Bradesco",
        year: 2024,
        file: "fundamentos_de_ti_hardware_e_software.pdf",
        category: "Infraestrutura",
      },
      {
        name: "Programação Orientada a Objetos (POO)",
        institution: "Fundação Bradesco",
        year: 2024,
        file: "programacao_orientada_a_objetos_poo.pdf",
        category: "Desenvolvimento Web",
      },
      {
        name: "Certificado de Inglês B1",
        institution: "SmallTalk",
        year: 2024,
        file: "English_Certificate_B1.pdf",
        category: "Languages",
      },
      {
        name: "Mini Curso de Figma",
        institution: "Centro Universitário Paraíso",
        year: 2024,
        file: "mini_curso_figma.jpg",
        category: "Figma",
      },
    ],
  },
  en: {
    title: "Certificates",
    subtitle: "Knowledge and competencies validated by reference institutions.",
    items: [
      {
        name: "Training with Employees",
        institution: "Receita Federal",
        year: 2025,
        file: "treinamento_com_colaboradores.pdf",
        category: "Soft Skills",
      },
      {
        name: "Generative AI",
        institution: "Santander Open Academy",
        year: 2025,
        file: "ia_generativa.pdf",
        category: "Artificial Intelligence",
      },
      {
        name: "IT Fundamentals: HARDWARE AND SOFTWARE",
        institution: "Fundação Bradesco",
        year: 2024,
        file: "fundamentos_de_ti_hardware_e_software.pdf",
        category: "Infrastructure",
      },
      {
        name: "Object-Oriented Programming (OOP)",
        institution: "Fundação Bradesco",
        year: 2024,
        file: "programacao_orientada_a_objetos_poo.pdf",
        category: "Web Development",
      },
      {
        name: "English Certificate B1",
        institution: "SmallTalk",
        year: 2024,
        file: "English_Certificate_B1.pdf",
        category: "Languages",
      },
    ],
  }
};

export default function Certificates() {
  const { language } = useLanguage();

  // Função auxiliar para forçar cor vermelha nos ícones dos certificados
  const getRedIcon = (category: string) => {
    const icon = getTechIcon(category);
    if (isValidElement(icon)) {
      const props = icon.props as { className?: string };
      const currentClassName = props.className || "";
      // Remove todas as classes de cor e adiciona cor vermelha
      const newClassName = currentClassName
        .replace(/\btext-\S+/g, "") // Remove todas as classes text-*
        .replace(/\bdark:text-\S+/g, "") // Remove todas as classes dark:text-*
        .trim() + " text-red-600 dark:text-red-400";
      return cloneElement(icon as React.ReactElement<any>, { className: newClassName.trim() });
    }
    return icon;
  };

  return (
    <section className="mb-20">
      <div className="text-center mb-6 sm:mb-8 md:mb-10">
        <div className="flex items-center justify-center gap-3 mb-2 sm:mb-3">
          <h2 className="text-2xl md:text-4xl font-bold text-red-500 dark:text-white">
            {certificatesData[language].title}
          </h2>
          <span className="text-sm md:text-base text-muted-foreground">
            {language === "pt" 
              ? `${certificatesData[language].items.length} certificado${certificatesData[language].items.length !== 1 ? 's' : ''}`
              : `${certificatesData[language].items.length} certificate${certificatesData[language].items.length !== 1 ? 's' : ''}`
            }
          </span>
        </div>
        <p className="text-base sm:text-xl text-muted-foreground">
          {certificatesData[language].subtitle}
        </p>
      </div>

      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {certificatesData[language].items.map((cert, certIdx) => (
          <div
            key={certIdx}
            // Card Design: Compacto, Elegante e com Hover Effect
            className="relative p-6 rounded-xl border border-red-500/30 dark:border-red-500/30 bg-gradient-to-br from-red-500/5 to-red-500/10 dark:from-red-500/10 dark:to-red-500/10 
            transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-red-500/20 dark:hover:shadow-red-500/30 flex flex-col justify-between h-full"
          >
            {/* Conteúdo Principal do Card */}
            <div>
              {/* Badge de Categoria (Micro-informação) */}
              <span className="text-xs font-medium px-3 py-1.5 rounded-full mb-3 inline-flex items-center gap-2 bg-red-500/15 dark:bg-red-500/25 text-red-700 dark:text-red-300 border border-red-500/40 dark:border-red-500/50 shadow-sm">
                {getRedIcon(cert.category)}
                {cert.category}
              </span>

              {/* Título do Curso (Hierarquia Visual 1) */}
              <h3 className="text-lg font-bold leading-snug mt-2">
                {cert.name}
              </h3>

              {/* Instituição (Hierarquia Visual 2) */}
              <p className="text-sm text-muted-foreground mt-1 flex items-center gap-2">
                <BookOpen className="w-4 h-4 flex-shrink-0" />
                {cert.institution}
              </p>
            </div>

            {/* Rodapé do Card (Ano e Botão de Ação) */}
            <div className="mt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-2 pt-3 border-t border-red-500/10 dark:border-red-500/10">
              {/* Ano (Hierarquia Visual 3) */}
              <p className="text-xs font-semibold text-muted-foreground/80">
                {cert.year}
              </p>

              {/* Botão de Preview/Download (Ação Primária) */}
              <div className="flex items-center gap-4 sm:gap-3">
                <a
                  href={`/certificates/${cert.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-medium flex items-center gap-1.5 sm:gap-1 dark:text-red-500 text-gray-800 hover:text-red-600 dark:hover:text-red-400 hover:underline cursor-pointer transition-colors"
                  aria-label={language === "pt" ? `Ver certificado ${cert.name}` : `View certificate ${cert.name}`}
                >
                  <span className="hidden sm:inline">
                    {language === "pt" ? "Ver Certificado" : "View Certificate"}
                  </span>
                  <span className="sm:hidden">
                    {language === "pt" ? "Ver" : "View"}
                  </span>
                </a>
                <a
                  href={`/certificates/${cert.file}`}
                  download
                  className="text-xs sm:text-sm font-medium flex items-center justify-center gap-1 dark:text-red-500 text-gray-800 hover:text-red-600 dark:hover:text-red-400 hover:underline cursor-pointer transition-colors"
                  aria-label={language === "pt" ? `Baixar certificado ${cert.name}` : `Download certificate ${cert.name}`}
                >
                  <Download className="w-4 h-4 sm:w-4 sm:h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
