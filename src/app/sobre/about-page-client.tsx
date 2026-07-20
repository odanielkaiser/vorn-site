"use client";

import { motion } from "framer-motion";

const timeline = [
  { year: "2018", title: "Fundacao", description: "A Vorn nasce com a missao de levar infraestrutura corporativa de qualidade para pequenas empresas." },
  { year: "2019", title: "Primeiros Clientes", description: "Conquistamos nossos primeiros contratos de suporte gerenciado e monitoramento." },
  { year: "2020", title: "Expansao", description: "Mesmo em meio a pandemia, expandimos nossa carteira e implementamos trabalho remoto seguro para clientes." },
  { year: "2021", title: "Seguranca como Foco", description: "Lancamos nossa divisao dedicada a seguranca da informacao e adequacao a LGPD." },
  { year: "2023", title: "+100 Infraestruturas", description: "Alcancamos a marca de mais de 100 infraestruturas gerenciadas com 99.9% de disponibilidade." },
  { year: "2025", title: "Referencia Nacional", description: "Nos consolidamos como referencia em infraestrutura e seguranca para PMEs no Brasil." },
];

export function AboutPageClient() {
  return (
    <>
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-primary text-xs font-semibold uppercase tracking-widest">
              Sobre Nos
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight">
              Engenharia de infraestrutura e seguranca para{" "}
              <span className="text-primary/80">empresas que valorizam tecnologia</span>
            </h1>
            <p className="mt-4 text-lg text-text-secondary leading-relaxed">
              A Vorn Tecnologia nasceu com um proposito claro: permitir que
              pequenas e medias empresas tenham acesso a mesma infraestrutura
              tecnologica de grandes corporacoes.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                label: "Missao",
                text: "Permitir que pequenas empresas tenham acesso a uma infraestrutura tecnologica profissional, segura, monitorada e organizada, proporcionando estabilidade operacional e protecao das informacoes.",
              },
              {
                label: "Visao",
                text: "Ser reconhecida como a principal empresa brasileira especializada em infraestrutura corporativa, servicos gerenciados e seguranca da informacao para pequenas empresas.",
              },
              {
                label: "Valores",
                text: "Seguranca, confiabilidade, transparencia, documentacao, organizacao, padronizacao, automacao, disponibilidade, excelencia tecnica e aprendizado continuo.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-8 rounded-2xl bg-bg-card border border-white/10"
              >
                <span className="text-xs text-white/40 font-semibold uppercase tracking-widest">
                  {item.label}
                </span>
                <p className="mt-4 text-sm text-text-secondary leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
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
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight">
              Nossa{" "}
              <span className="text-primary/80">trajetoria</span>
            </h2>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-white/5" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative flex gap-8"
                >
                  <div className="relative flex items-start">
                    <div className="w-16 h-8 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-white/30 border-4 border-bg-secondary" />
                    </div>
                  </div>
                  <div>
                    <span className="text-sm font-mono text-white/50 font-semibold">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-heading font-semibold mt-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-secondary mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight">
              Nossa{" "}
              <span className="text-primary/80">metodologia</span>
            </h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Acreditamos que infraestrutura de TI nao e custo — e investimento.
              Cada projeto segue nosso metodo rigoroso de diagnostico,
              planejamento, implantacao e suporte continuo.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
