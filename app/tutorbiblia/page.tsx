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
    }, 450);

    return () => clearTimeout(t);
  }, [shouldRedirect, storeUrl]);

  return (
    <main style={styles.page}>
      {/* Top bar */}
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <Link
            href="/"
            style={styles.brand}
            aria-label="Srobot - Página inicial"
          >
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
          <div style={styles.badge}>Tutor Bíblia</div>

          <h1 style={styles.title}>
            Estude a Bíblia com paz, clareza e constância.
          </h1>

          <p style={styles.subtitle}>
            Um app pensado para o dia a dia: <strong>versículo diário</strong>,{" "}
            <strong>plano de estudo</strong> e um <strong>chat com IA</strong>{" "}
            para tirar dúvidas com explicações simples e organizadas.
          </p>

          <div id="baixar" style={styles.ctaRow}>
            {shouldRedirect && storeUrl ? (
              <>
                <a href={storeUrl} style={styles.primaryButton}>
                  Abrir na {storeLabel}
                </a>
                <a href="#recursos" style={styles.secondaryButton}>
                  Ver recursos
                </a>
                <div style={styles.note}>
                  Redirecionando para a {storeLabel}… Se não abrir
                  automaticamente (ex.: Instagram), toque em “Abrir na{" "}
                  {storeLabel}”.
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
                  Você está no computador (ou outro dispositivo). Veja abaixo a
                  descrição do app e use os botões para abrir a loja no celular.
                </div>
              </>
            )}
          </div>

          <div style={styles.highlightRow} aria-label="Destaques do app">
            <div style={styles.highlightCard}>
              <div style={styles.highlightTitle}>Versículo diário</div>
              <div style={styles.highlightText}>
                Um momento rápido de leitura e reflexão, todos os dias.
              </div>
            </div>
            <div style={styles.highlightCard}>
              <div style={styles.highlightTitle}>Plano de estudo</div>
              <div style={styles.highlightText}>
                Trilhas por temas e objetivos, com progresso.
              </div>
            </div>
            <div style={styles.highlightCard}>
              <div style={styles.highlightTitle}>Chat com IA</div>
              <div style={styles.highlightText}>
                Tire dúvidas sobre passagens e termos com clareza.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECURSOS */}
      <section id="recursos" style={styles.section}>
        <div style={styles.sectionInner}>
          <h2 style={styles.sectionTitle}>Recursos principais</h2>
          <p style={styles.sectionSubtitle}>
            Uma experiência leve, bonita e objetiva — feita para te ajudar a
            continuar.
          </p>

          <div style={styles.grid}>
            <div style={styles.card}>
              <div style={styles.cardHeader}>
                <div style={styles.iconCircle} aria-hidden="true">
                  📖
                </div>
                <div>
                  <div style={styles.cardTitle}>Versículo diário</div>
                  <div style={styles.cardSubtitle}>
                    Para manter constância e fortalecer a leitura.
                  </div>
                </div>
              </div>

              <ul style={styles.list}>
                <li style={styles.listItem}>
                  <span style={styles.dot} /> Rotina simples e rápida
                </li>
                <li style={styles.listItem}>
                  <span style={styles.dot} /> Ideal para começar o dia
                </li>
              </ul>
            </div>

            <div style={styles.card}>
              <div style={styles.cardHeader}>
                <div style={styles.iconCircle} aria-hidden="true">
                  🗓️
                </div>
                <div>
                  <div style={styles.cardTitle}>Plano de estudo</div>
                  <div style={styles.cardSubtitle}>
                    Organização por temas/livros, com continuidade.
                  </div>
                </div>
              </div>

              <ul style={styles.list}>
                <li style={styles.listItem}>
                  <span style={styles.dot} /> Caminho claro para avançar
                </li>
                <li style={styles.listItem}>
                  <span style={styles.dot} /> Acompanhamento de progresso
                </li>
              </ul>
            </div>

            <div style={styles.card}>
              <div style={styles.cardHeader}>
                <div style={styles.iconCircle} aria-hidden="true">
                  💬
                </div>
                <div>
                  <div style={styles.cardTitle}>Chat para dúvidas (IA)</div>
                  <div style={styles.cardSubtitle}>
                    Explicações claras e estruturadas para entender melhor.
                  </div>
                </div>
              </div>

              <ul style={styles.list}>
                <li style={styles.listItem}>
                  <span style={styles.dot} /> Ajuda com interpretação e contexto
                </li>
                <li style={styles.listItem}>
                  <span style={styles.dot} /> Respostas objetivas e didáticas
                </li>
              </ul>
            </div>
          </div>

          {/* CTA final */}
          <div style={styles.finalCta}>
            <div>
              <div style={styles.finalTitle}>Baixe o Tutor Bíblia</div>
              <div style={styles.finalText}>
                Disponível para Android e iOS. Se estiver no desktop, abra a
                loja pelo celular usando os botões.
              </div>
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

      <footer style={styles.footer}>
        <div style={styles.footerInner}>
          <div style={styles.footerBrand}>Srobot</div>
          <div style={styles.footerText}>
            © {new Date().getFullYear()} Srobot. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </main>
  );
}

