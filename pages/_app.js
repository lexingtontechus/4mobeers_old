import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ThemeProvider } from "next-themes";
import "../styles/tailwind.css";
import "../styles/custom.css";
import { NextUIProvider } from "@nextui-org/react";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import SEO from "../components/seo";

import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mainnet;

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("floatingButton", {
        calLink: "4mobeers/30min",
        buttonText: "Beer Me",
        buttonColor: "#7e22ce",
        buttonTextColor: "#f4f4f5",
        buttonPosition: "bottom-left",
      });
      cal("ui", {
        theme: "dark",
        styles: {
          branding: { brandColor: "#ea580c" },
        },
      });
    })();
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
