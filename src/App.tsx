import { Outlet } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import styled from "@emotion/styled";

function App() {
  return (
    <Layout>
      <GlobalStyle />
      <Outlet />
    </Layout>
  );
}

export default App;

const Layout = styled.main`
  width: 600px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: white;
  padding: 1rem;

  @media (max-width: 600px) {
    width: 100%;
  }
`;
