"use client";

import { motion } from "framer-motion";
import {
  Footprints,
  Zap,
  Crown,
  Sparkles,
  Hexagon,
  Wind,
  Flame,
  Rocket,
  Star,
  TrendingUp,
  Award,
  Droplets,
} from "lucide-react";
import { CATEGORIES } from "@/lib/products";

const ICONS = {
  Footprints,
  Zap,
  Crown,
  Sparkles,
  Hexagon,
  Wind,
  Flame,
  Rocket,
  Star,
  TrendingUp,
  Award,
  Droplets,
} as const;

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
            Linhas
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2">
            Variantes da <span className="gold-gradient">coleção</span>
          </h2>
          <p className="text-white/50 mt-3 text-sm">
            Filtre por linha · todos os modelos em todos os tamanhos
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {CATEGORIES.map((cat, i) => {
            const Icon = ICONS[cat.icon as keyof typeof ICONS];
            const isActive = active === cat.id;
            return (
              <motion.button
                key={cat.id}
                onClick={() => onSelect(cat.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className={`group relative overflow-hidden rounded-xl p-4 sm:p-5 text-left transition-all border ${
                  isActive
                    ? "border-[#d4af37] bg-[#d4af37]/10"
                    : "border-white/8 bg-[#0f0f12] hover:border-[#d4af37]/40"
                }`}
              >
                <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-[#d4af37]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  <div
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-lg mb-3 transition-colors ${
                      isActive
                        ? "bg-[#d4af37] text-black"
                        : "bg-white/5 text-[#d4af37] group-hover:bg-[#d4af37]/20"
                    }`}
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                  </div>
                  <h3 className="font-display text-sm sm:text-base font-semibold text-white">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-white/50 mt-1 leading-snug">
                    {cat.description}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
