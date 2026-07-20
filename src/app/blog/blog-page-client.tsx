"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const posts = [
  {
    slug: "importancia-firewall-corporativo-pme",
    category: "Firewall",
    title: "A importancia do firewall corporativo para pequenas empresas",
    excerpt: "Entenda por que o firewall e a primeira linha de defesa da sua empresa e como escolher a solucao ideal para seu negocio.",
    date: "15 Jun 2026",
    readTime: "5 min",
  },
  {
    slug: "lgpd-pequenas-empresas-guia",
    category: "LGPD",
    title: "LGPD para pequenas empresas: um guia pratico de adequacao",
    excerpt: "A LGPD nao e so para grandes corporacoes. Saiba como adequar sua pequena empresa a lei de protecao de dados.",
    date: "8 Jun 2026",
    readTime: "7 min",
  },
  {
    slug: "backup-3-2-1-estrategia",
    category: "Backup",
    title: "Estrategia de backup 3-2-1: como proteger seus dados empresariais",
    excerpt: "Conheca a estrategia 3-2-1 de backup e garanta que seus dados estarao seguros em qualquer situacao.",
    date: "1 Jun 2026",
    readTime: "4 min",
  },
  {
    slug: "monitoramento-ativo-vs-reativo-ti",
    category: "Infraestrutura",
    title: "Monitoramento ativo vs reativo: por que sua empresa precisa do primeiro",
    excerpt: "Descubra a diferenca entre monitoramento ativo e reativo e por que o monitoramento proativo e essencial.",
    date: "25 Mai 2026",
    readTime: "6 min",
  },
  {
    slug: "linux-para-empresas-vantagens",
    category: "Linux",
    title: "Linux para empresas: 5 vantagens que seu negocio precisa conhecer",
    excerpt: "Estabilidade, seguranca e economia: descubra por que o Linux e a escolha ideal para servidores corporativos.",
    date: "18 Mai 2026",
    readTime: "5 min",
  },
  {
    slug: "vpn-corporativa-trabalho-remoto",
    category: "Seguranca",
    title: "VPN corporativa: seguranca essencial para o trabalho remoto",
    excerpt: "Saiba como uma VPN corporativa protege os dados da sua empresa quando seus colaboradores trabalham de casa.",
    date: "10 Mai 2026",
    readTime: "4 min",
  },
  {
    slug: "mfa-autenticacao-multifator",
    category: "Seguranca",
    title: "MFA: a camada extra de seguranca que sua empresa precisa",
    excerpt: "Entenda como a autenticacao multifator pode evitar 99.9% dos ataques ciberneticos contra sua empresa.",
    date: "3 Mai 2026",
    readTime: "3 min",
  },
  {
    slug: "migracao-nuvem-pmes",
    category: "Cloud",
    title: "Migracao para a nuvem: guia para pequenas e medias empresas",
    excerpt: "Passo a passo para migrar sua infraestrutura para a nuvem com seguranca, economia e minimo impacto.",
    date: "26 Abr 2026",
    readTime: "6 min",
  },
  {
    slug: "hardening-servidores-linux",
    category: "Linux",
    title: "Hardening de servidores Linux: guia de boas praticas",
    excerpt: "Aprenda as principais tecnicas de hardening para proteger seus servidores Linux contra invasoes.",
    date: "19 Abr 2026",
    readTime: "8 min",
  },
];

const categories = [
  "Todos",
  "Infraestrutura",
  "Seguranca",
  "Linux",
  "Firewall",
  "Backup",
  "LGPD",
  "Cloud",
];

export function BlogPageClient() {
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
              Blog
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight">
              Conteudo sobre{" "}
              <span className="text-primary/80">tecnologia e seguranca</span>
            </h1>
            <p className="mt-4 text-lg text-text-secondary leading-relaxed">
              Artigos, guias e tutoriais sobre infraestrutura corporativa,
              seguranca da informacao e boas praticas de TI para empresas.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 rounded-xl text-sm font-medium border border-white/10 text-text-secondary hover:border-white/30 hover:text-white hover:bg-white/5 transition-all"
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block p-6 rounded-2xl bg-bg-card border border-white/10 hover:border-white/20 transition-all duration-500 h-full"
                >
                  <span className="inline-block px-2.5 py-1 text-xs rounded-lg bg-white/5 text-white/50 font-medium mb-4">
                    {post.category}
                  </span>
                  <h2 className="text-base font-heading font-semibold mb-3 group-hover:text-white transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-text-secondary leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-white/30">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs text-white/40 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    Ler artigo
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
