import ResetHealth from "../../ResetHealth";
import "../../../CSS/Gameresults.css";

export default function GameOver({ myUser, setMyUser, setCurrentStep }) {
  return (
    <>
      <div className="bodyOverlay">
        <div id="gameovercontent">
          <h1 id="gameovertext">You died! That sucks bruv :(</h1>
          <ResetHealth myUser={myUser} setMyUser={setMyUser} setCurrentStep={setCurrentStep} />
        </div>
      </div>
    </>
  );
}
