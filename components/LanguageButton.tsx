// components/LanguageButton.tsx

import { useState } from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageButton() {
  const { language, toggleLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  const handleSelect = (lang: string) => {
    if (lang !== language) {
      toggleLanguage();
    }
    setOpen(false);
  };

  return (
    <div className="relative">
      {/* BOTÃO PRINCIPAL */}
      <button
        onClick={() => setOpen(!open)}
        className="
          p-3 rounded-full border border-red-500/50 dark:border-red-500/50
          hover:border-red-500 dark:hover:border-red-500
          bg-gradient-to-br from-red-500/10 to-red-400/10
          dark:from-red-500/10 dark:to-red-400/10
          hover:from-red-500/20 hover:to-red-400/20
          dark:hover:from-red-400/20 dark:hover:to-red-400/20
          text-red-500 dark:text-white
          hover:text-red-600 dark:hover:text-red-500
          transition-all duration-300 transform hover:scale-110
          hover:shadow-lg hover:shadow-red-500/40 dark:hover:shadow-red-500/40
          group
        "
        aria-label="Select language"
      >
        <Globe className="w-5 h-5 transition-all duration-300 group-hover:rotate-6" />
      </button>

      {/* DROPDOWN */}
      {open && (
        <div
          className="
            absolute right-0 mt-2 w-32 rounded-lg border 
            border-red-500/50 dark:border-red-500/50 
            bg-background shadow-lg shadow-red-500/40 
            dark:shadow-red-500/20 z-50 overflow-hidden
            transition-all duration-300
          "
        >
          {/* PORTUGUÊS */}
          <button
            onClick={() => handleSelect("pt")}
            className="
              w-full px-4 py-2 text-left 
              border-t border-red-500/20 dark:border-red-500/20
              hover:bg-red-500/10 dark:hover:bg-red-500/10
              transition-colors flex items-center gap-2
            "
          >
            <span className="text-sm font-semibold text-gray-800 dark:text-white">Português</span>
            {language === "pt" && (
              <span className="ml-auto text-red-500 dark:text-red-500">✓</span>
            )}
          </button>

          {/* INGLÊS */}
          <button
            onClick={() => handleSelect("en")}
            className="
              w-full px-4 py-2 text-left 
              border-t border-red-500/20 dark:border-red-500/20
              hover:bg-red-500/10 dark:hover:bg-red-500/10
              transition-colors flex items-center gap-2
            "
          >
            <span className="text-sm font-semibold text-gray-800 dark:text-white">English</span>
            {language === "en" && (
              <span className="ml-auto text-red-500 dark:text-red-500">✓</span>
            )}
          </button>
        </div>
      )}
    </div>
  );
}

export default LanguageButton;
