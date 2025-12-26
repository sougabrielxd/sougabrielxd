"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Quote, Star, User } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

// ============================================================
// TESTIMONIALS DATA
// ============================================================

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  text: {
    pt: string;
    en: string;
  };
  avatar?: string;
  rating?: number;
  featured?: boolean;
}

const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Luciana Carrilho",
    role: "Cartorária",
    company: "Cartório Alto Longá",
    text: {
      pt: "Gabriel desenvolveu nosso site institucional com excelência. Profissionalismo, atenção aos detalhes e entrega dentro do prazo. O resultado superou nossas expectativas e trouxe uma presença digital moderna e confiável para nosso cartório.",
      en: "Gabriel developed our institutional website with excellence. Professionalism, attention to detail, and delivery on time. The result exceeded our expectations and brought a modern and reliable digital presence to our notary office.",
    },
    rating: 5,
    featured: true,
  },
  {
    id: "2",
    name: "André Arraes",
    role: "Desenvolvedor Full-Stack",
    company: "Freelancer",
    text: {
      pt: "Trabalhei com Gabriel no projeto CONECC e fiquei impressionado com sua capacidade técnica e comprometimento. Código limpo, bem estruturado e sempre disposto a colaborar. Recomendo sem hesitação.",
      en: "I worked with Gabriel on the CONECC project and was impressed by his technical ability and commitment. Clean, well-structured code and always willing to collaborate. I recommend without hesitation.",
    },
    rating: 5,
  },
  {
    id: "3",
    name: "Vinícius Souza",
    role: "CTO",
    company: "Carboon Cycle",
    text: {
      pt: "Gabriel é um desenvolvedor excepcional. Sua expertise em WordPress e automação nos ajudou a otimizar processos internos e melhorar significativamente nossa produtividade. Sempre disponível e proativo.",
      en: "Gabriel is an exceptional developer. His expertise in WordPress and automation helped us optimize internal processes and significantly improve our productivity. Always available and proactive.",
    },
    rating: 5,
  },
  {
    id: "4",
    name: "Carlos Mendes",
    role: "Diretor de Marketing",
    company: "Agência Digital",
    text: {
      pt: "Gabriel é um desenvolvedor excepcional. Sua expertise em WordPress e automação nos ajudou a otimizar processos internos e melhorar significativamente nossa produtividade. Sempre disponível e proativo.",
      en: "Gabriel is an exceptional developer. His expertise in WordPress and automation helped us optimize internal processes and significantly improve our productivity. Always available and proactive.",
    },
    rating: 5,
  },
  {
    id: "5",
    name: "Ana Paula",
    role: "Empreendedora",
    company: "E-commerce",
    text: {
      pt: "O trabalho do Gabriel transformou nossa presença online. Desenvolveu uma plataforma completa, responsiva e com excelente performance. Comunicação clara durante todo o projeto e entrega impecável.",
      en: "Gabriel's work transformed our online presence. He developed a complete, responsive platform with excellent performance. Clear communication throughout the project and impeccable delivery.",
    },
    rating: 5,
  },
  {
    id: "6",
    name: "Roberto Santos",
    role: "CTO",
    company: "Tech Solutions",
    text: {
      pt: "Gabriel demonstrou grande conhecimento técnico e capacidade de resolver problemas complexos. Sua abordagem metodológica e atenção aos detalhes fazem dele um profissional de confiança para qualquer projeto.",
      en: "Gabriel demonstrated great technical knowledge and ability to solve complex problems. His methodological approach and attention to detail make him a trusted professional for any project.",
    },
    rating: 5,
  },
];

// ============================================================
// TESTIMONIALS COMPONENT
// ============================================================

