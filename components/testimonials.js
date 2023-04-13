import prettier from "prettier";
import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";

export default function Testimonials() {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex h-full w-full flex-col justify-between rounded-2xl bg-trueZinc-100 px-14 py-14 dark:bg-trueZinc-800">
            <p className="text-2xl leading-normal ">
              Share a real <Mark>testimonial</Mark>
              that hits some of your benefits from one of your popular customer.
            </p>

            <Avatar
              image={userOneImg}
              name="Sarah Steiner"
              title="VP Sales at Google"
            />
          </div>
        </div>
        <div className="">
          <div className="flex h-full w-full flex-col justify-between rounded-2xl bg-trueZinc-100 px-14 py-14 dark:bg-trueZinc-800">
            <p className="text-2xl leading-normal ">
              Make sure you only pick the <Mark>right sentence</Mark>
              to keep it short and simple.
            </p>

            <Avatar
              image={userTwoImg}
              name="Dylan Ambrose"
              title="Lead marketer at Netflix"
            />
          </div>
        </div>
        <div className="">
          <div className="flex h-full w-full flex-col justify-between rounded-2xl bg-trueZinc-100 px-14 py-14 dark:bg-trueZinc-800">
            <p className="text-2xl leading-normal ">
              This is an <Mark>awesome</Mark> landing page template I&apos;ve
              seen. I would use this for anything.
            </p>

            <Avatar
              image={userThreeImg}
              name="Gabrielle Winn"
              title="Co-founder of Acme Inc"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="mt-8 flex items-center space-x-3">
      <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-full">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          layout="responsive"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-trueZinc-600 dark:text-trueZinc-400">
          {props.title}
        </div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="rounded-md bg-trueSky-100 text-trueZinc-800 ring-4 ring-trueSky-100 dark:bg-trueSky-900 dark:text-trueSky-200 dark:ring-trueSky-900">
        {props.children}
      </mark>{" "}
    </>
  );
}
