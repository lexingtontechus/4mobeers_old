import React from "react";
import Link from "next/link";
import Container from "./container";

export default function Cta() {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-trueZinc-700 dark:trueZinc-100 bg-trueZinc-50 dark:bg-trueZinc-800 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl text-trueZinc-700 dark:text-trueZinc-100">
            Ready to explore our ventures with 0xaloysius?
          </h2>
          <p className="mt-2 font-medium text-trueZinc-700 dark:text-trueZinc-100 text-opacity-90 lg:text-xl"></p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <Link
            href="/portfolio"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-trueZinc-100 bg-truePurple-600 rounded-md px-7 lg:px-10 lg:py-5 "
          >
            View The Portfolio
          </Link>
        </div>
      </div>
    </Container>
  );
}
