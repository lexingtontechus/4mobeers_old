'use client';
import prettier from "prettier";
import React from "react";
import SectionTitle from "./sectionTitle";
import PartnerModal from "./partners/partnermodal";

export default function Partner() {
  return (
    <div id="partners" className="my-8">
      <SectionTitle pretitle="Become A Partner" title="Join Our NIL Program">
        Partner with the 4MoBeers Community and create your own 4MoBeers NFT
        Collectibles Edition using the Name Image & Likeness (NIL) of your
        company and/or your staff.
      </SectionTitle>
      <div className="dark:truePink-400 mx-auto flex w-full max-w-4xl flex-wrap items-center justify-between gap-5 rounded-xl bg-trueZinc-100 px-7 py-7 text-trueZinc-700 lg:flex-nowrap lg:px-12 lg:py-12">
        <div className="flex-grow text-center lg:text-left">
          <div>
            <h2 className="text-2xl font-medium uppercase text-trueZinc-700 dark:text-truePink-400 lg:text-3xl">
              Join Our Program
            </h2>
          </div>

          <p className="text-2xl font-medium text-trueZinc-700 dark:text-truePink-400 lg:text-3xl"></p>
          <p className="mt-2 font-medium text-trueZinc-700 text-opacity-90 dark:text-truePink-400 lg:text-xl"></p>
        </div>
        <div className="mx-auto flex-shrink-0 text-center lg:w-auto">
          <PartnerModal />
        </div>
      </div>
    </div>
  );
}
