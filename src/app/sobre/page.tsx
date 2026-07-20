import type { Metadata } from "next";
import { AboutPageClient } from "./about-page-client";

export const metadata: Metadata = {
  title: "Sobre Nos",
  description:
    "Conheca a historia da Vorn Tecnologia, nossa missao, visao, valores e metodologia. Engenharia de infraestrutura e seguranca para PMEs.",
};

export default function SobrePage() {
  return <AboutPageClient />;
}
