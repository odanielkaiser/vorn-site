"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-bg-primary" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-radial opacity-20" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
        className="absolute right-0 top-0 bottom-0 w-[55%] hidden lg:block"
        style={{ maskImage: "linear-gradient(to right, transparent 0%, black 8%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%)" }}
      >
        <svg viewBox="0 0 900 700" preserveAspectRatio="xMidYMid slice" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="glow2" cx="60%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FF1A1A" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#FF1A1A" stopOpacity="0" />
            </radialGradient>
            <filter id="blur2">
              <feGaussianBlur stdDeviation="5" />
            </filter>
          </defs>

          <circle cx="650" cy="330" r="300" fill="url(#glow2)" />

          <g opacity="0.5">
            <circle cx="650" cy="330" r="240" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="5 10" />
            <circle cx="650" cy="330" r="170" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 8" />
            <circle cx="650" cy="330" r="110" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
            <circle cx="650" cy="330" r="50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          </g>

          <circle cx="650" cy="330" r="5" fill="#FF1A1A" opacity="0.9" />
          <circle cx="650" cy="330" r="9" fill="none" stroke="#FF1A1A" strokeWidth="1.5" opacity="0.3" />
          <circle cx="650" cy="330" r="3" fill="#FF1A1A" filter="url(#blur2)" opacity="0.8">
            <animate attributeName="r" values="3;16;3" dur="4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0;0.8" dur="4s" repeatCount="indefinite" />
          </circle>

          <g opacity="0.5">
            <circle cx="650" cy="130" r="3" fill="#FF1A1A" />
            <line x1="650" y1="130" x2="650" y2="240" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <circle cx="810" cy="220" r="3" fill="#FF1A1A" />
            <line x1="810" y1="220" x2="720" y2="290" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <circle cx="830" cy="440" r="3" fill="#FF1A1A" />
            <line x1="830" y1="440" x2="730" y2="390" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <circle cx="470" cy="440" r="3" fill="#FF1A1A" />
            <line x1="470" y1="440" x2="560" y2="390" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <circle cx="470" cy="240" r="3" fill="#FF1A1A" />
            <line x1="470" y1="240" x2="570" y2="290" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <circle cx="810" cy="340" r="2" fill="rgba(255,255,255,0.2)" />
            <line x1="810" y1="340" x2="720" y2="340" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
            <circle cx="490" cy="340" r="2" fill="rgba(255,255,255,0.2)" />
            <line x1="490" y1="340" x2="580" y2="340" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
          </g>

          <g opacity="0.7">
            <rect x="540" y="110" width="130" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,26,26,0.25)" strokeWidth="1" />
            <rect x="540" y="110" width="40" height="40" rx="8" fill="rgba(255,26,26,0.1)" />
            <text x="560" y="136" textAnchor="middle" fill="#FF1A1A" fontSize="18" fontFamily="monospace">&#x25a0;</text>
            <text x="592" y="136" textAnchor="start" fill="rgba(255,255,255,0.6)" fontSize="11" fontFamily="monospace" fontWeight="600">FIREWALL</text>

            <rect x="700" y="200" width="130" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <rect x="700" y="200" width="40" height="40" rx="8" fill="rgba(255,255,255,0.05)" />
            <text x="720" y="226" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="18" fontFamily="monospace">&#x2395;</text>
            <text x="752" y="226" textAnchor="start" fill="rgba(255,255,255,0.6)" fontSize="11" fontFamily="monospace" fontWeight="600">SERVIDOR</text>

            <rect x="650" y="490" width="130" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,26,26,0.25)" strokeWidth="1" />
            <rect x="650" y="490" width="40" height="40" rx="8" fill="rgba(255,26,26,0.1)" />
            <text x="670" y="516" textAnchor="middle" fill="#FF1A1A" fontSize="18" fontFamily="monospace">&#x2601;</text>
            <text x="702" y="516" textAnchor="start" fill="rgba(255,255,255,0.6)" fontSize="11" fontFamily="monospace" fontWeight="600">CLOUD</text>

            <rect x="480" y="290" width="120" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <rect x="480" y="290" width="40" height="40" rx="8" fill="rgba(255,255,255,0.05)" />
            <text x="500" y="316" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="18" fontFamily="monospace">&#x25CB;</text>
            <text x="532" y="316" textAnchor="start" fill="rgba(255,255,255,0.6)" fontSize="11" fontFamily="monospace" fontWeight="600">MONITOR</text>

            <rect x="730" y="410" width="120" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <rect x="730" y="410" width="40" height="40" rx="8" fill="rgba(255,255,255,0.05)" />
            <text x="750" y="436" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="18" fontFamily="monospace">&#x27A4;</text>
            <text x="782" y="436" textAnchor="start" fill="rgba(255,255,255,0.6)" fontSize="11" fontFamily="monospace" fontWeight="600">BACKUP</text>
          </g>
        </svg>
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Suporte Técnico 24/7
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-[1.1] tracking-tight"
          >
            Infraestrutura corporativa e segurança para{" "}
            <span className="text-primary/80">empresas que precisam de estabilidade</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 text-lg text-text-secondary leading-relaxed max-w-lg"
          >
            A Vorn Tecnologia entrega soluções completas de infraestrutura,
            monitoramento, segurança da informação e suporte gerenciado para
            pequenas e médias empresas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contato"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-bg-primary font-medium rounded-xl transition-all duration-300 hover:bg-white/90 active:scale-[0.98]"
            >
              Solicitar Diagnóstico
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              href="/servicos"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-medium rounded-xl transition-all duration-300 active:scale-[0.98]"
            >
              Conheça nossas Soluções
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-12 flex items-center gap-8 text-xs text-white/30"
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              LGPD
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              ISO 27001
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              SLA 99.9%
            </span>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
