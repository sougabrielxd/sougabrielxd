"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Instagram, Github, Send, CheckCircle2, AlertCircle, Loader2, Check, MapPin } from "lucide-react";
import LattesIcon from "@/components/LattesIcon";
import { useState, useMemo } from "react";
import { z } from "zod";

// ============================================================
// CONTACT DATA
// ============================================================

// Contact methods for the right side (main contact info)
const mainContactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "gabriellucasafb@gmail.com",
    href: "mailto:gabriellucasafb@gmail.com?subject=Contato%20do%20Portfólio&body=Olá,%20vim%20pelo%20seu%20Portfólio%20e%20gostaria%20de%20falar%20sobre...",
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

// ============================================================
// CONTACT COMPONENT
// ============================================================

export default function Contact() {
  const { language } = useLanguage();

  const contactSchema = useMemo(() => z.object({
    name: z.string().min(2, language === "pt" ? "Nome deve ter pelo menos 2 caracteres" : "Name must be at least 2 characters"),
    email: z.string().email(language === "pt" ? "Email inválido" : "Invalid email"),
    message: z.string().min(10, language === "pt" ? "Mensagem deve ter pelo menos 10 caracteres" : "Message must be at least 10 characters").max(1000, language === "pt" ? "Mensagem deve ter no máximo 1000 caracteres" : "Message must be at most 1000 characters"),
  }), [language]);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Validação em tempo real
  const validateField = (name: string, value: string) => {
    try {
      // Validação específica por campo
      if (name === "name") {
        if (value.length < 2) {
          return language === "pt" ? "Nome deve ter pelo menos 2 caracteres" : "Name must be at least 2 characters";
        }
      } else if (name === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return language === "pt" ? "Email inválido" : "Invalid email";
        }
      } else if (name === "message") {
        if (value.length < 10) {
          return language === "pt" ? "Mensagem deve ter pelo menos 10 caracteres" : "Message must be at least 10 characters";
        }
        if (value.length > 1000) {
          return language === "pt" ? "Mensagem deve ter no máximo 1000 caracteres" : "Message must be at most 1000 characters";
        }
      }
      return "";
    } catch (error) {
      return "";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validação em tempo real apenas se o campo foi tocado
    if (touched[name]) {
      const error = validateField(name, value);
      setFieldErrors((prev) => {
        const newErrors = { ...prev };
        if (error) {
          newErrors[name] = error;
        } else {
          // Remove a chave se não há erro
          delete newErrors[name];
        }
        return newErrors;
      });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    const error = validateField(name, value);
    setFieldErrors((prev) => {
      const newErrors = { ...prev };
      if (error) {
        newErrors[name] = error;
      } else {
        // Remove a chave se não há erro
        delete newErrors[name];
      }
      return newErrors;
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setErrorMessage("");
    setFieldErrors({});
    setSubmitted(false);

    // Marcar todos os campos como tocados
    setTouched({ name: true, email: true, message: true });

    // Validação completa
    const validationResult = contactSchema.safeParse(formData);
    
    if (!validationResult.success) {
      const errors: Record<string, string> = {};
      validationResult.error.issues.forEach((err) => {
        if (err.path[0]) {
          errors[err.path[0].toString()] = err.message;
        }
      });
      setFieldErrors(errors);
      setLoading(false);
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("message", formData.message);

      const response = await fetch("https://formspree.io/f/xzdpprjk", {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTouched({});
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error('Erro ao enviar formulário:', err);
      setError(true);
      setErrorMessage(
        language === "pt"
          ? "Erro ao enviar mensagem. Por favor, tente novamente mais tarde."
          : "Error sending message. Please try again later."
      );
      setTimeout(() => {
        setError(false);
        setErrorMessage("");
      }, 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-red-500 dark:text-white">
          {language === "pt" ? "Contato" : "Contact"}
        </h1>

        <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 md:mb-12">
          {language === "pt"
            ? "Vamos construir algo incrível juntos! Entre em contato."
            : "Let's build something amazing together! Get in touch."}
        </p>

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
                  className={`group flex items-start gap-4 p-4 sm:p-5 rounded-lg border-2 border-red-500/30 dark:border-red-700/80
                    bg-gradient-to-r from-red-500/5 to-transparent dark:from-red-500/5 
                    hover:from-red-500/10 hover:to-red-500/5 dark:hover:from-red-500/10 
                    transition-all duration-300 transform hover:scale-105 hover:-translate-y-1
                    hover:shadow-lg hover:shadow-red-500/20 dark:hover:shadow-red-500/20`}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 dark:text-red-500 text-red-500 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 flex-shrink-0" />
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

        {/* Contact Form Section */}
        <section className="mt-8 sm:mt-10 md:mt-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-red-500 dark:text-white">
            {language === "pt" ? "Envie uma Mensagem" : "Send a Message"}
          </h2>

            {submitted && (
              <div className="p-3 sm:p-4 mb-3 sm:mb-4 text-xs sm:text-sm text-green-700 bg-green-100 dark:bg-green-900/30 border border-green-500/30 dark:border-green-500/50 rounded-lg flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span>
                  {language === "pt"
                    ? "Mensagem enviada com sucesso!"
                    : "Message sent successfully!"}
                </span>
              </div>
            )}

            {error && errorMessage && (
              <div className="p-3 sm:p-4 mb-3 sm:mb-4 text-xs sm:text-sm text-red-700 bg-red-100 dark:bg-red-900/30 border border-red-500/30 dark:border-red-500/50 rounded-lg flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
                <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label className="block text-xs sm:text-sm font-semibold mb-1 text-gray-800 dark:text-white">
                  {language === "pt" ? "Nome" : "Name"}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  placeholder={language === "pt" ? "Seu nome" : "Your name"}
                  className={`w-full px-3 py-2 text-sm sm:text-base rounded-lg border bg-white dark:bg-background text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500/50 dark:focus:ring-red-500/50 ${
                    fieldErrors.name
                      ? "border-red-500 dark:border-red-500 focus:border-red-500"
                      : touched.name && !fieldErrors.name
                      ? "border-green-500 dark:border-green-500"
                      : "border-red-500/30 dark:border-red-700/80 focus:border-red-500/60"
                  }`}
                />
                {fieldErrors.name && (
                  <p className="text-red-600 dark:text-red-400 text-xs mt-1 font-medium flex items-center gap-1 animate-in fade-in slide-in-from-top-1">
                    <AlertCircle className="w-3 h-3" />
                    {fieldErrors.name}
                  </p>
                )}
                {touched.name && !fieldErrors.name && formData.name && (
                  <p className="text-green-600 dark:text-green-400 text-xs mt-1 font-medium flex items-center gap-1 animate-in fade-in slide-in-from-top-1">
                    <CheckCircle2 className="w-3 h-3" />
                    {language === "pt" ? "Válido" : "Valid"}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold mb-1 text-gray-800 dark:text-white">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  placeholder="seu@email.com"
                  className={`w-full px-3 py-2 text-sm sm:text-base rounded-lg border bg-white dark:bg-background text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500/50 dark:focus:ring-red-500/50 ${
                    fieldErrors.email
                      ? "border-red-500 dark:border-red-500 focus:border-red-500"
                      : touched.email && !fieldErrors.email
                      ? "border-green-500 dark:border-green-500"
                      : "border-red-500/30 dark:border-red-700/80 focus:border-red-500/60"
                  }`}
                />
                {fieldErrors.email && (
                  <p className="text-red-600 dark:text-red-400 text-xs mt-1 font-medium flex items-center gap-1 animate-in fade-in slide-in-from-top-1">
                    <AlertCircle className="w-3 h-3" />
                    {fieldErrors.email}
                  </p>
                )}
                {touched.email && !fieldErrors.email && formData.email && (
                  <p className="text-green-600 dark:text-green-400 text-xs mt-1 font-medium flex items-center gap-1 animate-in fade-in slide-in-from-top-1">
                    <CheckCircle2 className="w-3 h-3" />
                    {language === "pt" ? "Email válido" : "Valid email"}
                  </p>
                )}
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs sm:text-sm font-semibold text-gray-800 dark:text-white">
                    {language === "pt" ? "Mensagem" : "Message"}
                  </label>
                  <span className={`text-xs font-medium ${
                    formData.message.length < 10
                      ? "text-gray-500 dark:text-gray-400"
                      : formData.message.length > 1000
                      ? "text-red-500 dark:text-red-400"
                      : "text-green-600 dark:text-green-400"
                  }`}>
                    {formData.message.length} / 1000
                  </span>
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  rows={4}
                  maxLength={1000}
                  placeholder={
                    language === "pt" ? "Sua mensagem..." : "Your message..."
                  }
                  className={`w-full px-3 py-2 text-sm sm:text-base rounded-lg border bg-white dark:bg-background text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500/50 dark:focus:ring-red-500/50 resize-none ${
                    fieldErrors.message
                      ? "border-red-500 dark:border-red-500 focus:border-red-500"
                      : touched.message && !fieldErrors.message
                      ? "border-green-500 dark:border-green-500"
                      : "border-red-500/30 dark:border-red-700/80 focus:border-red-500/60"
                  }`}
                />
                {fieldErrors.message && (
                  <p className="text-red-600 dark:text-red-400 text-xs mt-1 font-medium flex items-center gap-1 animate-in fade-in slide-in-from-top-1">
                    <AlertCircle className="w-3 h-3" />
                    {fieldErrors.message}
                  </p>
                )}
                {touched.message && !fieldErrors.message && formData.message && (
                  <p className="text-green-600 dark:text-green-400 text-xs mt-1 font-medium flex items-center gap-1 animate-in fade-in slide-in-from-top-1">
                    <CheckCircle2 className="w-3 h-3" />
                    {language === "pt" ? "Mensagem válida" : "Valid message"}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={loading || Object.values(fieldErrors).some(error => error && error.length > 0)}
                className="w-full rounded-lg px-4 py-2.5 sm:py-2 bg-gradient-to-r from-red-500 to-red-600 dark:from-red-500 dark:to-red-700 hover:from-red-600 hover:to-red-700 dark:hover:to-red-800 text-white border-0 shadow-sm hover:shadow-xl hover:shadow-red-500/20 dark:hover:shadow-red-500/20 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm sm:text-base flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                    {language === "pt" ? "Enviando..." : "Sending..."}
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    {language === "pt"
                      ? "Enviar Mensagem"
                      : "Send Message"}
                  </>
                )}
              </Button>
            </form>
        </section>

        {/* Social Media Footer */}
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
      </div>
    </section>
  );
}
