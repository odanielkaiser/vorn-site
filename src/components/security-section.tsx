"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Wifi,
  KeyRound,
  HardDrive,
  Eye,
  FileCheck,
  Terminal,
  Bug,
} from "lucide-react";

const items = [
  { icon: Shield, color: "text-emerald-400", title: "Firewall", description: "Protecao de perimetro com bloqueio de ameacas" },
  { icon: Wifi, color: "text-sky-400", title: "VPN", description: "Acesso remoto seguro com criptografia" },
  { icon: KeyRound, color: "text-amber-400", title: "MFA", description: "Autenticacao multifator para todos os acessos" },
  { icon: HardDrive, color: "text-orange-400", title: "Backups", description: "Copias de seguranca automatizadas e testadas" },
  { icon: Eye, color: "text-cyan-400", title: "Monitoramento", description: "Vigilancia 24/7 de toda a infraestrutura" },
  { icon: FileCheck, color: "text-emerald-400", title: "LGPD", description: "Adequacao as normas de protecao de dados" },
  { icon: Terminal, color: "text-purple-400", title: "Hardening", description: "Configuracao segura de servidores e redes" },
  { icon: Bug, color: "text-rose-400", title: "Vulnerabilidades", description: "Analise e gestao continua de vulnerabilidades" },
];

export function SecuritySection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-bg-primary" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-xs font-semibold uppercase tracking-widest">
            Seguranca
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight">
            Seguranca{" "}
            <span className="text-primary/80">em todas as camadas</span>
          </h2>
          <p className="mt-4 text-text-secondary leading-relaxed">
            Protegemos sua empresa de forma abrangente, desde a borda da rede
            ate os dados armazenados.
          </p>
        </motion.div>

        <div className="relative flex items-center justify-center">
          <div className="absolute w-64 h-64 rounded-full border border-white/5 animate-pulse" />
          <div className="absolute w-48 h-48 rounded-full border border-white/10" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 relative z-10">
            {items.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="group relative p-5 rounded-2xl bg-bg-card/80 border border-white/10 hover:border-white/20 transition-all duration-500"
                >
                  <div className="relative text-center">
                    <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-3 group-hover:bg-white/10 transition-colors">
                      <Icon className={`w-5.5 h-5.5 ${item.color}`} />
                    </div>
                    <h3 className="text-sm font-heading font-semibold mb-1">{item.title}</h3>
                    <p className="text-xs text-text-secondary leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
