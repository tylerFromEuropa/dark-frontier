import { useState } from "react";
import "./CSS/Reset.css";
import "./CSS/App.css";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import Header from "./components/Header";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <Header />
    </>
  );
}

export default App;
