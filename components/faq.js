import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { Button, Collapse, css, Text } from "@nextui-org/react";
import SectionTitle from "../components/sectionTitle";

import styles from "../styles/FAQs.module.scss";

export default function Faq() {
  return (
    <>
      <div id="faqs" className="my-8">
        
        <h1 className="uppercase text-center text-8xl xl:text-9xl font-black animate-linear bg-gradient-to-r from-trueBlue-500 via-trueOrange-500 to-trueBlue-500 bg-[length:200%_auto] bg-clip-text text-transparent">
          FAQs
        </h1>
         <SectionTitle
            pretitle="Ask Us Anything"
            title="Learn More"
          >
            How to partner and build your community with 4MoBeers?
          </SectionTitle>

        <div className="mt-4 flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-trueZinc-700 dark:truePink-400 bg-trueZinc-100 p-8 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
          <div className="w-full mx-auto rounded-2xl">
            <Disclosure>
              {({ open }) => (
                <>
                  <Collapse.Group splitted>
                    <Collapse
                      title="4MoBeers DAO"
                      subtitle={
                        <>
                          <Text
                            color="#db2777"
                            css={{
                              fontSize: "$sm",
                            }}
                          >
                            What is the 4MoBeers DAO?
                          </Text>
                        </>
                      }
                      arrowIcon={
                        <ChevronUpIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-5 h-5 text-truePink-600`}
                        />
                      }
                    >
                      <Text
                        css={{
                          fontSize: "$xs",
                        }}
                        color="#3f3f46"
                      >
                        Thank you for choosing to be part of our community at
                        4MoBeers DAO Inc, doing business as 4MoBeers. We are
                        creating a Beerverse that supports the beer community
                        and roadie lovers. The 4MoBeers DAO will orchestrate the
                        goverance, voting, airdrops, splits, management & security of smart contracts.
                      </Text>
                      <Text
                        css={{
                          fontSize: "$xs",
                        }}
                        color="#3f3f46"
                      >
                        4MoBeers will be responsible for the design & creation
                        of each Non-Fungible Token (NFT).
                      </Text>
                      <Text
                        css={{
                          fontSize: "$xs",
                        }}
                        color="#3f3f46"
                      >
                        Each NFT will be offered at a fixed price.
                      </Text>
                      <Text
                        css={{
                          fontSize: "$xs",
                        }}
                        color="#3f3f46"
                      >
                        Each NIL owner will be their own limited edition NFT
                        set, to be managed at their own discretion.
                      </Text>
                      <Text
                        css={{
                          fontSize: "$xs",
                        }}
                        color="#3f3f46"
                      >
                        Ongoing royalities will be attributed to the NIL owner
                        only, not the DAO.
                      </Text>
                    </Collapse>
                    <Collapse
                      title="NFT Collectibles Edition"
                      subtitle={
                        <>
                          <Text
                            color="#db2777"
                            css={{
                              fontSize: "$sm",
                            }}
                          >
                            What is the 4MoBeers NFT Collectibles Edition?
                          </Text>
                        </>
                      }
                      arrowIcon={
                        <ChevronUpIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-5 h-5 text-truePink-600`}
                        />
                      }
                    >
                      <Text
                        css={{
                          fontSize: "$xs",
                        }}
                        color="#3f3f46"
                      >
                        The 4MoBeer NFT Collectibles Edition will support the
                        Name, Image & Likeness (NIL) of nominated & voted on
                        community partners.
                      </Text>
                    </Collapse>
                    <Collapse
                      title="NFT Signature Series"
                      subtitle={
                        <>
                          <Text
                            color="#db2777"
                            css={{
                              fontSize: "$sm",
                            }}
                          >
                            What is the 4MoBeers NFT Signature Series?
                          </Text>
                        </>
                      }
                      arrowIcon={
                        <ChevronUpIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-5 h-5 text-truePink-600`}
                        />
                      }
                    >
                      <Text
                        css={{
                          fontSize: "$xs",
                        }}
                        color="#3f3f46"
                      >
                        The 4MoBeer NFT Collectibles Edition will support the
                        Name Image & Likeness (NIL) of nominated & voted on
                        community members.
                      </Text>
                    </Collapse>
                       <Collapse
                      title="Connecting A Wallet"
                      subtitle={
                        <>
                          <Text
                            color="#db2777"
                            css={{
                              fontSize: "$sm",
                            }}
                          >
                            Which wallets are supported?
                          </Text>
                        </>
                      }
                      arrowIcon={
                        <ChevronUpIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-5 h-5 text-truePink-600`}
                        />
                      }
                    >
                      <Text
                        css={{
                          fontSize: "$xs",
                        }}
                        color="#3f3f46"
                      >
                        The dApp is integrated with Rainbow Wallet. Rainbow Wallet & Wallet Connect support security notifications for sign-in verificaton and secure DAO messages.
                      </Text>
                    </Collapse>
                    <Collapse
                      title="Partners & Collabs"
                      subtitle={
                        <>
                          <Text
                            color="#db2777"
                            css={{
                              fontSize: "$sm",
                            }}
                          >
                            How do I work with 4MoBeers?
                          </Text>
                        </>
                      }
                      arrowIcon={
                        <ChevronUpIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-5 h-5 text-truePink-600`}
                        />
                      }
                    >
                      <Text
                        css={{
                          fontSize: "$xs",
                        }}
                        color="#3f3f46"
                      >
                        We love colabs! Send us a message or Beer Us!
                      </Text>
                    </Collapse>
                    <Collapse
                      title="Hire Me"
                      subtitle={
                        <>
                          <Text
                            color="#db2777"
                            css={{
                              fontSize: "$sm",
                            }}
                          >
                            Is 4MoBeers hiring?
                          </Text>
                        </>
                      }
                      arrowIcon={
                        <ChevronUpIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-5 h-5 text-truePink-600`}
                        />
                      }
                    >
                      <Text
                        css={{
                          fontSize: "$xs",
                        }}
                        color="#3f3f46"
                      >
                        Yes, we are growing the Beerverse community one beer for
                        the road at a time.
                      </Text>
                    </Collapse>
                    <Collapse
                      title="Who is 4MoBeers?"
                      subtitle={
                        <>
                          <Text
                            color="#db2777"
                            css={{
                              fontSize: "$sm",
                            }}
                          >
                            Hint ... Beer us?
                          </Text>
                        </>
                      }
                      arrowIcon={
                        <ChevronUpIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-5 h-5 text-truePink-600`}
                        />
                      }
                    >
                      <Text
                        css={{
                          fontSize: "$xs",
                        }}
                        color="#3f3f46"
                      >
                        Beer us!
                      </Text>
                    </Collapse>
                  </Collapse.Group>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
    </>
  );
}
