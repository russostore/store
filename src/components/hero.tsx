"use client";

import { motion } from "framer-motion";
import { Sparkles, Footprints, Smartphone, CupSoda, ArrowDown } from "lucide-react";
import { CATEGORIES, buildGenericWhatsappUrl } from "@/lib/products";

const ICONS = {
  Sparkles,
  Footprints,
  Smartphone,
  CupSoda,
} as const;

type HeroProps = {
  onExplore: () => void;
};

export function Hero({ onExplore }: HeroProps) {
  const waLink = buildGenericWhatsappUrl();

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-vignette pt-20"
    >
      {/* Textura de ruído */}
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      {/* Decorativo: linha dourada vertical */}
      <div className="absolute left-6 top-0 bottom-0 hidden md:flex flex-col items-center justify-center gap-6">
        <div className="h-32 w-px bg-gradient-to-b from-transparent via-[#d4af37]/50 to-transparent" />
        <span className="text-[10px] tracking-[0.4em] uppercase text-[#d4af37]/60 [writing-mode:vertical-rl] rotate-180">
          Premium Collection
        </span>
        <div className="h-32 w-px bg-gradient-to-b from-transparent via-[#d4af37]/50 to-transparent" />
      </div>

      {/* Decorativo: redes sociais */}
      <div className="absolute right-6 top-0 bottom-0 hidden md:flex flex-col items-center justify-center gap-6">
        <div className="h-20 w-px bg-gradient-to-b from-transparent to-[#d4af37]/50" />
        <span className="text-[10px] tracking-[0.4em] uppercase text-white/40 [writing-mode:vertical-rl]">
          @russo.store
        </span>
        <div className="h-20 w-px bg-gradient-to-t from-transparent to-[#d4af37]/50" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Pill de anúncio */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 backdrop-blur-sm px-4 py-1.5 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4af37]" />
            </span>
            <span className="text-xs tracking-widest uppercase text-[#f4d97a]/90">
              Frete expresso · Originais garantidos
            </span>
          </motion.div>

          {/* Título principal */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.95] tracking-tight"
          >
            <span className="block text-white">Experiência</span>
            <span className="block gold-gradient">de Elite</span>
            <span className="block text-white/90 text-3xl sm:text-5xl md:text-6xl font-light tracking-[0.15em] mt-3">
              em cada compra
            </span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-base sm:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed"
          >
            Perfumes importados, tênis de edição limitada, eletrônicos de ponta e
            garrafas térmicas premium. Seleção curada da{" "}
            <span className="text-[#f4d97a] font-medium">Russo Store</span> com
            atendimento personalizado via WhatsApp.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={onExplore}
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#d4af37] to-[#8b6914] px-8 py-4 text-sm font-bold uppercase tracking-widest text-black shadow-2xl shadow-[#d4af37]/30 hover:shadow-[#d4af37]/50 transition-all hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explorar catálogo
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </span>
              <span className="absolute inset-0 shimmer-gold opacity-50" />
            </button>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#d4af37]/40 bg-white/5 backdrop-blur-sm px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#f4d97a] hover:bg-[#d4af37]/10 transition-all hover:border-[#d4af37]"
            >
              Falar com consultor
            </a>
          </motion.div>

          {/* Stats rápidas */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto"
          >
            {[
              { num: "+5K", label: "Clientes satisfeitos" },
              { num: "100%", label: "Originais" },
              { num: "24h", label: "Envio expresso" },
              { num: "4.9★", label: "Avaliação média" },
            ].map((s, i) => (
              <div
                key={i}
                className="text-center border-t border-[#d4af37]/15 pt-4"
              >
                <div className="font-display text-2xl sm:text-3xl font-bold gold-gradient">
                  {s.num}
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-widest text-white/50 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Categorias como chips flutuantes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-0 right-0 px-4"
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {CATEGORIES.map((cat, i) => {
              const Icon = ICONS[cat.icon as keyof typeof ICONS];
              return (
                <div
                  key={cat.id}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-2 text-xs text-white/70"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {Icon && <Icon className="w-3.5 h-3.5 text-[#d4af37]" />}
                  <span>{cat.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-[#d4af37] to-transparent animate-pulse" />
        <span className="text-[9px] uppercase tracking-widest text-white/40">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
