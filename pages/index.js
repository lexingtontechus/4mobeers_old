"use client";

import SectionTitle from "../components/sectionTitle";
import SEO from "../components/seo";
import Cta from "../components/cta";

import Layout from "../layouts/layout.js";

export default function Home() {
  return (
    <>
      <SEO title="Home | 4MoBeers" description="Home 4MoBeers." />
      <Layout>
        <SectionTitle pretitle="4MoBeers" title="Exclusive Access">
          Connect your wallet. Update your email address in profile settings to
          receive exclusive offerings.
        </SectionTitle>
        <Cta />
        <SectionTitle
          pretitle="FAQ"
          title="Frequently Asked Questions"
          id="faqs"
        >
          How to partner and build your community with 4MoBeers?
        </SectionTitle>
      </Layout>
    </>
  );
}
