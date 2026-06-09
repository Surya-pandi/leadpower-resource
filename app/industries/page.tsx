import type { Metadata } from "next";
import { Reveal } from "@/components/motion";
import { FinalCta, PageHero } from "@/components/ui";
import { industries } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries",
  description: "Engineering expertise for high-tech capital equipment, medical, industrial, and automotive OEMs.",
};

const contexts = [
  ["Complex assemblies", "Precision mechatronics", "Automation platforms", "Production tooling"],
  ["Safety-critical systems", "Product verification", "Electromechanical design", "Design transfer"],
  ["Machine systems", "Controls integration", "Manufacturing engineering", "Reliability improvement"],
  ["Vehicle systems", "Embedded controls", "Electrical architectures", "Test engineering"],
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Engineering depth for products that cannot be ordinary."
        copy="We support OEMs operating in demanding technical environments where quality, system integration, and product readiness are non-negotiable."
        note="Industry context matters. We match technical capability with the operating realities and quality expectations of each product domain."
      />
      <section className="py-24 md:py-36">
        <div className="site-container grid gap-8 md:grid-cols-2">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Reveal key={industry.title} delay={index * 0.07} className="group relative overflow-hidden border border-white/[0.09] bg-[#090909] p-7 md:p-10">
                <div className="absolute right-[-5rem] top-[-5rem] h-48 w-48 rounded-full bg-cyan/[0.04] blur-[60px] transition group-hover:bg-cyan/[0.1]" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <Icon size={30} strokeWidth={1.1} className="text-cyan" />
                    <span className="text-[0.6rem] tracking-[0.2em] text-zinc-700">{industry.number} / 04</span>
                  </div>
                  <h2 className="mt-20 max-w-md text-3xl font-medium leading-tight tracking-[-0.045em] md:text-4xl">{industry.title}</h2>
                  <p className="mt-5 max-w-lg text-sm leading-7 text-zinc-500">{industry.summary}</p>
                  <div className="mt-10 grid gap-3 border-t border-white/[0.08] pt-6 sm:grid-cols-2">
                    {contexts[index].map((context) => (
                      <span key={context} className="text-[0.65rem] uppercase tracking-[0.12em] text-zinc-400">{context}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
      <FinalCta />
    </>
  );
}
