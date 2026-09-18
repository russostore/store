"use client";

import { useRef, useState, useEffect, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, Sparkles, Environment, Text3D, Center } from "@react-three/drei";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";

/* ---------- Núcleo 3D: diamante dourado giratório ---------- */
function GoldenDiamond() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.5;
      meshRef.current.rotation.x = Math.sin(t * 0.4) * 0.3;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = t * 0.6;
      ringRef.current.rotation.z = t * 0.3;
    }
    if (ring2Ref.current) {
      ring2Ref.rotation.y = -t * 0.4;
      ring2Ref.rotation.z = -t * 0.2;
    }
  });

  return (
    <group>
      {/* Diamante principal */}
      <mesh ref={meshRef}>
        <octahedronGeometry args={[1.4, 0]} />
        <meshStandardMaterial
          color="#d4af37"
          metalness={1}
          roughness={0.1}
          emissive="#8b6914"
          emissiveIntensity={0.35}
          flatShading
        />
      </mesh>

      {/* Anel orbital 1 */}
      <mesh ref={ringRef}>
        <torusGeometry args={[2.3, 0.025, 16, 100]} />
        <meshStandardMaterial
          color="#f4d97a"
          metalness={1}
          roughness={0.2}
          emissive="#d4af37"
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Anel orbital 2 */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[2.9, 0.018, 16, 100]} />
        <meshStandardMaterial
          color="#d4af37"
          metalness={1}
          roughness={0.25}
          emissive="#8b1a1a"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Núcleo brilhante */}
      <mesh>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#f4d97a"
          emissiveIntensity={2}
          metalness={0.5}
          roughness={0}
        />
      </mesh>
    </group>
  );
}

/* ---------- Partículas orbitando ---------- */
function OrbitingParticles() {
  const groupRef = useRef<THREE.Group>(null);
  const particles = useMemo(
    () =>
      Array.from({ length: 60 }, () => ({
        radius: 3 + Math.random() * 2,
        speed: 0.2 + Math.random() * 0.6,
        offset: Math.random() * Math.PI * 2,
        y: (Math.random() - 0.5) * 2,
        size: 0.02 + Math.random() * 0.05,
      })),
    []
  );

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.1;
      groupRef.current.children.forEach((child, i) => {
        const p = particles[i];
        if (p) {
          child.position.x = Math.cos(t * p.speed + p.offset) * p.radius;
          child.position.z = Math.sin(t * p.speed + p.offset) * p.radius;
          child.position.y = p.y + Math.sin(t * 0.5 + p.offset) * 0.2;
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {particles.map((p, i) => (
        <mesh key={i}>
          <sphereGeometry args={[p.size, 8, 8]} />
          <meshStandardMaterial
            color={i % 3 === 0 ? "#f4d97a" : "#d4af37"}
            emissive={i % 3 === 0 ? "#f4d97a" : "#d4af37"}
            emissiveIntensity={2}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ---------- Cena 3D ---------- */
function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={2} color="#f4d97a" />
      <pointLight position={[-5, -3, 3]} intensity={1.5} color="#8b1a1a" />
      <spotLight
        position={[0, 6, 0]}
        angle={0.5}
        penumbra={1}
        intensity={3}
        color="#d4af37"
      />

      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
        <GoldenDiamond />
      </Float>

      <OrbitingParticles />

      <Sparkles
        count={120}
        scale={[10, 6, 10]}
        size={2}
        speed={0.3}
        color="#f4d97a"
        opacity={0.8}
      />

      <Stars
        radius={50}
        depth={50}
        count={2000}
        factor={3}
        saturation={0.3}
        fade
        speed={1}
      />
    </>
  );
}

/* ---------- Overlay de texto ---------- */
function IntroOverlay({ onSkip }: { onSkip: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="absolute inset-0 z-10 flex flex-col items-center justify-end pointer-events-none pb-12 sm:pb-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="text-center px-6"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#d4af37]" />
          <span className="text-[#d4af37] text-xs sm:text-sm tracking-[0.3em] uppercase font-sans">
            Premium Shopping
          </span>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#d4af37]" />
        </div>
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-black gold-gradient leading-none">
          RUSSO
        </h1>
        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-light tracking-[0.4em] text-[#f4d97a] mt-2">
          STORE
        </h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="text-white/60 text-sm sm:text-base mt-6 max-w-md mx-auto"
        >
          Perfumes · Tênis · Eletrônicos · Garrafas Térmicas
        </motion.p>
      </motion.div>

      <motion.button
        onClick={onSkip}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="pointer-events-auto mt-10 group relative overflow-hidden rounded-full border border-[#d4af37]/50 bg-[#d4af37]/5 backdrop-blur-sm px-8 py-3 text-sm tracking-widest uppercase text-[#f4d97a] hover:bg-[#d4af37] hover:text-black transition-all"
      >
        <span className="relative z-10">Entrar na loja →</span>
      </motion.button>
    </motion.div>
  );
}

/* ---------- Loader ---------- */
function IntroLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-12 h-12 rounded-full border-2 border-[#d4af37]/30 border-t-[#d4af37] animate-spin" />
    </div>
  );
}

/* ---------- Componente principal ---------- */
export function Intro3D({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + 2;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Auto-finish após 6 segundos
  useEffect(() => {
    if (progress < 100) return;
    const t = setTimeout(() => {
      onFinish();
    }, 800);
    return () => clearTimeout(t);
  }, [progress, onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        key="intro"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-[100] bg-[#0a0a0c] intro-active"
      >
        {/* Plano de fundo gradiente */}
        <div className="absolute inset-0 bg-vignette" />

        {/* Canvas 3D */}
        <div className="absolute inset-0">
          {loaded ? (
            <Canvas
              camera={{ position: [0, 0, 8], fov: 50 }}
              dpr={[1, 2]}
              gl={{ antialias: true, alpha: true }}
            >
              <Suspense fallback={null}>
                <Scene />
              </Suspense>
            </Canvas>
          ) : (
            <IntroLoader />
          )}
        </div>

        {/* Overlay de texto */}
        <IntroOverlay onSkip={onFinish} />

        {/* Barra de progresso */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: progress < 100 ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 w-56 sm:w-72 z-20"
        >
          <div className="flex justify-between text-[10px] tracking-widest text-[#d4af37]/80 mb-2 uppercase">
            <span>Carregando experiência</span>
            <span>{progress}%</span>
          </div>
          <div className="h-px w-full bg-[#d4af37]/20 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#8b6914] via-[#f4d97a] to-[#d4af37]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>

        {/* Pular intro */}
        <button
          onClick={onFinish}
          className="absolute top-6 right-6 z-20 text-xs uppercase tracking-widest text-white/40 hover:text-[#d4af37] transition-colors"
        >
          Pular intro ×
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
