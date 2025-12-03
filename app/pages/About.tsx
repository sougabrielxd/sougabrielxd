"use client";

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
import { ReactNode } from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaVuejs } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import {
  SiCss3,
  SiDjango,
  SiDocker,
  SiFigma,
  SiFlask,
  SiGit,
  SiGithub,
  SiGitlab,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiLaravel,
  SiMongodb,
  SiN8N,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiTrello,
  SiTypescript,
  SiVercel,
  SiVite,
  SiWordpress,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { Button } from "@/components/ui/button";

// ============================================================
// TECH ICON MAPPING (Extraído de Home.tsx)
// ============================================================

const getTechIcon = (tech: string): ReactNode => {
  const iconMap: Record<string, ReactNode> = {
    JavaScript: <SiJavascript className="w-4 h-4 text-yellow-400" />,
    TypeScript: <SiTypescript className="w-4 h-4 text-blue-500" />,
    React: <SiReact className="w-4 h-4 text-sky-500" />,
    "Next.js": <SiNextdotjs className="w-4 h-4 text-black dark:text-white" />,
    "Vue.js": <FaVuejs className="w-4 h-4 text-green-500" />,
    "Tailwind CSS": <SiTailwindcss className="w-4 h-4 text-sky-400" />,
    TailwindCSS: <SiTailwindcss className="w-4 h-4 text-sky-400" />,
    Python: <SiPython className="w-4 h-4 text-yellow-500" />,
    "Node.js": <SiNodedotjs className="w-4 h-4 text-green-500" />,
    Flask: <SiFlask className="w-4 h-4 text-black" />,
    Django: <SiDjango className="w-4 h-4 text-green-700" />,
    PHP: <SiPhp className="w-4 h-4 text-indigo-500" />,
    Laravel: <SiLaravel className="w-4 h-4 text-red-500" />,
    MySQL: <GrMysql className="w-4 h-4 text-blue-600" />,
    PostgreSQL: <SiPostgresql className="w-4 h-4 text-sky-700" />,
    MongoDB: <SiMongodb className="w-4 h-4 text-green-600" />,
    Git: <SiGit className="w-4 h-4 text-orange-500" />,
    GitHub: <SiGithub className="w-4 h-4 text-gray-800 dark:text-gray-200" />,
    GitLab: <SiGitlab className="w-4 h-4 text-orange-500" />,
    Docker: <SiDocker className="w-4 h-4 text-blue-400" />,
    Postman: <SiPostman className="w-4 h-4 text-orange-500" />,
    Jira: <SiJira className="w-4 h-4 text-blue-600" />,
    Vite: <SiVite className="w-4 h-4 text-purple-500" />,
    Vercel: <SiVercel className="w-4 h-4 text-black dark:text-white" />,
    Figma: <SiFigma className="w-4 h-4 text-pink-500" />,
    WordPress: <SiWordpress className="w-4 h-4 text-sky-600" />,
    "VS Code": <VscVscode className="w-4 h-4 text-blue-500" />,
    N8n: <SiN8N className="w-4 h-4 text-pink-400" />,
    Trello: <SiTrello className="w-4 h-4 text-blue-600" />,
    Notion: <SiNotion className="w-4 h-4 text-black dark:text-white" />,
    HTML: <SiHtml5 className="w-4 h-4 text-orange-500" />,
    CSS: <SiCss3 className="w-4 h-4 text-blue-400" />,
    "UI/UX": <Monitor className="w-4 h-4" />,
    "Desenvolvimento Web": <Code className="w-4 h-4" />,
    "Web Development": <Code className="w-4 h-4" />,
    "Gestão de Projetos": <AiOutlineFundProjectionScreen className="w-4 h-4" />,
    "Project Management": <AiOutlineFundProjectionScreen className="w-4 h-4" />,
    "Serviços de TI": <Server className="w-4 h-4" />,
    "IT Services": <Server className="w-4 h-4" />,
    "Manutenção de computadores": <Cpu className="w-4 h-4" />,
    "Computer Maintenance": <Cpu className="w-4 h-4" />,
    "Suporte técnico": <Wrench className="w-4 h-4" />,
    "Technical Support": <Wrench className="w-4 h-4" />,
    "Engenharia de Prompt": (
      <Code className="w-4 h-4 dark:text-purple-500 text-purple-950" />
    ),
    "Prompt Engineering": (
      <Code className="w-4 h-4 dark:text-purple-500 text-purple-950" />
    ),
    "Automação de Processos": (
      <Code className="w-4 h-4 dark:text-pink-400 text-black" />
    ),
    "Process Automation": (
      <Code className="w-4 h-4 dark:text-pink-400 text-black" />
    ),
    ShadcnUI: <SiShadcnui className="w-4 h-4" />,
  };

  return iconMap[tech] || <Code className="w-4 h-4 text-gray-400" />;
};

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
        skills: ["React", "Vue.js", "Next.js", "Tailwind CSS", "ShadcnUI"],
      },
      {
        name: "Back-end",
        icon: Server,
        skills: ["Node.js", "Flask", "Django", "Laravel"],
      },
      {
        name: "Banco de dados",
        icon: Database,
        skills: ["MySQL", "PostgreSQL"],
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
        ],
      },
    ],
    studying: {
      title: "Stacks em Estudo",
      description:
        "A tecnologia não para, e eu também não! Atualmente, estou aprofundando meus conhecimentos em:",
      stacks: [
        "N8n",
        "Engenharia de Prompt",
        "Automação de Processos",
        "Notion",
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
        skills: ["React", "Vue.js", "Next.js", "Tailwind CSS"],
      },
      {
        name: "Back-end",
        icon: Server,
        skills: ["Node.js", "Flask", "Django", "Laravel"],
      },
      {
        name: "Databases",
        icon: Database,
        skills: ["MySQL", "PostgreSQL"],
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
        ],
      },
    ],
    studying: {
      title: "Stacks I'm Studying",
      description:
        "Technology never stops, and neither do I! I am currently deepening my knowledge in:",
      stacks: ["N8n", "Prompt Engineering", "Process Automation", "Notion"],
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
        category: "Langueges",
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
        institution: "Fundação Bradesco",
        year: 2024,
        file: "English_Certificate_B1.pdf",
        category: "Langueges",
      },
    ],
  }
};

