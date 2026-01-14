"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Phone, Linkedin, MapPin, Check } from "lucide-react";

// Contact methods for the right side (main contact info)
const mainContactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "contato@gabriellucasafb.com.br",
    href: "mailto:contato@gabriellucasafb.com.br?subject=Contato%20do%20Portfólio&body=Olá,%20vim%20pelo%20seu%20Portfólio%20e%20gostaria%20de%20falar%20sobre...",
    description: {
      pt: "Respondido em até 24 horas",
      en: "Responded within 24 hours"
    }
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+55 (87) 99181-1562",
    href: "https://wa.me//5587991811562?text=Olá,%20gostaria%20de%20tirar%20algumas%20dúvidas",
    description: {
      pt: "Disponível em horário comercial",
      en: "Available during business hours"
    }
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/gabriellucasafb",
    href: "https://www.linkedin.com/in/gabriellucasafb/",
    description: {
      pt: "Conecte-se profissionalmente",
      en: "Connect professionally"
    }
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Araripina - PE, Brasil",
    href: "#",
    description: {
      pt: "Atendimento remoto ou local",
      en: "Remote or local service"
    }
  },
];

// Services offered
const services = {
  pt: [
    "Desenvolvimento de sites e aplicações web",
    "Aplicações mobile e PWAs",
    "Dashboards e sistemas personalizados",
  ],
  en: [
    "Website and web application development",
    "Mobile applications and PWAs",
    "Custom dashboards and personalized systems",
  ],
};

export default function ContactInfo() {
  const { language } = useLanguage();

  return (
    <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12">
      {/* Left Card - Availability & Services */}
      <div className="bg-white dark:bg-card rounded-xl p-6 sm:p-8 shadow-xl border border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          {language === "pt" ? "Pronto para iniciar seu projeto?" : "Ready to start your project?"}
        </h2>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm sm:text-base">
          {language === "pt"
            ? "Estou disponível para novos projetos e consultas. Entre em contato por qualquer um dos canais abaixo para discutirmos como posso ajudar no seu próximo projeto digital."
            : "I am available for new projects and consultations. Get in touch through any of the channels below to discuss how I can help with your next digital project."}
        </p>

        {/* Availability Status */}
        <div className="mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDuration: '2s' }}></div>
            <p className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">
              {language === "pt" ? "Disponível para novos projetos" : "Available for new projects"}
            </p>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm ml-5">
            {language === "pt" 
              ? "Atualmente com agenda para iniciar em 3 dias"
              : "Currently with availability to start in 3 days"}
          </p>
        </div>

        {/* Services Offered */}
        <div>
          <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-base sm:text-lg">
            {language === "pt" ? "Serviços Oferecidos:" : "Services Offered:"}
          </h3>
          <ul className="space-y-3">
            {services[language].map((service, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-red-500 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Side - Contact Methods */}
      <div className="space-y-4 sm:space-y-6">
        {mainContactMethods.map((method, idx) => {
          const Icon = method.icon;
          return (
            <a
              key={idx}
              href={method.href}
              target={method.href !== "#" ? "_blank" : undefined}
              rel={method.href !== "#" ? "noopener noreferrer" : undefined}
              onClick={method.href === "#" ? (e) => e.preventDefault() : undefined}
              className={`group flex items-center gap-4 p-4 sm:p-5 rounded-lg border-2 border-red-500/30 dark:border-red-700/80
                bg-gradient-to-r from-red-500/5 to-transparent dark:from-red-500/5 
                hover:from-red-500/10 hover:to-red-500/5 dark:hover:from-red-500/10 
                transition-all duration-300 transform hover:scale-105 hover:-translate-y-1
                hover:shadow-lg hover:shadow-red-500/20 dark:hover:shadow-red-500/20`}
            >
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 dark:text-red-500 text-red-500 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-gray-600 dark:text-muted-foreground transition-colors duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                  {method.label}
                </p>
                <p className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-red-500 dark:group-hover:text-red-400 break-words">{method.value}</p>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {method.description[language]}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
