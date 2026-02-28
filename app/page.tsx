"use client";

import type React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main style={styles.page}>
        <header style={styles.header}>
          <div style={styles.headerInner}>
            <Link href="/" style={styles.brand}>
              Srobot
            </Link>

            <nav style={styles.nav} aria-label="Navegação principal">
              <a href="#sobre" style={styles.navLink}>
                Quem somos
              </a>
              <a href="#produto" style={styles.navLink}>
                Produto
              </a>
              <a href="#contato" style={styles.navLink}>
                Contato
              </a>
            </nav>

            <Link href="/tutorbiblia" style={styles.headerCta}>
              Tutor Bíblia
            </Link>
          </div>
        </header>

        {/* HERO */}
        <section style={styles.hero}>
          <div style={styles.heroInner}>
            <span style={styles.badge}>
              Educação • IA • Experiência simples
            </span>

            <h1 style={styles.title}>
              Transforme conhecimento em experiências digitais inteligentes.
            </h1>

            <p style={styles.subtitle}>
              Aplicativos modernos, intuitivos e acessíveis para acelerar o
              aprendizado.
            </p>

            <div style={styles.buttons}>
              <Link href="/tutorbiblia" style={styles.primaryButton}>
                Conheça o Tutor Bíblia
              </Link>
              <a href="#sobre" style={styles.secondaryButton}>
                Saiba mais
              </a>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" style={styles.section}>
          <div style={styles.sectionInner}>
            <h2 style={styles.sectionTitle}>Quem somos</h2>

            <div style={styles.featureGrid}>
              <div style={styles.featureCard}>
                <h3 style={styles.featureTitle}>Design centrado no usuário</h3>
                <p style={styles.featureText}>Interfaces limpas e rápidas.</p>
              </div>

              <div style={styles.featureCard}>
                <h3 style={styles.featureTitle}>Conteúdo estruturado</h3>
                <p style={styles.featureText}>
                  Informação organizada passo a passo.
                </p>
              </div>

              <div style={styles.featureCard}>
                <h3 style={styles.featureTitle}>Acessível</h3>
                <p style={styles.featureText}>
                  Funciona bem em qualquer dispositivo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUTO */}
        <section id="produto" style={styles.sectionAlt}>
          <div style={styles.sectionInner}>
            <h2 style={styles.sectionTitle}>Tutor Bíblia</h2>

            <div style={styles.productGrid}>
              <div style={styles.productCard}>
                <p style={styles.text}>
                  Estude a Bíblia com explicações claras e organizadas.
                </p>

                <ul style={styles.list}>
                  <li>Explicações detalhadas</li>
                  <li>Organização por temas</li>
                  <li>Experiência simples</li>
                </ul>

                <Link href="/tutorbiblia" style={styles.primaryButton}>
                  Saiba mais
                </Link>
              </div>
            </div>
          </div>
        </section>

        <footer style={styles.footer}>
          © {new Date().getFullYear()} Srobot
        </footer>
      </main>
    </>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
    color: "#0f172a",
    backgroundColor: "#f8fafc",
  },

  header: {
    position: "sticky",
    top: 0,
    backgroundColor: "white",
    borderBottom: "1px solid #e2e8f0",
  },

  headerInner: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "16px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
  },

  brand: {
    fontWeight: 800,
    fontSize: 18,
    textDecoration: "none",
    color: "#1e293b",
  },

  nav: {
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
  },

  navLink: {
    textDecoration: "none",
    color: "#475569",
    fontWeight: 600,
  },

  headerCta: {
    backgroundColor: "#2563eb",
    color: "white",
    padding: "10px 14px",
    borderRadius: 10,
    textDecoration: "none",
    fontWeight: 700,
  },

  hero: {
    padding: "64px 20px",
    textAlign: "center",
  },

  heroInner: {
    maxWidth: 800,
    margin: "0 auto",
  },

  badge: {
    backgroundColor: "#e0f2fe",
    color: "#0369a1",
    padding: "6px 12px",
    borderRadius: 999,
    fontSize: 14,
    fontWeight: 600,
  },

  title: {
    fontSize: "clamp(28px, 6vw, 48px)",
    fontWeight: 900,
    marginTop: 20,
    lineHeight: 1.1,
  },

  subtitle: {
    fontSize: 18,
    color: "#475569",
    marginTop: 16,
  },

  buttons: {
    marginTop: 24,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 12,
  },

  primaryButton: {
    backgroundColor: "#2563eb",
    color: "white",
    padding: "14px 18px",
    borderRadius: 12,
    textDecoration: "none",
    fontWeight: 700,
  },

  secondaryButton: {
    border: "1px solid #cbd5e1",
    padding: "14px 18px",
    borderRadius: 12,
    textDecoration: "none",
    fontWeight: 700,
    color: "#1e293b",
  },

  section: {
    padding: "60px 20px",
  },

  sectionAlt: {
    padding: "60px 20px",
    backgroundColor: "#f1f5f9",
  },

  sectionInner: {
    maxWidth: 1000,
    margin: "0 auto",
  },

  sectionTitle: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: 800,
    marginBottom: 32,
  },

  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: 16,
  },

  featureCard: {
    padding: 20,
    borderRadius: 14,
    border: "1px solid #e2e8f0",
    backgroundColor: "white",
  },

  featureTitle: {
    fontWeight: 700,
    marginBottom: 8,
  },

  featureText: {
    color: "#475569",
  },

  productGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
  },

  productCard: {
    padding: 24,
    borderRadius: 16,
    backgroundColor: "white",
    border: "1px solid #e2e8f0",
  },

  list: {
    margin: "16px 0",
    paddingLeft: 20,
  },

  text: {
    color: "#475569",
  },

  footer: {
    padding: 24,
    textAlign: "center",
    backgroundColor: "#0f172a",
    color: "white",
    marginTop: 40,
  },
};
