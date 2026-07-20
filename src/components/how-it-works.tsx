"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Diagnostico",
    description: "Analisamos sua infraestrutura atual, identificamos riscos, pontos de melhoria e necessidades.",
  },
  {
    number: "02",
    title: "Planejamento",
    description: "Projetamos a solucao ideal com base no diagnostico, orcamento e objetivos do seu negocio.",
  },
  {
    number: "03",
    title: "Implantacao",
    description: "Executamos a implantacao com minimo impacto, seguindo padroes rigorosos de qualidade.",
  },
  {
    number: "04",
    title: "Monitoramento",
    description: "Monitoramos 24/7 todos os ativos com alertas inteligentes e relatorios de desempenho.",
  },
  {
    number: "05",
    title: "Suporte Continuo",
    description: "Suporte tecnico especializado, manutencoes preventivas e evolucao constante da infraestrutura.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-xs font-semibold uppercase tracking-widest">
            Metodologia
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight">
            Como{" "}
            <span className="text-primary/80">funciona</span>
          </h2>
          <p className="mt-4 text-text-secondary leading-relaxed">
            Um processo estruturado em 5 etapas para transformar sua
            infraestrutura de TI.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-white/5 opacity-20 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                  <div className={`max-w-md ${i % 2 === 0 ? "md:ml-auto" : ""}`}>
                    <span className="text-5xl lg:text-6xl font-heading font-bold text-primary/20">
                      {step.number}
                    </span>
                    <h3 className="text-xl font-heading font-semibold mt-2 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-bg-card border-2 border-white/20 items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white/40" />
                </div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
