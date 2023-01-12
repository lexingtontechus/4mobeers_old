import {
  useAddress,
  useUser,
  useLogin,
  useLogout,
  useMetamask,
} from "@thirdweb-dev/react";

const Wallet = () => {
  const address = useAddress();
  const connect = useMetamask();

  const login = useLogin();
  const logout = useLogout();
  const { user } = useUser();

  return (
    <div>
      {address ? (
        <>
          <button
            onClick={() => login()}
            className="mt-2 button primary block bg-trueZinc-900 dark:bg-trueZinc-50 rounded-md p-2 w-full text-trueZinc-100 dark:text-trueZinc-700"
          >
            Login with Wallet
          </button>
          <button
            onClick={logout}
            className="mt-2 button primary block bg-trueZinc-900 dark:bg-trueZinc-50 rounded-md p-2 w-full text-trueZinc-100 dark:text-trueZinc-700"
          >
            Logout
          </button>
         {/* <pre>User: {JSON.stringify(user || null)}</pre>*/}
        </>
      ) : (
        <button onClick={connect}>Connect Wallet</button>
      )}
    </div>
  );
};

export default Wallet;
