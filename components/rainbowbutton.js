import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useState, useEffect } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useAccount, useConnect } from "wagmi";

export default function RainbowConnect() {
  const { address, connector: activeConnector } = useAccount();
  const wc = { activeConnector };
  const supabase = useSupabaseClient();
  const user = useUser();

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [profile, setIsProfile] = useState(true);

  useEffect(() => {
    getProfile();
  }, [wc]);

  async function getProfile() {
    try {
      const newaddress = { address };
      setLoading(true);

      let { data, error, status } = await supabase
        .from("users")
        .select("*")
        .eq("walletaddress", newaddress)
        .single();

      if (error && status !== 406) {
        // throw error;
        await supabase
          .from("users")
          .insert({ walletaddress: address, provider: wc });
      }
      if (!data) {
        //setProvider(activeConnector.name);
        //const provider = setProvider;

        await supabase
          .from("users")
          .insert({ walletaddress: address, provider: wc });
        //.upsert(true);
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

  return (
    <ConnectButton
      label="CONNECT"
      chainStatus="none"
      showBalance={false}
      accountStatus={{
        smallScreen: "avatar",
        largeScreen: "full",
      }}
    />
  );
}
