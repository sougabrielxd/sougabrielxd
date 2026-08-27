/*
 * Layout aninhado (não-root) do grupo (coming-soon-pt) — html/body vêm do
 * root layout compartilhado em src/app/layout.tsx, já com lang="pt-BR"
 * (idioma padrão do site), então nenhuma correção de idioma é necessária
 * aqui. Só ajusta color-scheme para light+dark nesta rota especificamente
 * — globals.css força a página inteira em color-scheme:light para o
 * portfólio de tema único claro, mas a landing macOS segue
 * prefers-color-scheme nos dois sentidos.
 */
export default function ComingSoonPtLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html:
            "document.documentElement.style.colorScheme='light dark';" +
            "document.cookie='lang=pt;path=/;max-age=31536000;samesite=lax'",
        }}
      />
      {children}
    </>
  )
}
