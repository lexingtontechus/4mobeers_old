import React from "react";

// components

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Team from "../components/team";
import Whitelist from "../components/whitelist";
import Hero from "../components/hero";

import Cal from "../components/cal";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

import stylesteam from "../styles/Team.module.scss";

export default function Layout({ children }) {
  return (
    <>
      <div className="relative h-full w-full mx-auto px-8">
        <Navbar />
        <Hero className="mt-4" />
        <div className="relative mb-4">
          <div className="mx-auto w-full">{children}</div>
        </div>
        
          <Faq />
        
        
          <Team className="mt-4" />
        

        <Footer />
        <PopupWidget />
        <Cal />
      </div>
    </>
  );
}
