import React, { useEffect, useRef } from "react";
import { useTheme } from "@/contexts/ThemeContext";

const ParticlesComponent: React.FC = () => {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    // Particle array
    const particles: Particle[] = [];
    const particleCount = 20;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.radius = Math.random() * 2 + 1;
        this.color = theme === "dark" ? "rgba(255, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.5)";
      }

      update(canvasWidth: number, canvasHeight: number) {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off walls
        if (this.x - this.radius < 0 || this.x + this.radius > canvasWidth) {
          this.vx = -this.vx;
          this.x = Math.max(this.radius, Math.min(canvasWidth - this.radius, this.x));
        }
        if (this.y - this.radius < 0 || this.y + this.radius > canvasHeight) {
          this.vy = -this.vy;
          this.y = Math.max(this.radius, Math.min(canvasHeight - this.radius, this.y));
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvas.width, canvas.height));
    }

    // Draw lines between nearby particles
    const drawLines = (context: CanvasRenderingContext2D) => {
      const lineColor = theme === "dark" ? "rgba(255, 0, 0, 0.2)" : "rgba(0, 0, 0, 0.2)";
      const maxDistance = 150;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            context.strokeStyle = lineColor;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(particles[i].x, particles[i].y);
            context.lineTo(particles[j].x, particles[j].y);
            context.stroke();
          }
        }
      }
    };

    // Animation loop - sempre continua mesmo durante scroll
    const animate = () => {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update(canvas.width, canvas.height);
        particle.draw(ctx);
      });

      drawLines(ctx);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Iniciar animação
    animate();

    // Handle window resize
    const handleResize = () => {
      setCanvasSize();
      // Reposicionar partículas se necessário
      particles.forEach((particle) => {
        if (particle.x > canvas.width) particle.x = canvas.width - particle.radius;
        if (particle.y > canvas.height) particle.y = canvas.height - particle.radius;
      });
    };

    window.addEventListener("resize", handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default ParticlesComponent;
