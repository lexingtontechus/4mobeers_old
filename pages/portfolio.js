'use client';
import Link from "next/link";
import Image from "next/image";

import SEO from "../components/seo";
import SectionTitle from "../components/sectionTitle";
import PopupWidget from "../components/popupWidget";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

export default function Portfolio() {
  return (
    <>
      <SEO title="Portfolio | 4MoBeers" description="Portfolio 4MoBeers." />

      <Navbar />
      <SectionTitle pretitle="Core Vision" title="The 4MoBeers Mission">
        Support diversified investments in Southern Californian start-ups and
        communities to create sustainable, renewable & secure platforms and services.
      </SectionTitle>
      <SectionTitle
        pretitle="Cornerstone Sustainable Ecosystems"
        title="The Portfolio"
      >
        Collaborate and invest with the SoCal business & tech communities and
        foster employment in the 0x portfolio and partner ventures.
      </SectionTitle>

      <div className="container  items-center p-8 mx-auto w-full place-content-center">
        <section className="">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-4">
                <Card1 />
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-4">
                <Card2 />
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-4">
                <Card3 />
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-4">
                <Card4 />
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-4">
                <Card5 />
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-4">
                <Card6 />
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <PopupWidget />
    </>
  );
}

const LogoLXT = ({ src, width, quality }) => {
  return `https://storageapi.fleek.co/47c43c10-6c0c-4b3b-a520-683839c214cf-bucket/assets/img/${src}?w=${width}&q=${quality || 75}`;
};
const LogoDSVI = ({ src, width, quality }) => {
  return `https://storageapi.fleek.co/47c43c10-6c0c-4b3b-a520-683839c214cf-bucket/assets/img/${src}?w=${width}&q=${quality || 75}`;
};
const Logo4MB = ({ src, width, quality }) => {
  return `https://storageapi.fleek.co/47c43c10-6c0c-4b3b-a520-683839c214cf-bucket/assets/img/${src}?w=${width}&q=${quality || 75}`;
};
const LogoLasPlayas = ({ src, width, quality }) => {
  return `https://storageapi.fleek.co/47c43c10-6c0c-4b3b-a520-683839c214cf-bucket/assets/img/${src}?w=${width}&q=${quality || 75}`;
};
const LogoSV = ({ src, width, quality }) => {
  return `https://storageapi.fleek.co/47c43c10-6c0c-4b3b-a520-683839c214cf-bucket/assets/img/${src}?w=${width}&q=${quality || 75}`;
};
const LogoSAVI = ({ src, width, quality }) => {
  return `https://storageapi.fleek.co/47c43c10-6c0c-4b3b-a520-683839c214cf-bucket/assets/img/${src}?w=${width}&q=${quality || 75}`;
};

