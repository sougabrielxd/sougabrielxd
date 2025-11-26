// components/ThemeButton.tsx

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        p-3 rounded-full border border-black/50 dark:border-red-500/50 
        hover:border-black dark:hover:border-red-500 
        bg-gradient-to-br from-black/10 to-gray-700/10 
        dark:from-red-500/10 dark:to-red-400/10 
        hover:from-black/20 hover:to-gray-800/20 
        dark:hover:from-red-400/20 dark:hover:to-red-400/20 
        text-black dark:text-white  
        transition-all duration-300 transform hover:scale-110 
        hover:shadow-lg hover:shadow-black/40 dark:hover:shadow-red-500/40 
        group
      "
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-white transition-transform duration-300 group-hover:rotate-180" />
      ) : (
        <Moon className="w-5 h-5 text-black transition-transform duration-300 group-hover:rotate-180" />
      )}
    </button>
  );
}

export default ThemeButton;
