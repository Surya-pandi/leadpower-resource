import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { z } from "zod";
import { ADMIN_COOKIE, isValidAdminToken } from "@/lib/auth";
import { getSupabaseAdmin } from "@/lib/supabase";

const statusSchema = z.object({
  status: z.enum(["new", "contacted", "qualified", "closed"]),
});

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const cookieStore = await cookies();
  if (!isValidAdminToken(cookieStore.get(ADMIN_COOKIE)?.value)) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await params;
    const { status } = statusSchema.parse(await request.json());
    const supabase = getSupabaseAdmin();
    if (!supabase) return NextResponse.json({ message: "Supabase is not configured." }, { status: 503 });

    const { error } = await supabase.from("contact_leads").update({ status }).eq("id", id);
    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Lead status update failed:", error);
    return NextResponse.json({ message: "Unable to update lead." }, { status: 400 });
  }
}
