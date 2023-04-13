import prettier from "prettier";
import React, { useState, useEffect } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useAccount, useConnect } from "wagmi";
import {
  Button,
  Spacer,
  Input,
  useInput,
  Text,
  Loading,
} from "@nextui-org/react";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Profile({ address }) {
  const supabase = useSupabaseClient();
  const { connector: activeConnector } = useAccount();
  const provider = activeConnector.name;
  //const provider = { walletprovider };

  const [loading, setLoading] = useState(true);

  //const [walletaddress, setWalletAddress] = useState(null);
  const [uuid, setUUID] = useState(null);
  const [beername, setBeername] = useState(null);
  const [beertitle, setBeertitle] = useState(null);
  const [email, setEmail] = useState(null);
  //const [provider, setProvider] = useState(null);
  //const [fullname, setFullname] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

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

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUUID(data.id);
        setEmail(data.email);
        setBeername(data.beername);
        setBeertitle(data.beertitle);
        setProvider(walletprovider);
      }
    } catch (error) {
      //alert("Error loading user data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({ uuid, beername, beertitle, email, provider }) {
    try {
      setLoading(true);

      const updates = {
        //id: uuid,
        walletaddress: address,
        beername,
        beertitle,
        email,
        provider,
        updated_at: new Date().toISOString(),
      };

      let { error } = await supabase.from("users").upsert(updates);
      //.eq("walletaddress", address);
      {
        /*} let { error } = await supabase
        .from("users")
        .update({
          // id: "d18baef1-f294-4b54-bdc4-7fd76b12758b",
          //walletaddress: "0x283A6f1D0974e10c20047480dA08FB2874911504",
          beername: "HELLO",
          beertitle: "HELLO", //beertitle,
          email: "HELLO@hello.com", //email,
          fullname: "HELLO",
          provider: "HELLO", //walletprovider,
          updated_at: new Date().toISOString(),
        })
        .eq("id", "d18baef1-f294-4b54-bdc4-7fd76b12758b");
        */
      }
      if (error) throw error;
      alert("Profile updated!");
    } catch (error) {
      alert("Error updating the data!");
      console.log(error);
    } finally {
      setIsSuccess(true);
      setLoading(false);
    }
  }

  return (
    <div className="form-widget align-center overflow-none h-full flex-grow">
      <div className="mb-4 font-bold text-truePink-600">
        {loading ? (
          <>
            <Text h1>
              LOADING PROFILE ... <Loading type="points" size="sm" />
              <Spacer />
            </Text>
          </>
        ) : (
          <>
            <Input
              id="uuid"
              label="Profile ID"
              type="text"
              value={uuid}
              disabled
              fullWidth
              color="secondary"
              textColor="$black700"
            />
          </>
        )}
      </div>

      <div className="mb-4 font-bold text-truePink-600">
        <Input
          id="beername"
          label="Beer Name"
          type="text"
          value={beername || ""}
          onChange={(e) => setBeername(e.target.value)}
          color="secondary"
          fullWidth
          clearable
          bordered
        />
      </div>
      <div className="mb-4 font-bold text-truePink-600">
        <Input
          id="beertitle"
          label="Beer Title"
          type="text"
          value={beertitle || ""}
          onChange={(e) => setBeertitle(e.target.value)}
          color="secondary"
          fullWidth
          clearable
          bordered
          className=""
        />
      </div>
      <div className="mb-4 font-bold text-truePink-600">
        <Input
          id="email"
          label="Email"
          type="email"
          value={email || ""}
          onChange={(e) => setEmail(e.target.value)}
          color="secondary"
          fullWidth
          clearable
          bordered
          className="autofill:bg-current"
        />
      </div>
      <div className="align-center mb-4 mt-4">
        <Button
          fullWidth
          animated
          ripple
          shadow
          className="button primary block w-full bg-trueFushia-700 uppercase text-trueZinc-100"
          onPress={() =>
            updateProfile({ uuid, beername, beertitle, email, provider })
          }
          //disabled={loading}
        >
          Update
        </Button>
      </div>
      {isSuccess ? (
        <>
          <div className="flex h-full flex-col items-center justify-center rounded-md text-center text-trueZinc-100">
            <Player
              autoplay
              loop
              src="https://storage.fleek.zone/ead18a13-670a-4701-91a7-06a767c3dcd5-bucket/assets/lottie/drunkbeerbottlegreen.json"
              style={{ height: "100px", width: "100px" }}
            ></Player>
            <h2 className="py-5 text-xl uppercase text-trueEmerald-500">
              Cheers!!
            </h2>
          </div>
        </>
      ) : (
        <>
          <div className="flex h-full flex-col items-center justify-center rounded-md text-center text-trueZinc-100">
            <Player
              autoplay
              loop
              src="https://storage.fleek.zone/ead18a13-670a-4701-91a7-06a767c3dcd5-bucket/assets/lottie/drunkbeerbottlered.json"
              style={{ height: "100px", width: "100px" }}
            ></Player>
            <h2 className="py-5 text-xl uppercase text-trueEmerald-500">
              Oops!! We spilled your drink.
            </h2>
          </div>
        </>
      )}
    </div>
  );
}
