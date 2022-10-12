import React, { useState } from "react";
import Card from "react-bootstrap/Card";
const Web3 = require("web3");

export const AccountInfo = ({ accountId }) => {
  const [balance, setBalance] = useState('');
  const web3 = new Web3(Web3.givenProvider);

  const getAccountBalance = (accountId) => {
    web3.eth.getBalance(accountId, (_, balance) => {
      setBalance(balance.toString());
    });
  };
  getAccountBalance(accountId);
  return (
    <Card body>
      <p>
        <strong>Connected Account: </strong> {accountId}
      </p>
      <p>
        <strong>Balance: </strong>
        {web3.utils.fromWei(balance, 'ether')} ETH
      </p>
    </Card>
  );
};
