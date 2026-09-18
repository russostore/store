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
  title: "Russo Store — Mizuno Wave Prophecy | Tênis Premium em Todos os Tamanhos",
  description:
    "Russo Store: loja especializada na linha Mizuno Wave Prophecy. Modelos M, LE, LS, Edge, Glide, Bolt e Sonic em todos os tamanhos (37 ao 45). Atendimento direto via WhatsApp.",
  keywords: [
    "Russo Store",
    "Mizuno Wave Prophecy",
    "Mizuno Prophecy",
    "tênis Mizuno",
    "tênis premium",
    "running",
    "lifestyle sneaker",
    "ecommerce",
  ],
  authors: [{ name: "Russo Store" }],
  icons: {
    icon: "logo.png",
  },
  openGraph: {
    title: "Russo Store — Mizuno Wave Prophecy",
    description:
      "Tênis Mizuno Wave Prophecy em todos os modelos e tamanhos. Compra direta via WhatsApp.",
    siteName: "Russo Store",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Russo Store — Mizuno Wave Prophecy",
    description:
      "Tênis Mizuno Wave Prophecy em todos os modelos e tamanhos. Compra direta via WhatsApp.",
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
