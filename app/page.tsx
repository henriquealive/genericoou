import type { Metadata } from "next";
import Link from "next/link";
import BuscaMedicamento from "@/components/BuscaMedicamento";
import MedicamentoCard from "@/components/MedicamentoCard";
import AdUnit from "@/components/AdUnit";
import { medicamentos } from "@/lib/medicamentos";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Buscar Medicamento Genérico: Compare com o de Referência | GenéricoOu",
  description:
    "Busque e compare medicamentos de referência com seus genéricos equivalentes no Brasil. Economize até 80% com genéricos aprovados pela ANVISA e com bioequivalência comprovada.",
  alternates: { canonical: "https://genericoou.com.br/" },
};

const populares = medicamentos.slice(0, 9);

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className="badge badge-green" style={{ marginBottom: "1rem" }}>
              ✓ +100 medicamentos com dados da ANVISA
            </span>
            <h1 className={styles.heroTitle}>
              Encontre o Genérico do Seu Medicamento
            </h1>
            <p className={styles.heroSub}>
              Compare remédios de referência com seus equivalentes genéricos. Mesma eficácia,
              <strong> até 80% mais barato</strong>. Bioequivalência verificada pela ANVISA.
            </p>

            <div className={styles.searchWrap}>
              <BuscaMedicamento />
              <p className={styles.searchHint}>
                Ex.: Losec, Lipitor, Prozac, Cozaar, Amoxil, Rivotril…
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ad: após hero, antes dos cards ── */}
      <div className="container">
        <AdUnit slot="1111111111" format="horizontal" style={{ margin: "1.5rem 0 0" }} />
      </div>

      {/* ── Medicamentos populares ── */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Medicamentos Mais Buscados</h2>
            <Link href="/medicamentos/" className={styles.verTodos}>
              Ver todos os {medicamentos.length} medicamentos →
            </Link>
          </div>
          <div className="grid-auto">
            {populares.map((med) => (
              <MedicamentoCard key={med.slug} medicamento={med} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Como funciona ── */}
      <section className={styles.howSection}>
        <div className="container">
          <h2 className={styles.sectionTitle} style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            Como o Genérico é Aprovado pela ANVISA?
          </h2>
          <div className={styles.steps}>
            {[
              {
                n: "1",
                title: "Bioequivalência",
                desc: "O genérico deve ter a mesma substância ativa, dosagem e via de administração do medicamento de referência.",
              },
              {
                n: "2",
                title: "Testes Clínicos",
                desc: "Estudos comprovam que o genérico libera a mesma quantidade do princípio ativo no organismo no mesmo tempo.",
              },
              {
                n: "3",
                title: "Aprovação ANVISA",
                desc: "Somente após análise rigorosa e aprovação pela ANVISA o medicamento genérico pode ser comercializado no Brasil.",
              },
              {
                n: "4",
                title: "Faixa Amarela",
                desc: "Genéricos têm a faixa amarela na embalagem — sinal de que foram aprovados com todos os requisitos da ANVISA.",
              },
            ].map((s) => (
              <div key={s.n} className={styles.step}>
                <div className={styles.stepNum}>{s.n}</div>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href="/como-funciona-generico/" className="btn btn-outline">
              Entender mais sobre genéricos →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Ad: antes do footer ── */}
      <div className="container">
        <AdUnit slot="3333333333" format="horizontal" style={{ marginBottom: "2rem" }} />
      </div>
    </>
  );
}
