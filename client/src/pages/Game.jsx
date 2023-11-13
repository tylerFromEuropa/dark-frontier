import { useState } from "react";
import "../CSS/Game.css";
import Header from "../components/Header";
import Characterselection from "../components/Characterselection";
import characters from "../JSON/characters.json";
import BossOne from "../components/BossFights/BossOne";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

export default function Game() {
  const [currentStep, setCurrentStep] = useState(0);
  const [character, setCharacter] = useState(0);

  const [user, setUser] = useState({});

  async function createUser() {
    const API = `https://dark-frontier.onrender.com/users`;
    const res = await axios.post(API);
  }

  return (
    <>
      <Header characters={characters} character={character} />
      <div id="gamecontainer">
        {currentStep === 0 && (
          <Characterselection user={user} setUser={setUser} currentStep={currentStep} setCurrentStep={setCurrentStep} setCharacter={setCharacter} />
        )}
      </div>
      {currentStep === 1 && <BossOne character={character} />}
    </>
  );
}
