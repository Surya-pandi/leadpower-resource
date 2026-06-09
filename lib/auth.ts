import { createHmac, timingSafeEqual } from "node:crypto";

export const ADMIN_COOKIE = "leadpower_admin";

function sessionSecret() {
  return process.env.ADMIN_SESSION_SECRET || "change-this-in-production";
}

export function createAdminToken() {
  return createHmac("sha256", sessionSecret())
    .update("leadpower-admin-session")
    .digest("hex");
}

export function isValidAdminToken(token?: string) {
  if (!token) return false;
  const expected = createAdminToken();
  if (token.length !== expected.length) return false;
  return timingSafeEqual(Buffer.from(token), Buffer.from(expected));
}
