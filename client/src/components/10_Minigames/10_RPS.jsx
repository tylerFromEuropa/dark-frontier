import { useEffect, useState } from "react";
import "./10_RPS.css";
import guardsBG from "./guards.png";

export default function $10_RPS({ setCurrentStep, myUser, setMyUser }) {
  const choices = ["Meteor", "Spacekarate Chop", "Laserscissors"];
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    checkResult();
  }, [result]);

  function checkResult() {
    if (result === "You win!") {
      setMyUser({ ...myUser, QQ: myUser.QQ + 50 });
      setCurrentStep(97);
    } else if (result === "Guard wins!") {
      setMyUser({ ...myUser, QQ: myUser.QQ - 10 });
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
      (user === "Meteor" && computer === "Laserscissors") ||
      (user === "Spacekarate Chop" && computer === "Meteor") ||
      (user === "Laserscissors" && computer === "Spacekarate Chop")
    ) {
      setResult("You win!");
    } else {
      setResult("Guard wins!");
    }
  };

  return (
    <div className="rps-container">
      <div className="character-info-container">
        <div className="character-info">
          <h2 className="rps-char-title">{myUser.character.name}</h2>
          <img className="character-image" src={myUser.character.img} alt="" />
        </div>
        <div className="character-choice">
          <h3 className="rps-choice-text">Your Choice:</h3>
          <p className="userChoice">{userChoice}</p>
        </div>
      </div>
      <div>
        <button className="rps-btn" onClick={() => handleUserChoice("Meteor")}>
          Meteor
        </button>
        <button
          className="rps-btn"
          onClick={() => handleUserChoice("Spacekarate Chop")}
        >
          Spacekarate Chop
        </button>
        <button
          className="rps-btn"
          onClick={() => handleUserChoice("Laserscissors")}
        >
          Laserscissors
        </button>
        <h2 className="result">{result}</h2>
      </div>
      <div className="guard-info-container">
        <div className="guard-info">
          <h2 className="rps-char-title">Guards</h2>
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
