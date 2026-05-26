import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre o GenéricoOu — Comparador de Medicamentos Genéricos no Brasil",
  description:
    "Saiba mais sobre o GenéricoOu, a plataforma gratuita para comparar medicamentos de referência com seus genéricos equivalentes aprovados pela ANVISA.",
  alternates: { canonical: "https://genericoou.com.br/sobre/" },
};

export default function SobrePage() {
  return (
    <div className="container section">
      <nav className="breadcrumb">
        <Link href="/">Início</Link>
        <span>›</span>
        <span>Sobre</span>
      </nav>

      <h1 style={{ fontSize: "clamp(1.5rem,4vw,2.2rem)", marginBottom: "1rem" }}>
        Sobre o GenéricoOu
      </h1>

      <div style={{ maxWidth: "680px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <div className="card">
          <h2 style={{ fontSize: "1.2rem", marginBottom: ".75rem" }}>🎯 Nossa Missão</h2>
          <p style={{ color: "var(--text-muted)", lineHeight: "1.7" }}>
            O <strong>GenéricoOu</strong> é um comparador gratuito de medicamentos de referência e genéricos
            no Brasil. Nossa missão é democratizar o acesso à informação sobre genéricos, ajudando brasileiros
            a economizarem nas farmácias sem abrir mão da qualidade e eficácia dos seus medicamentos.
          </p>
        </div>

        <div className="card">
          <h2 style={{ fontSize: "1.2rem", marginBottom: ".75rem" }}>📋 O Que Fazemos</h2>
          <p style={{ color: "var(--text-muted)", lineHeight: "1.7" }}>
            Compilamos dados sobre medicamentos de referência e seus equivalentes genéricos aprovados pela
            ANVISA. Para cada medicamento, você encontra: o medicamento de referência e seu fabricante,
            todos os genéricos equivalentes disponíveis, os fabricantes de cada genérico, a estimativa
            de economia e informações sobre bioequivalência.
          </p>
        </div>

        <div className="card">
          <h2 style={{ fontSize: "1.2rem", marginBottom: ".75rem" }}>⚠️ Aviso Importante</h2>
          <p style={{ color: "var(--text-muted)", lineHeight: "1.7" }}>
            As informações no GenéricoOu têm caráter <strong>educativo e informativo</strong>. Elas não
            substituem a orientação de um médico ou farmacêutico. Antes de substituir qualquer medicamento
            pelo genérico equivalente, consulte sempre um profissional de saúde. Os preços estimados são
            referências de mercado e podem variar por farmácia e região.
          </p>
        </div>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: ".5rem" }}>
          <Link href="/" className="btn btn-primary">Buscar Medicamentos →</Link>
          <Link href="/privacidade/" className="btn btn-outline">Política de Privacidade</Link>
        </div>
      </div>
    </div>
  );
}
