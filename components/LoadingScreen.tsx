/**
 * LoadingScreen - Modern + AutoHide
 */

import React, { useEffect, useState } from "react";

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
  loadingText = "Carregando...",
  fadeOutDuration = 600,
  autoHideDelay = 2000,
  autoHide = true,
  onLoadingComplete,
}: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    if (!autoHide) return;

    const timer = setTimeout(() => {
      setIsHiding(true);

      setTimeout(() => {
        setIsVisible(false);
        onLoadingComplete?.();
      }, fadeOutDuration);
    }, autoHideDelay);

    return () => clearTimeout(timer);
  }, [autoHide, autoHideDelay, fadeOutDuration, onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`
        fixed inset-0 z-[10000] flex flex-col items-center justify-center
        bg-black transition-opacity
        ${isHiding ? "opacity-0" : "opacity-100"}
      `}
      style={{ transitionDuration: `${fadeOutDuration}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-red-600/10 via-transparent to-red-500/10" />

      <div className="relative flex flex-col items-center gap-6">
        <div className="relative w-28 h-28 flex items-center justify-center">
          <div
            className="
              absolute inset-0 rounded-full border-2 border-red-500/20
              bg-[conic-gradient(from_0deg,transparent,red_60%,transparent)]
            "
            style={{
              animation: "rotateRing 2.5s linear infinite",
              mask: "radial-gradient(circle, transparent 55%, black 56%)",
            }}
          />
          <img
            src={logoSrc}
            alt="logo"
            className="w-12 h-12 object-contain"
            style={{
              animation: "logoFloat 3s ease-in-out infinite",
              filter: "drop-shadow(0 0 8px rgba(255,0,0,0.4))",
            }}
          />
        </div>

        <p className="text-white text-lg font-medium tracking-wide">
          {loadingText}
        </p>

        <p className="text-red-500/60 text-sm font-light">
          Preparando portfólio...
        </p>
      </div>

      <style>{`
        @keyframes rotateRing {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes logoFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </div>
  );
}

export default LoadingScreen;
