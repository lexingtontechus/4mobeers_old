import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ThemeProvider } from "next-themes";
import "../styles/tailwind.css";
import "../styles/custom.css";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import SEO from "../components/seo";

import { useEffect } from "react";

import "@rainbow-me/rainbowkit/styles.css";
import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import {
  injectedWallet,
  rainbowWallet,
  metaMaskWallet,
  coinbaseWallet,
  walletConnectWallet,
  braveWallet,
} from "@rainbow-me/rainbowkit/wallets";
import {
  RainbowKitSiweNextAuthProvider,
  GetSiweMessageOptions,
} from "@rainbow-me/rainbowkit-siwe-next-auth";

import { configureChains, createClient, WagmiConfig, useSigner } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, goerli } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

import { SessionProvider } from "next-auth/react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";

config.autoAddCss = false;

const { chains, provider, webSocketProvider } = configureChains(
  [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [goerli] : []),
  ],
  [publicProvider()]
);

const { wallets } = getDefaultWallets({
  appName: "4MoBeers DAO Inc.",
  chains,
});

const AppInfo = {
  appName: "4MoBeers DAO Inc.",
};

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: "Recommended",
    wallets: [
      //injectedWallet({ chains }),
      braveWallet({ chains }),
      //wallet.brave({ chains, shimDisconnect: true }),
      metaMaskWallet({ chains }),
      rainbowWallet({ chains }),
      walletConnectWallet({ chains }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider,
  webSocketProvider,
});

const Disclaimer = ({ Text, Link }) => (
  <Text>
    By connecting your wallet, you agree to the{" "}
    <Link href="https://4mobeers.nft/terms" target="_blank">
      TERMS
    </Link>{" "}
    and acknowledge you have read and understand the 4MoBeers{" "}
    <Link href="https://4mobeers.nft/privacy" target="_blank">
      PRIVACY
    </Link>
  </Text>
);

const getSiweMessageOptions = () => ({
  statement: "Sign in to 4MoBeers DAO",
});
//NextUI Theme
const theme = createTheme({
  type: "dark", // it could be "light" or "dark"
  theme: {
    colors: {
      primary: "#18181b",
      secondary: "#F9CB80",
      error: "#FCC5D8",
    },
  },
});

function MyApp({ Component, pageProps }) {
  const [supabase] = useState(() => createBrowserSupabaseClient());

  return (
    <WagmiConfig client={wagmiClient}>
      <SessionContextProvider
        supabaseClient={supabase}
        initialSession={pageProps.initialSession}
      >
        <SessionProvider session={pageProps.session} refetchInterval={0}>
          <RainbowKitSiweNextAuthProvider
            getSiweMessageOptions={getSiweMessageOptions}
          >
            <RainbowKitProvider
              coolMode
              appInfo={{
                appName: { AppInfo },
                disclaimer: Disclaimer,
              }}
              chains={chains}
              theme={darkTheme({
                accentColor: "#7e22ce",
                accentColorForeground: "#f4f4f5",
                borderRadius: "medium",
                overlayBlur: "small",
                shadows: {
                  connectButton: "#dc2626",
                },
              })}
            >
              <ThemeProvider attribute="class">
                <SEO />
                <Component {...pageProps} />
              </ThemeProvider>
            </RainbowKitProvider>
          </RainbowKitSiweNextAuthProvider>
        </SessionProvider>
      </SessionContextProvider>
    </WagmiConfig>
  );
}

export default MyApp;
