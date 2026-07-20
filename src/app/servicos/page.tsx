import type { Metadata } from "next";
import { ServicesListClient } from "./services-list-client";

export const metadata: Metadata = {
  title: "Servicos",
  description:
    "Solucoes completas em infraestrutura corporativa, seguranca da informacao, monitoramento e suporte gerenciado para PMEs.",
};

const services = [
  {
    slug: "infraestrutura",
    title: "Infraestrutura Corporativa",
    shortDesc: "Redes, servidores, virtualizacao e datacenter empresarial.",
    fullDesc:
      "Projetamos e mantemos a infraestrutura de TI da sua empresa com padrao enterprise. Redes estruturadas, servidores Linux, virtualizacao com Proxmox, compartilhamentos, cloud hibrida e VPN corporativa. Tudo documentado e organizado para maxima disponibilidade.",
    benefits: [
      "Alta disponibilidade e redundancia",
      "Rede organizada e documentada",
      "Virtualizacao eficiente com Proxmox/Docker",
      "Cloud hibrida (publica + privada)",
      "Compartilhamentos seguros e controlados",
    ],
    techs: ["Linux", "Proxmox", "Docker", "MikroTik", "UniFi", "WireGuard"],
  },
  {
    slug: "firewall",
    title: "Firewall Gerenciado",
    shortDesc: "Protecao de rede com firewall de nivel empresarial.",
    fullDesc:
      "Implementamos firewalls robustos com pfSense ou OPNsense para proteger sua rede corporativa. Controle de acesso, VPN site-to-site, IPS/IDS, segmentacao de rede, bloqueio de conteudo e relatorios de trafego. Gerenciável 24/7 por nossa equipe.",
    benefits: [
      "Bloqueio de ameacas em tempo real",
      "VPN corporativa segura",
      "Segmentacao de rede por VLAN",
      "Controle de acesso granular",
      "Relatorios de trafego e uso",
    ],
    techs: ["pfSense", "OPNsense", "WireGuard", "OpenVPN"],
  },
  {
    slug: "servidores",
    title: "Servidores Linux",
    shortDesc: "Servidores robustos, seguros e de alta performance.",
    fullDesc:
      "Implementamos servidores Linux enterprise com hardening de seguranca, monitoramento ativo e alta disponibilidade. Utilizamos as melhores praticas de administracao de sistemas, automacao com Docker e orquestracao com Proxmox.",
    benefits: [
      "Hardening de seguranca completo",
      "Alta disponibilidade e failover",
      "Automacao com Docker e scripts",
      "Monitoramento proativo 24/7",
      "Atualizacoes e patches continuos",
    ],
    techs: ["Linux", "Debian", "Ubuntu", "Docker", "Proxmox", "Zabbix"],
  },
  {
    slug: "backup",
    title: "Backup Empresarial",
    shortDesc: "Backup automatizado com politica 3-2-1.",
    fullDesc:
      "Implementamos politicas de backup seguindo a estrategia 3-2-1: 3 copias, 2 midias diferentes, 1 offsite. Backups locais, em nuvem e hibridos com criptografia de ponta a ponta e testes de restauracao periodicos.",
    benefits: [
      "Estrategia 3-2-1 de backup",
      "Criptografia de ponta a ponta",
      "Testes de restauracao automaticos",
      "Backup local + nuvem",
      "Recuperacao rapida em desastres",
    ],
    techs: ["BorgBackup", "Restic", "S3", "Nextcloud"],
  },
  {
    slug: "monitoramento",
    title: "Monitoramento 24/7",
    shortDesc: "Monitoramento continuo com alertas em tempo real.",
    fullDesc:
      "Monitoramos 24 horas por dia, 7 dias por semana, todos os ativos da sua empresa: servidores, firewalls, switches, links de internet, CPUs, memoria RAM, disco e servicos criticos. Alertas inteligentes via WhatsApp, e-mail e dashboard centralizado.",
    benefits: [
      "Monitoramento 24/7 de todos os ativos",
      "Alertas em tempo real via WhatsApp",
      "Dashboards personalizados com Grafana",
      "Relatorios de disponibilidade mensais",
      "Deteccao proativa de falhas",
    ],
    techs: ["Zabbix", "Grafana", "Wazuh", "Prometheus"],
  },
  {
    slug: "seguranca",
    title: "Seguranca da Informacao",
    shortDesc: "Protecao completa com LGPD, hardening e MFA.",
    fullDesc:
      "Oferecemos um programa completo de seguranca da informacao: adequacao a LGPD, hardening de servidores e redes, autenticacao multifator (MFA), analise de vulnerabilidades, resposta a incidentes e auditoria continua.",
    benefits: [
      "Adequacao a LGPD completa",
      "Hardening de servidores e redes",
      "Autenticacao multifator (MFA)",
      "Analise de vulnerabilidades",
      "Plano de resposta a incidentes",
    ],
    techs: ["Wazuh", "OpenVAS", "Lynis", "ClamAV"],
  },
];

export default function ServicosPage() {
  return (
    <>
      <section className="py-24 lg:py-32 bg-bg-secondary/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary text-xs font-semibold uppercase tracking-widest">
              Servicos
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight">
              Solucoes completas em{" "}
              <span className="text-primary/80">infraestrutura e seguranca</span>
            </h1>
            <p className="mt-4 text-text-secondary leading-relaxed">
              De firewall a backup, do monitoramento ao suporte — tudo que sua
              empresa precisa para funcionar com estabilidade e seguranca.
            </p>
          </div>

          <ServicesListClient services={services} />
        </div>
      </section>
    </>
  );
}
