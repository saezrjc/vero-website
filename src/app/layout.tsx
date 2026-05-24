import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Verónica Perozo — Autora · Empresaria · Mentora",
  description:
    "Verónica Perozo es autora de El Cansancio Silencioso, fundadora de 2JVS Insurance y creadora de Arquitectas de Legado. Ayuda a mujeres latinas a ordenar su vida, monetizar su historia y construir su legado.",
  keywords: [
    "Verónica Perozo", "Arquitectas de Legado", "El Cansancio Silencioso",
    "mentora mujeres latinas", "agente de seguros Florida", "2JVS Insurance",
    "marca personal latina", "emprendimiento femenino",
  ],
  authors: [{ name: "Verónica Perozo", url: "https://veronicaperozo.com" }],
  creator: "Verónica Perozo",
  metadataBase: new URL("https://veronicaperozo.com"),
  openGraph: {
    type: "website",
    locale: "es_US",
    url: "https://veronicaperozo.com",
    siteName: "Verónica Perozo",
    title: "Verónica Perozo — Autora · Empresaria · Mentora",
    description:
      "Autora de El Cansancio Silencioso. Fundadora de 2JVS Insurance. Creadora de Arquitectas de Legado.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Verónica Perozo — Autora · Empresaria · Mentora",
    description: "Ayuda a mujeres latinas a ordenar su vida y construir su legado.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "xq2crjzHDQlCuGw9SQvXkPJ4S5juDATcckLGnfhn8aw",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Verónica Perozo",
  url: "https://veronicaperozo.com",
  jobTitle: "Autora, Empresaria y Mentora",
  description:
    "Verónica Perozo es autora, empresaria venezolana radicada en Florida y fundadora de 2JVS Insurance. Creadora del programa Arquitectas de Legado para mujeres latinas.",
  knowsLanguage: ["es", "en"],
  nationality: { "@type": "Country", name: "Venezuela" },
  worksFor: { "@type": "Organization", name: "2JVS Insurance", url: "https://2jvs.com" },
  sameAs: [
    "https://www.instagram.com/veronica.perozo",
    "https://2jvs.com",
  ],
  knowsAbout: [
    "Seguros de salud", "Marca personal", "Educación financiera",
    "Emprendimiento femenino", "Legado familiar", "Mentoría",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
