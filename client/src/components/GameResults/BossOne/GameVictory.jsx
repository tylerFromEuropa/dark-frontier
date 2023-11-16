import ResetHealth from "../../ResetHealth";
import "../../../CSS/Gameresults.css";

export default function GameVictory({ myUser, setMyUser, setCurrentStep }) {
  return (
    <>
      <div className="bodyOverlay">
        <div id="gamevictory">
          <h1 id="gamevictorytext">You won! You defeated the boss! Hahaaa, take that, sucker!!</h1>
          <ResetHealth myUser={myUser} setMyUser={setMyUser} setCurrentStep={setCurrentStep} />
        </div>
      </div>
    </>
  );
}
