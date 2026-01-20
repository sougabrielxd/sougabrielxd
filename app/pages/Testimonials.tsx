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
  link?: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Luciana",
    role: "Titular",
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
    link: "https://www.linkedin.com/in/andrearraes/",
    company: "Freelancer",
    avatar: "/testimonials/andre.jpeg",
    text: {
      pt: "Trabalhei com Gabriel em vários projetos freelancer como CONECC e Cartório Alto Longá e fiquei impressionado com sua capacidade técnica e comprometimento. Código limpo, bem estruturado e sempre disposto a colaborar. Recomendo sem hesitação.",
      en: "I worked with Gabriel on the CONECC and Cartório Alto Longá projects and was impressed by his technical ability and commitment. Clean, well-structured code and always willing to collaborate. I recommend without hesitation.",
    },
    rating: 5,
  },
  {
    id: "3",
    name: "Vinícius Souza",
    role: "CTO",
    company: "Carboon Cycle",
    link: "https://www.linkedin.com/in/viniszofx/",
    avatar: "/testimonials/vinicius.jpeg",
    text: {
      pt: "Tive o prazer de acompanhar Gabriel Lucas em projetos de desenvolvimento web, Destaca-se pela criatividade, excelente comunicação e postura profissional madura, além do interesse constante em aprender e colaborar ativamente. Demonstra iniciativa, visão prática e entrega soluções eficientes, agregando valor real aos projetos. Recomendo com confiança.",
      en: "I had the pleasure of working with Gabriel Lucas on web development projects. He stands out for his creativity, excellent communication and mature professional demeanor, as well as his constant interest in learning and actively collaborating. He demonstrates initiative, practical vision and delivers efficient solutions, adding real value to projects. I recommend with confidence.",
    },
    rating: 5,
  },
  {
      id: "4",
    name: "Sabrina Dias",
    role: "Diretora",
    company: "CONECC",
    text: {
      pt: "Gostaria de te agradecer pelo trabalho realizado na landing page do congresso. Fiquei extremamente satisfeita com o resultado. O layout está muito organizado, delicado e transmite exatamente a identidade que eu imaginava para o evento. Ficou realmente muito lindo e totalmente alinhado ao meu gosto e à proposta do congresso. Obrigada pelo cuidado, atenção aos detalhes e profissionalismo. Seu trabalho foi maravilhoso!",
      en: "I would like to thank you for the work you did on the congress landing page. I was extremely satisfied with the result. The layout is very organized, delicate and transmits exactly the identity I imagined for the event. It looks really beautiful and totally aligned with my taste and the proposal of the congress. Thank you for the care, attention to detail and professionalism. Your work was wonderful!",
    },
    rating: 5,
  },
  {
    id: "5",
    name: "Ian Caleb",
    role: "Desenvolvedor Full-Stack",
    company: "NexTI UniFAP",
    avatar: "/testimonials/ian.jpeg",
    link: "https://www.linkedin.com/in/ian-caleb-batista-fernandes-36b73727b/",
    text: {
      pt: "Tive a oportunidade de trabalhar com Gabriel no projeto Learn Skills, iniciado do zero com tecnologias novas para a equipe. Ele demonstrou um aprendizado rápido, grande eficiência e capricho em tudo que desenvolveu. Sua capacidade de entender regras de negócio e aplicar isso no front-end e no back-end foi essencial para o avanço do projeto. Com certeza é um profissional que agrega valor a qualquer equipe.   ",
      en: "I had the opportunity to work with Gabriel on the Learn Skills project, started from scratch with new technologies for the team. He demonstrated rapid learning, great efficiency and attention to detail in everything he developed. His ability to understand business rules and apply them in the front-end and back-end was essential for the advancement of the project. Certainly a professional who adds value to any team.",
    },
    rating: 5,
  },
  {
    id: "6",
    name: "Paulo Cesar",
    role: "Analista de TI",
    avatar: "/testimonials/paulo.jpeg",
    company: "Evogard",
    link: "https://www.linkedin.com/in/paulo-cesar-b073881a0/",
    text: {
      pt: "Gabriel demonstra sólido conhecimento técnico e grande capacidade de resolver problemas complexos. Sua abordagem estruturada, aliada à atenção aos detalhes e ao pensamento analítico, faz dele um profissional confiável e altamente qualificado para atuar em projetos desafiadores.",
      en: "Gabriel demonstrates solid technical knowledge and great ability to solve complex problems. His structured approach, combined with attention to detail and analytical thinking, makes him a reliable and highly qualified professional to work on challenging projects.",
    },
    rating: 5,
  },
  {
    id: "7",
    name: "Daniel Afonso Silva ",
    role: "CEO",
    avatar: "/testimonials/daniel.jpeg",
    company: "Carbon Cycle",
    link: "https://www.linkedin.com/in/dani-afonso/",
    text: {
      pt: "Gabriel possui uma base técnica consistente e se destaca pela habilidade em analisar cenários complexos e encontrar soluções eficientes. Sua forma organizada de trabalhar, somada ao cuidado com a qualidade das entregas e ao raciocínio lógico, o torna um profissional preparado para contribuir de forma segura em projetos de maior complexidade.",
      en: "Gabriel has a consistent technical base and stands out for his ability to analyze complex scenarios and find efficient solutions. His organized approach, combined with attention to the quality of deliveries and logical reasoning, makes him a professional prepared to contribute safely to projects of greater complexity.",
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
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());
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
    const hasError = imageErrors.has(testimonial.id);
    
    if (testimonial.avatar && !hasError) {
      return (
        <div className="relative w-16 h-16 shrink-0">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            width={64}
            height={64}
            className="w-16 h-16 rounded-full object-cover border-2 border-red-500/30 dark:border-red-500/50"
            loading="lazy"
            unoptimized
            onError={() => {
              setImageErrors((prev) => new Set(prev).add(testimonial.id));
            }}
          />
        </div>
      );
    }
    return (
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500/20 to-red-400/20 dark:from-red-500/30 dark:to-red-400/30 border-2 border-red-500/30 dark:border-red-500/50 flex items-center justify-center shrink-0">
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
                      {featuredTestimonial.link ? (
                        <a
                          href={featuredTestimonial.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-gray-900 dark:text-white text-sm sm:text-base md:text-lg hover:text-red-500 dark:hover:text-red-400 transition-colors duration-200 cursor-pointer underline-offset-2 hover:underline"
                        >
                          {featuredTestimonial.name}
                        </a>
                      ) : (
                        <p className="font-bold text-gray-900 dark:text-white text-sm sm:text-base md:text-lg">
                          {featuredTestimonial.name}
                        </p>
                      )}
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
        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 sm:gap-6 md:gap-7 ">
          {otherTestimonials.map((testimonial, index) => (
            <article
              key={testimonial.id}
              data-testimonial-index={index}
              className="break-inside-avoid mb-5 sm:mb-6 md:mb-7 transition-all duration-700 opacity-100 translate-y-0"
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
                    {testimonial.link ? (
                      <a
                        href={testimonial.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base md:text-lg break-words hover:text-red-500 dark:hover:text-red-400 transition-colors duration-200 cursor-pointer"
                      >
                        {testimonial.name}
                      </a>
                    ) : (
                      <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base md:text-lg break-words">
                        {testimonial.name}
                      </p>
                    )}
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
              <Button className="bg-red-500 hover:bg-red-600 text-white font-semibold cursor-pointer py-2.5 sm:py-3 px-6 sm:px-8 text-sm sm:text-base rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/30">
                {language === "pt" ? "Entre em Contato" : "Get in Touch"}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

