import { useEffect, useState } from "react";
import "../CSS/Game.css";
import Header from "../components/Header";
import Characterselection from "../components/Characterselection";
import characters from "../JSON/characters.json";
import BossOne from "../components/BossFights/BossOne";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

export default function Game() {
  const [currentStep, setCurrentStep] = useState(0);
  const [myCharacter, setCharacter] = useState(0);

  const [myUser, setMyUser] = useState({
    userID: "",
    character: {},
  });

  return (
    <>
      <Header characters={characters} myCharacter={myCharacter} />
      <div id="gamecontainer">
        {currentStep === 0 && (
          <Characterselection
            myUser={myUser}
            setMyUser={setMyUser}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            myCharacter={myCharacter}
            setCharacter={setCharacter}
          />
        )}
      </div>
      {currentStep === 1 && <BossOne myUser={myUser} setMyUser={setMyUser} myCharacter={myCharacter} />}
    </>
  );
}
