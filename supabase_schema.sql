-- DIGNIFY CMS Supabase Database Schema
-- Run this SQL in your Supabase Dashboard SQL Editor (https://supabase.com/dashboard/project/hzfcwarsknxbmsvkpgdr/sql)

-- 1. Projects Table
CREATE TABLE IF NOT EXISTS public.projects (
  slug TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  status TEXT NOT NULL,
  year INT4 NOT NULL,
  summary TEXT NOT NULL,
  overview TEXT,
  challenge TEXT,
  approach TEXT,
  solution TEXT,
  process JSONB,
  gallery JSONB,
  tech JSONB,
  reflection TEXT,
  next_slug TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Services Table
CREATE TABLE IF NOT EXISTS public.services (
  slug TEXT PRIMARY KEY,
  index_code TEXT NOT NULL,
  title TEXT NOT NULL,
  tagline TEXT NOT NULL,
  description TEXT NOT NULL,
  deliverables JSONB,
  tags JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Contact Submissions Table
CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id TEXT PRIMARY KEY,
  reference TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  service TEXT NOT NULL,
  budget TEXT NOT NULL,
  timeline TEXT NOT NULL,
  description TEXT NOT NULL,
  reference_url TEXT,
  status TEXT NOT NULL DEFAULT 'New',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Studio Settings Table
CREATE TABLE IF NOT EXISTS public.studio_settings (
  id INT PRIMARY KEY DEFAULT 1,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  location TEXT NOT NULL,
  domain TEXT NOT NULL,
  description TEXT NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS) and allow public read & write access for API/anon key
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.studio_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read projects" ON public.projects FOR SELECT USING (true);
CREATE POLICY "Public write projects" ON public.projects FOR ALL USING (true);

CREATE POLICY "Public read services" ON public.services FOR SELECT USING (true);
CREATE POLICY "Public write services" ON public.services FOR ALL USING (true);

CREATE POLICY "Public read contact_submissions" ON public.contact_submissions FOR SELECT USING (true);
CREATE POLICY "Public write contact_submissions" ON public.contact_submissions FOR ALL USING (true);

CREATE POLICY "Public read studio_settings" ON public.studio_settings FOR SELECT USING (true);
CREATE POLICY "Public write studio_settings" ON public.studio_settings FOR ALL USING (true);
