import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainHeader from "./MainHeader";
import Main from "./Main";
import Sub from "./Sub";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/sub" element={<Sub />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
