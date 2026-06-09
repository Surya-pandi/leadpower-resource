"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-black/55 backdrop-blur-2xl">
      <div className="site-container flex h-[4.6rem] items-center justify-between">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="relative grid h-8 w-8 place-items-center overflow-hidden border border-white/20 bg-white/[0.03]">
            <span className="absolute h-px w-5 rotate-45 bg-cyan shadow-[0_0_12px_#00d4ff]" />
            <span className="absolute h-px w-5 -rotate-45 bg-white/70" />
          </span>
          <span className="leading-none">
            <span className="block text-[0.72rem] font-bold tracking-[0.24em]">LEADPOWER</span>
            <span className="mt-1 block text-[0.48rem] tracking-[0.38em] text-zinc-500">RESOURCES</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[0.68rem] font-medium uppercase tracking-[0.16em] transition-colors ${
                pathname === item.href ? "text-cyan" : "text-zinc-400 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden items-center gap-2 border border-white/15 bg-white px-4 py-2.5 text-[0.66rem] font-bold uppercase tracking-[0.15em] text-black transition hover:bg-cyan md:flex"
        >
          Discuss requirements <ArrowUpRight size={14} />
        </Link>

        <button
          className="grid h-10 w-10 place-items-center border border-white/10 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/[0.07] bg-black lg:hidden"
          >
            <div className="site-container flex flex-col py-6">
              {[...navItems, { label: "Contact", href: "/contact" }].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/[0.07] py-4 text-sm uppercase tracking-[0.16em] text-zinc-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
