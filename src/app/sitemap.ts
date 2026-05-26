import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://veronicaperozo.com";
  const now = new Date("2026-05-23");

  const pages = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/en", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/sobre-mi", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/conferencias", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/libros", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/prensa", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  const slugs = [
    "que-es-el-seguro-de-salud-en-estados-unidos",
    "diferencia-entre-hmo-y-ppo",
    "open-enrollment-florida-2026",
    "medicaid-vs-marketplace-florida",
    "presupuesto-familiar-inmigrante-eeuu",
    "credito-desde-cero-inmigrante",
    "deudas-en-eeuu-que-hacer",
    "cansancio-silencioso-mujer-latina",
    "liderazgo-femenino-diaspora-latina",
    "como-monetizar-tu-historia-latina",
    "emprender-en-eeuu-siendo-latina",
    "seguro-de-vida-familia-latina",
    "habitos-conscientes-inmigrante",
    "construir-legado-desde-cero",
    "dentista-seguro-salud-florida",
    "independencia-financiera-mujer-latina",
    "primera-vez-sin-seguro-eeuu",
  ];

  return [
    ...pages.map(({ url, priority, changeFrequency }) => ({
      url: `${base}${url}`,
      lastModified: now,
      changeFrequency,
      priority,
    })),
    ...slugs.map((slug) => ({
      url: `${base}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
  ];
}
