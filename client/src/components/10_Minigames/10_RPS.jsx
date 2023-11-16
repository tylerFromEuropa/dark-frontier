import { useEffect, useState } from "react";
import "./10_RPS.css";
import guardsBG from "./background_gates.webp";

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
        } else if ((user === "rock" && computer === "scissors") || (user === "paper" && computer === "rock") || (user === "scissors" && computer === "paper")) {
            setResult("You win!");
        } else {
            setResult("Computer wins!");
        }
    };

    return (
        <div className="rps-container">
            <div className="character-info-container">
                <div className="character-info">
                    <h1>{myUser.character.name}</h1>
                    <img className="character-image" src={myUser.character.img} alt="" />
                </div>
                <div className="character-choice">
                    <h3>Your Choice:</h3>
                    <h4 className="userChoice">{userChoice}</h4>
                </div>
            </div>
            <div>
                <button onClick={() => handleUserChoice("rock")}>Rock</button>
                <button onClick={() => handleUserChoice("paper")}>Paper</button>
                <button onClick={() => handleUserChoice("scissors")}>Scissors</button>
                <h2 className="result">{result}</h2>
            </div>
            <div>
                <h1>GUARDS</h1>
                <img className="guards-image" src={guardsBG} alt="" />

                <h3>Computer's choice:</h3>
                <h4 className="userChoice">{computerChoice}</h4>
            </div>
        </div>
    );
}
