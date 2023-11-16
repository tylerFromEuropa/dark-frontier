import "../../../CSS/Gameresults.css";

export default function RPSVictory({ myUser, setMyUser, setCurrentStep }) {
  return (
    <>
      <div className="bodyOverlay">
        <div id="rpsvictory">
          <h1 id="rpsvictorytext">You won! You're a natural at winning, huh?</h1>
          <button
            onClick={() => {
              setCurrentStep(2);
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
}
