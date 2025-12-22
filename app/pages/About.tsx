"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Award,
  BookOpen,
  Briefcase,
  Code,
  Cpu,
  Database,
  Download,
  Monitor,
  Server,
  Wrench,
} from "lucide-react";
import { getTechIcon } from "@/lib/techIcons";
import { IoIosArrowForward } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { cloneElement, isValidElement } from "react";

// ============================================================
// DATA SECTIONS (Extraído de Home.tsx)
// ============================================================

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
        skills: ["Node.js", "Laravel", "PHP", "Python"],
      },
      {
        name: "Banco de dados",
        icon: Database,
        skills: ["MySQL", "PostgreSQL", "Redis"],
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
          "n8n",
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
        skills: ["React", "Vue.js", "Next.js", "Tailwind CSS", "HTML", "CSS"],
      },
      {
        name: "Back-end",
        icon: Server,
        skills: ["Node.js", "Flask", "Django", "Laravel"],
      },
      {
        name: "Databases",
        icon: Database,
        skills: ["MySQL", "PostgreSQL", "Redis"],
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
          "n8n",
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

const educationData = {
  
  pt: {
    title: "Formação Acadêmica",
    subtitle: "A base do meu conhecimento",
    items: [
      {
        institution: "UniCesumar",
        course: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
        period: "2025 - 2026 (Previsão)",
      },
      {
        institution: "Centro Universitário Paraíso - UniFAP",
        course: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
        period: "2023 - 2025",
      },
      
    ],
  },
  en: {
    title: "Academic Background",
    subtitle: "The foundation of my knowledge",
    items: [
      {
        institution: "UniCesumar",
        course: "technologist in Systems Analysis and Development",
        period: "2025 - 2026",
      },
      {
        institution: "Paraíso University Center - UniFAP",
        course: "technologist in Systems Analysis and Development",
        period: "2023 - 2025",
      },
    ],
  },
};

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

const experiences = [
  {
    company: "Starke Vision",
    role: "AI Systems Development Intern",
    period: "Dec 2025 - Present",
    logo: "/companies/logostarke.png",
    description: [
      "Implementation of complex automation flows via n8n, integrating CRMs and communication tools such as Chatwoot and EvolutionAPI.",
      "Active participation in Scrum rituals, collaborating in sprint planning and task organization via agile management.",
      "Management of PostgreSQL databases and cache optimization with Redis to ensure application scalability.",
      "Deployment and management of services using Easypanel.",
      "Development of institutional websites with WordPress for clients, ensuring satisfaction and delivery of complete and functional digital solutions.",
    ],

    skills: [
      "WordPress",
      "Vue.js",
      "n8n",
      "PostgreSQL",
      "Redis",
      "Chatwoot",
      "Easypanel",
      "EvolutionAPI",
      "Project Management",
      "Scrum",
      "LLMs",
    ]
  }, 
  {
    company: "Freelancer",
    role: "Front-End Developer and UI/UX Designer",
    period: "Jul 2023 - Present",
    logo: "/companies/x-red.svg",
    description: [
      "Developed responsive websites and UI/UX interfaces focused on usability, aesthetics, and conversion.",
      "Created visual identities and digital materials, while planning strategic content for social media.",
      "Worked directly with clients to understand needs and deliver complete, functional digital solutions.",
    ],
    
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "UI/UX",
      "TailwindCSS",
      "Web Development",
      "Figma",
      "WordPress",
      "Project Management"
    ]
  },  
  {
    company: "Receita Federal",
    role: "IT Intern",
    period: "Dec 2024 - Dec 2025",
    logo: "/companies/receita-federal.png",
    description: [
      "I provided technical support to users, diagnosing and resolving hardware and software problems, improving the performance and speed of various computers.",
      "I collaborated in the creation of technical and analytical reports to support performance management and internal processes.",
      "Carry out administrative support tasks such as preparing presentations, certificates, and institutional documentation.",
    ],
    skills: ["IT Services", "Computer Maintenance", "Technical Support", "Python"],
  },
  {
    company: "NExTI UniFAP",
    role: "Full-Stack Developer",
    period: "Mar 2025 - Dec 2025",
    logo: "/companies/nexti-unifap.png",
    description: [
      "I worked as a volunteer full-stack developer building the digital platform for Learn Skills, an academic publisher dedicated to disseminating knowledge.",
      "The project started with a Python (Flask) backend, but we migrated to PHP with Laravel, ensuring greater scalability and system maintainability.",
      "I actively participated collaborate in technical decisions, discussing architecture, proposing solutions, and ensuring integration between all parts of the system.",
    ],
    skills: ["React", "PHP", "Laravel", "MySQL", "TailwindCSS","GitHub", "Git"],
  },

  {
    company: "Carboon Cycle",
    role: "Full-Stack Developer",
    period: "Mar 2025 - Out 2025",
    logo: "/companies/Carboon-Cycle.svg",
    description: [
      "Developed responsive and interactive user interfaces for web applications using React and TailwindCSS.",
      "Collaborated with designers and back-end developers to implement complete features, ensuring seamless integration between front-end and back-end.",
      "Actively participated in code reviews and testing to ensure software quality.",
    ],
    skills: [
      "React",
      "Node.js",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "ShadcnUI",
      "Git",
      "GitHub",
      "GitLab",
      "Jira",
      
    ],
  },
];

