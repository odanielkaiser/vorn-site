"use client";

import { Shield, Monitor, HeadphonesIcon, HardDrive, FileText, Network } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Network,
    color: "text-sky-400",
    title: "Infraestrutura Profissional",
    description: "Redes corporativas, servidores, virtualização e cloud organizados com padrão enterprise.",
  },
  {
    icon: Shield,
    color: "text-emerald-400",
    title: "Segurança por padrão",
    description: "Firewall, VPN, controle de acesso e hardening aplicados em todos os ambientes.",
  },
  {
    icon: Monitor,
    color: "text-blue-400",
    title: "Monitoramento contínuo",
    description: "24/7 monitorando servidores, redes, links e dispositivos com alertas inteligentes.",
  },
  {
    icon: HeadphonesIcon,
    color: "text-purple-400",
    title: "Suporte especializado",
    description: "Equipe técnica certificada pronta para atender sua demanda com agilidade.",
  },
  {
    icon: HardDrive,
    color: "text-orange-400",
    title: "Backup automatizado",
    description: "Políticas de backup locais e em nuvem com testes de restauração periódicos.",
  },
  {
    icon: FileText,
    color: "text-amber-400",
    title: "Documentação completa",
    description: "Toda a infraestrutura documentada: redes, senhas, processos e topologias.",
  },
];

export function WhyVorn() {
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
            Por que a Vorn
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight">
            Sua infraestrutura no{" "}
            <span className="text-primary/80">nivel que sua empresa merece</span>
          </h2>
          <p className="mt-4 text-text-secondary leading-relaxed">
            Nao importa o tamanho do seu negocio. Toda empresa merece uma
            infraestrutura profissional, segura e bem gerenciada.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative p-6 rounded-2xl bg-bg-card border border-white/10 hover:border-white/20 transition-all duration-500"
              >
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5 group-hover:bg-white/10 transition-colors duration-300">
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-lg font-heading font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
