import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Russo Store — Premium Shopping Experience",
  description:
    "Russo Store: perfumes importados, tênis premium, eletrônicos de ponta e garrafas térmicas. Qualidade de elite com atendimento direto via WhatsApp.",
  keywords: [
    "Russo Store",
    "perfumes",
    "tênis",
    "eletrônicos",
    "garrafas térmicas",
    "ecommerce",
    "loja online",
  ],
  authors: [{ name: "Russo Store" }],
  icons: {
    icon: "logo.svg",
  },
  openGraph: {
    title: "Russo Store — Premium Shopping",
    description:
      "Perfumes, tênis, eletrônicos e garrafas térmicas com atendimento direto via WhatsApp.",
    siteName: "Russo Store",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Russo Store — Premium Shopping",
    description:
      "Perfumes, tênis, eletrônicos e garrafas térmicas. Compra direta via WhatsApp.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${bebas.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
