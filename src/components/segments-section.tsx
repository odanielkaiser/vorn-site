"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Stethoscope,
  Building2,
  Calculator,
  Scale,
  Store,
  Factory,
  GraduationCap,
} from "lucide-react";

const segments = [
  { icon: Stethoscope, color: "text-rose-400", title: "Clinicas", description: "Prontuario eletronico, LGPD, backup e rede estruturada." },
  { icon: Building2, color: "text-sky-400", title: "Escritorios", description: "Infraestrutura completa para escritorios de qualquer porte." },
  { icon: Calculator, color: "text-emerald-400", title: "Contabilidades", description: "Seguranca e disponibilidade para dados financeiros." },
  { icon: Scale, color: "text-amber-400", title: "Advocacias", description: "Sigilo, backup e conformidade para escritorios de advocacia." },
  { icon: Store, color: "text-orange-400", title: "Comercios", description: "PDV, rede Wi-Fi corporativa e monitoramento." },
  { icon: Factory, color: "text-purple-400", title: "Industrias", description: "Redes industriais, servidores e automacao." },
  { icon: GraduationCap, color: "text-indigo-400", title: "Educacao", description: "Ambientes de aprendizado com tecnologia confiavel." },
];

export function SegmentsSection() {
  return (
    <section className="py-24 lg:py-32" id="segmentos">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-xs font-semibold uppercase tracking-widest">
            Segmentos
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight">
            Solucoes para{" "}
            <span className="text-primary/80">cada tipo de negocio</span>
          </h2>
          <p className="mt-4 text-text-secondary leading-relaxed">
            Independente do segmento, sua empresa merece uma infraestrutura
            profissional, segura e bem gerenciada.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {segments.map((segment, i) => {
            const Icon = segment.icon;
            return (
              <motion.div
                key={segment.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group relative p-6 rounded-2xl bg-bg-card border border-white/10 hover:border-white/20 transition-all duration-500"
              >
                <div className="relative">
                  <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                    <Icon className={`w-5.5 h-5.5 ${segment.color}`} />
                  </div>
                  <h3 className="text-base font-heading font-semibold mb-2">{segment.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{segment.description}</p>
                </div>
              </motion.div>
            );
          })}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.56, duration: 0.5 }}
          >
            <Link
              href="/contato"
              className="group relative p-6 rounded-2xl bg-bg-card border border-dashed border-white/20 hover:border-white/40 transition-all duration-500 h-full flex items-center justify-center min-h-[160px]"
            >
              <div className="text-center">
                <span className="text-3xl text-white/30 group-hover:text-white/60 transition-colors">+</span>
                <p className="text-sm text-text-secondary mt-2">Outros segmentos</p>
                <span className="text-xs text-white/40 mt-1 block">Fale conosco</span>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
