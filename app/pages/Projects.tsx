import { Briefcase, Moon, Sun, Code, Award, BookOpen, Database, Monitor, Server, Wrench, Zap, Globe as GlobeIcon, FileText, Cpu, GitBranch, Globe, Menu, Star, X, ChevronLeft, ChevronRight, ExternalLink, Github, } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect, ReactNode } from "react";
import { SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiNodedotjs, SiMysql, SiMongodb, SiPhp, SiPython, SiLaravel, SiPostgresql, SiGit, SiGithub, SiGitlab, SiVite, SiDocker,SiPostman, SiVercel, SiFigma, SiJira, SiWordpress, SiFlask, SiDjango, SiHtml5, SiCss3, SiShadcnui, SiN8N, } from "react-icons/si";
import { FaVuejs } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import Particles from "@/components/Particles";

export default function Projects() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const getTechIcon = (tech: string) => {
    const iconMap: Record<string, ReactNode> = {

      JavaScript: <SiJavascript className="w-4 h-4 text-yellow-400" />,
      TypeScript: <SiTypescript className="w-4 h-4 text-blue-500" />,
      React: <SiReact className="w-4 h-4 text-sky-500" />,
      "React.js": <SiReact className="w-4 h-4 text-sky-500" />,
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

      MySQL: <GrMysql  className="w-4 h-4 text-blue-600" />,
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
      "VS Code": <VscVscode className="w-4 h-4 text-blue-500 "/>,
      N8n: <SiN8N className="w-4 h-4 text-pink-400" />,

      HTML: <SiHtml5 className="w-4 h-4 text-orange-500" />,
      CSS: <SiCss3 className="w-4 h-4 text-blue-400" />,
      "UI/UX": <Monitor className="w-4 h-4" />,
      "Desenvolvimento Web": <Code className="w-4 h-4" />,
      "Web Development": <Code className="w-4 h-4" />,
      "Gestão de Projetos": <AiOutlineFundProjectionScreen className="w-4 h-4" />,
      "Project management": <AiOutlineFundProjectionScreen className="w-4 h-4" />,
      "Serviços de TI": <Server className="w-4 h-4" />,
      "IT Services": <Server className="w-4 h-4" />,
      "Manutenção de computadores": <Cpu className="w-4 h-4"/>,
      "Computer Maintenance": <Cpu className="w-4 h-4" />,
      "Suporte técnico": <Wrench className="w-4 h-4" />,
      "Technical Support": <Wrench className="w-4 h-4" />,
      "Engenharia de Prompt": <Code className="w-4 h-4 dark:text-purple-500 text-purple-950" />,
      "Prompt Engineering": <Code className="w-4 h-4 dark:text-purple-500 text-purple-950" />,
      "Automação de Processos": <Code className="w-4 h-4 dark:text-pink-400 text-black " />,
      "Process Automation": <Code className="w-4 h-4 dark:text-pink-400 text-black " />,
      ShadcnUI: <SiShadcnui className="w-4 h-4" />,
    };

    return iconMap[tech] || <Code className="w-4 h-4 text-gray-400" />;
  };


  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 768) {
        if (window.scrollY > lastScrollY) {
          setIsVisible(false);
          setIsOpen(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const projects = [
    {
      title: "CoWatch",
      description: language === "pt"
        ? "Revolucione a gestão do seu rebanho com o CoWatch. Monitore a alimentação de cada animal com precisão, otimize sua produção e maximize seus lucros."
        : "Revolutionize your herd management with CoWatch. Monitor each animal's feeding precisely, optimize your production, and maximize profits.",
      fullDescription: language === "pt"
        ? "CoWatch é uma plataforma inovadora de gestão de rebanho que utiliza tecnologia de ponta para monitorar e otimizar a alimentação de cada animal. Com uma interface intuitiva e relatórios detalhados, permite que o usuário tome decisões mais informadas para maximizar a produtividade. Participei do desenvolvimento front-end, contribuindo na ajuste da responsividade do menu mobile (navbar) e na adição da seção “Acessar Portal”. Também colaborei na criação da página de formulários do site e pretendo continuar contribuindo em futuras melhorias do projeto."
        : "CoWatch is an innovative livestock management platform that leverages cutting-edge technology to monitor and optimize the feeding of each animal. With an intuitive interface and detailed reports, it enables users to make data-driven decisions to maximize productivity. I contributed to the front-end development, working on improving the mobile navbar responsiveness and adding the “Access Portal” section. I also helped build the form page of the website and plan to continue contributing to future improvements of the project.",
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://www.cowatch.com.br/",
      github: "#",
      status: language === "pt" ? "Em produção" : "In production",
      stars: language === "pt" ? "Privado" : "Private",
      commits: language === "pt" ? "Privado" : "Private",
      featured: false,
      year: 2024 ,
      images: [
        "https://ik.imagekit.io/o8urkd2xn/Cowatch.png",
        "https://ik.imagekit.io/o8urkd2xn/Cowatch2.png",
        "https://ik.imagekit.io/o8urkd2xn/Cowatch3.png",
      ],
      details: {
        duration: language === "pt" ? "Em adamento" : "In progress",
        team: language === "pt" ? "? Desenvolvedores" : "? Developers",
        role: language === "pt" ? "Desenvolvedor Front-end" : "Front-end Developer",
        technologies: ["HTML", "CSS", "JavaScript",],
      }
    },
    {
      title: "Learn Skills",
      description: language === "pt"
        ? "O Learn Skills é uma plataforma digital de editora que oferece uma estante virtual de livros e materiais educacionais gratuitos, com foco em tecnologia, programação e saúde."
        : "Learn Skills is a digital publishing platform offering a virtual bookshelf with free educational materials focused on technology, programming, and health.",
      fullDescription: language === "pt"
        ? "Learn Skills é uma plataforma digital de editora online que oferece uma estante virtual de livros e materiais educacionais gratuitos, com foco em tecnologia, programação e saúde. A plataforma permite aos usuários explorar, ler online e submeter seus próprios materiais para publicação. O projeto foi desenvolvido com React 18, Tailwind CSS e Vite no front-end, garantindo performance, responsividade e uma interface moderna. No back-end, foi utilizado Laravel (PHP) para gerenciamento de conteúdo, autenticação e submissão de materiais. Entre as principais funcionalidades estão:Estante Virtual: catálogo digital com livros e materiais educacionais;Leitura Online: visualização de PDFs diretamente na plataforma; Submissão de Materiais: sistema para autores enviarem seus trabalhos; Corpo Editorial e FAQ: informações sobre a equipe e suporte; Design Responsivo: interface adaptável a diferentes dispositivos. Atuei como desenvolvedor full-stack, contribuindo tanto na implementação do front-end (componentes, layout e usabilidade) quanto no desenvolvimento do back-end, incluindo rotas, integração com o banco de dados e validações de submissões."
        : "Learn Skills is a digital online publishing platform that provides a virtual bookshelf of free educational materials and books, focused on technology, programming, and health. It allows users to explore, read online, and submit their own materials for publication.The project was built using React 18, Tailwind CSS, and Vite on the front end to ensure high performance, responsiveness, and a modern user interface. he back end was developed with Laravel (PHP) for content management, authentication, and material submissions. key features include: Virtual Bookshelf: digital catalog with books and educational materials; Online Reading: integrated PDF viewer; Material Submission: system for authors to submit their works; Editorial Board & FAQ: team information and user support; Responsive Design: adaptable layout across devices. I worked as a full-stack developer, contributing to both the front-end (components, layout, and UX improvements) and the back-end, including route handling, database integration, and submission validation.",
      tags: ["React.js", "PHP", "Laravel", "MySQL", "TailwindCSS"],
      link: "https://learnskills.com.br",
      github: "#",
      status: language === "pt" ? "Concluído" : "Completed",
      stars: language === "pt" ? "Privado" : "Private",
      commits: language === "pt" ? "Privado" : "Private",
      featured: true,
      year: 2025,
      images: [
        "https://ik.imagekit.io/o8urkd2xn/learnskills3.jpg",
        "https://ik.imagekit.io/o8urkd2xn/learnskills2.jpg",
        "https://ik.imagekit.io/o8urkd2xn/learnskills1.jpg",
      ],
      details: {
        duration: language === "pt" ? "Em adamento" : "In progress",
        team: language === "pt" ? "2 Desenvolvedores" : "2 Developers",
        role: language === "pt" ? "Desenvolvedor Full-Stack" : "Full-Stack Developer",
        technologies: ["React.js", "TailwindCSS", "PHP", "Laravel", "MySQL", ],
      }
    },
    {
      title: "Logos",
      description: language === "pt"
        ? "Freelance de uma Landing Page para uma retífica de motores."
        : "Freelance Landing Page for an engine repair company.",
      fullDescription: language === "pt"
        ? "Logos é uma landing page profissional desenvolvida como projeto freelance para uma empresa de retífica de motores. O site foi construído com foco em performance e identidade visual moderna, apresentando as informações da empresa de forma clara e objetiva. O desenvolvimento foi concluído em 3 dias, utilizando HTML e CSS para criar uma interface leve, otimizada e com boa experiência do usuário. Pretendo adicionar responsividade completa e migrar o projeto para Tailwind CSS nas próximas atualizações."
        : "Logos is a professional landing page developed as a freelance project for an engine reconditioning company. The website was built with a focus on performance and a modern visual identity, presenting the company’s information clearly and effectively. The development was completed in 3 days, using HTML and CSS to deliver a lightweight, optimized interface and a good user experience. I plan to add full responsiveness and migrate the project to Tailwind CSS in future updates.",
      tags: ["HTML", "TailwindCSS"],
      link: "https://sougabrielxd.github.io/logos/",
      github: "https://github.com/sougabrielxd/logos",
      status: language === "pt" ? "Concluído" : "Completed",
      stars: 0,
      commits: 10,
      featured: false,
      year: 2024,
      images: [
        "https://ik.imagekit.io/o8urkd2xn/logos.png",
      ],
      details: {
        duration: language === "pt" ? "3 dias" : "3 days",
        team: language === "pt" ? "1 Desenvolvedor" : "1 Developer",
        role: language === "pt" ? "Desenvolvedor Front-end" : "Front-end Developer",
        technologies:
          language === "pt"
            ? ["HTML", "TailwindCSS", "Design Responsivo", "Gestão de Projetos"]
            : ["HTML", "TailwindCSS", "Responsive Design" , "Project management"],
      },
    },
  ];

  const allTechs = Array.from(new Set(projects.flatMap(p => p.tags)));
  const filteredProjects = selectedTech 
    ? projects.filter(p => p.tags.includes(selectedTech))
    : projects;

  const getStatusColor = (status: string) => {
    if (status.includes("produção") || status.includes("production")) {
      return "bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/50";
    }
    if (status.includes("Concluído") || status.includes("Completed")) {
      return "bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/50";
    }
    return "bg-gray-500/20 text-gray-600 dark:text-gray-400 border-gray-500/50";
  };

  const currentProject = selectedProject !== null ? projects[selectedProject] : null;
  const currentImages = currentProject?.images || [];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Theme & Language Buttons */}
      <div
        className={`fixed top-6 right-6 z-50 flex gap-3 transition-all duration-500 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
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
                  toggleLanguage();
                  setShowLanguageMenu(false);
                }}
                className="w-full px-4 py-2 text-left 
                border-t border-black/20 dark:border-red-500/20 
                hover:bg-black/10 dark:hover:bg-red-500/10 
                transition-colors flex items-center gap-2"
              >
                <span className="text-sm font-semibold">Português</span>
                {language === "pt" && (
                  <span className="ml-auto text-black dark:text-red-500">✓</span>
                )}
              </button>
              <button
                onClick={() => {
                  toggleLanguage();
                  setShowLanguageMenu(false);
                }}
                className="w-full px-4 py-2 text-left 
                border-t border-black/20 dark:border-red-500/20 
                hover:bg-black/10 dark:hover:bg-red-500/10 
                transition-colors flex items-center gap-2"
              >
                <span className="text-sm font-semibold">English</span>
                {language === "en" && (
                  <span className="ml-auto text-black dark:text-red-500">✓</span>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Theme Button */}
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

      <nav
        className={`fixed top-6 left-6 z-[9999] flex gap-6 transition-all duration-500 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Menu Desktop */}
        <div className="hidden md:flex gap-8">
          <Link href="/">
            <a className="text-sm hover:text-red-500 transition-colors font-semibold">
              {language === "pt" ? "Inicio" : "Home"}
            </a>
          </Link>
          <Link href="/about">
            <a className="text-sm hover:text-red-500 transition-colors font-semibold">
              {language === "pt" ? "Sobre" : "About"}
            </a>
          </Link>
          <Link href="/projects">
            <a className="text-sm hover:text-red-500 transition-colors font-semibold">
              {language === "pt" ? "Projetos" : "Projects"}
            </a>
          </Link>
          <Link href="/contact">
            <a className="text-sm hover:text-red-500 transition-colors font-semibold">
              {language === "pt" ? "Contato" : "Contact"}
            </a>
          </Link>
        </div>

        {/* Menu Mobile */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-accent/10 transition-colors z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={26} className="dark:text-red-500 text-black" />
        </button>

        {/* Menu Mobile Dropdown */}
        {isOpen && (
          <div
            className="fixed top-16 left-6 z-[9999] border border-black dark:border-red-500/60 
                 bg-white dark:bg-black 
                 hover:bg-black/10 dark:hover:bg-red-500/20 
                 transition-colors shadow-md flex flex-col items-start p-4 md:hidden 
                 rounded-lg"
          >
            <Link href="/">
              <a className="text-sm hover:text-red-500 dark:text-red-500 transition-colors font-semibold">
                {language === "pt" ? "Inicio" : "Home"}
              </a>
            </Link>
            <Link href="/about">
              <a className="text-sm hover:text-red-500 dark:text-red-500 transition-colors font-semibold">
                {language === "pt" ? "Sobre" : "About"}
              </a>
            </Link>
            <Link href="/projects">
              <a className="text-sm hover:text-red-500 dark:text-red-500 transition-colors font-semibold">
                {language === "pt" ? "Projetos" : "Projects"}
              </a>
            </Link>
            <Link href="/contact">
              <a className="text-sm hover:text-red-500 dark:text-red-500 transition-colors font-semibold">
                {language === "pt" ? "Contato" : "Contact"}
              </a>
            </Link>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
      <Particles />
        {/* Header */}
        <section className="mb-16">
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
 
        </section>

        {/* Featured Project */}
        {projects.find(p => p.featured) && (
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-6">
              {language === "pt" ? "Projeto Destaque" : "Featured Project"}
            </h2>
            {projects.filter(p => p.featured).map((project, idx) => (
              <div
                key={idx}
                className="border border-black dark:border-red-500/50 rounded-lg p-8 
                  bg-gradient-to-br dark:from-red-500/10 dark:to-red-400/10 
                  dark:hover:border-red-500 dark:hover:from-red-500/20 dark:hover:to-red-400/20
                  from-black/5
                  transition-all duration-300 
                  hover:shadow-lg dark:hover:shadow-red-500/30 hover:shadow-black/30
                  animate-slide-up"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full bg-gradient-to-r dark:from-red-500 dark:to-red-600 dark:text-white from-black to-black text-white text-sm font-semibold">
                         {language === "pt" ? "Destaque" : "Featured"}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                    <p className="text-muted-foreground mb-6 text-lg">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-full flex items-center gap-2 bg-gradient-to-r dark:from-red-500/20 dark:to-red-400/20 border dark:border-red-500/50 dark:hover:border-red-500 text-black dark:text-white from-gray-700/20 to-black/20 border-black/50 hover:border-black transition-all duration-300 transform hover:scale-105"
                        >
                          {getTechIcon(tag)}
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Button className="bg-gradient-to-r dark:from-red-500 dark:to-red-600 dark:hover:from-red-600 dark:hover:to-red-700 from-black to-black text-white transition-all duration-300 transform hover:scale-105">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {language === "pt" ? "Ver Projeto" : "View Project"}
                        </Button>
                      </a>
                      <button
                        onClick={() => {
                          setSelectedProject(projects.indexOf(project));
                          setCurrentImageIndex(0);
                        }}
                        className="px-6 py-2 rounded-lg border bg-gradient-to-r border-black/50 hover:border-black from-black/10 to-gray-800/10 hover:from-black/20 hover:to-gray-800/20 hover:text-black hover:shadow-lg hover:shadow-black/30 dark:border-red-500/50 dark:hover:border-red-500 dark:hover:bg-red-500/10 text-black dark:text-red-400  text-sm font-semibold transition-all duration-300 transform hover:scale-105"
                      >
                        {language === "pt" ? "Mais Detalhes" : "More Details"}
                      </button>
                    </div>

                  </div>

                  {/* Project Image */}
                  <div className="rounded-lg overflow-hidden border dark:border-red-500/30 border-black/30 h-64">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </section>
        )}

        {/* Projects Grid */}
        <section>
          <h2 className="text-2xl font-bold mb-6">
            {language === "pt" ? "Todos os Projetos" : "All Projects"}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.filter(p => !p.featured).map((project, idx) => (
              <div
                key={idx}
                className="border border-black/30 dark:border-red-500/30 
                  rounded-lg overflow-hidden
                  bg-gradient-to-br from-black/5 to-black/5 dark:from-red-500/5 dark:to-red-400/5 
                  hover:border-black dark:hover:border-red-500 
                  hover:from-black/10 hover:to-black/10 dark:hover:from-red-500/10 dark:hover:to-red-400/10 
                  transition-all duration-300 group card-hover 
                  hover:shadow-lg hover:shadow-black/20 dark:hover:shadow-red-500/20 
                  animate-slide-up transform hover:scale-105 hover:-translate-y-2"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Project Image Preview */}
                <div className="relative h-48 overflow-hidden bg-black/10 dark:bg-red-500/10">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <button
                      onClick={() => {
                        setSelectedProject(projects.indexOf(project));
                        setCurrentImageIndex(0);
                      }}
                      className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      {language === "pt" ? "Ver Detalhes" : "View Details"}
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  {/* Status Badge */}
                  <div className="mb-4 flex items-start justify-between">
                    <span className={`text-xs px-3 py-1 rounded-full border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                    <span className="text-xs text-muted-foreground">{project.year}</span>
                  </div>

                  {/* Project Info */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-2 dark:group-hover:text-red-500 transition-colors flex items-center gap-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-black to-black dark:from-red-500 dark:to-red-800 group-hover:animate-pulse"></span>
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {project.description}
                    </p>
                  </div>



                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full flex items-center gap-2 bg-gradient-to-r dark:from-red-500/20 dark:to-red-400/20 dark:border-red-500/50 dark:hover:border-red-800 dark:hover:from-red-500/30 hover:to-black/30 from-black/20 to-black/20 text-black dark:text-white border border-black/50 hover:border-black hover:from-black/30 dark:hover:to-red-400/30 transition-all duration-300 transform hover:scale-105"
                      >
                        {getTechIcon(tag)}
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 dark:border-red-500/50 dark:hover:border-red-500 dark:hover:bg-red-500/10 border-black/50 hover:border-black hover:bg-black/10 transition-all duration-300 transform hover:scale-105"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {language === "pt" ? "Ver" : "View"}
                      </Button>
                    </a>
                    <button
                      onClick={() => {
                        setSelectedProject(projects.indexOf(project));
                        setCurrentImageIndex(0);
                      }}
                      className="flex-1 px-3 py-2 rounded-lg border bg-gradient-to-r border-black/50 hover:border-black from-black/10 to-gray-800/10 hover:from-black/20 hover:to-gray-800/20 hover:text-black hover:shadow-lg hover:shadow-black/30 dark:border-red-500/50 dark:hover:border-red-500 dark:hover:bg-red-500/10 text-black dark:text-red-400  text-sm font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      {language === "pt" ? "Mais Detalhes" : "More Details"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Modal */}
      {selectedProject !== null && currentProject && (
        <div className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-background border border-black/30 dark:border-red-500/30 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 flex items-center justify-between p-6 border-b border-black/10 dark:border-red-500/10 bg-background">
              <h2 className="text-2xl font-bold">{currentProject.title}</h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-black/10 dark:hover:bg-red-500/10 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="relative h-96 rounded-lg overflow-hidden bg-black/10 dark:bg-red-500/10">
                  <img
                    src={currentImages[currentImageIndex]}
                    alt={`${currentProject.title} - ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {currentImages.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-300 transform hover:scale-110"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-300 transform hover:scale-110"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {currentImages.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setCurrentImageIndex(i)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              i === currentImageIndex ? "bg-red-500 w-8" : "bg-white/50"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
                <p className="text-center text-sm text-muted-foreground">
                  {language === "pt" ? "Imagem" : "Image"} {currentImageIndex + 1} {language === "pt" ? "de" : "of"} {currentImages.length}
                </p>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold mb-2">{language === "pt" ? "Descrição" : "Description"}</h3>
                <p className="text-muted-foreground">{currentProject.fullDescription}</p>
              </div>

              {/* Project Details */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">{language === "pt" ? "Detalhes do Projeto" : "Project Details"}</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-semibold">{language === "pt" ? "Duração:" : "Duration:"}</span> {currentProject.details.duration}</p>
                    <p><span className="font-semibold">{language === "pt" ? "Equipe:" : "Team:"}</span> {currentProject.details.team}</p>
                    <p><span className="font-semibold">{language === "pt" ? "Meu Papel:" : "My Role:"}</span> {currentProject.details.role}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">{language === "pt" ? "Tecnologias" : "Technologies"}</h3>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.details.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full flex items-center gap-2 bg-gradient-to-r dark:from-red-500/20 dark:to-red-400/20 dark:border-red-500/50 from-black/20 text-black dark:text-white to-black/20  border border-black/50"
                      >
                        {getTechIcon(tech)}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-black/5 dark:bg-red-500/5 border border-black/10 dark:border-red-500/20 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Star className="w-5 h-5 dark:text-red-500 text-black" />
                    <span className="font-bold text-lg">{currentProject.stars}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{language === "pt" ? "Estrelas" : "Stars"}</p>
                </div>
                <div className="p-4 rounded-lg bg-black/5 dark:bg-red-500/5 border border-black/10 dark:border-red-500/20 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <GitBranch className="w-5 h-5 dark:text-red-500 text-black" />
                    <span className="font-bold text-lg">{currentProject.commits}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{language === "pt" ? "Commits" : "Commits"}</p>
                </div>
                <div className="p-4 rounded-lg bg-black/5 dark:bg-red-500/5 border border-black/10 dark:border-red-500/20 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="font-bold text-lg">{currentProject.year}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{language === "pt" ? "Ano" : "Year"}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <a href={currentProject.link} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button className="w-full bg-gradient-to-r dark:from-red-500 dark:to-red-600 dark:hover:from-red-600 dark:hover:to-red-700  from-black to-black hover:from-black/90 hover:to-black/70  text-white">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {language === "pt" ? "Visitar Projeto" : "Visit Project"}
                  </Button>
                </a>
                {currentProject.github !== "#" && (
                  <a href={currentProject.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" className="w-full dark:border-red-500 dark:hover:border-red-500 border-black/50 hover:border-black">
                      <Github className="w-4 h-4 mr-2" />
                      {language === "pt" ? "Ver Código" : "View Code"}
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
