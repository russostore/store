"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { assetPath } from "@/lib/asset-path";

/**
 * HeroSlide — Carousel de 3 imagens no topo do site.
 *
 * Imagens em /public/hero-slides/slide-{1,2,3}.png
 *
 * Para trocar as imagens:
 *  1. Substitua os arquivos em /public/hero-slides/slide-{1,2,3}.png
 *     mantendo os mesmos nomes (qualquer dimensão funciona, ideal ~2000x800).
 *  2. Para adicionar mais slides, edite o array SLIDES abaixo.
 */

type Slide = {
  image: string;
  alt: string;
};

const SLIDES: Slide[] = [
  {
    image: assetPath("/hero-slides/slide-1.png"),
    alt: "Mizuno Wave Prophecy — Coleção completa na Russo Store",
  },
  {
    image: assetPath("/hero-slides/slide-2.png"),
    alt: "Modelos exclusivos Mizuno Wave Prophecy LS, Beta e mais",
  },
  {
    image: assetPath("/hero-slides/slide-3.png"),
    alt: "Originais garantidos — Tamanhos 37 ao 45 — R$ 399,90",
  },
];

const AUTOPLAY_MS = 5000;

type HeroSlideProps = {
  onExplore?: () => void;
};

export function HeroSlide({ onExplore }: HeroSlideProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((i: number) => {
    setDirection(i > index ? 1 : -1);
    setIndex((i + SLIDES.length) % SLIDES.length);
  }, [index]);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  // Autoplay
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused]);

  // Pré-carregar imagens
  useEffect(() => {
    SLIDES.forEach((s) => {
      const img = new Image();
      img.src = s.image;
    });
  }, []);

  const variants = {
    enter: (dir: number) => ({
      opacity: 0,
      scale: 1.05,
      x: dir > 0 ? 40 : -40,
    }),
    center: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
    exit: (dir: number) => ({
      opacity: 0,
      scale: 0.98,
      x: dir > 0 ? -40 : 40,
      transition: { duration: 0.5, ease: [0.4, 0, 1, 1] as const },
    }),
  };

  return (
    <section
      id="hero-slide"
      aria-label="Banners em destaque"
      className="relative w-full overflow-hidden bg-[#0a0a0c] border-b border-[#d4af37]/15 pt-[80px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Container do slide — aspect ratio 1983x793 ≈ 2.5:1, com mínimo de altura em mobile */}
      <div className="relative w-full aspect-[1983/793] min-h-[280px] max-h-[80vh]">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={SLIDES[index].image}
              alt={SLIDES[index].alt}
              className="w-full h-full object-cover object-center select-none pointer-events-none"
              draggable={false}
            />
            {/* Overlay sutil para o slide não "gritar" visualmente */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/60 via-transparent to-[#0a0a0c]/20 pointer-events-none" />
          </motion.div>
        </AnimatePresence>

        {/* Setas de navegação */}
        <button
          aria-label="Slide anterior"
          onClick={prev}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 h-9 w-9 sm:h-12 sm:w-12 rounded-full bg-black/40 backdrop-blur-sm border border-[#d4af37]/40 text-[#f4d97a] hover:bg-[#d4af37] hover:text-black hover:scale-110 transition-all flex items-center justify-center"
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>
        <button
          aria-label="Próximo slide"
          onClick={next}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 h-9 w-9 sm:h-12 sm:w-12 rounded-full bg-black/40 backdrop-blur-sm border border-[#d4af37]/40 text-[#f4d97a] hover:bg-[#d4af37] hover:text-black hover:scale-110 transition-all flex items-center justify-center"
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>

        {/* Indicadores (dots) */}
        <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir para slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index
                  ? "w-8 bg-gradient-to-r from-[#f4d97a] to-[#d4af37]"
                  : "w-1.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Barra de progresso de autoplay */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10 z-10">
          <motion.div
            key={`${index}-${paused}`}
            className="h-full bg-gradient-to-r from-[#f4d97a] via-[#d4af37] to-[#8b6914]"
            initial={{ width: "0%" }}
            animate={{ width: paused ? "0%" : "100%" }}
            transition={{ duration: paused ? 0 : AUTOPLAY_MS / 1000, ease: "linear" }}
          />
        </div>
      </div>
    </section>
  );
}
