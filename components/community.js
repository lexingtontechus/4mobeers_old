"use client";
import prettier from "prettier";
import React from "react";
import SectionTitle from "../components/sectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Text, Button, Link } from "@nextui-org/react";
import { useAccount, useConnect } from "wagmi";
import { useSession } from "next-auth/react";

export default function Community() {
  const { address, isConnected, isDisconnected } = useAccount();
  const { data: session, status } = useSession();
  return (
    <div id="community" className="my-8">
      {/*{status == "connected" ? (*/}

      {session?.user && isConnected ? (
        <SectionTitle
          pretitle="Welcome To The Community"
          title="Join Our Discord"
        >
          Update your profile to receive exclusive airdrops & offerings. Find
          other members in our Discord.
        </SectionTitle>
      ) : (
        <SectionTitle
          pretitle="Join The Community"
          title="Exclusive Access"
          id="community"
        >
          Connect your wallet. Sign In. Update your profile to receive exclusive
          airdrops & offerings.
        </SectionTitle>
      )}

      <div className="dark:truePink-400 mx-auto flex w-full max-w-4xl flex-wrap items-center justify-between gap-5 rounded-xl bg-trueZinc-100 px-7 py-7 text-trueZinc-700 lg:flex-nowrap lg:px-12 lg:py-12">
        <div className="flex-grow text-center lg:text-left">
          <div>
            <h2 className="text-2xl font-medium uppercase text-trueZinc-700 dark:text-truePink-400 lg:text-3xl">
              {session?.user && isConnected ? (
                <>Join Our Discord</>
              ) : (
                <>Connect Your Wallet</>
              )}
            </h2>
          </div>

          <p className="text-2xl font-medium text-trueZinc-700 dark:text-truePink-400 lg:text-3xl"></p>
          <p className="mt-2 font-medium text-trueZinc-700 text-opacity-90 dark:text-truePink-400 lg:text-xl"></p>
        </div>
        <div className="mx-auto flex-shrink-0 text-center lg:w-auto">
          <div className="button primary relative mx-auto block inline-block w-full w-full rounded-md bg-trueFushia-700 uppercase text-trueZinc-100">
            {session?.user && isConnected ? (
              <>
                <Link
                  href="https://discord.gg/d6KnD7V2gs"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    auto
                    ripple
                    animated
                    css={{ color: "#f4f4f5", background: "#a21caf" }}
                  >
                    <Text color="#f4f4f5" size="$md" weight="semibold">
                      DISCORD
                    </Text>
                  </Button>
                </Link>
              </>
            ) : (
              <ConnectButton
                label="CONNECT"
                chainStatus="none"
                showBalance={false}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
