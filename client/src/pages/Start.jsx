import { useState } from "react";
import "../CSS/Start.css";
import LoginButton from "../components/LoginButton";
import Profile from "../components/Profile";

export default function Start() {
  return (
    <>
      <div className="bodyOverlay">
        <LoginButton />
      </div>
    </>
  );
}
