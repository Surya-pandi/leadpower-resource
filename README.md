# leadpower resources

Premium enterprise engineering website built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, Supabase, and Resend.

## Interactive 3D system

The homepage includes a procedural React Three Fiber engineering core with pointer-responsive orbital geometry, particles, and lighting. It is lazy-loaded after the server-rendered content, while cinematic artwork and CSS depth effects provide fast visual fallbacks on mobile and lower-powered devices.

## Local setup

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Copy `.env.example` to `.env.local` and add your service credentials.

3. Run `supabase/schema.sql` in the Supabase SQL editor.

4. Start the app:

   ```bash
   pnpm dev
   ```

5. Open `http://localhost:3000`.

## Environment variables

- `NEXT_PUBLIC_SITE_URL`: Canonical production URL.
- `NEXT_PUBLIC_SUPABASE_URL`: Supabase project URL.
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Reserved for future browser-side Supabase features.
- `SUPABASE_SERVICE_ROLE_KEY`: Server-only key used for lead administration.
- `RESEND_API_KEY`: Resend API key.
- `RESEND_FROM_EMAIL`: Verified Resend sender.
- `ADMIN_NOTIFICATION_EMAIL`: Recipient for new lead notifications.
- `ADMIN_PASSWORD`: Password for `/admin`.
- `ADMIN_SESSION_SECRET`: Long random value used to sign the admin session.

Never expose `SUPABASE_SERVICE_ROLE_KEY`, `ADMIN_PASSWORD`, or `ADMIN_SESSION_SECRET` to the client.

## Lead workflow

`POST /api/contact` validates each requirement with Zod, stores it in Supabase, sends an admin notification through Resend, and sends an acknowledgment to the requester.

The protected `/admin` dashboard provides search, status filtering, status management, and CSV export.

## Deployment

1. Push the project to a Git provider.
2. Import it into Vercel.
3. Configure all environment variables for Production and Preview.
4. Deploy.

The project includes metadata, Open Graph and Twitter cards, JSON-LD, `sitemap.xml`, `robots.txt`, image optimization, server components, and Vercel security headers.

## Visual asset

`public/assets/engineering-hero.png` was generated specifically for the leadpower resources visual direction. Replace it with an optimized short-loop MP4/WebM later if a production video becomes available; the hero overlay and layout are already designed to support that transition.
