export interface Medicamento {
  slug: string;
  principioAtivo: string;
  referencia: string;          // nome de marca da referência
  fabricanteReferencia: string;
  genericos: { nome: string; fabricante: string }[];
  classeTerapeutica: string;
  bioequivalenciaAnvisa: boolean;
  diferencaPrecoEstimada: number; // percentual de economia usando genérico
  descricao?: string;
}
