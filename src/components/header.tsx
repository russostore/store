"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X, Phone } from "lucide-react";
import { STORE_NAME, WHATSAPP_NUMBER, CATEGORIES } from "@/lib/products";

type HeaderProps = {
  onCategorySelect: (cat: string) => void;
  activeCategory: string;
};

export function Header({ onCategorySelect, activeCategory }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Olá! Acessei o site da Russo Store e gostaria de mais informações."
  )}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0c]/95 backdrop-blur-xl border-b border-[#d4af37]/15 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4af37] via-[#f4d97a] to-[#8b6914] flex items-center justify-center font-display text-black font-black text-lg shadow-lg shadow-[#d4af37]/30 group-hover:scale-110 transition-transform">
              R
            </div>
            <div className="absolute inset-0 rounded-full ring-1 ring-[#d4af37]/30 group-hover:ring-[#d4af37]/60 transition-all" />
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-xl font-bold gold-gradient">
              RUSSO
            </span>
            <span className="font-display text-[10px] tracking-[0.5em] text-[#f4d97a]/70 mt-0.5">
              STORE
            </span>
          </div>
        </a>

        {/* Nav desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategorySelect(cat.id)}
              className={`relative text-sm tracking-wide transition-colors ${
                activeCategory === cat.id
                  ? "text-[#f4d97a]"
                  : "text-white/70 hover:text-[#d4af37]"
              }`}
            >
              {cat.name}
              {activeCategory === cat.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1.5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"
                />
              )}
            </button>
          ))}
        </nav>

        {/* Ações */}
        <div className="flex items-center gap-3">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] px-5 py-2 text-sm font-semibold text-black transition-colors shadow-lg shadow-[#25D366]/20"
          >
            <Phone className="w-4 h-4" />
            <span>Comprar</span>
          </a>
          <button
            onClick={() => setMobileOpen((s) => !s)}
            className="lg:hidden p-2 rounded-md text-[#d4af37] hover:bg-[#d4af37]/10"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-[#0a0a0c]/98 backdrop-blur-xl border-t border-[#d4af37]/15"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    onCategorySelect(cat.id);
                    setMobileOpen(false);
                  }}
                  className={`text-left px-4 py-3 rounded-lg transition-colors ${
                    activeCategory === cat.id
                      ? "bg-[#d4af37]/10 text-[#f4d97a]"
                      : "text-white/80 hover:bg-white/5"
                  }`}
                >
                  <div className="font-medium">{cat.name}</div>
                  <div className="text-xs text-white/40 mt-0.5">
                    {cat.description}
                  </div>
                </button>
              ))}
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 text-sm font-semibold text-black"
              >
                <Phone className="w-4 h-4" /> Falar no WhatsApp
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
