import React, { useState, useEffect } from "react";
import { AccountDetails } from "../atoms/AccountDetails";
import { ConnectToMetamask } from "../molecules/ConnectToMetamask";
import { BlockchainNavbar } from "../molecules/BlockchainNavbar";
import { PropertyNegotiation } from "../molecules/PropertyNegotiation";
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
      <ConnectToMetamask>
        <BlockchainNavbar title={"Blockchain Demos"} currentAccount={selectedAccount} >
          {/* <AccountDetails accountId={selectedAccount} /> */}
          {/* <TransferFunds currentAddress={selectedAccount} /> */}
          {/* <PropertyNegotiation /> */}
        </BlockchainNavbar>
      </ConnectToMetamask>
    </>
  );
};
