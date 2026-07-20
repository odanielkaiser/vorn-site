import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailClient } from "./service-detail-client";

const servicesMap: Record<string, {
  title: string;
  description: string;
  longDescription: string;
  benefits: string[];
  howItWorks: string;
  techs: string[];
  faq: { q: string; a: string }[];
}> = {
  infraestrutura: {
    title: "Infraestrutura Corporativa",
    description:
      "Redes estruturadas, servidores, virtualizacao e datacenter empresarial projetados para sua empresa operar sem interrupcoes.",
    longDescription:
      "A infraestrutura de TI e a base de qualquer negocio moderno. Projetamos e mantemos ambientes completos com redes corporativas estruturadas, servidores Linux de alto desempenho, virtualizacao com Proxmox, compartilhamentos seguros, cloud hibrida e VPN para acesso remoto. Tudo documentado, organizado e monitorado 24/7 para garantir a continuidade do seu negocio.",
    benefits: [
      "Alta disponibilidade com redundancia de links e servidores",
      "Rede corporativa estruturada e documentada",
      "Virtualizacao eficiente com Proxmox e Docker",
      "Cloud hibrida combinando nuvem publica e privada",
      "VPN corporativa para acesso remoto seguro",
      "Compartilhamentos de arquivos controlados e auditados",
    ],
    howItWorks:
      "Realizamos um diagnostico completo do ambiente atual, projetamos a nova infraestrutura, implantamos com minimo impacto, documentamos toda a topologia e passamos a monitorar e manter proativamente.",
    techs: ["Linux", "Proxmox", "Docker", "MikroTik", "UniFi", "WireGuard", "Nextcloud"],
    faq: [
      { q: "Quanto tempo leva para implantar uma infraestrutura completa?", a: "Depende da complexidade. Projetos simples podem ser implantados em 1-2 semanas. Projetos mais complexos podem levar de 1 a 3 meses." },
      { q: "Preciso parar minha empresa durante a implantacao?", a: "Nao. Planejamos a migracao para que ocorra com minimo impacto, geralmente em janelas noturnas ou finais de semana." },
      { q: "Voce trabalham com equipamentos que ja tenho?", a: "Sim. Avaliamos seu equipamento atual e, se estiver dentro dos padroes minimos, podemos reaproveita-lo." },
    ],
  },
  firewall: {
    title: "Firewall Gerenciado",
    description:
      "Protecao de rede corporativa com firewall de nivel empresarial, IPS/IDS, VPN e controle de acesso.",
    longDescription:
      "Implementamos firewalls robustos utilizando pfSense e OPNsense para proteger sua rede contra ameacas internas e externas. Nosso servico inclui configuracao de regras de acesso, VPN site-to-site e client-to-site, sistema de prevencao de intrusao (IPS/IDS), segmentacao de rede por VLANs, bloqueio de conteudo e relatorios de trafego em tempo real.",
    benefits: [
      "Protecao contra ameacas ciberneticas em tempo real",
      "VPN corporativa para filiais e home office",
      "Segmentacao de rede com VLANs",
      "Controle de acesso granular por usuario/grupo",
      "Bloqueio de sites e conteudo improprio",
      "Relatorios detalhados de trafego e ameacas",
    ],
    howItWorks:
      "Analisamos sua rede atual, definimos as politicas de seguranca, configuramos o firewall com regras personalizadas, ativamos IPS/IDS e VPN, e monitoramos 24/7 com nossa equipe de seguranca.",
    techs: ["pfSense", "OPNsense", "WireGuard", "OpenVPN", "Snort", "Suricata"],
    faq: [
      { q: "Qual a diferenca entre pfSense e OPNsense?", a: "Ambos sao excelentes firewalls open source. O pfSense e mais consolidado no mercado, enquanto o OPNsense oferece uma interface mais moderna. Recomendamos com base no perfil de cada cliente." },
      { q: "Firewall resolve todos os problemas de seguranca?", a: "O firewall e uma camada essencial, mas a seguranca completa envolve tambem backup, MFA, hardening e politicas internas." },
    ],
  },
  servidores: {
    title: "Servidores Linux",
    description:
      "Servidores Linux robustos, seguros e otimizados para alta disponibilidade.",
    longDescription:
      "Implementamos servidores Linux enterprise com hardening de seguranca, configuracao otimizada e monitoramento proativo. Trabalhamos com as principais distribuicoes (Debian, Ubuntu Server) e tecnologias de virtualizacao e contêineres (Proxmox, Docker) para garantir maxima performance e disponibilidade.",
    benefits: [
      "Hardening completo de seguranca",
      "Alta disponibilidade com cluster",
      "Virtualizacao com Proxmox",
      "Contêineres Docker para aplicacoes",
      "Monitoramento proativo 24/7",
      "Atualizacoes e patches automatizados",
    ],
    howItWorks:
      "Escolhemos a distribuicao ideal, aplicamos hardening, configuramos servicos, implementamos monitoramento e estabelecemos rotinas de manutencao preventiva.",
    techs: ["Debian", "Ubuntu", "CentOS", "Docker", "Proxmox", "Zabbix", "Grafana"],
    faq: [
      { q: "Por que Linux e nao Windows Server?", a: "Linux oferece maior estabilidade, seguranca e custo reduzido. Para a maioria dos servicos corporativos (arquivos, backup, DNS, DHCP, web), o Linux e superior." },
      { q: "Meus softwares funcionam em Linux?", a: "Depende. A maioria dos sistemas web rodam nativamente em Linux. Softwares Windows especificos podem rodar em virtualizacao ou Wine." },
    ],
  },
  backup: {
    title: "Backup Empresarial",
    description:
      "Backup automatizado com politica 3-2-1, criptografia e testes de restauracao periodicos.",
    longDescription:
      "Seguimos a estrategia 3-2-1: tres copias dos dados, em duas midias diferentes, com uma copia offsite. Implementamos backups automatizados com criptografia de ponta a ponta, versionamento de arquivos e testes de restauracao periodicos para garantir que seus dados estarao sempre disponiveis quando precisar.",
    benefits: [
      "Estrategia 3-2-1 completa",
      "Criptografia AES-256",
      "Backup local + nuvem",
      "Versionamento de arquivos",
      "Testes de restauracao automaticos",
      "Recuperacao rapida em desastres",
    ],
    howItWorks:
      "Mapeamos todos os dados criticos, definimos politicas de retencao, configuramos backup automatizado local e em nuvem, e realizamos testes de restauracao mensais.",
    techs: ["BorgBackup", "Restic", "S3", "Backblaze", "Nextcloud"],
    faq: [
      { q: "Com que frequencia os backups sao feitos?", a: "Configuramos conforme sua necessidade, podendo ser diario, horario ou ate em tempo real para dados criticos." },
      { q: "Como sei que o backup esta funcionando?", a: "Relatorios automaticos sao enviados diariamente, e realizamos testes de restauracao mensais para garantir a integridade." },
    ],
  },
  monitoramento: {
    title: "Monitoramento 24/7",
    description:
      "Monitoramento continuo de servidores, redes e servicos com alertas em tempo real.",
    longDescription:
      "Monitoramos sua infraestrutura 24 horas por dia, 7 dias por semana. Servidores, firewalls, switches, links de internet, CPUs, memoria, disco, servicos criticos — tudo e monitorado com alertas inteligentes via WhatsApp, e-mail e dashboard centralizado com Grafana.",
    benefits: [
      "Monitoramento 24/7 ininterrupto",
      "Alertas em tempo real via WhatsApp",
      "Dashboards Grafana personalizados",
      "Relatorios de disponibilidade mensais (SLA)",
      "Deteccao proativa de falhas",
      "Historico de desempenho para tomada de decisao",
    ],
    howItWorks:
      "Instalamos agentes e configuracoes SNMP em todos os ativos, configuramos alertas com thresholds personalizados, criamos dashboards e estabelecemos rotinas de resposta.",
    techs: ["Zabbix", "Grafana", "Prometheus", "Wazuh", "SNMP"],
    faq: [
      { q: "Quanto tempo leva para receber um alerta?", a: "Alertas criticos sao disparados em segundos. O tempo de resposta da nossa equipe e de ate 15 minutos em horario comercial." },
      { q: "Monitoram equipamentos de qualquer marca?", a: "Sim. Desde que suportem SNMP ou tenham agente disponivel, monitoramos qualquer equipamento." },
    ],
  },
  seguranca: {
    title: "Seguranca da Informacao",
    description:
      "Programa completo de seguranca com LGPD, hardening, MFA e resposta a incidentes.",
    longDescription:
      "Oferecemos um programa completo de seguranca da informacao adaptado para PMEs. Inclui adequacao a LGPD, hardening de servidores e redes, autenticacao multifator (MFA), analise de vulnerabilidades, gestao de patches e plano de resposta a incidentes. Protegemos sua empresa contra as principais ameacas ciberneticas.",
    benefits: [
      "Adequacao a LGPD completa",
      "Hardening de servidores e redes",
      "Autenticacao multifator (MFA)",
      "Analise de vulnerabilidades mensal",
      "Plano de resposta a incidentes",
      "Politicas de seguranca customizadas",
    ],
    howItWorks:
      "Realizamos uma auditoria inicial de seguranca, implementamos as camadas de protecao (hardening, MFA, firewalls), estabelecemos politicas e procedimentos, e mantemos monitoramento continuo com analises periodicas.",
    techs: ["Wazuh", "OpenVAS", "Lynis", "ClamAV", "Fail2ban"],
    faq: [
      { q: "Preciso adequar minha empresa a LGPD?", a: "Se sua empresa coleta ou processa dados pessoais, sim. A LGPD se aplica a empresas de todos os portes." },
      { q: "O que e hardening?", a: "E o processo de configurar servidores e equipamentos de forma segura, removendo servicos desnecessarios, aplicando patches e seguindo boas praticas." },
    ],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesMap[slug];
  if (!service) return { title: "Servico nao encontrado" };

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesMap[slug];
  if (!service) notFound();

  return <ServiceDetailClient service={service} />;
}
