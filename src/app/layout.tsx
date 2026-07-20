import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Vorn Tecnologia | Infraestrutura Corporativa e Segurança para PMEs",
    template: "%s | Vorn Tecnologia",
  },
  description:
    "A Vorn Tecnologia entrega soluções completas de infraestrutura, monitoramento, segurança da informação e suporte gerenciado para pequenas e médias empresas. Seu departamento de TI terceirizado.",
  keywords: [
    "infraestrutura corporativa",
    "segurança da informação",
    "MSP",
    "serviços gerenciados",
    "firewall",
    "backup",
    "monitoramento",
    "servidores Linux",
    "VPN corporativa",
    "TI para pequenas empresas",
    "Vorn Tecnologia",
  ],
  authors: [{ name: "Vorn Tecnologia" }],
  creator: "Vorn Tecnologia",
  publisher: "Vorn Tecnologia",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Vorn Tecnologia",
    title: "Vorn Tecnologia | Infraestrutura Corporativa e Segurança para PMEs",
    description:
      "Infraestrutura corporativa, segurança da informação e suporte gerenciado para pequenas e médias empresas.",
    url: "https://vorntecnologia.com.br",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vorn Tecnologia",
    description:
      "Infraestrutura corporativa e segurança para empresas que precisam de estabilidade.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Vorn Tecnologia",
              url: "https://vorntecnologia.com.br",
              logo: "https://vorntecnologia.com.br/logo.svg",
              description:
                "Empresa de engenharia de infraestrutura e segurança da informação para pequenas e médias empresas.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+55-XX-XXXXX-XXXX",
                contactType: "customer service",
                availableLanguage: ["Portuguese", "English"],
              },
              sameAs: [
                "https://www.linkedin.com/company/vorn-tecnologia",
                "https://www.instagram.com/vorntecnologia",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-bg-primary text-text-primary font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
