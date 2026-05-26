"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const esLinks: [string, string][] = [
  ["Sobre mí", "/sobre-mi"],
  ["Libros", "/libros"],
  ["Conferencias", "/conferencias"],
  ["Blog", "/blog"],
  ["Prensa", "/prensa"],
];

const enLinks: [string, string][] = [
  ["About", "/en/about"],
  ["Books", "/en/books"],
  ["Speaking", "/en/speaking"],
  ["Blog", "/en/blog"],
  ["Press", "/en/press"],
];

export default function Nav() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");
  const links = isEnglish ? enLinks : esLinks;
  const homeHref = isEnglish ? "/en" : "/";

  const langTarget = isEnglish ? "/" : "/en";
  const langLabel = isEnglish ? "ES" : "EN";

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      padding: "1rem 2rem", display: "flex", justifyContent: "space-between",
      alignItems: "center", background: "rgba(248,244,238,0.94)",
      backdropFilter: "blur(8px)", borderBottom: "1px solid #EDE5D8",
    }}>
      <Link href={homeHref} style={{
        fontFamily: "var(--font-serif, serif)", fontSize: "1.1rem",
        color: "#4A3728", fontWeight: 400, textDecoration: "none",
      }}>
        Verónica Perozo
      </Link>

      <div style={{ display: "flex", gap: "1.8rem", alignItems: "center" }}>
        {links.map(([label, href]) => (
          <Link key={href} href={href} style={{
            color: "#8B5E3C", fontSize: ".82rem", textDecoration: "none",
            letterSpacing: ".06em", textTransform: "uppercase",
          }}>
            {label}
          </Link>
        ))}

        <Link href={langTarget} style={{
          color: "#B8975A", fontSize: ".75rem", fontWeight: 600,
          letterSpacing: ".12em", textDecoration: "none",
          border: "1px solid #B8975A", padding: ".25rem .6rem",
          lineHeight: 1,
        }}>
          {langLabel}
        </Link>
      </div>
    </nav>
  );
}
