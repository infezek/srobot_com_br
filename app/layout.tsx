import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "srobot - Tutor Bíblia",
  description:
    "Srobot é uma empresa focada no desenvolvimento de aplicativos inteligentes como o Tutor Bíblia, que auxilia no estudo das Escrituras.",
  keywords: ["Srobot", "Tutor Bíblia", "Estudo Bíblico", "Aplicativo Bíblia"],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NF2HXMBTV3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NF2HXMBTV3');
          `}
        </Script>
      </head>

      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
