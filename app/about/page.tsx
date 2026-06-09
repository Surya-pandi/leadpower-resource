import type { Metadata } from "next";
import { Check, Crosshair, Eye, Gem, ShieldCheck, Waypoints } from "lucide-react";
import { Reveal } from "@/components/motion";
import { FinalCta, PageHero, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description: "A specialist engineering solutions partner built around the realities of OEM product development.",
};

const values = [
  { title: "Technical integrity", copy: "We value engineering truth, clear decisions, and work that stands up to scrutiny.", icon: ShieldCheck },
  { title: "Useful precision", copy: "We focus expertise where it creates measurable product and program momentum.", icon: Crosshair },
  { title: "Partnership mindset", copy: "We operate as an extension of the teams we support, with shared ownership of outcomes.", icon: Waypoints },
  { title: "Quiet excellence", copy: "We let technical depth, consistency, and delivery quality do the talking.", icon: Gem },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About leadpower resources"
        title="Engineering partnership, designed around the product."
        copy="leadpower resources was built to give OEMs reliable access to the specialized engineering intelligence required to develop, validate, and industrialize complex products."
        note="We believe the best engineering resource partner understands the work, the environment, and the consequence of every decision."
      />

      <section className="py-24 md:py-36">
        <div className="site-container grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <span className="text-[0.62rem] uppercase tracking-[0.22em] text-cyan">Our story / 01</span>
            <h2 className="mt-6 text-4xl font-semibold leading-[1] tracking-[-0.055em] md:text-6xl">
              Created for the gap between capacity and capability.
            </h2>
          </Reveal>
          <Reveal delay={0.12} className="space-y-7 text-base leading-8 text-zinc-400 md:text-lg">
            <p>
              Product organizations rarely lack ambition. They lose time when the right technical depth is unavailable at the exact moment it is needed.
            </p>
            <p>
              leadpower resources closes that gap with specialized Mechanical, Electrical, and Embedded Engineering expertise configured around real OEM workflows. We support critical milestones without disrupting the systems already working.
            </p>
            <p className="border-l border-cyan pl-6 text-white">
              Our role is simple: add the engineering intelligence that helps excellent teams move faster and execute with confidence.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-white/[0.08] bg-[#080808] py-24 md:py-32">
        <div className="site-container grid gap-px overflow-hidden border border-white/[0.08] bg-white/[0.08] md:grid-cols-2">
          <Reveal className="bg-[#080808] p-8 md:p-14">
            <Crosshair size={28} strokeWidth={1.2} className="text-cyan" />
            <p className="mt-14 text-[0.62rem] uppercase tracking-[0.22em] text-zinc-600">Mission</p>
            <h3 className="mt-5 text-3xl font-medium leading-tight tracking-[-0.045em]">
              Accelerate OEM innovation by placing exceptional engineering capability where it matters most.
            </h3>
          </Reveal>
          <Reveal delay={0.1} className="bg-[#080808] p-8 md:p-14">
            <Eye size={28} strokeWidth={1.2} className="text-cyan" />
            <p className="mt-14 text-[0.62rem] uppercase tracking-[0.22em] text-zinc-600">Vision</p>
            <h3 className="mt-5 text-3xl font-medium leading-tight tracking-[-0.045em]">
              Become the engineering resource partner trusted by ambitious product organizations worldwide.
            </h3>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-36">
        <div className="site-container">
          <SectionHeading eyebrow="Core values" title="The standards behind every engagement." />
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Reveal key={value.title} delay={index * 0.06} className="glass group p-7 transition duration-500 hover:border-cyan/30 md:p-9">
                  <Icon size={25} strokeWidth={1.2} className="text-cyan" />
                  <h3 className="mt-12 text-2xl font-medium tracking-[-0.04em]">{value.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-zinc-500">{value.copy}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.08] bg-[#070707] py-24 md:py-36">
        <div className="site-container grid gap-14 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Why OEMs trust us"
            title="Rigor without rigidity."
            copy="We bring disciplined delivery and technical depth while adapting to each organization's standards, systems, and pace."
          />
          <div className="border-t border-white/[0.1]">
            {["Domain-aligned technical expertise", "Transparent delivery and communication", "Fast integration into existing teams", "Quality-minded engineering discipline", "Scalable support across program phases"].map((item) => (
              <Reveal key={item} className="flex items-center gap-4 border-b border-white/[0.1] py-6 text-sm text-zinc-300">
                <Check size={15} className="text-cyan" />
                {item}
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
