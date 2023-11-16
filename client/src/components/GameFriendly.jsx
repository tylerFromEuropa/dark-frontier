import ResetHealth from "./ResetHealth";
import "../CSS/Gameresults.css";

export default function GameFriendly({ myUser, setMyUser, setCurrentStep }) {
    return (
        <>
            <div class="bodyOverlay">
                <div id="gamefriendly">
                    <h1 id="gamefriendlytext">
                        With your charismatic approach you managed to befriend the pirate. He hands your items back to you, feeling bad about it, in the end.
                    </h1>
                    <ResetHealth myUser={myUser} setMyUser={setMyUser} setCurrentStep={setCurrentStep} />
                </div>
            </div>
        </>
    );
}
