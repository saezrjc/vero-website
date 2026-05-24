import { Metadata } from "next";
import SobreMiClient from "./SobreMiClient";

export const metadata: Metadata = {
  title: "Sobre mí — Verónica Perozo | Autora, Empresaria y Mentora venezolana en Florida",
  description:
    "Venezolana, inmigrante, madre. Llegó a Florida en 2015 y construyó 2JVS Insurance, El Cansancio Silencioso y Arquitectas de Legado. Su historia es el fundamento de su autoridad.",
  openGraph: {
    title: "Sobre mí — Verónica Perozo",
    description: "Venezolana radicada en Florida desde 2015. De PDVSA a 2JVS Insurance. Autora, empresaria y mentora de mujeres latinas.",
    url: "https://veronicaperozo.com/sobre-mi",
  },
  alternates: { canonical: "https://veronicaperozo.com/sobre-mi" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://veronicaperozo.com" },
    { "@type": "ListItem", position: 2, name: "Sobre mí", item: "https://veronicaperozo.com/sobre-mi" },
  ],
};

export default function SobreMiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SobreMiClient />
    </>
  );
}
