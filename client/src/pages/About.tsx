import { Briefcase, Sparkles, Moon, Sun, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Globe } from "lucide-react";

export default function About() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  const experiences = [
    {
      company: "Receita Federal",
      role: language === "pt" ? "Estagiário de TI" : "IT Intern",
      period: language === "pt" ? "Dez 2024 - Atual" : "Dec 2024 - Present",
      description:
        language === "pt"
          ? [
              "Presto suporte técnico aos usuários, realizando diagnóstico, resolução de problemas e otimização de desempenho em hardware e software, o que resultou na melhoria da velocidade de múltiplos computadores.",
              "Colaboro na elaboração de relatórios técnicos e analíticos para apoiar a gestão de desempenho e os processos internos.",
              "Executo atividades administrativas de apoio, como a produção de apresentações, certificados e documentação institucional.",
            ]
          : [
              "Provide technical support to users by diagnosing and resolving hardware and software issues, improving the performance and speed of multiple computers.",
              "Collaborate in creating technical and analytical reports to support performance management and internal processes.",
              "Carry out administrative support tasks such as preparing presentations, certificates, and institutional documentation.",
            ],
      skills: language === "pt"
        ? ["Serviços de TI", "Manutenção de computadores", "Suporte técnico", "Python"]
        : ["IT Services", "Computer Maintenance", "Technical Support", "Python"],
    },
    {
      company: "NExTI UniFAP",
      role: language === "pt" ? "Desenvolvedor Full-Stack" : "Full-Stack Developer",
      period: language === "pt" ? "Mar 2025 - Atual" : "Mar 2025 - Present",
      description:
        language === "pt"
          ? [
              "Desenvolvi e mantive funcionalidades para a plataforma educacional NExTI, utilizando React.js no front-end e PHP com Laravel no back-end, garantindo uma experiência de usuário fluida e eficiente.",
              "Implementei integrações com APIs externas para expandir as funcionalidades da plataforma, melhorando a experiência do usuário e a eficiência operacional.",
              "Colaborei com equipes multidisciplinares para planejar, projetar e implementar novas funcionalidades, assegurando que os requisitos do projeto fossem atendidos dentro dos prazos estabelecidos.",
            ]
          : [
              "Developed and maintained features for the NExTI educational platform using React.js on the front-end and PHP with Laravel on the back-end, ensuring a smooth and efficient user experience.",
              "Implemented integrations with external APIs to expand platform functionality, improving user experience and operational efficiency.",
              "Collaborated with multidisciplinary teams to plan, design, and implement new features, ensuring project requirements were met within established deadlines.",
            ],
      skills: ["React.js", "PHP", "Laravel", "MySQL", "TailwindCSS"],
    },
    {
      company: "Carboon Cycle",
      role: language === "pt"
        ? "Estágio em Desenvolvimento Full-Stack"
        : "Full-Stack Development Internship",
      period: language === "pt" ? "Mar 2025 - Out 2025" : "Mar 2025 - Oct 2025",
      description:
        language === "pt"
          ? [
              "Desenvolvi interfaces de usuário responsivas e interativas para aplicações web utilizando React.js e TailwindCSS, garantindo uma experiência de usuário otimizada em diversos dispositivos.",
              "Colaborei com designers e desenvolvedores back-end para implementar funcionalidades completas, assegurando a integração perfeita entre front-end e back-end.",
              "Participei ativamente de revisões de código e testes para garantir a qualidade do software, contribuindo para a melhoria contínua dos processos de desenvolvimento.",
            ]
          : [
              "Developed responsive and interactive user interfaces for web applications using React.js and TailwindCSS, ensuring an optimized experience across devices.",
              "Collaborated with designers and back-end developers to implement complete features, ensuring seamless integration between front-end and back-end.",
              "Actively participated in code reviews and testing to ensure software quality, contributing to continuous improvement in development processes.",
            ],
      skills: [
        "React.js","Node.js","Next.js","TypeScript","TailwindCSS","ShadcnUI","Git","Jira",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Theme & Language Toggle */}
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

        {/* Theme Toggle */}
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

      {/* Navigation Links */}
      <div className="fixed top-6 left-6 z-50 flex gap-6">
      <div className="fixed top-6 left-6 z-50 flex gap-6">
        <Link href="/">
          <a className="text-sm hover:text-red-500 transition-colors font-semibold">
          {language === "pt"
                      ? "Inicio"
                      : "Home"
                      }
          </a>
        </Link>
        <Link href="/projects">
          <a className="text-sm hover:text-red-500 transition-colors font-semibold">
          {language === "pt"
                      ? "Projetos"
                      : "Projects"
                      }
          </a>
        </Link>
        <Link href="/contact">
          <a className="text-sm hover:text-red-500 transition-colors font-semibold">
          {language === "pt"
                      ? "Contato"
                      : "Contatc"
                      }
            </a>
        </Link>
      </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        {/* About Section */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">             
          {language === "pt"
                      ? "Sobre mim"
                      : "About me"
                      }
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed animate-slide-up">
              <div className="p-6 rounded-lg 
                  border border-black/30 dark:border-red-500/30 
                  bg-gradient-to-br from-black/5 to-black/10 dark:from-red-500/10 dark:to-red-500/10 
                  hover:border-black/60 dark:hover:border-red-500/60 
                  transition-all duration-300 
                  hover:shadow-lg hover:shadow-black dark:hover:shadow-red-500">
                <p className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 dark:text-red-500 text-black  flex-shrink-0 mt-1" />
                  <span>
                  {language === "pt"
                      ? "Tenho 2 anos de experiência como "
                      : "I have 2 years of experience as "
                      }
                    <span className="dark:text-red-500 text-black font-semibold">{language === "pt"
                      ? "Desenvolvedor-Full-Stack "
                      : "Developer-Full-Stack "
                      }</span>
                    {language === "pt"
                      ? ", trabalhando em projetos reais. "
                      : ", working on real projects. "
                      }
                  </span>
                </p>
              </div>

              <div className="p-6 rounded-lg 
                  border border-black/30 dark:border-red-500/30 
                  bg-gradient-to-br from-black/5 to-black/10 dark:from-red-500/10 dark:to-red-500/10 
                  hover:border-black/60 dark:hover:border-red-500/60 
                  transition-all duration-300 
                  hover:shadow-lg hover:shadow-black dark:hover:shadow-red-500">
                <p className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 dark:text-red-400 text-gray-700 flex-shrink-0 mt-1" />
                  <span>
                  {language === "pt"
                      ? "Sou "
                      : "Am "
                      } 
                      <span className="dark:text-red-400 text-gray-700 font-semibold">
                  {language === "pt"
                      ? "esforçado e dedicado "
                      : "hardworking and dedicated "
                      }
                      </span> 
                      {language === "pt"
                      ? "e mantenho o foco na evolução contínua, sempre buscando melhorar a cada desafio."
                      : "And I maintain my focus on continuous evolution, always seeking to improve with each challenge."
                      }
                  </span>
                </p>
              </div>

              <div className="p-6 rounded-lg 
                  border border-black/30 dark:border-red-500/30 
                  bg-gradient-to-br from-black/5 to-black/10 dark:from-red-500/10 dark:to-red-500/10 
                  hover:border-black/60 dark:hover:border-red-500/60 
                  transition-all duration-300 
                  hover:shadow-lg hover:shadow-black dark:hover:shadow-red-500">
                <p className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 dark:text-red-500 text-black flex-shrink-0 mt-1" />
                  <span>
                  {language === "pt"
                      ? "Nascido e crescido em Pernambuco, agora se aventurando no Ceará."
                      : "Born and raised in Pernambuco, now venturing into Ceará. "
                      }
                  </span>
                </p>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center md:justify-end animate-float">
              <div className="relative w-100 h-100 rounded-2xl overflow-hidden 
                  shadow-lg shadow-black dark:shadow-red-500/30 
                  border border-black/40 dark:border-red-500/40 
                  bg-gradient-to-br from-black/20 via-black/10 to-black/20 
                  dark:from-red-500/20 dark:via-red-400/10 dark:to-red-500/20 
                  transition-all duration-300 
                  hover:shadow-black dark:hover:shadow-red-500 
                  hover:scale-105">
                <img
                  src="./img/photo.jpg"
                  alt="Foto de perfil"
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 dark:ring-red-500/40 ring-black/40 blur-sm"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">                  
            {language === "pt"
                      ? "Minha experiência:"
                      : "My experience:"
                      }
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="border-l-4 border-black dark:border-red-500 
                    pl-6 py-4 p-6 -ml-6 
                    rounded-r-lg 
                    bg-gradient-to-r from-black/5 to-transparent dark:from-red-500/5 dark:to-transparent 
                    hover:from-black/10 hover:to-black/5 dark:hover:from-red-500/10 dark:hover:to-red-400/5 
                    transition-all duration-300 card-hover animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Briefcase className="w-5 h-5 dark:text-red-500 text-black animate-pulse" />
                    <h3 className="text-xl font-bold">
                      <span className="dark:text-red-500 dark:group-hover:text-red-400 text-black group-hover:text-gray-400/30 transition-colors">{exp.company}</span>
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-4">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-sm px-3 py-1 rounded-full 
                        bg-gradient-to-r from-black/10 to-black/10 dark:from-red-500/20 dark:to-red-400/20 
                        text-black dark:text-accent-foreground 
                        border border-black/40 dark:border-red-500/50 
                        hover:border-black hover:from-black/20 hover:to-black/20 
                        dark:hover:border-red-500 dark:hover:from-red-500/30 dark:hover:to-red-400/30 
                        transition-all duration-300 transform hover:scale-105"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-lg font-semibold">{exp.role}</h4>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                </div>

                <ul className="space-y-3">
                  {exp.description.map((desc, i) => (
                    <li
                      key={i}
                      className="text-muted-foreground flex gap-3 group/item hover:text-foreground transition-colors"
                      style={{ animationDelay: `${(idx + 0.2 + i * 0.1)}s` }}
                    >
                      <span className="dark:text-red-500 text-black mt-1 group-hover/item:animate-pulse">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
