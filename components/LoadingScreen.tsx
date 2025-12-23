/**
 * LoadingScreen - Modern + AutoHide
 */

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface LoadingScreenProps {
  logoSrc?: string;
  loadingText?: string;
  fadeOutDuration?: number;

  /** Quanto tempo o loading fica na tela antes de sumir */
  autoHideDelay?: number;

  /** Se true, o componente some automaticamente */
  autoHide?: boolean;

  /** Callback quando tudo terminar */
  onLoadingComplete?: () => void;
}

export function LoadingScreen({
  logoSrc = "/img/x-red.svg",
  loadingText,
  fadeOutDuration = 800,
  autoHideDelay = 2000,
  autoHide = true,
  onLoadingComplete,
}: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isHiding, setIsHiding] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!autoHide) return;

    // Simula progresso
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, autoHideDelay / 50);

    const timer = setTimeout(() => {
      setProgress(100);
      setIsHiding(true);

      setTimeout(() => {
        setIsVisible(false);
        onLoadingComplete?.();
      }, fadeOutDuration);
    }, autoHideDelay);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [autoHide, autoHideDelay, fadeOutDuration, onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`
        fixed inset-0 z-[10000] flex flex-col items-center justify-center
        bg-background transition-opacity
        ${isHiding ? "opacity-0" : "opacity-100"}
      `}
      style={{ transitionDuration: `${fadeOutDuration}ms` }}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-red-500/10 dark:from-red-500/10 dark:via-transparent dark:to-red-500/5" />
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/5 dark:bg-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-red-500/5 dark:bg-red-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative flex flex-col items-center gap-8 z-10">
        {/* Logo Container with Multiple Rings */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          {/* Outer Rotating Ring */}
          <div
            className="absolute inset-0 rounded-full border-2 border-red-500/20 dark:border-red-500/30"
            style={{
              animation: "rotateRing 3s linear infinite",
            }}
          />
          
          {/* Middle Rotating Ring (reverse) */}
          <div
            className="absolute inset-2 rounded-full border border-red-500/30 dark:border-red-500/40"
            style={{
              animation: "rotateRingReverse 2s linear infinite",
            }}
          />
          
          {/* Inner Glow Ring */}
          <div
            className="absolute inset-4 rounded-full bg-gradient-to-r from-red-500/20 via-red-500/10 to-red-500/20 dark:from-red-500/30 dark:via-red-500/20 dark:to-red-500/30"
            style={{
              animation: "pulseGlow 2s ease-in-out infinite",
            }}
          />

          {/* Logo */}
          <div className="relative z-10">
            <Image
              src={logoSrc}
              alt="Logo"
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
              style={{
                filter: "drop-shadow(0 0 10px rgba(239, 68, 68, 0.4))",
              }}
              priority
            />
          </div>
        </div>

        {/* Loading Text */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-foreground text-xl font-semibold tracking-wide">
            {loadingText || "Carregando..."}
          </p>
          <p className="text-red-500/70 dark:text-red-400/60 text-sm font-light">
            Preparando portfólio...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-red-500 to-red-600 dark:from-red-500 dark:to-red-700 rounded-full transition-all duration-300 ease-out"
            style={{
              width: `${progress}%`,
              boxShadow: "0 0 10px rgba(239, 68, 68, 0.5)",
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes rotateRing {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes rotateRingReverse {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }

        @keyframes pulseGlow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
}

export default LoadingScreen;
