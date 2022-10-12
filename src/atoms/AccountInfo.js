import React from "react";
import Card from "react-bootstrap/Card";

export const AccountInfo = ({ accountId }) => (
  <Card body>Connected Account: {accountId}</Card>
);
