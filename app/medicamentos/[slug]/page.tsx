import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { medicamentos, getMedicamento } from "@/lib/medicamentos";
import AdUnit from "@/components/AdUnit";
import styles from "./page.module.css";

/* ── SSG: generate one page per medicamento at build time ── */
export async function generateStaticParams() {
  return medicamentos.map((m) => ({ slug: m.slug }));
}

/* ── Dynamic metadata per page ── */
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const med = getMedicamento(params.slug);
  if (!med) return {};

  const title = `Genérico de ${med.referencia} (${med.principioAtivo}): Equivalentes e Fabricantes`;
  const description = `Conheça todos os genéricos equivalentes a ${med.referencia} (${med.principioAtivo}) aprovados pela ANVISA. Compare fabricantes e economize até ${med.diferencaPrecoEstimada}%.`;

  return {
    title,
    description,
    alternates: { canonical: `https://genericoou.com.br/medicamentos/${med.slug}/` },
    openGraph: {
      title,
      description,
      url: `https://genericoou.com.br/medicamentos/${med.slug}/`,
      type: "article",
    },
  };
}

export default function MedicamentoPage({ params }: { params: { slug: string } }) {
  const med = getMedicamento(params.slug);
  if (!med) notFound();

  /* Schema.org MedicalWebPage */
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: `Genérico de ${med.referencia}`,
    description: `Informações sobre os genéricos equivalentes a ${med.referencia} (${med.principioAtivo}) aprovados pela ANVISA.`,
    url: `https://genericoou.com.br/medicamentos/${med.slug}/`,
    about: {
      "@type": "Drug",
      name: med.principioAtivo,
      alternateName: med.referencia,
      drugClass: med.classeTerapeutica,
      manufacturer: { "@type": "Organization", name: med.fabricanteReferencia },
    },
    mainContentOfPage: {
      "@type": "WebPageElement",
      cssSelector: "main",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="container section">
        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Navegação estrutural">
          <Link href="/">Início</Link>
          <span aria-hidden>›</span>
          <Link href="/medicamentos/">Medicamentos</Link>
          <span aria-hidden>›</span>
          <span>{med.referencia}</span>
        </nav>

        {/* Header */}
        <div className={styles.header}>
          <div>
            <div className="flex flex-wrap items-center gap-2" style={{ marginBottom: ".75rem" }}>
              <span className="badge badge-blue">{med.classeTerapeutica.split("/")[0].trim()}</span>
              {med.bioequivalenciaAnvisa && (
                <span className="badge badge-green">✓ Bioequivalente ANVISA</span>
              )}
            </div>
            <h1 className={styles.title}>
              Genérico de <strong>{med.referencia}</strong>
            </h1>
            <p className={styles.principio}>{med.principioAtivo}</p>
            {med.descricao && <p className={styles.descricao}>{med.descricao}</p>}
          </div>

          <div className={styles.savingsBox}>
            <p className={styles.savingsLabel}>Economia estimada usando genérico</p>
            <p className={styles.savingsValue}>{med.diferencaPrecoEstimada}%</p>
            <div className="price-bar" style={{ marginTop: ".5rem" }}>
              <div className="price-bar-fill" style={{ width: `${med.diferencaPrecoEstimada}%` }} />
            </div>
            <p className={styles.savingsNote}>
              *Estimativa baseada em comparações de mercado. Preços variam por farmácia.
            </p>
          </div>
        </div>

        <hr className="divider" />

        <div className={styles.grid}>
          {/* Referência */}
          <section className={styles.infoCard}>
            <h2 className={styles.sectionH2}>💊 Medicamento de Referência</h2>
            <div className={styles.refBox}>
              <p className={styles.refName}>{med.referencia}</p>
              <p className={styles.refFab}>Fabricante: <strong>{med.fabricanteReferencia}</strong></p>
              <p className={styles.refPrincipio}>Princípio ativo: <strong>{med.principioAtivo}</strong></p>
              <p className={styles.refClasse}>Classe: <strong>{med.classeTerapeutica}</strong></p>
            </div>
          </section>

          {/* Genéricos */}
          <section className={styles.genericosSection}>
            <h2 className={styles.sectionH2}>
              📋 Genéricos Equivalentes Disponíveis
              <span style={{ fontWeight: 400, fontSize: ".85rem", color: "var(--text-muted)", marginLeft: ".5rem" }}>
                ({med.genericos.length})
              </span>
            </h2>
            <ul className={styles.genericosList}>
              {med.genericos.map((g, i) => (
                <li key={i} className={styles.genericoItem}>
                  <div className={styles.genericoLeft}>
                    <span className={styles.genericoNome}>{g.nome}</span>
                    <span className={styles.genericoFab}>{g.fabricante}</span>
                  </div>
                  {med.bioequivalenciaAnvisa && (
                    <span className="badge badge-green" style={{ fontSize: ".7rem" }}>
                      ✓ ANVISA
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Ad: meio da página de detalhe */}
        <AdUnit slot="2222222222" format="rectangle" style={{ margin: "2rem 0" }} />

        {/* Info box */}
        <div className={styles.infoBox}>
          <h3>ℹ️ Como usar esta informação</h3>
          <p>
            Os medicamentos genéricos listados são <strong>bioequivalentes</strong> ao medicamento de referência{" "}
            <strong>{med.referencia}</strong>, o que significa que possuem a mesma eficácia terapêutica,
            segurança e qualidade, comprovadas por estudos aprovados pela ANVISA.
          </p>
          <p style={{ marginTop: ".75rem" }}>
            Ao comprar, verifique a <strong>faixa amarela</strong> na embalagem — identificação obrigatória
            dos genéricos no Brasil. Sempre consulte seu médico ou farmacêutico antes de substituir medicamentos.
          </p>
        </div>

        {/* Navegação entre medicamentos */}
        <div style={{ marginTop: "2.5rem" }}>
          <Link href="/medicamentos/" className="btn btn-outline" style={{ marginRight: "1rem" }}>
            ← Ver todos os medicamentos
          </Link>
          <Link href="/como-funciona-generico/" className="btn btn-outline">
            Entender bioequivalência →
          </Link>
        </div>

        {/* Ad: antes do footer */}
        <AdUnit slot="3333333333" format="horizontal" style={{ marginTop: "2.5rem" }} />
      </div>
    </>
  );
}
