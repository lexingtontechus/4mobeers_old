'use client';
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
      <SectionTitle pretitle="4MoBeers" title="Portfolio Organizations">
        The 0x portfolio is comprised of five (5) companies & one (1) non-profit.
        Each company is focused on a specific mission and innovations within its
        industry.
      </SectionTitle>
      <Cta />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions" id="faqs">
        How to partner or work with 4MoBeers?
      </SectionTitle>
      <Faq />
      <Whitelist />
      <Team id="team" />
      <Footer />
      <PopupWidget />
    </>
  );
}
