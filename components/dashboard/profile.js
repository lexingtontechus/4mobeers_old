import { useState, useEffect } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

//import { useUser, useAddress } from "@thirdweb-dev/react";

//import { useSupabaseClient } from "@supabase/supabase-js";
//import { supabase } from "../../utils/supabase-clients";
//import { useUser } from "../../utils/useUser";
import { useAccount, useConnect, useDisconnect } from "wagmi";

//export default function Profile() {
function Profile() {
  const { address, connector: activeConnector } = useAccount();

  //const router = useRouter();
  const supabase = useSupabaseClient();
  const wc = activeConnector.name;
  const { disconnect } = useDisconnect();

  //const connectedaddress = useAddress();
  const [loading, setLoading] = useState(true);
  const [walletaddress, setWalletAddress] = useState(null);
  const [uuid, setUUID] = useState(null);
  const [email, setEmail] = useState(null);
  const [beername, setBeername] = useState(null);
  const [fullname, setFullname] = useState(null);
  const [beertitle, setBeertitle] = useState(null);
  const [provider, setProvider] = useState(null);
  const [isProfile, setIsProfile] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    getProfile();
  }, [wc]);

  async function getProfile() {
    try {
      setLoading(true);

      let { data, error, status } = await supabase
        .from("users")

        .select("*")
        .eq("walletaddress", address)

        .single();

      if (error && status !== 406) {
        throw error;
      }
      if (!data) {
        setProvider(activeConnector.name);
        //const provider = setProvider;

        await supabase
          .from("users")
          .insert({ walletaddress: address, provider: wc })
          .single();
      }

      if (data) {
        setUUID(data.id);
        setWalletAddress(data.walletaddress);
        setFullname(data.fullname);
        setEmail(data.email);
        setBeername(data.beername);
        setBeertitle(data.beertitle);
        setProvider(data.provider);
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

  async function updateProfile({ fullname, email, beername, beertitle }) {
    try {
      setLoading(true);

      const updates = {
        id: uuid,
        fullname,
        email,
        beername,
        beertitle,

        updated_at: new Date().toISOString(),
      };

      let { error } = await supabase.from("users").upsert(updates);
      //.eq("walletaddress", connectedaddress);

      //.eq("id", id);
      if (error) throw error;
      //alert("Profile updated!");
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
      <div className="form-widget align-center flex-grow h-full overflow-auto">
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
          <label htmlFor="walletaddress">Wallet Address</label>
          <input
            id="walletaddress"
            type="text"
            value={walletaddress || ""}
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
            required
            onChange={(e) => setBeername(e.target.value)}
            placeholder="Drink A Lot"
            className="w-full rounded-md p-2 mt-4"
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
            className="w-full rounded-md p-2 mt-4"
          />
        </div>
        <div className="mb-4 font-bold">
          <label htmlFor="email">Email (Required)</label>
          <input
            id="email"
            type="text"
            value={email || ""}
            required
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
            className="uppercase button primary block bg-truePurple-900 rounded-md mt-8 p-2 w-full text-trueZinc-100"
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
            {loading ? "Loading ..." : "Update"}
          </button>
        </div>

        {/*        <div className="align-center mb-4">
          <button
            className="uppercase button primary block bg-truePurple-900 rounded-md mt-8 p-2 w-full text-trueZinc-100"
            onClick={() => disconnect()}
          >
            Disconnect
          </button>
        </div>*/}
      </div>
    </>
  );
}

export default Profile;

export async function getServerSideProps() {
  let { data: user } = await supabase
    .from("users")
    .select()
    .eq("walletaddress", address)
    .single();
  if (!user) {
    const res = await supabase
      .from("users")
      .insert({ walletaddress: address })
      .single();

    if (res.error) {
      throw new Error("Failed to create user!");
    }
  }
  return {
    props: {
      users: data,
    },
  };
}
