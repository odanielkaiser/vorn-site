"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CtaSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-white/30 animate-pulse" />
            Diagnostico gratuito e sem compromisso
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-white">
            Sua empresa esta{" "}
            <span className="text-white/60">realmente protegida?</span>
          </h2>
          <p className="mt-6 text-white/50 leading-relaxed max-w-lg mx-auto">
            Descubra os pontos cegos da sua infraestrutura com um diagnostico
            completo e gratuito. Nossa equipe tecnica analisa sua rede,
            servidores e politicas de seguranca.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-10"
          >
            <Link
              href="/contato"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-bg-primary font-medium rounded-xl hover:bg-white/90 transition-all duration-300 active:scale-[0.98]"
            >
              Solicite um Diagnostico Gratuito
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
