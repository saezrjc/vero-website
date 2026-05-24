import { Metadata } from "next";
import PrensaClient from "./PrensaClient";

export const metadata: Metadata = {
  title: "Prensa — Menciones y apariciones en medios | Verónica Perozo",
  description:
    "Verónica Perozo en Univision, El Nuevo Herald, Telemundo y podcasts. Cobertura mediática, temas de entrevista y kit de prensa para periodistas.",
  openGraph: {
    title: "Prensa — Verónica Perozo en medios",
    description: "Televisión, prensa escrita y podcasts. Una voz que los medios buscan sobre inmigración, finanzas y liderazgo femenino latino.",
    url: "https://veronicaperozo.com/prensa",
  },
  alternates: { canonical: "https://veronicaperozo.com/prensa" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://veronicaperozo.com" },
    { "@type": "ListItem", position: 2, name: "Prensa", item: "https://veronicaperozo.com/prensa" },
  ],
};

export default function PrensaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PrensaClient />
    </>
  );
}