const experiences = [
  {
    company: "Starke Vision",
    role: "Trainee",
    period: "Dec 2025 - Present",
    logo: "/companies/logostarke.png",
    description: [
      "",
      "",
      "",
    ],
    
    skills: [
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
      "Provide technical support to users by diagnosing and resolving hardware and software issues, improving the performance and speed of multiple computers.",
      "Collaborate in creating technical and analytical reports to support performance management and internal processes.",
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
      "I work as a volunteer full-stack developer building the digital platform for Learn Skills, an academic publisher dedicated to disseminating knowledge.",
      "The project started with a Python (Flask) backend, but we migrated to PHP with Laravel, ensuring greater scalability and system maintainability.",
      "I actively collaborate in technical decisions, discussing architecture, proposing solutions, and ensuring integration between all parts of the system.",
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
          className="px-3 py-1 rounded-full text-xs flex items-center gap-2 bg-gradient-to-r dark:from-red-500/20 dark:to-red-400/20 border dark:border-red-500/50 dark:hover:border-red-500 text-black dark:text-white from-gray-700/20 to-black/20 border-black/50 hover:border-black transition-all duration-300"
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
        : exp.role === "Trainee"
        ? "Estagiário"
        : exp.role
      : exp.role,
  
    // Traduções de período
    period:
      language === "pt"
        ? exp.period
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
              "Atuo no suporte técnico aos usuários, realizando diagnóstico, resolução de problemas e otimização de desempenho em hardware e software, o que resultou na melhoria da velocidade de múltiplos computadores.",
              "Colaboro na elaboração de relatórios técnicos e analíticos para apoiar a gestão de desempenho e os processos internos.",
              "Executo atividades administrativas de apoio, como a produção de apresentações, certificados e documentação institucional.",
            ]
          : exp.company === "NExTI UniFAP"
          ? [
              "Atuo como desenvolvedor full stack voluntário na construção da plataforma digital da Learn Skills, editora acadêmica dedicada à disseminação de conhecimento.",
              "O projeto começou com back-end em Python (Flask), mas migramos para PHP com Laravel, garantindo maior escalabilidade e manutenção do sistema.",
              "Colaboro ativamente em decisões técnicas, discutindo arquitetura, propondo soluções e assegurando a integração entre todas as partes do sistema.",
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
            : exp.company === "StarkeVision"
            ? [
                "",
                "",
                "",
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
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
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
              <div className="p-6 rounded-lg border border-black/30 dark:border-red-500/30 bg-gradient-to-br from-black/5 to-black/10 dark:from-red-500/10 dark:to-red-500/10 hover:border-black/60 dark:hover:border-red-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-black dark:hover:shadow-red-500">
                <p className="flex items-start gap-3">
                  <IoIosArrowForward className="w-5 h-5 dark:text-red-500 text-black flex-shrink-0 mt-1" />
                  <span>
                    {language === "pt"
                      ? "Tenho 2 anos de experiência como "
                      : "I have 2 years of experience as "}
                    <span className="dark:text-red-500 text-black font-semibold">
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

              <div className="p-6 rounded-lg border border-black/30 dark:border-red-500/30 bg-gradient-to-br from-black/5 to-black/10 dark:from-red-500/10 dark:to-red-500/10 hover:border-black/60 dark:hover:border-red-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-black dark:hover:shadow-red-400">
                <p className="flex items-start gap-3">
                  <IoIosArrowForward className="w-5 h-5 dark:text-red-500 text-black flex-shrink-0 mt-1" />
                  <span>
                    {language === "pt" ? "Sou uma pessoa " : "I am a person "}
                    <span className="dark:text-red-400 text-gray-700 font-semibold">
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

              <div className="p-6 rounded-lg border border-black/30 dark:border-red-500/30 bg-gradient-to-br from-black/5 to-black/10 dark:from-red-500/10 dark:to-red-500/10 hover:border-black/60 dark:hover:border-red-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-black dark:hover:shadow-red-500">
                <p className="flex items-start gap-3">
                  <IoIosArrowForward className="w-5 h-5 dark:text-red-500 text-black flex-shrink-0 mt-1" />
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
              <div className="relative w-85 h-90 rounded-2xl overflow-hidden shadow-lg shadow-black dark:shadow-red-500/30 border border-black/40 dark:border-red-500/40 bg-gradient-to-br from-black/20 via-black/10 to-black/20 dark:from-red-500/20 dark:via-red-400/10 dark:to-red-500/20 transition-all duration-300 hover:shadow-black dark:hover:shadow-red-500 hover:scale-105 mb-4">
                <img
                  src="./img/photo.jpg"
                  alt="Foto de perfil"
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300 "
                />
                <div className="absolute inset-0 rounded-2xl ring-1 dark:ring-red-500/40 ring-black/40 blur-sm"></div>
              </div>
            </div>
          </div>
            



        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
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
                      className="p-6 rounded-lg border border-black/30 dark:border-red-500/30 bg-gradient-to-br from-black/5 to-black/10 dark:from-red-500/10 dark:to-red-500/10 hover:border-black/60 dark:hover:border-red-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-black dark:hover:shadow-red-500/40"
                    >
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                        <IconComponent className="w-6 h-6 dark:text-red-500 text-black" />
                        {category.name}
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {category.skills.map((skill, skillIdx) => (
                          <span
                            key={skillIdx}
                            className="text-sm px-3 py-1 rounded-full flex items-center gap-2 bg-gradient-to-r from-black/10 to-black/10 dark:from-red-500/20 dark:to-red-400/20 text-black dark:text-accent-foreground border border-black/40 dark:border-red-500/50 hover:border-black hover:from-black/20 hover:to-black/20 dark:hover:border-red-500 dark:hover:from-red-500/30 dark:hover:to-red-400/30 transition-all duration-300 transform hover:scale-105"
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
              <div className="sticky top-24 p-6 rounded-lg border border-black/40 dark:border-red-500/40 bg-gradient-to-br from-black/10 to-black/20 dark:from-red-500/20 dark:to-red-500/30 shadow-xl shadow-black/20 dark:shadow-red-500/20 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 dark:text-white text-black">
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
                        className="text-base px-4 py-2 rounded-full flex items-center gap-2 bg-gradient-to-r border border-black/50 dark:border-red-500/50 hover:border-black dark:hover:border-red-500 from-black/10 to-gray-700/10 dark:from-red-500/10 dark:to-red-400/10 hover:from-black/20 hover:to-gray-800/20 dark:hover:from-red-400/20 dark:hover:to-red-400/20 text-black dark:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-black/40 dark:hover:shadow-red-500/20 group font-semibold shadow-md"
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
  <h2 className="text-3xl md:text-4xl font-bold mb-12">
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
        className="group border-l-4 border-black dark:border-red-500 pl-6 py-4 p-6 -ml-6 rounded-r-lg
          bg-gradient-to-r from-black/5 to-transparent dark:from-red-500/5 dark:to-transparent
          hover:from-black/10 hover:to-black/5 dark:hover:from-red-500/10 dark:hover:to-red-400/5
          transition-all duration-300 card-hover
          transform will-change-transform hover:-translate-y-1"
      >

        {/* LOGO + TEXTO LADO A LADO */}
        <div className="flex items-center gap-6 mb-4 transition-transform duration-300 group-hover:-translate-y-1">

          {/* Logo da empresa */}
          {exp.logo && (
            <img
              src={exp.logo}
              alt={exp.company}
              className="w-20 h-20 rounded-md object-contain"
            />
          )}

          {/* Cargo / Empresa / Período */}
          <div>
            <h3 className="text-xl font-bold dark:text-red-500 text-black">
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
              <span className="dark:text-red-500 text-black mt-1">•</span>
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
                bg-gradient-to-r from-black/10 to-black/10 dark:from-red-500/20 dark:to-red-400/20
                border border-black/40 dark:border-red-500/50
                text-black dark:text-white
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
  <h2 className="text-3xl md:text-4xl font-bold mb-12">
    {educationData[language].title}
  </h2>

  <p className="text-xl text-muted-foreground mb-10">
    {educationData[language].subtitle}
  </p>

  <div className="space-y-10">
    {educationData[language].items.map((item, itemIdx) => (
      <div
        key={itemIdx}
        className="group border-l-4 border-black dark:border-red-500 pl-6 py-4 p-6 -ml-6 rounded-r-lg
          bg-gradient-to-r from-black/5 to-transparent dark:from-red-500/5 dark:to-transparent
          hover:from-black/10 hover:to-black/5 dark:hover:from-red-500/10 dark:hover:to-red-400/5
          transition-all duration-300 card-hover
          transform will-change-transform hover:-translate-y-1"
      >
        <div className="mb-4 transition-transform duration-300 group-hover:-translate-y-1">
          <h3 className="text-xl font-bold dark:text-red-500 text-black">
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
          <h2 className="text-2xl md:text-4xl font-bold flex items-center justify-between mb-12">
            {certificatesData[language].title}
            <a href="/docs/Certificado.rar" download>
              <Button
                variant="outline"
                className="bg-transparent border-black/30 dark:border-red-500/30 hover:bg-black/10 dark:hover:bg-red-500/10 transition-colors duration-300"
              >
                <Award className="w-5 h-5 mr-2" />
                {language === "pt"
                  ? "Download Certificados"
                  : "Download Certificates"}
              </Button>
            </a>
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            {certificatesData[language].subtitle}
          </p>

	          <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {certificatesData[language].items.map((cert, certIdx) => (
	              <div
	                key={certIdx}
	                // Card Design: Compacto, Elegante e com Hover Effect
	                className="relative p-6 rounded-xl border border-black/30 dark:border-red-500/30 bg-gradient-to-br from-black/5 to-black/10 dark:from-red-500/10 dark:to-red-500/10 
	                transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-black/20 dark:hover:shadow-red-500/30 cursor-pointer flex flex-col justify-between h-full"
	                // Ação: Fazer o card inteiro ser clicável para o modal de preview (futura implementação)
	                onClick={() => alert(`Preview do certificado: ${cert.name} (Funcionalidade de Modal a ser implementada)`)}
	              >
	                {/* Conteúdo Principal do Card */}
	                <div>
	                  {/* Badge de Categoria (Micro-informação) */}
	                  <span className="text-xs font-medium px-3 py-1 rounded-full mb-3 inline-flex items-center gap-2 bg-black/10 dark:bg-red-500/20 text-black dark:text-red-400 border border-black/20 dark:border-red-500/30">
	                    {getTechIcon(cert.category)}
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
	                <div className="mt-4 flex justify-between items-center pt-3 border-t border-black/10 dark:border-red-500/10">
	                  {/* Ano (Hierarquia Visual 3) */}
	                  <p className="text-xs font-semibold text-muted-foreground/80">
	                    {cert.year}
	                  </p>
	
	                  {/* Botão de Preview/Download (Ação Primária) */}
	                  <a
	                    href={`/certificates/${cert.file}`}
	                    // Download removido para forçar o modal de preview (melhor UX)
	                    // download
	                    target="_blank"
	                    rel="noopener noreferrer"
	                    className="text-sm font-medium flex items-center gap-1 dark:text-red-500 text-black hover:underline"
	                    onClick={(e) => e.stopPropagation()} // Evita o clique duplo do card
	                  >
	                    Ver Certificado
	                  </a>
	                </div>
	              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
  