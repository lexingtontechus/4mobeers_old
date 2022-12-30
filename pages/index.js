"use client";
import Hero from "../components/hero";
import SectionTitle from "../components/sectionTitle";
import SEO from "../components/seo";
//import Video from "../components/video";
//import Testimonials from "../components/testimonials";
import Navbar from "../components/navbar";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Team from "../components/team";
import Footer from "../components/footer";
import Whitelist from "../components/whitelist";

export default function Home() {
  return (
    <>
      <SEO title="Home | 4MoBeers" description="Home 4MoBeers." />
      <Navbar />
      <Hero />
      <SectionTitle pretitle="4MoBeers" title="Exclusive Access">
        Connect your wallet. Update your email address in profile settings to
        receive exclusive offerings.
      </SectionTitle>
      <Cta />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions" id="faqs">
        How to partner and build your community with 4MoBeers?
      </SectionTitle>
      <Faq />
      <Whitelist />
      <Team id="team" />
      <Footer />
      <PopupWidget />
    </>
  );
}
