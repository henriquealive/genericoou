import type { Metadata } from "next";
import MedicamentoCard from "@/components/MedicamentoCard";
import { medicamentos } from "@/lib/medicamentos";

export const metadata: Metadata = {
  title: "Lista Completa de Medicamentos Genéricos no Brasil",
  description: `Consulte todos os ${medicamentos.length} medicamentos de referência e seus genéricos equivalentes aprovados pela ANVISA. Compare preços e fabricantes.`,
  alternates: { canonical: "https://genericoou.online/medicamentos/" },
};

// Group by classeTerapeutica
function agrupar(lista: typeof medicamentos) {
  const map: Record<string, typeof medicamentos> = {};
  lista.forEach((m) => {
    const chave = m.classeTerapeutica.split("/")[0].trim();
    if (!map[chave]) map[chave] = [];
    map[chave].push(m);
  });
  return Object.entries(map).sort(([a], [b]) => a.localeCompare(b));
}

const grupos = agrupar(medicamentos);

export default function MedicamentosPage() {
  return (
    <div className="container section">
      <h1 style={{ fontSize: "clamp(1.5rem,4vw,2.25rem)", marginBottom: ".5rem" }}>
        Todos os Medicamentos Genéricos
      </h1>
      <p style={{ color: "var(--text-muted)", marginBottom: "2.5rem" }}>
        {medicamentos.length} medicamentos de referência com equivalentes genéricos aprovados pela ANVISA.
      </p>

      {grupos.map(([classe, lista]) => (
        <section key={classe} style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "1rem", color: "var(--primary-dark)", borderBottom: "2px solid var(--primary-light)", paddingBottom: ".5rem" }}>
            {classe}
            <span style={{ fontWeight: 400, fontSize: ".85rem", color: "var(--text-muted)", marginLeft: ".5rem" }}>
              ({lista.length})
            </span>
          </h2>
          <div className="grid-auto">
            {lista.map((med) => (
              <MedicamentoCard key={med.slug} medicamento={med} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
