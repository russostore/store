"use client";

import Image from "next/image";
import { Phone, Mail, MapPin, Instagram, Shield, Truck, CreditCard, Headphones } from "lucide-react";
import { STORE_NAME, WHATSAPP_NUMBER, buildGenericWhatsappUrl } from "@/lib/products";

const FEATURES = [
  {
    icon: Shield,
    title: "100% Originais",
    desc: "Produtos autênticos com procedência garantida",
  },
  {
    icon: Truck,
    title: "Envio Expresso",
    desc: "Despacho em 24h para todo o Brasil",
  },
  {
    icon: CreditCard,
    title: "Pix & Cartão",
    desc: "Pague via Pix com 5% off ou parcelamento",
  },
  {
    icon: Headphones,
    title: "Atendimento Direto",
    desc: "Consultor exclusivo via WhatsApp",
  },
];

export function Footer() {
  const waLink = buildGenericWhatsappUrl();
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-[#d4af37]/15 bg-[#070708]">
      {/* Linha decorativa dourada */}
      <div className="gold-line" />

      {/* Features */}
      <div className="border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {FEATURES.map((f, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <div className="font-display text-sm font-semibold text-white">
                    {f.title}
                  </div>
                  <div className="text-xs text-white/50 mt-0.5 leading-relaxed">
                    {f.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Marca */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative h-12 w-auto">
                <Image
                  src="/logo.png"
                  alt="Russo Store"
                  width={180}
                  height={48}
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-md">
              A {STORE_NAME} é a loja especializada na linha{" "}
              <span className="text-[#f4d97a]">Mizuno Wave Prophecy</span> —
              todos os modelos (M, LE, LS, Edge, Glide, Bolt e Sonic) em todos
              os tamanhos (37 ao 45). Atendimento personalizado e produtos 100%
              originais.
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] px-5 py-2.5 text-sm font-semibold text-black transition-colors"
            >
              <Phone className="w-4 h-4" />
              Falar no WhatsApp
            </a>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Contato
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#f4d97a] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#d4af37]" />
                  +55 16 99280-0385
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#d4af37]" />
                contato@russostore.com.br
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#d4af37]" />
                São Paulo, Brasil
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Siga-nos
            </h4>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-[#d4af37] hover:border-[#d4af37]/50 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-[#25D366] hover:border-[#25D366]/50 transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
            <p className="mt-4 text-xs text-white/40">
              Atendimento de seg. a sáb., 9h às 20h
            </p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>
            © {year} {STORE_NAME}. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-2">
            <span>CNPJ: 00.000.000/0001-00</span>
            <span className="text-[#d4af37]/40">·</span>
            <span>Política de Privacidade</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
