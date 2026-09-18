"use client";

import { motion } from "framer-motion";
import { MousePointerClick, MessageCircle, PackageCheck } from "lucide-react";

const STEPS = [
  {
    icon: MousePointerClick,
    title: "1. Escolha o produto",
    desc: "Navegue pelo catálogo e clique no item desejado. Cada produto leva direto ao nosso WhatsApp.",
  },
  {
    icon: MessageCircle,
    title: "2. Confirme no WhatsApp",
    desc: "A mensagem já chega pronta com o nome e código do produto. Confirme quantidade e tire dúvidas.",
  },
  {
    icon: PackageCheck,
    title: "3. Receba em casa",
    desc: "Pague via Pix (5% off) ou cartão. Envio expresso em 24h para todo o Brasil com rastreio.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative py-16 sm:py-24 bg-[#0a0a0c] overflow-hidden">
      {/* Decoração de fundo */}
      <div className="absolute inset-0 bg-vignette opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#d4af37]/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.4em] text-[#d4af37]/70">
            Como funciona
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mt-3">
            Compra <span className="gold-gradient">simples e segura</span>
          </h2>
          <p className="text-white/55 mt-4 text-sm sm:text-base leading-relaxed">
            Da escolha à entrega, todo o processo foi desenhado para ser rápido,
            transparente e direto com o vendedor — sem intermediários.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative group"
            >
              {/* Linha conectora */}
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] right-[-30%] h-px bg-gradient-to-r from-[#d4af37]/40 to-transparent z-0" />
              )}

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="relative w-24 h-24 rounded-full border border-[#d4af37]/30 bg-[#0f0f12] flex items-center justify-center mb-5 group-hover:border-[#d4af37] transition-colors">
                  <div className="absolute inset-0 rounded-full bg-[#d4af37]/0 group-hover:bg-[#d4af37]/10 transition-colors" />
                  <step.icon className="w-9 h-9 text-[#d4af37]" />
                  {/* Pulse ring */}
                  <div className="absolute inset-0 rounded-full border border-[#d4af37]/20 animate-pulse-gold" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-white/55 leading-relaxed max-w-xs">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
