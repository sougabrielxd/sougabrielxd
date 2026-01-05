"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft, Search, Code, Zap, Rocket } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Get language from localStorage with fallback
function getLanguage(): "pt" | "en" {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("language");
    if (saved === "en" || saved === "pt") {
      return saved;
    }
  }
  return "pt";
}

export default function NotFound() {
  const router = useRouter();
  const [language, setLanguage] = useState<"pt" | "en">(getLanguage);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Set dark theme as default
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (!htmlElement.classList.contains("dark") && !htmlElement.classList.contains("light")) {
      htmlElement.classList.add("dark");
    }
  }, []);

  // Listen for language changes in localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      setLanguage(getLanguage());
    };
    
    window.addEventListener("storage", handleStorageChange);
    // Also check periodically (in case same-tab updates)
    const interval = setInterval(() => {
      const current = getLanguage();
      if (current !== language) {
        setLanguage(current);
      }
    }, 1000);
    
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(interval);
    };
  }, [language]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleGoHome = () => {
    router.push("/");
  };

  const handleGoBack = () => {
    router.back();
  };

  const texts = {
    pt: {
      title: "404",
      subtitle: "Página Não Encontrada",
      description: "Ops! Parece que você se perdeu no espaço digital.",
      message: "A página que você está procurando não existe ou foi movida.",
      suggestions: "Você pode:",
      suggestion1: "Verificar o endereço digitado",
      suggestion2: "Voltar para a página anterior",
      suggestion3: "Ir para a página inicial",
      goHome: "Ir para Início",
      goBack: "Voltar",
    },
    en: {
      title: "404",
      subtitle: "Page Not Found",
      description: "Oops! Looks like you're lost in digital space.",
      message: "The page you're looking for doesn't exist or has been moved.",
      suggestions: "You can:",
      suggestion1: "Check the typed address",
      suggestion2: "Go back to the previous page",
      suggestion3: "Go to the home page",
      goHome: "Go Home",
      goBack: "Go Back",
    },
  };

  const t = texts[language];

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br dark:from-slate-900 dark:via-red-950/20 dark:to-slate-800 from-slate-900 via-red-950/20 to-slate-800">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating orbs */}
        <div
          className="absolute w-72 h-72 dark:bg-red-500/5 bg-red-500/5 rounded-full blur-3xl animate-pulse"
          style={{
            top: "10%",
            left: "10%",
            animationDuration: "4s",
          }}
        />
        <div
          className="absolute w-96 h-96 dark:bg-red-600/5 bg-red-600/5 rounded-full blur-3xl animate-pulse"
          style={{
            bottom: "10%",
            right: "10%",
            animationDuration: "6s",
            animationDelay: "1s",
          }}
        />
        
        {/* Gradient cursor follower */}
        <div
          className="absolute w-64 h-64 dark:bg-red-500/10 bg-red-500/10 rounded-full blur-2xl transition-all duration-700 ease-out pointer-events-none"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      <Card className="w-full max-w-2xl mx-4 shadow-2xl border-2 dark:border-red-500/30 border-red-500/30 dark:bg-slate-800/90 bg-slate-800/90 backdrop-blur-md relative z-10">
        <CardContent className="pt-12 pb-12 px-8 text-center">
          {/* Animated 404 Number */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-9xl font-black dark:text-red-500/20 text-red-500/20 select-none">
                404
              </div>
            </div>
            <h1 className="relative text-7xl sm:text-8xl font-black dark:text-red-400 text-red-400 mb-4 tracking-tight">
              {t.title}
            </h1>
          </div>

          {/* Icon Animation */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 dark:bg-red-500/10 bg-red-500/10 rounded-full animate-ping" />
              <div className="absolute inset-0 dark:bg-red-500/20 bg-red-500/20 rounded-full animate-pulse" />
              <div className="relative bg-gradient-to-br dark:from-red-500 dark:to-red-700 from-red-500 to-red-700 p-4 rounded-full shadow-lg">
                <Search className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold dark:text-white text-white mb-4">
            {t.subtitle}
          </h2>

          <p className="text-lg dark:text-gray-300 text-gray-300 mb-2">
            {t.description}
          </p>

          <p className="text-base dark:text-gray-400 text-gray-400 mb-8">
            {t.message}
          </p>

          {/* Suggestions */}
          <div className="dark:bg-red-950/20 bg-red-950/20 rounded-xl p-6 mb-8 border dark:border-red-800/50 border-red-800/50">
            <p className="text-sm font-semibold dark:text-gray-300 text-gray-300 mb-4">
              {t.suggestions}
            </p>
            <div className="space-y-3 text-left">
              <div className="flex items-start gap-3">
                <div className="mt-1 p-1.5 dark:bg-red-500/20 bg-red-500/20 rounded-lg">
                  <Code className="w-4 h-4 dark:text-red-400 text-red-400" />
                </div>
                <p className="text-sm dark:text-gray-400 text-gray-400 flex-1">
                  {t.suggestion1}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 p-1.5 dark:bg-red-500/20 bg-red-500/20 rounded-lg">
                  <ArrowLeft className="w-4 h-4 dark:text-red-400 text-red-400" />
                </div>
                <p className="text-sm dark:text-gray-400 text-gray-400 flex-1">
                  {t.suggestion2}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 p-1.5 dark:bg-red-500/20 bg-red-500/20 rounded-lg">
                  <Home className="w-4 h-4 dark:text-red-400 text-red-400" />
                </div>
                <p className="text-sm dark:text-gray-400 text-gray-400 flex-1">
                  {t.suggestion3}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleGoBack}
              variant="outline"
              className=" cursor-pointer rounded-lg px-6 py-3 border-2 dark:border-red-500/50 border-red-500/50 
                dark:text-red-400 text-red-400 bg-transparent
                dark:hover:bg-red-500/10 hover:bg-red-500/10
                dark:hover:border-red-500 hover:border-red-500
                transition-all duration-300 transform hover:scale-105
                shadow-md hover:shadow-lg"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t.goBack}
            </Button>
            
            <Button
              onClick={handleGoHome}
              className=" cursor-pointer rounded-lg px-8 py-3 bg-gradient-to-r dark:from-red-500 dark:to-red-700 from-red-500 to-red-700
                dark:hover:from-red-600 dark:hover:to-red-800 hover:from-red-600 hover:to-red-800
                text-white border-0 
                dark:shadow-red-500/20 shadow-red-500/20 shadow-lg
                hover:shadow-xl dark:hover:shadow-red-500/40 hover:shadow-red-500/40
                transition-all duration-300 transform hover:scale-105
                flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              {t.goHome}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

