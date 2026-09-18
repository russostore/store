"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/product-card";
import { PRODUCTS, CATEGORIES } from "@/lib/products";

type Props = {
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
};

export function ProductSection({ activeCategory, onCategoryChange }: Props) {
  const filtered = useMemo(() => {
    if (activeCategory === "Todos") return PRODUCTS;
    return PRODUCTS.filter((p) => p.variant === activeCategory);
  }, [activeCategory]);

  return (
    <section
      id="catalogo"
      className="relative py-16 sm:py-24 bg-[#0a0a0c] scroll-mt-24"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-[#d4af37]/70">
              Catálogo
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mt-2">
              Seleção <span className="gold-gradient">premium</span>
            </h2>
            <p className="text-white/55 mt-3 max-w-xl text-sm sm:text-base">
              Cada item passou por curadoria para garantir originalidade,
              qualidade e melhor preço. Clique e compre direto pelo WhatsApp.
            </p>
          </div>

          <div className="text-right">
            <div className="font-display text-3xl gold-gradient font-bold">
              {filtered.length}
            </div>
            <div className="text-xs uppercase tracking-widest text-white/40">
              produtos
            </div>
          </div>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-2 mb-10">
          <FilterPill
            active={activeCategory === "Todos"}
            onClick={() => onCategoryChange("Todos")}
          >
            Todos
          </FilterPill>
          {CATEGORIES.map((cat) => (
            <FilterPill
              key={cat.id}
              active={activeCategory === cat.id}
              onClick={() => onCategoryChange(cat.id)}
            >
              {cat.name}
            </FilterPill>
          ))}
        </div>

        {/* Grid de produtos */}
        <motion.div
          layout
          className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
        >
          {filtered.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </motion.div>

        {/* Mensagem final */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <div className="gold-line mb-6" />
          <p className="text-white/60 text-sm sm:text-base leading-relaxed">
            Não encontrou o que procurava? Temos muito mais no estoque. Fale
            agora com um consultor e receba opções personalizadas.
          </p>
          <a
            href={`https://wa.me/5516992800385?text=${encodeURIComponent(
              "Olá! Acessei o site da Russo Store e gostaria de mais informações sobre outros produtos."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/5 hover:bg-[#d4af37] hover:text-black text-[#f4d97a] px-6 py-3 text-sm font-bold uppercase tracking-widest transition-all"
          >
            Consultar catálogo completo →
          </a>
        </div>
      </div>
    </section>
  );
}

function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all border ${
        active
          ? "bg-[#d4af37] text-black border-[#d4af37] shadow-lg shadow-[#d4af37]/20"
          : "bg-white/5 text-white/70 border-white/10 hover:border-[#d4af37]/40 hover:text-[#f4d97a]"
      }`}
    >
      {children}
    </button>
  );
}
