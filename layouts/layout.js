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

import stylesfaq from "../styles/FAQs.module.scss";
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
        <div
          className={stylesfaq.faq}
          data-aos="zoom-in-up"
          data-aos-delay="50"
          data-aos-duration="2500"
          id="faqs"
        >
          <h1 className="text-8xl xl:text-9xl">FAQs</h1>
          <h2 className="text-center max-w-2xl mt-3 text-2xl font-bold leading-snug tracking-tight text-trueZinc-700 dark:text-trueZinc-100 lg:leading-tight lg:text-4xl dark:text-white">
            How to partner and build your community with 4MoBeers?
          </h2>
          <Faq />
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="2500"
          id="team"
          className={stylesteam.team}
        >
          <h1>The Brew Crew</h1>
          <Team className="mt-4" />
        </div>

        <Footer />
        <PopupWidget />
        <Cal />
      </div>
    </>
  );
}
