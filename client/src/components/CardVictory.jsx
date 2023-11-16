import "../CSS/Gameresults.css";

export default function CardVictory({ myUser, setMyUser, setCurrentStep }) {
    return (
        <>
            <div class="bodyOverlay">
                <div id="cardvictory">
                    <h1 id="cardvictorytext">You won! You spent so much time in space playing card games that you became a natural at them.</h1>
                    <button
                        onClick={() => {
                            setCurrentStep(4);
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
