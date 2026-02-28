"use client";

import type React from "react";
import Link from "next/link";
import { useEffect, useMemo } from "react";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.srobot.biblesmartai&safe=active";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/bible-ai-daily-verse/id6756612611";

function detectOS(userAgent: string) {
  const ua = userAgent.toLowerCase();
  const isAndroid = /android/.test(ua);
  const isIOS = /iphone|ipad|ipod/.test(ua);
  return { isAndroid, isIOS };
}

export default function TutorBibliaPage() {
  const { isAndroid, isIOS } = useMemo(() => {
    if (typeof navigator === "undefined")
      return { isAndroid: false, isIOS: false };
    return detectOS(navigator.userAgent);
  }, []);

  const shouldRedirect = isAndroid || isIOS;
  const storeUrl = isAndroid ? PLAY_STORE_URL : isIOS ? APP_STORE_URL : null;
  const storeLabel = isAndroid ? "Play Store" : isIOS ? "App Store" : "Loja";

  useEffect(() => {
    if (!shouldRedirect || !storeUrl) return;

    const t = setTimeout(() => {
      window.location.href = storeUrl;
    }, 500);

    return () => clearTimeout(t);
  }, [shouldRedirect, storeUrl]);

  return (
    <main style={styles.page}>
      {/* HEADER */}
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <Link href="/" style={styles.brand}>
            Srobot
          </Link>

          <nav style={styles.nav}>
            <a href="#recursos" style={styles.navLink}>
              Recursos
            </a>
            <a href="#baixar" style={styles.navLink}>
              Baixar
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroInner}>
          <span style={styles.badge}>Tutor Bíblia</span>

          <h1 style={styles.title}>
            Estude a Bíblia com paz, clareza e constância.
          </h1>

          <p style={styles.subtitle}>
            Versículo diário, plano de estudo e chat com IA para tirar dúvidas
            com explicações simples e organizadas.
          </p>

          <div id="baixar" style={styles.ctaRow}>
            {shouldRedirect && storeUrl ? (
              <>
                <a href={storeUrl} style={styles.primaryButton}>
                  Abrir na {storeLabel}
                </a>

                <div style={styles.note}>
                  Redirecionando para a {storeLabel}…
                </div>
              </>
            ) : (
              <>
                <a href={PLAY_STORE_URL} style={styles.primaryButton}>
                  Baixar na Play Store
                </a>

                <a href={APP_STORE_URL} style={styles.secondaryButton}>
                  Baixar na App Store
                </a>

                <div style={styles.note}>
                  Está no computador? Abra a loja pelo celular.
                </div>
              </>
            )}
          </div>

          <div style={styles.highlightRow}>
            <div style={styles.highlightCard}>
              <div style={styles.highlightTitle}>Versículo diário</div>
              <div style={styles.highlightText}>
                Reflexão rápida todos os dias.
              </div>
            </div>

            <div style={styles.highlightCard}>
              <div style={styles.highlightTitle}>Plano de estudo</div>
              <div style={styles.highlightText}>
                Trilhas organizadas com progresso.
              </div>
            </div>

            <div style={styles.highlightCard}>
              <div style={styles.highlightTitle}>Chat com IA</div>
              <div style={styles.highlightText}>
                Tire dúvidas com clareza e estrutura.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECURSOS */}
      <section id="recursos" style={styles.section}>
        <div style={styles.sectionInner}>
          <h2 style={styles.sectionTitle}>Recursos principais</h2>

          <div style={styles.grid}>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Versículo diário</h3>
              <p style={styles.cardText}>
                Ajuda a manter constância e disciplina espiritual.
              </p>
            </div>

            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Plano de estudo</h3>
              <p style={styles.cardText}>
                Organização clara para avançar no aprendizado.
              </p>
            </div>

            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Chat com IA</h3>
              <p style={styles.cardText}>
                Explicações didáticas sobre passagens e termos bíblicos.
              </p>
            </div>
          </div>

          <div style={styles.finalCta}>
            <div>
              <div style={styles.finalTitle}>Baixe o Tutor Bíblia</div>
              <div style={styles.finalText}>Disponível para Android e iOS.</div>
            </div>

            <div style={styles.finalActions}>
              <a href={PLAY_STORE_URL} style={styles.primaryButton}>
                Play Store
              </a>
              <a href={APP_STORE_URL} style={styles.secondaryButton}>
                App Store
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © {new Date().getFullYear()} Srobot. Todos os direitos reservados.
      </footer>
    </main>
  );
}

/* ===================== STYLES ===================== */

const styles: { [k: string]: React.CSSProperties } = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f8fafc",
    color: "#0f172a",
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
    overflowX: "hidden",
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
    fontWeight: 900,
    fontSize: 18,
    textDecoration: "none",
    color: "#0f172a",
  },

  nav: {
    display: "flex",
    gap: 14,
    flexWrap: "wrap",
  },

  navLink: {
    textDecoration: "none",
    fontWeight: 700,
    color: "#475569",
  },

  hero: {
    padding: "70px 20px 50px",
    textAlign: "center",
  },

  heroInner: {
    maxWidth: 900,
    margin: "0 auto",
  },

  badge: {
    backgroundColor: "#e0f2fe",
    color: "#0369a1",
    padding: "6px 14px",
    borderRadius: 999,
    fontSize: 14,
    fontWeight: 700,
  },

  title: {
    fontSize: "clamp(28px, 6vw, 48px)",
    fontWeight: 900,
    marginTop: 20,
  },

  subtitle: {
    marginTop: 16,
    color: "#475569",
    fontSize: 18,
    lineHeight: 1.6,
  },

  ctaRow: {
    marginTop: 24,
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    justifyContent: "center",
  },

  primaryButton: {
    backgroundColor: "#2563eb",
    color: "white",
    padding: "14px 20px",
    borderRadius: 12,
    textDecoration: "none",
    fontWeight: 800,
  },

  secondaryButton: {
    border: "1px solid #2563eb",
    color: "#2563eb",
    padding: "14px 20px",
    borderRadius: 12,
    textDecoration: "none",
    fontWeight: 800,
  },

  note: {
    width: "100%",
    marginTop: 8,
    fontSize: 13,
    color: "#64748b",
  },

  highlightRow: {
    marginTop: 30,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 16,
  },

  highlightCard: {
    padding: 20,
    borderRadius: 14,
    backgroundColor: "white",
    border: "1px solid #e2e8f0",
  },

  highlightTitle: {
    fontWeight: 800,
    marginBottom: 6,
  },

  highlightText: {
    color: "#475569",
    fontSize: 14,
  },

  section: {
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
    fontWeight: 900,
    marginBottom: 40,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 20,
  },

  card: {
    padding: 24,
    borderRadius: 16,
    backgroundColor: "white",
    border: "1px solid #e2e8f0",
  },

  cardTitle: {
    fontWeight: 800,
    marginBottom: 8,
  },

  cardText: {
    color: "#475569",
    fontSize: 15,
  },

  finalCta: {
    marginTop: 40,
    padding: 24,
    borderRadius: 16,
    backgroundColor: "white",
    border: "1px solid #e2e8f0",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 16,
    alignItems: "center",
  },

  finalTitle: {
    fontWeight: 900,
  },

  finalText: {
    color: "#475569",
    fontSize: 14,
  },

  finalActions: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
  },

  footer: {
    padding: 30,
    textAlign: "center",
    backgroundColor: "#0f172a",
    color: "white",
    fontSize: 14,
    marginTop: 50,
  },
};
