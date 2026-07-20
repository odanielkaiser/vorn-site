import { HeroSection } from "@/components/hero-section";
import { WhyVorn } from "@/components/why-vorn";
import { ServicesSection } from "@/components/services-section";
import { HowItWorks } from "@/components/how-it-works";
import { Differential } from "@/components/differential";
import { SegmentsSection } from "@/components/segments-section";
import { SecuritySection } from "@/components/security-section";
import { TechStack } from "@/components/tech-stack";
import { StatsSection } from "@/components/stats-section";
import { CtaSection } from "@/components/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyVorn />
      <ServicesSection />
      <HowItWorks />
      <Differential />
      <SegmentsSection />
      <SecuritySection />
      <TechStack />
      <StatsSection />
      <CtaSection />
    </>
  );
}
