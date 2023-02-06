import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

import Image from "next/image";
import SEO from "../components/seo";
import LayoutDashboard from "../layouts/layoutDashboard";
import Profile from "../components/dashboard/profile";

import { ConnectWallet } from "@thirdweb-dev/react";
import {
  useAddress,
  useUser,
  useLogin,
  useLogout,
  useMetamask,
} from "@thirdweb-dev/react";

const ProfilePage = () => {
  const session = useSession();
  const supabase = useSupabaseClient();
  const address = useAddress();
  const { user } = useUser();
  const router = useRouter();

  return (
    <>
      <SEO title="Profile | 4MoBeers" description="4MoBeers" />
      <LayoutDashboard>
        <div className="relative h-full mx-auto text-trueZinc-700 dark:text-trueZinc-100">
          <div className="relative mt-8 px-4 md:px-10 mx-auto w-full mb-24">
            <div className="flex flex-wrap content-center items-center justify-center ">
              {!user ? (
                <>
                  <div className="w-full h-[600px] xl:w-8/12 mb-12 xl:mb-0 px-4">
                    <div className="text-center text-xl text-trueZinc-700 dark:text-trueZinc-100 mb-8">
                      Please connect your wallet to access your profile.
                    </div>
                    <ConnectWallet />
                  </div>
                </>
              ) : (
                <>
                  <div className="w-full h-[700px] xl:w-8/12 mb-12 xl:mb-0 px-4">
                    <div className="text-2xl font-bold uppercase text-center mb-8">
                      Update Your Profile
                    </div>

                    <Profile address={address} />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </LayoutDashboard>
    </>
  );
};
export default ProfilePage;
{
  /*
export const getServerSideProps = async (ctx) => {
  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient(ctx);
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };

  return {
    props: {
      initialSession: session,
      user: session.user,
    },
  };
};
*/
}