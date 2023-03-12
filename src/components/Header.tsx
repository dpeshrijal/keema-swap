import { FC, useState, useEffect } from "react";
declare const window: any;

const Header: FC = () => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [connectText, setConnectText] = useState("Connect");

  const isWalletConnected = async () => {
    try {
      const { ethereum } = window;

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length > 0) {
        const account = accounts[0];

        setCurrentAccount(account);
        setConnectText(account.slice(0, 6) + "..." + account.slice(-4));
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const handleConnect = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        console.log("please install metamask");
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      setCurrentAccount(account);
      setConnectText(account.slice(0, 6) + "..." + account.slice(-4));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    isWalletConnected();
  }, []);

  return (
    <div className="flex justify-between px-8 mt-4">
      <div className="font-bold text-xl">Keema Swap</div>
      <button
        className="text-xl border rounded-full px-4 bg-gray-100"
        onClick={handleConnect}
      >
        {connectText}
      </button>
    </div>
  );
};

export default Header;
