"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  Footprints,
  Shield,
  Sparkles,
} from "lucide-react";
import { WHATSAPP_NUMBER, CATEGORIES, DEPARTMENTS } from "@/lib/products";
import { assetPath } from "@/lib/asset-path";

type HeaderProps = {
  onCategorySelect: (cat: string) => void;
  activeCategory: string;
};

const DEPT_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Footprints,
  Shield,
  Sparkles,
};

export function Header({ onCategorySelect, activeCategory }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDept, setOpenDept] = useState<string | null>(null);

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
          <div className="relative h-10 w-auto">
            <img
              src={assetPath("/logo.png")}
              alt="Russo Store"
              className="h-10 w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </div>
        </a>

        {/* Nav desktop — menu multi-categorias (e-commerce) */}
        <nav className="hidden lg:flex items-center gap-1">
          {/* Botão "Todos" */}
          <button
            onClick={() => onCategorySelect("Todos")}
            className={`relative text-sm tracking-wide px-3 py-2 transition-colors ${
              activeCategory === "Todos" || activeCategory === ""
                ? "text-[#f4d97a]"
                : "text-white/70 hover:text-[#d4af37]"
            }`}
          >
            Início
            {(activeCategory === "Todos" || activeCategory === "") && (
              <motion.span
                layoutId="nav-underline"
                className="absolute -bottom-1.5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"
              />
            )}
          </button>

          {/* Departamentos com dropdown */}
          {DEPARTMENTS.map((dept) => {
            const Icon = DEPT_ICONS[dept.icon] ?? Sparkles;
            const isDeptActive = dept.categories.includes(activeCategory);
            return (
              <div
                key={dept.id}
                className="relative"
                onMouseEnter={() => setOpenDept(dept.id)}
                onMouseLeave={() => setOpenDept(null)}
              >
                <button
                  onClick={() => onCategorySelect(dept.categories[0])}
                  className={`relative text-sm tracking-wide px-3 py-2 transition-colors flex items-center gap-1.5 ${
                    isDeptActive
                      ? "text-[#f4d97a]"
                      : "text-white/70 hover:text-[#d4af37]"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {dept.name}
                  <ChevronDown
                    className={`w-3 h-3 transition-transform ${
                      openDept === dept.id ? "rotate-180" : ""
                    }`}
                  />
                  {isDeptActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"
                    />
                  )}
                </button>

                {/* Dropdown */}
                <AnimatePresence>
                  {openDept === dept.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-0 top-full pt-2 min-w-[220px]"
                    >
                      <div className="rounded-xl border border-[#d4af37]/20 bg-[#0a0a0c]/95 backdrop-blur-xl shadow-2xl shadow-black/60 overflow-hidden">
                        <div className="px-3 py-2 text-[10px] uppercase tracking-widest text-[#d4af37]/70 border-b border-[#d4af37]/10">
                          {dept.name}
                        </div>
                        {dept.categories.map((catId) => {
                          const cat = CATEGORIES.find((c) => c.id === catId);
                          if (!cat) return null;
                          return (
                            <button
                              key={catId}
                              onClick={() => {
                                onCategorySelect(catId);
                                setOpenDept(null);
                              }}
                              className="w-full text-left px-4 py-2.5 text-sm text-white/80 hover:bg-[#d4af37]/10 hover:text-[#f4d97a] transition-colors flex items-center justify-between gap-2"
                            >
                              <span>{cat.name}</span>
                              <span className="text-[10px] text-white/40 truncate">
                                {cat.description}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
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

      {/* Menu mobile — multi-categorias */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-[#0a0a0c]/98 backdrop-blur-xl border-t border-[#d4af37]/15"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
              {/* Botão Início */}
              <button
                onClick={() => {
                  onCategorySelect("Todos");
                  setMobileOpen(false);
                }}
                className={`text-left px-4 py-3 rounded-lg transition-colors ${
                  activeCategory === "Todos" || activeCategory === ""
                    ? "bg-[#d4af37]/10 text-[#f4d97a]"
                    : "text-white/80 hover:bg-white/5"
                }`}
              >
                <div className="font-medium">Início — Ver tudo</div>
                <div className="text-xs text-white/40 mt-0.5">
                  Catálogo completo
                </div>
              </button>

              {/* Departamentos + sub-categorias */}
              {DEPARTMENTS.map((dept) => {
                const Icon = DEPT_ICONS[dept.icon] ?? Sparkles;
                return (
                  <div
                    key={dept.id}
                    className="rounded-lg border border-white/5 overflow-hidden"
                  >
                    <div className="px-4 py-2 text-[10px] uppercase tracking-widest text-[#d4af37]/70 bg-white/[0.02] flex items-center gap-2">
                      <Icon className="w-3.5 h-3.5" />
                      {dept.name}
                    </div>
                    {dept.categories.map((catId) => {
                      const cat = CATEGORIES.find((c) => c.id === catId);
                      if (!cat) return null;
                      return (
                        <button
                          key={catId}
                          onClick={() => {
                            onCategorySelect(catId);
                            setMobileOpen(false);
                          }}
                          className={`w-full text-left px-4 py-3 transition-colors border-t border-white/5 ${
                            activeCategory === catId
                              ? "bg-[#d4af37]/10 text-[#f4d97a]"
                              : "text-white/80 hover:bg-white/5"
                          }`}
                        >
                          <div className="font-medium">{cat.name}</div>
                          <div className="text-xs text-white/40 mt-0.5">
                            {cat.description}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                );
              })}

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
