import { ReactNode } from "react";
import { Code } from "lucide-react";
import { FaVuejs } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import {
  SiCss3,
  SiDjango,
  SiDiscord,
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
  SiChatwoot,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { DiRedis } from "react-icons/di";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdIntegrationInstructions, MdApi } from "react-icons/md";
import { Monitor, Server, Wrench, Cpu } from "lucide-react";

export const getTechIcon = (tech: string): ReactNode => {
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
    Discord: <SiDiscord className="w-4 h-4 text-indigo-500" />,
    Docker: <SiDocker className="w-4 h-4 text-blue-400" />,
    Postman: <SiPostman className="w-4 h-4 text-orange-500" />,
    Jira: <SiJira className="w-4 h-4 text-blue-600" />,
    Vite: <SiVite className="w-4 h-4 text-purple-500" />,
    Vercel: <SiVercel className="w-4 h-4 text-black dark:text-black" />,
    Figma: <SiFigma className="w-4 h-4 text-pink-500" />,
    WordPress: <SiWordpress className="w-4 h-4 text-sky-600" />,
    "VS Code": <VscVscode className="w-4 h-4 text-blue-500" />,
    N8n: <SiN8N className="w-4 h-4 text-pink-500 dark:text-pink-400" />,
    n8n: <SiN8N className="w-4 h-4 text-pink-500 dark:text-pink-400" />,
    Redis: <DiRedis className="w-4 h-4 text-red-600 dark:text-red-500" />,
    Integration: <MdIntegrationInstructions className="w-4 h-4 text-blue-500" />,
    Chatwoot: <SiChatwoot className="w-4 h-4 text-green-600 dark:text-green-500" />,
    EvolutionAPI: <MdApi className="w-4 h-4 text-blue-600 dark:text-blue-500" />,
    Trello: <SiTrello className="w-4 h-4 text-blue-600 dark:text-blue-500" />,
    Notion: <SiNotion className="w-4 h-4 text-black dark:text-white" />,
    Easypanel: <Server className="w-4 h-4 text-purple-600 dark:text-purple-500" />,
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
