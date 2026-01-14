"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import ContactInfo from "./sections/ContactInfo";
import ContactForm from "./sections/ContactForm";
import SocialLinks from "./sections/SocialLinks";

export default function Contact() {
  const { language } = useLanguage();

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 text-red-500 dark:text-white">
            {language === "pt" ? "Contato" : "Contact"}
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            {language === "pt"
              ? "Vamos construir algo incrível juntos! Entre em contato."
              : "Let's build something amazing together! Get in touch."}
          </p>
        </div>

        {/* Contact Info Section */}
        <ContactInfo />

        {/* Contact Form Section */}
        <ContactForm />

        {/* Social Links Section */}
        <SocialLinks />
      </div>
    </section>
  );
}
