import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

export const ConnectToMetamask = ({ children }) => {
  const [, setCurrentAccount] = useState();
  const [isConnected, setIsConnected] = useState(false);

  const connect = async () => {
    let account = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setCurrentAccount(account[0]);
    setIsConnected(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setCurrentAccount(window.ethereum?.selectedAddress);
      setIsConnected(window.ethereum?.selectedAddress !== null);
    }, 200);
  }, [isConnected]);

  useEffect(() => {
    window.ethereum.on("accountsChanged", (accounts) => {
      setIsConnected(window.ethereum?.selectedAddress !== null);
      setCurrentAccount(accounts[0]);
    });
  }, []);

  return (
    <>
      {!window.ethereum?.isMetaMask ? (
        <span>no metamask installed</span>
      ) : !isConnected ? (
        <Button onClick={() => connect()}>Connect to metamask</Button>
      ) : (
        children
      )}
    </>
  );
};
