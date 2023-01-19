import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { Collapse } from "@nextui-org/react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export default function Faq() {
  return (
    <>
      <Container>
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
                      title="The 4MoBeers DAO Beerverse"
                      arrowIcon={
                        <ChevronUpIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-5 h-5 text-truePurple-900`}
                        />
                      }
                    >
                      <p className="text-md text-trueZinc-700">
                        The 4MoBeer DAO & Beerverse community is not,
                        <ul>
                          <li className="text-trueZinc-700">
                            <FontAwesomeIcon
                              icon={faCircleXmark}
                              className="text-trueRed-500 mr-2"
                            />
                            A Metaverse or WEB3 game
                          </li>
                          <li className="text-trueZinc-700">
                            <FontAwesomeIcon
                              icon={faCircleXmark}
                              className="text-trueRed-500 mr-2"
                            />
                            Affiliated with or creating any Metaverse or WEB3
                            game
                          </li>
                          <li className="text-trueZinc-700">
                            <FontAwesomeIcon
                              icon={faCircleXmark}
                              className="text-trueRed-500 mr-2"
                            />
                            A Crypto-exchange
                          </li>
                          <li className="text-trueZinc-700">
                            <FontAwesomeIcon
                              icon={faCircleXmark}
                              className="text-trueRed-500 mr-2"
                            />
                            A Cryptocurrency
                          </li>
                          <li className="text-trueZinc-700 mr-2">
                            <FontAwesomeIcon
                              icon={faCircleXmark}
                              className="text-trueRed-500 mr-2"
                            />
                            A Token
                          </li>
                        </ul>
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
