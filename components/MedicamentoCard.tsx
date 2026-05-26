import Link from "next/link";
import type { Medicamento } from "@/lib/types";
import styles from "./MedicamentoCard.module.css";

interface Props {
  medicamento: Medicamento;
}

export default function MedicamentoCard({ medicamento }: Props) {
  const { slug, principioAtivo, referencia, genericos, classeTerapeutica, bioequivalenciaAnvisa, diferencaPrecoEstimada } = medicamento;

  return (
    <Link href={`/medicamentos/${slug}/`} className={styles.card} aria-label={`Ver genéricos de ${referencia}`}>
      <div className={styles.top}>
        <span className={styles.classe}>{classeTerapeutica}</span>
        {bioequivalenciaAnvisa && (
          <span className="badge badge-green" aria-label="Bioequivalência ANVISA comprovada">
            ✓ Bioequivalente ANVISA
          </span>
        )}
      </div>

      <h2 className={styles.referencia}>{referencia}</h2>
      <p className={styles.principio}>{principioAtivo}</p>

      <div className={styles.savings}>
        <div className="price-bar-wrap">
          <div className="price-bar-label">
            <span>Economia estimada</span>
            <strong style={{ color: "var(--accent-dark)" }}>{diferencaPrecoEstimada}%</strong>
          </div>
          <div className="price-bar">
            <div className="price-bar-fill" style={{ width: `${diferencaPrecoEstimada}%` }} />
          </div>
        </div>
      </div>

      <p className={styles.genericosCount}>
        {genericos.length} {genericos.length === 1 ? "genérico disponível" : "genéricos disponíveis"}
      </p>

      <span className={styles.cta}>Ver genéricos →</span>
    </Link>
  );
}
