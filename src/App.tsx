import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";

const Container = styled.main`
  max-width: 80%;
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
`;

function App() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

export default App;
