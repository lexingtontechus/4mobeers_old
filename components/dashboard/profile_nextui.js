import prettier from "prettier";
import React, { useState, useEffect } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useAccount, useConnect } from "wagmi";
import { Button, Input, Spacer, useInput, Grid, Text } from "@nextui-org/react";

export default function Account() {
  const { address, connector: activeConnector } = useAccount();
  const wc = activeConnector.name;
  const supabase = useSupabaseClient();

  const [loading, setLoading] = useState(true);

  //const [walletaddress, setWalletAddress] = useState(null);
  const [uuid, setUUID] = useState(null);
  const [beername, setBeername] = useState(null);
  const [beertitle, setBeertitle] = useState(null);
  const [email, setEmail] = useState(null);
  //const [provider, setProvider] = useState(null);
  //const [fullname, setFullname] = useState(null);

  const { value, reset, bindings } = useInput("");

  const validateEmail = (value) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  };

  const helper = React.useMemo(() => {
    if (!value)
      return {
        text: "Eg. beersupremo@beerlandia.xyz",
        color: "secondary",
      };
    const isValid = validateEmail(value);
    return {
      text: isValid ? "Cheers!" : "Enter a valid email",
      color: isValid ? "success" : "error",
    };
  }, [value]);

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
      setLoading(false);
      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUUID(data.id);
        setEmail(data.email);
        setBeername(data.beername);
        setBeertitle(data.beertitle);
        //setFullname(data.fullname);
        //setProvider(data.provider);
        //setWalletAddress(data.walletaddress);
        //setWebsite(data.website)
        //setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      //alert("Oops we spilled your drink!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({ uuid, beername, email, beertitle }) {
    try {
      setLoading(false);

      const updates = {
        //id: uuid,
        walletaddress: address,
        beername,
        email,
        beertitle,
        provider: wc,
        updated_at: new Date().toISOString(),
      };

      //let { error } = await supabase.from("users").update(updates);

      let { error } = await supabase
        .from("users")
        .update({
          beername: beername,
          email: email,
          beertitle: beertitle,
          provider: wc,
          updated_at: new Date().toISOString(),
        })
        .eq("walletaddress", address);
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
    <Grid.Container gap={4} display="inline-block" justify="center" bordered>
      {uuid} {beername} {wc}
      <Grid xs={12}>
        <Input
          clearable
          shadow={false}
          fullWidth
          bordered
          status="secondary"
          color="secondary"
          labelPlaceholder="Beer Name"
          helperText="e.g. Toasty Brewhead"
          helperColor="secondary"
          type="text"
          onClearClick={reset}
          value={beername}
          onChange={(e) => setBeername(e.target.value)}
        />
      </Grid>
      <Grid xs={12}>
        <Input
          fullWidth
          bordered
          clearable
          status="secondary"
          color="secondary"
          labelPlaceholder="Beer Title"
          helperText="e.g. Beer Supremo"
          helperColor="secondary"
          type="text"
          onClearClick={reset}
          value={beertitle}
          onChange={(e) => setBeertitle(e.target.value)}
        />
      </Grid>
      <Grid xs={12}>
        <Input
          {...bindings}
          fullWidth
          bordered
          clearable
          shadow={false}
          onClearClick={reset}
          status={helper.color}
          color={helper.color}
          helperColor={helper.color}
          helperText={helper.text}
          labelPlaceholder="Email"
          type="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>
      <Grid xs={12}>
        <Button
          className="bg-trueFushia-700"
          bordered
          ripple
          animated
          shadow
          css={{ color: "#f4f4f5", background: "#581c87", width: "100%" }}
          //disabled={loading}
          onPress={() => updateProfile({ uuid, beername, email, beertitle })}
        >
          <Text color="#f4f4f5" transform="uppercase" size={16}>
            Update
          </Text>
        </Button>
      </Grid>
    </Grid.Container>
  );
}
