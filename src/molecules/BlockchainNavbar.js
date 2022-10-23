import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AccountInfoNavbar } from "../atoms/AccountInfoNavbar";
import { LinkContainer } from "react-router-bootstrap";

export const BlockchainNavbar = ({ children, title, currentAccount }) => {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>{title}</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/property-negotiation">
                <Nav.Link>Registro de imóveis</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/transfer-funds">
                <Nav.Link>Transferência de tokens</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <AccountInfoNavbar accountId={currentAccount} />
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {children}
    </>
  );
};
