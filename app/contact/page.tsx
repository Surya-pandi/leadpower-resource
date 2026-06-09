import type { Metadata } from "next";
import { Clock3, Mail, MapPin, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/motion";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact",
  description: "Discuss your engineering resource and OEM product-development requirements with leadpower resources.",
};

const contactPoints = [
  { icon: Mail, label: "Engineering inquiries", value: "engineering@leadpowerresource.com" },
  { icon: Clock3, label: "Initial response", value: "Within one business day" },
  { icon: MapPin, label: "Delivery model", value: "On-site, hybrid, and remote" },
  { icon: ShieldCheck, label: "Your information", value: "Handled confidentially" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Start a conversation"
        title="Tell us where engineering momentum matters most."
        copy="Share the challenge, the discipline, and the timeline. Our engineering solutions team will help configure the right path forward."
        note="A strong engagement starts with technical clarity. Give us the context and we will bring the right questions."
      />
      <section className="py-24 md:py-32">
        <div className="site-container grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <Reveal>
            <p className="text-[0.62rem] uppercase tracking-[0.22em] text-cyan">Contact information</p>
            <h2 className="mt-6 text-4xl font-semibold leading-[1] tracking-[-0.055em] md:text-5xl">
              Let&apos;s define the engineering requirement.
            </h2>
            <p className="mt-6 text-sm leading-7 text-zinc-500">
              Whether you need one specialized engineer or a dedicated technical team, we begin by understanding the work.
            </p>
            <div className="mt-10 border-t border-white/[0.1]">
              {contactPoints.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex gap-4 border-b border-white/[0.1] py-5">
                    <Icon size={17} strokeWidth={1.2} className="mt-0.5 text-cyan" />
                    <div>
                      <p className="text-[0.58rem] uppercase tracking-[0.17em] text-zinc-600">{item.label}</p>
                      <p className="mt-2 text-sm text-zinc-300">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
