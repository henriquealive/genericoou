"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { buscarMedicamentos } from "@/lib/medicamentos";
import type { Medicamento } from "@/lib/types";
import styles from "./ResultadoBusca.module.css";

interface Props {
  query: string;
}

export default function ResultadoBusca({ query }: Props) {
  const [resultados, setResultados] = useState<Medicamento[]>([]);

  useEffect(() => {
    setResultados(buscarMedicamentos(query));
  }, [query]);

  if (!query) return null;
  if (resultados.length === 0) {
    return (
      <div className={styles.empty}>
        <p>Nenhum medicamento encontrado para <strong>"{query}"</strong>.</p>
        <p className={styles.hint}>
          Tente o nome do princípio ativo (ex.: "amoxicilina") ou da marca (ex.: "Amoxil").
        </p>
        <Link href="/medicamentos/" className="btn btn-outline" style={{ marginTop: "1rem" }}>
          Ver todos os medicamentos
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.wrap}>
      <p className={styles.count}>
        {resultados.length} {resultados.length === 1 ? "resultado" : "resultados"} para{" "}
        <strong>"{query}"</strong>
      </p>
      <ul className={styles.list}>
        {resultados.map((med) => (
          <li key={med.slug}>
            <Link href={`/medicamentos/${med.slug}/`} className={styles.item}>
              <div className={styles.itemLeft}>
                <span className={styles.ref}>{med.referencia}</span>
                <span className={styles.principio}>{med.principioAtivo}</span>
                <span className={styles.classe}>{med.classeTerapeutica}</span>
              </div>
              <div className={styles.itemRight}>
                {med.bioequivalenciaAnvisa && (
                  <span className="badge badge-green">✓ Bioequivalente ANVISA</span>
                )}
                <span className={styles.savings}>
                  Até {med.diferencaPrecoEstimada}% mais barato
                </span>
                <span className={styles.cta}>Ver genéricos →</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