const styles: { [k: string]: React.CSSProperties } = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f8fafc",
    color: "#0f172a",
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
  },

  header: {
    position: "sticky",
    top: 0,
    zIndex: 10,
    backgroundColor: "rgba(248, 250, 252, 0.9)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(15, 23, 42, 0.08)",
  },
  headerInner: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "14px 18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  brand: {
    color: "#0f172a",
    fontWeight: 900,
    textDecoration: "none",
    letterSpacing: "-0.02em",
  },
  nav: { display: "flex", gap: 14, flexWrap: "wrap" },
  navLink: {
    color: "#334155",
    textDecoration: "none",
    fontWeight: 700,
    fontSize: 14,
  },

  hero: {
    padding: "62px 18px 44px 18px",
    background:
      "radial-gradient(800px 400px at 15% 10%, rgba(37,99,235,0.12), transparent 60%), radial-gradient(700px 360px at 85% 0%, rgba(34,197,94,0.10), transparent 55%), linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
  },
  heroInner: { maxWidth: 1100, margin: "0 auto", textAlign: "center" },
  badge: {
    display: "inline-block",
    padding: "8px 12px",
    borderRadius: 999,
    backgroundColor: "#eff6ff",
    border: "1px solid rgba(37, 99, 235, 0.18)",
    color: "#1d4ed8",
    fontWeight: 800,
    fontSize: 13,
    marginBottom: 14,
  },
  title: {
    margin: "0 auto 12px auto",
    maxWidth: 920,
    fontSize: "clamp(32px, 5vw, 52px)",
    fontWeight: 950,
    letterSpacing: "-0.03em",
    lineHeight: 1.08,
    color: "#0f172a",
  },
  subtitle: {
    margin: "0 auto",
    maxWidth: 860,
    color: "#475569",
    fontSize: "clamp(16px, 2vw, 19px)",
    lineHeight: 1.75,
  },

  ctaRow: {
    marginTop: 20,
    display: "flex",
    gap: 12,
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  primaryButton: {
    display: "inline-block",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    padding: "12px 16px",
    borderRadius: 14,
    textDecoration: "none",
    fontWeight: 900,
    boxShadow: "0 14px 30px rgba(37,99,235,0.18)",
  },
  secondaryButton: {
    display: "inline-block",
    backgroundColor: "#ffffff",
    color: "#1d4ed8",
    padding: "12px 16px",
    borderRadius: 14,
    textDecoration: "none",
    fontWeight: 900,
    border: "1px solid rgba(37, 99, 235, 0.22)",
  },
  note: {
    width: "100%",
    marginTop: 6,
    fontSize: 13,
    color: "#64748b",
    lineHeight: 1.5,
  },

  highlightRow: {
    marginTop: 22,
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 12,
    maxWidth: 980,
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "left",
  },
  highlightCard: {
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#ffffff",
    border: "1px solid rgba(15, 23, 42, 0.08)",
    boxShadow: "0 10px 26px rgba(15,23,42,0.05)",
  },
  highlightTitle: { fontWeight: 950, color: "#0f172a", marginBottom: 6 },
  highlightText: { color: "#64748b", lineHeight: 1.65, fontSize: 14 },

  section: { padding: "46px 18px 70px 18px", backgroundColor: "#f8fafc" },
  sectionInner: { maxWidth: 1100, margin: "0 auto" },
  sectionTitle: {
    textAlign: "center",
    margin: "0 0 10px 0",
    fontSize: 30,
    fontWeight: 950,
    letterSpacing: "-0.02em",
    color: "#0f172a",
  },
  sectionSubtitle: {
    textAlign: "center",
    margin: "0 auto 22px auto",
    maxWidth: 860,
    color: "#64748b",
    lineHeight: 1.75,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 12,
    alignItems: "stretch",
  },
  card: {
    padding: 18,
    borderRadius: 18,
    backgroundColor: "#ffffff",
    border: "1px solid rgba(15, 23, 42, 0.08)",
    boxShadow: "0 10px 26px rgba(15,23,42,0.05)",
  },
  cardHeader: { display: "flex", gap: 12, alignItems: "flex-start" },
  iconCircle: {
    width: 38,
    height: 38,
    borderRadius: 12,
    display: "grid",
    placeItems: "center",
    backgroundColor: "#f1f5f9",
    border: "1px solid rgba(15,23,42,0.08)",
    flex: "0 0 auto",
  },
  cardTitle: { fontWeight: 950, color: "#0f172a" },
  cardSubtitle: {
    marginTop: 4,
    color: "#64748b",
    lineHeight: 1.6,
    fontSize: 14,
  },

  list: {
    listStyle: "none",
    padding: 0,
    margin: "14px 0 0 0",
    display: "grid",
    gap: 10,
  },
  listItem: {
    display: "flex",
    gap: 10,
    alignItems: "flex-start",
    color: "#334155",
    lineHeight: 1.6,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 999,
    marginTop: 6,
    backgroundColor: "#22c55e",
    boxShadow: "0 0 0 4px rgba(34,197,94,0.14)",
    flex: "0 0 auto",
  },

  finalCta: {
    marginTop: 18,
    padding: 18,
    borderRadius: 18,
    background:
      "linear-gradient(180deg, rgba(37,99,235,0.08), rgba(34,197,94,0.06))",
    border: "1px solid rgba(15, 23, 42, 0.08)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 14,
    flexWrap: "wrap",
  },
  finalTitle: { fontWeight: 950, color: "#0f172a" },
  finalText: { marginTop: 6, color: "#64748b", lineHeight: 1.7 },
  finalActions: { display: "flex", gap: 12, flexWrap: "wrap" },

  footer: {
    padding: "26px 18px",
    textAlign: "center",
    borderTop: "1px solid rgba(15, 23, 42, 0.08)",
    backgroundColor: "#ffffff",
    color: "#64748b",
    fontSize: 13,
  },
  footerInner: {
    maxWidth: 1100,
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
    flexWrap: "wrap",
  },
  footerBrand: { color: "#0f172a", fontWeight: 950, letterSpacing: "-0.02em" },
  footerText: { color: "#64748b" },
};
