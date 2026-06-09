import { createClient } from "@supabase/supabase-js";

export type LeadStatus = "new" | "contacted" | "qualified" | "closed";

export type ContactLead = {
  id: string;
  name: string;
  company_name: string;
  email: string;
  phone: string | null;
  industry: string;
  requirement_details: string;
  status: LeadStatus;
  created_at: string;
};

export function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    return null;
  }

  return createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
