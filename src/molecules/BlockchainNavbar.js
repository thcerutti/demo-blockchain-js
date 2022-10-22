import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AccountInfoNavbar } from "../atoms/AccountInfoNavbar";

export const BlockchainNavbar = ({ children, title, currentAccount }) => {
  
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">{title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Registro de imóveis</Nav.Link>
              <Nav.Link href="#link">Transferência de tokens</Nav.Link>
              <Nav.Link href="#link">Mercado de NFTs</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <AccountInfoNavbar accountId={currentAccount}/>
              {/* <small>
                <div>
                  <strong>Account: </strong>
                  {getAccountAlias(currentAccount)}
                </div>
              </small> */}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {children}
    </>
  );
};
