"use client";
import prettier from "prettier";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative px-8 py-4">
      <div className="mx-auto mt-5 grid max-w-screen-xl grid-cols-1 gap-10 border-t border-trueZinc-100 pt-2 dark:border-trueZinc-700">
        <div className="w-full text-center">
          <p className="text-sm text-trueZinc-700 dark:text-trueZinc-100">
            Copyright © {new Date().getFullYear()}.{" "}
            <span className="px-2">
              <Link
                href="/terms"
                className="text-sm text-trueZinc-700 dark:text-trueZinc-100"
              >
                Terms
              </Link>
            </span>
            <span className="px-2">
              <Link
                href="/privacy"
                className="text-sm text-trueZinc-700 dark:text-trueZinc-100"
              >
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
        className="absolute bottom-5 left-5 flex place-items-center space-x-2 rounded border 
        border-trueZinc-300 bg-trueOrange-600 px-3 py-1 text-sm font-semibold text-trueZinc-900 shadow-sm 
        dark:border-trueZinc-700 dark:bg-trueZinc-900 dark:text-trueZinc-300"
        type="button"
      >
        <Image alt="0xaloysius" className="mr-1 w-5" src="/img/logo.svg" />
        0xaloysius
      </button>
    </>
  );
};
