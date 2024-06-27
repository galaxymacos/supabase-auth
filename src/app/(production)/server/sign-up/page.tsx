import React from "react";
import { login, signup } from "@/app/(reference)/login/action";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SignupPage = () => {
  const signUpAction = async (formData: FormData) => {
    "use server";
    await signup(formData, "/server");
  };
  return (
    <div className={"flex flex-col items-center justify-center h-screen"}>
      <form
        action={signUpAction}
        className={"flex flex-col gap-y-3 items-center max-w-md w-full"}
      >
        <Label htmlFor={"email"}>Email</Label>
        <Input id={"email"} name={"email"} type={"email"} placeholder={""} />
        <Label htmlFor={"password"}>Password</Label>
        <Input
          id={"password"}
          name={"password"}
          type={"password"}
          placeholder={""}
        />
        <Button type={"submit"}>Sign up</Button>
      </form>
    </div>
  );
};

export default SignupPage;
