import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#f97316",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Humaniz.ai — Textos mais humanos para LinkedIn",
    template: "%s | Humaniz.ai",
  },
  description:
    "Transforme rascunhos genéricos em posts humanizados para LinkedIn. IA que escreve como gente de verdade — agende, publique e acompanhe o engajamento.",
  keywords: [
    "linkedin",
    "humanizar texto",
    "ia",
    "copywriting",
    "engajamento",
    "posts linkedin",
    "inteligência artificial",
  ],
  authors: [{ name: "Humaniz.ai" }],
  creator: "Humaniz.ai",
  metadataBase: new URL(
    process.env.NEXTAUTH_URL || "https://humaniz-ai.vercel.app"
  ),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Humaniz.ai",
    title: "Humaniz.ai — Textos mais humanos para LinkedIn",
    description:
      "IA que transforma rascunhos em posts autênticos e envolventes para LinkedIn.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Humaniz.ai — Textos mais humanos para LinkedIn",
    description:
      "IA que transforma rascunhos em posts autênticos e envolventes para LinkedIn.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
