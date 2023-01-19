"use client";

import SectionTitle from "../components/sectionTitle";
import SEO from "../components/seo";
import Cta from "../components/cta";
import CtaPartnerSignup from "../components/ctaPartnersignup";

import Layout from "../layouts/layout.js";

export default function Home() {
  return (
    <>
      <SEO title="Home | 4MoBeers" description="Home 4MoBeers." />

      <Layout>
        <SectionTitle
          pretitle="Join The Community"
          title="Exclusive Access"
          id="community"
        >
          Connect your wallet. Sign In & Update your email address in profile
          settings to receive exclusive airdrops & offerings.
        </SectionTitle>
        <Cta />
        <SectionTitle
          pretitle="Partner NIL Program"
          title="Join Our Partner Community"
          id="partners"
        >
          Sign up as a partner or content creator.
        </SectionTitle>
        <CtaPartnerSignup />
      </Layout>
    </>
  );
}
