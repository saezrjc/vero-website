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
    "Verónica Perozo es autora de El Cansancio Silencioso y creadora de Arquitectas de Legado. Empresaria venezolana radicada en Florida. Ayuda a mujeres latinas a ordenar su vida, monetizar su historia y construir su legado.",
  keywords: [
    "Verónica Perozo", "Arquitectas de Legado", "El Cansancio Silencioso",
    "mentora mujeres latinas", "seguros de salud Florida",
    "marca personal latina", "emprendimiento femenino", "mujeres venezolanas Florida",
    "bienestar emocional", "educación financiera latina",
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
      "Autora de El Cansancio Silencioso. Empresaria en la industria de seguros de salud en Florida. Creadora de Arquitectas de Legado.",
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
    "Verónica Perozo es autora, empresaria venezolana radicada en Florida y creadora del programa Arquitectas de Legado. Especializada en bienestar emocional, educación financiera y desarrollo personal para mujeres latinas.",
  knowsLanguage: ["es", "en"],
  nationality: { "@type": "Country", name: "Venezuela" },
  gender: "Female",
  birthPlace: { "@type": "Place", name: "Venezuela" },
  alumniOf: [
    { "@type": "EducationalOrganization", name: "Universidad José María Vargas", description: "Licenciatura en Administración, Mención Gerencia Empresarial" },
    { "@type": "EducationalOrganization", name: "Universidad Nacional Experimental Rafael María Baralt (UNERMB)", description: "Estudios en Gerencia de Recursos Humanos" },
    { "@type": "EducationalOrganization", name: "Universidad del Zulia (LUZ)", description: "Programa Avanzado en Psiconeuroinmunología · Especialización en Psiconeurolingüística · Organizaciones Inteligentes" },
    { "@type": "EducationalOrganization", name: "Instituto Tecnológico Universitario Monseñor de Talavera", description: "Técnico Superior en Administración" },
  ],
  sameAs: [
    "https://www.instagram.com/veronica.perozo",
    "https://www.tiktok.com/@VeronicaPerozooficial",
    "https://www.youtube.com/@VeronicaPerozoOficial",
    "https://www.facebook.com/Veronica.Perozo",
    "https://www.linkedin.com/in/veronica-perozov-1a5622141",
    "https://www.amazon.com/gp/product/B0GZCRG21Q/",
  ],
  knowsAbout: [
    "Seguros de salud", "Marca personal", "Educación financiera",
    "Emprendimiento femenino", "Legado familiar", "Mentoría",
    "Programación Neurolingüística", "Psiconeuroinmunología",
    "Desarrollo Organizacional", "Bienestar emocional",
    "Recursos Humanos", "Gestión de equipos", "Coaching de vida",
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
