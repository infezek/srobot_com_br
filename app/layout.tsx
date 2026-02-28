import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Srobot | Aplicativos Inteligentes",
  description:
    "Srobot é uma empresa focada no desenvolvimento de aplicativos inteligentes como o Tutor Bíblia, que auxilia no estudo das Escrituras.",
  keywords: ["Srobot", "Tutor Bíblia", "Estudo Bíblico", "Aplicativo Bíblia"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
