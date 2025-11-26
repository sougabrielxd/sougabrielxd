"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Instagram, Github, Send } from "lucide-react";
import { useState } from "react";

// ============================================================
// CONTACT DATA
// ============================================================

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "gabriellucasafb@gmail.com",
    href: "https://mail.google.com/mail/u/0/?fs=1&to=gabriellucasafb@gmail.com&su=Contato+do+Portf%C3%B3lio&body=Ol%C3%A1,+vim+pelo+seu+Portf%C3%B3lio+e+gostaria+de+falar+sobre...&tf=cm",
    color: "border dark:border-red-700/80 border-black",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "+55 (87) 99181-1562",
    href: "https://wa.me//5587991811562?text=Olá,%20gostaria%20de%20tirar%20algumas%20dúvidas",
    color: "border dark:border-red-700/80 border-black",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Gabriel Lucas",
    href: "https://www.linkedin.com/in/gabriellucasafb/",
    color: "border dark:border-red-700/80 border-black",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@gabriellucasafb",
    href: "https://www.instagram.com/gabriellucasafb/",
    color: "border dark:border-red-700/80 border-black",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "sougabrielxd",
    href: "https://github.com/sougabrielxd",
    color: "border dark:border-red-700/80 border-black",
  },
];

// ============================================================
// CONTACT COMPONENT
// ============================================================

export default function Contact() {
  const { language } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Corrigido: esta é a função correta usada nos inputs
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Formulário enviado:", formData);

    setLoading(false);
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {language === "pt" ? "Contato" : "Contact"}
        </h1>

        <p className="text-lg text-muted-foreground mb-12">
          {language === "pt"
            ? "Vamos construir algo incrível juntos! Entre em contato."
            : "Let's build something amazing together! Get in touch."}
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <section>
            <h2 className="text-2xl font-bold mb-6">
              {language === "pt" ? "Meus Contatos" : "My Contacts"}
            </h2>

            <div className="space-y-6">
              {contactMethods.map((method, idx) => {
                const Icon = method.icon;
                return (
                  <a
                    key={idx}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center p-4 rounded-lg border-2 ${method.color}
                    bg-gradient-to-r from-black/5 to-transparent dark:from-red-500/5 
                    hover:from-black/10 hover:to-black/5 dark:hover:from-red-500/10 
                    transition-all duration-300`}
                  >
                    <Icon className="w-6 h-6 mr-4 dark:text-red-500 text-black" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {language === "en" && method.label === "Telefone"
                          ? "Phone"
                          : method.label}
                      </p>
                      <p className="text-lg font-bold">{method.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </section>

          {/* Contact Form */}
          <section>
            <h2 className="text-2xl font-bold mb-6">
              {language === "pt" ? "Envie uma Mensagem" : "Send a Message"}
            </h2>

            {submitted && (
              <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800">
                {language === "pt"
                  ? "Mensagem enviada com sucesso!"
                  : "Message sent successfully!"}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1">
                  {language === "pt" ? "Nome" : "Name"}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder={language === "pt" ? "Seu nome" : "Your name"}
                  className="w-full px-3 py-2 rounded-lg border border-black/20 
                  dark:border-red-700/80 bg-background text-black dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="seu@email.com"
                  className="w-full px-3 py-2 rounded-lg border border-black/20 
                  dark:border-red-700/80 bg-background text-black dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">
                  {language === "pt" ? "Mensagem" : "Message"}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  placeholder={
                    language === "pt" ? "Sua mensagem..." : "Your message..."
                  }
                  className="w-full px-3 py-2 rounded-lg border border-black/20 
                  dark:border-red-700/80 bg-background text-black dark:text-white"
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
                    {language === "pt"
                      ? "Enviar Mensagem"
                      : "Send Message"}
                  </>
                )}
              </Button>
            </form>
          </section>
        </div>
      </div>
    </section>
  );
}
