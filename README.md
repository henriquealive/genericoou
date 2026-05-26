# 💊 GenéricoOu

Comparador de medicamentos de referência com genéricos equivalentes no mercado brasileiro.

**Stack:** Next.js 14 App Router · TypeScript · CSS Modules · SSG total · AdSense-ready · SEO-first

---

## 🚀 Setup Local

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em desenvolvimento
npm run dev
# → http://localhost:3000

# 3. Build + gerar sitemap
npm run build
# Saída em /out (SSG estático, zero JS de servidor)
```

---

## 🌐 Deploy na Vercel

### Via CLI

```bash
npm i -g vercel
vercel --prod
```

### Via GitHub

1. Faça push para um repositório GitHub
2. Acesse [vercel.com/new](https://vercel.com/new) e importe o repo
3. Framework: **Next.js** (detectado automaticamente)
4. As configurações do `vercel.json` serão aplicadas
5. Clique em **Deploy**

### Variável de ambiente (opcional)

```
SITE_URL=https://genericoou.com.br
```

---

## 📢 Configurar Google AdSense

Substitua `ca-pub-XXXXXXXXXXXXXXXX` pelo seu ID real em dois arquivos:

| Arquivo | Onde substituir |
|---|---|
| `app/layout.tsx` | atributo `src` do `<script>` |
| `components/AdUnit.tsx` | atributo `data-ad-client` |

Depois, substitua os `slot` em cada `<AdUnit slot="...">`:

| Página | Slot | Posição |
|---|---|---|
| Homepage | `1111111111` | Após o hero, antes dos cards |
| Detalhe do medicamento | `2222222222` | Meio da página |
| Todas as páginas | `3333333333` | Antes do footer |

---

## 🗺️ Sitemap

Gerado automaticamente após `npm run build` via `next-sitemap`.

O arquivo `sitemap.xml` inclui:
- `/` — prioridade 1.0
- `/medicamentos/` — prioridade 0.9
- `/medicamentos/[slug]/` — uma URL por medicamento (~100 páginas)
- `/como-funciona-generico/` — prioridade 0.8
- `/sobre/`, `/privacidade/`

---

## 📁 Estrutura do Projeto

```
genericoou/
├── app/
│   ├── layout.tsx                    ← root layout + AdSense script
│   ├── page.tsx                      ← homepage com busca + hero
│   ├── page.module.css
│   ├── globals.css                   ← design system completo
│   ├── medicamentos/
│   │   ├── page.tsx                  ← lista completa agrupada por classe
│   │   └── [slug]/
│   │       ├── page.tsx              ← SSG por medicamento + Schema MedicalWebPage
│   │       └── page.module.css
│   ├── como-funciona-generico/
│   │   └── page.tsx                  ← educational + FAQ Schema
│   ├── privacidade/page.tsx
│   └── sobre/page.tsx
├── components/
│   ├── Header.tsx / Header.module.css
│   ├── Footer.tsx / Footer.module.css
│   ├── BuscaMedicamento.tsx          ← "use client" autocomplete
│   ├── BuscaMedicamento.module.css
│   ├── ResultadoBusca.tsx            ← "use client" lista de resultados
│   ├── ResultadoBusca.module.css
│   ├── MedicamentoCard.tsx           ← Server Component
│   ├── MedicamentoCard.module.css
│   └── AdUnit.tsx                    ← "use client" AdSense wrapper
├── lib/
│   ├── types.ts                      ← interface Medicamento
│   └── medicamentos.ts               ← 100 medicamentos reais
├── public/
│   └── robots.txt
├── next.config.ts                    ← output: "export" (SSG total)
├── next-sitemap.config.js
├── vercel.json
└── package.json
```

---

## ➕ Adicionar Medicamentos

Edite `lib/medicamentos.ts` e adicione um novo objeto seguindo a interface:

```ts
{
  slug: "nome-do-principio-ativo",          // kebab-case, sem acentos
  principioAtivo: "Nome do Princípio Ativo",
  referencia: "Nome da Marca de Referência",
  fabricanteReferencia: "Laboratório",
  genericos: [
    { nome: "Nome Genérico Fabricante", fabricante: "Fabricante" },
  ],
  classeTerapeutica: "Categoria / Subcategoria",
  bioequivalenciaAnvisa: true,
  diferencaPrecoEstimada: 70,               // percentual estimado de economia
  descricao: "Breve descrição do medicamento.",
}
```

Após adicionar, rode `npm run build` para regenerar o sitemap e as páginas SSG.

---

## 🎯 SEO Checklist

- [x] `lang="pt-BR"` no `<html>`
- [x] Title e description únicos por página
- [x] Canonical URL em todas as páginas
- [x] Open Graph completo
- [x] Schema `MedicalWebPage` nas páginas de medicamentos
- [x] Schema `FAQPage` em `/como-funciona-generico/`
- [x] Sitemap XML com todas as rotas dinâmicas
- [x] robots.txt
- [x] next/font com `display=swap`
- [x] SSG 100% — zero latência de servidor em produção
- [x] AdSense em 3 posições (regra do quality score)
# GenéricoOu
