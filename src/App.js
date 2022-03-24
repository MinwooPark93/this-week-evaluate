import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Detail from "./components/Detail";
import styled from "styled-components";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/Detail/:week" element={<Detail />}></Route>
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #333;
`;

export default App;
