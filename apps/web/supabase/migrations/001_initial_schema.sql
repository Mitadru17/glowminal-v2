-- =========================================================
-- Glowminal Phase 1 Database Migration
-- Database: PostgreSQL (Supabase)
-- Run via: supabase db push
-- All tables enforce Row Level Security.
-- =========================================================

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ── users ─────────────────────────────────────────────────────────────────
-- Extends Supabase auth.users. Created via trigger on auth.users insert.

CREATE TABLE IF NOT EXISTS public.users (
  id            UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email         TEXT NOT NULL UNIQUE,
  full_name     TEXT,
  avatar_url    TEXT,
  auth_provider TEXT NOT NULL DEFAULT 'email',
  onboarding_completed BOOLEAN NOT NULL DEFAULT FALSE,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Auto-populate from auth.users on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public.users (id, email, full_name, avatar_url, auth_provider)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data ->> 'full_name',
    NEW.raw_user_meta_data ->> 'avatar_url',
    COALESCE(NEW.app_metadata ->> 'provider', 'email')
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- updated_at trigger
CREATE OR REPLACE FUNCTION public.update_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

CREATE TRIGGER users_updated_at
  BEFORE UPDATE ON public.users
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

-- ── profiles ──────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.profiles (
  id                UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id           UUID NOT NULL UNIQUE REFERENCES public.users(id) ON DELETE CASCADE,
  age_range         TEXT,
  skin_type         TEXT CHECK (skin_type IN ('normal', 'oily', 'dry', 'combination', 'sensitive')),
  primary_concerns  TEXT[] DEFAULT '{}',
  allergies         TEXT[] DEFAULT '{}',
  lifestyle_notes   TEXT
);

-- ── scans ─────────────────────────────────────────────────────────────────

CREATE TYPE scan_status AS ENUM ('uploaded', 'validating', 'processing', 'completed', 'failed');

CREATE TABLE IF NOT EXISTS public.scans (
  id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id         UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  original_image  TEXT NOT NULL,    -- Supabase Storage path
  processed_image TEXT,             -- Supabase Storage path (post-processing)
  quality_score   NUMERIC(4, 2),    -- 0–100
  scan_status     scan_status NOT NULL DEFAULT 'uploaded',
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS scans_user_id_idx ON public.scans(user_id);
CREATE INDEX IF NOT EXISTS scans_created_at_idx ON public.scans(created_at DESC);
CREATE INDEX IF NOT EXISTS scans_status_idx ON public.scans(scan_status);

-- ── analysis_reports ──────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.analysis_reports (
  id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  scan_id         UUID NOT NULL UNIQUE REFERENCES public.scans(id) ON DELETE CASCADE,
  overall_score   NUMERIC(4, 2) NOT NULL CHECK (overall_score BETWEEN 0 AND 100),
  hydration       NUMERIC(4, 2) NOT NULL CHECK (hydration BETWEEN 0 AND 100),
  pigmentation    NUMERIC(4, 2) NOT NULL CHECK (pigmentation BETWEEN 0 AND 100),
  acne            NUMERIC(4, 2) NOT NULL CHECK (acne BETWEEN 0 AND 100),
  redness         NUMERIC(4, 2) NOT NULL CHECK (redness BETWEEN 0 AND 100),
  pores           NUMERIC(4, 2) NOT NULL CHECK (pores BETWEEN 0 AND 100),
  elasticity      NUMERIC(4, 2) NOT NULL CHECK (elasticity BETWEEN 0 AND 100),
  oil_balance     NUMERIC(4, 2) NOT NULL CHECK (oil_balance BETWEEN 0 AND 100),
  sensitivity     NUMERIC(4, 2) NOT NULL CHECK (sensitivity BETWEEN 0 AND 100),
  confidence      NUMERIC(4, 2) NOT NULL CHECK (confidence BETWEEN 0 AND 100),
  ai_summary      TEXT NOT NULL,
  recommendations JSONB NOT NULL DEFAULT '[]',
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS analysis_reports_scan_id_idx ON public.analysis_reports(scan_id);
CREATE INDEX IF NOT EXISTS analysis_reports_overall_score_idx ON public.analysis_reports(overall_score);

-- ── routines ──────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.routines (
  id             UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id        UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  report_id      UUID NOT NULL REFERENCES public.analysis_reports(id) ON DELETE CASCADE,
  morning_steps  JSONB NOT NULL DEFAULT '[]',
  evening_steps  JSONB NOT NULL DEFAULT '[]',
  weekly_steps   JSONB NOT NULL DEFAULT '[]',
  created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS routines_user_id_idx ON public.routines(user_id);

-- ── products ──────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.products (
  id           UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name         TEXT NOT NULL,
  brand        TEXT NOT NULL,
  category     TEXT NOT NULL,
  ingredients  TEXT[] DEFAULT '{}',
  description  TEXT NOT NULL,
  image        TEXT,
  purchase_url TEXT
);

-- ── product_recommendations ───────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.product_recommendations (
  report_id   UUID NOT NULL REFERENCES public.analysis_reports(id) ON DELETE CASCADE,
  product_id  UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  reason      TEXT NOT NULL,
  confidence  NUMERIC(4, 2) NOT NULL CHECK (confidence BETWEEN 0 AND 100),
  PRIMARY KEY (report_id, product_id)
);

-- ── simulations ───────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.simulations (
  id           UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  report_id    UUID NOT NULL UNIQUE REFERENCES public.analysis_reports(id) ON DELETE CASCADE,
  week_2       JSONB NOT NULL,
  week_4       JSONB NOT NULL,
  week_8       JSONB NOT NULL,
  generated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =========================================================
-- ROW LEVEL SECURITY
-- Users can only access their own data.
-- =========================================================

ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.scans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analysis_reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.routines ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_recommendations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.simulations ENABLE ROW LEVEL SECURITY;

-- users
CREATE POLICY "Users can read own row" ON public.users FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own row" ON public.users FOR UPDATE USING (auth.uid() = id);

-- profiles
CREATE POLICY "Users can manage own profile" ON public.profiles
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- scans
CREATE POLICY "Users can manage own scans" ON public.scans
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- analysis_reports (via scan ownership)
CREATE POLICY "Users can read own reports" ON public.analysis_reports FOR SELECT
  USING (EXISTS (SELECT 1 FROM public.scans WHERE scans.id = analysis_reports.scan_id AND scans.user_id = auth.uid()));

-- routines
CREATE POLICY "Users can manage own routines" ON public.routines
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- products (public read — manually curated catalog)
CREATE POLICY "Products are publicly readable" ON public.products FOR SELECT USING (TRUE);

-- product_recommendations (via report/scan ownership)
CREATE POLICY "Users can read own recommendations" ON public.product_recommendations FOR SELECT
  USING (EXISTS (
    SELECT 1 FROM public.analysis_reports ar
    JOIN public.scans s ON s.id = ar.scan_id
    WHERE ar.id = product_recommendations.report_id AND s.user_id = auth.uid()
  ));

-- simulations (via report ownership)
CREATE POLICY "Users can read own simulations" ON public.simulations FOR SELECT
  USING (EXISTS (
    SELECT 1 FROM public.analysis_reports ar
    JOIN public.scans s ON s.id = ar.scan_id
    WHERE ar.id = simulations.report_id AND s.user_id = auth.uid()
  ));

-- =========================================================
-- STORAGE BUCKETS
-- All buckets are private. Access via signed URLs only.
-- =========================================================

INSERT INTO storage.buckets (id, name, public)
VALUES
  ('profile-images', 'profile-images', FALSE),
  ('scan-images', 'scan-images', FALSE),
  ('processed-images', 'processed-images', FALSE)
ON CONFLICT (id) DO NOTHING;

-- Storage RLS: users can only manage their own files
-- Path convention: {user_id}/{filename}

CREATE POLICY "Users upload own profile images" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'profile-images' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users read own profile images" ON storage.objects
  FOR SELECT USING (bucket_id = 'profile-images' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users upload own scan images" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'scan-images' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users read own scan images" ON storage.objects
  FOR SELECT USING (bucket_id = 'scan-images' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users read own processed images" ON storage.objects
  FOR SELECT USING (bucket_id = 'processed-images' AND auth.uid()::text = (storage.foldername(name))[1]);
