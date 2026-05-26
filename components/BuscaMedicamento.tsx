"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { buscarMedicamentos } from "@/lib/medicamentos";
import type { Medicamento } from "@/lib/types";
import styles from "./BuscaMedicamento.module.css";

export default function BuscaMedicamento() {
  const [query, setQuery] = useState("");
  const [sugestoes, setSugestoes] = useState<Medicamento[]>([]);
  const [aberto, setAberto] = useState(false);
  const [focusIndex, setFocusIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const router = useRouter();

  const pesquisar = useCallback((q: string) => {
    if (q.trim().length < 2) {
      setSugestoes([]);
      setAberto(false);
      return;
    }
    const resultados = buscarMedicamentos(q).slice(0, 8);
    setSugestoes(resultados);
    setAberto(resultados.length > 0);
    setFocusIndex(-1);
  }, []);

  useEffect(() => {
    pesquisar(query);
  }, [query, pesquisar]);

  const navegar = (med: Medicamento) => {
    setAberto(false);
    setQuery(med.referencia);
    router.push(`/medicamentos/${med.slug}/`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!aberto) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusIndex((i) => Math.min(i + 1, sugestoes.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusIndex((i) => Math.max(i - 1, -1));
    } else if (e.key === "Enter" && focusIndex >= 0) {
      e.preventDefault();
      navegar(sugestoes[focusIndex]);
    } else if (e.key === "Escape") {
      setAberto(false);
    }
  };

  // close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        inputRef.current && !inputRef.current.closest("[data-busca-root]")?.contains(e.target as Node)
      ) {
        setAberto(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className={styles.root} data-busca-root>
      <div className={styles.inputWrap}>
        <span className={styles.icon} aria-hidden="true">🔍</span>
        <input
          ref={inputRef}
          type="search"
          className={`input ${styles.input}`}
          placeholder="Ex.: Novalgina, Amoxicilina, Ibuprofeno…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => sugestoes.length > 0 && setAberto(true)}
          autoComplete="off"
          aria-label="Buscar medicamento"
          aria-autocomplete="list"
          aria-controls="sugestoes-lista"
          aria-expanded={aberto}
          role="combobox"
        />
        {query && (
          <button
            className={styles.clearBtn}
            onClick={() => { setQuery(""); setSugestoes([]); setAberto(false); inputRef.current?.focus(); }}
            aria-label="Limpar busca"
          >
            ✕
          </button>
        )}
      </div>

      {aberto && sugestoes.length > 0 && (
        <ul
          id="sugestoes-lista"
          ref={listRef}
          className={styles.list}
          role="listbox"
          aria-label="Sugestões de medicamentos"
        >
          {sugestoes.map((med, i) => (
            <li
              key={med.slug}
              role="option"
              aria-selected={i === focusIndex}
              className={`${styles.item} ${i === focusIndex ? styles.focused : ""}`}
              onMouseDown={() => navegar(med)}
            >
              <div className={styles.itemMain}>
                <span className={styles.itemRef}>{med.referencia}</span>
                <span className={styles.itemPrincipio}>{med.principioAtivo}</span>
              </div>
              <div className={styles.itemMeta}>
                <span className={styles.itemClasse}>{med.classeTerapeutica}</span>
                {med.bioequivalenciaAnvisa && (
                  <span className="badge badge-green" style={{ fontSize: ".65rem" }}>✓ ANVISA</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