// ============================================================
// ABOUT COMPONENT 
// ============================================================

export default function About() {
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

  // Função auxiliar para renderizar a descrição da experiência
  const renderDescription = (desc: string[]) => (
    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
      {desc.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );

  // Função auxiliar para renderizar as habilidades da experiência
  const renderSkills = (skills: string[]) => (
    <div className="flex flex-wrap gap-2 mt-4">
      {skills.map((skill, idx) => (
        <span
          key={idx}
                      className="px-3 py-1 rounded-full text-xs flex items-center gap-2 bg-gradient-to-r dark:from-red-500/20 dark:to-red-400/20 border dark:border-red-500/50 dark:hover:border-red-500 text-gray-800 dark:text-white from-red-500/20 to-red-400/20 border-red-500/50 hover:border-red-500 transition-all duration-300"
        >
          {getTechIcon(skill)}
          {skill}
        </span>
      ))}
    </div>
  );

  // Ajusta o objeto experiences para usar a linguagem correta
  const localizedExperiences = experiences.map((exp) => ({
    ...exp,
  
    // Tradução do cargo
    role:
    language === "pt"
      ? exp.role === "IT Intern"
        ? "Estagiário de TI"
        : exp.role === "Front-End Developer"
        ? "Desenvolvedor Front-End"
        : exp.role === "Full-Stack Developer"
        ? "Desenvolvedor Full-Stack"
        : exp.role === "Front-End Developer and UI/UX Designer"
        ? "Desenvolvedor Front-End and UI/UX Designer"
        : exp.role === "AI Systems Development Intern"
        ? "Estagiário de Desenvolvimento de Sistemas de IA"
        : exp.role
      : exp.role,
  
    // Traduções de período
    period:
      language === "pt"
        ? exp.period
            .replace("Dec 2025 - Present", "Dez 2025 - Atual")
            .replace("Dec 2024 - Dec 2025", "Dez 2024 - Dez 2025")
            .replace("Mar 2025 - Dec 2025", "Mar 2025 - Dez 2025")
            .replace("Jul 2023 - Present", "Jul 2023 - Atual")
            .replace("Mar 2025 - Oct 2025", "Jul 2023 - Atual")
        : exp.period,
  
    // Descrição PT-BR
    description:
      language === "pt"
        ? exp.company === "Receita Federal"
          ? [
              "Atuei no suporte técnico aos usuários, realizando diagnóstico, resolução de problemas e otimização de desempenho em hardware e software, o que resultou na melhoria da velocidade de múltiplos computadores.",
              "Colaborei na elaboração de relatórios técnicos e analíticos para apoiar a gestão de desempenho e os processos internos.",
              "Executei atividades administrativas de apoio, como a produção de apresentações, certificados e documentação institucional.",
            ]
          : exp.company === "NExTI UniFAP"
          ? [
              "Atuei como desenvolvedor full stack voluntário na construção da plataforma digital da Learn Skills, editora acadêmica dedicada à disseminação de conhecimento.",
              "O projeto começou com back-end em Python (Flask), mas migramos para PHP com Laravel, garantindo maior escalabilidade e manutenção do sistema.",
              "Colaborei ativamente em decisões técnicas, discutindo arquitetura, propondo soluções e assegurando a integração entre todas as partes do sistema.",
            ]
            : exp.company === "Freelancer"
            ? [
              "Desenvolvo sites responsivos e interfaces UI/UX focadas em usabilidade, estética e conversão.",
              "Crio materiais digitais, além de planejar conteúdo estratégico para redes sociais.",
              "Atendo diretamente clientes, entendendo necessidades e entregando soluções digitais completas e funcionais."
              ]
          : exp.company === "Carboon Cycle"
          ? [
              "Desenvolvi interfaces de usuário responsivas e interativas para aplicações web utilizando React e TailwindCSS.",
              "Colaborei com designers e desenvolvedores back-end para implementar funcionalidades completas, assegurando a integração perfeita entre front-end e back-end.",
              "Participei ativamente de revisões de código e testes para garantir a qualidade do software.",
            ]
            : exp.company === "Starke Vision"
            ? [
                "Implementação de fluxos de automação complexos via n8n, integrando CRMs e ferramentas de comunicação como Chatwoot e EvolutionAPI.",
                "Participação ativa em rituais Scrum, colaborando no planejamento de sprints e organização de tarefas via gestão ágil.",
                "Gerenciamento de bancos de dados PostgreSQL e otimização de cache com Redis para garantir escalabilidade das aplicações.",
                "Implantação e gerenciamento de serviços utilizando Easypanel.",
                "Desenvolvimento de sites institucionais com WordPress para clientes, garantindo a satisfação e a entrega de soluções digitais completas e funcionais.",
              ]
          : exp.description
        : exp.description,
  
    // Skills traduzidas
    skills:
      language === "pt"
        ? exp.company === "Receita Federal"
          ? [
              "Serviços de TI",
              "Manutenção de computadores",
              "Suporte técnico",
              "Python",
            ]
          : exp.company === "NExTI UniFAP"
          ? [
              ...exp.skills.map((s) =>
                s === "Project Management"
                  ? "Gestão de Projetos"
                  : s === "Web Development"
                  ? "Desenvolvimento Web"
                  : s
              )
            ]
          : exp.skills
        : exp.skills,
  }));
  

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-red-500 dark:text-white">
          {language === "pt" ? "Sobre Mim" : "About Me"}
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          {language === "pt"
            ? "Um pouco sobre minha jornada, habilidades e formação."
            : "A little about my journey, skills, and background."}
        </p>
        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
            {/* Text Content */}
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed animate-slide-up">
              <div className="p-6 rounded-lg border border-red-500/30 dark:border-red-500/30 bg-gradient-to-br from-red-500/10 to-red-400/10 dark:from-red-500/10 dark:to-red-500/10 hover:border-red-500/60 dark:hover:border-red-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 dark:hover:shadow-red-500">
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

              <div className="p-6 rounded-lg border border-red-500/30 dark:border-red-500/30 bg-gradient-to-br from-red-500/5 to-red-500/10 dark:from-red-500/10 dark:to-red-500/10 hover:border-red-500/60 dark:hover:border-red-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-red-500 dark:hover:shadow-red-400">
                <p className="flex items-start gap-3">
                  <IoIosArrowForward className="w-5 h-5 dark:text-red-500 text-red-500 flex-shrink-0 mt-1" />
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

              <div className="p-6 rounded-lg border border-red-500/30 dark:border-red-500/30 bg-gradient-to-br from-red-500/5 to-red-500/10 dark:from-red-500/10 dark:to-red-500/10 hover:border-red-500/60 dark:hover:border-red-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-red-500 dark:hover:shadow-red-500">
                <p className="flex items-start gap-3">
                  <IoIosArrowForward className="w-5 h-5 dark:text-red-500 text-red-500 flex-shrink-0 mt-1" />
                  <span>
                    {language === "pt"
                      ? "Nascido e crescido em Pernambuco, agora se aventurando no Ceará."
                      : "Born and raised in Pernambuco, now venturing into Ceará."}
                  </span>
                </p>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex flex-col items-center md:items-end animate-float">
              <div className="relative w-85 h-90 rounded-2xl overflow-hidden shadow-lg shadow-red-500/30 dark:shadow-red-500/30 border border-red-500/40 dark:border-red-500/40 bg-gradient-to-br from-red-500/20 via-red-500/10 to-red-500/20 dark:from-red-500/20 dark:via-red-400/10 dark:to-red-500/20 transition-all duration-300 hover:shadow-red-500 dark:hover:shadow-red-500 hover:scale-105 mb-4">
                <Image
                  src="/img/photo.jpg"
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
            



        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-red-500 dark:text-white">
            {skillsData[language].title}
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            {skillsData[language].subtitle}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
              {skillsData[language].categories.map(
                (category, categoryIdx) => {
                  const IconComponent = category.icon;
                  return (
                    <div
                      key={categoryIdx}
                      className="p-6 rounded-lg border border-red-500/30 dark:border-red-500/30 bg-gradient-to-br from-red-500/5 to-red-500/10 dark:from-red-500/10 dark:to-red-500/10 hover:border-red-500/60 dark:hover:border-red-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-red-500 dark:hover:shadow-red-500/40"
                    >
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                        <IconComponent className="w-6 h-6 dark:text-red-500 text-red-500" />
                        {category.name}
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {category.skills.map((skill, skillIdx) => (
                          <span
                            key={skillIdx}
                            className="text-sm px-3 py-1 rounded-full flex items-center gap-2 bg-gradient-to-r from-red-500/10 to-red-500/10 dark:from-red-500/20 dark:to-red-400/20 text-gray-800 dark:text-accent-foreground border border-red-500/40 dark:border-red-500/50 hover:border-red-500 hover:from-red-500/20 hover:to-red-500/20 dark:hover:border-red-500 dark:hover:from-red-500/30 dark:hover:to-red-400/30 transition-all duration-300 transform hover:scale-105"
                          >
                            {getTechIcon(skill)}
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
              <div className="sticky top-24 p-6 rounded-lg border border-red-500/40 dark:border-red-500/40 bg-gradient-to-br from-red-500/10 to-red-500/20 dark:from-red-500/20 dark:to-red-500/30 shadow-xl shadow-red-500/20 dark:shadow-red-500/20 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 dark:text-white text-red-500">
                  <BookOpen className="w-7 h-7" />
                  {skillsData[language].studying.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {skillsData[language].studying.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {skillsData[language].studying.stacks.map(
                    (stack, stackIdx) => (
                      <span
                        key={stackIdx}
                        className="text-base px-4 py-2 rounded-full flex items-center gap-2 bg-gradient-to-r border border-red-500/50 dark:border-red-500/50 hover:border-red-500 dark:hover:border-red-500 from-red-500/10 to-red-500/10 dark:from-red-500/10 dark:to-red-400/10 hover:from-red-500/20 hover:to-red-500/20 dark:hover:from-red-400/20 dark:hover:to-red-400/20 text-red-500 dark:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-red-500/40 dark:hover:shadow-red-500/20 group font-semibold shadow-md"
                      >
                        {getTechIcon(stack)}
                        {stack}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

{/* Experience Section */}
<section className="mb-20">
  <h2 className="text-3xl md:text-4xl font-bold mb-12 text-red-500 dark:text-white">
    {language === "pt" ? "Experiência Profissional" : "Professional Experience"}
  </h2>

  <p className="text-xl text-muted-foreground mb-10">
    {language === "pt"
      ? "Minha trajetória no mundo da tecnologia."
      : "My journey in the world of technology."}
  </p>

  <div className="space-y-10">
    {localizedExperiences.map((exp, expIdx) => (
      <div
        key={expIdx}
        className="group border-l-4 border-red-500 dark:border-red-500 pl-6 py-4 p-6 -ml-6 rounded-r-lg
          bg-gradient-to-r from-red-500/5 to-transparent dark:from-red-500/5 dark:to-transparent
          hover:from-red-500/10 hover:to-red-500/5 dark:hover:from-red-500/10 dark:hover:to-red-400/5
          transition-all duration-300 card-hover
          transform will-change-transform hover:-translate-y-1"
      >

        {/* LOGO + TEXTO LADO A LADO */}
        <div className="flex items-center gap-6 mb-4 transition-transform duration-300 group-hover:-translate-y-1">

          {/* Logo da empresa */}
          {exp.logo && (
            <Image
              src={exp.logo}
              alt={exp.company}
              width={80}
              height={80}
              className="w-20 h-20 rounded-md object-contain"
            />
          )}

          {/* Cargo / Empresa / Período */}
          <div>
            <h3 className="text-xl font-bold dark:text-red-500 text-red-500">
              {exp.role}
            </h3>

            <p className="text-lg font-semibold">
              {exp.company}
            </p>

            <p className="text-sm text-muted-foreground">
              {exp.period}
            </p>
          </div>
        </div>

        {/* Descrição */}
        <ul className="space-y-3 mt-4">
          {exp.description.map((desc, descIdx) => (
            <li
              key={descIdx}
              className="text-muted-foreground/95 flex gap-3 group/item hover:text-foreground
                transition-colors duration-300 group-hover:-translate-y-1"
            >
              <span className="dark:text-red-500 text-red-500 mt-1">•</span>
              <span>{desc}</span>
            </li>
          ))}
        </ul>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mt-6">
          {exp.skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full text-xs flex items-center gap-2
                bg-gradient-to-r from-red-500/10 to-red-500/10 dark:from-red-500/20 dark:to-red-400/20
                border border-red-500/40 dark:border-red-500/50
                text-gray-800 dark:text-white
                transition-all duration-300 transform hover:scale-105 group-hover:-translate-y-0.5"
            >
              {getTechIcon(skill)}
              {skill}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>



{/* Education Section */}
<section className="mb-20">
  <h2 className="text-3xl md:text-4xl font-bold mb-12 text-red-500 dark:text-white">
    {educationData[language].title}
  </h2>

  <p className="text-xl text-muted-foreground mb-10">
    {educationData[language].subtitle}
  </p>

  <div className="space-y-10">
    {educationData[language].items.map((item, itemIdx) => (
      <div
        key={itemIdx}
        className="group border-l-4 border-red-500 dark:border-red-500 pl-6 py-4 p-6 -ml-6 rounded-r-lg
          bg-gradient-to-r from-red-500/5 to-transparent dark:from-red-500/5 dark:to-transparent
          hover:from-red-500/10 hover:to-red-500/5 dark:hover:from-red-500/10 dark:hover:to-red-400/5
          transition-all duration-300 card-hover
          transform will-change-transform hover:-translate-y-1"
      >
        <div className="mb-4 transition-transform duration-300 group-hover:-translate-y-1">
          <h3 className="text-xl font-bold dark:text-red-500 text-red-500">
            {item.course}
          </h3>

          <p className="text-lg font-semibold text-foreground/80">
            {item.institution}
          </p>

          <p className="text-sm text-muted-foreground">
            {item.period}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>


        {/* Certificates Section */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-4">
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
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
            <p className="text-base sm:text-xl text-muted-foreground">
              {certificatesData[language].subtitle}
            </p>
            <a href="/docs/Certificado.rar" download className="cursor-pointer w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full sm:w-auto bg-transparent border-red-500/30 dark:border-red-500/30 hover:bg-red-500/10 dark:hover:bg-red-500/10 transition-colors duration-300 cursor-pointer text-sm sm:text-base"
                aria-label={language === "pt" ? "Baixar todos os certificados" : "Download all certificates"}
              >
                <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span className="hidden sm:inline">
                  {language === "pt"
                    ? "Download Certificados"
                    : "Download Certificates"}
                </span>
                <span className="sm:hidden">
                  {language === "pt"
                    ? "Download Todos"
                    : "Download All"}
                </span>
              </Button>
            </a>
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
      </div>
    </section>
  );
}
  