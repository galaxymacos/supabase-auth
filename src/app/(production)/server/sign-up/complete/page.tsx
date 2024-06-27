import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SignUpComplete = () => {
  return (
    <div
      className={"flex flex-col items-center justify-center h-screen gap-y-4"}
    >
      Sign up complete
      <Button asChild={true}>
        <Link href={"/server"}>Redirect to Home</Link>
      </Button>
    </div>
  );
};

export default SignUpComplete;
