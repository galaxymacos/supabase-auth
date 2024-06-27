import React from "react";
import { Button } from "@/components/ui/button";
import { login, logout } from "@/app/(reference)/login/action";
import { createClient } from "@/utils/supabase/server";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const ServerPage = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  // if (error || !data?.user) {
  //     redirect("/login")
  // }

  const logoutAction = async (formData: FormData) => {
    "use server";
    await logout(formData, "/server");
  };

  return (
    <div
      className={
        "flex flex-col gap-y-3 items-center justify-center min-h-screen"
      }
    >
      {error || !data?.user ? (
        <div className={"flex flex-col gap-y-8 items-center"}>
          <p>Hello guest</p>
          <div className={"flex gap-x-8"}>
            <Button asChild={true}>
              <Link href={"/server/sign-in"}>Sign in</Link>
            </Button>
            <Button asChild={true}>
              <Link href={"/server/sign-up"}>Sign up</Link>
            </Button>
          </div>
        </div>
      ) : (
        <div className={"flex flex-col items-center gap-y-4"}>
          <p>
            Current user email:{" "}
            <span className={"font-semibold"}>{data.user.email}</span>
          </p>

          <form action={logoutAction}>
            <Button type={"submit"}>Sign out</Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ServerPage;
