import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ThemeProvider } from "next-themes";
import "../styles/tailwind.css";
import "../styles/custom.css";
import { NextUIProvider } from "@nextui-org/react";
import SEO from "../components/seo";
import AOS from "aos";
import { useEffect } from "react";

import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mainnet;

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    {
      /*
    {
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    },
    {
      zoom : "zoom-in",
      once: true,
      offset: 50,
    }
     */
    }
  }, []);
  return (
    <ThirdwebProvider
      desiredChainId={activeChainId}
      authConfig={{
        domain: "localhost:3000",
        authUrl: "/api/auth",
        loginRedirect: "/",
      }}
    >
      <ThemeProvider attribute="class">
        <NextUIProvider>
          <SEO />
          <Component {...pageProps} />
        </NextUIProvider>
      </ThemeProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
