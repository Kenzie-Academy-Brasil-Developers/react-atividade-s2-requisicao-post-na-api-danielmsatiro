import { Container } from "./style";

export const Display = ({ statusText }) => {

  return (
    <Container color={statusText==="OK" ? "green" : "red"}>
      {statusText === "OK" ? (
        <h2>Requisição completa</h2>
      ) : (
        <h2>Requisição falhou</h2>
      )}
    </Container>
  );
};
