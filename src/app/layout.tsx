import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PortfolioApp from "@/components/PortfolioApp";
import { PROFILE_IMAGE } from "@/data/experience";
import { portfolioJsonLd } from "@/data/jsonLd";
import { PERSON_NAME, SITE_URL } from "@/data/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rafaelferreiradasilva.com.br"),
  title: "Rafael Ferreira da Silva | Tech Lead & Senior Fullstack Developer",
  description:
    "Desenvolvedor Full Stack Sênior e Tech Lead com 8+ anos de experiência. Laravel, Livewire, Node.js, IA e automação. Atualmente na Andv. Disponível CLT e PJ.",
  keywords: [
    PERSON_NAME,
    "Desenvolvedor Full Stack Sênior",
    "Tech Lead",
    "Contratar desenvolvedor",
    "Desenvolvedor Laravel",
    "Desenvolvedor Node.js",
    "Automação com IA",
    "Rio de Janeiro",
    "CLT",
    "PJ",
    "Portfólio",
  ],
  authors: [{ name: PERSON_NAME, url: SITE_URL }],
  creator: PERSON_NAME,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    alternateLocale: ["en_US", "es_ES", "he_IL"],
    url: "https://rafaelferreiradasilva.com.br",
    siteName: "Rafael Ferreira da Silva — Portfolio",
    title: "Rafael Ferreira da Silva — Tech Lead & Senior Fullstack",
    description:
      "Desenvolvedor Full Stack Sênior com 8+ anos construindo sistemas reais para Fiocruz, JBS/Seara e clientes B2B.",
    images: [
      {
        url: PROFILE_IMAGE,
        width: 512,
        height: 512,
        alt: "Rafael Ferreira da Silva",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafael Ferreira da Silva — Tech Lead & Senior Fullstack",
    description:
      "Desenvolvedor Full Stack Sênior com 8+ anos construindo sistemas reais para Fiocruz, JBS/Seara e clientes B2B.",
    images: [PROFILE_IMAGE],
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "pt-BR": SITE_URL,
      en: SITE_URL,
      es: SITE_URL,
      he: SITE_URL,
    },
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/assets/img/favicon.ico" />
        <link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
