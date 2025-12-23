"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Code,
  X,
  User,
  Zap,
  Trophy,
  AlertTriangle,
  Workflow,
  Clock,
} from "lucide-react";
import { useState, useMemo, useEffect } from "react";

// ============================================================
// TYPES & CONSTANTS
// ============================================================

interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  link: string;
  github: string;
  status: string;
  featured: boolean;
  year: number;
  images?: string[];
  role: string;
  challenges: string;
  solutions: string;
  developmentProcess: string;
  results: string;
  noLongerInvolved?: boolean; // Indica se não participa mais do projeto
  metrics?: {
    users?: string;
    performance?: string;
    materials?: string;
    conversion?: string;
    [key: string]: string | undefined;
  };
}

const PLACEHOLDER_IMAGE = "/window.svg";

import { getTechIcon } from "@/lib/techIcons";

// ============================================================
// DATA SECTIONS 
// ============================================================

const projects: Project[] = [
  {
    id: "starke-vision",
    title: "Starke Vision",
    description:
      "Site WordPress institucional com responsividade, performance e integração de marketing digital.",
    fullDescription:
      "A Starke Vision é uma empresa focada em soluções digitais estratégicas com uso de automação e inteligência artificial para otimização de processos, atendimento e geração de resultados para negócios. Atualmente, atuo como Desenvolvedor WordPress na empresa, sendo responsável pela criação, customização e manutenção do site institucional. Desenvolvo e organizo a estrutura das páginas, realizo ajustes de layout e identidade visual, garantindo total responsividade em dispositivos móveis, tablets e desktops. Implemento otimizações de performance incluindo compressão de imagens, lazy loading, minificação de CSS/JS e cache de assets. Trabalho na integração com ferramentas de marketing digital como Google Analytics, Facebook Pixel e sistemas de captação de leads, configurando formulários de contato e integrações com CRMs. Realizo manutenções regulares, atualizações de conteúdo e melhorias contínuas baseadas em métricas de desempenho. O trabalho contribui diretamente para o posicionamento tecnológico e estratégico da marca, garantindo uma presença digital profissional e eficiente.",
    tags: ["WordPress"],
    link: "https://starkevision.com.br/",
    github: "#",
    status: "Em desenvolvimento",
    featured: false,
    year: 2025,
    images: ["https://ik.imagekit.io/o8urkd2xn/starkevision1"],
    role: "Desenvolvedor WordPress",
    challenges: "",
    solutions: "",
    developmentProcess: "Desenvolvimento com WordPress, gestão de projeto.",
    results: "Atualização do Site feita com sucesso.",
  },
  {
    id: "sv-nexus",
    title: "SV Nexus",
    description:
      "Plataforma WordPress para afiliados com páginas otimizadas para conversão, integração de marketing digital e alta performance.",
    fullDescription:
      "A SV Nexus é uma plataforma digital voltada para afiliados e produtores de conteúdo, criada para facilitar a estruturação de páginas web com foco em conversão e performance no marketing digital. No projeto, atuo como Desenvolvedor WordPress, sendo responsável pelo desenvolvimento, customização e manutenção das páginas da plataforma. Desenvolvo templates customizados para diferentes tipos de páginas de afiliados, garantindo alta taxa de conversão através de layouts otimizados, CTAs estratégicos e elementos de urgência. Realizo ajustes na identidade visual, organização da estrutura do site e garantia de responsividade completa em todos os dispositivos. Implemento e configuro funcionalidades essenciais para o negócio, incluindo integração com ferramentas de marketing digital (Google Analytics, Facebook Pixel, Hotjar), sistemas de tracking de conversões, formulários de captura de leads e integração com CRMs. Trabalho em otimizações de performance incluindo cache avançado, CDN, otimização de banco de dados e compressão de assets. Realizo manutenções de segurança, atualizações regulares de plugins e temas, backups automatizados e monitoramento de estabilidade do ambiente. O objetivo do trabalho é entregar uma solução funcional, escalável e alinhada às necessidades do mercado de afiliados, garantindo alta performance e conversão.",
    tags: ["WordPress"],
    link: "https://svnexus.com.br/",
    github: "#",
    status: "Em desenvolvimento",
    featured: true,
    year: 2025,
    images: ["https://ik.imagekit.io/o8urkd2xn/svnexus1"],
    role: "Desenvolvedor WordPress",
    challenges: "",
      solutions: "",
      developmentProcess: "Desenvolvimento com WordPress, gestão de projeto.",
    results: "Atualização do Site feita com sucesso.",
  },
  {
    id: "arcania",
    title: "ArcanIA",
    description:
      "Site WordPress para academia de IA aplicada. Foco em conversão e design moderno sem clichês.",
    fullDescription:
      "Atuo como Desenvolvedor WordPress na concepção e desenvolvimento do site institucional e landing page da ArcanIA, uma formação voltada à aplicação prática de inteligência artificial e automação. O projeto envolve a definição completa da arquitetura de informação, estruturação da landing page orientada à conversão e desenvolvimento de uma interface moderna, clara e responsiva em WordPress. Desenvolvi um design system customizado com componentes reutilizáveis, garantindo consistência visual em todo o site. Implementei seções estratégicas incluindo hero section com call-to-action destacado, apresentação da metodologia e módulos do curso, área de benefícios e diferenciais, tabela comparativa de planos, depoimentos de alunos, FAQ interativo e formulário de inscrição otimizado. Apliquei técnicas avançadas de WordPress incluindo custom post types para gerenciamento de conteúdo, custom fields para flexibilidade, e plugins otimizados para performance. O site apresenta de forma objetiva a proposta da formação, metodologia, módulos, benefícios, planos e conteúdos educacionais, priorizando clareza, performance, acessibilidade e SEO. Implementei otimizações de performance, estrutura semântica HTML5, meta tags apropriadas e schema markup para melhor indexação nos mecanismos de busca.",
    tags: ["WordPress"],
    link: "https://arcania.academy/",
    github: "#",
    status: "Em desenvolvimento",
    featured: false,
    year: 2025,
    images: ["https://ik.imagekit.io/o8urkd2xn/arcarnia1.png"],
    role: "Desenvolvedor WordPress",
    challenges:
    "Assumir a responsabilidade pela atualização da identidade visual da ArcanIA, definindo uma linguagem visual mais clara, moderna e coerente com a proposta da formação. O principal desafio é alinhar estética, clareza educacional e posicionamento técnico, garantindo que o visual comunique aplicação prática de IA sem recorrer a clichês. Além disso, é necessário estruturar uma landing page com grande volume de conteúdo técnico mantendo legibilidade, hierarquia visual e foco em conversão. Transformar um conteúdo técnico sobre IA e automação em uma experiência clara e didática, mantendo foco em conversão, performance e identidade visual, sem recorrer a clichês de tecnologia.",
    solutions:
    "Estruturação de layout modular, hierarquia visual bem definida, uso de componentes reutilizáveis do WordPress, otimizações de SEO on-page e aplicação de boas práticas de UI/UX para garantir responsividade e carregamento eficiente. Garantir que o visual comunique aplicação prática de IA sem recorrer a clichês. Além disso, é necessário estruturar uma landing page com grande volume de conteúdo técnico mantendo legibilidade, hierarquia visual e foco em conversão.",
    developmentProcess: "Desenvolvimento com WordPress, gestão de projeto.",
    results: "Site institucional e landing page lançados com sucesso.",
  },
  {
    id: "conecc",
    title: "Conecc",
    description:
      "Landing page para evento médico CONECC. Desenvolvida com React, TypeScript e TailwindCSS, focada em conversão e UX.",
    fullDescription:
      "Atuei como Desenvolvedor Front-end na criação da landing page institucional para o CONECC (Congresso de Enfermagem e Ciências da Saúde), um evento médico que reúne profissionais e estudantes da área da saúde para atualização científica, troca de experiências e networking. O projeto envolveu o desenvolvimento completo de uma interface moderna, responsiva e otimizada para conversão, utilizando React 18 com TypeScript, Vite como bundler e TailwindCSS para estilização. Desenvolvi componentes reutilizáveis e modulares, garantindo manutenibilidade e escalabilidade do código. Implementei seções estratégicas incluindo hero section com call-to-action destacado, programação do evento com timeline interativa, informações sobre palestrantes e workshops, área de inscrição com formulário validado, mapa de localização integrado e seção de contato. Apliquei técnicas de otimização de performance como code splitting, lazy loading de imagens e componentes, e otimização de assets. O design foi pensado para ser totalmente responsivo, garantindo excelente experiência em dispositivos móveis, tablets e desktops. Implementei animações sutis e transições suaves para melhorar a experiência do usuário, além de garantir acessibilidade seguindo padrões WCAG. O projeto foi desenvolvido com foco em SEO, utilizando meta tags apropriadas, estrutura semântica HTML e otimização de conteúdo para mecanismos de busca. A landing page foi hospedada na Vercel, aproveitando as vantagens de deploy automático e CDN global para performance otimizada.",
    tags: ["React", "TypeScript", "Vite", "TailwindCSS"],
    link: "https://www.conecc.com.br/",
    github: "https://github.com/andrearraesDev/conecc-landing",
    status: "Em desenvolvimento",
    featured: false,
    year: 2025,
    images: ["https://ik.imagekit.io/o8urkd2xn/conecc1"],
    role: "Desenvolvedor Front-end",
    challenges: "Garantir um design moderno e responsivo alinhado à identidade visual do cartório, que é tradicional.",
    solutions: "Utilização de uma paleta de cores sóbria e tipografia moderna, com foco em acessibilidade e performance (React + TailwindCSS).",
    developmentProcess: "Desenvolvimento com React e TailwindCSS, gestão de projeto.",
    results: "Protótipo de alta fidelidade aprovado e desenvolvimento em andamento. Foco em SEO local.",
  },
  {
    id: "cartorio-lcm",
    title: "Cartório Alto Longá",
    description:
      "Site institucional completo com design UI/UX e desenvolvimento Next.js/TypeScript, modernizando a presença digital do cartório.",
    fullDescription:
      "Atuei como UI/UX Designer e Desenvolvedor Front-end na criação completa do site institucional para o Cartório Luciana Carrilho de Moraes Marinho, localizado em Alto Longá, Piauí. O projeto iniciou com a fase de design, onde criei wireframes e protótipos de alta fidelidade no Figma, definindo a arquitetura de informação, hierarquia visual e fluxo de navegação. O desafio principal foi equilibrar modernidade e tradição, criando uma identidade visual que respeitasse a seriedade e confiança esperadas de um cartório, mas com uma estética contemporânea e acessível. Desenvolvi um design system completo com paleta de cores sóbria (tons de azul e cinza), tipografia moderna e legível, e componentes reutilizáveis. Na fase de desenvolvimento, utilizei Next.js 14 com TypeScript para aproveitar recursos como Server-Side Rendering (SSR), otimização automática de imagens e roteamento eficiente. Implementei TailwindCSS para estilização, criando um sistema de design consistente e responsivo. O site inclui seções estratégicas: hero section com apresentação institucional, página de serviços detalhando todos os serviços cartoriais oferecidos, seção sobre a equipe com perfis profissionais, informações de localização com mapa integrado, formulário de contato com validação em tempo real, e área de notícias e atualizações. Implementei otimizações de performance como lazy loading, code splitting automático do Next.js, otimização de imagens com next/image, e compressão de assets. Garanti total responsividade, testando em diversos dispositivos e navegadores. O projeto foi gerenciado via Trello, organizando tarefas em sprints e garantindo entregas incrementais. O site foi hospedado na Vercel, aproveitando integração nativa com GitHub para deploy contínuo. Focamos também em SEO local, otimizando para buscas relacionadas a serviços cartoriais na região de Alto Longá.",
    tags: ["TypeScript", "Next.js", "TailwindCSS"],
    link: "https://cartorio-lcm.vercel.app/",
    github: "https://github.com/sougabrielxd/cartorio-lcm",
    status: "Em desenvolvimento",
    featured: false,
    year: 2025,
    images: ["https://ik.imagekit.io/o8urkd2xn/cartorio-lcm.png"], //"https://ik.imagekit.io/o8urkd2xn/cartorio-lcm2.png"
    role: "UI/UX Designer e Desenvolvedor Front-end",
    challenges: "Garantir um design moderno e responsivo alinhado à identidade visual do cartório, que é tradicional.",
    solutions: "Utilização de uma paleta de cores sóbria e tipografia moderna, com foco em acessibilidade e performance (React + TailwindCSS).",
    developmentProcess: "Design no Figma, desenvolvimento com React e TailwindCSS, gestão de tarefas via Trello.",
    results: "Protótipo de alta fidelidade aprovado e desenvolvimento em andamento. Foco em SEO local.",
  },
  {
    id: "learn-skills",
    title: "Learn Skills",
    description:
      "Plataforma de editora com estante virtual. Full-stack React/Laravel/MySQL com sistema de submissão e leitura de PDFs.",
    fullDescription:
      "Learn Skills é uma plataforma digital de editora online que oferece uma estante virtual de livros e materiais educacionais gratuitos, com foco em tecnologia, programação e saúde. A plataforma permite aos usuários explorar, ler online e submeter seus próprios materiais para publicação. O projeto foi desenvolvido com React 18, Tailwind CSS e Vite no front-end, garantindo performance, responsividade e uma interface moderna. No back-end, foi utilizado Laravel (PHP) para gerenciamento de conteúdo, autenticação e submissão de materiais. No front-end, desenvolvi componentes reutilizáveis com React, implementando hooks customizados para gerenciamento de estado, sistema de roteamento com React Router, e integração com API RESTful. Criei interfaces para estante virtual com sistema de busca e filtros, visualizador de PDFs integrado, formulários de submissão com validação em tempo real, e área administrativa para gerenciamento de conteúdo. No back-end, desenvolvi rotas API RESTful com Laravel, implementei sistema de autenticação JWT, criei migrations e models para estruturação do banco de dados MySQL, desenvolvi controllers para gerenciamento de CRUD de materiais, implementei sistema de upload e armazenamento de arquivos PDF, e criei validações robustas tanto no front quanto no back-end. Entre as principais funcionalidades estão: Estante Virtual com catálogo digital, busca avançada e categorização; Leitura Online com visualizador de PDFs integrado; Submissão de Materiais com workflow de aprovação; Corpo Editorial e FAQ; Design Responsivo adaptável a diferentes dispositivos. Utilizei metodologia Scrum adaptada, Git/GitHub para controle de versão e Postman para testes de API.",
    tags: ["React", "PHP", "Laravel", "MySQL", "TailwindCSS"],
    link: "https://learnskills.com.br",
    github: "#",
    status: "Não participo mais",
    featured: false,
    year: 2025,
    images: ["https://ik.imagekit.io/o8urkd2xn/learnskills3.jpg", "https://ik.imagekit.io/o8urkd2xn/learnskills2.jpg"],
    role: "Desenvolvedor Full-Stack",
    challenges: "Integrar front-end moderno (React/Vite) com back-end em Laravel (PHP) e criar um sistema robusto de submissão de materiais.",
    solutions: "Criação de uma API RESTful para comunicação entre as stacks e implementação de validações de formulário tanto no front quanto no back-end.",
    developmentProcess: "Metodologia Scrum adaptada, utilizando Git/GitHub para controle de versão e Postman para testes de API.",
    results: "Plataforma lançada com sucesso, com mais de 50 materiais submetidos na primeira semana. Melhoria de 30% na velocidade de carregamento da página inicial.",
  },
  {
    id: "cowatch",
    title: "CoWatch",
    description:
      "Plataforma de gestão de rebanho. Contribuição front-end com menu mobile responsivo, portal e páginas de formulários.",
    fullDescription:
      "CoWatch é uma plataforma inovadora de gestão de rebanho que utiliza tecnologia de ponta para monitorar e otimizar a alimentação de cada animal. Com uma interface intuitiva e relatórios detalhados, permite que o usuário tome decisões mais informadas para maximizar a produtividade. Participei do desenvolvimento front-end como colaborador, contribuindo significativamente no projeto. Refatorei completamente o menu mobile (navbar) para garantir total responsividade em diferentes dispositivos, implementando um menu hambúrguer funcional com animações suaves e transições otimizadas. Desenvolvi a seção 'Acessar Portal' do zero, criando um componente isolado e reutilizável que se integra perfeitamente ao layout existente sem quebrar funcionalidades. Colaborei na criação da página de formulários, implementando validação em tempo real, feedback visual para o usuário e tratamento de erros. Utilizei HTML5 semântico, CSS3 moderno com Flexbox e Grid, e JavaScript vanilla para garantir performance e compatibilidade. Trabalhei seguindo as diretrizes do projeto principal, mantendo consistência de código e padrões estabelecidos. As contribuições foram feitas via Pull Requests no GitHub, seguindo boas práticas de versionamento e code review.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://www.cowatch.com.br/",
    github: "#",
    status: "Não participo mais",
    featured: false,
    year: 2024,
    images: ["https://ik.imagekit.io/o8urkd2xn/Cowatch.png", "https://ik.imagekit.io/o8urkd2xn/Cowatch2.png", "https://ik.imagekit.io/o8urkd2xn/Cowatch3.png"],
    role: "Desenvolvedor Front-end Colaborador",
    challenges: "Ajustar a responsividade do menu mobile em um projeto legado e integrar nova seção de acesso ao portal sem quebrar o layout existente.",
    solutions: "Refatoração pontual do CSS do menu mobile e criação de um componente isolado para a seção 'Acessar Portal'.",
    developmentProcess: "Contribuição via Pull Requests no GitHub, seguindo as diretrizes do projeto principal.",
    results: "Menu mobile totalmente responsivo em diferentes dispositivos e nova seção integrada com sucesso.",
  },
  {
    id: "logos",
    title: "Logos",
    description:
      "Landing page freelance para retífica de motores. HTML semântico e TailwindCSS, focada em conversão e SEO.",
    fullDescription:
      "Logos é um projeto freelance de landing page desenvolvido para uma retífica de motores, focando em conversão e apresentação profissional dos serviços oferecidos. O projeto iniciou com briefing detalhado com o cliente para entender necessidades e objetivos. Criei protótipos no Figma definindo a estrutura visual e fluxo de navegação. Desenvolvi a landing page utilizando HTML5 semântico e TailwindCSS, garantindo código limpo, manutenível e acessível. Implementei seções estratégicas incluindo hero section com call-to-action destacado, apresentação dos serviços de retífica, galeria de trabalhos realizados, depoimentos de clientes, formulário de contato com validação e informações de localização. Apliquei técnicas de otimização de performance como compressão de imagens, lazy loading e minificação de assets. O design foi totalmente responsivo, testado em diversos dispositivos para garantir excelente experiência do usuário. Implementei SEO on-page com meta tags apropriadas, estrutura semântica HTML, otimização de títulos e descrições, e schema markup para melhor indexação. A landing page foi hospedada no GitHub Pages, aproveitando hospedagem gratuita e deploy simplificado. O projeto resultou em aumento significativo de contatos via formulário, demonstrando eficácia na conversão de visitantes em leads qualificados.",
    tags: ["HTML", "TailwindCSS"],
    link: "https://sougabrielxd.github.io/logos/",
    github: "https://github.com/sougabrielxd/logos",
    status: "Concluído",
    featured: false,
    year: 2024,
    images: ["https://ik.imagekit.io/o8urkd2xn/logos.png"],
    role: "Desenvolvedor Front-end Freelancer",
    challenges: "Criar uma Landing Page de alta conversão com foco em SEO e performance para um cliente do setor industrial.",
    solutions: "Utilização de HTML semântico e TailwindCSS para um design clean e responsivo, otimização de imagens e uso de meta tags para SEO.",
    developmentProcess: "Briefing com o cliente, prototipação no Figma, desenvolvimento e deploy via GitHub Pages.",
    results: "Landing Page entregue e aprovada. Cliente reportou aumento de 15% nos contatos via formulário na primeira semana.",
  },
];

