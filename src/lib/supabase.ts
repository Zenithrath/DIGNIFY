import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://hzfcwarsknxbmsvkpgdr.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6ZmN3YXJza254Ym1zdmtwZ2RyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYwMzc4MjksImV4cCI6MjEwMTYxMzgyOX0.Cji8aJ1VBNOvngv2YbcYvsU8emA8-ic64hnz72szG-I";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
