import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

const isConfigured = Boolean(
  supabaseUrl &&
    supabaseAnonKey &&
    !supabaseUrl.includes("your-project-ref") &&
    !supabaseAnonKey.includes("your-supabase-anon-key-here")
);

if (!isConfigured && typeof window !== "undefined") {
  console.warn(
    "[Supabase] Environment variables missing. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local"
  );
}

// Singleton client instance for browser and client components
export const supabase: SupabaseClient = createClient(
  isConfigured ? supabaseUrl : "https://placeholder-project.supabase.co",
  isConfigured ? supabaseAnonKey : "placeholder-anon-key"
);

/**
 * Returns true if Supabase credentials are configured in environment variables.
 */
export function isSupabaseConfigured(): boolean {
  return isConfigured;
}
