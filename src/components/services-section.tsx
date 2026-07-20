"use client";

import {
  Server,
  ShieldCheck,
  Terminal,
  HardDrive,
  Eye,
  Wifi,
  Radio,
  Cpu,
  FileText,
  BarChart3,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    icon: Server,
    title: "Infraestrutura Corporativa",
    description: "Redes estruturadas, servidores, virtualizacao e datacenter para sua empresa operar sem interrupcoes.",
    href: "/servicos/infraestrutura",
  },
  {
    icon: ShieldCheck,
    title: "Firewall Gerenciado",
    description: "Protecao de rede com firewall de nivel empresarial, IPS/IDS, VPN e controle de acesso.",
    href: "/servicos/firewall",
  },
  {
    icon: Terminal,
    title: "Servidores Linux",
    description: "Servidores Linux robustos, seguros e otimizados para alta disponibilidade.",
    href: "/servicos/servidores",
  },
  {
    icon: HardDrive,
    title: "Backup Empresarial",
    description: "Backup automatizado com politica 3-2-1, criptografia e testes de restauracao.",
    href: "/servicos/backup",
  },
  {
    icon: Eye,
    title: "Monitoramento 24/7",
    description: "Monitoramento continuo de servidores, redes e servicos com alertas em tempo real.",
    href: "/servicos/monitoramento",
  },
  {
    icon: Radio,
    title: "VPN Corporativa",
    description: "Acesso remoto seguro com criptografia de ponta a ponta para sua equipe.",
    href: "/servicos/infraestrutura",
  },
  {
    icon: Wifi,
    title: "Redes Wi-Fi Empresariais",
    description: "Rede sem fio corporativa com controle de acesso, segmentacao e qualidade.",
    href: "/servicos/infraestrutura",
  },
  {
    icon: Cpu,
    title: "Virtualizacao",
    description: "Ambientes virtualizados com Proxmox e Docker para maxima eficiencia.",
    href: "/servicos/servidores",
  },
  {
    icon: FileText,
    title: "Documentacao Tecnica",
    description: "Documentacao completa da sua infraestrutura: redes, senhas, processos e topologias.",
    href: "/servicos/infraestrutura",
  },
  {
    icon: BarChart3,
    title: "Consultoria em TI",
    description: "Planejamento estrategico, adequacao a LGPD e projetos de infraestrutura.",
    href: "/servicos/seguranca",
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 bg-bg-secondary/50" id="servicos">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-xs font-semibold uppercase tracking-widest">
            Servicos
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight">
            Solucoes completas em{" "}
            <span className="text-primary/80">infraestrutura e seguranca</span>
          </h2>
          <p className="mt-4 text-text-secondary leading-relaxed">
            De firewall a backup, do monitoramento ao suporte — tudo que sua
            empresa precisa para funcionar com estabilidade e seguranca.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
              >
                <Link
                  href={service.href}
                  className="group block relative p-6 rounded-2xl bg-bg-card border border-white/10 hover:border-white/20 transition-all duration-500 h-full"
                >
                  <div className="relative">
                    <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center mb-5 group-hover:bg-white/10 transition-colors duration-300">
                      <Icon className="w-5.5 h-5.5 text-white/60" />
                    </div>
                    <h3 className="text-base font-heading font-semibold mb-2 group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs text-white/40 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Saiba mais
                      <span className="text-lg leading-none">&rarr;</span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
