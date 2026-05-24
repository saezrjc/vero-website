import { Metadata } from "next";
import ConferenciasClient from "./ConferenciasClient";

export const metadata: Metadata = {
  title: "Arquitectas de Legado — Mentoría 90 días | Verónica Perozo",
  description:
    "Programa de mentoría intensiva de 90 días para mujeres latinas en EE.UU. Identidad, estructura financiera, propósito monetizable y legado real. Plazas limitadas.",
  openGraph: {
    title: "Arquitectas de Legado — Programa de mentoría 90 días",
    description: "90 días para dejar de sobrevivir en silencio y empezar a construir una vida con identidad, finanzas y legado.",
    url: "https://veronicaperozo.com/conferencias",
  },
  alternates: { canonical: "https://veronicaperozo.com/conferencias" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es Arquitectas de Legado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es un programa de mentoría intensiva de 90 días para mujeres latinas en Estados Unidos que quieren construir una vida con identidad clara, estructura financiera, propósito monetizable y legado. Trabaja en grupos pequeños para garantizar atención real.",
      },
    },
    {
      "@type": "Question",
      name: "¿Para quién es el programa Arquitectas de Legado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para mujeres latinas inmigrantes que sienten que pueden más pero no saben cómo: las que trabajan mucho pero el dinero no alcanza, las que tienen una idea de negocio sin saber cómo monetizarla, y las que quieren dejar un legado sin saber por dónde empezar.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto dura el programa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El programa dura 90 días, divididos en 4 fases: Diagnóstico (semanas 1-2), Estructura (semanas 3-6), Acción y monetización (semanas 7-10), y Legado y continuidad (semanas 11-13).",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo me inscribo en Arquitectas de Legado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las plazas son limitadas. Escribe directamente a insurance.2jvs@gmail.com con el asunto 'Quiero información sobre Arquitectas de Legado' y recibirás respuesta personalizada con disponibilidad y detalles del proceso.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://veronicaperozo.com" },
    { "@type": "ListItem", position: 2, name: "Conferencias y Mentoría", item: "https://veronicaperozo.com/conferencias" },
  ],
};

export default function ConferenciasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ConferenciasClient />
    </>
  );
}
