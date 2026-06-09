import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { getSupabaseAdmin } from "@/lib/supabase";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  company_name: z.string().trim().min(2).max(150),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(50).optional().default(""),
  industry: z.string().trim().min(2).max(100),
  requirement_details: z.string().trim().min(20).max(5000),
});

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return entities[character];
  });
}

export async function POST(request: Request) {
  try {
    const payload = contactSchema.parse(await request.json());
    const supabase = getSupabaseAdmin();

    if (!supabase) {
      return NextResponse.json(
        { message: "Lead capture is not configured. Please contact us by email." },
        { status: 503 },
      );
    }

    const { error } = await supabase.from("contact_leads").insert(payload);
    if (error) {
      console.error("Supabase contact insert failed:", error.message);
      return NextResponse.json({ message: "Unable to save your request. Please try again." }, { status: 500 });
    }

    const resendKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL;
    const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL;

    if (resendKey && from && adminEmail) {
      const resend = new Resend(resendKey);
      const safe = Object.fromEntries(
        Object.entries(payload).map(([key, value]) => [key, escapeHtml(value)]),
      ) as typeof payload;

      const results = await Promise.allSettled([
        resend.emails.send({
          from,
          to: adminEmail,
          replyTo: payload.email,
          subject: `New engineering requirement — ${payload.company_name}`,
          html: `
            <h2>New engineering requirement</h2>
            <p><strong>Name:</strong> ${safe.name}</p>
            <p><strong>Company:</strong> ${safe.company_name}</p>
            <p><strong>Email:</strong> ${safe.email}</p>
            <p><strong>Phone:</strong> ${safe.phone || "Not provided"}</p>
            <p><strong>Industry:</strong> ${safe.industry}</p>
            <p><strong>Requirement:</strong><br>${safe.requirement_details.replace(/\n/g, "<br>")}</p>
          `,
        }),
        resend.emails.send({
          from,
          to: payload.email,
          subject: "We received your engineering requirement",
          html: `
            <h2>Thank you, ${safe.name}.</h2>
            <p>We have received your engineering requirement for ${safe.company_name}.</p>
            <p>Our engineering solutions team will review the details and connect with you shortly.</p>
            <p>leadpower resources</p>
          `,
        }),
      ]);

      results.forEach((result) => {
        if (result.status === "rejected") console.error("Resend delivery failed:", result.reason);
      });
    }

    return NextResponse.json({
      message:
        "Thank you for contacting leadpower resources. Our engineering solutions team will connect with you shortly.",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: error.issues[0]?.message || "Please check the form fields." },
        { status: 400 },
      );
    }
    console.error("Contact route failed:", error);
    return NextResponse.json({ message: "Unable to submit your request. Please try again." }, { status: 500 });
  }
}
