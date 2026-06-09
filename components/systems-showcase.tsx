"use client";

import { motion } from "framer-motion";
import { Activity, CircuitBoard, Cpu, ScanLine } from "lucide-react";
import dynamic from "next/dynamic";

const EngineeringScene = dynamic(
  () => import("@/components/engineering-scene").then((module) => module.EngineeringScene),
  { ssr: false },
);

const signals = [
  { icon: ScanLine, label: "Mechanical", value: "Geometry synchronized" },
  { icon: CircuitBoard, label: "Electrical", value: "Architecture validated" },
  { icon: Cpu, label: "Embedded", value: "Systems integrated" },
];

export function SystemsShowcase() {
  return (
    <section id="systems-intelligence" className="relative overflow-hidden border-y border-white/[0.08] bg-[#050707] py-24 md:py-32">
      <div className="technical-grid absolute inset-0 opacity-40" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/70 to-transparent" />
      <div className="site-container relative grid min-h-[42rem] items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative z-10">
          <div className="flex items-center gap-3 text-[0.62rem] font-bold uppercase tracking-[0.24em] text-cyan">
            <Activity size={14} />
            Connected engineering intelligence
          </div>
          <h2 className="mt-7 text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.06em] md:text-7xl">
            One product.
            <span className="outline-text block">Every system</span>
            in alignment.
          </h2>
          <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400">
            The strongest product decisions happen when disciplines connect early. We bring the specialists who understand both their domain and the full system around it.
          </p>
          <div className="mt-10 grid gap-2">
            {signals.map((signal, index) => {
              const Icon = signal.icon;
              return (
                <motion.div
                  key={signal.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="glass flex items-center justify-between gap-4 px-4 py-3"
                >
                  <span className="flex items-center gap-3 text-[0.62rem] font-bold uppercase tracking-[0.15em] text-zinc-300">
                    <Icon size={15} className="text-cyan" /> {signal.label}
                  </span>
                  <span className="hidden text-[0.58rem] uppercase tracking-[0.12em] text-zinc-600 sm:block">{signal.value}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className="relative min-h-[30rem] lg:min-h-[42rem]">
          <div className="absolute inset-0 rounded-full bg-cyan/[0.06] blur-[100px]" />
          <div className="absolute inset-[12%] rounded-full border border-cyan/10" />
          <div className="absolute inset-[22%] rounded-full border border-white/[0.06]" />
          <EngineeringScene className="absolute inset-[-12%]" />
          <div className="absolute bottom-0 right-0 glass px-5 py-4">
            <span className="block text-[0.56rem] uppercase tracking-[0.18em] text-zinc-600">System state</span>
            <span className="mt-2 flex items-center gap-2 text-[0.66rem] font-bold uppercase tracking-[0.16em] text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_12px_#00d4ff]" />
              Fully integrated
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
