import React from "react";
// components

import Navbar from "../components/dashboard/navbar";
//import Sidebar from "../components/dashboard/sidebar.js";
import Footer from "../components/dashboard/footer.js";

//import { ConnectWallet, useAddress } from "@thirdweb-dev/react";

export default function LayoutDashboard({ children }) {
  //export default async function LayoutDashboard({ children }) {
  //const address = useAddress();
  //const address = useAccount();
  return (
    <div className="relative h-full w-full mx-auto px-8">
      <Navbar />
      {/* Header */}
      <div className="relative mb-4">
        <div className="mx-auto w-full">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
