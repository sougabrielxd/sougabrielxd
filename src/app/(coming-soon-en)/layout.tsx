/*
 * Layout aninhado (não-root) do grupo (coming-soon-en) — html/body vêm do
 * root layout compartilhado em src/app/layout.tsx, que define
 * lang="pt-BR" como padrão do site. Como o Next.js não permite múltiplos
 * root layouts simultâneos com <html> próprio SEM quebrar a rota especial
 * /_not-found usada como out/404.html na exportação estática (testado:
 * gera <html> aninhado e inválido), o atributo lang é corrigido aqui por
 * um script síncrono, executado antes de qualquer pintura — o CONTEÚDO
 * desta página já nasce em inglês, renderizado no servidor; só o atributo
 * de metadado lang é ajustado no cliente.
 */
export default function ComingSoonEnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html:
            "document.documentElement.lang='en-US';" +
            "document.documentElement.style.colorScheme='light dark';" +
            "document.cookie='lang=en;path=/;max-age=31536000;samesite=lax'",
        }}
      />
      {children}
    </>
  )
}
