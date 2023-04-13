"use client";
import prettier from "prettier";
import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { Disclosure, Transition } from "@headlessui/react";
import { Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link";

export default function PopupWidget() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [Message, setMessage] = useState("");

  const userName = useWatch({
    control,
    name: "name",
    defaultValue: "Beer Guy",
  });

  const onSubmit = async (data, e) => {
    console.log(data);
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data, null, 2),
    })
      .then(async (response) => {
        let json = await response.json();
        if (json.success) {
          setIsSuccess(true);
          setMessage(json.message);
          e.target.reset();
          reset();
        } else {
          setIsSuccess(false);
          setMessage(json.message);
        }
      })
      .catch((error) => {
        setIsSuccess(false);
        setMessage("Client Error. Please check the console.log for more info");
        console.log(error);
      });
  };

  return (
    <div>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="ease fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-trueFushia-700 shadow-lg transition duration-300 hover:bg-truePink-600 focus:bg-trueFushia-600 focus:outline-none">
              <span className="sr-only">Open Contact form Widget</span>
              <Transition
                show={!open}
                enter="transition duration-200 transform ease"
                enterFrom="opacity-0 -rotate-45 scale-75"
                leave="transition duration-100 transform ease"
                leaveTo="opacity-0 -rotate-45"
                className="absolute h-6 w-6 text-trueZinc-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>{" "}
              </Transition>

              <Transition
                show={open}
                enter="transition duration-200 transform ease"
                enterFrom="opacity-0 rotate-45 scale-75"
                leave="transition duration-100 transform ease"
                leaveTo="opacity-0 rotate-45"
                className="absolute h-6 w-6 text-trueZinc-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>{" "}
              </Transition>
            </Disclosure.Button>
            <Transition
              className="fixed  bottom-[100px] left-0 right-0 top-0  z-50 sm:left-auto sm:right-5 sm:top-auto"
              enter="transition duration-200 transform ease"
              enterFrom="opacity-0 translate-y-5"
              leave="transition duration-200 transform ease"
              leaveTo="opacity-0 translate-y-5"
            >
              <Disclosure.Panel className=" left-0 flex  h-full min-h-[250px] w-full flex-col overflow-hidden rounded-md border border-trueZinc-300 bg-trueZinc-100 shadow-2xl dark:border-trueZinc-800 sm:h-[600px] sm:max-h-[calc(100vh-120px)] sm:w-[350px]">
                <div className="flex flex-col items-center justify-center bg-trueFushia-700 p-5">
                  <h3 className="text-lg text-trueZinc-100">
                    How can we help?
                  </h3>
                  <LottiePlayer
                    autoplay
                    loop
                    src="https://storage.fleek.zone/ead18a13-670a-4701-91a7-06a767c3dcd5-bucket/assets/lottie/drunkenowl.json"
                    style={{ height: "150px", width: "150px" }}
                  ></LottiePlayer>

                  <p className="text-trueZinc-100 opacity-50">
                    We usually respond in a few hours
                  </p>
                </div>
                <div className="h-full flex-grow overflow-auto bg-trueZinc-50 p-6">
                  {!isSubmitSuccessful && (
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                      <input
                        type="hidden"
                        value="1e3b28e3-22b9-49c7-a712-9dd2bdd83af9"
                        {...register("apikey")}
                      />
                      <input
                        type="hidden"
                        value={`${userName} sent a message`}
                        {...register("subject")}
                      />
                      <input
                        type="hidden"
                        value="0xaloysius"
                        {...register("from_name")}
                      />
                      <input
                        type="checkbox"
                        className="hidden"
                        style={{ display: "none" }}
                        {...register("botcheck")}
                      ></input>

                      <div className="mb-4">
                        <label
                          htmlFor="full_name"
                          className="mb-2 block text-sm text-trueZinc-700"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="full_name"
                          placeholder="John Doe"
                          {...register("name", {
                            required: "Full name is required",
                            maxLength: 80,
                          })}
                          className={`w-full rounded-md border border-trueZinc-300 bg-trueZinc-100 px-3 py-2 placeholder-trueZinc-300 focus:outline-none focus:ring   ${
                            errors.name
                              ? "border-red-600 ring-red-100 focus:border-red-600"
                              : "border-trueZinc-300 ring-trueFushia-100 focus:border-trueFushia-600"
                          }`}
                        />
                        {errors.name && (
                          <div className="invalid-feedback mt-1 text-sm text-red-400">
                            {errors.name.message}
                          </div>
                        )}
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="email"
                          className="mb-2 block text-sm text-trueZinc-700"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          {...register("email", {
                            required: "Enter your email",
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: "Please enter a valid email",
                            },
                          })}
                          placeholder="you@company.com"
                          className={`w-full rounded-md border border-trueZinc-300 bg-trueZinc-100 px-3 py-2 placeholder-trueZinc-300 focus:outline-none focus:ring   ${
                            errors.email
                              ? "border-red-600 ring-red-100 focus:border-red-600"
                              : "border-trueZinc-300 ring-trueFushia-100 focus:border-trueFushia-600"
                          }`}
                        />

                        {errors.email && (
                          <div className="invalid-feedback mt-1 text-sm text-red-400">
                            {errors.email.message}
                          </div>
                        )}
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="message"
                          className="mb-2 block text-sm text-trueZinc-700"
                        >
                          Your Message
                        </label>

                        <textarea
                          rows="4"
                          id="message"
                          {...register("message", {
                            required: "Enter your Message",
                          })}
                          placeholder="Your Message"
                          className={`h-28 w-full rounded-md border border-trueZinc-300 bg-trueZinc-100 px-3 py-2 placeholder-trueZinc-300 focus:outline-none focus:ring   ${
                            errors.message
                              ? "border-red-600 ring-red-100 focus:border-red-600"
                              : "border-trueZinc-300 ring-trueFushia-100 focus:border-trueFushia-600"
                          }`}
                          required
                        ></textarea>
                        {errors.message && (
                          <div className="invalid-feedback mt-1 text-sm text-red-400">
                            {errors.message.message}
                          </div>
                        )}
                      </div>
                      <div className="mb-3">
                        <button
                          type="submit"
                          className="w-full rounded-md bg-trueFushia-700 px-3 py-4 text-trueZinc-100 focus:bg-truePink-600 focus:outline-none"
                        >
                          {isSubmitting ? (
                            <svg
                              className="mx-auto h-5 w-5 animate-spin text-trueZinc-100"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                          ) : (
                            "Send Message"
                          )}
                        </button>
                      </div>
                    </form>
                  )}

                  {isSubmitSuccessful && isSuccess && (
                    <>
                      <div className="flex h-full flex-col items-center justify-center rounded-md text-center text-trueZinc-100">
                        <Player
                          autoplay
                          loop
                          src="https://storage.fleek.zone/ead18a13-670a-4701-91a7-06a767c3dcd5-bucket/assets/lottie/drunkbeerbottlegreen.json"
                          style={{ height: "100px", width: "100px" }}
                        ></Player>
                        <h3 className="py-5 text-xl text-green-500">
                          Message sent successfully
                        </h3>
                        <h2 className="py-5 text-xl text-trueZinc-700">
                          <Link
                            href="https://discord.gg/d6KnD7V2gs"
                            alt="Discord"
                            target="_blank"
                          >
                            Join Our Discord Channel
                          </Link>
                        </h2>

                        <p className="text-trueZinc-700 md:px-3">{Message}</p>
                        <button
                          className="mt-6 text-trueZinc-600 focus:outline-none"
                          onClick={() => reset()}
                        >
                          Go back
                        </button>
                      </div>
                    </>
                  )}

                  {isSubmitSuccessful && !isSuccess && (
                    <div className="flex h-full flex-col items-center justify-center rounded-md text-center text-trueZinc-100">
                      <Player
                        autoplay
                        loop
                        src="https://storage.fleek.zone/ead18a13-670a-4701-91a7-06a767c3dcd5-bucket/assets/lottie/drunkbeerbottlered.json"
                        style={{ height: "100px", width: "100px" }}
                      ></Player>

                      <h3 className="py-7 text-xl text-red-400">
                        Oops, Something went wrong!
                      </h3>
                      <p className="text-trueZinc-700 md:px-3">{Message}</p>
                      <button
                        className="mt-6 text-trueFushia-600 focus:outline-none"
                        onClick={() => reset()}
                      >
                        Go back
                      </button>
                    </div>
                  )}
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}
