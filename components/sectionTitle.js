'use client';
import prettier from "prettier";
import React from "react";
import Container from "./container";

export default function SectionTitle(props) {
  return (
    <Container
      className={`mt-4 flex w-full flex-col ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}
    >
      {props.pretitle && (
        <div className="text-md font-bold uppercase tracking-wider text-truePink-700 dark:text-trueZinc-100">
          {props.pretitle}
        </div>
      )}

      {props.title && (
        <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-snug tracking-tight text-trueZinc-700 dark:text-trueZinc-100 lg:text-4xl lg:leading-tight">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl py-4 text-lg leading-normal text-trueZinc-700 dark:text-trueZinc-100 lg:text-xl xl:text-xl">
          {props.children}
        </p>
      )}
    </Container>
  );
}
