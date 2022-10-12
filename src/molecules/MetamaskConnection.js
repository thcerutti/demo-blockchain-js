import React, { useState } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import Button from "react-bootstrap/Button";
import { AccountInfo } from "../atoms/AccountInfo";

export const ConnectToMetamask = () => {
  const [currentAccount, setCurrentAccount] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const [isMetamaskPresent, setIsMetamaskPresent] = useState(false);

  const connect = async () => {
    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then(setCurrentAccount)
      .catch(console.log);
  };

  detectEthereumProvider({ silent: true }).then((provider) => {
    if (provider && provider.isMetaMask) {
      provider.on("accountsChanged", setCurrentAccount);
      setIsMetamaskPresent(true);
    }
  });

  window.ethereum?.request({ method: "eth_accounts" }).then((accounts) => {
    setIsConnected(accounts.length > 0);
    if (isConnected) {
      setCurrentAccount(accounts[0]);
    }
  });

  return (
    <>
      {!isMetamaskPresent ? (
        <span>no metamask installed</span>
      ) : isMetamaskPresent && !isConnected ? (
        <Button onClick={() => connect()}>Connect to metamask</Button>
      ) : (
        <div>
          <AccountInfo accountId={window.ethereum?.selectedAddress} />
        </div>
      )}
    </>
  );
};
