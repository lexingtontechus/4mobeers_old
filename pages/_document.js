import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { CssBaseline } from "@nextui-org/react";
//import Head from "next/head";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles]),
    };
  }

  render() {
    return (
      <Html>
        <Head>
          {CssBaseline.flush()}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://4mobeers.nft/" />
          <meta property="og:title" content="4mobeers DAO Inc." />
          <meta property="og:description" content="4mobeers. " />
          <meta
            property="og:image"
            content="https://storageapi.fleek.co/47c43c10-6c0c-4b3b-a520-683839c214cf-bucket/assets/img/4mobeers.svg"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://twitter.com/4mobeers" />
          <meta property="twitter:title" content="4mobeers" />
          <meta
            property="twitter:description"
            content="The Beer Crew. Team Roadie Kingz."
          />
          <meta
            property="twitter:image"
            content="https://storageapi.fleek.co/47c43c10-6c0c-4b3b-a520-683839c214cf-bucket/assets/img/4mobeers.svg"
          />
          <link rel="me" href="https://noc.social/@4mobeers" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Sora:wght@700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="icon"
            href="https://storageapi.fleek.one/ead18a13-670a-4701-91a7-06a767c3dcd5-bucket/assets/img/logo-4mobeers.svg"
          />
        </Head>
        <body className="lightmode dark:darkmode">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
