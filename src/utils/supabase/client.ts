import { createBrowserClient } from "@supabase/ssr"

/**
 * Create a supabase auth client for use in the browser
 */
export function createClient() {
    // createBrowserClient uses a singleton pattern, so there is only one instance no matter how many times this line is call
    return createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
}