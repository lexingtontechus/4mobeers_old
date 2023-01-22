import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { Collapse } from "@nextui-org/react";

import styles from "../styles/FAQs.module.scss";

export default function Faq() {
  return (
    <>
      <Container className={styles.faq}>
        <div
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="2500"
          id="faqs"
          className={styles.row}
        >
          <h1 className="text-center text-8xl xl:text-9xl animate-fade-out">
            FAQs
          </h1>
          <h2 className="text-center max-w-2xl mt-3 text-2xl font-bold leading-snug tracking-tight text-trueZinc-700 dark:text-trueZinc-100 lg:leading-tight lg:text-4xl dark:text-white">
            How to partner and build your community with 4MoBeers?
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-trueZinc-700 dark:truePink-400 bg-trueZinc-100 p-8 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
          <div className="w-full p-8 mx-auto rounded-2xl">
            <Disclosure>
              {({ open }) => (
                <>
                  <Collapse.Group
                    splitted
                    className="text-trueZinc-700 dark:text-trueZinc-100"
                  >
                    <Collapse
                      title="What is the 4MoBeers DAO?"
                      arrowIcon={
                        <ChevronUpIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-5 h-5 text-truePurple-900`}
                        />
                      }
                    >
                      <p className="text-md text-trueZinc-700">
                        Thank you for choosing to be part of our community at
                        4MoBeers DAO Inc, doing business as 4MoBeers. We are
                        creating a Beerverse that supports the beer community
                        and roadie lovers. The 4MoBeers DAO will orchestrate the
                        goverance, voting, airdrops, splits and
                        management/security of smart contracts.
                      </p>
                      <p className="text-md text-trueZinc-700">
                        4MoBeers will be responsible for the design & creation
                        of each Non-Fungible Token (NFT).
                      </p>
                      <p className="text-md text-trueZinc-700">
                        Each NFT will be offered at a fixed price.
                      </p>
                      <p className="text-md text-trueZinc-700">
                        Each NIL owner will be their own limited edition NFT
                        set, to be managed at their own discretion.
                      </p>
                      <p className="text-md text-trueZinc-700">
                        Ongoing royalities will be attributed to the NIL owner
                        only, not the DAO.
                      </p>
                    </Collapse>
                    <Collapse
                      title="What is the 4MoBeers NFT Collectibles Edition?"
                      arrowIcon={
                        <ChevronUpIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-5 h-5 text-truePurple-900`}
                        />
                      }
                    >
                      <p className="text-md text-trueZinc-700">
                        The 4MoBeer NFT Collectibles Edition will support the
                        Name, Image & Likeness (NIL) of nominated & voted on
                        community partners.
                      </p>
                    </Collapse>
                    <Collapse
                      title="What is the 4MoBeers NFT Signature Series?"
                      arrowIcon={
                        <ChevronUpIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-5 h-5 text-truePurple-900`}
                        />
                      }
                    >
                      <p className="text-md text-trueZinc-700">
                        The 4MoBeer NFT Collectibles Edition will support the
                        Name Image & Likeness (NIL) of nominated & voted on
                        community members.
                      </p>
                    </Collapse>
                    <Collapse
                      title="How do I work with 4MoBeers?"
                      arrowIcon={
                        <ChevronUpIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-5 h-5 text-truePurple-900`}
                        />
                      }
                    >
                      <p className="text-md text-trueZinc-700">
                        We love colabs! Send us a message or Beer Us!
                      </p>
                    </Collapse>
                    <Collapse
                      title="Is 4MoBeers hiring?"
                      arrowIcon={
                        <ChevronUpIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-5 h-5 text-truePurple-900`}
                        />
                      }
                    >
                      <p className="text-md text-trueZinc-700">
                        Yes, we are growing the Beerverse community one beer for
                        the road at a time.
                      </p>
                    </Collapse>
                    <Collapse
                      title="Who is 4MoBeers?"
                      arrowIcon={
                        <ChevronUpIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-5 h-5 text-truePurple-900`}
                        />
                      }
                    >
                      <p className="text-md text-trueZinc-700">Beer me!</p>
                    </Collapse>
                  </Collapse.Group>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </Container>
    </>
  );
}
