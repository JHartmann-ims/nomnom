import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    process.env.SUPABASE_URL as string, 
    process.env.SUPABASE_ANON_KEY as string
);
}