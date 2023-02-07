import { useState, useEffect } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

//import { useUser, useAddress } from "@thirdweb-dev/react";

//import { useSupabaseClient } from "@supabase/supabase-js";
//import { supabase } from "../../utils/supabase-clients";
//import { useUser } from "../../utils/useUser";

//export default function Profile() {
function Partner() {
  
  //const router = useRouter();
  const supabase = useSupabaseClient();
  

  //const connectedaddress = useAddress();
  const [loading, setLoading] = useState(true);
  
  const [uuid, setUUID] = useState(null);
  const [email, setEmail] = useState(null);
  const [companyname, setCompanyName] = useState(null);
  const [clientname, setClientname] = useState(null);
  const [contactnumber, setContactNumber] = useState(null);
  const [website, setWebsite] = useState(null);
  const [isProfile, setIsProfile] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    createPartners();
  });

  async function createPartners({ companyname, email, clientname, contactnumber,website, partnertype }) {
    try {
      setLoading(true);

      const updates = {
        id: uuid,
        companyname, email, clientname, contactnumber,website, partnertype
        updated_at: new Date().toISOString(),
      };

      let { error } = await supabase.from("partners").insert(updates);
      
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
              Partner Request Sent Successfully!
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
              Loading ...
            </h3>
          </div>
        )}
        <div className="mb-4 font-bold">
          
        <div className="mb-4 font-bold">
          <label htmlFor="companyname">Company Name (Required)</label>
          <input
            id="companyname"
            type="text"
            value={companyname || ""}
            {...register("Company Name", {required: true, maxLength: 80})}
            onChange={(e) => setCompanyname(e.target.value)}
            placeholder="Greatest Brewery Ever"
            className="w-full rounded-md p-2 mt-4"
          />
        </div>
        <div className="mb-4 font-bold">
          <label htmlFor="clientname">Your Name (Required)</label>
          <input
            id="clientname"
            type="text"
            value={clientname || ""}
            {...register("Your name", {required: true, maxLength: 80})}
            onChange={(e) => setClientName(e.target.value)}
            placeholder="Mr. Brew Master"
            className="w-full rounded-md p-2 mt-4"
          />
        </div>
        <div className="mb-4 font-bold">
          <label htmlFor="email">Email (Required)</label>
          <input
            id="email"
            type="text"
            value={email || ""}
            {...register("Email", {required: true, maxLength: 80})}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="brewmaster@email.com"
            className="w-full rounded-md p-2 mt-4"
          />
        </div>
        <div className="mb-4 font-bold">
          <label htmlFor="website">Website  (Required)</label>
          <input
            id="website"
            type="text"
            value={website || ""}
            {...register("Website", {required: true, maxLength: 80})}
            onChange={(e) => setWebsite(e.target.value)}
            className="w-full rounded-md p-2 mt-4"
          />
        </div>
         <div className="mb-4 font-bold">
          <label htmlFor="partnertype">Program  (Required)</label>
          <select   id="partnertype"
          {...register("Partner Program", { required: true })}
           onChange={(e) => setWebsite(e.target.value)}
            className="w-full rounded-md p-2 mt-4">
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
        
      </select>

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
