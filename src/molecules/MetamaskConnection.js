import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { AccountInfo } from "../atoms/AccountInfo";

export const ConnectToMetamask = () => {
  const [currentAccount, setCurrentAccount] = useState();
  const [isConnected, setIsConnected] = useState(false);

  const connect = async () => {
    let account = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setCurrentAccount(account[0]);
    setIsConnected(true);
  };

  useEffect(() => {
    setCurrentAccount(window.ethereum?.selectedAddress);
    console.log("useEffect");
  }, [isConnected]);

  window.ethereum.on("accountsChanged", (accounts) => {
    console.log("accounts: ", accounts);
    setIsConnected(window.ethereum?.selectedAddress !== null);
    setCurrentAccount(accounts[0]);
  });

  return (
    <>
      {!window.ethereum?.isMetaMask ? (
        <span>no metamask installed</span>
      ) : !isConnected ? (
        <Button onClick={() => connect()}>Connect to metamask</Button>
      ) : (
        <AccountInfo accountId={currentAccount} />
      )}
    </>
  );
};
