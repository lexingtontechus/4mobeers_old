import React from "react";
import Link from "next/link";
import Container from "./container";
import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";

export default function Cta() {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-trueZinc-700 dark:truePink-400 bg-trueZinc-100 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl text-trueZinc-700 dark:text-truePink-400 uppercase">
            Join the whitelist!!!
          </h2>
          <p className="text-2xl font-medium lg:text-3xl text-trueZinc-700 dark:text-truePink-400"></p>
          <p className="mt-2 font-medium text-trueZinc-700 dark:text-truePink-400 text-opacity-90 lg:text-xl"></p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <div className="{styles.connect}">
            <ConnectWallet />
          </div>
          {/*      <Link
            href="/portfolio"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-truePink-400 bg-truePurple-600 rounded-md px-7 lg:px-10 lg:py-5 "
          >
            View The Portfolio
          </Link>*/}
        </div>
      </div>
    </Container>
  );
}
