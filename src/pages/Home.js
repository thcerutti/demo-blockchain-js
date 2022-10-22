import React, { useState, useEffect } from "react";
import { AccountInfo } from "../atoms/AccountInfo";
import { ConnectToMetamask } from "../molecules/ConnectToMetamask";
import { TransferFunds } from "../organisms/TransferFunds";

export const Home = () => {
  const [selectedAccount, setSelectedAccount] = useState();

  useEffect(() => {
    setTimeout(() => {
      setSelectedAccount(window.ethereum.selectedAddress);
    }, 200);
  }, []);

  return (
    <>
      <h1>Home</h1>
      <ConnectToMetamask>
        <AccountInfo accountId={selectedAccount} />
        <TransferFunds currentAddress={selectedAccount} />
      </ConnectToMetamask>
    </>
  );
};
