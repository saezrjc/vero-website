import { Metadata } from "next";
import LibrosClient from "./LibrosClient";

export const metadata: Metadata = {
  title: "Libros — El Cansancio Silencioso y más | Verónica Perozo",
  description:
    "El Cansancio Silencioso, Guía de Hábitos Conscientes y Del Caos a la Claridad. Libros y guías educativas de Verónica Perozo para mujeres latinas en EE.UU.",
  openGraph: {
    title: "Libros de Verónica Perozo — Palabras que transforman vidas",
    description: "El Cansancio Silencioso y guías de finanzas y hábitos para mujeres latinas. Cada libro nació de una conversación real.",
    url: "https://veronicaperozo.com/libros",
  },
  alternates: { canonical: "https://veronicaperozo.com/libros" },
};

const bookSchema = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: "El Cansancio Silencioso",
  author: {
    "@type": "Person",
    name: "Verónica Perozo",
    url: "https://veronicaperozo.com",
  },
  inLanguage: "es",
  url: "https://www.amazon.com/gp/product/B0GZCRG21Q/",
  sameAs: "https://veronicaperozo.com/libros",
  genre: "Self Help",
  description: "La historia de la mujer que sostiene todo por fuera y está agotada por dentro. Una conversación honesta sobre lo que cuesta sostener una vida sin un sistema que te sostenga a ti.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://veronicaperozo.com" },
    { "@type": "ListItem", position: 2, name: "Libros", item: "https://veronicaperozo.com/libros" },
  ],
};

export default function LibrosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <LibrosClient />
    </>
  );
}
