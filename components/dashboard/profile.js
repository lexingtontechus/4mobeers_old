import {
  useAddress,
  useUser,
  useLogin,
  useLogout,
  useMetamask,
  useWalletConnect,
} from "@thirdweb-dev/react";

import { useState, useEffect } from "react";

import { useRouter } from "next/router";
import Image from "next/image";
import Avatar from "./avatar";
import ConnectWallet from "../../components/connectwallet";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import styles from "../../styles/styles.module.scss";

export default function Profile({ session }) {
  const router = useRouter();
  const supabase = useSupabaseClient();
  const user = useUser();
  const wallet = useAddress();
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState(null);
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [full_name, setFullname] = useState(null);
  const [title, setTitle] = useState(null);
  const [website, setWebsite] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);

  useEffect(() => {
    getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);

      let { data, error, status } = await supabase
        .from("users")
        .select(
          `address, full_name, email, username, title website, avatar_url`
        )
        .eq("address", wallet)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setAddress(data.address);
        setFullname(data.full_name);
        setEmail(data.email);
        setUsername(data.username);
        setTitle(data.title);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({
    full_name,
    email,
    username,
    title,
    website,
    avatar_url,
  }) {
    try {
      setLoading(true);

      const updates = {
        address: user.address,
        full_name,
        email,
        username,
        title,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      };

      let { error } = await supabase.from("users").upsert(updates);
      if (error) throw error;
      alert("Profile updated!");
    } catch (error) {
      alert("Error updating the data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <div className="form-widget align-center flex-grow h-full p-6 overflow-auto">
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

        <div className="py-4 align-center mb-4 bg-trueZinc-900">
          <Avatar
            address={address}
            url={avatar_url}
            size={150}
            onUpload={(url) => {
              setAvatarUrl(url);
              updateProfile({ username, website, avatar_url: url });
            }}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="addess">Wallet Address</label>
          <input
            id="address"
            type="text"
            value={address || ""}
            disabled
            className="w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="fullname">Full Name</label>
          <input
            id="fullname"
            type="text"
            value={full_name || ""}
            onChange={(e) => setFullname(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            value={email || ""}
            className="w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username || ""}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            type="website"
            value={website || ""}
            onChange={(e) => setWebsite(e.target.value)}
            className="w-full"
          />
        </div>

        <div className="align-center mb-4">
          <button
            className="button primary block bg-trueZinc-900 rounded-md p-2 w-full text-trueZinc-100"
            onClick={() =>
              updateProfile({ full_name, email, username, website, avatar_url })
            }
            disabled={loading}
          >
            {loading ? "Loading ..." : "Update"}
          </button>
        </div>

        <div className="mb-4">
          <div>
            <ConnectWallet className={styles.connect} />
          </div>
        </div>
      </div>
    </>
  );
}
