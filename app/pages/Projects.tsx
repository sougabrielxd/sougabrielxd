"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Code,
  X,
} from "lucide-react";
import { ReactNode, useState } from "react";
import { FaVuejs } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
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
    ShadcnUI: <SiShadcnui className="w-4 h-4" />,
  };

  return iconMap[tech] || <Code className="w-4 h-4 text-gray-400" />;
};

// ============================================================
// DATA SECTIONS (Extraído de Home.tsx)
// ============================================================

const projects = [
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
    status: "Em desenvolvimento",
    featured: false,
    year: 2025,
    images: ["https://ik.imagekit.io/o8urkd2xn/learnskills3.jpg", "https://ik.imagekit.io/o8urkd2xn/learnskills2.jpg"],
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
    status: "Em produção",
    featured: true,
    year: 2024,
    images: ["https://ik.imagekit.io/o8urkd2xn/Cowatch.png", "https://ik.imagekit.io/o8urkd2xn/Cowatch2.png", "https://ik.imagekit.io/o8urkd2xn/Cowatch3.png"],
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
  },
];

// ============================================================
// AUXILIARY FUNCTIONS (Extraído de Home.tsx)
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
      return "border-yellow-500 text-yellow-500 bg-yellow-500/10";
    default:
      return "border-gray-500 text-gray-500 bg-gray-500/10";
  }
};

// ============================================================
// PROJECTS COMPONENT (Extraído de Home.tsx)
// ============================================================

export default function Projects() {
  const { language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleOpenProjectModal = (project: any) => {
    setSelectedProject(project);
    setCurrentImageIndex(0); // Reset image index when opening new modal
  };

  const handleCloseProjectModal = () => {
    setSelectedProject(null);
  };

  // Localiza os dados do projeto
  const localizedProjects = projects.map((project) => {
    if (language === "en") {
      // Mapeamento manual de tradução para os projetos
      const enProject = { ...project };
      switch (project.id) {
        case "learn-skills":
          enProject.description =
            "Learn Skills is a digital publishing platform offering a virtual bookshelf with free educational materials focused on technology, programming, and health.";
          enProject.fullDescription =
            "Learn Skills is a digital online publishing platform that provides a virtual bookshelf of free educational materials and books, focused on technology, programming, and health. It allows users to explore, read online, and submit their own materials for publication.The project was built using React 18, Tailwind CSS, and Vite on the front end to ensure high performance, responsiveness, and a modern user interface. he back end was developed with Laravel (PHP) for content management, authentication, and material submissions. key features include: Virtual Bookshelf: digital catalog with books and educational materials; Online Reading: integrated PDF viewer; Material Submission: system for authors to submit their works; Editorial Board & FAQ: team information and user support; Responsive Design: adaptable layout across devices. I worked as a full-stack developer, contributing to both the front-end (components, layout, and UX improvements) and the back-end, including route handling, database integration, and submission validation.";
          enProject.status = "In production";
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

  const featuredProject = localizedProjects.find((p) => p.featured);
  const otherProjects = localizedProjects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {language === "pt" ? "Projetos" : "Projects"}
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          {language === "pt"
            ? "Confira alguns dos projeto em que "
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
            <h2 className="text-2xl font-bold mb-6">
              {language === "pt" ? "Projeto Destaque" : "Featured Project"}
            </h2>
            <div
              className="border border-black dark:border-red-500/50 rounded-lg p-8 
              bg-gradient-to-br dark:from-red-500/10 dark:to-red-400/10 
              dark:hover:border-red-500 dark:hover:from-red-500/20 dark:hover:to-red-400/20
              from-black/5
              transition-all duration-300 
              hover:shadow-lg dark:hover:shadow-red-500/20 hover:shadow-black/20
              cursor-pointer"
              onClick={() => handleOpenProjectModal(featuredProject)}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 flex-shrink-0">
                  <img
                    src={featuredProject.images[0]}
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
                        className="px-3 py-1 rounded-full text-xs flex items-center gap-2 bg-gradient-to-r dark:from-red-500/20 dark:to-red-400/20 border dark:border-red-500/50 dark:hover:border-red-500 text-black dark:text-white from-gray-700/20 to-black/20 border-black/50 hover:border-black transition-all duration-300"
                      >
                        {getTechIcon(tag)}
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold border ${getStatusColor(
                      featuredProject.status
                    )}`}
                  >
                    {featuredProject.status}
                  </span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Other Projects */}
        <section>
          <h2 className="text-2xl font-bold mb-6">
            {language === "pt" ? "Outros Projetos" : "Other Projects"}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg border border-black/30 dark:border-red-500/30 bg-gradient-to-br from-black/5 to-black/10 dark:from-red-500/10 dark:to-red-500/10 hover:border-black/60 dark:hover:border-red-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-red-500/10 cursor-pointer"
                onClick={() => handleOpenProjectModal(project)}
              >
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-lg mb-4 shadow-md"
                />
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 rounded-full text-xs flex items-center gap-2 bg-gradient-to-r dark:from-red-500/20 dark:to-red-400/20 border dark:border-red-500/50 dark:hover:border-red-500 text-black dark:text-white from-gray-700/20 to-black/20 border-black/50 hover:border-black transition-all duration-300"
                    >
                      {getTechIcon(tag)}
                      {tag}
                    </span>
                  ))}
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(
                    project.status
                  )}`}
                >
                  {project.status}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-background border border-black/30 dark:border-red-500/30 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 flex items-center justify-between p-6 border-b border-black/10 dark:border-red-500/10 bg-background">
              <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
              <button
                onClick={handleCloseProjectModal}
                className="p-2 hover:bg-black/10 dark:hover:bg-red-500/10 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Image Gallery */}
              <div className="space-y-4 ">
                <div className="relative h-96 rounded-lg overflow-hidden bg-black/10 dark:bg-red-500/10">
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover "
                  />
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={() =>
                          setCurrentImageIndex(
                            (prev) =>
                              (prev - 1 + selectedProject.images.length) %
                              selectedProject.images.length
                          )
                        }
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-300 transform hover:scale-110"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={() =>
                          setCurrentImageIndex(
                            (prev) => (prev + 1) % selectedProject.images.length
                          )
                        }
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-300 transform hover:scale-110"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  )}
                </div>
                {selectedProject.images.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto">
                    {selectedProject.images.map((img: string, idx: number) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                          currentImageIndex === idx
                            ? "border-red-500"
                            : "border-black/20 dark:border-red-500/20 hover:border-black dark:hover:border-red-500"
                        }`}
                      >
                        <img
                          src={img}
                          alt={`Thumbnail ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Status & Details */}
              <div className="flex items-center gap-4">
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

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  {language === "pt" ? "Descrição" : "Description"}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedProject.fullDescription}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  {language === "pt"
                    ? "Tecnologias Utilizadas"
                    : "Technologies Used"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs flex items-center gap-2 bg-gradient-to-r dark:from-red-500/20 dark:to-red-400/20 border dark:border-red-500/50 dark:hover:border-red-500 text-black dark:text-white from-gray-700/20 to-black/20 border-black/50 hover:border-black transition-all duration-300"
                    >
                      {getTechIcon(tag)}
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <button className="w-full px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    {language === "pt" ? "Ver Projeto" : "View Project"}
                  </button>
                </a>
                {selectedProject.github !== "#" && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="px-4 py-2 rounded-lg border border-black/20 dark:border-red-500/30 hover:bg-black/5 dark:hover:bg-red-500/10 transition-colors">
                      <Github className="w-4 h-4" />
                    </button>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
