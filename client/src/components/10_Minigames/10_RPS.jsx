import { useEffect, useState } from "react";
import "./10_RPS.css";
import guardsBG from "./guards.png";

export default function $10_RPS({ setCurrentStep, myUser }) {
  const choices = ["rock", "paper", "scissors"];
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    checkResult();
  }, [result]);

  function checkResult() {
    if (result === "You win!") {
      setCurrentStep(97);
    } else {
      return;
    }
  }

  const handleUserChoice = (choice) => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(choice);
    setComputerChoice(computerChoice);
    determineWinner(choice, computerChoice);
  };

  const determineWinner = (user, computer) => {
    if (user === computer) {
      setResult("It's a tie!");
    } else if (
      (user === "rock" && computer === "scissors") ||
      (user === "paper" && computer === "rock") ||
      (user === "scissors" && computer === "paper")
    ) {
      setResult("You win!");
    } else {
      setResult("Computer wins!");
    }
  };

  return (
    <div className="rps-container">
      <div className="character-info-container">
        <div className="character-info">
          <h2 class="rps-char-title">{myUser.character.name}</h2>
          <img className="character-image" src={myUser.character.img} alt="" />
        </div>
        <div className="character-choice">
          <h3 className="rps-choice-text">Your Choice:</h3>
          <p className="userChoice">{userChoice}</p>
        </div>
      </div>
      <div>
        <button className="rps-btn" onClick={() => handleUserChoice("rock")}>
          Rock
        </button>
        <button className="rps-btn" onClick={() => handleUserChoice("paper")}>
          Paper
        </button>
        <button
          className="rps-btn"
          onClick={() => handleUserChoice("scissors")}
        >
          Scissors
        </button>
        <h2 className="result">{result}</h2>
      </div>
      <div className="guard-info-container">
        <div className="guard-info">
          <h2 class="rps-char-title">Guards</h2>
          <img className="guards-image" src={guardsBG} alt="" />
        </div>
        <div className="npc-choice">
          <h3 className="rps-choice-text">Computer's choice:</h3>
          <p className="userChoice">{computerChoice}</p>
        </div>
      </div>
    </div>
  );
}
