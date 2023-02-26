import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useState, useEffect } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useAccount, useConnect } from "wagmi";

export default function RainbowConnect() {
  const { supabase } = useSupabaseClient();
  const { status, address, connector: activeConnector } = useAccount();
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const provider = { activeConnector };

  useEffect(() => {
    checkProfile();
  });
  async function checkProfile(address) {
    if (status == "isconnected") {
      //auth is initialized and there is no user
      let { data, error, status } = await supabase
        .from("users")
        .select("*")
        .eq("walletaddress", address)
        .single();

      if (!data) {
        await supabase.from("users").insert({
          walletaddress: address,
          provider: provider,
        });
      }
      if (res.error) {
        throw new Error("Failed to create user!");
      }
      if (error && status !== 406) {
        throw error;
      }
    }
  }

  return (
    <ConnectButton
      label="CONNECT"
      chainStatus="none"
      accountStatus={{
        smallScreen: "full",
        largeScreen: "full",
      }}
      showBalance="none"
    />
  );
}
