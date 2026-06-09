"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const value = useMotionValue(0);
  const rounded = useTransform(value, (latest) => Math.round(latest).toString().padStart(target < 10 ? 2 : 0, "0"));

  useEffect(() => {
    if (inView) {
      const controls = animate(value, target, { duration: 1.8, ease: [0.22, 1, 0.36, 1] });
      return controls.stop;
    }
  }, [inView, target, value]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

const stats = [
  { value: 3, suffix: "", label: "Engineering disciplines" },
  { value: 4, suffix: "", label: "Industries served" },
  { value: 100, suffix: "%", label: "OEM focused" },
  { value: 48, suffix: "h", label: "Rapid resource deployment" },
];

export function Stats() {
  return (
    <section className="border-y border-white/[0.08] bg-white/[0.015]">
      <div className="site-container grid divide-y divide-white/[0.08] md:grid-cols-2 md:divide-x md:divide-y-0 xl:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="px-0 py-10 md:px-8 xl:py-14">
            <div className="text-5xl font-light tracking-[-0.07em] md:text-6xl">
              <AnimatedNumber target={stat.value} suffix={stat.suffix} />
            </div>
            <p className="mt-4 text-[0.62rem] uppercase tracking-[0.2em] text-zinc-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
