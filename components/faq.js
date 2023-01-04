import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { Collapse } from "@nextui-org/react";
import Link from "next/link";

export default function Faq() {
  return (
    <>
      <Container>
        <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-trueZinc-700 dark:truePink-400 bg-trueZinc-100 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
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
                      expanded
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
                        4MoBeers Inc, doing business as 4MoBeers (&quot;4MoBeers
                        Inc.,&quot; &quot;we,&quot; &quot;us,&quot; or
                        &quot;our&quot;). We are creating a Beerverse that
                        supports the hospitality industry and roadie lovers. The
                        4MoBeers DAO will orchestrate the goverance, voting,
                        airdrops, splits and management/security of mdart
                        contracts.
                      </p>
                      <Link
                        className="text-md font-bold"
                        href="https://4mobeers.nft"
                      >
                        https://4mobeers.nft
                      </Link>
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
                        The 4MoBeer NFT Collectibles Edition will support
                        nominated hospitality staff.
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
                        The 4MoBeer NFT Collectibles Edition will support
                        nominated hospitality staff.
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
