import { useState } from "react";
import "../CSS/Game.css";
import Header from "../components/Header";
import Characterselection from "../components/Characterselection";

export default function Game() {
  const [currentStep, setCurrentStep] = useState(0);
  const [character, setCharacter] = useState(0);
  return (
    <>
      <Header />
      <div id="gamecontainer">
        {currentStep === 0 && (
          <Characterselection
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            character={character}
            setCharacter={setCharacter}
          />
        )}
      </div>
    </>
  );
}
