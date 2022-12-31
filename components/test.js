import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import styles from "../styles/Whitelist.module.scss";

import { supabase } from "../utils/supabase-clients";
import { useRouter } from "next/router";

export default function Test() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);

  //const supabase = Supabase;

  const onSubmit = //async (beerName, beerTitle, beerEmail) => {
    async function JoinWhitelist(beerName, beerTitle, beerEmail) {
      try {
        let { error } = await supabase
          .from("whitelist")
          .insert(beerName, beerTitle, beerEmail);
        if (error) throw error;
        alert("Whitelist updated!");
      } catch (error) {
        alert("Error updating the data!");
        console.log(error);
        setIsSuccess(false);
      } finally {
        //setLoading(false);
        setIsSuccess(true);

        reset();
      }
    };

  return (
    <div className="container w-10/12 p-8 mx-auto w-full place-content-center flex flex-wrap">
      <div className="bg-trueBlue-300 dark:bg-trueZinc-900 flex flex-col  overflow-hidden left-0 h-full w-full sm:w-[350px] min-h-[250px] sm:h-[600px] sm:max-h-[calc(100vh-120px)]">
        <div
          data-aos="fade-in"
          data-aos-delay="50"
          data-aos-duration="2500"
          id="whitelist"
          className={styles.whitelist}
        >
          <h5 className="text-trueZinc-700 dark:text-trueZinc-100">
            Join The
            <br />
            <span className="uppercase">Whitelist</span>
          </h5>
        </div>
        <div className="flex-grow h-full p-6 overflow-auto bg-trueBlue-300 dark:bg-trueZinc-900">
          {!isSubmitSuccessful && (
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="mb-4 px-4">
                <label
                  htmlFor="beerName"
                  className="block mb-2 text-sm text-truePink-600 dark:text-truePink-400"
                >
                  Beer Name
                </label>
                <input
                  type="text"
                  id="beerName"
                  placeholder="Brewster"
                  {...register("beerName", {
                    required: "Beer Name is required",
                    maxLength: 80,
                  })}
                  className={`w-full px-3 py-2 placeholder-trueZinc-300 bg-trueZinc-100 border border-trueZinc-300 rounded-md focus:outline-none focus:ring   ${
                    errors.beerName
                      ? "border-red-600 focus:border-red-600 ring-red-100"
                      : "border-trueZinc-300 focus:border-truePurple-600 ring-truePurple-100"
                  }`}
                />
                {errors.beerName && (
                  <div className="mt-1 text-sm text-red-400 invalid-feedback">
                    {errors.beerName.message}
                  </div>
                )}
              </div>

              <div className="mb-4 px-4">
                <label
                  htmlFor="beerEmail"
                  className="block mb-2 text-sm text-truePink-600 dark:text-truePink-400"
                >
                  Beer Email Address
                </label>
                <input
                  type="email"
                  id="beerEmail"
                  {...register("beerEmail", {
                    required: "Enter your email",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Please enter a valid email",
                    },
                  })}
                  placeholder="brewbuddy@company.com"
                  className={`w-full px-3 py-2 placeholder-trueZinc-300 bg-trueZinc-100 border border-trueZinc-300 rounded-md focus:outline-none focus:ring   ${
                    errors.beerEmail
                      ? "border-red-600 focus:border-red-600 ring-red-100"
                      : "border-trueZinc-300 focus:border-truePurple-600 ring-truePurple-100"
                  }`}
                />

                {errors.beerEmail && (
                  <div className="mt-1 text-sm text-red-400 invalid-feedback">
                    {errors.beerEmail.message}
                  </div>
                )}
              </div>

              <div className="mb-4 px-4">
                <label
                  htmlFor="beerTitle"
                  className="block mb-2 text-sm text-truePink-600 dark:text-truePink-400"
                >
                  Beer Title
                </label>
                <input
                  type="text"
                  id="beerTitle"
                  placeholder="Brew Buddy"
                  {...register("beerTitle", {
                    required: "Beer Title is required",
                    maxLength: 80,
                  })}
                  className={`w-full px-3 py-2 placeholder-trueZinc-300 bg-trueZinc-100 border border-trueZinc-300 rounded-md focus:outline-none focus:ring   ${
                    errors.beerTitle
                      ? "border-red-600 focus:border-red-600 ring-red-100"
                      : "border-trueZinc-300 focus:border-truePurple-600 ring-truePurple-100"
                  }`}
                />
                {errors.beerTitle && (
                  <div className="mt-1 text-sm text-red-400 invalid-feedback">
                    {errors.beerTitle.message}
                  </div>
                )}
              </div>
              <div className="mx-auto mt-8 px-4">
                <button
                  type="submit"
                  className="w-full px-2 py-2 text-trueZinc-100 bg-truePurple-700 rounded-md focus:bg-trueBlue-600 focus:outline-none"
                >
                  {isSubmitting ? (
                    <svg
                      className="w-5 h-5 mx-auto text-trueZinc-100 animate-spin"
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
                    "Join"
                  )}
                </button>
              </div>
            </form>
          )}

          {isSubmitSuccessful && isSuccess && (
            <>
              <div className="flex flex-col items-center justify-center h-full text-center text-trueZinc-100 rounded-md">
                <svg
                  width="60"
                  height="60"
                  className="text-truePurple-900 dark:text-truePink-400"
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
                <h3 className="py-5 text-xl text-trueEmerald-500">
                  Whitelist request sent successfully
                </h3>
                <h2 className="py-5 text-xl text-trueZinc-700">
                  <Link
                    href="https://discord.gg/d6KnD7V2gs"
                    alt="Discord"
                    target="_blank"
                    className="text-trueZinc-700"
                  >
                    Join Our Discord Channel
                  </Link>
                </h2>

                <button
                  className="rounded-md py-2 px-4 bg-truePurple-900 mt-6 text-trueZinc-100 focus:outline-none"
                  onClick={() => reset()}
                >
                  Go back
                </button>
              </div>
            </>
          )}

          {isSubmitSuccessful && !isSuccess && (
            <div className="flex flex-col items-center justify-center h-full text-center text-trueZinc-100 rounded-md">
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
  );
}
