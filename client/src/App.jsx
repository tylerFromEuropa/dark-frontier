import { useState } from "react";
import "./CSS/Reset.css";
import "./CSS/App.css";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import Game from "./pages/Game";

// import Construction from "./components/Construction";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isAuthenticated ? <Game /> : <Start />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
