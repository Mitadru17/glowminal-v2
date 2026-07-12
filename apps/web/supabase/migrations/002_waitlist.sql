-- =========================================================
-- Glowminal Phase 2: Waitlist & Early Access
-- =========================================================

CREATE TABLE IF NOT EXISTS public.waitlist (
  id               UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email            TEXT NOT NULL UNIQUE,
  source           TEXT DEFAULT 'website',
  beta_invited     BOOLEAN NOT NULL DEFAULT FALSE,
  launch_email_sent BOOLEAN NOT NULL DEFAULT FALSE,
  created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Index for sorting and duplicate checking
CREATE INDEX IF NOT EXISTS waitlist_email_idx ON public.waitlist(email);
CREATE INDEX IF NOT EXISTS waitlist_created_at_idx ON public.waitlist(created_at DESC);

-- Enable RLS
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Anonymous users can insert their email (with some rate limiting handled at app level)
CREATE POLICY "Anyone can join waitlist" ON public.waitlist
  FOR INSERT WITH CHECK (TRUE);

-- Only authenticated users (admins) can view or modify the waitlist
-- (For now, we'll restrict to a specific admin email or just authenticated users, 
-- but in a real app you'd check a role table. We'll use service_role from the server.)
CREATE POLICY "Admins can manage waitlist" ON public.waitlist
  USING (auth.jwt() ->> 'role' = 'service_role' OR auth.jwt() ->> 'email' = 'founders@glowminal.tech');
