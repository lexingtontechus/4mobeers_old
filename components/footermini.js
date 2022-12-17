//import Link from "next/link";
import React from "react";
import Container from "./container";
import Link from "next/link";
import Image from "next/image";

export default function FooterMini() {
  const footer = [
    { name: "About", href: "/about" },
    { name: "Profile", href: "/profile" },
    { name: "Contact", href: "/contact" }
  ];
  const legal = [
    { name: "Terms", href: "/terms" },
    { name: "Privacy", href: "/privacy" }
  ];

  return (
    <footer className="relative px-8 py-4">
      <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-2 mx-auto mt-5 border-t border-trueZinc-100 dark:border-trueZinc-700">
        <div className="w-full text-center">
          <p className="text-sm text-trueZinc-700 dark:text-trueZinc-100">
            Copyright © {new Date().getFullYear()}.{" "}
            <span className="px-2">
              <Link href="/terms">
Terms
              </Link>
            </span>
            <span className="px-2">
              <Link href="/privacy">
           Privacy
              </Link>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

const Backlink = () => {
  return (
    <>
      <button
        className="absolute flex px-3 py-1 space-x-2 text-sm font-semibold text-trueZinc-900 
        bg-trueOrange-600 border border-trueZinc-300 rounded shadow-sm place-items-center left-5 bottom-5 
        dark:bg-trueZinc-900 dark:border-trueZinc-700 dark:text-trueZinc-300"
        type="button"
      >
        <Image
          alt="0xaloysius"
          className="w-5 mr-1"
          src="/img/logo.svg"
        />
        0xaloysius
      </button>
    </>
  );
};
