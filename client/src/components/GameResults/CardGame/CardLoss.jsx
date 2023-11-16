import "../../../CSS/Gameresults.css";

export default function CardVictory({ myUser, setMyUser, setCurrentStep }) {
  return (
    <>
      <div className="bodyOverlay">
        <div id="cardvictory">
          <h1 id="cardvictorytext">You Lost! Go back to drinking.</h1>
          <button
            onClick={() => {
              setCurrentStep(3);
              setMyUser({
                ...myUser,
                character: {
                  ...myUser.character,
                  str: myUser.character.str + 1,
                },
              });
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
}
