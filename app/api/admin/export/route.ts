import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { ADMIN_COOKIE, isValidAdminToken } from "@/lib/auth";
import { getSupabaseAdmin, type ContactLead } from "@/lib/supabase";

function csvCell(value: string | null) {
  return `"${String(value || "").replace(/"/g, '""')}"`;
}

export async function GET() {
  const cookieStore = await cookies();
  if (!isValidAdminToken(cookieStore.get(ADMIN_COOKIE)?.value)) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) return NextResponse.json({ message: "Supabase is not configured." }, { status: 503 });

  const { data, error } = await supabase.from("contact_leads").select("*").order("created_at", { ascending: false });
  if (error) return NextResponse.json({ message: "Unable to export leads." }, { status: 500 });

  const headers = ["Created", "Status", "Name", "Company", "Email", "Phone", "Industry", "Requirement"];
  const rows = (data as ContactLead[]).map((lead) =>
    [
      lead.created_at,
      lead.status,
      lead.name,
      lead.company_name,
      lead.email,
      lead.phone,
      lead.industry,
      lead.requirement_details,
    ].map(csvCell).join(","),
  );

  return new NextResponse([headers.join(","), ...rows].join("\n"), {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="leadpower-leads-${new Date().toISOString().slice(0, 10)}.csv"`,
    },
  });
}
