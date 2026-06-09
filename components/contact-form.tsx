"use client";

import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [state, setState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message || "Unable to submit your request.");
      setState("success");
      setMessage(result.message || "Thank you. Our engineering solutions team will connect with you shortly.");
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Unable to submit your request.");
    }
  }

  if (state === "success") {
    return (
      <div className="glass grid min-h-[34rem] place-items-center p-8 text-center">
        <div>
          <CheckCircle2 size={42} strokeWidth={1.2} className="mx-auto text-cyan" />
          <h2 className="mt-7 text-3xl font-medium tracking-[-0.04em]">Requirement received.</h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-zinc-400">{message}</p>
          <button onClick={() => setState("idle")} className="mt-8 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-cyan">
            Submit another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="glass p-6 md:p-9">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="text-xs text-zinc-400">
          Full name *
          <input required name="name" className="field mt-2" placeholder="Your name" />
        </label>
        <label className="text-xs text-zinc-400">
          Company name *
          <input required name="company_name" className="field mt-2" placeholder="Company" />
        </label>
        <label className="text-xs text-zinc-400">
          Business email *
          <input required type="email" name="email" className="field mt-2" placeholder="you@company.com" />
        </label>
        <label className="text-xs text-zinc-400">
          Phone number
          <input name="phone" className="field mt-2" placeholder="+1 000 000 0000" />
        </label>
      </div>
      <label className="mt-5 block text-xs text-zinc-400">
        Industry *
        <select required name="industry" className="field mt-2">
          <option value="">Select an industry</option>
          <option>High-Tech Capital Equipment</option>
          <option>Medical Equipment</option>
          <option>Industrial Equipment</option>
          <option>Automotive</option>
          <option>Other</option>
        </select>
      </label>
      <label className="mt-5 block text-xs text-zinc-400">
        Requirement details *
        <textarea
          required
          minLength={20}
          name="requirement_details"
          rows={6}
          className="field mt-2 resize-y"
          placeholder="Tell us about the engineering challenge, required expertise, and target timeline."
        />
      </label>
      {message && <p className="mt-5 text-sm text-red-300">{message}</p>}
      <button
        disabled={state === "submitting"}
        className="mt-7 flex w-full items-center justify-center gap-3 bg-white px-5 py-4 text-[0.68rem] font-bold uppercase tracking-[0.17em] text-black transition hover:bg-cyan disabled:cursor-wait disabled:opacity-60"
      >
        {state === "submitting" ? <Loader2 size={15} className="animate-spin" /> : <Send size={15} />}
        {state === "submitting" ? "Submitting" : "Submit engineering requirement"}
      </button>
      <p className="mt-4 text-[0.62rem] leading-5 text-zinc-600">
        Your information is used only to evaluate and respond to this engineering requirement.
      </p>
    </form>
  );
}
