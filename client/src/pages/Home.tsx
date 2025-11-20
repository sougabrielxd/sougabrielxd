import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, Mail, ExternalLink, Moon, Sun, Code, Monitor, Server, Database, Wrench, Globe as GlobeIcon, Briefcase, Award, BookOpen, Send, FileText, Download, Phone } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect, ReactNode } from "react";
import { Globe, Menu } from "lucide-react";
import Particles from "@/components/Particles";
import MobileMenu from "@/components/MobileMenu";
import { IoIosArrowForward } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import { FaVuejs } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { SiReact, SiTrello, SiNotion, SiNextdotjs, SiHtml5, SiDjango, SiTailwindcss, SiCss3, SiTypescript, SiJavascript, SiNodedotjs, SiMongodb, SiPhp, SiPython, SiLaravel, SiPostgresql, SiGit, SiGithub, SiGitlab, SiVite, SiDocker, SiPostman, SiVercel, SiFigma, SiJira, SiWordpress, SiN8N, SiShadcnui, SiFlask } from "react-icons/si";
import { Cpu, X, ChevronLeft, ChevronRight } from "lucide-react";


// ============================================================
// TECH ICON MAPPING
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
    "Project management": <AiOutlineFundProjectionScreen className="w-4 h-4" />,
    "Serviços de TI": <Server className="w-4 h-4" />,
    "IT Services": <Server className="w-4 h-4" />,
    "Manutenção de computadores": <Cpu className="w-4 h-4" />,
    "Computer Maintenance": <Cpu className="w-4 h-4" />,
    "Suporte técnico": <Wrench className="w-4 h-4" />,
    "Technical Support": <Wrench className="w-4 h-4" />,
    "Engenharia de Prompt": <Code className="w-4 h-4 dark:text-purple-500 text-purple-950" />,
    "Prompt Engineering": <Code className="w-4 h-4 dark:text-purple-500 text-purple-950" />,
    "Automação de Processos": <Code className="w-4 h-4 dark:text-pink-400 text-black" />,
    "Process Automation": <Code className="w-4 h-4 dark:text-pink-400 text-black" />,
    ShadcnUI: <SiShadcnui className="w-4 h-4" />,
  };

  return iconMap[tech] || <Code className="w-4 h-4 text-gray-400" />;
};

// ============================================================
// DATA SECTIONS
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
        skills: ["Git", "GitHub", "GitLab", "VS Code", "Figma", "Docker", "Jira", "Trello"],
      },
    ],
    studying: {
      title: "Stacks em Estudo",
      description: "A tecnologia não para, e eu também não! Atualmente, estou aprofundando meus conhecimentos em:",
      stacks: ["N8n", "Engenharia de Prompt", "Automação de Processos", "Notion"],
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
        skills: ["Git", "GitHub", "GitLab", "VS Code", "Figma", "Docker", "Jira", "Trello"],
      },
    ],
    studying: {
      title: "Stacks I'm Studying",
      description: "Technology never stops, and neither do I! I am currently deepening my knowledge in:",
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
        institution: "Centro Universitário Paraíso - UniFAP",
        course: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
        period: "2023 - 2026 (Previsão)",
      },
    ],
  },
  en: {
    title: "Academic Background",
    subtitle: "The foundation of my knowledge",
    items: [
      {
        institution: "Paraíso University Center - UniFAP",
        course: "technologist in Systems Analysis and Development",
        period: "2023 - 2026 (Expected)",
      },
    ],
  },
};

