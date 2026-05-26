import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade — GenéricoOu",
  description: "Leia a política de privacidade do GenéricoOu. Informações sobre coleta, uso e proteção de dados dos usuários.",
  alternates: { canonical: "https://genericoou.online/privacidade/" },
  robots: { index: false, follow: false },
};

export default function PrivacidadePage() {
  const ano = new Date().getFullYear();
  return (
    <div className="container section">
      <nav className="breadcrumb">
        <Link href="/">Início</Link>
        <span>›</span>
        <span>Política de Privacidade</span>
      </nav>

      <h1 style={{ fontSize: "clamp(1.4rem,4vw,2rem)", marginBottom: "2rem" }}>
        Política de Privacidade
      </h1>

      <div style={{ maxWidth: "720px", display: "flex", flexDirection: "column", gap: "1.75rem", color: "var(--text-muted)", lineHeight: "1.7" }}>
        <section>
          <h2 style={{ color: "var(--text)", marginBottom: ".5rem" }}>1. Informações Coletadas</h2>
          <p>
            O GenéricoOu é um site de conteúdo estático. Não coletamos dados pessoais diretamente.
            Podemos coletar dados de uso anônimos por meio de ferramentas de análise (como Google Analytics)
            para entender como os usuários interagem com o site e melhorar a experiência.
          </p>
        </section>

        <section>
          <h2 style={{ color: "var(--text)", marginBottom: ".5rem" }}>2. Cookies e Publicidade</h2>
          <p>
            Utilizamos o Google AdSense para exibir anúncios. O Google pode usar cookies para exibir
            anúncios relevantes com base em visitas anteriores a este e outros sites. Você pode desativar
            o uso de cookies pelo Google acessando as{" "}
            <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
              Configurações de Anúncios do Google
            </a>.
          </p>
        </section>

        <section>
          <h2 style={{ color: "var(--text)", marginBottom: ".5rem" }}>3. Informações Médicas</h2>
          <p>
            Todo o conteúdo médico-farmacêutico do GenéricoOu tem caráter exclusivamente informativo e
            educativo. Não nos responsabilizamos por decisões tomadas com base nessas informações sem
            orientação profissional. Consulte sempre seu médico ou farmacêutico.
          </p>
        </section>

        <section>
          <h2 style={{ color: "var(--text)", marginBottom: ".5rem" }}>4. Links Externos</h2>
          <p>
            Este site pode conter links para sites externos. Não nos responsabilizamos pelo conteúdo
            ou práticas de privacidade de outros sites.
          </p>
        </section>

        <section>
          <h2 style={{ color: "var(--text)", marginBottom: ".5rem" }}>5. Contato</h2>
          <p>
            Para dúvidas sobre esta política de privacidade, entre em contato pelo e-mail:{" "}
            <a href="mailto:contato@genericoou.online">contato@genericoou.online</a>
          </p>
        </section>

        <p style={{ fontSize: ".85rem", marginTop: ".5rem" }}>
          Última atualização: janeiro de {ano}
        </p>

        <Link href="/" className="btn btn-outline" style={{ width: "fit-content" }}>
          ← Voltar ao Início
        </Link>
      </div>
    </div>
  );
}
