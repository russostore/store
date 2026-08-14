"use client";

import { motion } from "framer-motion";
import { Sparkles, Footprints, Smartphone, CupSoda } from "lucide-react";
import { CATEGORIES } from "@/lib/products";

const ICONS = { Sparkles, Footprints, Smartphone, CupSoda } as const;

type Props = {
  onSelect: (cat: string) => void;
  active: string;
};

export function CategoryStrip({ onSelect, active }: Props) {
  return (
    <section className="relative py-12 sm:py-16 border-t border-b border-[#d4af37]/10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <span className="text-xs uppercase tracking-[0.4em] text-[#d4af37]/70">
            Coleções
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2">
            Categorias em <span className="gold-gradient">destaque</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
          {CATEGORIES.map((cat, i) => {
            const Icon = ICONS[cat.icon as keyof typeof ICONS];
            const isActive = active === cat.id;
            return (
              <motion.button
                key={cat.id}
                onClick={() => onSelect(cat.id)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className={`group relative overflow-hidden rounded-2xl p-5 sm:p-7 text-left transition-all border ${
                  isActive
                    ? "border-[#d4af37] bg-[#d4af37]/10"
                    : "border-white/8 bg-[#0f0f12] hover:border-[#d4af37]/40"
                }`}
              >
                {/* Glow no hover */}
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#d4af37]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 transition-colors ${
                      isActive
                        ? "bg-[#d4af37] text-black"
                        : "bg-white/5 text-[#d4af37] group-hover:bg-[#d4af37]/20"
                    }`}
                  >
                    {Icon && <Icon className="w-5 h-5" />}
                  </div>
                  <h3 className="font-display text-base sm:text-lg font-semibold text-white">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-white/50 mt-1 leading-relaxed">
                    {cat.description}
                  </p>
                  <div
                    className={`mt-4 inline-flex items-center text-xs font-medium transition-colors ${
                      isActive
                        ? "text-[#f4d97a]"
                        : "text-[#d4af37]/70 group-hover:text-[#f4d97a]"
                    }`}
                  >
                    Ver coleção →
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
