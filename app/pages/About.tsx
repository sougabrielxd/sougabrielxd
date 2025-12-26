"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  BookOpen,
  Briefcase,
  Code,
  Cpu,
  Database,
  Download,
  GraduationCap,
  Monitor,
  Server,
  Wrench,
  CheckCircle2,
  Clock,
  MapPin,
  Laptop,
  School,
  Building2,
  Home,
  ExternalLink,
} from "lucide-react";
import { getTechIcon } from "@/lib/techIcons";
import { IoIosArrowForward } from "react-icons/io";
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
    modality: "Presencial",
    location: "Araripina - PE",
    website: "https://starkevision.com.br/",
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
    modality: "Remoto",
    location: null,
    website: "https://gabriellucasafb.com.br/",
    logo: "/companies/x-red.svg",
    description: [
      "I develop responsive websites and UI/UX interfaces focused on usability, aesthetics, and conversion.",
      "I create visual identities and digital materials, while planning strategic content for social media.",
      "I work directly with clients to understand needs and deliver complete, functional digital solutions.",
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
    modality: "Presencial",
    location: "Juazeiro do Norte - CE",
    website: null,
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
    modality: "Híbrido",
    location: "Juazeiro do Norte - CE",
    website: "https://nexti.fapce.edu.br/",
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
    modality: "Remoto",
    location: "Corumbá - MS",
    website: "https://carbon.app.br/",
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

  // Função para calcular duração do período
  const calculateDuration = (period: string, language: "pt" | "en"): string => {
    const isPresent = period.includes("Present") || period.includes("Atual");
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const monthsPT = [
      "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
      "Jul", "Ago", "Set", "Out", "Nov", "Dez"
    ];

    try {
      let startDate: Date;
      let endDate: Date = new Date();

      // Parse do período
      if (period.includes(" - ")) {
        const [startStr, endStr] = period.split(" - ");
        
        // Parse da data de início
        const startParts = startStr.trim().split(" ");
        const startMonthStr = startParts[0];
        const startMonth = language === "pt" 
          ? monthsPT.indexOf(startMonthStr)
          : months.indexOf(startMonthStr);
        
        if (startMonth === -1) return "";
        
        const startYear = parseInt(startParts[1]);
        startDate = new Date(startYear, startMonth, 1);

        // Parse da data de fim
        if (!isPresent) {
          const endParts = endStr.trim().split(" ");
          const endMonthStr = endParts[0];
          const endMonth = language === "pt"
            ? monthsPT.indexOf(endMonthStr)
            : months.indexOf(endMonthStr);
          
          if (endMonth === -1) return "";
          
          const endYear = parseInt(endParts[1]);
          endDate = new Date(endYear, endMonth + 1, 0);
        }
      } else {
        return "";
      }

      // Calcular diferença em meses
      const years = endDate.getFullYear() - startDate.getFullYear();
      const monthsDiff = endDate.getMonth() - startDate.getMonth();
      const daysDiff = endDate.getDate() - startDate.getDate();
      
      let totalMonths = years * 12 + monthsDiff;
      if (daysDiff >= 0) totalMonths += 1;

      if (totalMonths < 1) return "";
      
      const yearsCalc = Math.floor(totalMonths / 12);
      const monthsCalc = totalMonths % 12;

      if (language === "pt") {
        if (yearsCalc > 0 && monthsCalc > 0) {
          return `${yearsCalc} ${yearsCalc === 1 ? "ano" : "anos"} e ${monthsCalc} ${monthsCalc === 1 ? "mês" : "meses"}`;
        } else if (yearsCalc > 0) {
          return `${yearsCalc} ${yearsCalc === 1 ? "ano" : "anos"}`;
        } else {
          return `${monthsCalc} ${monthsCalc === 1 ? "mês" : "meses"}`;
        }
      } else {
        if (yearsCalc > 0 && monthsCalc > 0) {
          return `${yearsCalc} ${yearsCalc === 1 ? "year" : "years"} and ${monthsCalc} ${monthsCalc === 1 ? "month" : "months"}`;
        } else if (yearsCalc > 0) {
          return `${yearsCalc} ${yearsCalc === 1 ? "year" : "years"}`;
        } else {
          return `${monthsCalc} ${monthsCalc === 1 ? "month" : "months"}`;
        }
      }
    } catch (error) {
      return "";
    }
  };

  // Função para verificar se a experiência está ativa
  const isActive = (period: string): boolean => {
    return period.includes("Present") || period.includes("Atual");
  };

  // Função para ordenar experiências (ativas primeiro, depois por data)
  const sortExperiences = (exps: typeof experiences) => {
    return [...exps].sort((a, b) => {
      const aActive = isActive(a.period);
      const bActive = isActive(b.period);
      
      // Ativas primeiro
      if (aActive && !bActive) return -1;
      if (!aActive && bActive) return 1;
      
      // Depois ordenar por data (mais recente primeiro)
      const getDate = (period: string): Date => {
        const parts = period.split(" - ")[0].split(" ");
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = months.indexOf(parts[0]);
        const year = parseInt(parts[1]);
        return new Date(year, month, 1);
      };
      
      return getDate(b.period).getTime() - getDate(a.period).getTime();
    });
  };

  // Ajusta o objeto experiences para usar a linguagem correta e ordena
  const sortedExperiences = sortExperiences(experiences);
  const localizedExperiences = sortedExperiences.map((exp) => ({
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
    
    // Traduções de modalidade
    modality:
      language === "pt"
        ? exp.modality === "Presencial"
          ? "Presencial"
          : exp.modality === "Remoto"
          ? "Remoto"
          : exp.modality === "Híbrido"
          ? "Híbrido"
          : exp.modality
        : exp.modality === "Presencial"
        ? "On-site"
        : exp.modality === "Remoto"
        ? "Remote"
        : exp.modality === "Híbrido"
        ? "Hybrid"
        : exp.modality,
  
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
        : exp.company === "Starke Vision"
        ? [
            "I implement complex automation flows via n8n, integrating CRMs and communication tools such as Chatwoot and EvolutionAPI.",
            "I actively participate in Scrum rituals, collaborating in sprint planning and task organization via agile management.",
            "I manage PostgreSQL databases and cache optimization with Redis to ensure application scalability.",
            "I deploy and manage services using Easypanel.",
            "I develop institutional websites with WordPress for clients, ensuring satisfaction and delivery of complete and functional digital solutions.",
          ]
        : exp.company === "Carboon Cycle"
        ? [
            "I developed responsive and interactive user interfaces for web applications using React and TailwindCSS.",
            "I collaborated with designers and back-end developers to implement complete features, ensuring seamless integration between front-end and back-end.",
            "I actively participated in code reviews and testing to ensure software quality.",
          ]
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
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full">
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

{/* Experience Section */}
<section className="mb-12 sm:mb-16 md:mb-20">
  <div className="text-center mb-6 sm:mb-8 md:mb-10">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-red-500 dark:text-white">
      {language === "pt" ? "Experiência Profissional" : "Professional Experience"}
    </h2>
    <p className="text-lg sm:text-xl text-muted-foreground">
      {language === "pt"
        ? "Minha trajetória no mundo da tecnologia."
        : "My journey in the world of technology."}
    </p>
  </div>

  <div className="space-y-6 sm:space-y-8 md:space-y-10">
    {localizedExperiences.map((exp, expIdx) => (
      <div
        key={expIdx}
        className="group border-l-4 border-red-500 dark:border-red-500 pl-4 sm:pl-6 py-3 sm:py-4 p-4 sm:p-6 -ml-4 sm:-ml-6 rounded-r-lg
          bg-gradient-to-r from-red-500/5 to-transparent dark:from-red-500/5 dark:to-transparent
          hover:from-red-500/10 hover:to-red-500/5 dark:hover:from-red-500/10 dark:hover:to-red-400/5
          transition-all duration-300 card-hover
          transform will-change-transform hover:-translate-y-1"
      >

        {/* LOGO + TEXTO LADO A LADO */}
        <div className="flex items-center gap-3 sm:gap-6 mb-3 sm:mb-4 transition-transform duration-300 group-hover:-translate-y-1">

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
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 sm:gap-3 mb-2 flex-wrap md:flex-nowrap">
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-bold dark:text-red-500 text-red-500 break-words">
                  {exp.role}
                </h3>

                {exp.website ? (
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg font-semibold hover:text-red-500 dark:hover:text-red-400 transition-colors flex items-center gap-2 group/link break-words"
                  >
                    <span className="break-words">{exp.company}</span>
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover/link:opacity-100 transition-opacity flex-shrink-0" />
                  </a>
                ) : (
                  <p className="text-base sm:text-lg font-semibold break-words">
                    {exp.company}
                  </p>
                )}
              </div>

              {/* Badge de Status - Desktop: ao lado, Mobile: abaixo */}
              <div className="w-full md:w-auto md:shrink-0 order-3 md:order-2">
                {isActive(exp.period) ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border bg-green-500/10 dark:bg-green-500/20 text-green-700 dark:text-green-400 border-green-500/30 dark:border-green-500/40">
                    <CheckCircle2 className="w-3 h-3" />
                    {language === "pt" ? "Em andamento" : "In Progress"}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border bg-gray-500/10 dark:bg-gray-500/20 text-gray-700 dark:text-gray-400 border-gray-500/30 dark:border-gray-500/40">
                    <CheckCircle2 className="w-3 h-3" />
                    {language === "pt" ? "Concluído" : "Completed"}
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-2 mt-2">
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Clock className="w-4 h-4 shrink-0" />
                <span>{exp.period}</span>
                {calculateDuration(exp.period, language) && (
                  <span className="text-xs text-muted-foreground/70">
                    ({calculateDuration(exp.period, language)})
                  </span>
                )}
              </p>
              
              {/* Modalidade e Localização */}
              <div className="flex flex-wrap items-center gap-3">
                {exp.modality && (
                  <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                    {exp.modality === "Remoto" || exp.modality === "Remote" ? (
                      <Home className="w-3.5 h-3.5 text-red-500 dark:text-red-400" />
                    ) : exp.modality === "Híbrido" || exp.modality === "Hybrid" ? (
                      <Building2 className="w-3.5 h-3.5 text-red-500 dark:text-red-400" />
                    ) : (
                      <Building2 className="w-3.5 h-3.5 text-red-500 dark:text-red-400" />
                    )}
                    {exp.modality}
                  </span>
                )}
                {exp.location && (
                  <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-red-500 dark:text-red-400" />
                    {exp.location}
                  </span>
                )}
              </div>
            </div>
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


        {/* Certificates Section */}
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
      </div>
    </section>
  );
}
  