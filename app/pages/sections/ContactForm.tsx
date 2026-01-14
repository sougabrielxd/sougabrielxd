"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useState, useMemo } from "react";
import { z } from "zod";

export default function ContactForm() {
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

      const response = await fetch("https://formspree.io/f/xeeoylwr", {
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
          className="w-full rounded-lg px-4 py-2.5 sm:py-2 bg-gradient-to-r cursor-pointer from-red-500 to-red-600 dark:from-red-500 dark:to-red-700 hover:from-red-600 hover:to-red-700 dark:hover:to-red-800 text-white border-0 shadow-sm hover:shadow-xl hover:shadow-red-500/20 dark:hover:shadow-red-500/20 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm sm:text-base flex items-center justify-center gap-2"
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
  );
}
