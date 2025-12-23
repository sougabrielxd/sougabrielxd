import { X, Github, Linkedin, Instagram, Mail } from "lucide-react";
import { ReactNode } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  language: "pt" | "en";
  onNavigate: (section: string) => void;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    instagram?: string;
    email?: string;
  };
}

export default function MobileMenu({
  isOpen,
  onClose,
  language,
  onNavigate,
  socialLinks = {
    github: "https://github.com/sougabrielxd",
    linkedin: "https://linkedin.com/in/gabriellucasafb",
    instagram: "https://instagram.com/gabriellucasafb",
    email: "https://mail.google.com/mail/u/0/?fs=1&to=gabriellucasafb@gmail.com&su=Contato+do+Portf%C3%B3lio&body=Ol%C3%A1,+vim+pelo+seu+Portf%C3%B3lio+e+gostaria+de+falar+sobre...&tf=cm",
  },
}: MobileMenuProps) {
  const menuItems = [
    { id: "home", label: language === "pt" ? "Início" : "Home" },
    { id: "about", label: language === "pt" ? "Sobre" : "About" },
    { id: "projects", label: language === "pt" ? "Projetos" : "Projects" },
    { id: "contact", label: language === "pt" ? "Contato" : "Contact" },
  ];

  // Função para navegar e fechar o menu
  const handleNavigate = (section: string) => {
    onNavigate(section);
    onClose();
  };

  // Função para abrir links sociais
  const handleSocialClick = (url?: string) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const socialIcons: Array<{
    icon: ReactNode;
    href?: string;
    label: string;
  }> = [
    {
      icon: <Github className="w-5 h-5" />,
      href: socialLinks.github,
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: socialLinks.linkedin,
      label: "LinkedIn",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: socialLinks.instagram,
      label: "Instagram",
    }, 
    {
      icon: <Mail className="w-5 h-5" />,
      href: socialLinks.email,
      label: "Email",
    },
  ];

  return (
    <>
      {/* Mobile Menu Container */}
      <div
        className={`fixed inset-0 z-[10000] md:hidden transition-all duration-300 ease-out ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Overlay Background - Clicável para fechar */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/10 dark:bg-black/20 backdrop-blur-sm transition-opacity duration-300 ease-out"
            onClick={onClose}
            aria-hidden="true"
          />
        )}

        {/* Menu Content */}
        <div
          className={`fixed inset-0 flex flex-col items-center justify-center bg-white/70 dark:bg-black/60 backdrop-blur-lg transition-all duration-300 ease-out transform ${
            isOpen
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          {/* Close Button - Sempre acessível */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-[10001] p-2 rounded-full hover:bg-black/10 dark:hover:bg-red-500/10 transition-colors duration-200 group cursor-pointer"
            aria-label="Fechar menu"
            type="button"
          >
            <X className="w-6 h-6 text-black dark:text-red-500 transition-transform duration-300 group-hover:rotate-90" />
          </button>

          {/* Menu Links */}
          <nav className="flex flex-col items-center gap-8 mb-12">
            {menuItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                type="button"
                className={`text-2xl font-bold text-black dark:text-white hover:text-red-500 dark:hover:text-red-500 transition-all duration-300 transform hover:scale-110 cursor-pointer ${
                  isOpen
                    ? `opacity-100 translate-y-0 transition-all duration-300 ease-out`
                    : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex gap-6 items-center justify-center">
            {socialIcons.map((social, index) => (
              <button
                key={social.label}
                onClick={() => handleSocialClick(social.href)}
                type="button"
                className={`p-3 rounded-full border border-black/30 dark:border-red-500/30 hover:border-black dark:hover:border-red-500 bg-black/5 dark:bg-red-500/5 hover:bg-black/10 dark:hover:bg-red-500/10 text-black dark:text-red-500 hover:text-red-500 dark:hover:text-red-400 transition-all duration-300 transform hover:scale-110 hover:shadow-lg cursor-pointer ${
                  isOpen
                    ? "opacity-100 translate-y-0 transition-all duration-300 ease-out"
                    : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: isOpen ? `${200 + index * 50}ms` : "0ms",
                }}
                aria-label={social.label}
              >
                {social.icon}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
