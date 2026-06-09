"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";

export function TiltCard({
  children,
  className = "",
  intensity = 7,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
}) {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 170, damping: 24 });
  const smoothY = useSpring(pointerY, { stiffness: 170, damping: 24 });
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [intensity, -intensity]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-intensity, intensity]);
  const glowX = useTransform(smoothX, [-0.5, 0.5], ["20%", "80%"]);
  const glowY = useTransform(smoothY, [-0.5, 0.5], ["20%", "80%"]);

  function move(event: MouseEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  }

  return (
    <div className="spatial-stage h-full" onMouseMove={move} onMouseLeave={() => { pointerX.set(0); pointerY.set(0); }}>
      <motion.div
        className={`spatial-card relative h-full overflow-hidden ${className}`}
        style={{ rotateX, rotateY }}
      >
        <motion.div
          className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: useTransform(
              [glowX, glowY],
              ([x, y]) => `radial-gradient(circle at ${x} ${y}, rgba(0,212,255,.13), transparent 42%)`,
            ),
          }}
        />
        <div className="relative z-10 h-full">{children}</div>
      </motion.div>
    </div>
  );
}

export function Magnetic({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 250, damping: 18 });
  const smoothY = useSpring(y, { stiffness: 250, damping: 18 });

  function move(event: MouseEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - (bounds.left + bounds.width / 2)) * 0.14);
    y.set((event.clientY - (bounds.top + bounds.height / 2)) * 0.14);
  }

  return (
    <div onMouseMove={move} onMouseLeave={() => { x.set(0); y.set(0); }} className={className}>
      <motion.div style={{ x: smoothX, y: smoothY }}>{children}</motion.div>
    </div>
  );
}
