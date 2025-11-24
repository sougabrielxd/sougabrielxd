import { useEffect, useState } from "react";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe, Mail, Phone, Linkedin, Menu, Send } from "lucide-react";
import Particles from "@/components/Particles";

export default function Contact() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
	    email: "",
	    phone: "",  
	    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "", phone: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
    } finally {
      setLoading(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: language === "pt" ? "Email" : "Email",
      value: "gabriellucasafb@gmail.com",
      href: "mailto:gabrielxd@example.com",
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

      {/* Contact Form */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
      <Particles />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            {language === "pt" ? "Formas de Contato" : "Ways to Contact"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactMethods.map((method, idx) => {
              const Icon = method.icon;
              return (
                <a
                  key={idx}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group"
                >
                  <div className="border border-black/30 text-sm dark:border-red-500/30 rounded-lg p-6 
                    bg-gradient-to-br from-black/5 to-black/5 dark:from-red-500/5 dark:to-red-400/5 
                    hover:border-black dark:hover:border-red-500 
                    hover:from-black/10 hover:to-black/10 dark:hover:from-red-500/10 dark:hover:to-red-400/10 
                    transition-all duration-300 
                    hover:shadow-lg hover:shadow-black/20 dark:hover:shadow-red-500/20
                    transform hover:scale-105 hover:-translate-y-2">
                    
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${method.color} mb-4 dark:text-red-500`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg font-semibold mb-2 dark:group-hover:text-red-500 group-hover:text-gray-500 transition-colors">
                      {method.label}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors break-all">
	                      {method.value}
	                    </p>
	                  </div>
	                </a>
	              );
	            })}
	          </div>
	        </section>
	        <section>
	          <h1 className="text-4xl md:text-5xl font-bold mb-4">
	            {language === "pt" ? "Entre em Contato" : "Get in Touch"}
	          </h1>
	          <p className="text-lg text-muted-foreground mb-8">
	            {language === "pt"
	              ? "Envie uma mensagem e entrarei em contato em breve."
	              : "Send me a message and I'll get back to you soon."}
	          </p>

	          <div className="border border-black/20 dark:border-red-500/30 
	            rounded-lg p-6 md:p-8 
	            bg-gradient-to-br from-black/5 to-black/5 dark:from-red-500/5 dark:to-red-400/5 
	            hover:border-gray-900 hover:from-black/10 hover:to-black/10 
	            dark:hover:border-red-500 dark:hover:from-red-500/10 dark:hover:to-red-400/10 
	            transition-all duration-300 
	            shadow-lg shadow-black/30 dark:shadow-red-500/30">     {submitted && (
              <div className="mb-6 p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400 animate-slide-up">
                <p className="font-semibold">
                  {language === "pt"
                    ? "✓ Mensagem enviada com sucesso!"
                    : "✓ Message sent successfully!"}
                </p>
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
                  className="w-full px-3 py-2 rounded-lg border border-black/20 dark:border-red-500/30 
                            bg-background text-black dark:text-white 
                            placeholder:text-black/60 dark:placeholder:text-white/60 
                            hover:border-gray-900 dark:hover:border-red-500 
                            focus:border-black dark:focus:border-red-500 
                            focus:outline-none focus:ring-1 
                            focus:ring-black/20 dark:focus:ring-red-500/20 
                            transition-all duration-300 resize-none text-sm"
                  placeholder={
                    language === "pt" ? "Seu nome" : "Your name"
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">
                  {language === "pt" ? "Email" : "Email"}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 rounded-lg border border-black/20 dark:border-red-500/30 
                            bg-background text-black dark:text-white 
                            placeholder:text-black/60 dark:placeholder:text-white/60 
                            hover:border-gray-900 dark:hover:border-red-500 
                            focus:border-black dark:focus:border-red-500 
                            focus:outline-none focus:ring-1 
                            focus:ring-black/20 dark:focus:ring-red-500/20 
                            transition-all duration-300 resize-none text-sm"
                  placeholder={
                    language === "pt" ? "seu@email.com" : "your@email.com"
                  }
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
                  className="w-full px-3 py-2 rounded-lg border border-black/20 dark:border-red-500/30 
                            bg-background text-black dark:text-white 
                            placeholder:text-black/60 dark:placeholder:text-white/60 
                            hover:border-gray-900 dark:hover:border-red-500 
                            focus:border-black dark:focus:border-red-500 
                            focus:outline-none focus:ring-1 
                            focus:ring-black/20 dark:focus:ring-red-500/20 
                            transition-all duration-300 resize-none text-sm"
                  placeholder={
                    language === "pt" ? "Sua mensagem..." : "Your message..."
                  }
                />
              </div>

	              <Button
	                type="submit"
	                disabled={loading}
	                className="w-full rounded-lg px-4 py-2 
	                bg-gradient-to-r from-black to-gray-800 dark:from-red-500 dark:to-red-700 
	                hover:to-gray-900 dark:hover:to-red-800 
	                text-white border-0 shadow-sm 
	                hover:shadow-xl hover:shadow-black/20 dark:hover:shadow-red-500/20 
	                transition-all duration-300 transform hover:scale-105 
	                disabled:opacity-50 disabled:cursor-not-allowed text-sm flex items-center justify-center gap-2"
	              >
	                {loading ? (
	                  language === "pt" ? (
	                    "Enviando..."
	                  ) : (
	                    "Sending..."
	                  )
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
	      </main>
    </div>
  );
}
