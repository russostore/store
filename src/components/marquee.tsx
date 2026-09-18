"use client";

const ITEMS = [
  "★ 75 modelos Prophecy",
  "★ Tamanhos 37 ao 45",
  "★ Preço único R$ 399,90",
  "★ Originais garantidos",
  "★ Atendimento via WhatsApp",
  "★ Envio para todo Brasil",
  "★ Consultor exclusivo",
  "★ Produtos lacrados",
];

export function Marquee() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#0a0a0c] via-[#1a1410] to-[#0a0a0c] border-y border-[#d4af37]/20 py-4">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...ITEMS, ...ITEMS, ...ITEMS].map((item, i) => (
          <span
            key={i}
            className="mx-6 inline-flex items-center font-display text-sm sm:text-base tracking-[0.2em] uppercase text-[#f4d97a]/80"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0c] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0c] to-transparent pointer-events-none" />
    </div>
  );
}
