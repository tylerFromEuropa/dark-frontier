import React from "react";
import "../CSS/Start.css";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="loginContainer">
      <button className="loginButton" onClick={() => loginWithRedirect()}>
        LOG IN / SIGN UP
      </button>
    </div>
  );
};

export default LoginButton;
