import type { Metadata } from "next";
import { cookies } from "next/headers";
import { AdminDashboard, AdminLogin } from "@/components/admin-dashboard";
import { ADMIN_COOKIE, isValidAdminToken } from "@/lib/auth";
import { getSupabaseAdmin, type ContactLead } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; status?: string; error?: string }>;
}) {
  const cookieStore = await cookies();
  const params = await searchParams;

  if (!isValidAdminToken(cookieStore.get(ADMIN_COOKIE)?.value)) {
    return <AdminLogin invalid={params.error === "invalid"} />;
  }

  const supabase = getSupabaseAdmin();
  let leads: ContactLead[] = [];

  if (supabase) {
    let query = supabase.from("contact_leads").select("*").order("created_at", { ascending: false }).limit(500);
    if (params.status) query = query.eq("status", params.status);
    if (params.q) {
      const safeQuery = params.q.replace(/[,%()]/g, " ").trim();
      if (safeQuery) {
        query = query.or(
          `name.ilike.%${safeQuery}%,company_name.ilike.%${safeQuery}%,email.ilike.%${safeQuery}%,industry.ilike.%${safeQuery}%`,
        );
      }
    }
    const { data } = await query;
    leads = (data || []) as ContactLead[];
  }

  return (
    <AdminDashboard
      leads={leads}
      search={params.q || ""}
      filter={params.status || ""}
      configured={Boolean(supabase)}
    />
  );
}
