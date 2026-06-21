import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PortfolioApp from "@/components/PortfolioApp";
import { PROFILE_IMAGE } from "@/data/experience";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rafaelferreiradasilva.com.br"),
  title: "Rafael Ferreira da Silva | Tech Lead & Senior Fullstack Developer",
  description:
    "Desenvolvedor Full Stack Sênior com 8+ anos de experiência. Especialista em Laravel, Next.js, React e fundador da Vancouver Tec.",
  keywords: [
    "Rafael Ferreira da Silva",
    "Tech Lead",
    "Senior Fullstack Developer",
    "Laravel",
    "Next.js",
    "React",
    "Arquitetura de Software",
    "Portfólio",
  ],
  authors: [{ name: "Rafael Ferreira da Silva", url: "https://rafaelferreiradasilva.com.br" }],
  creator: "Rafael Ferreira da Silva",
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
    canonical: "https://rafaelferreiradasilva.com.br",
    languages: {
      "pt-BR": "https://rafaelferreiradasilva.com.br",
      en: "https://rafaelferreiradasilva.com.br",
      es: "https://rafaelferreiradasilva.com.br",
      he: "https://rafaelferreiradasilva.com.br",
    },
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://rafaelferreiradasilva.com.br/#person",
      name: "Rafael Ferreira da Silva",
      url: "https://rafaelferreiradasilva.com.br",
      image: "https://rafaelferreiradasilva.com.br/assets/img/rafael-ferreira-2026.png",
      jobTitle: "Senior Full Stack Developer",
      worksFor: {
        "@type": "Organization",
        name: "Vancouver Tec Soluções em Tecnologia",
      },
      sameAs: [
        "https://www.linkedin.com/in/rafael-ferreira-dev",
        "https://github.com/rafaelferreira2312",
      ],
      knowsAbout: [
        "Laravel",
        "Next.js",
        "React",
        "Node.js",
        "System Architecture",
        "Microservices",
        "DDD",
      ],
    },
    {
      "@type": "ProfilePage",
      "@id": "https://rafaelferreiradasilva.com.br/#profilepage",
      url: "https://rafaelferreiradasilva.com.br",
      name: "Rafael Ferreira da Silva — Portfolio",
      isPartOf: { "@id": "https://rafaelferreiradasilva.com.br/#website" },
      about: { "@id": "https://rafaelferreiradasilva.com.br/#person" },
    },
    {
      "@type": "WebSite",
      "@id": "https://rafaelferreiradasilva.com.br/#website",
      url: "https://rafaelferreiradasilva.com.br",
      name: "Rafael Ferreira da Silva — Portfolio",
      publisher: { "@id": "https://rafaelferreiradasilva.com.br/#person" },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/assets/img/favicon.ico" />
        <link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
