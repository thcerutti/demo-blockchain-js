import React, { useState, useEffect } from "react";
import { ConnectToMetamask } from "../molecules/ConnectToMetamask";
import { BlockchainNavbar } from "../molecules/BlockchainNavbar";

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
        </BlockchainNavbar>
      </ConnectToMetamask>
    </>
  );
};
