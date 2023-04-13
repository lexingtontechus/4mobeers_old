"use client";
import prettier from "prettier";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { Button, Link } from "@nextui-org/react";
import { Player } from "@lottiefiles/react-lottie-player";

export default function ParterSignup() {
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
  const supabase = useSupabaseClient();

  const onSubmit = //async (companyName, clientName, Email) => {
    async function createPartner(
      companyname,
      email,
      clientname,
      contactnumber,
      website,
      businesstype
    ) {
      try {
        const registerPartner = {
          companyname,
          email,
          clientname,
          contactnumber,
          website,
          businesstype,
          updated_at: new Date().toISOString(),
        };

        let { error } = await supabase
          .from("partners")
          .insert(
            companyname,
            email,
            clientname,
            contactnumber,
            website,
            businesstype
          );
        if (error) throw error;
        //alert("Whitelist updated!");
      } catch (error) {
        //alert("Error updating the data!");
        console.log(error);
        setIsSuccess(false);
      } finally {
        //setLoading(false);
        setIsSuccess(true);

        reset();
      }
    };

  return (
    <div className="mx-auto flex w-full flex-wrap place-content-center">
      <div className="left-0 flex  h-full w-full flex-col overflow-hidden ">
        <div className="h-full flex-grow overflow-auto">
          {!isSubmitSuccessful && (
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div id="companyname" className="mb-4 px-4">
                <label
                  htmlFor="companyname"
                  className="mb-2 block text-sm text-truePink-600 dark:text-truePink-400"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyname"
                  placeholder="Greatest Brew Co."
                  {...register("companyname", {
                    required: "Company name is required",
                    maxLength: 80,
                  })}
                  className={`w-full rounded-md border border-trueZinc-300 bg-trueZinc-100 px-3 py-2 placeholder-trueZinc-300 focus:outline-none focus:ring   ${
                    errors.companyname
                      ? "border-red-600 ring-red-700 focus:border-red-600"
                      : "border-trueZinc-300 ring-trueFushia-100 focus:border-trueFushia-600"
                  }`}
                />
                {errors.companyname && (
                  <div className="invalid-feedback mt-1 text-sm text-red-400">
                    {errors.companyname.message}
                  </div>
                )}
              </div>

              <div id="email" className="mb-4 px-4">
                <label
                  htmlFor="Email"
                  className="mb-2 block text-sm text-truePink-600 dark:text-truePink-400"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="Email"
                  {...register("email", {
                    required: "Enter your email",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Please enter a valid email",
                    },
                  })}
                  placeholder="brewbuddy@company.com"
                  className={`w-full rounded-md border border-trueZinc-300 bg-trueZinc-100 px-3 py-2 placeholder-trueZinc-300 focus:outline-none focus:ring   ${
                    errors.email
                      ? "border-red-600 ring-red-700 focus:border-red-600"
                      : "border-trueZinc-300 ring-trueFushia-100 focus:border-trueFushia-600"
                  }`}
                />

                {errors.email && (
                  <div className="invalid-feedback mt-1 text-sm text-red-400">
                    {errors.email.message}
                  </div>
                )}
              </div>

              <div id="clientname" className="mb-4 px-4">
                <label
                  htmlFor="clientName"
                  className="mb-2 block text-sm text-truePink-600 dark:text-truePink-400"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="clientname"
                  placeholder="Brew Buddy"
                  {...register("clientname", {
                    required: "Your full name is required",
                    maxLength: 80,
                  })}
                  className={`w-full rounded-md border border-trueZinc-300 bg-trueZinc-100 px-3 py-2 placeholder-trueZinc-300 focus:outline-none focus:ring   ${
                    errors.clientname
                      ? "border-red-600 ring-red-700 focus:border-red-600"
                      : "border-trueZinc-300 ring-trueFushia-100 focus:border-trueFushia-600"
                  }`}
                />
                {errors.clientname && (
                  <div className="invalid-feedback mt-1 text-sm text-red-400">
                    {errors.clientname.message}
                  </div>
                )}
              </div>

              <div id="contactnumber" className="mb-4 px-4">
                <label
                  htmlFor="contactnumber"
                  className="mb-2 block text-sm text-truePink-600 dark:text-truePink-400"
                >
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="contactnumber"
                  placeholder="000-000-0000"
                  {...register("contactnumber", {
                    required:
                      "Please enter your contact number e.g.000-000-0000 ",

                    min: 12,
                    maxLength: 12,
                    pattern: /^\S+-\S+-\S/i,
                  })}
                  className={`w-full rounded-md border border-trueZinc-300 bg-trueZinc-100 px-3 py-2 placeholder-trueZinc-300 focus:outline-none focus:ring   ${
                    errors.contactnumber
                      ? "border-red-600 ring-red-700 focus:border-red-600"
                      : "border-trueZinc-300 ring-trueFushia-100 focus:border-trueFushia-600"
                  }`}
                />
                {errors.contactnumber && (
                  <div className="invalid-feedback mt-1 text-sm text-red-400">
                    {errors.contactnumber.message}
                  </div>
                )}
              </div>

              <div id="website" className="mb-4 px-4">
                <label
                  htmlFor="website"
                  className="mb-2 block text-sm text-truePink-600 dark:text-truePink-400"
                >
                  Website
                </label>
                <input
                  type="url"
                  id="website"
                  placeholder="greatestbrew.co"
                  {...register("website", {
                    required: "Please enter the company's website URL",
                    maxLength: 80,
                    pattern: /^\S+.\S/i,
                  })}
                  className={`w-full rounded-md border border-trueZinc-300 bg-trueZinc-100 px-3 py-2 placeholder-trueZinc-300 focus:outline-none focus:ring   ${
                    errors.website
                      ? "border-red-600 ring-red-700 focus:border-red-600"
                      : "border-trueZinc-300 ring-trueFushia-100 focus:border-trueFushia-600"
                  }`}
                />
                {errors.website && (
                  <div className="invalid-feedback mt-1 text-sm text-red-400">
                    {errors.website.message}
                  </div>
                )}
              </div>

              <div id="businesstype" className="mb-4 px-4">
                <label
                  htmlFor="businesstype"
                  className="mb-2 block text-sm text-truePink-600 dark:text-truePink-400"
                >
                  Website
                </label>
                <select
                  {...register("businesstype", {
                    required: "Please select a type of business",
                  })}
                  className={`w-full rounded-md border border-trueZinc-300 bg-trueZinc-100 px-3 py-2 placeholder-trueZinc-300 focus:outline-none focus:ring   ${
                    errors.businesstype
                      ? "border-red-600 ring-red-700 focus:border-red-600"
                      : "border-trueZinc-300 ring-trueFushia-100 focus:border-trueFushia-600"
                  }`}
                >
                  <option value="default">Select An Option</option>
                  <option value="Bar">Bar</option>
                  <option value="Brewery">Brewery</option>
                  <option value="Club">Club</option>
                  <option value="Distillery">Distillery</option>
                  <option value="Food Truck">Food Truck</option>
                  <option value="Pub">Pub</option>
                  <option value="Restaurant">Restaurant</option>
                  <option value="Vineyard">Vineyard</option>
                  <option value="Content Creator">Content Creator</option>
                  <option value="Other">Other</option>
                </select>

                {errors.businesstype && (
                  <div className="invalid-feedback mt-1 text-sm text-red-400">
                    {errors.businesstype.message}
                  </div>
                )}
              </div>

              <div className="mx-auto mt-8 px-4">
                <button
                  type="submit"
                  className="w-full rounded-md bg-trueFushia-700 px-2 py-2 text-trueZinc-100 focus:bg-trueBlue-600 focus:outline-none"
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
                    "Register"
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
                <h3 className="py-5 text-xl text-trueEmerald-500">
                  Partner request sent successfully!
                </h3>
                <h2 className="py-2 text-xl text-trueZinc-700">
                  Join Our Partners Discord Channel
                </h2>

                <Link
                  href="https://discord.gg/VpUvAbaenh"
                  alt="Discord"
                  target="_blank"
                  rel="noreferrer"
                  className="text-trueZinc-700"
                >
                  <Button
                    className="button primary mx-auto block w-full w-full rounded-md bg-trueFushia-900 p-2 uppercase text-trueZinc-100"
                    auto
                    shadow
                    css={{ color: "#f4f4f5", background: "#581c87" }}
                    icon={<FontAwesomeIcon icon={faDiscord} />}
                  >
                    Discord
                  </Button>
                </Link>
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
                Oops, We Spilled Your Drink! PLease Try Again.
              </h3>

              <Button
                className="button primary mx-auto block w-full w-full rounded-md bg-trueFushia-900 p-2 uppercase text-trueZinc-100"
                auto
                shadow
                css={{ color: "#f4f4f5", background: "#581c87" }}
                onClick={() => reset()}
              >
                <FontAwesomeIcon icon={faArrowCircleLeft} className="mr-3" />{" "}
                Back
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
