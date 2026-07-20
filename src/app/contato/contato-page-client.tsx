"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const contactSchema = z.object({
  nome: z.string().min(2, "Nome deve ter ao menos 2 caracteres"),
  empresa: z.string().min(1, "Nome da empresa e obrigatorio"),
  telefone: z.string().min(10, "Telefone invalido"),
  email: z.string().email("Email invalido"),
  computadores: z.string().min(1, "Informe a quantidade aproximada"),
  mensagem: z.string().min(10, "Mensagem deve ter ao menos 10 caracteres"),
});

type ContactForm = z.infer<typeof contactSchema>;

export function ContatoPageClient() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    await new Promise((r) => setTimeout(r, 1000));
    console.log(data);
    reset();
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  };

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
              Contato
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight">
              Vamos conversar sobre{" "}
              <span className="text-primary/80">sua infraestrutura</span>
            </h1>
            <p className="mt-4 text-lg text-text-secondary leading-relaxed">
              Solicite um diagnostico gratuito ou tire suas duvidas. Nossa
              equipe tecnica esta pronta para atender sua empresa.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-heading font-bold mb-8">
                Solicite seu diagnostico gratuito
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                      Nome
                    </label>
                    <input
                      {...register("nome")}
                      placeholder="Seu nome"
                      className="w-full px-4 py-3 rounded-xl bg-bg-card border border-white/10 text-text-primary placeholder:text-white/20 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all"
                    />
                    {errors.nome && (
                      <p className="mt-1 text-xs text-red-400">{errors.nome.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                      Empresa
                    </label>
                    <input
                      {...register("empresa")}
                      placeholder="Nome da empresa"
                      className="w-full px-4 py-3 rounded-xl bg-bg-card border border-white/10 text-text-primary placeholder:text-white/20 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all"
                    />
                    {errors.empresa && (
                      <p className="mt-1 text-xs text-red-400">{errors.empresa.message}</p>
                    )}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                      Telefone
                    </label>
                    <input
                      {...register("telefone")}
                      placeholder="(11) 99999-9999"
                      className="w-full px-4 py-3 rounded-xl bg-bg-card border border-white/10 text-text-primary placeholder:text-white/20 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all"
                    />
                    {errors.telefone && (
                      <p className="mt-1 text-xs text-red-400">{errors.telefone.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                      Email
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="seu@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-bg-card border border-white/10 text-text-primary placeholder:text-white/20 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Quantos computadores sua empresa possui?
                  </label>
                  <input
                    {...register("computadores")}
                    placeholder="Ex: 15"
                    className="w-full px-4 py-3 rounded-xl bg-bg-card border border-white/10 text-text-primary placeholder:text-white/20 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all"
                  />
                  {errors.computadores && (
                    <p className="mt-1 text-xs text-red-400">{errors.computadores.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Mensagem
                  </label>
                  <textarea
                    {...register("mensagem")}
                    rows={4}
                    placeholder="Conte-nos sobre sua necessidade..."
                    className="w-full px-4 py-3 rounded-xl bg-bg-card border border-white/10 text-text-primary placeholder:text-white/20 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all resize-none"
                  />
                  {errors.mensagem && (
                    <p className="mt-1 text-xs text-red-400">{errors.mensagem.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-bg-primary font-medium rounded-xl hover:bg-white/90 transition-all duration-300 disabled:opacity-50 active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      Enviar mensagem
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="p-8 rounded-2xl bg-bg-card border border-white/10">
                <h3 className="text-lg font-heading font-semibold mb-6">
                  Informacoes de Contato
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-white/50" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Telefone</p>
                      <a href="#" className="text-sm text-text-secondary hover:text-white transition-colors">
                        (XX) XXXX-XXXX
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-white/50" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <a href="mailto:contato@vorntecnologia.com.br" className="text-sm text-text-secondary hover:text-white transition-colors">
                        contato@vorntecnologia.com.br
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-white/50" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Endereco</p>
                      <p className="text-sm text-text-secondary">
                        Sao Paulo, SP
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 text-white/50" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">WhatsApp</p>
                      <a href="#" className="text-sm text-white/60 hover:text-white transition-colors font-medium">
                        Fale conosco pelo WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-bg-card border border-white/10">
                <h3 className="text-lg font-heading font-semibold mb-4">
                  Horario de Atendimento
                </h3>
                <div className="space-y-2 text-sm text-text-secondary">
                  <div className="flex justify-between">
                    <span>Segunda a Sexta</span>
                    <span className="text-text-primary">08h - 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Suporte de Emergencia</span>
                    <span className="text-white/60">24/7</span>
                  </div>
                </div>
              </div>

              <div className="h-[200px] rounded-2xl bg-bg-card border border-white/10 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-white/20 mx-auto mb-2" />
                    <p className="text-xs text-white/30">Mapa interativo</p>
                    <p className="text-xs text-white/20">Sao Paulo, SP</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
