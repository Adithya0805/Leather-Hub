"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Compass, Layers, Users } from "lucide-react";

interface MetricItem {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

const METRICS: MetricItem[] = [
  {
    icon: Compass,
    value: 200,
    suffix: "+ Years",
    label: "Ambur Tanning Heritage",
    sublabel: "Centuries of botanical vegetable tannage along Palar River",
  },
  {
    icon: Award,
    value: 700,
    suffix: "+",
    label: "Specialized Cluster Units",
    sublabel: "South India's premier export leather manufacturing hub",
  },
  {
    icon: Users,
    value: 100,
    suffix: "k+",
    label: "Master Craftsmen & Women",
    sublabel: "Generational leather curriers and pattern cutting artisans",
  },
  {
    icon: Layers,
    value: 0,
    suffix: "%",
    label: "Cardboard or Paper Fillers",
    sublabel: "100% single-ply uncorrected bovine hide from edge to edge",
  },
];

function CounterNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    if (target === 0) {
      setCount(0);
      return;
    }

    let start = 0;
    const duration = 1800; // ms
    const startTime = performance.now();

    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easeProgress * target);

      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#7A3E1D]">
      {count}
      {suffix}
    </span>
  );
}

export function AnimatedMetrics() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {METRICS.map((item, idx) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="bg-white rounded-2xl border border-[#EADDD3] p-6 shadow-warm hover:border-[#7A3E1D] hover:shadow-elevated transition-all flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#F3ECE5] text-[#7A3E1D] flex items-center justify-center group-hover:bg-[#7A3E1D] group-hover:text-white transition-colors shadow-xs">
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#9A8C84]">
                Proven 0{idx + 1}
              </span>
            </div>

            <div className="space-y-1 mb-2">
              <CounterNumber target={item.value} suffix={item.suffix} />
              <div className="font-serif text-base font-bold text-[#2C1A11] leading-snug">
                {item.label}
              </div>
            </div>

            <p className="text-xs text-[#6B5B52] leading-relaxed pt-2 border-t border-[#EADDD3]/60">
              {item.sublabel}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
