import React from "react";
import Container from "./container";

import SectionTitle from "./sectionTitle";
import PartnerModal from "./partners/partnermodal";

export default function Partner() {
  return (
    <Container>
      <SectionTitle
        pretitle="Become A Partner"
        title="Join Our NIL Program"
        id="partners"
      >
        Partner with the 4MoBeers Community and create your own 4MoBeers NFT
        Collectibles Edition using the Name Image & Likeness (NIL) of your
        company and/or your staff.
      </SectionTitle>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-trueZinc-700 dark:truePink-400 bg-trueZinc-100 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <div>
            <h2 className="text-2xl font-medium lg:text-3xl text-trueZinc-700 dark:text-truePink-400 uppercase">
              Join Our Program
            </h2>
          </div>

          <p className="text-2xl font-medium lg:text-3xl text-trueZinc-700 dark:text-truePink-400"></p>
          <p className="mt-2 font-medium text-trueZinc-700 dark:text-truePink-400 text-opacity-90 lg:text-xl"></p>
        </div>
        <div className="flex-shrink-0 mx-auto text-center lg:w-auto">
          <PartnerModal />
        </div>
      </div>
    </Container>
  );
}
