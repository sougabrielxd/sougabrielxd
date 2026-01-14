"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Code, Monitor, Server, Database, Cpu, Wrench, BookOpen } from "lucide-react";
import { getTechIcon } from "@/lib/techIcons";

const skillsData = {
  pt: {
    title: "Minhas Habilidades",
    subtitle: "Uma jornada de aprendizado contínuo",
    categories: [
      {
        name: "Linguagens",
        icon: Code,
        skills: ["TypeScript", "JavaScript", "Python", "PHP"],
      },
      {
        name: "Front-end",
        icon: Monitor,
        skills: ["React", "Vue.js", "Next.js", "Tailwind CSS", "ShadcnUI", "HTML", "CSS"],
      },
      {
        name: "Back-end",
        icon: Server,
        skills: ["Node.js", "Laravel", "Flask"],
      },
      {
        name: "Banco de dados",
        icon: Database,
        skills: ["MySQL", "PostgreSQL", "Redis"],
      },
      {
        name: "IA e Automação",
        icon: Cpu,
        skills: ["n8n", "Chatwoot", "EvolutionAPI", "Easypanel", "LLMs"],
      },
      {
        name: "Ferramentas",
        icon: Wrench,
        skills: [
          "Git",
          "GitHub",
          "GitLab",
          "VS Code",
          "Figma",
          "Docker",
          "Jira",
          "Trello",
          "WordPress",
        ],
      },
    ],
    studying: {
      title: "Stacks em Estudo",
      description:
        "A tecnologia não para, e eu também não! Atualmente, estou aprofundando meus conhecimentos em:",
      stacks: [
        "Engenharia de Prompt",
        "Automação de Processos",
        "Chatwoot",
        "EvolutionAPI",
        "Redis",
        "Easypanel",
      ],
    },
  },
  en: {
    title: "My Skills",
    subtitle: "A journey of continuous learning",
    categories: [
      {
        name: "Languages",
        icon: Code,
        skills: ["TypeScript", "JavaScript", "Python", "PHP"],
      },
      {
        name: "Front-end",
        icon: Monitor,
        skills: ["React", "Vue.js", "Next.js", "Tailwind CSS", "ShadcnUI", "HTML", "CSS"],
      },
      {
        name: "Back-end",
        icon: Server,
        skills: ["Node.js", "Laravel", "Flask"],
      },
      {
        name: "Databases",
        icon: Database,
        skills: ["MySQL", "PostgreSQL", "Redis"],
      },
      {
        name: "AI & Automation",
        icon: Cpu,
        skills: ["n8n", "Chatwoot", "EvolutionAPI", "Easypanel", "LLMs"],
      },
      {
        name: "Tools",
        icon: Wrench,
        skills: [
          "Git",
          "GitHub",
          "GitLab",
          "VS Code",
          "Figma",
          "Docker",
          "Jira",
          "Trello",
          "WordPress",
        ],
      },
    ],
    studying: {
      title: "Stacks I'm Studying",
      description:
        "Technology never stops, and neither do I! I am currently deepening my knowledge in:",
      stacks: ["Prompt Engineering", "Process Automation", "Chatwoot", "EvolutionAPI", "Redis", "Easypanel"],
    },
  },
};

export default function Skills() {
  const { language } = useLanguage();

  return (
    <section className="mb-12 sm:mb-16 md:mb-20">
      <div className="text-center mb-6 sm:mb-8 md:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-red-500 dark:text-white">
          {skillsData[language].title}
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground">
          {skillsData[language].subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-4 sm:gap-6">
          {skillsData[language].categories.map(
            (category, categoryIdx) => {
              const IconComponent = category.icon;
              const skillCount = category.skills.length;
              return (
                <div
                  key={categoryIdx}
                  className="group p-4 sm:p-6 rounded-lg border border-red-500/30 dark:border-red-500/30 bg-gradient-to-br from-red-500/5 to-red-500/10 dark:from-red-500/10 dark:to-red-500/10 hover:border-red-500/60 dark:hover:border-red-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-red-500 dark:hover:shadow-red-500/40 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h3 className="text-lg sm:text-xl font-semibold flex items-center gap-2 sm:gap-3 group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 dark:text-red-500 text-red-500 group-hover:scale-110 transition-transform duration-300" />
                      {category.name}
                    </h3>
                    <span className="px-2 sm:px-2.5 py-1 rounded-full text-xs font-bold bg-red-500/20 dark:bg-red-500/30 text-red-600 dark:text-red-400 border border-red-500/40 dark:border-red-500/50">
                      {skillCount}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {category.skills.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="text-sm px-3 py-1.5 rounded-full flex items-center gap-2 bg-gradient-to-r from-red-500/10 to-red-500/10 dark:from-red-500/20 dark:to-red-400/20 text-gray-800 dark:text-accent-foreground border border-red-500/40 dark:border-red-500/50 hover:border-red-500 hover:from-red-500/20 hover:to-red-500/20 dark:hover:border-red-500 dark:hover:from-red-500/30 dark:hover:to-red-400/30 transition-all duration-300 transform hover:scale-110 hover:shadow-md hover:shadow-red-500/30 dark:hover:shadow-red-500/20 cursor-default group/skill"
                        style={{
                          animationDelay: `${skillIdx * 50}ms`,
                        }}
                      >
                        <span className="group-hover/skill:scale-125 transition-transform duration-300">
                          {getTechIcon(skill)}
                        </span>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            }
          )}
        </div>

        {/* Studying Stacks Container */}
        <div className="md:col-span-1">
          <div className="sticky top-24 p-4 sm:p-6 rounded-lg border border-red-500/40 dark:border-red-500/40 bg-gradient-to-br from-red-500/10 to-red-500/20 dark:from-red-500/20 dark:to-red-500/30 shadow-xl shadow-red-500/20 dark:shadow-red-500/20 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/30 dark:hover:shadow-red-500/30">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-2 sm:gap-3 dark:text-white text-red-500">
                <BookOpen className="w-5 h-5 sm:w-7 sm:h-7 animate-pulse" />
                {skillsData[language].studying.title}
              </h3>
              <span className="px-2 sm:px-2.5 py-1 rounded-full text-xs font-bold bg-red-500/30 dark:bg-red-500/40 text-red-600 dark:text-red-400 border border-red-500/50 dark:border-red-500/60 animate-pulse">
                {skillsData[language].studying.stacks.length}
              </span>
            </div>
            <p className="text-muted-foreground mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
              {skillsData[language].studying.description}
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {skillsData[language].studying.stacks.map(
                (stack, stackIdx) => (
                  <span
                    key={stackIdx}
                    className="text-base px-4 py-2 rounded-full flex items-center gap-2 bg-gradient-to-r border border-red-500/50 dark:border-red-500/50 hover:border-red-500 dark:hover:border-red-500 from-red-500/10 to-red-500/10 dark:from-red-500/10 dark:to-red-400/10 hover:from-red-500/20 hover:to-red-500/20 dark:hover:from-red-400/20 dark:hover:to-red-400/20 text-red-500 dark:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-red-500/40 dark:hover:shadow-red-500/20 group/study font-semibold shadow-md hover:-translate-y-0.5"
                    style={{
                      animationDelay: `${stackIdx * 100}ms`,
                    }}
                  >
                    <span className="group-hover/study:rotate-12 transition-transform duration-300">
                      {getTechIcon(stack)}
                    </span>
                    {stack}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
