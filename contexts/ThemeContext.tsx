"use client"
import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme?: () => void;
  switchable: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  switchable?: boolean;
}

/**
 * Gets the initial theme based on priority:
 * 1. Manual user preference (localStorage)
 * 2. System preference (prefers-color-scheme)
 * 3. Default theme fallback
 */
function getInitialTheme(defaultTheme: Theme): Theme {
  if (typeof window === "undefined") return defaultTheme;

  try {
    // Priority 1: Check for manual user preference
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      return stored as Theme;
    }

    // Priority 2: Detect system preference
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    // Priority 3: Fallback to default
    return defaultTheme;
  } catch (error) {
    console.warn("Error detecting theme:", error);
    return defaultTheme;
  }
}

export function ThemeProvider({
  children,
  defaultTheme = "light",
  switchable = false,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (switchable) {
      return getInitialTheme(defaultTheme);
    }
    return defaultTheme;
  });

  // Apply theme to document with smooth transition
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;
    
    const root = document.documentElement;
    
    // Add transition class for smooth theme change
    root.classList.add("theme-transition");
    
    // Apply theme
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // Remove transition class after transition completes (prevents initial flash)
    const timeout = setTimeout(() => {
      root.classList.remove("theme-transition");
    }, 300);

    // Save manual preference to localStorage
    if (switchable) {
      try {
        localStorage.setItem("theme", theme);
      } catch (error) {
        console.warn("Error saving theme to localStorage:", error);
      }
    }

    return () => clearTimeout(timeout);
  }, [theme, switchable]);

  // Listen to system theme changes (only if no manual preference exists)
  useEffect(() => {
    if (!switchable || typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    const handleSystemThemeChange = (e: MediaQueryListEvent | MediaQueryList) => {
      // Only apply system theme if user hasn't manually set a preference
      const stored = localStorage.getItem("theme");
      if (!stored) {
        setTheme(e.matches ? "dark" : "light");
      }
    };

    // Check if browser supports addEventListener
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleSystemThemeChange);
      return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleSystemThemeChange);
      return () => mediaQuery.removeListener(handleSystemThemeChange);
    }
  }, [switchable]);

  const toggleTheme = useCallback(() => {
    if (!switchable) return;
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  }, [switchable]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: switchable ? toggleTheme : undefined, switchable }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
