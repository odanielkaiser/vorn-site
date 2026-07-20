"use client";

const technologies = [
  "Linux", "Docker", "Proxmox", "pfSense", "OPNsense",
  "WireGuard", "Zabbix", "Wazuh", "Microsoft", "Azure",
  "UniFi", "MikroTik", "Grafana",
];

export function TrustBar() {
  return (
    <section className="py-16 border-b border-border bg-bg-secondary/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-xs text-text-secondary/50 uppercase tracking-widest mb-10 font-medium">
          Tecnologias que utilizamos
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="marquee-track flex gap-4">
          {[...technologies, ...technologies].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="inline-flex items-center px-5 py-2.5 rounded-xl bg-bg-card border border-border text-sm font-medium text-text-secondary hover:border-primary/40 hover:text-text-primary hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
