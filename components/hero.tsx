"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Magnetic } from "@/components/spatial";

const EngineeringScene = dynamic(
  () => import("@/components/engineering-scene").then((module) => module.EngineeringScene),
  { ssr: false },
);

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.13]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.78], [1, 0]);

  return (
    <section ref={ref} className="relative isolate min-h-[100svh] overflow-hidden border-b border-white/[0.08]">
      <motion.div className="absolute inset-0" style={reduceMotion ? {} : { scale: imageScale }}>
        <Image
          src="/assets/engineering-hero.png"
          alt="Cinematic mechanical, electrical, and embedded engineering systems"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center] opacity-70"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,3,3,.99)_0%,rgba(3,3,3,.91)_38%,rgba(3,3,3,.36)_72%,rgba(3,3,3,.72)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,3,3,.5)_0%,transparent_28%,rgba(3,3,3,.88)_100%)]" />
      <div className="technical-grid absolute inset-0 opacity-25" />
      <div className="hero-scan absolute inset-0" />
      <div className="noise" />
      <div className="ambient-line absolute left-[12%] top-[4.6rem] h-px w-40 opacity-80" />
      <div className="absolute right-[-12%] top-[15%] hidden h-[70%] w-[59%] lg:block">
        <div className="absolute inset-[13%] rounded-full bg-cyan/[0.06] blur-[90px]" />
        <div className="hero-orbit absolute inset-[18%] rounded-full border border-cyan/10" />
        <div className="hero-orbit hero-orbit-reverse absolute inset-[27%] rounded-full border border-white/[0.08]" />
        <EngineeringScene className="absolute inset-[-14%]" />
      </div>

      <motion.div
        style={reduceMotion ? {} : { y: copyY, opacity }}
        className="site-container relative z-10 flex min-h-[100svh] items-end pb-20 pt-32 md:items-center md:pb-0"
      >
        <div className="max-w-[52rem]">
          <div className="flex items-center gap-3 text-[0.58rem] font-bold uppercase tracking-[0.22em] text-cyan sm:text-[0.62rem] sm:tracking-[0.26em]">
            <span className="h-px w-8 bg-cyan shadow-[0_0_10px_#00d4ff]" />
            Engineering solutions for OEMs
          </div>
          <h1 className="mt-7 text-balance text-5xl font-semibold leading-[0.92] tracking-[-0.07em] sm:text-7xl lg:text-[6.2rem]">
            <span className="block">
              Engineering talent
            </span>
            <span className="outline-text block">
              behind tomorrow&apos;s
            </span>
            <span className="block">
              innovations.
            </span>
          </h1>
          <p className="mt-7 max-w-2xl text-sm leading-7 text-zinc-300 md:text-base">
            Accelerating product development through specialized Mechanical, Electrical, and
            Embedded Engineering expertise.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Magnetic>
              <Link
                href="/capabilities"
                className="inline-flex w-full items-center justify-center gap-3 bg-white px-5 py-4 text-[0.67rem] font-bold uppercase tracking-[0.16em] text-black transition hover:bg-cyan"
              >
                Explore capabilities <ArrowRight size={15} />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                href="/contact"
                className="glass inline-flex w-full items-center justify-center gap-3 px-5 py-4 text-[0.67rem] font-bold uppercase tracking-[0.16em] transition hover:border-white/30 hover:bg-white/[0.07]"
              >
                Discuss requirements
              </Link>
            </Magnetic>
          </div>
        </div>
      </motion.div>

      <div className="absolute right-[5%] top-[24%] z-10 hidden min-w-44 border-l border-cyan/40 bg-black/25 px-4 py-3 backdrop-blur-md xl:block">
        <span className="block text-[0.52rem] uppercase tracking-[0.2em] text-zinc-600">Live engineering core</span>
        <span className="mt-2 flex items-center gap-2 text-[0.59rem] font-bold uppercase tracking-[0.14em] text-zinc-300">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_12px_#00d4ff]" /> Systems synchronized
        </span>
      </div>
      <div className="absolute bottom-[16%] right-[7%] z-10 hidden grid-cols-3 gap-px overflow-hidden border border-white/[0.08] bg-white/[0.08] xl:grid">
        {["CAD / 3D", "PCB / CTRL", "SYS / TEST"].map((item) => (
          <div key={item} className="bg-black/65 px-4 py-3 text-[0.52rem] font-bold tracking-[0.14em] text-zinc-400 backdrop-blur-md">{item}</div>
        ))}
      </div>
      <div className="absolute bottom-7 right-7 hidden items-center gap-3 text-[0.57rem] uppercase tracking-[0.2em] text-zinc-500 md:flex">
        Explore <ArrowDown size={13} className="text-cyan" />
      </div>
      <div className="absolute bottom-0 left-0 h-px w-1/3 bg-gradient-to-r from-cyan via-cyan/30 to-transparent" />
    </section>
  );
}
