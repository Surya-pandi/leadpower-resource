import type { Metadata } from "next";
import { ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "@/components/motion";
import { FinalCta, PageHero } from "@/components/ui";
import { capabilities } from "@/lib/site";

export const metadata: Metadata = {
  title: "Engineering Capabilities",
  description: "Mechanical, Electrical, and Embedded Systems expertise supporting complex OEM product programs.",
};

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Engineering capabilities"
        title="Multidisciplinary depth for complex product programs."
        copy="Focused technical expertise across the disciplines that define, power, control, validate, and industrialize modern engineered products."
        note="Our experts integrate into your environment, apply the right depth to the challenge, and move critical engineering work forward."
      />

      <section className="py-24 md:py-36">
        <div className="site-container space-y-24 md:space-y-36">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <article key={capability.slug} id={capability.slug} className="grid gap-12 border-t border-white/[0.12] pt-10 lg:grid-cols-[1fr_1.2fr]">
                <Reveal>
                  <div className="flex items-center justify-between">
                    <span className="text-[0.62rem] font-bold tracking-[0.22em] text-cyan">{capability.number} / 03</span>
                    <Icon size={34} strokeWidth={1} className="text-zinc-500" />
                  </div>
                  <h2 className="mt-16 max-w-lg text-5xl font-semibold leading-[0.98] tracking-[-0.06em] md:text-7xl">
                    {capability.title}
                  </h2>
                  <p className="mt-7 max-w-lg text-base leading-8 text-zinc-400">{capability.summary}</p>
                </Reveal>
                <Reveal delay={0.12} className="grid content-start gap-px overflow-hidden border border-white/[0.08] bg-white/[0.08]">
                  {capability.services.map((service, serviceIndex) => (
                    <div key={service} className="group flex items-center justify-between bg-[#080808] px-6 py-7 transition hover:bg-[#0c0c0c] md:px-8">
                      <div className="flex items-center gap-5">
                        <span className="text-[0.58rem] tracking-[0.18em] text-zinc-700">0{serviceIndex + 1}</span>
                        <span className="text-lg font-medium tracking-[-0.025em]">{service}</span>
                      </div>
                      <ArrowUpRight size={17} className="text-zinc-700 transition group-hover:text-cyan" />
                    </div>
                  ))}
                </Reveal>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/[0.08] bg-[#080808] py-24 md:py-32">
        <div className="site-container grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <p className="text-[0.62rem] uppercase tracking-[0.22em] text-cyan">Across every discipline</p>
            <h2 className="mt-7 text-4xl font-semibold leading-[1] tracking-[-0.055em] md:text-6xl">
              Engineered to integrate. Structured to deliver.
            </h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Product development", "Verification & validation", "Manufacturing readiness", "Systems integration", "Technical documentation", "Continuous improvement"].map((item, index) => (
              <Reveal key={item} delay={index * 0.04} className="glass flex items-center gap-4 p-5 text-sm text-zinc-300">
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
