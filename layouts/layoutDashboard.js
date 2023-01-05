import React from "react";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
// components

import Navbar from "../components/dashboard/navbar";
//import Sidebar from "../components/dashboard/sidebar.js";

import Footer from "../components/dashboard/footer.js";

export default function LayoutDashboard({ children }) {
  //export default async function LayoutDashboard({ children }) {

  return (
    <>
      <div className="relative h-full w-full mx-auto px-8">
        <Navbar />
        {/* Header */}
        <div className="relative mb-4">
          <div className="mx-auto w-full">{children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient(ctx);
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };

  return {
    props: {
      initialSession: session,
      user: session.user,
    },
  };
};
