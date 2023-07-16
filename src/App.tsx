import styled from "styled-components";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Main>
      <Routes>
        <Route path="" element={"home"} />
      </Routes>
    </Main>
  );
}

export default App;

const Main = styled.main`
  background-color: #fff;
  width: 100%;
  height: 100%n;
`;
