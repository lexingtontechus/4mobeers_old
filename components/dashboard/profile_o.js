/* eslint-disable */
import React from "react";
import { useState, useEffect } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useAccount, useConnect } from "wagmi";
export default function Profile() {
  const { address, connector: activeConnector } = useAccount();

  //const wa = { address };
  const wc = activeConnector.name;
  const supabase = useSupabaseClient();
  //const user = useUser();

  const [loading, setLoading] = useState(true);
  const [isProfile, setIsProfile] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  //const [walletaddress, setWalletAddress] = useState(null);
  const [uuid, setUUID] = useState(null);
  const [beername, setBeername] = useState(null);
  const [beertitle, setBeertitle] = useState(null);
  const [fullname, setFullname] = useState(null);
  const [email, setEmail] = useState(null);
  const [provider, setProvider] = useState(null);
  const [walletaddress, setWalletAddress] = useState(null);

  useEffect(() => {
    getProfile();
  });

  async function getProfile() {
    try {
      setLoading(true);

      let { data, error, status } = await supabase
        .from("users")
        .select("*")
        .eq("walletaddress", address)
        .single();

      if (!data) {
        //setProvider(activeConnector.name);
        //const provider = setProvider;
        await supabase.from("users").insert({
          walletaddress: address,
          provider: wc,
        });
        //setUUID(data.id);
        //setWalletAddress(data.walletaddress);
        //setProvider(data.provider);
      }

      if (data) {
        setUUID(data.id);
        setWalletAddress(data.walletaddress);
        setEmail(data.email);
        setBeername(data.beername);
        setBeertitle(data.beertitle);
        setFullname(data.fullname);
        //setProvider(data.provider);
        //setWebsite(data.website)
        //setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      //alert("Error loading user data!");
      setIsProfile(false);
      console.log(error);
    } finally {
      setIsProfile(true);
      setLoading(false);
    }
  }

  async function updateProfile({ beername, email, beertitle, fullname }) {
    try {
      setLoading(true);
      const updates = {
        id: uuid,
        beername,
        email,
        beertitle,
        fullname,
        updated_at: new Date().toISOString(),
      };
      //let { error } = await supabase.from("users").upsert(updates);
      let { error } = await supabase
        .from("users")
        .update({
          beername: beername,
          email: email,
          beertitle: beertitle,
          fullname: fullname,
          updated_at: new Date().toISOString(),
        })
        .eq("id", uuid);
      //.eq("id", id);
      if (error) throw error;
      // alert("Profile updated!");
    } catch (error) {
      //alert("Error updating the data!");
      setIsSuccess(false);
      console.log(error);
    } finally {
      setIsSuccess(true);
      setLoading(false);
    }
  }

  return (
    <>
      {isProfile && isSuccess && (
        <>
          <div className="flex flex-col items-center justify-center text-center text-trueZinc-100 rounded-md">
            <h3 className="py-5 text-xl text-trueEmerald-500">
              Profile Updated Successfully!
            </h3>
          </div>
        </>
      )}
      <div className="form-widget align-center flex-grow h-full  overflow-auto">
        {!isProfile && !isSuccess && (
          <div className="flex flex-col items-center justify-center text-center text-trueZinc-100 rounded-md">
            <h3 className="text-xl text-trueEmerald-400 py-8 uppercase">
              <svg
                className="animate-spin h-5 w-5 mr-3 fill-truePink-600"
                viewBox="0 0 24 24"
              ></svg>
              Loading Profile
            </h3>
          </div>
        )}
        <div className="mb-4 font-bold">
          <label htmlFor="uuid">Profile ID</label>
          <input
            id="uuid"
            type="text"
            value={uuid || ""}
            disabled
            className="w-full text-truePink-600 rounded-md p-2 mt-4"
          />
        </div>
        <div className="mb-4 font-bold">
          <label htmlFor="beername">Beer Name (Required)</label>
          <input
            id="beername"
            type="text"
            value={beername || ""}
            required
            onChange={(e) => setBeername(e.target.value)}
            placeholder="Drink A Lot"
            className="w-full text-truePink-600 rounded-md p-2 mt-4"
          />
        </div>
        <div className="mb-4 font-bold">
          <label htmlFor="beertitle">Beer Title (Required)</label>
          <input
            id="beertitle"
            type="text"
            value={beertitle || ""}
            required
            onChange={(e) => setBeertitle(e.target.value)}
            placeholder="Beer King"
            className="w-full text-truePink-600 rounded-md p-2 mt-4"
          />
        </div>
        <div className="mb-4 font-bold">
          <label htmlFor="email">Email (Required)</label>
          <input
            id="email"
            type="text"
            value={email || ""}
            required
            placeholder="beerking@brewlandia.xyz"
            className="w-full text-truePink-600 rounded-md p-2 mt-4"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4 font-bold">
          <label htmlFor="fullname">Alias/Full Name (Optional)</label>
          <input
            id="fullname"
            type="text"
            value={fullname || ""}
            onChange={(e) => setFullname(e.target.value)}
            className="w-full text-truePink-600 rounded-md p-2 mt-4"
          />
        </div>
        <div className="align-center mb-4">
          <button
            className="uppercase button primary block bg-truePurple-700 rounded-md mt-8 p-2 w-full text-trueZinc-100"
            onClick={() =>
              updateProfile({
                beername,
                email,
                beertitle,
                fullname,
              })
            }
            disabled={loading}
          >
            {loading ? "LOADING ..." : "UPDATE"}
          </button>
        </div>
      </div>
    </>
  );
}
