import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { navItems } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#030303]">
      <div className="site-container grid gap-14 py-16 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <span className="relative grid h-8 w-8 place-items-center overflow-hidden border border-white/20">
              <span className="absolute h-px w-5 rotate-45 bg-cyan" />
              <span className="absolute h-px w-5 -rotate-45 bg-white/70" />
            </span>
            <span className="text-xs font-bold tracking-[0.24em]">leadpower resources</span>
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-7 text-zinc-500">
            Specialized engineering talent and dedicated teams advancing complex OEM products.
          </p>
        </div>
        <div>
          <p className="text-[0.62rem] uppercase tracking-[0.22em] text-zinc-600">Navigate</p>
          <div className="mt-5 grid gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-zinc-400 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[0.62rem] uppercase tracking-[0.22em] text-zinc-600">Start a conversation</p>
          <Link href="/contact" className="mt-5 flex items-center gap-2 text-lg font-medium transition hover:text-cyan">
            Discuss requirements <ArrowUpRight size={18} />
          </Link>
          <p className="mt-8 text-xs leading-6 text-zinc-600">
            Mechanical. Electrical. Embedded.
            <br />
            Built around your engineering challenge.
          </p>
        </div>
      </div>
      <div className="border-t border-white/[0.06]">
        <div className="site-container flex flex-col gap-3 py-5 text-[0.62rem] uppercase tracking-[0.16em] text-zinc-700 md:flex-row md:justify-between">
          <span>© {new Date().getFullYear()} leadpower resources</span>
          <span>Engineering intelligence, precisely deployed.</span>
        </div>
      </div>
    </footer>
  );
}
