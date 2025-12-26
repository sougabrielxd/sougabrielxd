import { useState, useEffect, useRef } from "react";

interface UseTypewriterOptions {
  /** Array de textos para alternar */
  texts: string[];
  /** Velocidade de digitação em ms (padrão: 50) */
  typingSpeed?: number;
  /** Pausa entre textos em ms (padrão: 2000) */
  pauseDelay?: number;
  /** Pausa após deletar texto em ms (padrão: 500) */
  deleteSpeed?: number;
  /** Se deve fazer loop infinito (padrão: true) */
  loop?: boolean;
  /** Delay inicial antes de começar em ms (padrão: 0) */
  startDelay?: number;
  /** Se deve mostrar cursor piscante (padrão: true) */
  showCursor?: boolean;
}

export function useTypewriter({
  texts,
  typingSpeed = 50,
  pauseDelay = 2000,
  deleteSpeed = 30,
  loop = true,
  startDelay = 0,
  showCursor = true,
}: UseTypewriterOptions) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  // Verificar se o usuário prefere animações reduzidas
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      prefersReducedMotion.current = mediaQuery.matches;

      const handleChange = (e: MediaQueryListEvent) => {
        prefersReducedMotion.current = e.matches;
      };

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  useEffect(() => {
    // Se o usuário prefere animações reduzidas, mostrar texto completo imediatamente
    if (prefersReducedMotion.current) {
      setDisplayedText(texts[0] || "");
      return;
    }

    // Delay inicial
    if (!hasStarted && startDelay > 0) {
      const startTimer = setTimeout(() => {
        setHasStarted(true);
      }, startDelay);
      return () => clearTimeout(startTimer);
    }

    if (!hasStarted) {
      setHasStarted(true);
    }

    if (!hasStarted || texts.length === 0) return;

    const currentText = texts[currentIndex];

    if (isPaused) {
      // Pausa entre textos
      timeoutRef.current = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDelay);
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }

    if (isDeleting) {
      // Deletando texto
      if (displayedText.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
        }, deleteSpeed);
      } else {
        // Terminou de deletar, passar para próximo texto
        setIsDeleting(false);
        setCurrentIndex((prev) => {
          const nextIndex = prev + 1;
          if (nextIndex >= texts.length) {
            return loop ? 0 : prev;
          }
          return nextIndex;
        });
      }
    } else {
      // Digitando texto
      if (displayedText.length < currentText.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayedText((prev) => currentText.slice(0, prev.length + 1));
        }, typingSpeed);
      } else {
        // Terminou de digitar, pausar
        setIsPaused(true);
      }
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [
    displayedText,
    currentIndex,
    isDeleting,
    isPaused,
    texts,
    typingSpeed,
    pauseDelay,
    deleteSpeed,
    loop,
    startDelay,
    hasStarted,
  ]);

  return {
    text: displayedText,
    cursor: showCursor && !prefersReducedMotion.current ? "|" : "",
  };
}

