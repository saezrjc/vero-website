import { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog — Guías para mujeres latinas en EE.UU. | Verónica Perozo",
  description:
    "Artículos gratuitos sobre seguros de salud en Florida, finanzas personales para inmigrantes, emprendimiento femenino y bienestar. En español, sin tecnicismos.",
  openGraph: {
    title: "Blog de Verónica Perozo — Recursos para mujeres latinas",
    description: "Seguros, finanzas, emprendimiento y bienestar. Explicados por alguien que lo vivió primero.",
    url: "https://veronicaperozo.com/blog",
  },
  alternates: { canonical: "https://veronicaperozo.com/blog" },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Blog de Verónica Perozo",
  description: "Guías reales sobre seguros de salud, finanzas y emprendimiento para mujeres latinas en Estados Unidos",
  url: "https://veronicaperozo.com/blog",
  author: {
    "@type": "Person",
    name: "Verónica Perozo",
    url: "https://veronicaperozo.com",
  },
  inLanguage: "es",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://veronicaperozo.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://veronicaperozo.com/blog" },
  ],
};

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <BlogClient />
    </>
  );
}
