import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import MouseCursor from "./UI/MouseCursor";
import Main from "./Page/Main";
import Seconds from "./Page/Seconds";

import classes from "./App.module.css";
import "./reset.css";

function App() {
  const [mouseData, setMouseData] = useState();

  return (
    <div className={classes.wrap} style={{ cursor: "none" }}>
      <header className={classes.header}>
        <h1>sam portfolio</h1>
      </header>

      <MouseCursor mouseDataHandler={mouseData} />

      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Main
                cursorData={(e) => {
                  setMouseData(e);
                }}
              />
            }
          ></Route>
          <Route path="/seconds" element={<Seconds />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
