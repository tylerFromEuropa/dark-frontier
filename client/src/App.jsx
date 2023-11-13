import { useState } from "react";
import "./CSS/Reset.css";
import "./CSS/App.css";
import Profile from "./components/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Header from "./components/Header";

import Game from "./pages/Game";
import Menu from "./components/Menu";
import Construction from "./components/Construction";
import Start from "./pages/Start";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Construction />}></Route>
          <Route
            path="/game"
            element={isAuthenticated ? <Game /> : <Start />}
            // element={<Game />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
