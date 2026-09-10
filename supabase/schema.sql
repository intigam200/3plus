-- 3PLUS website backend schema.
-- Run this once in the Supabase dashboard: Project -> SQL Editor -> New query -> paste -> Run.

create table if not exists rfq_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  company text not null,
  email text not null,
  phone text,
  enquiry_type text not null default 'quote',
  brand_interest text,
  message text not null,
  status text not null default 'new',
  submitted_at timestamptz not null default now()
);

create table if not exists notify_signups (
  id uuid primary key default gen_random_uuid(),
  company text not null,
  email text not null,
  category text,
  submitted_at timestamptz not null default now()
);

-- Row Level Security stays on with no policies: the site only ever writes through
-- the server-side service role key (in the /api routes), which bypasses RLS.
-- This blocks the public/anon key from reading or writing these tables directly.
alter table rfq_submissions enable row level security;
alter table notify_signups enable row level security;
