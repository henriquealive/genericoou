import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://genericoou.online";
const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "ca-pub-7999785083569252";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Buscar Medicamento Genérico: Compare com o de Referência | GenéricoOu",
    template: "%s | GenéricoOu",
  },
  description:
    "Compare medicamentos de referência com seus genéricos equivalentes no Brasil. Economize até 80% com genéricos aprovados pela ANVISA e com bioequivalência comprovada.",
  keywords: [
    "medicamento genérico",
    "remédio genérico",
    "comparar medicamentos",
    "genérico ANVISA",
    "bioequivalência",
    "medicamento de referência",
    "preço genérico",
    "farmácia genérico",
  ],
  authors: [{ name: "GenéricoOu" }],
  creator: "GenéricoOu",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "GenéricoOu",
    title: "Buscar Medicamento Genérico: Compare com o de Referência | GenéricoOu",
    description:
      "Compare medicamentos de referência com seus genéricos no Brasil. Economize com genéricos aprovados pela ANVISA.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GenéricoOu — Compare Medicamentos Genéricos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GenéricoOu — Compare Medicamentos Genéricos no Brasil",
    description: "Encontre o genérico equivalente ao seu medicamento de referência. ANVISA aprovado.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        {/* Google AdSense */}
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
