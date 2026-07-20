"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Infraestruturas Implantadas", value: 150, suffix: "+" },
  { label: "Dispositivos Monitorados", value: 1200, suffix: "+" },
  { label: "Backups Realizados", value: 50000, suffix: "+" },
  { label: "Incidentes Prevenidos", value: 3200, suffix: "+" },
  { label: "Disponibilidade Media", value: 99.9, suffix: "%" },
];

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl font-heading font-bold text-white/80 mb-2">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xs text-text-secondary/70 leading-relaxed max-w-[140px] mx-auto">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
