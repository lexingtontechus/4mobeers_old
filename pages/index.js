"use client";

import SEO from "../components/seo";
import Layout from "../layouts/layout.js";

import { useAccount, useConnect } from "wagmi";
import { useState, useEffect } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";

export default function Home() {
  const { supabase } = useSupabaseClient();
  const user = useUser();
  const { status, address, connector: activeConnector } = useAccount();
  const { connectors } = useConnect();
  const [data, setData] = useState();
  const provider = { activeConnector };

  useEffect(() => {
    async function loadData() {
      const { data } = await supabase
        .from("user")
        .select("*")
        .eq("walletaddress", address)
        .single();
      setData(data);
      if (!data) {
        await supabase.from("users").insert({
          walletaddress: address,
          provider: provider,
        });
      }
    }
    // Only run query once user is logged in.
    if (user) loadData();
  }, [user]);

  return (
    <>
      <SEO title="Home | 4MoBeers" description="Home 4MoBeers." />
      <Layout></Layout>
    </>
  );
}
