// components/ThemeButton.tsx

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        p-3 rounded-full border border-red-500/50 dark:border-red-500/50 
        hover:border-red-500 dark:hover:border-red-500 
        bg-gradient-to-br from-red-500/10 to-red-400/10 
        dark:from-red-500/10 dark:to-red-400/10 
        hover:from-red-500/20 hover:to-red-400/20 
        dark:hover:from-red-400/20 dark:hover:to-red-400/20 
        text-red-500 dark:text-white  
        transition-all duration-300 transform hover:scale-110 
        hover:shadow-lg hover:shadow-red-500/40 dark:hover:shadow-red-500/40 
        group
        cursor-pointer
      "
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-white transition-transform duration-300 group-hover:rotate-180" />
      ) : (
        <Moon className="w-5 h-5 text-red-500 transition-transform duration-300 group-hover:rotate-180" />
      )}
    </button>
  );
}

export default ThemeButton;
