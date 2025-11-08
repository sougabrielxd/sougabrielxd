import { useState } from "react";
import { Moon, Sun, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

export default function Contact() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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
      // Simula o envio (pode ser trocado por chamada real à API)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Theme and Language Toggle */}
      <div className="fixed top-6 right-6 z-50 flex gap-3">
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
                  setLanguage("pt");
                  setShowLanguageMenu(false);
                }}
                className="w-full px-4 py-2 text-left 
                border-t border-black/20 dark:border-red-500/20 
                hover:bg-black/10 dark:hover:bg-red-500/10 
                transition-colors flex items-center gap-2"
              >
                <span className="text-sm font-semibold">Português</span>
                {language === "pt" && <span className="ml-auto text-black dark:text-red-500">✓</span>}
              </button>
              <button
                onClick={() => {
                  setLanguage("en");
                  setShowLanguageMenu(false);
                }}
                className="w-full px-4 py-2 text-left 
                border-t border-black/20 dark:border-red-500/20 
                hover:bg-black/10 dark:hover:bg-red-500/10 
                transition-colors flex items-center gap-2"
              >
                <span className="text-sm font-semibold">English</span>
                {language === "en" && <span className="ml-auto text-black dark:text-red-500">✓</span>}
              </button>
            </div>
          )}
        </div>

        {/* Theme Toggle */}
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

      {/* Navigation Links */}
      <div className="fixed top-6 left-6 z-50 flex gap-6">
        <Link href="/">
          <a className="text-sm hover:text-red-500 transition-colors font-semibold">
          {language === "pt"
                      ? "Inicio"
                      : "Home"
                      }
          </a>
        </Link>
        <Link href="/projects">
          <a className="text-sm hover:text-red-500 transition-colors font-semibold">
          {language === "pt"
                      ? "Projetos"
                      : "Projects"
                      }
          </a>
        </Link>
        <Link href="/About">
          <a className="text-sm hover:text-red-500 transition-colors font-semibold">
          {language === "pt"
                      ? "Sobre"
                      : "About"
                      }
            </a>
        </Link>
      </div>


      {/* Contact Form */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <section>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {language === "pt" ? "Entre em Contato" : "Get in Touch"}
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            {language === "pt"
              ? "Envie uma mensagem e entrarei em contato em breve."
              : "Send me a message and I'll get back to you soon."}
          </p>

          <div className="border border-black/60 dark:border-red-500/30 
            rounded-lg p-8 
            bg-gradient-to-br from-black/5 to-black/5 dark:from-red-500/5 dark:to-red-400/5 
            hover:border-black hover:from-black/10 hover:to-black/10 
            dark:hover:border-red-500 dark:hover:from-red-500/10 dark:hover:to-red-400/10 
            transition-all duration-300 
            shadow-lg shadow-black/30 dark:shadow-red-500/30">
            {submitted && (
              <div className="mb-6 p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400 animate-slide-up">
                <p className="font-semibold">
                  {language === "pt"
                    ? "✓ Mensagem enviada com sucesso!"
                    : "✓ Message sent successfully!"}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  {language === "pt" ? "Nome" : "Name"}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-black/60 dark:border-red-500/30 
                            bg-background text-black dark:text-white 
                            placeholder:text-black/60 dark:placeholder:text-white/60 
                            hover:border-black dark:hover:border-red-500 
                            focus:border-black dark:focus:border-red-500 
                            focus:outline-none focus:ring-2 
                            focus:ring-black/20 dark:focus:ring-red-500/20 
                            transition-all duration-300 resize-none"
                  placeholder={
                    language === "pt" ? "Seu nome" : "Your name"
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-black/60 dark:border-red-500/30 
                            bg-background text-black dark:text-white 
                            placeholder:text-black/60 dark:placeholder:text-white/60 
                            hover:border-black dark:hover:border-red-500 
                            focus:border-black dark:focus:border-red-500 
                            focus:outline-none focus:ring-2 
                            focus:ring-black/20 dark:focus:ring-red-500/20 
                            transition-all duration-300 resize-none"
                  placeholder={
                    language === "pt"
                      ? "seu@email.com"
                      : "your@email.com"
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  {language === "pt" ? "Assunto" : "Subject"}
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-black/60 dark:border-red-500/30 
                            bg-background text-black dark:text-white 
                            placeholder:text-black/60 dark:placeholder:text-white/60 
                            hover:border-black dark:hover:border-red-500 
                            focus:border-black dark:focus:border-red-500 
                            focus:outline-none focus:ring-2 
                            focus:ring-black/20 dark:focus:ring-red-500/20 
                            transition-all duration-300 resize-none"
                  placeholder={
                    language === "pt"
                      ? "Assunto da mensagem"
                      : "Message subject"
                  }
                />
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-black/60 dark:border-red-500/30 
                            bg-background text-black dark:text-white 
                            placeholder:text-black/60 dark:placeholder:text-white/60 
                            hover:border-black dark:hover:border-red-500 
                            focus:border-black dark:focus:border-red-500 
                            focus:outline-none focus:ring-2 
                            focus:ring-black/20 dark:focus:ring-red-500/20 
                            transition-all duration-300 resize-none"
                placeholder={
                language === "pt"
                      ? "Sua mensagem aqui..."
                      : "Your message here..."
                }   
            />


              <Button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg px-6 py-3 
                bg-gradient-to-r from-black to-gray-800 dark:from-red-500 dark:to-red-700 
                hover:to-gray-900 dark:hover:to-red-800 
                text-white border-0 shadow-sm 
                hover:shadow-xl hover:shadow-black/20 dark:hover:shadow-red-500/20 
                transition-all duration-300 transform hover:scale-105 
                disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading
                  ? language === "pt"
                    ? "Enviando..."
                    : "Sending..."
                  : language === "pt"
                    ? "Enviar Mensagem"
                    : "Send Message"}
              </Button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
