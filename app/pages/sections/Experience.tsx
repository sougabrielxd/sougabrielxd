"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { CheckCircle2, Clock, MapPin, Home, Building2, ExternalLink } from "lucide-react";
import { getTechIcon } from "@/lib/techIcons";

const experiences = [
  {
    company: "Starke Vision",
    role: "AI Systems Developer",
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
    role: "Full-Stack Developer",
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

export default function Experience() {
  const { language } = useLanguage();

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
          : exp.role === "Full-Stack Developer"
          ? "Desenvolvedor Full-Stack"
          : exp.role === "Desenvolvedor de Sistemas de IA"
          ? "Desenvolvedor de Sistemas de IA"
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
  );
}
