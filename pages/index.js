'use client';
import Hero from "../components/hero";
import SectionTitle from "../components/sectionTitle";
import SEO from "../components/seo";
//import Video from "../components/video";
//import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <SEO title="Home | 0xaloysius" description="Home 0xaloysius." />
      <Navbar />
      <Hero />
      <SectionTitle pretitle="0x Stack" title="Portfolio Organizations">
        The 0x portfolio is comprised of five (5) companies & one (1) non-profit.
        Each company is focused on a specific mission and innovations within its
        industry.
      </SectionTitle>
      <Cta />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        How to partner or work with 0xaloysius?
      </SectionTitle>
      <Faq />

      <Footer />
      <PopupWidget />
    </>
  );
}
