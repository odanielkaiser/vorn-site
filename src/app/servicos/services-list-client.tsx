"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

interface ServiceItem {
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  techs: string[];
}

export function ServicesListClient({ services }: { services: ServiceItem[] }) {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {services.map((service, i) => (
        <motion.div
          key={service.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
        >
          <Link
            href={`/servicos/${service.slug}`}
            className="group block p-8 rounded-2xl bg-bg-card border border-white/10 hover:border-white/20 transition-all duration-500 h-full"
          >
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-xl font-heading font-semibold group-hover:text-white transition-colors">
                {service.title}
              </h2>
              <ArrowRight className="w-5 h-5 text-white/40 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
            </div>
            <p className="text-sm text-text-secondary leading-relaxed mb-6">
              {service.fullDesc}
            </p>
            <div className="space-y-2 mb-6">
              {service.benefits.slice(0, 3).map((b) => (
                <div key={b} className="flex items-center gap-2 text-xs text-text-secondary">
                  <CheckCircle className="w-3.5 h-3.5 text-white/30 shrink-0" />
                  {b}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {service.techs.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-xs rounded-lg bg-white/5 text-white/50"
                >
                  {t}
                </span>
              ))}
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
