import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

/**
 * 
 * @component
 * @returns {JSX.Element} The scroll-to-top button
 */
const ScrollToTop: React.FC = () => {

  const [isVisible, setIsVisible] = useState(false);
  

  const { theme } = useTheme();


  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Button container with conditional visibility */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`
            cursor-pointer fixed bottom-8 right-8 z-40
            w-10 h-10 rounded-full
            flex items-center justify-center
            transition-all duration-300 ease-out
            hover:scale-110 hover:-translate-y-1
            active:scale-95
            focus-visible:outline-2 focus-visible:outline-offset-2
            animate-in fade-in slide-in-from-bottom-4
            ${
              theme === "dark"
                ? "bg-red-500/90 text-white shadow-lg shadow-red-500/30 hover:bg-red-600 hover:shadow-red-500/50 focus-visible:outline-red-400"
                : "bg-red-500/90 text-white shadow-lg shadow-red-500/30 hover:bg-red-600 hover:shadow-red-500/50 focus-visible:outline-red-400"
            }
            sm:bottom-6 sm:right-6
            max-sm:bottom-4 max-sm:right-4
            max-sm:w-11 max-sm:h-11
            landscape:bottom-4 landscape:right-4
          `}
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          {/* Arrow up icon from lucide-react */}
          <ArrowUp size={24} strokeWidth={2.5} className="max-sm:w-5 max-sm:h-5" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
