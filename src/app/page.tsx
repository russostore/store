"use client";

import { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { CategoryStrip } from "@/components/category-strip";
import { ProductSection } from "@/components/product-section";
import { HowItWorks } from "@/components/how-it-works";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";

const Intro3D = dynamic(
  () => import("@/components/intro-3d").then((m) => m.Intro3D),
  { ssr: false }
);

export default function Home() {
  // Verificar se a intro já foi vista nesta sessão (estado inicial)
  const [introSeen] = useState(() => {
    if (typeof window === "undefined") return false;
    try {
      return sessionStorage.getItem("russo_intro_seen") === "1";
    } catch {
      return false;
    }
  });
  const [showIntro, setShowIntro] = useState(!introSeen);
  const [activeCategory, setActiveCategory] = useState<string>("Todos");

  // Liberar scroll quando intro está visível
  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showIntro]);

  const handleIntroFinish = useCallback(() => {
    setShowIntro(false);
    try {
      sessionStorage.setItem("russo_intro_seen", "1");
    } catch {}
  }, []);

  const handleCategorySelect = useCallback((cat: string) => {
    setActiveCategory(cat);
    // Scroll suave até o catálogo
    const el = document.getElementById("catalogo");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const handleExplore = useCallback(() => {
    const el = document.getElementById("catalogo");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <main id="top" className="relative min-h-screen flex flex-col bg-[#0a0a0c]">
      {showIntro && <Intro3D onFinish={handleIntroFinish} />}

      <Header
        onCategorySelect={handleCategorySelect}
        activeCategory={activeCategory === "Todos" ? "" : activeCategory}
      />

      <div className="flex-1 flex flex-col">
        <Hero onExplore={handleExplore} />

        <Marquee />

        <CategoryStrip onSelect={handleCategorySelect} active={activeCategory} />

        <ProductSection
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <HowItWorks />
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
