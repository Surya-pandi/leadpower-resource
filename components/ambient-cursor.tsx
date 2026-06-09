"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function AmbientCursor() {
  const x = useMotionValue(-300);
  const y = useMotionValue(-300);
  const smoothX = useSpring(x, { stiffness: 90, damping: 25 });
  const smoothY = useSpring(y, { stiffness: 90, damping: 25 });

  useEffect(() => {
    const move = (event: PointerEvent) => {
      x.set(event.clientX - 220);
      y.set(event.clientY - 220);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  return <motion.div className="ambient-cursor" style={{ x: smoothX, y: smoothY }} />;
}
