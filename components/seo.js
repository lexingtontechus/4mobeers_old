import Head from "next/head";
import Script from "next/script";

export default function SEO({
  title = "4mobeers",
  description = "Entrepreneur in technology, biotech, cleantech, foodtech & mobility.",
}) {
  return (
    <>
      <Head>
        <title key="title">{title}</title>
        <meta key="description" name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://4mobeers.nft" />
        <meta property="og:title" content="4mobeers" />
        <meta property="og:description" content="4MoBeers" />
        <meta
          property="og:image"
          content="https://storageapi.fleek.co/47c43c10-6c0c-4b3b-a520-683839c214cf-bucket/assets/img/4mobeers-purple.svg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://4mobeers.nft" />
        <meta property="twitter:title" content="4mobeers" />
        <meta property="twitter:description" content="4MoBeers" />
        <meta
          property="twitter:image"
          content="https://storageapi.fleek.co/47c43c10-6c0c-4b3b-a520-683839c214cf-bucket/assets/img/4mobeers-purple.svg"
        />
      </Head>
    </>
  );
}
