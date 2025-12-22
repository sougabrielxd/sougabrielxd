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
import { useState, useMemo } from "react";

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
      "Em desenvolvimento",
    fullDescription:
      "",
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
      "Em desenvolvimento",
    fullDescription:
      "",
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
      "Site da ArcanIA, uma academia focada em IA aplicada e automação inteligente.",
    fullDescription:
      "Atuei como Desenvolvedor WordPress na concepção e desenvolvimento do site institucional e landing page da ArcanIA, uma formação voltada à aplicação prática de inteligência artificial e automação. O projeto envolveu a definição da arquitetura de informação, estruturação da landing page orientada à conversão e desenvolvimento de uma interface moderna, clara e responsiva em WordPress. O site apresenta de forma objetiva a proposta da formação, metodologia, módulos, benefícios, planos e conteúdos educacionais, priorizando clareza, performance, acessibilidade e SEO.",
    tags: ["WordPress"],
    link: "https://arcania.academy/",
    github: "#",
    status: "Em desenvolvimento",
    featured: false,
    year: 2025,
    images: ["https://ik.imagekit.io/o8urkd2xn/arcarnia1.png"],
    role: "Desenvolvedor WordPress",
    challenges:
    "Assumir a responsabilidade pela atualização da identidade visual da ArcanIA, definindo uma linguagem visual mais clara, moderna e coerente com a proposta da formação. No início, o principal desafio foi alinhar estética, clareza educacional e posicionamento técnico, garantindo que o visual comunicasse aplicação prática de IA sem recorrer a clichês. Além disso, foi necessário estruturar uma landing page com grande volume de conteúdo técnico mantendo legibilidade, hierarquia visual e foco em conversão. Transformar um conteúdo técnico sobre IA e automação em uma experiência clara e didática, mantendo foco em conversão, performance e identidade visual, sem recorrer a clichês de tecnologia.",
    solutions:
    "Estruturação de layout modular, hierarquia visual bem definida, uso de componentes reutilizáveis do WordPress, otimizações de SEO on-page e aplicação de boas práticas de UI/UX para garantir responsividade e carregamento eficiente. Garantir que o visual comunicasse aplicação prática de IA sem recorrer a clichês. Além disso, foi necessário estruturar uma landing page com grande volume de conteúdo técnico mantendo legibilidade, hierarquia visual e foco em conversão.",
    developmentProcess: "Desenvolvimento com WordPress, gestão de projeto.",
    results: "Site institucional e landing page lançados com sucesso.",
  },
  {
    id: "conecc",
    title: "Conecc",
    description:
      "Em desenvolvimento",
    fullDescription:
      "Atuei como Desenvolvedor Front-end na criação do site institucional para o Conecc. O projeto envolveu a concepção de um design moderno e responsivo, alinhado à identidade visual do Conecc, utilizando React e TailwindCSS para garantir uma experiência de usuário fluida e acessível em diversos dispositivos. O site apresenta informações essenciais sobre os serviços oferecidos, equipe, localização e contato, facilitando o acesso dos usuários às informações do evento. O CONECC é um evento médico que reúne profissionais e estudantes da área da saúde para atualização científica, troca de experiências e networking. Esta landing page apresenta todas as informações do evento de forma clara, acessível e otimizada para conversão.",
    tags: ["React", "TypeScript", "Vite", "TailwindCSS"],
    link: "conecc-landing-wine.vercel.app",
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
      "Em desenvolvimento",
    fullDescription:
      "Atuei como UI/UX Designer e Desenvolvedor Front-end na criação do site institucional para o Cartório Luciana Carrilho de Moraes Marinho. O projeto envolveu a concepção de um design moderno e responsivo, alinhado à identidade visual do cartório, utilizando React e TailwindCSS para garantir uma experiência de usuário fluida e acessível em diversos dispositivos. O site apresenta informações essenciais sobre os serviços oferecidos, equipe, localização e contato, facilitando o acesso dos usuários às informações do cartório.",
    tags: ["TypeScript", "Next.js", "TailwindCSS"],
    link: "#",
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
      "O Learn Skills é uma plataforma digital de editora que oferece uma estante virtual de livros e materiais educacionais gratuitos, com foco em tecnologia, programação e saúde.",
    fullDescription:
      "Learn Skills é uma plataforma digital de editora online que oferece uma estante virtual de livros e materiais educacionais gratuitos, com foco em tecnologia, programação e saúde. A plataforma permite aos usuários explorar, ler online e submeter seus próprios materiais para publicação. O projeto foi desenvolvido com React 18, Tailwind CSS e Vite no front-end, garantindo performance, responsividade e uma interface moderna. No back-end, foi utilizado Laravel (PHP) para gerenciamento de conteúdo, autenticação e submissão de materiais. Entre as principais funcionalidades estão:Estante Virtual: catálogo digital com livros e materiais educacionais;Leitura Online: visualização de PDFs diretamente na plataforma; Submissão de Materiais: sistema para autores enviarem seus trabalhos; Corpo Editorial e FAQ: informações sobre a equipe e suporte; Design Responsivo: interface adaptável a diferentes dispositivos. Atuei como desenvolvedor full-stack, contribuindo tanto na implementação do front-end (componentes, layout e usabilidade) quanto no desenvolvimento do back-end, incluindo rotas, integração com o banco de dados e validações de submissões.",
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
      "Revolucione a gestão do seu rebanho com o CoWatch. Monitore a alimentação de cada animal com precisão, otimize sua produção e maximize seus lucros.",
    fullDescription:
      "CoWatch é uma plataforma inovadora de gestão de rebanho que utiliza tecnologia de ponta para monitorar e otimizar a alimentação de cada animal. Com uma interface intuitiva e relatórios detalhados, permite que o usuário tome decisões mais informadas para maximizar a produtividade. Participei do desenvolvimento front-end, contribuindo na ajuste da responsividade do menu mobile (navbar) e na adição da seção “Acessar Portal”. Também colaborei na criação da página de formulários do site e pretendo continuar contribuindo em futuras melhorias do projeto.",
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
      "Freelance de uma Landing Page para uma retífica de motores.",
    fullDescription:
      "Logos é um projeto freelance de landing page desenvolvido para uma retífica de motores. A página foi criada com foco em conversão e apresentação profissional dos serviços oferecidos. Utilizando HTML e TailwindCSS, a landing page oferece um design moderno, responsivo e otimizado para SEO, garantindo uma excelente experiência do usuário em todos os dispositivos.",
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
    if (typeof document !== "undefined") {
      document.body.style.overflow = "unset"; // Restaura o scroll do body
    }
  };
  
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
        case "learn-skills":
          enProject.description =
            "Learn Skills is a digital publishing platform offering a virtual bookshelf with free educational materials focused on technology, programming, and health.";
          enProject.fullDescription =
            "Learn Skills is a digital online publishing platform that provides a virtual bookshelf of free educational materials and books, focused on technology, programming, and health. It allows users to explore, read online, and submit their own materials for publication.The project was built using React 18, Tailwind CSS, and Vite on the front end to ensure high performance, responsiveness, and a modern user interface. he back end was developed with Laravel (PHP) for content management, authentication, and material submissions. key features include: Virtual Bookshelf: digital catalog with books and educational materials; Online Reading: integrated PDF viewer; Material Submission: system for authors to submit their works; Editorial Board & FAQ: team information and user support; Responsive Design: adaptable layout across devices. I worked as a full-stack developer, contributing to both the front-end (components, layout, and UX improvements) and the back-end, including route handling, database integration, and submission validation.";
          enProject.status = "No longer involved";
          break;
        case "cowatch":
          enProject.description =
            "Revolutionize your herd management with CoWatch. Monitor each animal's feeding precisely, optimize your production, and maximize profits.";
          enProject.fullDescription =
            "CoWatch is an innovative livestock management platform that leverages cutting-edge technology to monitor and optimize the feeding of each animal. With an intuitive interface and detailed reports, it enables users to make data-driven decisions to maximize productivity. I contributed to the front-end development, working on improving the mobile navbar responsiveness and adding the “Access Portal” section. I also helped build the form page of the website and plan to continue contributing to future improvements of the project.";
          enProject.status = "In production";
          break;
        case "logos":
          enProject.description =
            "Freelance Landing Page for an engine repair company.";
          enProject.fullDescription =
            "Logos is a freelance landing page project developed for an engine repair company. The page was created with a focus on conversion and professional presentation of services offered. Using HTML and TailwindCSS, the landing page offers a modern, responsive design optimized for SEO, ensuring an excellent user experience on all devices.";
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
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-red-500 dark:text-white">
          {language === "pt" ? "Projetos" : "Projects"}
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
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
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-6 text-red-500 dark:text-white">
              {language === "pt" ? "Projeto Destaque" : "Featured Project"}
            </h2>
            <div
              className="border border-red-500/50 dark:border-red-500/50 rounded-lg p-8 
              bg-gradient-to-br dark:from-red-500/10 dark:to-red-400/10 
              dark:hover:border-red-500 dark:hover:from-red-500/20 dark:hover:to-red-400/20
              from-red-500/10 to-red-400/10 hover:border-red-500 hover:from-red-500/20 hover:to-red-400/20
              transition-all duration-300 
              hover:shadow-lg dark:hover:shadow-red-500/20 hover:shadow-black/20
              cursor-pointer"
              onClick={() => handleOpenProjectModal(featuredProject)}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 flex-shrink-0">
                  <img
                    src={featuredProject.images?.[0] || PLACEHOLDER_IMAGE}
                    alt={featuredProject.title}
                    className="w-full h-48 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-3xl font-bold mb-2">
                    {featuredProject.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {featuredProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
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
          <h2 className="text-2xl font-bold mb-6 text-red-500 dark:text-white">
            {language === "pt" ? "Outros Projetos" : "Other Projects"}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg border border-red-500/30 dark:border-red-500/30 bg-gradient-to-br from-red-500/10 to-red-400/10 dark:from-red-500/10 dark:to-red-500/10 hover:border-red-500/60 dark:hover:border-red-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 dark:hover:shadow-red-500/10 cursor-pointer"
                onClick={() => handleOpenProjectModal(project)}
              >
                <Image
                  src={project.images?.[0] || PLACEHOLDER_IMAGE}
                  alt={project.title}
                  width={400}
                  height={160}
                  className="w-full h-40 object-cover rounded-lg mb-4 shadow-md"
                  loading="lazy"
                />
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
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
        <div className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-4 transition-opacity duration-300" style={{ opacity: selectedProject ? 1 : 0 }}>
          <style>{scrollbarHideStyle}</style>
          <div className="bg-background border border-red-500/30 dark:border-red-500/30 rounded-lg max-w-6xl w-full max-h-[95vh] transition-transform duration-300 ease-out relative" style={{ transform: selectedProject ? 'scale(1)' : 'scale(0.95)' }}>
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
                  <div className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center">
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
