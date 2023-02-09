import React from "react";
import Container from "./container";
import SectionTitle from "../components/sectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button, Link } from "@nextui-org/react";
import ProfileModal from "../components/dashboard/profilemodal";

export default function Community({ address }) {
  return (
    <Container>
      <SectionTitle
        pretitle="Join The Community"
        title="Exclusive Access"
        id="community"
      >
        Connect your wallet. Sign In. Update your profile to receive exclusive
        airdrops & offerings.
      </SectionTitle>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-trueZinc-700 dark:truePink-400 bg-trueZinc-100 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <div>
            {!address && (
              <h2 className="text-2xl font-medium lg:text-3xl text-trueZinc-700 dark:text-truePink-400 uppercase">
                Connect Your Wallet
              </h2>
            )}
            {address && (
              <h2 className="text-2xl font-medium lg:text-3xl text-trueZinc-700 dark:text-truePink-400 uppercase">
                Join Our Discord
              </h2>
            )}
          </div>

          <p className="text-2xl font-medium lg:text-3xl text-trueZinc-700 dark:text-truePink-400"></p>
          <p className="mt-2 font-medium text-trueZinc-700 dark:text-truePink-400 text-opacity-90 lg:text-xl"></p>
        </div>
        <div className="flex-shrink-0 mx-auto text-center lg:w-auto">
          {!address && (
            <div className="relative mx-auto inline-block uppercase button primary block bg-truePurple-900 rounded-md w-full text-trueZinc-100 mx-auto w-full">
              <ConnectButton label="CONNECT" />
            </div>
          )}
          {address && (
            <Link
              href="https://discord.gg/d6KnD7V2gs"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                className="uppercase button primary block bg-truePurple-900 rounded-md p-2 w-full text-trueZinc-100 mx-auto w-full"
                auto
                shadow
                css={{ color: "#f4f4f5", background: "#581c87" }}
                icon={<FontAwesomeIcon icon={faDiscord} />}
              >
                Discord
              </Button>
            </Link>
          )}
        </div>
      </div>
    </Container>
  );
}
