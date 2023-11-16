import ResetHealth from "./ResetHealth";
import "../CSS/Gameover.css";

export default function GameVictory({ myUser, setMyUser, setCurrentStep }) {
    return (
        <>
            <div class="bodyOverlay">
                <div id="gamevictory">
                    <h1 id="gamevictorytext">You won! You defeated the boss! Hahaaa, take that, sucker!!</h1>
                    <ResetHealth myUser={myUser} setMyUser={setMyUser} setCurrentStep={setCurrentStep} />
                </div>
            </div>
        </>
    );
}