const certificatesData = {
  pt: {
    title: "Certificados",
    subtitle: "Conhecimento validado(o download individual dos certificados ainda não está funcionando, vou ajustar isso depois)",
    items: [
      { name: "Treinamento com Colaboradores", 
        institution: "Receita Federal", 
        year: 2025,
        file: "treinamento_com_colaboradores.pdf"
      },
      { name: "IA Generativa", 
        institution: "Santander Open Academy", 
        year: 2025,
        file: "ia_generativa.pdf"
      },
      { name: "Fundamentos de TI: HARDWARE E SOFTWARE", 
        institution: "Fundação Bradesco",
        year: 2024,
        file: "fundamentos_de_ti_hardware_e_software.pdf"
      },
      { name: "Programação Orientada a Objetos (POO)", 
        institution: "Fundação Bradesco", 
        year: 2024,
        file: "programacao_orientada_a_objetos_poo.pdf",
      },
    ],
  },
  en: {
    title: "Certificates",
    subtitle: "Validated knowledge",
    items: [
      { name: "Training with Employees", institution: "Receita Federal", year: 2025, file: "treinamento_com_colaboradores.pdf" },
      { name: "Generative AI", institution: "Santander Open Academy", year: 2025, file: "ia_generativa.pdf" },
      { name: "IT Fundamentals: HARDWARE AND SOFTWARE", institution: "Fundação Bradesco", year: 2024, file: "fundamentos_de_ti_hardware_e_software.pdf" },
      { name: "Object-Oriented Programming (OOP)", institution: "Fundação Bradesco", year: 2024, file: "programacao_orientada_a_objetos_poo.pdf" },
    ],
  },
};

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [skillsVisible] = useState(true);
  const [certificatesVisible] = useState(true);
  const [projectsVisible] = useState(true);
  const [contactVisible] = useState(true);
  const [aboutVisible] = useState(true);
  const [experiencesVisible] = useState(true);

  const handleOpenProjectModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseProjectModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  }

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

  const experiences = [
    {
      company: "Receita Federal",
      role: language === "pt" ? "Estagiário de TI" : "IT Intern",
      period: language === "pt" ? "Dez 2024 - Atual" : "Dec 2024 - Present",
      description: language === "pt"
        ? ["Atuo no suporte técnico aos usuários, realizando diagnóstico, resolução de problemas e otimização de desempenho em hardware e software, o que resultou na melhoria da velocidade de múltiplos computadores.", "Colaboro na elaboração de relatórios técnicos e analíticos para apoiar a gestão de desempenho e os processos internos.", "Executo atividades administrativas de apoio, como a produção de apresentações, certificados e documentação institucional."]
        : ["Provide technical support to users by diagnosing and resolving hardware and software issues, improving the performance and speed of multiple computers.", "Collaborate in creating technical and analytical reports to support performance management and internal processes.", "Carry out administrative support tasks such as preparing presentations, certificates, and institutional documentation."],
      skills: language === "pt" ? ["Serviços de TI", "Manutenção de computadores", "Suporte técnico", "Python"] : ["IT Services", "Computer Maintenance", "Technical Support", "Python"],
    },
    {
      company: "NExTI UniFAP",
      role: language === "pt" ? "Desenvolvedor Full-Stack" : "Full-Stack Developer",
      period: language === "pt" ? "Mar 2025 - Atual" : "Mar 2025 - Present",
      description: language === "pt"
        ? ["Atuo como desenvolvedor full stack voluntário na construção da plataforma digital da Learn Skills, editora acadêmica dedicada à disseminação de conhecimento.", "O projeto começou com back-end em Python (Flask), mas migramos para PHP com Laravel, garantindo maior escalabilidade e manutenção do sistema.", "Colaboro ativamente em decisões técnicas, discutindo arquitetura, propondo soluções e assegurando a integração entre todas as partes do sistema."]
        : ["I work as a volunteer full-stack developer building the digital platform for Learn Skills, an academic publisher dedicated to disseminating knowledge.", "The project started with a Python (Flask) backend, but we migrated to PHP with Laravel, ensuring greater scalability and system maintainability.", "I actively collaborate in technical decisions, discussing architecture, proposing solutions, and ensuring integration between all parts of the system."],
      skills: ["React", "PHP", "Laravel", "MySQL", "TailwindCSS", "Figma", "UI/UX"],
    },
    {
      company: "Freelance",
      role: language === "pt" ? "Desenvolvedor Web e UI/UX Designer" : "Web developer and UI/UX designer",
      period: language === "pt" ? "Set 2023 - Atual" : "Sep 2023 - Present",
      description: language === "pt"
        ? ["Presto serviços personalizados de design e desenvolvimento digital, adaptados às necessidades e objetivos de cada cliente.", "Atuo na criação de sites responsivos, interfaces e experiências de usuário (UI/UX) que equilibram usabilidade e estética.", "Entre os principais resultados, destaco o aumento de mais de 222 mil visualizações e 4,2 mil interações em um único mês em perfis gerenciados."]
        : ["I provide customized digital design and development services, tailored to the needs and objectives of each client.", "I work on creating responsive websites, user interfaces (UI/UX) that balance usability and aesthetics.", "Among the main results, I highlight the increase of over 222,000 views and 4,200 interactions in a single month on managed profiles."],
      skills: language === "pt" ? ["HTML", "CSS", "JavaScript", "UI/UX", "TailwindCSS", "Desenvolvimento Web", "Figma", "WordPress", "Gestão de Projetos"] : ["HTML", "CSS", "JavaScript", "UI/UX", "TailwindCSS", "Web Development", "Figma", "WordPress", "Project management"],
    },
    {
      company: "Carboon Cycle",
      role: language === "pt" ? "Estágio em Desenvolvimento Full-Stack" : "Full-Stack Development Internship",
      period: language === "pt" ? "Mar 2025 - Out 2025" : "Mar 2025 - Oct 2025",
      description: language === "pt"
        ? ["Desenvolvi interfaces de usuário responsivas e interativas para aplicações web utilizando React e TailwindCSS.", "Colaborei com designers e desenvolvedores back-end para implementar funcionalidades completas, assegurando a integração perfeita entre front-end e back-end.", "Participei ativamente de revisões de código e testes para garantir a qualidade do software."]
        : ["Developed responsive and interactive user interfaces for web applications using React and TailwindCSS.", "Collaborated with designers and back-end developers to implement complete features, ensuring seamless integration between front-end and back-end.", "Actively participated in code reviews and testing to ensure software quality."],
      skills: ["React", "Node.js", "Next.js", "TypeScript", "TailwindCSS", "ShadcnUI", "Git", "Jira"],
    },
  ];

  const projects = [
    {
      id: "learn-skills",
      title: "Learn Skills",
      description: language === "pt"
        ? "O Learn Skills é uma plataforma digital de editora que oferece uma estante virtual de livros e materiais educacionais gratuitos, com foco em tecnologia, programação e saúde."
        : "Learn Skills is a digital publishing platform offering a virtual bookshelf with free educational materials focused on technology, programming, and health.",
      fullDescription: language === "pt"
        ? "O Learn Skills é uma plataforma inovadora de editora digital que oferece uma estante virtual completa de livros e materiais educacionais gratuitos. Com foco especial em tecnologia, programação e saúde, a plataforma foi desenvolvida como um projeto voluntário em colaboração com a NExTI UniFAP. O projeto começou com um backend em Python (Flask), mas foi migrado para PHP com Laravel para garantir maior escalabilidade e facilidade de manutenção. A interface foi desenvolvida com React e TailwindCSS, oferecendo uma experiência de usuário moderna e responsiva."
        : "Learn Skills is an innovative digital publishing platform offering a complete virtual bookshelf of free educational materials. With a special focus on technology, programming, and health, the platform was developed as a volunteer project in collaboration with NExTI UniFAP. The project started with a Python (Flask) backend but was migrated to PHP with Laravel to ensure greater scalability and ease of maintenance. The interface was developed with React and TailwindCSS, offering a modern and responsive user experience.",
      tags: ["React", "PHP", "Laravel", "MySQL", "TailwindCSS"],
      link: "https://learnskills.com.br",
      github: "#",
      status: language === "pt" ? "Em produção" : "In production",
      featured: true,
      year: 2025,
      images: ["https://ik.imagekit.io/o8urkd2xn/learnskills3.jpg"],
    },
    {
      id: "cowatch",
      title: "CoWatch",
      description: language === "pt"
        ? "Revolucione a gestão do seu rebanho com o CoWatch. Monitore a alimentação de cada animal com precisão, otimize sua produção e maximize seus lucros."
        : "Revolutionize your herd management with CoWatch. Monitor each animal's feeding precisely, optimize your production, and maximize profits.",
      fullDescription: language === "pt"
        ? "CoWatch é uma solução inovadora para gestão de rebanho que permite monitorar a alimentação de cada animal com precisão. A plataforma oferece ferramentas avançadas para otimizar a produção e maximizar lucros através de análises detalhadas e relatórios em tempo real. Desenvolvida com HTML, CSS e JavaScript, a aplicação oferece uma interface intuitiva e responsiva para agricultores e pecuaristas."
        : "CoWatch is an innovative herd management solution that allows precise monitoring of each animal's feeding. The platform offers advanced tools to optimize production and maximize profits through detailed analytics and real-time reports. Developed with HTML, CSS, and JavaScript, the application offers an intuitive and responsive interface for farmers and ranchers.",
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://www.cowatch.com.br/",
      github: "#",
      status: language === "pt" ? "Em produção" : "In production",
      featured: false,
      year: 2024,
      images: ["https://ik.imagekit.io/o8urkd2xn/Cowatch.png"],
    },
    {
      id: "logos",
      title: "Logos",
      description: language === "pt"
        ? "Freelance de uma Landing Page para uma retífica de motores."
        : "Freelance Landing Page for an engine repair company.",
      fullDescription: language === "pt"
        ? "Logos é um projeto freelance de landing page desenvolvido para uma retífica de motores. A página foi criada com foco em conversão e apresentação profissional dos serviços oferecidos. Utilizando HTML e TailwindCSS, a landing page oferece um design moderno, responsivo e otimizado para SEO, garantindo uma excelente experiência do usuário em todos os dispositivos."
        : "Logos is a freelance landing page project developed for an engine repair company. The page was created with a focus on conversion and professional presentation of services offered. Using HTML and TailwindCSS, the landing page offers a modern, responsive design optimized for SEO, ensuring an excellent user experience on all devices.",
      tags: ["HTML", "TailwindCSS"],
      link: "https://sougabrielxd.github.io/logos/",
      github: "https://github.com/sougabrielxd/logos",
      status: language === "pt" ? "Concluído" : "Completed",
      featured: false,
      year: 2024,
      images: ["https://ik.imagekit.io/o8urkd2xn/logos.png"],
    },
  ];

  const contactMethods = [
    {
      icon: Mail,
      label: language === "pt" ? "Email" : "Email",
      value: "gabriellucasafb@gmail.com",
      href: "https://mail.google.com/mail/u/0/?fs=1&to=gabriellucasafb@gmail.com&su=Contato+do+Portf%C3%B3lio&body=Ol%C3%A1,+vim+pelo+seu+Portf%C3%B3lio+e+gostaria+de+falar+sobre...&tf=cm",
      color: "border dark:border-red-700 border-black",
    },
    {
      icon: Phone,
      label: language === "pt" ? "Telefone" : "Phone",
      value: "+55 (87) 99181-1562",
      href: "https://wa.me//5587991811562?text=Ol%C3%A1,%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas%20sobre%20seu%20servi%C3%A7os",
      color: "border dark:border-red-700 border-black",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "gabriellucasafb",
      href: "https://linkedin.com/in/gabriellucasafb",
      color: "border dark:border-red-700 border-black",
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "", phone: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } finally {
      setLoading(false);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const getStatusColor = (status: string) => {
    if (status.includes("produção") || status.includes("production")) return "bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/50";
    if (status.includes("Concluído") || status.includes("Completed")) return "bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/50";
    return "bg-gray-500/20 text-gray-600 dark:text-gray-400 border-gray-500/50";
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Particles Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Particles />
      </div>
      {/* Fixed Header */}
      <div className={`fixed top-6 right-6 z-50 flex gap-3 transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <div className="relative">
          <button
            onClick={() => setShowLanguageMenu(!showLanguageMenu)}
            className="p-3 rounded-full border border-black/50 dark:border-red-500/50 hover:border-black dark:hover:border-red-500 bg-gradient-to-br from-black/10 to-gray-700/10 dark:from-red-500/10 dark:to-red-400/10 hover:from-black/20 hover:to-gray-800/20 dark:hover:from-red-400/20 dark:hover:to-red-400/20 text-black dark:text-white hover:text-black dark:hover:text-red-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-black/40 dark:hover:shadow-red-500/40 group"
            aria-label="Select language"
          >
            <Globe className="w-5 h-5 transition-all duration-300 group-hover:rotate-6" />
          </button>
          {showLanguageMenu && (
            <div className="absolute right-0 mt-2 w-32 rounded-lg border border-black/60 dark:border-red-500/50 bg-background shadow-lg shadow-black/40 dark:shadow-red-500/20 z-50 overflow-hidden transition-all duration-300">
              <button onClick={() => { toggleLanguage(); setShowLanguageMenu(false); }} className="w-full px-4 py-2 text-left border-t border-black/20 dark:border-red-500/20 hover:bg-black/10 dark:hover:bg-red-500/10 transition-colors flex items-center gap-2">
                <span className="text-sm font-semibold">Português</span>
                {language === "pt" && <span className="ml-auto text-black dark:text-red-500">✓</span>}
              </button>
              <button onClick={() => { toggleLanguage(); setShowLanguageMenu(false); }} className="w-full px-4 py-2 text-left border-t border-black/20 dark:border-red-500/20 hover:bg-black/10 dark:hover:bg-red-500/10 transition-colors flex items-center gap-2">
                <span className="text-sm font-semibold">English</span>
                {language === "en" && <span className="ml-auto text-black dark:text-red-500">✓</span>}
              </button>
            </div>
          )}
        </div>
        <button onClick={toggleTheme} className="p-3 rounded-full border border-black/50 dark:border-red-500/50 hover:border-black dark:hover:border-red-500 bg-gradient-to-br from-black/10 to-gray-700/10 dark:from-red-500/10 dark:to-red-400/10 hover:from-black/20 hover:to-gray-800/20 dark:hover:from-red-400/20 dark:hover:to-red-400/20 text-black dark:text-white hover:text-black dark:hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-black/40 dark:hover:shadow-red-500/40 group">
          {theme === "dark" ? <Sun className="w-5 h-5 text-white transition-transform duration-300 group-hover:rotate-180" /> : <Moon className="w-5 h-5 text-black transition-transform duration-300 group-hover:rotate-180" />}
        </button>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-6 left-6 z-[9999] flex gap-6 transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <div className="hidden md:flex gap-8">
          <button onClick={() => scrollToSection("hero")} className="text-sm hover:text-red-500 transition-colors font-semibold">{language === "pt" ? "Início" : "Home"}</button>
          <button onClick={() => scrollToSection("about")} className="text-sm hover:text-red-500 transition-colors font-semibold">{language === "pt" ? "Sobre" : "About"}</button>
          <button onClick={() => scrollToSection("projects")} className="text-sm hover:text-red-500 transition-colors font-semibold">{language === "pt" ? "Projetos" : "Projects"}</button>
          <button onClick={() => scrollToSection("contact")} className="text-sm hover:text-red-500 transition-colors font-semibold">{language === "pt" ? "Contato" : "Contact"}</button>
        </div>
        <button className="md:hidden p-2 rounded-md hover:bg-accent/10 transition-colors z-50" onClick={() => setIsOpen(!isOpen)}>
          <IoMenu size={26} className="dark:text-red-500 text-black" />
        </button>
      
      {/* Mobile Menu Component */}
      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        language={language}
        onNavigate={scrollToSection}
        socialLinks={{
          github: "https://github.com/sougabrielxd",
          linkedin: "https://linkedin.com/in/gabriellucasafb",
          instagram: "https://instagram.com/gabriellucasafb",
          email: "https://mail.google.com/mail/u/0/?fs=1&to=gabriellucasafb@gmail.com&su=Contato+do+Portf%C3%B3lio&body=Ol%C3%A1,+vim+pelo+seu+Portf%C3%B3lio+e+gostaria+de+falar+sobre...&tf=cm",
        }}
      />
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
        <Particles />
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 dark:from-red-500/5 via-transparent to-black/6 dark:to-red-400/5 pointer-events-none"></div>
        <div className="mb-6 animate-float relative">
          <img src={theme === "dark" ? "./img/x-red.svg" : "./img/x-dark.svg"} alt="Logo" className="transition-all duration-300 h-20" />
        </div>
        <div className="text-center max-w-2xl relative z-10 animate-slide-up">
          <p className="text-sm text-muted-foreground mb-4 font-mono">{language === "pt" ? "Oi, Eu sou" : "Hi, I'm"}</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-3 text-black dark:bg-gradient-to-r dark:text-red-700 dark:bg-clip-text dark:animate-pulse-glow">Gabriel Lucas</h1>
          <div className="space-y-4 mb-8">
            <p className="text-lg text-muted-foreground">{language === "pt" ? "Desenvolvedor Full-Stack" : "Developer Full-Stack"}</p>
            <p className="text-lg"><span className={`animate-pulse text-4xl ${theme === "light" ? "text-black" : "text-red-700"}`}>愛</span></p>
          </div>
          <div className="flex justify-center gap-6 mb-12">
            <a href="https://github.com/sougabrielxd" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-black/50 dark:border-red-500/50 hover:border-black dark:hover:border-red-500 bg-gradient-to-br from-black/10 to-gray-700/10 dark:from-red-500/10 dark:to-red-400/10 hover:from-black/20 hover:to-gray-800/20 dark:hover:from-red-400/20 dark:hover:to-red-400/20 text-black dark:text-red-400 hover:text-black dark:hover:text-red-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-black/40 dark:hover:shadow-red-500 group" aria-label="GitHub">
              <Github className="w-5 h-5 group-hover:animate-pulse" />
            </a>
            <a href="https://linkedin.com/in/gabriellucasafb" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-black/50 dark:border-red-500/50 hover:border-black dark:hover:border-red-500 bg-gradient-to-br from-black/10 to-gray-700/10 dark:from-red-500/10 dark:to-red-400/10 hover:from-black/20 hover:to-gray-800/20 dark:hover:from-red-400/20 dark:hover:to-red-400/20 text-black dark:text-red-400 hover:text-black dark:hover:text-red-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-black/40 dark:hover:shadow-red-500 group" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 group-hover:animate-pulse" />
            </a>
            <a href="https://instagram.com/gabriellucasafb" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-black/50 dark:border-red-500/50 hover:border-black dark:hover:border-red-500 bg-gradient-to-br from-black/10 to-gray-700/10 dark:from-red-500/10 dark:to-red-400/10 hover:from-black/20 hover:to-gray-800/20 dark:hover:from-red-400/20 dark:hover:to-red-400/20 text-black dark:text-red-400 hover:text-black dark:hover:text-red-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-black/40 dark:hover:shadow-red-500 group" aria-label="Instagram">
              <Instagram className="w-5 h-5 group-hover:animate-pulse" />
            </a>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={() => scrollToSection("contact")} className="rounded-full px-8 bg-gradient-to-r from-red-500 to-red-800 hover:from-red-800 hover:to-red-600 text-white border-0 shadow-lg shadow-red-500/25 hover:shadow-lg hover:shadow-red-800 transition-all duration-300 transform hover:scale-105 py-3 font-semibold flex items-center justify-center gap-2">
              <Mail className="w-4 h-4" />
              {language === "pt" ? "Entre em contato" : "Get in touch"}
            </button>
            <button onClick={() => scrollToSection("projects")} className="rounded-full px-8 border border-black/50 hover:border-black bg-gradient-to-br from-black/10 to-gray-800/10 hover:from-black/20 hover:to-gray-800/20 text-black hover:text-black transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-black/30 dark:border-red-500/50 dark:hover:border-red-500 dark:bg-gradient-to-br dark:from-red-500/10 dark:to-red-400/10 dark:hover:from-red-400/20 dark:hover:to-red-400/20 dark:hover:shadow-red-500/30 dark:text-white py-3 font-semibold flex items-center justify-center gap-2">
              {language === "pt" ? "Ver Projetos" : "View Projects"}
              <ExternalLink className="w-4 h-4 dark:text-white" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section - Original Layout */}
      <section id="about" className="min-h-screen py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <Particles />
          <h2 className="text-3xl md:text-4xl font-bold mb-12">{language === "pt" ? "Sobre mim" : "About me"}</h2>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
            {/* Text Content */}
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed animate-slide-up">
              <div className="p-6 rounded-lg border border-black/30 dark:border-red-500/30 bg-gradient-to-br from-black/5 to-black/10 dark:from-red-500/10 dark:to-red-500/10 hover:border-black/60 dark:hover:border-red-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-black dark:hover:shadow-red-500">
                <p className="flex items-start gap-3">
                  <IoIosArrowForward className="w-5 h-5 dark:text-red-500 text-black flex-shrink-0 mt-1" />
                  <span>
                    {language === "pt" ? "Tenho 2 anos de experiência como " : "I have 2 years of experience as "}
                    <span className="dark:text-red-500 text-black font-semibold">{language === "pt" ? "Desenvolvedor Full-Stack" : "Developer Full-Stack"}</span>
                    {language === "pt" ? ", trabalhando em projetos reais. " : ", working on real projects. "}
                  </span>
                </p>
              </div>

              <div className="p-6 rounded-lg border border-black/30 dark:border-red-500/30 bg-gradient-to-br from-black/5 to-black/10 dark:from-red-500/10 dark:to-red-500/10 hover:border-black/60 dark:hover:border-red-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-black dark:hover:shadow-red-400">
                <p className="flex items-start gap-3">
                  <IoIosArrowForward className="w-5 h-5 dark:text-red-500 text-black flex-shrink-0 mt-1" />
                  <span>
                    {language === "pt" ? "Sou uma pessoa " : "I am a person "}
                    <span className="dark:text-red-400 text-gray-700 font-semibold">{language === "pt" ? "dedicada e comprometida" : "dedicated and committed"}</span>
                    {language === "pt" ? ", com foco constante na evolução pessoal e profissional, buscando aprender e aprimorar minhas habilidades a cada novo desafio." : ", with a constant focus on personal and professional development, I strive to learn and improve my skills with each new challenge."}
                  </span>
                </p>
              </div>

              <div className="p-6 rounded-lg border border-black/30 dark:border-red-500/30 bg-gradient-to-br from-black/5 to-black/10 dark:from-red-500/10 dark:to-red-500/10 hover:border-black/60 dark:hover:border-red-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-black dark:hover:shadow-red-500">
                <p className="flex items-start gap-3">
                  <IoIosArrowForward className="w-5 h-5 dark:text-red-500 text-black flex-shrink-0 mt-1" />
                  <span>
                    {language === "pt" ? "Nascido e crescido em Pernambuco, agora se aventurando no Ceará." : "Born and raised in Pernambuco, now venturing into Ceará."}
                  </span>
                </p>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex flex-col items-center md:items-end animate-float">
              <div className="relative w-100 h-100 rounded-2xl overflow-hidden shadow-lg shadow-black dark:shadow-red-500/30 border border-black/40 dark:border-red-500/40 bg-gradient-to-br from-black/20 via-black/10 to-black/20 dark:from-red-500/20 dark:via-red-400/10 dark:to-red-500/20 transition-all duration-300 hover:shadow-black dark:hover:shadow-red-500 hover:scale-105 mb-4">
                <img src="./img/photo.jpg" alt="Foto de perfil" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 rounded-2xl ring-1 dark:ring-red-500/40 ring-black/40 blur-sm"></div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center justify-between">
              {language === "pt" ? "Minha experiências:" : "My experiencies:"}
              <a href="./docs/Curriculo Full-stack.pdf" download>
                <Button variant="outline" className="bg-transparent border-black/30 dark:border-red-500/30 hover:bg-black/10 dark:hover:bg-red-500/10 transition-colors duration-300 h-8 px-2 text-xs md:h-10 md:px-4 md:text-sm">
                  <FileText className="w-3 h-3 md:w-4 md:h-4" />
                  {language === "pt" ? "Download Currículo" : "Download Resume"}
                </Button>
              </a>
            </h2>

            <div className="space-y-8">
              {experiences.map((exp, expIdx) => (
                <div key={expIdx} className="border-l-4 border-black dark:border-red-500 pl-6 py-4 p-6 -ml-6 rounded-r-lg bg-gradient-to-r from-black/5 to-transparent dark:from-red-500/5 dark:to-transparent hover:from-black/10 hover:to-black/5 dark:hover:from-red-500/10 dark:hover:to-red-400/5 transition-all duration-300 card-hover animate-slide-up" style={{ animationDelay: `${expIdx * 0.1}s` }}>
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Briefcase className="w-5 h-5 dark:text-red-500 text-black animate-pulse" />
                      <h3 className="text-xl font-bold">
                        <span className="dark:text-red-500 dark:group-hover:text-red-400 text-black group-hover:text-gray-400/30 transition-colors">{exp.company}</span>
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-3 mb-4">
                      {exp.skills.map((skill, skillIdx) => (
                        <span key={skillIdx} className="text-sm px-3 py-1 rounded-full flex items-center gap-2 bg-gradient-to-r from-black/10 to-black/10 dark:from-red-500/20 dark:to-red-400/20 text-black dark:text-accent-foreground border border-black/40 dark:border-red-500/50 hover:border-black hover:from-black/20 hover:to-black/20 dark:hover:border-red-500 dark:hover:from-red-500/30 dark:hover:to-red-400/30 transition-all duration-300 transform hover:scale-105">
                          {getTechIcon(skill)}
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
                    {exp.description.map((desc, descIdx) => (
                      <li key={descIdx} className="text-muted-foreground flex gap-3 group/item hover:text-foreground transition-colors" style={{ animationDelay: `${(expIdx + 0.2 + descIdx * 0.1)}s` }}>
                        <span className="dark:text-red-500 text-black mt-1 group-hover/item:animate-pulse">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">{skillsData[language].title}</h2>
            <p className="text-xl text-muted-foreground mb-10">{skillsData[language].subtitle}</p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-8">
                {skillsData[language].categories.map((category, categoryIdx) => {
                  const IconComponent = category.icon;
                  return (
                    <div key={categoryIdx} className="p-6 rounded-lg border border-black/30 dark:border-red-500/30 bg-gradient-to-br from-black/5 to-black/10 dark:from-red-500/10 dark:to-red-500/10 hover:border-black/60 dark:hover:border-red-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-black dark:hover:shadow-red-500">
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                        <IconComponent className="w-6 h-6 dark:text-red-500 text-black" />
                        {category.name}
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {category.skills.map((skill, skillIdx) => (
                          <span key={skillIdx} className="text-sm px-3 py-1 rounded-full flex items-center gap-2 bg-gradient-to-r from-black/10 to-black/10 dark:from-red-500/20 dark:to-red-400/20 text-black dark:text-accent-foreground border border-black/40 dark:border-red-500/50 hover:border-black hover:from-black/20 hover:to-black/20 dark:hover:border-red-500 dark:hover:from-red-500/30 dark:hover:to-red-400/30 transition-all duration-300 transform hover:scale-105">
                            {getTechIcon(skill)}
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Studying Stacks Container */}
              <div className="md:col-span-1">
                <div className="sticky top-24 p-6 rounded-lg border border-black/40 dark:border-red-500/40 bg-gradient-to-br from-black/10 to-black/20 dark:from-red-500/20 dark:to-red-500/30 shadow-xl shadow-black/20 dark:shadow-red-500/20 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 dark:text-white text-black">
                    <BookOpen className="w-7 h-7" />
                    {skillsData[language].studying.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{skillsData[language].studying.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {skillsData[language].studying.stacks.map((stack, stackIdx) => (
                      <span key={stackIdx} className="text-base px-4 py-2 rounded-full flex items-center gap-2 bg-gradient-to-r border border-black/50 dark:border-red-500/50 hover:border-black dark:hover:border-red-500 from-black/10 to-gray-700/10 dark:from-red-500/10 dark:to-red-400/10 hover:from-black/20 hover:to-gray-800/20 dark:hover:from-red-400/20 dark:hover:to-red-400/20 text-black dark:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-black/40 dark:hover:shadow-red-500 group font-semibold shadow-md">
                        {getTechIcon(stack)}
                        {stack}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">{educationData[language].title}</h2>
            <p className="text-xl text-muted-foreground mb-10">{educationData[language].subtitle}</p>

            <div className="space-y-10">
              {educationData[language].items.map((item, itemIdx) => (
                <div key={itemIdx} className="border-l-4 border-black dark:border-red-500 pl-6 py-4 p-6 -ml-6 rounded-r-lg bg-gradient-to-r from-black/5 to-transparent dark:from-red-500/5 dark:to-transparent hover:from-black/10 hover:to-black/5 dark:hover:from-red-500/10 dark:hover:to-red-400/5 transition-all duration-300 card-hover">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold dark:text-red-500 text-black">{item.course}</h3>
                    <p className="text-lg font-semibold text-foreground/80">{item.institution}</p>
                    <p className="text-sm text-muted-foreground">{item.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

                    {/* Certificates Section */}
                    <section className="mb-20">
                      <h2 className="text-2xl md:text-4xl font-bold flex items-center justify-between mb-12">
                        {certificatesData[language].title}
                        <a href="/Certificado.rar" download>
                          <Button variant="outline" className="bg-transparent border-black/30 dark:border-red-500/30 hover:bg-black/10 dark:hover:bg-red-500/10 transition-colors duration-300">
                            <Award className="w-5 h-5 mr-2" />
                            {language === "pt" ? "Download Certificados" : "Download Certificates"}
                          </Button>
                        </a>
                      </h2>
                      <p className="text-xl text-muted-foreground mb-10">{certificatesData[language].subtitle}</p>

                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificatesData[language].items.map((cert, certIdx) => (
              <div
                key={certIdx}
                className="relative p-6 rounded-xl border border-black/30 dark:border-red-500/30 bg-gradient-to-br from-black/5 to-black/10 dark:from-red-500/10 dark:to-red-500/10 hover:border-black/60 dark:hover:border-red-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-black dark:hover:shadow-red-500"
              >
                {/* Ícone de download na direita embaixo */}
                <a
                  href={`/certificados/${cert.file}.pdf`}
                  download
                  className="absolute bottom-4 right-4 p-2 rounded-lg border border-black/20 dark:border-red-500/30 hover:bg-black/10 dark:hover:bg-red-500/10 transition-colors"
                >
                  <Download className="w-5 h-5 dark:text-white text-black" />
                </a>

                <div className="flex items-center gap-3 mb-3">
                  <Award className="w-6 h-6 dark:text-red-500 text-black flex-shrink-0" />
                  <h3 className="text-lg font-semibold leading-tight">{cert.name}</h3>
                </div>

                <p className="text-sm text-muted-foreground">{cert.institution}</p>

                <p className="text-xs font-bold mt-2 px-2 py-1 inline-block rounded-full bg-black/10 dark:bg-red-500/20 text-black dark:text-red-400">
                  {cert.year}
                </p>
              </div>
            ))}
          </div>

          </section>
        </div>
      </section>

      {/* Projects Section */}
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
                            setSelectedProject(project);
                            setCurrentImageIndex(0);
                          }}
                          className="px-6 py-2 rounded-lg border bg-gradient-to-r border-black/50 hover:border-black from-black/10 to-gray-800/10 hover:from-black/20 hover:to-gray-800/20 hover:text-black hover:shadow-lg hover:shadow-black/30 dark:border-red-500/50 dark:hover:border-red-500 dark:hover:bg-red-500/10 text-black dark:text-red-400 text-sm font-semibold transition-all duration-300 transform hover:scale-105"
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
              {projects.filter(p => !p.featured).map((project, idx) => (
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
                            setSelectedProject(project);
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
                          setSelectedProject(project);
                          setCurrentImageIndex(0);
                        }}
                        className="px-6 py-2 rounded-lg border bg-gradient-to-r border-black/50 hover:border-black from-black/10 to-gray-800/10 dark:text-white hover:from-black/20 hover:to-gray-800/20 hover:text-black hover:shadow-lg hover:shadow-black/30 dark:border-red-500/50 dark:hover:border-red-500 dark:hover:bg-red-500/10 text-black text-sm font-semibold transition-all duration-300 transform hover:scale-105"
                      >
                        {language === "pt" ? "Detalhes" : "Details"}
                      </button>
                      {project.github !== "#" && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" className="px-6 py-2 dark:border-red-500/50 dark:hover:border-red-500 dark:hover:bg-red-500/10 border-black/50 hover:border-black hover:bg-black/10">
                            <Github className="w-5 h-5" />
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      {/* Contact Section - Original Layout */}
      <section id="contact" className="min-h-screen py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <Particles />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <section>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">{language === "pt" ? "Formas de Contato" : "Ways to Contact"}</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactMethods.map((method, idx) => {
                  const Icon = method.icon;
                  return (
                    <a key={idx} href={method.href} target={method.href.startsWith("http") ? "_blank" : undefined} rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined} className="group">
                      <div className="border border-black/30 text-sm dark:border-red-500/30 rounded-lg p-6 bg-gradient-to-br from-black/5 to-black/5 dark:from-red-500/5 dark:to-red-400/5 hover:border-black dark:hover:border-red-500 hover:from-black/10 hover:to-black/10 dark:hover:from-red-500/10 dark:hover:to-red-400/10 transition-all duration-300 hover:shadow-lg hover:shadow-black/20 dark:hover:shadow-red-500/20 transform hover:scale-105 hover:-translate-y-2">
                        <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${method.color} mb-4 dark:text-red-500`}>
                          <Icon className="w-6 h-6" />
                        </div>

                        <h3 className="text-lg font-semibold mb-2 dark:group-hover:text-red-500 group-hover:text-gray-500 transition-colors">{method.label}</h3>
                        <p className="text-muted-foreground group-hover:text-foreground transition-colors break-all">{method.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </section>
            <section>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{language === "pt" ? "Entre em Contato" : "Get in Touch"}</h1>
              <p className="text-lg text-muted-foreground mb-8">
                {language === "pt" ? "Envie uma mensagem e entrarei em contato em breve." : "Send me a message and I'll get back to you soon."}
              </p>

              <div className="border border-black/20 dark:border-red-500/30 rounded-lg p-6 md:p-8 bg-gradient-to-br from-black/5 to-black/5 dark:from-red-500/5 dark:to-red-400/5 hover:border-gray-900 hover:from-black/10 hover:to-black/10 dark:hover:border-red-500 dark:hover:from-red-500/10 dark:hover:to-red-400/10 transition-all duration-300 shadow-lg shadow-black/30 dark:shadow-red-500/30">
                {submitted && (
                  <div className="mb-6 p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400 animate-slide-up">
                    <p className="font-semibold">
                      {language === "pt" ? "✓ Mensagem enviada com sucesso!" : "✓ Message sent successfully!"}
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-1">{language === "pt" ? "Nome" : "Name"}</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 rounded-lg border border-black/20 dark:border-red-500/30 bg-background text-black dark:text-white placeholder:text-black/60 dark:placeholder:text-white/60 hover:border-gray-900 dark:hover:border-red-500 focus:border-black dark:focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-black/20 dark:focus:ring-red-500/20 transition-all duration-300 resize-none text-sm"
                      placeholder={language === "pt" ? "Seu nome" : "Your name"}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-1">{language === "pt" ? "Email" : "Email"}</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 rounded-lg border border-black/20 dark:border-red-500/30 bg-background text-black dark:text-white placeholder:text-black/60 dark:placeholder:text-white/60 hover:border-gray-900 dark:hover:border-red-500 focus:border-black dark:focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-black/20 dark:focus:ring-red-500/20 transition-all duration-300 resize-none text-sm"
                      placeholder={language === "pt" ? "seu@email.com" : "your@email.com"}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-1">{language === "pt" ? "Mensagem" : "Message"}</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-3 py-2 rounded-lg border border-black/20 dark:border-red-500/30 bg-background text-black dark:text-white placeholder:text-black/60 dark:placeholder:text-white/60 hover:border-gray-900 dark:hover:border-red-500 focus:border-black dark:focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-black/20 dark:focus:ring-red-500/20 transition-all duration-300 resize-none text-sm"
                      placeholder={language === "pt" ? "Sua mensagem..." : "Your message..."}
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-lg px-4 py-2 bg-gradient-to-r from-black to-gray-800 dark:from-red-500 dark:to-red-700 hover:to-gray-900 dark:hover:to-red-800 text-white border-0 shadow-sm hover:shadow-xl hover:shadow-black/20 dark:hover:shadow-red-500/20 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-sm flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      language === "pt" ? "Enviando..." : "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        {language === "pt" ? "Enviar Mensagem" : "Send Message"}
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0  bg-black/80 z-[9999] flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-background border border-black/30 dark:border-red-500/30 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 flex items-center justify-between p-6 border-b border-black/10 dark:border-red-500/10 bg-background">
              <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
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
                        onClick={() => setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-300 transform hover:scale-110"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={() => setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length)}
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
                        <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Status & Details */}
              <div className="flex items-center gap-4">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${getStatusColor(selectedProject.status)}`}>
                  {selectedProject.status}
                </span>
                <span className="text-sm text-muted-foreground">{selectedProject.year}</span>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold mb-2">{language === "pt" ? "Descrição" : "Description"}</h3>
                <p className="text-muted-foreground leading-relaxed">{selectedProject.fullDescription}</p>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-lg font-semibold mb-3">{language === "pt" ? "Tecnologias Utilizadas" : "Technologies Used"}</h3>
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
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <button className="w-full px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    {language === "pt" ? "Ver Projeto" : "View Project"}
                  </button>
                </a>
                {selectedProject.github !== "#" && (
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
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

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-black/10 dark:border-red-500/20 text-center text-muted-foreground">
        <p>{language === "pt" ? "© 2025 Gabriel Lucas. Todos os direitos reservados." : "© 2025 Gabriel Lucas. All rights reserved."}</p>
      </footer>
    </div>
  );
}
function scrollToSection(section: string): void {
  throw new Error("Function not implemented.");
}

