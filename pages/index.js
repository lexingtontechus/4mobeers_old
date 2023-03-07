"use client";

import SEO from "../components/seo";
import Layout from "../layouts/layout.js";

import { useAccount, useConnect } from "wagmi";
import { useState, useEffect } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";

export default function Home() {
 
  return (
    <>
      <SEO title="Home | 4MoBeers" description="Home 4MoBeers." />
      <Layout></Layout>
    </>
  );
}
