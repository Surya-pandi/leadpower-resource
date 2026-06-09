"use client";

import { Download, LogOut, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { ContactLead, LeadStatus } from "@/lib/supabase";

const statusOptions: LeadStatus[] = ["new", "contacted", "qualified", "closed"];

export function AdminLogin({ invalid }: { invalid: boolean }) {
  return (
    <div className="mx-auto grid min-h-screen max-w-md place-items-center px-5 pt-20">
      <form action="/api/admin/login" method="post" className="glass w-full p-8">
        <p className="text-[0.62rem] uppercase tracking-[0.22em] text-cyan">Protected access</p>
        <h1 className="mt-5 text-3xl font-medium tracking-[-0.04em]">Lead dashboard</h1>
        <p className="mt-3 text-sm leading-6 text-zinc-500">Enter the administrator password to continue.</p>
        <input required type="password" name="password" className="field mt-7" placeholder="Admin password" />
        {invalid && <p className="mt-3 text-xs text-red-300">The password was not accepted.</p>}
        <button className="mt-5 w-full bg-white px-5 py-3.5 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-black transition hover:bg-cyan">
          Sign in
        </button>
      </form>
    </div>
  );
}

export function AdminDashboard({
  leads,
  search,
  filter,
  configured,
}: {
  leads: ContactLead[];
  search: string;
  filter: string;
  configured: boolean;
}) {
  const router = useRouter();
  const [busy, setBusy] = useState<string | null>(null);

  async function updateStatus(id: string, status: LeadStatus) {
    setBusy(id);
    await fetch(`/api/admin/leads/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    setBusy(null);
    router.refresh();
  }

  return (
    <div className="site-container min-h-screen pb-20 pt-32">
      <div className="flex flex-col gap-6 border-b border-white/[0.1] pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[0.62rem] uppercase tracking-[0.22em] text-cyan">Admin / Lead management</p>
          <h1 className="mt-4 text-4xl font-medium tracking-[-0.05em] md:text-5xl">Engineering requirements</h1>
          <p className="mt-3 text-sm text-zinc-500">{leads.length} records in current view</p>
        </div>
        <div className="flex gap-3">
          <a href="/api/admin/export" className="flex items-center gap-2 border border-white/15 px-4 py-3 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-zinc-300">
            <Download size={14} /> Export CSV
          </a>
          <form action="/api/admin/logout" method="post">
            <button className="flex items-center gap-2 border border-white/15 px-4 py-3 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-zinc-300">
              <LogOut size={14} /> Logout
            </button>
          </form>
        </div>
      </div>

      <form className="mt-8 grid gap-3 md:grid-cols-[1fr_14rem_auto]">
        <label className="relative">
          <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" />
          <input name="q" defaultValue={search} className="field pl-11" placeholder="Search company, name, email, or industry" />
        </label>
        <select name="status" defaultValue={filter} className="field">
          <option value="">All statuses</option>
          {statusOptions.map((status) => <option key={status}>{status}</option>)}
        </select>
        <button className="bg-white px-5 py-3 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-black">Apply filters</button>
      </form>

      {!configured && (
        <div className="mt-8 border border-amber-400/20 bg-amber-400/[0.05] p-5 text-sm text-amber-100">
          Supabase environment variables are not configured. Add them to load live leads.
        </div>
      )}

      <div className="mt-8 overflow-x-auto border border-white/[0.09]">
        <table className="w-full min-w-[68rem] border-collapse text-left">
          <thead className="bg-white/[0.035] text-[0.58rem] uppercase tracking-[0.17em] text-zinc-500">
            <tr>
              {["Received", "Contact", "Company", "Industry", "Requirement", "Status"].map((heading) => (
                <th key={heading} className="border-b border-white/[0.09] px-5 py-4 font-medium">{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="border-b border-white/[0.07] align-top text-sm last:border-b-0">
                <td className="whitespace-nowrap px-5 py-5 text-xs text-zinc-500">{new Date(lead.created_at).toLocaleDateString()}</td>
                <td className="px-5 py-5">
                  <p className="font-medium">{lead.name}</p>
                  <a href={`mailto:${lead.email}`} className="mt-1 block text-xs text-cyan">{lead.email}</a>
                  <p className="mt-1 text-xs text-zinc-600">{lead.phone}</p>
                </td>
                <td className="px-5 py-5 text-zinc-300">{lead.company_name}</td>
                <td className="px-5 py-5 text-zinc-400">{lead.industry}</td>
                <td className="max-w-sm px-5 py-5 text-xs leading-6 text-zinc-500">{lead.requirement_details}</td>
                <td className="px-5 py-5">
                  <select
                    disabled={busy === lead.id}
                    value={lead.status}
                    onChange={(event) => updateStatus(lead.id, event.target.value as LeadStatus)}
                    className="border border-white/[0.1] bg-[#101010] px-3 py-2 text-xs capitalize outline-none"
                  >
                    {statusOptions.map((status) => <option key={status}>{status}</option>)}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {configured && leads.length === 0 && <p className="p-10 text-center text-sm text-zinc-500">No leads match this view.</p>}
      </div>
    </div>
  );
}
