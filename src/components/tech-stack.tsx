"use client";

import { motion } from "framer-motion";
import { SiLinux, SiDocker, SiProxmox, SiPfsense, SiOpnsense, SiGrafana, SiWireguard, SiNextcloud, SiBookstack, SiMikrotik } from "react-icons/si";
import { Activity, Shield, Cloud, Wifi } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Linux: SiLinux,
  Docker: SiDocker,
  Proxmox: SiProxmox,
  pfSense: SiPfsense,
  OPNsense: SiOpnsense,
  Grafana: SiGrafana,
  Zabbix: Activity,
  WireGuard: SiWireguard,
  Wazuh: Shield,
  Nextcloud: SiNextcloud,
  BookStack: SiBookstack,
  UniFi: Wifi,
  MikroTik: SiMikrotik,
  "Microsoft 365": Cloud,
};

const techs = Object.keys(iconMap);

export function TechStack() {
  return (
    <section className="py-24 lg:py-32 border-y border-white/10 bg-bg-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-xs font-semibold uppercase tracking-widest">
            Stack Tecnologica
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight">
            Tecnologias que{" "}
            <span className="text-primary/80">movem sua infraestrutura</span>
          </h2>
          <p className="mt-4 text-text-secondary leading-relaxed">
            Utilizamos as melhores ferramentas open source e enterprise do
            mercado para entregar resultados superiores.
          </p>
        </motion.div>
      </div>
      <div className="relative overflow-hidden">
        <div className="marquee-track flex gap-5" style={{ animationDuration: "45s" }}>
          {[...techs, ...techs].map((name, i) => {
            const Icon = iconMap[name];
            return (
              <div
                key={`${name}-${i}`}
                className="group relative flex-shrink-0 w-[180px] p-5 rounded-2xl bg-bg-card border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 cursor-default"
              >
                <div className="relative flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-3 group-hover:bg-white/10 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-heading font-semibold text-text-secondary/80 group-hover:text-text-primary transition-colors">
                    {name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
