"use client";

import type React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main style={styles.page}>
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
            Abrir Tutor Bíblia
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroInner}>
          <div style={styles.badge}>Educação • IA • Experiência simples</div>

          <h1 style={styles.title}>
            Transforme conhecimento em experiências digitais inteligentes.
          </h1>

          <p style={styles.subtitle}>
            A Srobot cria aplicativos modernos, intuitivos e acessíveis para
            acelerar o aprendizado e ampliar o acesso ao conhecimento.
          </p>

          <div style={styles.buttons}>
            <Link href="/tutorbiblia" style={styles.primaryButton}>
              Conheça o Tutor Bíblia
            </Link>
            <a href="#sobre" style={styles.secondaryButton}>
              Saiba mais
            </a>
          </div>

          <div style={styles.statsRow} aria-label="Destaques">
            <div style={styles.statCard}>
              <div style={styles.statNumber}>+ Clareza</div>
              <div style={styles.statLabel}>Explicações estruturadas</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statNumber}>+ Foco</div>
              <div style={styles.statLabel}>Organização por temas</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statNumber}>+ Prática</div>
              <div style={styles.statLabel}>Estudo no seu ritmo</div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" style={styles.section}>
        <div style={styles.sectionInner}>
          <h2 style={styles.sectionTitle}>Quem somos</h2>

          <div style={styles.aboutCard}>
            <p style={styles.text}>
              A <strong>Srobot</strong> desenvolve aplicativos inteligentes que
              facilitam o aprendizado e ampliam o acesso ao conhecimento.
              Construímos soluções digitais modernas, intuitivas e acessíveis
              para transformar a forma como as pessoas estudam e evoluem.
            </p>

            <div style={styles.featureGrid}>
              <div style={styles.featureCard}>
                <div style={styles.featureTitle}>
                  Design centrado no usuário
                </div>
                <div style={styles.featureText}>
                  Interfaces limpas e rápidas, pensadas para reduzir fricção.
                </div>
              </div>
              <div style={styles.featureCard}>
                <div style={styles.featureTitle}>Conteúdo com estrutura</div>
                <div style={styles.featureText}>
                  Informação organizada para guiar o estudo passo a passo.
                </div>
              </div>
              <div style={styles.featureCard}>
                <div style={styles.featureTitle}>Acessível e moderno</div>
                <div style={styles.featureText}>
                  Experiência consistente em diferentes telas e dispositivos.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUTO */}
      <section id="produto" style={styles.sectionAlt}>
        <div style={styles.sectionInner}>
          <h2 style={styles.sectionTitle}>Nosso produto</h2>
          <p style={styles.text}>
            O <strong>Tutor Bíblia</strong> foi criado para ajudar você a
            estudar a Bíblia de forma estruturada, clara e prática — sem
            complicação.
          </p>

          <div style={styles.productGrid}>
            <div style={styles.productCard}>
              <div style={styles.productHeader}>
                <h3 style={styles.productTitle}>Tutor Bíblia</h3>
                <div style={styles.pill}>Em desenvolvimento contínuo</div>
              </div>

              <ul style={styles.list}>
                <li style={styles.listItem}>
                  <span style={styles.bullet} />
                  Explicações detalhadas de passagens bíblicas
                </li>
                <li style={styles.listItem}>
                  <span style={styles.bullet} />
                  Apoio na interpretação e entendimento
                </li>
                <li style={styles.listItem}>
                  <span style={styles.bullet} />
                  Organização por temas e livros
                </li>
                <li style={styles.listItem}>
                  <span style={styles.bullet} />
                  Experiência simples, rápida e intuitiva
                </li>
              </ul>

              <p style={styles.text}>
                Ideal para estudos individuais, discipulados e aprofundamento
                espiritual.
              </p>

              <div style={styles.productActions}>
                <Link href="/tutorbiblia" style={styles.primaryButton}>
                  Saiba mais sobre o Tutor Bíblia
                </Link>
                <a href="#contato" style={styles.secondaryButton}>
                  Falar com a Srobot
                </a>
              </div>
            </div>

            <div style={styles.benefitsCard}>
              <h4 style={styles.benefitsTitle}>Por que é diferente?</h4>

              <div style={styles.benefitItem}>
                <div style={styles.benefitDot} />
                <div>
                  <div style={styles.benefitHeading}>Estrutura primeiro</div>
                  <div style={styles.benefitText}>
                    Respostas com organização, contexto e próximos passos.
                  </div>
                </div>
              </div>

              <div style={styles.benefitItem}>
                <div style={styles.benefitDot} />
                <div>
                  <div style={styles.benefitHeading}>Ritmo do aluno</div>
                  <div style={styles.benefitText}>
                    Conteúdo pensado para estudo diário e revisões rápidas.
                  </div>
                </div>
              </div>

              <div style={styles.benefitItem}>
                <div style={styles.benefitDot} />
                <div>
                  <div style={styles.benefitHeading}>Interface sem ruído</div>
                  <div style={styles.benefitText}>
                    Menos distrações, mais aprendizado.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA FINAL */}
          <section style={styles.finalCta} id="contato">
            <div>
              <h3 style={styles.finalCtaTitle}>
                Quer acompanhar as novidades?
              </h3>
              <p style={styles.finalCtaText}>
                Entre em contato e receba atualizações do Tutor Bíblia e
                próximos produtos.
              </p>
            </div>

            <div style={styles.finalCtaActions}>
              <Link href="/tutorbiblia" style={styles.primaryButton}>
                Ver Tutor Bíblia
              </Link>
              <a
                href="mailto:contato@srobot.com"
                style={styles.secondaryButton}
                aria-label="Enviar e-mail para contato@srobot.com"
              >
                Enviar e-mail
              </a>
            </div>
          </section>
        </div>
      </section>

      {/* FOOTER */}
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

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
    color: "#0f172a",
    backgroundColor: "#0b1220",
    scrollBehavior: "smooth",
  },

  header: {
    position: "sticky",
    top: 0,
    zIndex: 10,
    backdropFilter: "blur(10px)",
    backgroundColor: "rgba(11, 18, 32, 0.7)",
    borderBottom: "1px solid rgba(148, 163, 184, 0.15)",
  },
  headerInner: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "14px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
  },
  brand: {
    color: "#e2e8f0",
    fontWeight: 800,
    letterSpacing: "-0.02em",
    textDecoration: "none",
    fontSize: 18,
  },
  nav: {
    display: "flex",
    gap: 16,
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  navLink: {
    color: "#cbd5e1",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: 14,
    opacity: 0.9,
  },
  headerCta: {
    textDecoration: "none",
    backgroundColor: "rgba(37, 99, 235, 0.15)",
    color: "#dbeafe",
    border: "1px solid rgba(37, 99, 235, 0.45)",
    padding: "10px 14px",
    borderRadius: 12,
    fontWeight: 700,
    fontSize: 14,
    whiteSpace: "nowrap",
  },

  hero: {
    padding: "84px 20px 56px 20px",
    background:
      "radial-gradient(900px 500px at 30% 10%, rgba(37,99,235,0.35), transparent 60%), radial-gradient(900px 500px at 70% 0%, rgba(34,197,94,0.25), transparent 55%), linear-gradient(180deg, #0b1220 0%, #0b1220 100%)",
  },
  heroInner: {
    maxWidth: 1100,
    margin: "0 auto",
    textAlign: "center",
  },
  badge: {
    display: "inline-block",
    padding: "8px 12px",
    borderRadius: 999,
    backgroundColor: "rgba(148, 163, 184, 0.12)",
    border: "1px solid rgba(148, 163, 184, 0.18)",
    color: "#e2e8f0",
    fontWeight: 700,
    fontSize: 13,
    marginBottom: 18,
  },
  title: {
    fontSize: "clamp(34px, 5vw, 56px)",
    fontWeight: 900,
    letterSpacing: "-0.03em",
    lineHeight: 1.05,
    margin: "0 auto 16px auto",
    maxWidth: 920,
    color: "#f8fafc",
  },
  subtitle: {
    fontSize: "clamp(16px, 2vw, 20px)",
    maxWidth: 760,
    margin: "0 auto 28px auto",
    color: "rgba(226,232,240,0.82)",
    lineHeight: 1.6,
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: 12,
    flexWrap: "wrap",
    marginBottom: 30,
  },
  primaryButton: {
    backgroundColor: "#2563eb",
    color: "#ffffff",
    padding: "14px 18px",
    borderRadius: 14,
    textDecoration: "none",
    fontWeight: 800,
    boxShadow: "0 16px 40px rgba(37,99,235,0.35)",
  },
  secondaryButton: {
    backgroundColor: "rgba(255,255,255,0.06)",
    color: "#e2e8f0",
    padding: "14px 18px",
    borderRadius: 14,
    textDecoration: "none",
    fontWeight: 800,
    border: "1px solid rgba(148, 163, 184, 0.22)",
  },

  statsRow: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 12,
    maxWidth: 900,
    margin: "0 auto",
  },
  statCard: {
    padding: 16,
    borderRadius: 16,
    backgroundColor: "rgba(148, 163, 184, 0.08)",
    border: "1px solid rgba(148, 163, 184, 0.14)",
    textAlign: "left",
  },
  statNumber: {
    color: "#f8fafc",
    fontWeight: 900,
    letterSpacing: "-0.02em",
  },
  statLabel: {
    marginTop: 6,
    color: "rgba(226,232,240,0.78)",
    fontWeight: 600,
    fontSize: 13,
  },

  section: {
    padding: "56px 20px",
    backgroundColor: "#0b1220",
  },
  sectionAlt: {
    padding: "56px 20px 72px 20px",
    backgroundColor: "#0a1020",
  },
  sectionInner: {
    maxWidth: 1100,
    margin: "0 auto",
  },
  sectionTitle: {
    fontSize: 30,
    margin: "0 0 12px 0",
    color: "#f8fafc",
    letterSpacing: "-0.02em",
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    lineHeight: 1.7,
    color: "rgba(226,232,240,0.82)",
    maxWidth: 920,
    margin: "0 auto 18px auto",
    textAlign: "center",
  },

  aboutCard: {
    marginTop: 18,
    padding: 22,
    borderRadius: 18,
    backgroundColor: "rgba(148, 163, 184, 0.08)",
    border: "1px solid rgba(148, 163, 184, 0.14)",
  },
  featureGrid: {
    marginTop: 18,
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 12,
  },
  featureCard: {
    padding: 16,
    borderRadius: 16,
    backgroundColor: "rgba(2, 6, 23, 0.35)",
    border: "1px solid rgba(148, 163, 184, 0.12)",
  },
  featureTitle: {
    color: "#f1f5f9",
    fontWeight: 900,
    marginBottom: 6,
  },
  featureText: {
    color: "rgba(226,232,240,0.78)",
    fontSize: 14,
    lineHeight: 1.6,
  },

  productGrid: {
    display: "grid",
    gridTemplateColumns: "1.35fr 0.65fr",
    gap: 14,
    marginTop: 22,
    alignItems: "start",
  },
  productCard: {
    padding: 22,
    borderRadius: 18,
    backgroundColor: "rgba(148, 163, 184, 0.08)",
    border: "1px solid rgba(148, 163, 184, 0.14)",
  },
  productHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    flexWrap: "wrap",
    marginBottom: 10,
  },
  productTitle: {
    margin: 0,
    fontSize: 22,
    color: "#f8fafc",
    letterSpacing: "-0.02em",
    fontWeight: 900,
  },
  pill: {
    padding: "8px 10px",
    borderRadius: 999,
    backgroundColor: "rgba(34,197,94,0.12)",
    border: "1px solid rgba(34,197,94,0.28)",
    color: "#dcfce7",
    fontWeight: 800,
    fontSize: 12,
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: "14px 0 16px 0",
    textAlign: "left",
  },
  listItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: 10,
    padding: "10px 0",
    color: "rgba(226,232,240,0.86)",
    lineHeight: 1.6,
    borderBottom: "1px solid rgba(148, 163, 184, 0.12)",
  },
  bullet: {
    width: 10,
    height: 10,
    marginTop: 6,
    borderRadius: 999,
    backgroundColor: "#60a5fa",
    boxShadow: "0 0 0 4px rgba(96,165,250,0.15)",
    flex: "0 0 auto",
  },
  productActions: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    marginTop: 10,
  },

  benefitsCard: {
    padding: 22,
    borderRadius: 18,
    background:
      "linear-gradient(180deg, rgba(37,99,235,0.12), rgba(34,197,94,0.06))",
    border: "1px solid rgba(148, 163, 184, 0.14)",
  },
  benefitsTitle: {
    margin: "0 0 14px 0",
    color: "#f8fafc",
    fontWeight: 900,
    letterSpacing: "-0.02em",
  },
  benefitItem: {
    display: "flex",
    gap: 12,
    padding: "12px 0",
  },
  benefitDot: {
    width: 10,
    height: 10,
    borderRadius: 999,
    marginTop: 6,
    backgroundColor: "#22c55e",
    boxShadow: "0 0 0 4px rgba(34,197,94,0.16)",
    flex: "0 0 auto",
  },
  benefitHeading: {
    color: "#f1f5f9",
    fontWeight: 900,
    marginBottom: 4,
  },
  benefitText: {
    color: "rgba(226,232,240,0.78)",
    fontSize: 14,
    lineHeight: 1.6,
  },

  finalCta: {
    marginTop: 18,
    padding: 22,
    borderRadius: 18,
    backgroundColor: "rgba(2, 6, 23, 0.45)",
    border: "1px solid rgba(148, 163, 184, 0.14)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 14,
    flexWrap: "wrap",
  },
  finalCtaTitle: {
    margin: 0,
    color: "#f8fafc",
    fontWeight: 900,
    letterSpacing: "-0.02em",
  },
  finalCtaText: {
    margin: "6px 0 0 0",
    color: "rgba(226,232,240,0.78)",
    lineHeight: 1.6,
  },
  finalCtaActions: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
  },

  footer: {
    padding: "26px 20px",
    borderTop: "1px solid rgba(148, 163, 184, 0.14)",
    backgroundColor: "#070c18",
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
  footerBrand: {
    color: "#e2e8f0",
    fontWeight: 900,
    letterSpacing: "-0.02em",
  },
  footerText: {
    color: "rgba(226,232,240,0.7)",
    fontSize: 13,
  },
};