function Card1() {
  return (
    <div className="px-6">
      <Link
        href="https://lexingtontech.us"
        target="_blank"
        alt="Lexington Tech"
      >
        <Image
        loader={LogoLXT}
          alt="Lexington Tech LLC"
          src="/logo-lxt.svg"
          className="shadow-lg rounded-full mx-auto max-w-120-px hover:bg-trueFushia-600 hover:border-trueFushia-600"
          height={150}
          width={150}
          priority="true"
        />
      </Link>
      <div className="pt-16 text-center">
        <h5 className="text-xl font-bold text-trueZinc-700 dark:text-trueZinc-100">
          President
        </h5>
        <p className="mt-1 text-sm text-trueZinc-700 dark:text-trueZinc-100 uppercase font-semibold">
          Lexington Tech LLC.
        </p>
        <p className="italic mt-1 text-sm text-trueZinc-700 dark:text-trueZinc-100 uppercase font-semibold pt-4">
          Management Consultancy
        </p>
        <div className="mt-6">
          <Link
            href="https://linkedin.com/company/lexingtontechus"
            target="_blank"
            alt="Lexington Tech | LinkedIn"
          >
            <button
              className="bg-trueFushia-600 text-trueZinc-100 w-10 h-10 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="px-6 fill-trueZinc-700 dark:fill-trueZinc-100">
      <Link href="https://delsolventures.nft" target="_blank" alt="del SOL">
        <Image
        loader={LogoDSVI}
          alt="del SOL"
          src="/logo-dsvi-light.svg"
          className="shadow-lg rounded-half mx-auto max-w-120-px fill-trueZinc-700 dark:fill-trueZinc-100 border-2 border-solid border-trueZinc-100 p-2 hover:bg-trueFushia-600"
          height={150}
          width={150}
        />
      </Link>
      <div className="pt-4 text-center">
        <h5 className="text-xl font-bold text-trueZinc-700 dark:text-trueZinc-100">
          Director
        </h5>
        <p className="mt-1 text-sm text-trueZinc-700 dark:text-trueZinc-100 font-semibold">
          del SOL VENTURES INC.
        </p>
        <p className="italic mt-1 text-sm text-trueZinc-700 dark:text-trueZinc-100 uppercase font-semibold pt-4">
          Venture Capital & Investment
        </p>

        <div className="mt-6">
          <Link
            href="https://linkedin.com/company/delsolventures"
            target="_blank"
            alt="del SOL | LinkedIn"
          >
            <button
              className="bg-trueFushia-600 text-trueZinc-100 w-10 h-10 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="px-6">
      <Link href="https://4mobeers.nft" target="_blank" alt="4 Mo Beers">
        <Image
        loader={Logo4MB}
          alt="4 Mo Beers"
          src="/logo-4mobeers.svg"
          className="shadow-lg rounded-full mx-auto max-w-120-px hover:bg-trueFushia-600"
          height={150}
          width={150}
        />
      </Link>
      <div className="pt-16 text-center">
        <h5 className="text-xl font-bold text-trueZinc-700 dark:text-trueZinc-100">
          Beer Shark
        </h5>
        <p className="mt-1 text-sm text-trueZinc-700 dark:text-trueZinc-100 uppercase font-semibold">
          4MoBeers Inc.
        </p>
        <p className="italic mt-1 text-sm text-trueZinc-700 dark:text-trueZinc-100 uppercase font-semibold pt-4">
          WEB3, Gaming & Sports Book
        </p>
        <div className="mt-6">
          <Link
            href="https://linkedin.com/company/4mobeers"
            target="_blank"
            alt="4 Mo Beers | LinkedIn"
          >
            <button
              className="bg-trueFushia-600 text-trueZinc-100 w-10 h-10 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="px-6">
      <Link href="https://lasplayas.nft" target="_blank" alt="las Playas">
        <Image
        loader={LogoLasPlayas}
          alt="las Playas"
          src="/logo-lasplayas.svg"
          className="shadow-lg rounded-full mx-auto max-w-120-px hover:bg-trueFushia-600"
          height={150}
          width={150}
        />
      </Link>
      <div className="pt-16 text-center">
        <h5 className="text-xl font-bold text-trueZinc-700 dark:text-trueZinc-100">
          Investor
        </h5>
        <p className="mt-1 text-sm text-trueZinc-700 dark:text-trueZinc-100 uppercase font-semibold">
          Las Playas Inc.
        </p>
        <p className="italic mt-1 text-sm text-trueZinc-700 dark:text-trueZinc-100 uppercase font-semibold pt-4">
          Bar & Grill
        </p>

        <div className="mt-6">
          <Link
            href="https://linkedin.com/company/lasplayas"
            target="_blank"
            alt="Las PLayas | LinkedIn"
          >
            <button
              className="bg-trueFushia-600 text-trueZinc-100 w-10 h-10 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="px-6">
      <Link
        href="https://sunsetventures.nft"
        target="_blank"
        alt="Sunset Ventures"
      >
        <Image
        loader={LogoSV}
          alt="Sunset Ventures"
          src="/logo-sunset.svg"
          className="shadow-lg rounded-full mx-auto max-w-120-px hover:bg-trueFushia-600"
          height={150}
          width={150}
        />
      </Link>
      <div className="pt-16 text-center">
        <h5 className="text-xl font-bold text-trueZinc-700 dark:text-trueZinc-100">
          Investor
        </h5>
        <p className="mt-1 text-sm text-trueZinc-700 dark:text-trueZinc-100 uppercase font-semibold">
          Sunset Ventures Inc.
        </p>
        <p className="italic mt-1 text-sm text-trueZinc-700 dark:text-trueZinc-100 uppercase font-semibold pt-4">
          Quantitative Investment
        </p>
        <div className="mt-6">
          <Link
            href="https://linkedin.com/company/sunsetventuresinc"
            target="_blank"
            alt="Sunset Ventures| LinkedIn"
          >
            <button
              className="bg-trueFushia-600 text-trueZinc-100 w-10 h-10 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Card6() {
  return (
    <div className="px-6">
      <Link href="https://savivets.org" target="_blank" alt="SAVI">
        <Image
        loader={LogoSAVI}
          alt="SAVI"
          src="/logo-savi.svg"
          className="shadow-lg rounded-half mx-auto max-w-120-px hover:bg-trueFushia-600"
          height={150}
          width={150}
        />
      </Link>
      <div className="pt-16 text-center">
        <h5 className="text-xl font-bold text-trueZinc-700 dark:text-trueZinc-100">
          Board Member
        </h5>
        <p className="mt-1 text-sm text-trueZinc-700 dark:text-trueZinc-100 uppercase font-semibold">
          Strategic Alliance Veteran Integration
        </p>
        <p className="italic mt-1 text-sm text-trueZinc-700 dark:text-trueZinc-100 uppercase font-semibold pt-4">
          Veteran Transition & Benefits
        </p>
        <div className="mt-6">
          <Link
            href="https://linkedin.com/company/savivets"
            target="_blank"
            alt="SAVI | LinkedIn"
          >
            <button
              className="bg-trueFushia-600 text-trueZinc-100 w-10 h-10 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
