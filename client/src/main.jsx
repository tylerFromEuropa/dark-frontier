import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Game from "./pages/Game";
import Menu from "./components/Menu";
import Construction from "./components/Construction";
import Start from "./pages/Start";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="tyler.uk.auth0.com"
      clientId="FTpq1OocH8JJP5gCP8ESHsjIv10euuu2"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <BrowserRouter>
        <App />
        <Routes>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/" element={<Construction />}></Route>
          <Route
            path="/game"
            // element={isAuthenticated ? <Game /> : <Start />}
            element={<Game />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);
