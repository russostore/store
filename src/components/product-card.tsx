"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import type { Product } from "@/lib/products";
import { buildWhatsappUrl, SIZES } from "@/lib/products";
import { assetPath } from "@/lib/asset-path";

type Props = {
  product: Product;
  index: number;
};

export function ProductCard({ product, index }: Props) {
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const waLink = buildWhatsappUrl(product, selectedSize ?? undefined);
  const imageUrl = assetPath(product.image);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.06 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-[#0f0f12] border border-white/8 hover:border-[#d4af37]/40 transition-all duration-500"
    >
      {/* Imagem */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[#1a1a1f] to-[#0a0a0c]">
        <img
          src={imageUrl}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-80" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.badge && (
            <span className="inline-flex items-center gap-1 rounded-full bg-[#d4af37] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-black">
              <Zap className="w-3 h-3" />
              {product.badge}
            </span>
          )}
        </div>

        {/* Variante flutuante */}
        <span className="absolute bottom-3 left-3 rounded-full bg-black/60 backdrop-blur-sm px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-[#f4d97a]/80 border border-[#d4af37]/20">
          {product.variant}
        </span>

        {/* Highlight lateral dourado */}
        {product.highlight && (
          <div className="absolute top-3 right-3 z-10">
            <div className="rounded-full bg-[#0a0a0c]/80 backdrop-blur-sm border border-[#d4af37]/40 px-2 py-1">
              <span className="text-[9px] uppercase tracking-widest text-[#d4af37] font-bold">
                ★ {product.highlight}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Conteúdo */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="font-display text-base sm:text-lg font-semibold text-white leading-snug">
          {product.name}
        </h3>
        <p className="mt-1.5 text-xs text-white/55 line-clamp-2 flex-1">
          {product.description}
        </p>

        {/* Cores */}
        {product.colors && product.colors.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {product.colors.map((c, i) => (
              <span
                key={i}
                className="rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-[10px] text-white/60"
              >
                {c}
              </span>
            ))}
          </div>
        )}

        {/* Preço */}
        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-xl font-bold gold-gradient font-display">
            R$ {product.price.toFixed(2).replace(".", ",")}
          </span>
          <span className="text-[10px] text-white/40 uppercase tracking-widest">
            à vista
          </span>
        </div>

        {/* Seletor de tamanho */}
        <div className="mt-4">
          <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1.5">
            Tamanho
          </div>
          <div className="flex flex-wrap gap-1">
            {SIZES.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`min-w-[34px] h-8 px-1.5 rounded-md text-xs font-bold transition-all border ${
                  selectedSize === size
                    ? "bg-[#d4af37] text-black border-[#d4af37] shadow-md shadow-[#d4af37]/30"
                    : "bg-white/5 text-white/70 border-white/10 hover:border-[#d4af37]/50 hover:text-[#f4d97a]"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* CTA WhatsApp */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-4 group/btn relative overflow-hidden rounded-xl px-4 py-3 text-sm font-bold transition-all flex items-center justify-center gap-2 ${
            selectedSize
              ? "bg-[#25D366] hover:bg-[#1ebe5d] text-black shadow-lg shadow-[#25D366]/25"
              : "bg-white/5 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/10"
          }`}
        >
          <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <svg
            className="w-4 h-4 relative"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          <span className="relative">
            {selectedSize
              ? `Comprar tam. ${selectedSize}`
              : "Comprar via WhatsApp"}
          </span>
          <ArrowRight className="w-4 h-4 relative group-hover/btn:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </motion.article>
  );
}
