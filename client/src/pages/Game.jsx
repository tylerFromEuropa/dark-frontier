import { useState } from "react";
import "../CSS/Game.css";
import Header from "../components/Header";
import Characterselection from "../components/Characterselection";
import characters from "../JSON/characters.json";
import BossOne from "../components/BossFights/BossOne";
import { useAuth0 } from "@auth0/auth0-react";

export default function Game() {
  const [currentStep, setCurrentStep] = useState(0);
  const [character, setCharacter] = useState(0);

  const [user, setUser] = useState({});

  async function handleUser() {
    const API = ``;
  }

  return (
    <>
      <Header characters={characters} character={character} />
      <div id="gamecontainer">
        {currentStep === 0 && <Characterselection currentStep={currentStep} setCurrentStep={setCurrentStep} setCharacter={setCharacter} />}
      </div>
      {currentStep === 1 && <BossOne character={character} />}
    </>
  );
}
