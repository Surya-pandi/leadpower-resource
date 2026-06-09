import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/motion";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-[0.63rem] font-bold uppercase tracking-[0.24em] text-cyan">
      <span className="h-px w-7 bg-cyan shadow-[0_0_10px_#00d4ff]" />
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
  center = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}>
      <div className={center ? "flex justify-center" : ""}>
        <Eyebrow>{eyebrow}</Eyebrow>
      </div>
      <h2 className="mt-6 text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.055em] md:text-6xl lg:text-7xl">
        {title}
      </h2>
      {copy && (
        <p className={`mt-6 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg ${center ? "mx-auto" : ""}`}>
          {copy}
        </p>
      )}
    </Reveal>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white"
    >
      {children}
      <span className="grid h-8 w-8 place-items-center rounded-full border border-white/15 transition group-hover:border-cyan group-hover:bg-cyan group-hover:text-black">
        <ArrowRight size={13} />
      </span>
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  copy,
  note,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  note: string;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/[0.08] pt-40">
      <div className="technical-grid absolute inset-0 opacity-70" />
      <div className="hero-scan absolute inset-0 opacity-50" />
      <div className="absolute right-[-8rem] top-[-10rem] h-[30rem] w-[30rem] rounded-full bg-cyan/[0.06] blur-[100px]" />
      <div className="page-orb absolute right-[5%] top-[24%] hidden h-[24rem] w-[24rem] lg:block" aria-hidden="true">
        <span className="page-orb-core" />
        <span className="page-orb-ring page-orb-ring-one" />
        <span className="page-orb-ring page-orb-ring-two" />
        <span className="page-orb-ring page-orb-ring-three" />
      </div>
      <div className="site-container relative grid min-h-[70vh] items-end gap-12 pb-20 lg:grid-cols-[1fr_22rem]">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-7 max-w-5xl text-balance text-5xl font-semibold leading-[0.95] tracking-[-0.065em] sm:text-7xl lg:text-[6.4rem]">
            {title}
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">{copy}</p>
        </Reveal>
        <Reveal delay={0.15} className="lg:border-l lg:border-white/[0.1] lg:pl-8">
          <span className="text-[0.6rem] uppercase tracking-[0.22em] text-zinc-600">Operating principle</span>
          <p className="mt-4 text-sm leading-7 text-zinc-300">{note}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden border-t border-white/[0.08] bg-[#070707] py-24 md:py-32">
      <div className="technical-grid absolute inset-0 opacity-50" />
      <div className="hero-scan absolute inset-0 opacity-30" />
      <div className="absolute left-1/2 top-1/2 h-48 w-3/4 -translate-x-1/2 -translate-y-1/2 bg-cyan/[0.06] blur-[100px]" />
      <div className="page-orb absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 opacity-30" aria-hidden="true">
        <span className="page-orb-core" />
        <span className="page-orb-ring page-orb-ring-one" />
        <span className="page-orb-ring page-orb-ring-two" />
      </div>
      <div className="site-container relative text-center">
        <Reveal>
          <Eyebrow>Build what comes next</Eyebrow>
          <h2 className="mx-auto mt-7 max-w-5xl text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.06em] md:text-7xl">
            Put the right engineering intelligence behind your next milestone.
          </h2>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-white px-6 py-4 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-black transition hover:bg-cyan"
            >
              Discuss requirements <ArrowRight size={15} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
