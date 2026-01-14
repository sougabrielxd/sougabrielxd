"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Phone, Linkedin, Instagram, Github } from "lucide-react";
import DiscordIcon from "@/components/DiscordIcon";

// Social media links for footer
const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/sougabrielxd/",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    href: "https://wa.me//5587991811562?text=Olá,%20gostaria%20de%20tirar%20algumas%20dúvidas",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/gabriellucasafb/",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gabriellucasafb/",
  },
  {
    icon: DiscordIcon,
    label: "Discord",
    href: "https://discord.gg/7gvSUSFzxc",
  },
];

export default function SocialLinks() {
  const { language } = useLanguage();

  return (
    <div className="text-center mt-8 sm:mt-10 md:mt-12">
      <p className="text-muted-foreground mb-4 text-sm sm:text-base">
        {language === "pt" ? "Me encontre nas redes sociais" : "Find me on social media"}
      </p>
      <div className="flex items-center justify-center gap-4 sm:gap-6">
        {socialLinks.map((social, idx) => {
          const Icon = social.icon;
          return (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black dark:text-white hover:text-red-500 dark:hover:text-red-500 transition-colors"
              aria-label={social.label}
            >
              <Icon className="w-6 h-6" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
