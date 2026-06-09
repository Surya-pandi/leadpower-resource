import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/motion";
import { FinalCta, PageHero, SectionHeading } from "@/components/ui";
import { resourceModels } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resource Models",
  description: "Flexible engineering engagement models built around OEM product needs and timelines.",
};

export default function ResourceModelsPage() {
  return (
    <>
      <PageHero
        eyebrow="Resource models"
        title="The right engineering structure for every stage of the work."
        copy="Flexible engagement models that give OEM teams specialized capacity without sacrificing technical alignment, continuity, or control."
        note="The engagement model should serve the engineering outcome. We configure around the work, not force the work into a fixed model."
      />
      <section className="py-24 md:py-36">
        <div className="site-container">
          <SectionHeading
            eyebrow="Engagement flexibility"
            title="Scale expertise, not complexity."
            copy="Each model is designed for fast integration, clear ownership, and the ability to evolve with the program."
          />
          <div className="mt-16 grid gap-px overflow-hidden border border-white/[0.08] bg-white/[0.08] md:grid-cols-2">
            {resourceModels.map((model, index) => {
              const Icon = model.icon;
              return (
                <Reveal key={model.title} delay={index * 0.06} className="group bg-[#080808] p-8 transition hover:bg-[#0c0c0c] md:p-10">
                  <div className="flex items-center justify-between">
                    <span className="text-[0.6rem] tracking-[0.2em] text-cyan">{model.number} / 04</span>
                    <Icon size={27} strokeWidth={1.1} className="text-zinc-600 transition group-hover:text-cyan" />
                  </div>
                  <h2 className="mt-20 text-3xl font-medium tracking-[-0.045em]">{model.title}</h2>
                  <p className="mt-5 max-w-lg text-sm leading-7 text-zinc-500">{model.copy}</p>
                  <Link href="/contact" className="mt-9 inline-flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-zinc-300">
                    Discuss this model <ArrowRight size={14} className="text-cyan" />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      <section className="border-y border-white/[0.08] bg-[#080808] py-24 md:py-32">
        <div className="site-container grid gap-14 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Always included"
            title="A disciplined partnership around every resource."
          />
          <div className="border-t border-white/[0.1]">
            {["Technical requirement alignment", "Structured onboarding and integration", "Transparent engagement governance", "Continuity and knowledge transfer", "Scalable delivery support"].map((item) => (
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
