import { useState } from "react";
import "../CSS/Start.css";
import LoginButton from "../components/LoginButton";
import Header from "../components/Header";
import Profile from "../components/Profile";

export default function Start() {
  return (
    <>
      <div className="bodyOverlay">
        <Header />
        <LoginButton />
      </div>
    </>
  );
}
