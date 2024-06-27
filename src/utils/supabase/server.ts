import {cookies} from "next/headers";
import {CookieOptions, createServerClient} from "@supabase/ssr";


/**
 * To access Supabase from Server Components, Server Actions, and Route Handlers, which run only on the server.
 * It basically configures a fetch call. You need to configure the fetch call anew for every request to your server, because you need the cookies from the request.
 */
export function createClient() {
    // the cookies object lets the Supabase client know how to access the cookies, so it can read and write the user session data.
    const cookieStore = cookies();

    return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
        cookies: {
            getAll() {
                return cookieStore.getAll()
            },
            setAll(cookiesToSet) {
                cookiesToSet.forEach(({name, value, options}) => cookieStore.set(name, value, options))
            }
        }
    })

}