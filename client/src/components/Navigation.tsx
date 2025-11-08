import { Link } from "wouter";
import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo/Home Link */}
        <Link href="/">
          <a className="text-xl font-bold font-mono hover:text-accent transition-colors">
            GL
          </a>
        </Link>

        {/* Navigation Links */}
        {/* <div className="hidden md:flex gap-8 ">
          <Link href="/">
            <a className="text-sm hover:text-accent transition-colors">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-sm hover:text-accent transition-colors">Sobre</a>
          </Link>
          <Link href="/projects">
            <a className="text-sm hover:text-accent transition-colors">Projetos</a>
          </Link>
          <Link href="/contact">
            <a className="text-sm hover:text-accent transition-colors">Contato</a>
          </Link>
        </div> */}
        {/* Mobile Menu Icon */}
        <div className=" hidden md:flex gap-8 ">
          <Link href="/">
            <a className="text-sm hover:text-accent transition-colors">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-sm hover:text-accent transition-colors">Sobre</a>
          </Link>
          <Link href="/projects">
            <a className="text-sm hover:text-accent transition-colors">Projetos</a>
          </Link>
          <Link href="/contact">
            <a className="text-sm hover:text-accent transition-colors">Contato</a>
          </Link>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>
      </div>
    </nav>
  );
}
