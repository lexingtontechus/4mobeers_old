import prettier from "prettier";
import Image from "next/image";
import React from "react";
import Container from "./container";

export default function Benefits(props) {
  const { data } = props;

  return (
    <>
      <Container className="mb-20 flex flex-wrap lg:flex-nowrap lg:gap-10 ">
        <div
          className={`flex w-full items-center justify-center lg:w-1/2 ${
            props.imgPos === "right" ? "lg:order-1" : ""
          }`}
        >
          <div>
            <Image
              src={data.image}
              width="521"
              height="482"
              alt="Benefits"
              layout="intrinsic"
              placeholder="blur"
            />
          </div>
        </div>

        <div
          className={`flex w-full flex-wrap items-center lg:w-1/2 ${
            props.imgPos === "right" ? "lg:justify-end" : ""
          }`}
        >
          <div>
            <div className="mt-4 flex w-full flex-col">
              <h3 className="mt-3 max-w-2xl text-3xl font-bold leading-snug tracking-tight text-trueZinc-800 lg:text-4xl lg:leading-tight">
                {data.title}
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-trueZinc-500 dark:text-trueZinc-300 lg:text-xl xl:text-xl">
                {data.desc}
              </p>
            </div>

            <div className="mt-5 w-full">
              {data.bullets.map((item, index) => (
                <Benefit key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Benefit>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

function Benefit(props) {
  return (
    <>
      <div className="mt-8 flex items-start space-x-3">
        <div className="mt-1 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md bg-trueSky-600 ">
          {React.cloneElement(props.icon, {
            className: "w-7 h-7 text-trueSky-100",
          })}
        </div>
        <div>
          <h4 className="text-xl font-medium text-trueZinc-800 dark:text-trueZinc-200">
            {props.title}
          </h4>
          <p className="mt-1 text-trueZinc-500 dark:text-trueZinc-400">
            {props.children}
          </p>
        </div>
      </div>
    </>
  );
}
