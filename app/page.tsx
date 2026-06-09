import { ArrowUpRight, Check, MoveRight } from "lucide-react";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { TiltCard } from "@/components/spatial";
import { Stats } from "@/components/stats";
import { SystemsShowcase } from "@/components/systems-showcase";
import { Eyebrow, FinalCta, SectionHeading, TextLink } from "@/components/ui";
import { capabilities, differentiators, industries } from "@/lib/site";

const process = [
  { number: "01", title: "Define", copy: "Align the technical challenge, delivery context, and success criteria." },
  { number: "02", title: "Configure", copy: "Structure the right expertise and engagement model around the work." },
  { number: "03", title: "Integrate", copy: "Embed quickly into your tools, workflows, and engineering cadence." },
  { number: "04", title: "Advance", copy: "Deliver with transparency, continuity, and measurable momentum." },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="relative overflow-hidden py-24 md:py-36">
        <div className="absolute right-0 top-0 h-96 w-96 bg-cyan/[0.035] blur-[100px]" />
        <div className="site-container">
          <SectionHeading
            eyebrow="Engineering expertise"
            title="Deep capability. Precisely applied."
            copy="We provide the specialized engineering intelligence OEMs need to move complex products forward, from architecture and development to validation and manufacturing."
          />
          <Stagger className="mt-16 grid border-l border-t border-white/[0.08] lg:grid-cols-3">
            {capabilities.map((capability) => {
              const Icon = capability.icon;
              return (
                <StaggerItem key={capability.slug} className="h-full border-b border-r border-white/[0.08]">
                  <TiltCard className="group p-7 transition duration-500 hover:bg-white/[0.025] md:p-10">
                    <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-cyan transition duration-500 group-hover:scale-x-100" />
                    <div className="spatial-float flex items-start justify-between">
                      <span className="text-[0.62rem] tracking-[0.2em] text-zinc-600">{capability.number} / 03</span>
                      <Icon size={27} strokeWidth={1.1} className="text-zinc-500 transition group-hover:text-cyan" />
                    </div>
                    <h3 className="spatial-float mt-20 text-2xl font-medium tracking-[-0.04em]">{capability.title}</h3>
                    <p className="mt-4 min-h-20 text-sm leading-7 text-zinc-500">{capability.summary}</p>
                    <div className="spatial-float mt-8 flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.17em] text-zinc-300">
                      Explore discipline <ArrowUpRight size={14} className="transition group-hover:text-cyan" />
                    </div>
                  </TiltCard>
                </StaggerItem>
              );
            })}
          </Stagger>
          <div className="mt-10">
            <TextLink href="/capabilities">View all capabilities</TextLink>
          </div>
        </div>
      </section>

      <SystemsShowcase />

      <section className="border-y border-white/[0.08] bg-[#080808] py-24 md:py-36">
        <div className="site-container">
          <SectionHeading
            eyebrow="Industries we serve"
            title="Built for engineered products where complexity matters."
          />
          <div className="mt-16 grid gap-px overflow-hidden border border-white/[0.08] bg-white/[0.08] md:grid-cols-2">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Reveal key={industry.title} delay={index * 0.06} className="h-full bg-[#080808]">
                  <TiltCard className="group p-7 transition duration-500 hover:bg-[#0d0d0d] md:p-10" intensity={4}>
                    <div className="spatial-float flex items-center justify-between">
                      <Icon size={29} strokeWidth={1.1} className="text-cyan" />
                      <span className="text-5xl font-light tracking-[-0.06em] text-white/[0.07]">{industry.number}</span>
                    </div>
                    <h3 className="spatial-float mt-14 text-2xl font-medium tracking-[-0.04em]">{industry.title}</h3>
                    <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-500">{industry.summary}</p>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 md:py-36">
        <div className="technical-grid absolute inset-0 opacity-40" />
        <div className="site-container relative grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Reveal>
              <Eyebrow>Why LEADPOWER</Eyebrow>
              <h2 className="mt-7 text-balance text-5xl font-semibold leading-[1] tracking-[-0.06em] md:text-7xl">
                Not an agency. An engineering advantage.
              </h2>
              <p className="mt-7 max-w-lg text-base leading-8 text-zinc-400">
                We combine technical rigor, flexible resourcing, and partnership discipline to help OEM teams execute with greater confidence.
              </p>
            </Reveal>
          </div>
          <div className="border-t border-white/[0.1]">
            {differentiators.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.04} className="grid gap-5 border-b border-white/[0.1] py-8 md:grid-cols-[4rem_1fr_2fr] md:items-start">
                  <span className="text-[0.62rem] tracking-[0.2em] text-zinc-600">0{index + 1}</span>
                  <Icon size={22} strokeWidth={1.2} className="text-cyan" />
                  <div>
                    <h3 className="text-xl font-medium tracking-[-0.03em]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-500">{item.copy}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.08] bg-[#070707] py-24 md:py-36">
        <div className="site-container">
          <SectionHeading
            eyebrow="Our operating model"
            title="From requirement to engineering momentum."
            copy="A disciplined workflow designed to integrate quickly, communicate clearly, and keep critical work moving."
          />
          <div className="mt-16 grid gap-8 lg:grid-cols-4">
            {process.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.08} className="relative border-t border-white/[0.14] pt-6">
                <div className="mb-14 flex items-center gap-3">
                  <span className="text-[0.62rem] font-bold tracking-[0.18em] text-cyan">{step.number}</span>
                  {index < process.length - 1 && <MoveRight size={15} className="text-zinc-700" />}
                </div>
                <h3 className="text-2xl font-medium tracking-[-0.04em]">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-500">{step.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Stats />

      <section className="py-24 md:py-36">
        <div className="site-container grid overflow-hidden border border-white/[0.09] bg-[radial-gradient(circle_at_85%_10%,rgba(0,212,255,.09),transparent_35%),#090909] lg:grid-cols-[1.2fr_.8fr]">
          <Reveal className="p-8 md:p-14">
            <Eyebrow>Engagement flexibility</Eyebrow>
            <h2 className="mt-7 text-balance text-4xl font-semibold leading-[1] tracking-[-0.055em] md:text-6xl">
              The right model for the work in front of you.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400">
              Extend a team, assemble a dedicated project group, or build a long-term engineering partnership.
            </p>
            <div className="mt-9">
              <TextLink href="/resource-models">Explore resource models</TextLink>
            </div>
          </Reveal>
          <div className="grid border-t border-white/[0.08] lg:border-l lg:border-t-0">
            {["Dedicated specialists", "Cross-functional teams", "Fast technical alignment", "Scalable continuity"].map((item) => (
              <div key={item} className="flex items-center gap-4 border-b border-white/[0.08] px-8 py-6 last:border-b-0">
                <span className="grid h-7 w-7 place-items-center rounded-full border border-cyan/30 text-cyan">
                  <Check size={13} />
                </span>
                <span className="text-sm text-zinc-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
