import React, { useState, useEffect } from "react";
const Web3 = require("web3");

export const AccountInfoNavbar = ({ accountId }) => {
  const [balance, setBalance] = useState("");
  const web3 = new Web3(Web3.givenProvider);

  const getAccountAlias = (accountAddress) =>
    accountAddress
      ? `${accountAddress.substr(0, 5)}...${accountAddress.substr(
          accountAddress.length - 5,
          5
        )}`
      : "nada";

  const getAccountBalance = (accountId) => {
    if (!accountId) return;

    web3.eth.getBalance(accountId, (_, balance) => {
      setBalance(balance.toString());
    });
  };

  useEffect(() => {
    getAccountBalance(accountId);
  });

  return (
    <>
      <small>
        <div>
          <span>
            <strong>Account:</strong> {getAccountAlias(accountId)}
          </span>
        </div>
        <div>
          <span>
            <strong>Balance:</strong> {web3.utils.fromWei(balance, "ether")} ETH
          </span>
        </div>
      </small>
    </>
  );
};
