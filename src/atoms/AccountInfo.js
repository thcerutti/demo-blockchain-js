import React, { useState } from "react";
import Card from "react-bootstrap/Card";
const Web3 = require("web3");

export const AccountInfo = ({ accountId }) => {
  const [balance, setBalance] = useState("");
  const web3 = new Web3(Web3.givenProvider);

  const getAccountBalance = (accountId) => {
    web3.eth.getBalance(accountId, (_, balance) => {
      setBalance(balance.toString());
    });
  };

  getAccountBalance(accountId);

  return (
    <Card>
      <Card.Header>Account details</Card.Header>
      <Card.Body>
        <Card.Title>Connected Account</Card.Title>
        <Card.Text>{accountId}</Card.Text>

        <Card.Title>Account Balance</Card.Title>
        <Card.Text>{web3.utils.fromWei(balance, "ether")} ETH</Card.Text>
      </Card.Body>
    </Card>
  );
};
