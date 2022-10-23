import React, { useState, useEffect } from "react";
import { ConnectToMetamask } from "../molecules/ConnectToMetamask";
import { BlockchainNavbar } from "../molecules/BlockchainNavbar";
import Container from "react-bootstrap/Container";

export const BaseTemplate = ({ children }) => {
  const [selectedAccount, setSelectedAccount] = useState();

  useEffect(() => {
    setTimeout(() => {
      setSelectedAccount(window.ethereum.selectedAddress);
    }, 200);
  }, []);

  return (
    <>
      <Container>
        <ConnectToMetamask>
          <BlockchainNavbar
            title={"Blockchain Demos"}
            currentAccount={selectedAccount}
          >
            {children}
          </BlockchainNavbar>
        </ConnectToMetamask>
      </Container>
    </>
  );
};
