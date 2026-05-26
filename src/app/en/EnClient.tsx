"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";

const fade = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } };

export default function EnHome() {
  return (
    <main style={{ fontFamily: "var(--font-sans, Inter, system-ui, sans-serif)" }}>

      <Nav />

      {/* HERO */}
      <section style={{
        background: "linear-gradient(160deg, #1E1510 0%, #2E1F15 60%, #1A0F08 100%)",
        minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "8rem 2rem 6rem",
      }}>
        <motion.div variants={fade} initial="hidden" animate="show" transition={{ duration: 1 }} style={{ maxWidth: "720px" }}>
          <p style={{ color: "#B8975A", fontSize: ".78rem", letterSpacing: ".25em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
            Author · Entrepreneur · Mentor
          </p>
          <h1 style={{
            fontFamily: "var(--font-serif, serif)", fontWeight: 300,
            fontSize: "clamp(3rem, 8vw, 6.5rem)", lineHeight: 1.0,
            color: "#F8F4EE", marginBottom: "2rem", letterSpacing: "-.01em",
          }}>
            Verónica<br />Perozo
          </h1>
          <div style={{ width: "60px", height: "1px", background: "#B8975A", margin: "0 auto 2rem" }} />
          <p style={{ color: "#EDE5D8", fontSize: "clamp(1rem, 2.5vw, 1.2rem)", lineHeight: 1.9, marginBottom: "3rem" }}>
            From surviving in silence to building with identity,<br />purpose, income, and legacy.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/en/speaking" style={{
              background: "#B8975A", color: "#1E1510", padding: "1rem 2.5rem",
              fontWeight: 600, fontSize: ".82rem", letterSpacing: ".08em",
              textTransform: "uppercase", textDecoration: "none",
            }}>Arquitectas de Legado</Link>
            <a href="https://www.amazon.com/gp/product/B0GZCRG21Q/" target="_blank" rel="noopener noreferrer" style={{
              border: "1px solid #B8975A", color: "#B8975A", padding: "1rem 2.5rem",
              fontSize: ".82rem", letterSpacing: ".08em",
              textTransform: "uppercase", textDecoration: "none",
            }}>The Book on Amazon</a>
          </div>
        </motion.div>
      </section>

      {/* STATS */}
      <section style={{ background: "#F8F4EE", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "3rem", textAlign: "center" }}>
          {[
            { n: "600+", label: "Families served" },
            { n: "9", label: "Licensed states" },
            { n: "28", label: "Years of experience" },
            { n: "1", label: "Mentorship program" },
          ].map(({ n, label }) => (
            <motion.div key={label} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <p style={{ fontFamily: "var(--font-serif, serif)", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#1E1510", fontWeight: 300, lineHeight: 1 }}>{n}</p>
              <p style={{ color: "#8B5E3C", fontSize: ".75rem", letterSpacing: ".15em", textTransform: "uppercase", marginTop: ".5rem" }}>{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ background: "#F8F4EE", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: .7 }}
            style={{ position: "relative", minHeight: "500px", overflow: "hidden" }}>
            <Image
              src="/images/vero-en-el-sofa.jpeg"
              alt="Verónica Perozo — Author and mentor for Latina women"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              sizes="(max-width: 768px) 100vw, 480px"
            />
          </motion.div>
          <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: .7, delay: .2 }}>
            <p style={{ color: "#B8975A", fontSize: ".78rem", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: "1rem" }}>My story</p>
            <h2 style={{ fontFamily: "var(--font-serif, serif)", fontWeight: 300, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#1E1510", marginBottom: "1.5rem", lineHeight: 1.15 }}>
              I don't speak from theory.<br />
              <em>I speak from a life I had to rebuild.</em>
            </h2>
            <p style={{ color: "#4A3728", lineHeight: 1.9, fontSize: "1rem", marginBottom: "1rem" }}>
              I arrived in Florida in September 2015. Venezuelan, immigrant, mother — with a career built in Venezuela and everything to rebuild. What began as a way to move forward became 2JVS Insurance, a published book, and a mentorship program for women who look like who I used to be.
            </p>
            <Link href="/en/about" style={{ color: "#B8975A", fontSize: ".85rem", letterSpacing: ".1em", textTransform: "uppercase", textDecoration: "none", borderBottom: "1px solid #B8975A", paddingBottom: ".2rem" }}>
              Read full story →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* BOOK */}
      <section style={{ background: "#1E1510", padding: "6rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <p style={{ color: "#B8975A", fontSize: ".78rem", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: "1rem" }}>Published work</p>
          <h2 style={{ fontFamily: "var(--font-serif, serif)", fontWeight: 300, fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#F8F4EE", marginBottom: "1.5rem" }}>
            El Cansancio Silencioso
          </h2>
          <p style={{ color: "#EDE5D8", lineHeight: 1.9, marginBottom: "2.5rem" }}>
            The story of the woman who holds everything together on the outside and is exhausted on the inside. An honest conversation about what it costs to sustain a life without a system that sustains you.
          </p>
          <a href="https://www.amazon.com/gp/product/B0GZCRG21Q/" target="_blank" rel="noopener noreferrer" style={{
            display: "inline-block", background: "#B8975A", color: "#1E1510",
            padding: ".9rem 2.5rem", fontWeight: 600, fontSize: ".82rem",
            letterSpacing: ".06em", textTransform: "uppercase", textDecoration: "none",
          }}>Get it on Amazon →</a>
        </div>
      </section>

      {/* PROGRAM */}
      <section style={{ background: "#EDE5D8", padding: "6rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <p style={{ color: "#B8975A", fontSize: ".78rem", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: "1rem" }}>Mentorship program</p>
          <h2 style={{ fontFamily: "var(--font-serif, serif)", fontWeight: 300, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#1E1510", marginBottom: "1.5rem" }}>
            Arquitectas de Legado
          </h2>
          <p style={{ color: "#4A3728", lineHeight: 1.9, fontSize: "1.05rem", marginBottom: "2rem" }}>
            90 days to stop surviving in silence and start building a life with clear identity, financial structure, monetizable purpose, and legacy.
          </p>
          <Link href="/en/speaking" style={{
            display: "inline-block", background: "#4A3728", color: "#F8F4EE",
            padding: ".9rem 2.5rem", fontWeight: 600, fontSize: ".82rem",
            letterSpacing: ".06em", textTransform: "uppercase", textDecoration: "none",
          }}>Learn more →</Link>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ background: "#1E1510", padding: "6rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <p style={{ color: "#B8975A", fontSize: ".78rem", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: "1rem" }}>Let's talk</p>
          <h2 style={{ fontFamily: "var(--font-serif, serif)", fontWeight: 300, fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#F8F4EE", marginBottom: "1rem" }}>
            Ready to build your legacy?
          </h2>
          <p style={{ color: "#EDE5D8", marginBottom: "2.5rem", lineHeight: 1.8 }}>
            Write to me directly or find me on social media.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2rem" }}>
            <a href="mailto:insurance.2jvs@gmail.com" style={{
              background: "#B8975A", color: "#1E1510", padding: ".9rem 2rem",
              fontWeight: 600, fontSize: ".82rem", letterSpacing: ".06em",
              textTransform: "uppercase", textDecoration: "none",
            }}>Send email</a>
          </div>
          <div style={{ display: "flex", gap: "1.2rem", justifyContent: "center", flexWrap: "wrap" }}>
            {[
              ["Instagram", "https://instagram.com/veronica.perozo"],
              ["TikTok", "https://www.tiktok.com/@VeronicaPerozooficial"],
              ["LinkedIn", "https://www.linkedin.com/in/veronica-perozov-1a5622141"],
            ].map(([label, url]) => (
              <a key={label} href={url} target="_blank" rel="noopener noreferrer" style={{
                color: "#8B5E3C", fontSize: ".78rem", letterSpacing: ".08em",
                textTransform: "uppercase", textDecoration: "none",
                borderBottom: "1px solid #4A3728", paddingBottom: ".1rem",
              }}>{label}</a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#1A0F08", padding: "2.5rem 2rem", textAlign: "center", borderTop: "1px solid #2E1F15" }}>
        <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "1rem" }}>
          {[
            ["Instagram", "https://instagram.com/veronica.perozo"],
            ["TikTok", "https://www.tiktok.com/@VeronicaPerozooficial"],
            ["YouTube", "https://www.youtube.com/@VeronicaPerozoOficial"],
            ["Facebook", "https://www.facebook.com/Veronica.Perozo"],
            ["LinkedIn", "https://www.linkedin.com/in/veronica-perozov-1a5622141"],
          ].map(([label, url]) => (
            <a key={label} href={url} target="_blank" rel="noopener noreferrer" style={{
              color: "#4A3728", fontSize: ".72rem", letterSpacing: ".1em",
              textTransform: "uppercase", textDecoration: "none",
            }}>{label}</a>
          ))}
        </div>
        <p style={{ color: "#3A2920", fontSize: ".72rem" }}>© 2026 Verónica Perozo · veronicaperozo.com</p>
      </footer>

    </main>
  );
}
