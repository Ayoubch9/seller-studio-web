create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text not null default 'direct',
  medium text,
  campaign text,
  content text,
  referrer text,
  landing_page text,
  status text not null default 'waiting',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.waitlist enable row level security;

-- No public policies are required: website writes go through the server API route
-- using the service-role key, which must stay server-side.
