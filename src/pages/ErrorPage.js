import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'

export const ErrorPage = () => {
  return (
    <Container>
      <h2>Ooops! Something went wrong</h2>
      <Link to={"/"}>Back home</Link>
    </Container>
  );
};
