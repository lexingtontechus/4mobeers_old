import React, { useState } from "react";

export const Whitelistform = ({ setFormState }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const formData = {};

    for (let [key, value] of form) {
      formData[key] = value;
    }

    try {
      const response = await fetch("/api/supabase", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormState(true);
      } else {
        console.error(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      className="w-full max-w-3xl mx-auto px-0 lg:p-10"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-dark text-xs font-secondary mb-2"
            htmlFor="firstName"
          >
            First Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-dark border border-dark rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary"
            type="text"
            id="firstName"
            name="firstName"
            required
            placeholder="Drunken"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-dark text-xs font-secondary mb-2"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-dark border border-dark rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary"
            type="text"
            id="lastName"
            name="lastName"
            required
            placeholder="Sailor"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-dark text-xs font-secondary mb-2"
            htmlFor="emailAddress"
            placeholder="drunkensailor@4mobeer.nft"
          >
            E-mail
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-dark border border-dark rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary"
            id="emailAddress"
            type="email"
            name="emailAddress"
            required
            placeholder="drunkensailor@4mobeer.nft"
          />
        </div>
      </div>

      <div className="md:flex md:items-center">
        <div className="md:w-1/3">
          <button
            type="button"
            label="Submit"
            action="submit"
            onClick={() => submit()}
            className="w-full px-3 py-4 text-white bg-trueFushia-500 rounded-md focus:bg-trueFushia-600 focus:outline-none"
          >
            Join
          </button>
        </div>
      </div>
    </form>
  );
};
