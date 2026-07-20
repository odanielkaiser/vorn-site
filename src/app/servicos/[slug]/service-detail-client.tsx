"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, ChevronRight } from "lucide-react";

interface ServiceData {
  title: string;
  description: string;
  longDescription: string;
  benefits: string[];
  howItWorks: string;
  techs: string[];
  faq: { q: string; a: string }[];
}

export function ServiceDetailClient({
  service,
}: {
  service: ServiceData;
}) {
  return (
    <>
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/servicos"
              className="inline-flex items-center gap-1 text-sm text-text-secondary hover:text-white transition-colors mb-8"
            >
              <ChevronRight className="w-4 h-4 rotate-180" />
              Todos os servicos
            </Link>
            <span className="text-primary text-xs font-semibold uppercase tracking-widest">
              Servicos
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight max-w-3xl">
              {service.title}
            </h1>
            <p className="mt-4 text-lg text-text-secondary max-w-2xl leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-heading font-bold mb-6">
                Sobre este servico
              </h2>
              <p className="text-text-secondary leading-relaxed">
                {service.longDescription}
              </p>
              <h3 className="text-lg font-heading font-semibold mt-10 mb-4">
                Como funciona
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {service.howItWorks}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="p-8 rounded-2xl bg-bg-card border border-white/10">
                <h3 className="text-lg font-heading font-semibold mb-6">
                  Beneficios
                </h3>
                <ul className="space-y-4">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-text-secondary">
                      <CheckCircle className="w-5 h-5 text-white/30 shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 p-8 rounded-2xl bg-bg-card border border-white/10">
                <h3 className="text-lg font-heading font-semibold mb-6">
                  Tecnologias utilizadas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.techs.map((t) => (
                    <span
                      key={t}
                      className="px-4 py-2 rounded-xl text-sm font-medium bg-white/5 text-white/60 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-bg-secondary/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl font-heading font-bold mb-10 text-center">
              Perguntas Frequentes
            </h2>
            <div className="space-y-4">
              {service.faq.map((item) => (
                <details
                  key={item.q}
                  className="group p-6 rounded-2xl bg-bg-card border border-white/10 open:border-white/20 transition-all duration-300"
                >
                  <summary className="flex items-center justify-between cursor-pointer text-sm font-medium text-text-primary list-none">
                    {item.q}
                    <ChevronRight className="w-4 h-4 text-text-secondary group-open:rotate-90 transition-transform duration-300" />
                  </summary>
                  <p className="mt-4 text-sm text-text-secondary leading-relaxed">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              Quer saber mais sobre {service.title.toLowerCase()}?
            </h2>
            <p className="mt-4 text-white/50 max-w-lg mx-auto">
              Solicite um diagnostico gratuito e descubra como podemos ajudar
              sua empresa.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 px-8 py-4 mt-8 bg-white text-bg-primary font-medium rounded-xl hover:bg-white/90 transition-all duration-300 active:scale-[0.98]"
            >
              Solicitar Diagnostico Gratuito
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
