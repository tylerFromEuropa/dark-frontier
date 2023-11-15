import ResetHealth from "./ResetHealth";
import "../CSS/Gameover.css";

export default function GameVictory({ myUser, setMyUser, setCurrentStep }) {
    return (
        <>
            <div class="bodyOverlay">
                <div id="game-victory">
                    <h1 id="game-victory-text">You won! You defeated the boss! Hahaaa, take that, sucker!!</h1>
                    <ResetHealth myUser={myUser} setMyUser={setMyUser} setCurrentStep={setCurrentStep} />
                </div>
            </div>
        </>
    );
}
