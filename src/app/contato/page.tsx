import type { Metadata } from "next";
import { ContatoPageClient } from "./contato-page-client";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a Vorn Tecnologia. Solicite um diagnóstico gratuito ou tire dúvidas sobre nossos serviços.",
};

export default function ContatoPage() {
  return <ContatoPageClient />;
}
