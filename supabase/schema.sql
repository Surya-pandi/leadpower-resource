create extension if not exists "uuid-ossp";

create table if not exists public.contact_leads (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  company_name text not null,
  email text not null,
  phone text,
  industry text not null,
  requirement_details text not null,
  status text not null default 'new'
    check (status in ('new', 'contacted', 'qualified', 'closed')),
  created_at timestamptz not null default now()
);

create index if not exists contact_leads_created_at_idx
  on public.contact_leads (created_at desc);

create index if not exists contact_leads_status_idx
  on public.contact_leads (status);

alter table public.contact_leads enable row level security;

-- The service-role key used by server-side routes bypasses RLS.
-- No anonymous insert or read policies are intentionally defined.
