"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { GraduationCap, BookOpen, Clock, MapPin, Laptop, School, CheckCircle2 } from "lucide-react";

const educationData = {
  pt: {
    title: "Formação Acadêmica",
    subtitle: "A base do meu conhecimento",
    items: [
      {
        institution: "UniCesumar",
        course: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
        period: "2025 - 2026",
        status: "Em andamento",
        modality: "EAD",
        location: "Araripina - PE",
        description: "Graduação tecnológica focada em desenvolvimento de software, arquitetura de sistemas e tecnologias modernas.",
      },
      {
        institution: "Centro Universitário Paraíso - UniFAP",
        course: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
        period: "2023 - 2025",
        status: "Transferido",
        modality: "Presencial",
        location: "Juazeiro do Norte - CE",
        description: "Formação técnica em desenvolvimento de sistemas, programação orientada a objetos, banco de dados e engenharia de software.",
      },
    ],
  },
  en: {
    title: "Academic Background",
    subtitle: "The foundation of my knowledge",
    items: [
      {
        institution: "UniCesumar",
        course: "Technologist in Systems Analysis and Development",
        period: "2025 - 2026",
        status: "In Progress",
        modality: "Distance Learning",
        location: "Araripina - PE",
        description: "Technology degree focused on software development, system architecture, and modern technologies.",
      },
      {
        institution: "Paraíso University Center - UniFAP",
        course: "Technologist in Systems Analysis and Development",
        period: "2023 - 2025",
        status: "Transferred",
        modality: "On-site",
        location: "Juazeiro do Norte - CE",
        description: "Technical training in systems development, object-oriented programming, databases, and software engineering.",
      },
    ],
  },
};

export default function Education() {
  const { language } = useLanguage();

  return (
    <section className="mb-20">
      <div className="text-center mb-6 sm:mb-8 md:mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-red-500 dark:text-white">
          {educationData[language].title}
        </h2>
        <p className="text-xl text-muted-foreground">
          {educationData[language].subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {educationData[language].items.map((item, itemIdx) => {
          const isCompleted = item.status === "Concluído" || item.status === "Completed";
          const isTransferred = item.status === "Transferido" || item.status === "Transferred";
          const isInProgress = item.status === "Em andamento" || item.status === "In Progress";
          
          return (
            <div
              key={itemIdx}
              className="relative p-6 rounded-xl border border-red-500/30 dark:border-red-500/30 bg-gradient-to-br from-red-500/5 to-red-500/10 dark:from-red-500/10 dark:to-red-500/10 
              transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-red-500/20 dark:hover:shadow-red-500/30 flex flex-col h-full"
            >
              {/* Header com ícone e status */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-red-500/20 dark:bg-red-500/20 border border-red-500/30 dark:border-red-500/30">
                    <GraduationCap className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${
                      isCompleted
                        ? "bg-green-500/10 dark:bg-green-500/20 text-green-700 dark:text-green-400 border-green-500/30 dark:border-green-500/40"
                        : isTransferred
                        ? "bg-orange-500/10 dark:bg-orange-500/20 text-orange-700 dark:text-orange-400 border-orange-500/30 dark:border-orange-500/40"
                        : "bg-blue-500/10 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 border-blue-500/30 dark:border-blue-500/40"
                    }`}>
                      {isCompleted ? (
                        <CheckCircle2 className="w-3 h-3" />
                      ) : isTransferred ? (
                        <School className="w-3 h-3" />
                      ) : (
                        <Clock className="w-3 h-3" />
                      )}
                      {item.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Conteúdo principal */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2 leading-tight">
                  {item.course}
                </h3>

                <p className="text-base font-semibold text-foreground/90 mb-2 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-red-500 dark:text-red-400 shrink-0" />
                  {item.institution}
                </p>

                <div className="space-y-2 mb-3">
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Clock className="w-4 h-4 shrink-0" />
                    {item.period}
                  </p>

                  {item.modality && (
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      {item.modality === "EAD" || item.modality === "Distance Learning" ? (
                        <Laptop className="w-4 h-4 shrink-0 text-red-500 dark:text-red-400" />
                      ) : (
                        <School className="w-4 h-4 shrink-0 text-red-500 dark:text-red-400" />
                      )}
                      {item.modality}
                    </p>
                  )}

                  {item.location && (
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <MapPin className="w-4 h-4 shrink-0 text-red-500 dark:text-red-400" />
                      {item.location}
                    </p>
                  )}
                </div>

                {item.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
