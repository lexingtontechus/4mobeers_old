import React from "react";

// components

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Team from "../components/team";

import Hero from "../components/hero";
import Community from "../components/community";
import Partners from "../components/partner";

import Cal from "../components/cal";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

import stylesteam from "../styles/Team.module.scss";

import { getSession } from "next-auth/react";
import { getToken } from "next-auth/jwt";

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  const token = await getToken({ req: context.req });
  const address = token?.sub ?? null;

  // If you have a value for "address" here, your
  // server knows the user is authenticated.
  // You can then pass any data you want
  // to the page component here.

  return {
    props: {
      address,
      session,
    },
  };
};

export default function Layout({ children, address }) {
  return (
    <>
      <div className="relative h-full w-full mx-auto px-8">
        <Navbar />

        <Hero />
        <div className="relative mb-4">
          <div className="mx-auto w-full">{children}</div>
        </div>
        <Community />
        <Partners />
        <Faq />
        <Team />
        <Footer />
        <PopupWidget />
        <Cal />
      </div>
    </>
  );
}
