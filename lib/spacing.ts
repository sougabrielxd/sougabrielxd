/**
 * Sistema de Espaçamento Consistente
 * 
 * Este arquivo define tokens de espaçamento padronizados
 * para uso em todo o projeto, garantindo consistência visual.
 */

export const spacing = {
  xs: '0.5rem',   // 8px
  sm: '1rem',     // 16px
  md: '1.5rem',   // 24px
  lg: '2rem',     // 32px
  xl: '3rem',     // 48px
  '2xl': '4rem',  // 64px
} as const;

/**
 * Classes Tailwind correspondentes aos espaçamentos
 */
export const spacingClasses = {
  xs: 'p-2',      // padding: 0.5rem
  sm: 'p-4',      // padding: 1rem
  md: 'p-6',      // padding: 1.5rem
  lg: 'p-8',      // padding: 2rem
  xl: 'p-12',     // padding: 3rem
  '2xl': 'p-16',  // padding: 4rem
} as const;

/**
 * Margens verticais padronizadas
 */
export const verticalSpacing = {
  section: 'py-20',      // Espaçamento entre seções principais
  subsection: 'py-12',   // Espaçamento entre subseções
  element: 'mb-6',       // Espaçamento entre elementos
  small: 'mb-4',         // Espaçamento pequeno
  large: 'mb-8',         // Espaçamento grande
} as const;

/**
 * Hierarquia Tipográfica
 */
export const typography = {
  h1: 'text-4xl md:text-5xl lg:text-6xl',  // Títulos principais
  h2: 'text-3xl md:text-4xl lg:text-5xl',  // Títulos de seção
  h3: 'text-2xl md:text-3xl',              // Subtítulos
  h4: 'text-xl md:text-2xl',                // Títulos menores
  body: 'text-base md:text-lg',             // Texto corpo
  small: 'text-sm md:text-base',            // Texto pequeno
  caption: 'text-xs md:text-sm',            // Legendas
} as const;
