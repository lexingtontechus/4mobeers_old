import { useState, useEffect } from "react";

import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

import Image from "next/image";
import SEO from "../components/seo";
import LayoutDashboard from "../layouts/layoutDashboard";

import Profile from "../components/dashboard/profile";

import { ConnectWallet } from "@thirdweb-dev/react";

const ProfilePage = () => {
  const session = useSession();
  const supabase = useSupabaseClient();
  return (
    <>
      <SEO title="Profile | 4MoBeers" description="4MoBeers" />
      <LayoutDashboard>
        <div className="relative h-full mx-auto text-trueZinc-700 dark:text-trueZinc-100">
          <div className="relative mt-8 px-4 md:px-10 mx-auto w-full mb-24">
            <div className="text-xl font-bold uppercase text-center mb-8">
              Update Your Profile
            </div>
            <div className="flex flex-wrap content-center items-center justify-center min-h-[250px] sm:h-[600px]">
              <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                {/*{!session ? <ConnectWallet /> : <Profile session={session} />}*/}
                <Profile session={session} />
              </div>
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
