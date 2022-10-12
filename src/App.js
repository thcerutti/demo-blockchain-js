import { Container } from "react-bootstrap";
import "./App.css";
import { ConnectToMetamask } from "./molecules/MetamaskConnection";

function App() {
  return (
    <Container>
      <ConnectToMetamask />
    </Container>
  );
}

export default App;
