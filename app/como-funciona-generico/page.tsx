import type { Metadata } from "next";
import Link from "next/link";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "Como Funciona o Medicamento Genérico no Brasil — Bioequivalência ANVISA",
  description:
    "Entenda o que é um medicamento genérico, como a bioequivalência é comprovada pela ANVISA e por que o genérico tem a mesma eficácia do medicamento de referência.",
  alternates: { canonical: "https://genericoou.online/como-funciona-generico/" },
};

const faqs = [
  {
    q: "O medicamento genérico tem a mesma eficácia do de referência?",
    a: "Sim. Para ser aprovado pela ANVISA, o genérico precisa ser bioequivalente ao medicamento de referência, comprovando a mesma absorção e disponibilidade do princípio ativo no organismo. Isso garante a mesma eficácia terapêutica.",
  },
  {
    q: "Por que o genérico é mais barato?",
    a: "Os fabricantes de genéricos não precisam investir nos custos de pesquisa e desenvolvimento da molécula original. Eles produzem um medicamento cuja patente já expirou, reduzindo significativamente os custos — economia que é repassada ao consumidor.",
  },
  {
    q: "Como identificar um medicamento genérico na farmácia?",
    a: "Os genéricos no Brasil são identificados pela faixa amarela na embalagem, obrigatória por lei. O nome principal na caixa é sempre o princípio ativo (substância farmacológica), e não o nome comercial.",
  },
  {
    q: "Posso substituir qualquer medicamento de referência pelo genérico?",
    a: "Em geral sim, quando existe genérico aprovado pela ANVISA. No entanto, sempre consulte seu médico ou farmacêutico — alguns medicamentos com margem terapêutica estreita (como anticoagulantes e anticonvulsivantes) requerem atenção especial na troca.",
  },
  {
    q: "O que é bioequivalência?",
    a: "Bioequivalência significa que dois medicamentos (o de referência e o genérico) têm o mesmo perfil de absorção no organismo. Os estudos de bioequivalência são exigidos pela ANVISA e comprovam que a concentração do princípio ativo no sangue é equivalente entre os dois produtos.",
  },
  {
    q: "Todo genérico tem bioequivalência comprovada pela ANVISA?",
    a: "Sim. Para receber o registro como medicamento genérico no Brasil, o fabricante deve apresentar obrigatoriamente estudo de bioequivalência aprovado pela ANVISA. Sem esse estudo, o produto não pode ser comercializado como genérico.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function ComoFuncionaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="container section">
        <nav className="breadcrumb">
          <Link href="/">Início</Link>
          <span>›</span>
          <span>Como Funciona o Genérico</span>
        </nav>

        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.4rem)", marginBottom: ".75rem" }}>
          Como Funciona o Medicamento Genérico
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", maxWidth: "640px", marginBottom: "2.5rem", lineHeight: "1.65" }}>
          Entenda o que garante a segurança, eficácia e qualidade dos medicamentos genéricos no Brasil —
          e por que eles podem representar uma economia de até 80% em relação ao medicamento de referência.
        </p>

        {/* O que é */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.4rem", marginBottom: "1rem" }}>O Que É um Medicamento Genérico?</h2>
          <div className="card" style={{ maxWidth: "760px" }}>
            <p style={{ color: "var(--text-muted)", lineHeight: "1.7" }}>
              Um medicamento genérico é aquele que contém o mesmo <strong>princípio ativo</strong>, mesma dosagem,
              forma farmacêutica e via de administração que o medicamento de referência (a "marca original").
              No Brasil, a lei nº 9.787/99 regulamenta os genéricos, e a ANVISA é responsável por garantir
              que todos os genéricos aprovados sejam intercambiáveis com o medicamento de referência.
            </p>
            <p style={{ color: "var(--text-muted)", lineHeight: "1.7", marginTop: ".85rem" }}>
              Para ser aprovado, o fabricante precisa demonstrar que o genérico é <strong>bioequivalente</strong> —
              ou seja, que libera a mesma quantidade do princípio ativo no organismo, no mesmo intervalo de tempo,
              dentro dos limites aceitos internacionalmente (80% a 125% da referência, com 90% de confiança).
            </p>
          </div>
        </section>

        {/* Processo */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem" }}>O Processo de Aprovação pela ANVISA</h2>
          <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))" }}>
            {[
              { icon: "🔬", title: "1. Formulação", desc: "O fabricante desenvolve a formulação com o mesmo princípio ativo, concentração, forma farmacêutica e via de administração." },
              { icon: "🧪", title: "2. Estudo in vivo", desc: "Voluntários recebem o genérico e o medicamento de referência. Amostras de sangue comparam a absorção ao longo do tempo." },
              { icon: "📊", title: "3. Análise estatística", desc: "Os dados são analisados para verificar se a biodisponibilidade está dentro da margem de ±20% aceita pela ANVISA e pela OMS." },
              { icon: "✅", title: "4. Registro ANVISA", desc: "Com os dados aprovados, a ANVISA emite o registro. Somente então o medicamento pode ser comercializado como genérico no Brasil." },
            ].map((s) => (
              <div key={s.title} className="card">
                <p style={{ fontSize: "1.75rem", marginBottom: ".6rem" }}>{s.icon}</p>
                <h3 style={{ fontSize: "1rem", marginBottom: ".4rem" }}>{s.title}</h3>
                <p style={{ fontSize: ".875rem", color: "var(--text-muted)", lineHeight: "1.55" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <AdUnit slot="2222222222" format="horizontal" />

        {/* FAQ */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem" }}>Perguntas Frequentes sobre Genéricos</h2>
          <div className="card" style={{ maxWidth: "760px" }}>
            {faqs.map((f, i) => (
              <div key={i} className="faq-item">
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link href="/medicamentos/" className="btn btn-primary">
            Buscar Medicamentos →
          </Link>
          <Link href="/" className="btn btn-outline">
            Comparar Genéricos
          </Link>
        </div>

        <AdUnit slot="3333333333" format="horizontal" style={{ marginTop: "2.5rem" }} />
      </div>
    </>
  );
}
