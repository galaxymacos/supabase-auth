"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { UserResponse } from "@supabase/auth-js";

const ClientHomePage = () => {
  const [client, setClient] = useState<undefined | UserResponse>(undefined);
  const supabase = createClient();

  useEffect(() => {
    const setup = async () => {
      const user = await supabase.auth.getUser();
      setClient(user);
    };
    setup();
  }, []);

  if (client === undefined) {
    return (
      <div className={"flex flex-col items-center justify-center h-screen"}>
        Loading...
      </div>
    );
  }
  return (
    <div className={"flex flex-col justify-center items-center h-screen"}>
      {client && <>client: {client.data.user?.email}</>}
      {!client && <>no client</>}
    </div>
  );
};

export default ClientHomePage;
