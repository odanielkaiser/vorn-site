"use client";

import { motion } from "framer-motion";
import { CheckCircle, Activity, Shield, HardDrive, Wifi, Cpu } from "lucide-react";

const metrics = [
  { label: "Servidores Online", value: "12", icon: Cpu, status: "online" },
  { label: "Firewall Protegido", value: "Ativo", icon: Shield, status: "active" },
  { label: "Backup OK", value: "99.9%", icon: HardDrive, status: "ok" },
  { label: "Links Ativos", value: "8/8", icon: Wifi, status: "online" },
];

export function Differential() {
  return (
    <section className="py-24 lg:py-32 bg-bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-xs font-semibold uppercase tracking-widest">
              Diferencial
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight">
              Voce nao precisa contratar um{" "}
              <span className="text-primary/80">departamento de TI</span>
            </h2>
            <p className="mt-6 text-text-secondary leading-relaxed">
              A Vorn atua como seu departamento de TI terceirizado. Voce recebe
              toda a expertise de uma equipe de engenharia de infraestrutura e
              seguranca pelo custo de um funcionario.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Equipe multidisciplinar de especialistas",
                "Ferramentas enterprise sem custo de licenciamento",
                "Disponibilidade 24/7 para emergencias",
                "Investimento previsivel com mensalidade fixa",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                  <CheckCircle className="w-5 h-5 text-green-400/70 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl bg-bg-card border border-white/10 overflow-hidden p-6 shadow-xl shadow-black/20">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                  </div>
                  <span className="text-xs text-white/30 ml-2 font-mono">
                    dashboard.vorn
                  </span>
                </div>
                <Activity className="w-4 h-4 text-white/40" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {metrics.map((metric) => {
                  const Icon = metric.icon;
                  return (
                    <div
                      key={metric.label}
                      className="p-4 rounded-xl bg-bg-primary/50 border border-white/10"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <Icon className="w-4 h-4 text-white/40" />
                        <span className="text-xs text-white/30 font-mono">
                          {metric.label}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-heading font-bold">
                          {metric.value}
                        </span>
                        <span
                          className={`w-2 h-2 rounded-full ${
                            metric.status === "online" || metric.status === "active" || metric.status === "ok"
                              ? "bg-white/40"
                              : "bg-yellow-500"
                          }`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 p-4 rounded-xl bg-bg-primary/50 border border-white/10">
                <div className="flex items-center justify-between text-xs text-white/30 mb-3 font-mono">
                  <span>CPU 32%</span>
                  <span>RAM 4.2 / 16 GB</span>
                </div>
                <div className="space-y-2">
                  <div className="h-1.5 rounded-full bg-bg-primary overflow-hidden">
                    <div className="w-[32%] h-full rounded-full bg-white/30" />
                  </div>
                  <div className="h-1.5 rounded-full bg-bg-primary overflow-hidden">
                    <div className="w-[26%] h-full rounded-full bg-white/30" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
