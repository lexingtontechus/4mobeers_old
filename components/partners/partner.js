import React from "react";
import Container from "../components/container";
import SectionTitle from "../components/sectionTitle";
import PartnerModal from "./partnermodal";

export default function Partner() {
  return (
    <Container>
      <SectionTitle
        pretitle="Become A Partner"
        title="NIL Program"
        id="partners"
      >
        Connect your wallet. Sign In & Update your email address in profile
        settings to receive exclusive airdrops & offerings.
      </SectionTitle>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-trueZinc-700 dark:truePink-400 bg-trueZinc-100 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <div>
            <h2 className="text-2xl font-medium lg:text-3xl text-trueZinc-700 dark:text-truePink-400 uppercase">
              Join Our Partners NIL Program
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
