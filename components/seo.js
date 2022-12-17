import Head from "next/head";

export default function SEO({
  title = "0xaloysius",
  description = "Entrepreneur in technology, biotech, cleantech, foodtech & mobility.",
}) {
  return (
    <>
      <Head>
        <title key="title">{title}</title>
        <meta key="description" name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://0xaloysius.x" />
        <meta property="og:title" content="0xaloysius" />
        <meta
          property="og:description"
          content="Entrepreneur in technology, biotech, cleantech, foodtech & mobility."
        />
        <meta
          property="og:image"
          content="https://storageapi.fleek.co/47c43c10-6c0c-4b3b-a520-683839c214cf-bucket/assets/img/0xaloysius-purple.svg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://0xaloysius.x" />
        <meta property="twitter:title" content="0xaloysius" />
        <meta
          property="twitter:description"
          content="Entrepreneur in technology, biotech, cleantech, foodtech & mobility."
        />
        <meta
          property="twitter:image"
          content="https://storageapi.fleek.co/47c43c10-6c0c-4b3b-a520-683839c214cf-bucket/assets/img/0xaloysius-purple.svg"
        />
      </Head>
    </>
  );
}