export default function Testimonials() {
  const { language } = useLanguage();
  const [visibleTestimonials, setVisibleTestimonials] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  // Separar depoimento destacado dos demais
  const featuredTestimonial = testimonialsData.find((t) => t.featured);
  const otherTestimonials = testimonialsData.filter((t) => !t.featured);

  // Intersection Observer para animações on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const indexAttr = entry.target.getAttribute("data-testimonial-index");
            if (indexAttr === "featured") {
              setVisibleTestimonials((prev) => 
                prev.includes(-1) ? prev : [...prev, -1]
              );
            } else {
              const index = parseInt(indexAttr || "0");
              if (!isNaN(index)) {
                setVisibleTestimonials((prev) => 
                  prev.includes(index) ? prev : [...prev, index]
                );
              }
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-testimonial-index]");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Renderizar estrelas de avaliação
  const renderStars = (rating: number = 5) => {
    return (
      <div className="flex items-center gap-1" aria-label={`${rating} estrelas`}>
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300 dark:text-gray-600"
            }`}
            aria-hidden="true"
          />
        ))}
      </div>
    );
  };

  // Renderizar avatar com fallback
  const renderAvatar = (testimonial: Testimonial) => {
    if (testimonial.avatar) {
      return (
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={64}
          height={64}
          className="w-16 h-16 rounded-full object-cover border-2 border-red-500/30 dark:border-red-500/50"
          loading="lazy"
        />
      );
    }
    return (
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500/20 to-red-400/20 dark:from-red-500/30 dark:to-red-400/30 border-2 border-red-500/30 dark:border-red-500/50 flex items-center justify-center">
        <User className="w-8 h-8 text-red-500 dark:text-red-400" />
      </div>
    );
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-10 sm:py-14 md:py-16 px-4 sm:px-6 relative overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 text-red-500 dark:text-white">
            {language === "pt" ? "Depoimentos" : "Testimonials"}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            {language === "pt"
              ? "Veja o que clientes e parceiros dizem sobre meu trabalho"
              : "See what clients and partners say about my work"}
          </p>
        </div>

        {/* Featured Testimonial */}
        {featuredTestimonial && (
          <article
            data-testimonial-index="featured"
            className="mb-6 sm:mb-8 md:mb-10 transition-all duration-700 opacity-100 translate-y-0"
          >
            <div className="bg-white dark:bg-card rounded-xl p-6 sm:p-8 md:p-10 shadow-xl border border-red-500/30 dark:border-red-500/30 hover:border-red-500/60 dark:hover:border-red-500/60 transition-all duration-300">
              <div className="flex items-start gap-4 sm:gap-6">
                {/* Quote Icon */}
                <div className="shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-red-500/10 to-red-400/10 dark:from-red-500/20 dark:to-red-400/20 flex items-center justify-center border border-red-500/30 dark:border-red-500/50">
                    <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-red-500 dark:text-red-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Rating */}
                  {featuredTestimonial.rating && (
                    <div className="mb-3 sm:mb-4">
                      {renderStars(featuredTestimonial.rating)}
                    </div>
                  )}

                  {/* Testimonial Text */}
                  <blockquote className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 mb-4 sm:mb-5 md:mb-6 leading-relaxed italic">
                    "{featuredTestimonial.text[language]}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    {renderAvatar(featuredTestimonial)}
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white text-sm sm:text-base md:text-lg">
                        {featuredTestimonial.name}
                      </p>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                        {featuredTestimonial.role}
                        {featuredTestimonial.company && (
                          <span className="text-red-500 dark:text-red-400">
                            {" "}
                            · {featuredTestimonial.company}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        )}

        {/* Other Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7">
          {otherTestimonials.map((testimonial, index) => (
            <article
              key={testimonial.id}
              data-testimonial-index={index}
              className="transition-all duration-700 opacity-100 translate-y-0"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white dark:bg-card rounded-xl p-6 sm:p-7 md:p-8 shadow-lg border border-red-500/20 dark:border-red-500/20 hover:border-red-500/50 dark:hover:border-red-500/50 hover:shadow-xl transition-all duration-300 flex flex-col">
                {/* Quote Icon */}
                <div className="mb-3 sm:mb-4">
                  <Quote className="w-6 h-6 sm:w-7 sm:h-7 text-red-500/50 dark:text-red-400/50" />
                </div>

                {/* Rating */}
                {testimonial.rating && (
                  <div className="mb-3 sm:mb-4">{renderStars(testimonial.rating)}</div>
                )}

                {/* Testimonial Text */}
                <blockquote className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 mb-4 sm:mb-5 md:mb-6 leading-relaxed flex-1">
                  "{testimonial.text[language]}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 sm:pt-5 border-t border-gray-200 dark:border-gray-700">
                  {renderAvatar(testimonial)}
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base md:text-lg break-words">
                      {testimonial.name}
                    </p>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 break-words">
                      {testimonial.role}
                      {testimonial.company && (
                        <span className="text-red-500 dark:text-red-400">
                          {" "}
                          · {testimonial.company}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-8 sm:mt-10 md:mt-12 text-center">
          <div className="bg-gradient-to-br from-red-500/10 to-red-400/10 dark:from-red-500/20 dark:to-red-400/20 rounded-xl p-6 sm:p-7 md:p-8 border border-red-500/30 dark:border-red-500/30">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white">
              {language === "pt"
                ? "Pronto para transformar sua ideia em realidade?"
                : "Ready to turn your idea into reality?"}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-5 sm:mb-6">
              {language === "pt"
                ? "Vamos trabalhar juntos e criar algo incrível para seu negócio."
                : "Let's work together and create something amazing for your business."}
            </p>
            <a href="#contact">
              <Button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2.5 sm:py-3 px-6 sm:px-8 text-sm sm:text-base rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/30">
                {language === "pt" ? "Entre em Contato" : "Get in Touch"}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

