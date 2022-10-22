import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export const TransferFunds = ({ currentAddress }) => {
  const [destinationAddress, setDestinationAddress] = useState("");
  return (
    <>
      {currentAddress && (
        <div>
          <span>current address{currentAddress}</span>
          <h2>transfer funds</h2>
          <Form>
            <Form.Group>
              <Form.Label>Origin account</Form.Label>
              <Form.Control value={currentAddress} disabled></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Destination</Form.Label>
              <Form.Control
                value={destinationAddress}
                onChange={(event) => setDestinationAddress(event.target.value)}
              ></Form.Control>
              <span>{destinationAddress}</span>
            </Form.Group>
            <Form.Group>
              <Button
                type="button"
                onClick={() => {
                  console.log("transfer funds now");
                }}
              >
                Transfer funds
              </Button>
            </Form.Group>
          </Form>
        </div>
      )}
    </>
  );
};