// ============================================================
// AUXILIARY FUNCTIONS 
// ============================================================

const getStatusColor = (status: string) => {
  switch (status) {
    case "Em produção":
    case "In production":
      return "border-blue-500 text-blue-500 bg-blue-500/10";
    case "Concluído":
    case "Completed":
      return "border-green-500 text-green-500 bg-green-500/10";
    case "Em desenvolvimento":
    case "In development":
      return "border-purple-500 text-purple-600 dark:text-purple-400 bg-purple-500/10 dark:bg-purple-500/10";
    case "Não participo mais":
    case "No longer involved":
      return "border-orange-500 text-orange-600 dark:text-orange-400 bg-orange-500/10 dark:bg-orange-500/10";
    default:
      return "border-gray-500 text-gray-500 bg-gray-500/10";
  }
};

const getInvolvementTagColor = () => {
  return "border-orange-500 text-orange-600 dark:text-orange-400 bg-orange-500/10 dark:bg-orange-500/10";
};

// ============================================================
// PROJECTS COMPONENT 
// ============================================================

export default function Projects() {
  const { language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleOpenProjectModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0); // Reset image index when opening new modal
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden"; // Bloqueia o scroll do body
    }
  };

  const handleCloseProjectModal = () => {
    setSelectedProject(null);
    setIsLightboxOpen(false);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "unset"; // Restaura o scroll do body
    }
  };

  // Fechar modal com tecla ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isLightboxOpen) {
          setIsLightboxOpen(false);
        } else if (selectedProject !== null) {
          handleCloseProjectModal();
        }
      }
    };

    if (selectedProject !== null || isLightboxOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => {
        document.removeEventListener("keydown", handleEscape);
      };
    }
  }, [selectedProject, isLightboxOpen]);
  
  // CSS para esconder a barra de rolagem (solução cross-browser)
  const scrollbarHideStyle = `
    .scrollbar-hide {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }
    .scrollbar-hide::-webkit-scrollbar {
      display: none;  /* Chrome, Safari and Opera */
    }
  `;

  // Localiza os dados do projeto (otimizado com useMemo)
  const localizedProjects: Project[] = useMemo(() => {
    return projects.map((project) => {
    if (language === "en") {
      // Mapeamento manual de tradução para os projetos
      const enProject = { ...project };
      switch (project.id) {
        case "starke-vision":
          enProject.description =
            "WordPress institutional website with responsiveness, performance, and digital marketing integration.";
          enProject.fullDescription =
            "Starke Vision is a company focused on strategic digital solutions using automation and artificial intelligence for process optimization, customer service, and business results generation. Currently, I work as a WordPress Developer at the company, being responsible for creating, customizing, and maintaining the institutional website. I develop and organize page structure, perform layout and visual identity adjustments, ensuring full responsiveness on mobile devices, tablets, and desktops. I implement performance optimizations including image compression, lazy loading, CSS/JS minification, and asset caching. I work on integration with digital marketing tools such as Google Analytics, Facebook Pixel, and lead generation systems, configuring contact forms and CRM integrations. I perform regular maintenance, content updates, and continuous improvements based on performance metrics. The work directly contributes to the brand's technological and strategic positioning, ensuring a professional and efficient digital presence.";
          enProject.status = "In development";
          enProject.role = "WordPress Developer";
          enProject.developmentProcess = "Development with WordPress, project management.";
          enProject.results = "Website update completed successfully.";
          break;
        case "sv-nexus":
          enProject.description =
            "WordPress platform for affiliates with conversion-optimized pages, marketing tools integration, and high performance.";
          enProject.fullDescription =
            "SV Nexus is a digital platform for affiliates and content creators, created to facilitate the structuring of web pages focused on conversion and performance in digital marketing. In the project, I work as a WordPress Developer, being responsible for developing, customizing, and maintaining the platform's pages. I develop custom templates for different types of affiliate pages, ensuring high conversion rates through optimized layouts, strategic CTAs, and urgency elements. I perform visual identity adjustments, website structure organization, and ensure complete responsiveness across all devices. I implement and configure essential business features, including integration with digital marketing tools (Google Analytics, Facebook Pixel, Hotjar), conversion tracking systems, lead capture forms, and CRM integration. I work on performance optimizations including advanced caching, CDN, database optimization, and asset compression. I perform security maintenance, regular plugin and theme updates, automated backups, and environment stability monitoring. The goal of the work is to deliver a functional, scalable solution aligned with the affiliate market needs, ensuring high performance and conversion.";
          enProject.status = "In development";
          enProject.role = "WordPress Developer";
          enProject.developmentProcess = "Development with WordPress, project management.";
          enProject.results = "Website update completed successfully.";
          break;
        case "arcania":
          enProject.description =
            "WordPress site for applied AI academy. Focus on conversion and modern design without clichés.";
          enProject.fullDescription =
            "I work as a WordPress Developer in the conception and development of the institutional website and landing page for ArcanIA, a training program focused on the practical application of artificial intelligence and automation. The project involves complete definition of information architecture, structuring a conversion-oriented landing page, and developing a modern, clear, and responsive interface in WordPress. I developed a custom design system with reusable components, ensuring visual consistency throughout the site. I implemented strategic sections including a hero section with highlighted call-to-action, presentation of course methodology and modules, benefits and differentiators area, plan comparison table, student testimonials, interactive FAQ, and optimized enrollment form. I applied advanced WordPress techniques including custom post types for content management, custom fields for flexibility, and performance-optimized plugins. The website objectively presents the training proposal, methodology, modules, benefits, plans, and educational content, prioritizing clarity, performance, accessibility, and SEO. I implemented performance optimizations, semantic HTML5 structure, appropriate meta tags, and schema markup for better search engine indexing.";
          enProject.status = "In development";
          enProject.role = "WordPress Developer";
          enProject.challenges =
            "Taking responsibility for updating ArcanIA's visual identity, defining a clearer, more modern, and coherent visual language with the training proposal. The main challenge is aligning aesthetics, educational clarity, and technical positioning, ensuring that the visual communicates practical AI application without resorting to clichés. Additionally, it is necessary to structure a landing page with a large volume of technical content while maintaining readability, visual hierarchy, and conversion focus. Transforming technical content about AI and automation into a clear and didactic experience, maintaining focus on conversion, performance, and visual identity, without resorting to technology clichés.";
          enProject.solutions =
            "Structuring a modular layout, well-defined visual hierarchy, use of reusable WordPress components, on-page SEO optimizations, and application of UI/UX best practices to ensure responsiveness and efficient loading. Ensuring that the visual communicates practical AI application without resorting to clichés. Additionally, it is necessary to structure a landing page with a large volume of technical content while maintaining readability, visual hierarchy, and conversion focus.";
          enProject.developmentProcess = "Development with WordPress, project management.";
          enProject.results = "Institutional website and landing page launched successfully.";
          break;
        case "conecc":
          enProject.description =
            "Landing page for CONECC medical event. Built with React, TypeScript, and TailwindCSS, focused on conversion and UX.";
          enProject.fullDescription =
            "I worked as a Front-end Developer in creating the institutional landing page for CONECC (Nursing and Health Sciences Congress), a medical event that brings together healthcare professionals and students for scientific updates, experience exchange, and networking. The project involved the complete development of a modern, responsive, and conversion-optimized interface, using React 18 with TypeScript, Vite as bundler, and TailwindCSS for styling. I developed reusable and modular components, ensuring code maintainability and scalability. I implemented strategic sections including a hero section with highlighted call-to-action, event schedule with interactive timeline, information about speakers and workshops, registration area with validated form, integrated location map, and contact section. I applied performance optimization techniques such as code splitting, lazy loading of images and components, and asset optimization. The design was created to be fully responsive, ensuring excellent experience on mobile devices, tablets, and desktops. I implemented subtle animations and smooth transitions to improve user experience, in addition to ensuring accessibility following WCAG standards. The project was developed with a focus on SEO, using appropriate meta tags, semantic HTML structure, and content optimization for search engines. The landing page was hosted on Vercel, taking advantage of automatic deployment and global CDN for optimized performance.";
          enProject.status = "In development";
          enProject.role = "Front-end Developer";
          enProject.challenges = "Ensuring a modern and responsive design aligned with the notary's visual identity, which is traditional.";
          enProject.solutions = "Using a sober color palette and modern typography, focusing on accessibility and performance (React + TailwindCSS).";
          enProject.developmentProcess = "Development with React and TailwindCSS, project management.";
          enProject.results = "High-fidelity prototype approved and development in progress. Focus on local SEO.";
          break;
        case "cartorio-lcm":
          enProject.description =
            "Complete institutional website with UI/UX design and Next.js/TypeScript development, modernizing notary's digital presence.";
          enProject.fullDescription =
            "I worked as a UI/UX Designer and Front-end Developer in the complete creation of the institutional website for Cartório Luciana Carrilho de Moraes Marinho, located in Alto Longá, Piauí. The project started with the design phase, where I created wireframes and high-fidelity prototypes in Figma, defining information architecture, visual hierarchy, and navigation flow. The main challenge was balancing modernity and tradition, creating a visual identity that respected the seriousness and trust expected from a notary office, but with a contemporary and accessible aesthetic. I developed a complete design system with a sober color palette (shades of blue and gray), modern and readable typography, and reusable components. In the development phase, I used Next.js 14 with TypeScript to take advantage of features such as Server-Side Rendering (SSR), automatic image optimization, and efficient routing. I implemented TailwindCSS for styling, creating a consistent and responsive design system. The website includes strategic sections: hero section with institutional presentation, services page detailing all notary services offered, team section with professional profiles, location information with integrated map, contact form with real-time validation, and news and updates area. I implemented performance optimizations such as lazy loading, automatic code splitting from Next.js, image optimization with next/image, and asset compression. I ensured full responsiveness, testing on various devices and browsers. The project was managed via Trello, organizing tasks in sprints and ensuring incremental deliveries. The website was hosted on Vercel, taking advantage of native GitHub integration for continuous deployment. We also focused on local SEO, optimizing for searches related to notary services in the Alto Longá region.";
          enProject.status = "In development";
          enProject.role = "UI/UX Designer and Front-end Developer";
          enProject.challenges = "Ensuring a modern and responsive design aligned with the notary's visual identity, which is traditional.";
          enProject.solutions = "Using a sober color palette and modern typography, focusing on accessibility and performance (React + TailwindCSS).";
          enProject.developmentProcess = "Design in Figma, development with React and TailwindCSS, task management via Trello.";
          enProject.results = "High-fidelity prototype approved and development in progress. Focus on local SEO.";
          break;
        case "learn-skills":
          enProject.description =
            "Publishing platform with virtual bookshelf. Full-stack React/Laravel/MySQL with submission system and PDF reading.";
          enProject.fullDescription =
            "Learn Skills is a digital online publishing platform that provides a virtual bookshelf of free educational materials and books, focused on technology, programming, and health. It allows users to explore, read online, and submit their own materials for publication. The project was built using React 18, Tailwind CSS, and Vite on the front end to ensure high performance, responsiveness, and a modern user interface. The back end was developed with Laravel (PHP) for content management, authentication, and material submissions. On the front-end, I developed reusable React components, implementing custom hooks for state management, routing system with React Router, and RESTful API integration. I created interfaces for the virtual bookshelf with search and filter system, integrated PDF viewer, submission forms with real-time validation, and administrative area for content management. On the back-end, I developed RESTful API routes with Laravel, implemented JWT authentication system, created migrations and models for MySQL database structure, developed controllers for CRUD management of materials, implemented file upload and PDF storage system, and created robust validations on both front and back-end. Key features include: Virtual Bookshelf with digital catalog, advanced search, and categorization; Online Reading with integrated PDF viewer; Material Submission with approval workflow; Editorial Board & FAQ; Responsive Design adaptable to different devices. I used adapted Scrum methodology, Git/GitHub for version control, and Postman for API testing.";
          enProject.status = "No longer involved";
          break;
        case "cowatch":
          enProject.description =
            "Livestock management platform. Front-end contribution with responsive mobile menu, portal section, and form pages.";
          enProject.fullDescription =
            "CoWatch is an innovative livestock management platform that leverages cutting-edge technology to monitor and optimize the feeding of each animal. With an intuitive interface and detailed reports, it enables users to make data-driven decisions to maximize productivity. I participated in front-end development as a collaborator, making significant contributions to the project. I completely refactored the mobile menu (navbar) to ensure full responsiveness on different devices, implementing a functional hamburger menu with smooth animations and optimized transitions. I developed the 'Access Portal' section from scratch, creating an isolated and reusable component that integrates perfectly with the existing layout without breaking functionalities. I collaborated on creating the form page, implementing real-time validation, visual feedback for users, and error handling. I used semantic HTML5, modern CSS3 with Flexbox and Grid, and vanilla JavaScript to ensure performance and compatibility. I worked following the main project guidelines, maintaining code consistency and established standards. Contributions were made via Pull Requests on GitHub, following versioning best practices and code review.";
          enProject.status = "In production";
          break;
        case "logos":
          enProject.description =
            "Freelance landing page for engine repair company. Semantic HTML and TailwindCSS, focused on conversion and SEO.";
          enProject.fullDescription =
            "Logos is a freelance landing page project developed for an engine repair company, focusing on conversion and professional presentation of services offered. The project started with a detailed briefing with the client to understand needs and objectives. I created prototypes in Figma defining the visual structure and navigation flow. I developed the landing page using semantic HTML5 and TailwindCSS, ensuring clean, maintainable, and accessible code. I implemented strategic sections including a hero section with highlighted call-to-action, presentation of engine repair services, gallery of completed work, client testimonials, contact form with validation, and location information. I applied performance optimization techniques such as image compression, lazy loading, and asset minification. The design was fully responsive, tested on various devices to ensure excellent user experience. I implemented on-page SEO with appropriate meta tags, semantic HTML structure, title and description optimization, and schema markup for better indexing. The landing page was hosted on GitHub Pages, taking advantage of free hosting and simplified deployment. The project resulted in a significant increase in contacts via form, demonstrating effectiveness in converting visitors into qualified leads.";
          enProject.status = "Completed";
          break;
      }
      return enProject;
    }
    return project;
    });
  }, [language]);

  const featuredProject = localizedProjects.find((p) => p.featured);
  const otherProjects = localizedProjects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-red-500 dark:text-white">
          {language === "pt" ? "Projetos" : "Projects"}
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
          {language === "pt"
            ? "Confira alguns dos projetos em que "
            : "Check out some of the projects I've "}
          <span className="text-black dark:text-red-500 font-semibold">
            {language === "pt"
              ? "atuei e contribuí "
              : "worked on and contributed"}
          </span>{" "}
          {language === "pt"
            ? "ao longo da minha trajetória profissional."
            : "to throughout my professional career."}
        </p>

        {/* Featured Project */}
        {featuredProject && (
          <section className="mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-red-500 dark:text-white">
              {language === "pt" ? "Projeto Destaque" : "Featured Project"}
            </h2>
            <div
              className="border border-red-500/50 dark:border-red-500/50 rounded-lg p-4 sm:p-6 md:p-8 
              bg-gradient-to-br dark:from-red-500/10 dark:to-red-400/10 
              dark:hover:border-red-500 dark:hover:from-red-500/20 dark:hover:to-red-400/20
              from-red-500/10 to-red-400/10 hover:border-red-500 hover:from-red-500/20 hover:to-red-400/20
              transition-all duration-300 
              hover:shadow-lg dark:hover:shadow-red-500/20 hover:shadow-black/20
              cursor-pointer"
              onClick={() => handleOpenProjectModal(featuredProject)}
            >
              <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
                <div className="md:w-1/3 flex-shrink-0">
                  <img
                    src={featuredProject.images?.[0] || PLACEHOLDER_IMAGE}
                    alt={featuredProject.title}
                    className="w-full h-40 sm:h-48 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                    {featuredProject.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                    {featuredProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                    {featuredProject.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-3 py-1 rounded-full text-xs flex items-center gap-2 bg-gradient-to-r dark:from-red-500/20 dark:to-red-400/20 border dark:border-red-500/50 dark:hover:border-red-500 text-gray-800 dark:text-white from-red-500/20 to-red-400/20 border-red-500/50 hover:border-red-500 transition-all duration-300"
                      >
                        {getTechIcon(tag)}
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 items-center">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold border ${getStatusColor(
                        featuredProject.status
                      )}`}
                    >
                      {featuredProject.status}
                    </span>
                    {featuredProject.noLongerInvolved && (
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold border flex items-center gap-1.5 ${getInvolvementTagColor()}`}
                      >
                        <Clock className="w-3 h-3" />
                        {language === "pt" ? "Não participo mais" : "No longer involved"}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Other Projects */}
        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-red-500 dark:text-white">
            {language === "pt" ? "Outros Projetos" : "Other Projects"}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {otherProjects.map((project, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-6 rounded-lg border border-red-500/30 dark:border-red-500/30 bg-gradient-to-br from-red-500/10 to-red-400/10 dark:from-red-500/10 dark:to-red-500/10 hover:border-red-500/60 dark:hover:border-red-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 dark:hover:shadow-red-500/10 cursor-pointer"
                onClick={() => handleOpenProjectModal(project)}
              >
                <Image
                  src={project.images?.[0] || PLACEHOLDER_IMAGE}
                  alt={project.title}
                  width={400}
                  height={160}
                  className="w-full h-32 sm:h-40 object-cover rounded-lg mb-3 sm:mb-4 shadow-md"
                  loading="lazy"
                />
                <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 rounded-full text-xs flex items-center gap-2 bg-gradient-to-r dark:from-red-500/20 dark:to-red-400/20 border dark:border-red-500/50 dark:hover:border-red-500 text-gray-800 dark:text-white from-red-500/20 to-red-400/20 border-red-500/50 hover:border-red-500 transition-all duration-300"
                    >
                      {getTechIcon(tag)}
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 items-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                  {project.noLongerInvolved && (
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold border flex items-center gap-1.5 ${getInvolvementTagColor()}`}
                    >
                      <Clock className="w-3 h-3" />
                      {language === "pt" ? "Não participo mais" : "No longer involved"}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div 
          className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-4 transition-opacity duration-300" 
          style={{ opacity: selectedProject ? 1 : 0 }}
          onClick={handleCloseProjectModal}
        >
          <style>{scrollbarHideStyle}</style>
          <div 
            className="bg-background border border-red-500/30 dark:border-red-500/30 rounded-lg max-w-6xl w-full max-h-[95vh] transition-transform duration-300 ease-out relative" 
            style={{ transform: selectedProject ? 'scale(1)' : 'scale(0.95)' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 flex items-center justify-between p-6 border-b border-red-500/10 dark:border-red-500/10 bg-background z-10">
              <h2 className="text-2xl font-bold text-red-500 dark:text-white">{selectedProject.title}</h2>
              <button
                onClick={handleCloseProjectModal}
                className="p-2 hover:bg-black/10 dark:hover:bg-red-500/10 cursor-pointer rounded-lg transition-colors"
                aria-label={language === "pt" ? "Fechar modal" : "Close modal"}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content - Mini Case Study Layout */}
            <div className="p-6 space-y-8 overflow-y-auto max-h-[calc(95vh-6rem)] scrollbar-hide">
              {/* 1. Galeria de Imagens (Hero Section) */}
              <div className="space-y-4">
                <div className="relative h-96 rounded-xl overflow-hidden bg-black/10 dark:bg-red-500/10 shadow-xl">
                  {(() => {
                    const images =
                      selectedProject.images && selectedProject.images.length > 0
                        ? selectedProject.images
                        : [PLACEHOLDER_IMAGE];
                    const currentImage = images[currentImageIndex] || PLACEHOLDER_IMAGE;

                    return (
                      <>
                        <Image
                          src={currentImage}
                          alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                          width={1200}
                          height={384}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                          onClick={() => setIsLightboxOpen(true)}
                          priority
                        />
                        {images.length > 1 && (
                          <>
                            <button
                              onClick={() =>
                                setCurrentImageIndex(
                                  (prev: number) =>
                                    (prev - 1 + images.length) % images.length
                                )
                              }
                              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-300 transform hover:scale-110"
                              aria-label={language === "pt" ? "Imagem anterior" : "Previous image"}
                            >
                              <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                              onClick={() =>
                                setCurrentImageIndex(
                                  (prev: number) => (prev + 1) % images.length
                                )
                              }
                              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-300 transform hover:scale-110"
                              aria-label={language === "pt" ? "Próxima imagem" : "Next image"}
                            >
                              <ChevronRight className="w-6 h-6" />
                            </button>
                          </>
                        )}
                      </>
                    );
                  })()}
                </div>
                {/* Thumbnails */}
                {(() => {
                  const images =
                    selectedProject.images && selectedProject.images.length > 1
                      ? selectedProject.images
                      : [];

                  return (
                    images.length > 1 && (
                      <div className="flex gap-3 overflow-x-auto p-1">
                        {images.map((img: string, idx: number) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`w-24 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                              currentImageIndex === idx
                                ? "border-red-500 shadow-md"
                                : "border-red-500/20 dark:border-red-500/20 hover:border-red-500/50"
                            }`}
                          >
                            <Image
                              src={img || PLACEHOLDER_IMAGE}
                              alt={`Thumbnail ${idx + 1}`}
                              width={96}
                              height={64}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </button>
                        ))}
                      </div>
                    )
                  );
                })()}
              </div>

              {/* 2. Visão Geral e Links */}
              <div className="grid md:grid-cols-3 gap-6 border-b pb-6 border-red-500/10 dark:border-red-500/10">
                {/* Coluna 1: Papel e Status */}
                <div className="space-y-4">
                  {/* Papel */}
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-100/50 dark:bg-gray-800/50 border border-red-500/10 dark:border-red-500/10">
                    <User className="w-5 h-5 text-red-500" />
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">
                        {language === "pt" ? "Meu Papel" : "My Role"}
                      </p>
                      <p className="font-semibold">{selectedProject.role}</p>
                    </div>
                  </div>
                  {/* Status */}
                  <div className="flex flex-col gap-2 p-3 rounded-lg bg-gray-100/50 dark:bg-gray-800/50 border border-red-500/10 dark:border-red-500/10">
                    <div className="flex items-center gap-3">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold border ${getStatusColor(
                          selectedProject.status
                        )}`}
                      >
                        {selectedProject.status}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {selectedProject.year}
                      </span>
                    </div>
                    {selectedProject.noLongerInvolved && (
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold border flex items-center gap-1.5 w-fit ${getInvolvementTagColor()}`}
                      >
                        <Clock className="w-3 h-3" />
                        {language === "pt" ? "Não participo mais" : "No longer involved"}
                      </span>
                    )}
                  </div>
                </div>

                {/* Coluna 2 & 3: Tecnologias e Links */}
                <div className="md:col-span-2 space-y-4">
                  {/* Tecnologias */}
                  <div>
                    <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <Code className="w-5 h-5 text-red-500" />
                      {language === "pt"
                        ? "Tecnologias Utilizadas"
                        : "Technologies Used"}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag: string, idx: number) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full text-xs flex items-center gap-2 bg-gradient-to-r dark:from-red-500/20 dark:to-red-400/20 border dark:border-red-500/50 dark:hover:border-red-500 text-gray-800 dark:text-white from-red-500/20 to-red-400/20 border-red-500/50 hover:border-red-500 transition-all duration-300"
                        >
                          {getTechIcon(tag)}
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-2">
                    {selectedProject.link && selectedProject.link !== "#" && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <button className="w-full px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-md">
                          <ExternalLink className="w-4 h-4" />
                          {language === "pt" ? "Ver Projeto" : "View Project"}
                        </button>
                      </a>
                    )}
                    {selectedProject.github && selectedProject.github !== "#" && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button 
                          className="px-4 py-2 rounded-lg border border-red-500/30 cursor-pointer dark:border-red-500/30 hover:bg-red-500/10 dark:hover:bg-red-500/10 transition-colors shadow-md"
                          aria-label={language === "pt" ? "Ver código no GitHub" : "View code on GitHub"}
                        >
                          <Github className="w-4 h-4 text-gray-800 dark:text-white" />
                        </button>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* 3. Visão Geral (Full Description) */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <User className="w-6 h-6 text-red-500" />
                  {language === "pt" ? "Visão Geral do Projeto" : "Project Overview"}
                </h2>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {selectedProject.fullDescription}
                </p>
              </section>

              {/* 4. Desafios e Soluções (Core Case Study) */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Desafios */}
                <section className="space-y-4 p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                  <h2 className="text-xl font-bold flex items-center gap-2 text-yellow-600 dark:text-yellow-400">
                    <AlertTriangle className="w-5 h-5" />
                    {language === "pt" ? "Desafios" : "Challenges"}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {selectedProject.challenges}
                  </p>
                </section>

                {/* Soluções */}
                <section className="space-y-4 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                  <h2 className="text-xl font-bold flex items-center gap-2 text-green-600 dark:text-green-400">
                    <Zap className="w-5 h-5" />
                    {language === "pt" ? "Soluções Implementadas" : "Solutions Implemented"}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {selectedProject.solutions}
                  </p>
                </section>
              </div>

              {/* 5. Processo de Desenvolvimento */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <Workflow className="w-6 h-6 text-red-500" />
                  {language === "pt" ? "Processo de Desenvolvimento" : "Development Process"}
                </h2>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {selectedProject.developmentProcess}
                </p>
              </section>

              {/* 6. Métricas (se disponível) */}
              {selectedProject.metrics && Object.keys(selectedProject.metrics).length > 0 && (
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold flex items-center gap-2">
                    <Trophy className="w-6 h-6 text-red-500" />
                    {language === "pt" ? "Métricas de Impacto" : "Impact Metrics"}
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {Object.entries(selectedProject.metrics).map(([key, value]) => (
                      value && (
                        <div
                          key={key}
                          className="p-4 rounded-lg bg-gradient-to-br from-red-500/10 to-red-400/10 border border-red-500/20"
                        >
                          <p className="text-2xl font-bold text-red-500">{value}</p>
                          <p className="text-sm text-muted-foreground capitalize">
                            {key === "users" && (language === "pt" ? "Usuários" : "Users")}
                            {key === "performance" && (language === "pt" ? "Performance" : "Performance")}
                            {key === "materials" && (language === "pt" ? "Materiais" : "Materials")}
                            {key === "conversion" && (language === "pt" ? "Conversão" : "Conversion")}
                            {!["users", "performance", "materials", "conversion"].includes(key) && key}
                          </p>
                        </div>
                      )
                    ))}
                  </div>
                </section>
              )}

              {/* 7. Resultados */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-red-500" />
                  {language === "pt" ? "Resultados e Impacto" : "Results and Impact"}
                </h2>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {selectedProject.results}
                </p>
              </section>
            </div>
            
            {/* Scroll Fade-out Indicator */}
            <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none rounded-b-lg bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
          </div>

          {/* Lightbox Overlay */}
          {isLightboxOpen && (
            <div
              className="fixed inset-0 z-[10000] bg-black/90 flex items-center justify-center p-4"
              onClick={() => setIsLightboxOpen(false)}
            >
              {(() => {
                const images =
                  selectedProject.images && selectedProject.images.length > 0
                    ? selectedProject.images
                    : [PLACEHOLDER_IMAGE];
                const currentImage = images[currentImageIndex] || PLACEHOLDER_IMAGE;

                const handlePrev = (event: React.MouseEvent) => {
                  event.stopPropagation();
                  setCurrentImageIndex(
                    (prev) => (prev - 1 + images.length) % images.length
                  );
                };

                const handleNext = (event: React.MouseEvent) => {
                  event.stopPropagation();
                  setCurrentImageIndex(
                    (prev) => (prev + 1) % images.length
                  );
                };

                const handleClose = (event: React.MouseEvent) => {
                  event.stopPropagation();
                  setIsLightboxOpen(false);
                };

                return (
                  <div 
                    className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={handleClose}
                      className="absolute top-4 right-4 p-2 rounded-full bg-black/70 hover:bg-black/90 text-white transition-colors"
                      aria-label={language === "pt" ? "Fechar lightbox" : "Close lightbox"}
                    >
                      <X className="w-6 h-6" />
                    </button>
                    {images.length > 1 && (
                      <button
                        onClick={handlePrev}
                        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-black/90 text-white transition-all duration-300 transform hover:scale-110"
                        aria-label={language === "pt" ? "Imagem anterior" : "Previous image"}
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                    )}
                    <Image
                      src={currentImage}
                      alt={`${selectedProject.title} - lightbox`}
                      width={1920}
                      height={1080}
                      className="max-h-[90vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
                      priority
                    />
                    {images.length > 1 && (
                      <button
                        onClick={handleNext}
                        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-black/90 text-white transition-all duration-300 transform hover:scale-110"
                        aria-label={language === "pt" ? "Próxima imagem" : "Next image"}
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    )}
                  </div>
                );
              })()}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
