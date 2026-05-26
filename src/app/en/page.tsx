import { Metadata } from "next";
import EnClient from "./EnClient";

export const metadata: Metadata = {
  title: "Verónica Perozo — Author · Entrepreneur · Mentor",
  description:
    "Verónica Perozo is the author of El Cansancio Silencioso, founder of 2JVS Insurance, and creator of Arquitectas de Legado. She helps Latina women organize their lives, monetize their story, and build their legacy.",
  alternates: { canonical: "https://veronicaperozo.com/en" },
  openGraph: {
    title: "Verónica Perozo — Author · Entrepreneur · Mentor",
    description: "Venezuelan entrepreneur in Florida. Author, insurance agency founder, and mentor for Latina women.",
    url: "https://veronicaperozo.com/en",
    locale: "en_US",
  },
};

export default function EnPage() {
  return <EnClient />;
}
