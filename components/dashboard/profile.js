import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Avatar from "./avatar";
import Link from "next/link";

import { useUser, useAddress } from "@thirdweb-dev/react";

//import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
//import { useSupabaseClient } from "@supabase/supabase-js";
import { supabase } from "../../utils/supabase-clients";

export default function Profile({ address }) {
  //const router = useRouter();
  //const supabase = useSupabaseClient();

  const user = useUser();
  const connectedaddress = useAddress();
  const [loading, setLoading] = useState(true);
  const [walletaddress, setWalletAddress] = useState(null);
  const [uuid, setUUID] = useState(null);
  const [email, setEmail] = useState(null);
  const [beername, setBeername] = useState(null);
  const [fullname, setFullname] = useState(null);
  const [beertitle, setBeertitle] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);
  const [isProfile, setIsProfile] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    getProfile();
  }, [address]);

  async function getProfile(address) {
    try {
      setLoading(true);

      let { data, error, status } = await supabase
        .from("users")
        //.select("walletaddress, beername, fullname, email, beertitle, avatar_url")
        .select("*")
        .eq("walletaddress", connectedaddress)
        //.eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUUID(data.id);
        setWalletAddress(data.walletaddress);
        setFullname(data.fullname);
        setEmail(data.email);
        setBeername(data.beername);
        setBeertitle(data.beertitle);
        setAvatarUrl(data.avatar_url);
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

  async function updateProfile({
    fullname,
    email,
    beername,
    beertitle,
    avatar_url,
  }) {
    try {
      setLoading(true);

      const updates = {
        id: uuid,
        fullname,
        email,
        beername,
        beertitle,
        avatar_url,
        updated_at: new Date().toISOString(),
      };

      let { error } = await supabase.from("users").upsert(updates);
      //.eq("walletaddress", connectedaddress);

      //.eq("id", id);
      if (error) throw error;
      //alert("Profile updated!");
      setIsSuccess(false);
    } catch (error) {
      //alert("Error updating the data!");
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
              Profile Updated Successfully!
            </h3>
          </div>
        </>
      )}

      {!isProfile && !isSuccess && (
        <div className="flex flex-col items-center justify-center text-center text-trueZinc-100 rounded-md">
          <h3 className="text-xl text-red-400 py-7">Loading Profile</h3>
        </div>
      )}
      <div className="form-widget align-center flex-grow h-full p-6 overflow-auto mb-32">
        {/* <div className="p-8">
          {avatar_url ? (
            <Image
              src={avatar_url}
              alt="Avatar"
              className="rounded-full mx-auto"
              width={150}
              height={150}
            />
          ) : (
            <div className="avatar no-image" width={150} height={150}>
              <Image
                src="https://storageapi.fleek.co/9ec37732-832c-4af1-a4fa-cc87c28c6dae-bucket/assets/img/memberprofile.png"
                alt="Avatar"
                className="rounded-half mx-auto"
                width={150}
                height={150}
              />
            </div>
          )}
        </div>*/}
        {/*
        <div className="py-4 align-center mb-4 bg-trueZinc-900">
             <Avatar
            uid={user.id}
            url={avatar_url}
            size={150}
            onUpload={(url) => {
              setAvatarUrl(url);
              updateProfile({ beername, avatar_url: url });
            }}
            
          />
          
        </div>
*/}
        <div className="mb-4 font-bold">
          <label htmlFor="walletaddress">Wallet Address</label>
          <input
            id="walletaddress"
            type="text"
            value={connectedaddress || ""}
            disabled
            className="w-full text-truePink-500 rounded-md p-2 mt-4"
          />
        </div>
        {/*<div className="mb-4">
          <label htmlFor="id">UserID</label>
          <input
            id="uuid"
            type="text"
            value={uuid || ""}
            disabled
            className="w-full text-truePink-500 rounded-md p-2 mt-4"
          />
        </div>*/}
        <div className="mb-4 font-bold">
          <label htmlFor="beername">Beer Name (Required)</label>
          <input
            id="beername"
            type="text"
            value={beername || ""}
            onChange={(e) => setBeername(e.target.value)}
            placeholder="Drink A Lot"
            className="w-full rounded-md p-2 mt-4"
          />
        </div>
        <div className="mb-4 font-bold">
          <label htmlFor="beertitle">Beer Title (Required)</label>
          <input
            id="beertitle"
            type="beertitle"
            value={beertitle || ""}
            onChange={(e) => setBeertitle(e.target.value)}
            placeholder="Beer King"
            className="w-full rounded-md p-2 mt-4"
          />
        </div>
        <div className="mb-4 font-bold">
          <label htmlFor="email">Email (Required)</label>
          <input
            id="email"
            type="text"
            value={email || ""}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="beerking@email.com"
            className="w-full rounded-md p-2 mt-4"
          />
        </div>
        <div className="mb-4 font-bold">
          <label htmlFor="fullname">Alias/Full Name (Optional)</label>
          <input
            id="fullname"
            type="text"
            value={fullname || ""}
            onChange={(e) => setFullname(e.target.value)}
            className="w-full rounded-md p-2 mt-4"
          />
        </div>

        <div className="align-center mb-4">
          <button
            className="button primary block bg-truePurple-900 rounded-md mt-8 p-2 w-full text-trueZinc-100"
            onClick={() =>
              updateProfile({
                fullname,
                email,
                beername,
                beertitle,
                avatar_url,
              })
            }
            disabled={loading}
          >
            {loading ? "Updating ..." : "Update"}
          </button>
        </div>
      </div>
    </>
  );
}
