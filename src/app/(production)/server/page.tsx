import React from 'react';
import {Button} from "@/components/ui/button";
import {login} from "@/app/login/action";
import {createClient} from "@/utils/supabase/server";
import {redirect} from "next/navigation";

const ServerPage = async () => {
    const supabase = createClient()

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect("/login")
    }
    return (
        <div className={"flex flex-col gap-y-3 items-center justify-center min-h-screen"}>
                <Button>Sign in</Button>
        </div>
    );
};

export default ServerPage;