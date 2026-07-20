"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Soluções",
    href: "#",
    children: [
      { label: "Infraestrutura", href: "/servicos/infraestrutura" },
      { label: "Firewall Gerenciado", href: "/servicos/firewall" },
      { label: "Servidores Linux", href: "/servicos/servidores" },
      { label: "Backup Empresarial", href: "/servicos/backup" },
      { label: "Monitoramento 24/7", href: "/servicos/monitoramento" },
      { label: "Segurança da Informação", href: "/servicos/seguranca" },
    ],
  },
  { label: "Serviços", href: "/servicos" },
  { label: "Segmentos", href: "/#segmentos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-bg-primary/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-0 group">
            <span className="text-2xl font-heading font-bold tracking-tight select-none">
              <span className="text-white/90">V</span>
              <span className="text-white/50">orn</span>
              <span className="text-white/20 font-light">[</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                {link.children ? (
                  <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-white/5">
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="block px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-white/5"
                  >
                    {link.label}
                  </Link>
                )}
                {link.children && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                    <div className="glass rounded-xl p-2 min-w-[220px] space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-text-secondary hover:text-text-primary hover:bg-white/5 rounded-lg transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 hover:border-white/40 text-white/80 hover:text-white text-sm font-medium rounded-xl transition-all duration-300 active:scale-[0.98]"
            >
              Solicitar Diagnóstico Gratuito
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Abrir menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-border bg-bg-primary/95 backdrop-blur-xl"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.children ? (
                    <>
                      <span className="block px-4 py-2.5 text-sm font-medium text-text-secondary">
                        {link.label}
                      </span>
                      <div className="pl-4 space-y-1 mb-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-white/5 rounded-lg transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2.5 text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-white/5 rounded-lg transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link
                  href="/contato"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 px-5 py-3 border border-white/20 hover:border-white/40 text-white/80 hover:text-white text-sm font-medium rounded-xl transition-all duration-300"
                >
                  Solicitar Diagnóstico Gratuito
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
