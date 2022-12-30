import React, { useState } from "react";
import { Image } from "@nextui-org/react";
import { useForm, useWatch } from "react-hook-form";
import { Disclosure, Transition } from "@headlessui/react";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SEO from "../components/seo";
import SectionTitle from "../components/sectionTitle";

export default function Contact() {
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

  const userName = useWatch({ control, name: "name", defaultValue: "Someone" });

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
    <>
      <SEO title="Contact | 4MoBeers" description="Contact 4MoBeers." />
      <Navbar />
      <div className="h-full w-full">
        <div className="relative py-8 flex content-center items-center justify-center min-h-screen-75">
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <h1 className="uppercase text-trueZinc-700 dark:text-trueZinc-100 font-semibold text-5xl">
                  Contact
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container w-10/12 p-8 mx-auto w-full place-content-center flex flex-wrap">
          <div className=" flex flex-col overflow-hidden left-0 h-full w-full lg:w-1/2  min-h-[250px] sm:h-[600px] border border-trueZinc-300 dark:border-trueZinc-800 bg-white shadow-2xl rounded-md sm:max-h-[calc(100vh-120px)]">
            <div className="flex flex-col justify-center h-32 p-5 bg-truePurple-600">
              <h3 className="text-lg text-white">How can we help you?</h3>
              <p className="text-white opacity-50">
                We usually respond in a few hours.
              </p>
            </div>
            <div className="flex-grow h-full p-6 overflow-auto bg-trueZinc-50 ">
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
                    value="4MoBeers"
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
                      className="block mb-2 text-sm text-trueZinc-600 dark:text-trueZinc-400"
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
                      className={`w-full px-3 py-2 placeholder-trueZinc-300 bg-white border border-trueZinc-300 rounded-md focus:outline-none focus:ring   ${
                        errors.name
                          ? "border-red-600 focus:border-red-600 ring-red-100"
                          : "border-trueZinc-300 focus:border-truePurple-600 ring-truePurple-100"
                      }`}
                    />
                    {errors.name && (
                      <div className="mt-1 text-sm text-red-400 invalid-feedback">
                        {errors.name.message}
                      </div>
                    )}
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm text-trueZinc-600 dark:text-trueZinc-400"
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
                      className={`w-full px-3 py-2 placeholder-trueZinc-300 bg-white border border-trueZinc-300 rounded-md focus:outline-none focus:ring   ${
                        errors.email
                          ? "border-red-600 focus:border-red-600 ring-red-100"
                          : "border-trueZinc-300 focus:border-truePurple-600 ring-truePurple-100"
                      }`}
                    />

                    {errors.email && (
                      <div className="mt-1 text-sm text-red-400 invalid-feedback">
                        {errors.email.message}
                      </div>
                    )}
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm text-trueZinc-600 dark:text-trueZinc-400"
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
                      className={`w-full px-3 py-2 placeholder-trueZinc-300 bg-white border border-trueZinc-300 rounded-md h-28 focus:outline-none focus:ring   ${
                        errors.message
                          ? "border-red-600 focus:border-red-600 ring-red-100"
                          : "border-trueZinc-300 focus:border-truePurple-600 ring-truePurple-100"
                      }`}
                      required
                    ></textarea>
                    {errors.message && (
                      <div className="mt-1 text-sm text-red-400 invalid-feedback">
                        {errors.message.message}
                      </div>
                    )}
                  </div>
                  <div className="mb-3">
                    <button
                      type="submit"
                      className="w-full px-3 py-4 text-white bg-truePurple-500 rounded-md focus:bg-truePurple-600 focus:outline-none"
                    >
                      {isSubmitting ? (
                        <svg
                          className="w-5 h-5 mx-auto text-white animate-spin"
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
                  <div className="flex flex-col items-center justify-center h-full text-center text-white rounded-md">
                    <svg
                      width="60"
                      height="60"
                      className="text-green-300"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26.6666 50L46.6666 66.6667L73.3333 33.3333M50 96.6667C43.8716 96.6667 37.8033 95.4596 32.1414 93.1144C26.4796 90.7692 21.3351 87.3317 17.0017 82.9983C12.6683 78.6649 9.23082 73.5204 6.8856 67.8586C4.54038 62.1967 3.33331 56.1283 3.33331 50C3.33331 43.8716 4.54038 37.8033 6.8856 32.1414C9.23082 26.4796 12.6683 21.3351 17.0017 17.0017C21.3351 12.6683 26.4796 9.23084 32.1414 6.88562C37.8033 4.5404 43.8716 3.33333 50 3.33333C62.3767 3.33333 74.2466 8.24998 82.9983 17.0017C91.75 25.7534 96.6666 37.6232 96.6666 50C96.6666 62.3768 91.75 74.2466 82.9983 82.9983C74.2466 91.75 62.3767 96.6667 50 96.6667Z"
                        stroke="currentColor"
                        strokeWidth="3"
                      />
                    </svg>
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
                      className="mt-6 text-truePurple-600 focus:outline-none"
                      onClick={() => reset()}
                    >
                      Go back
                    </button>
                  </div>
                </>
              )}

              {isSubmitSuccessful && !isSuccess && (
                <div className="flex flex-col items-center justify-center h-full text-center text-white rounded-md">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 97 97"
                    className="text-red-400"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.9995 69C43.6205 53.379 52.3786 44.621 67.9995 29M26.8077 29L67.9995 69M48.2189 95C42.0906 95 36.0222 93.7929 30.3604 91.4477C24.6985 89.1025 19.554 85.6651 15.2206 81.3316C10.8872 76.9982 7.44975 71.8538 5.10454 66.1919C2.75932 60.53 1.55225 54.4617 1.55225 48.3333C1.55225 42.205 2.75932 36.1366 5.10454 30.4748C7.44975 24.8129 10.8872 19.6684 15.2206 15.335C19.554 11.0016 24.6985 7.56418 30.3604 5.21896C36.0222 2.87374 42.0906 1.66667 48.2189 1.66667C60.5957 1.66667 72.4655 6.58333 81.2172 15.335C89.9689 24.0867 94.8856 35.9566 94.8856 48.3333C94.8856 60.7101 89.9689 72.58 81.2172 81.3316C72.4655 90.0833 60.5957 95 48.2189 95Z"
                      stroke="CurrentColor"
                      strokeWidth="3"
                    />
                  </svg>

                  <h3 className="text-xl text-red-400 py-7">
                    Oops, Something went wrong!
                  </h3>
                  <p className="text-trueZinc-700 md:px-3">{Message}</p>
                  <button
                    className="mt-6 text-truePurple-600 focus:outline-none"
                    onClick={() => reset()}
                  >
                    Go back
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
