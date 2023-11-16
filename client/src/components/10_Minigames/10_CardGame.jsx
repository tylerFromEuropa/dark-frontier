import { useState, useEffect } from "react";
import axios from "axios";

export default function $10_CardGame() {
  const [cardDeck, setCardDeck] = useState();

  const [dealerCard, setdealerCard] = useState();
  const [userCard, setUserCard] = useState();

  const [userGuess, setUserGuess] = useState("");
  const [userGuessButton, setUserGuessButton] = useState(false);

  const [userCardButton, setuserCardButton] = useState(false);

  const [result, setResult] = useState("");

  useEffect(() => {
    getCardDeck();
  }, []);

  async function getCardDeck() {
    const API = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
    const res = await axios.get(API);
    setCardDeck(res.data);
  }

  async function getDealerCard() {
    const API = `https://www.deckofcardsapi.com/api/deck/${cardDeck.deck_id}/draw/?count=1`;
    const res = await axios.get(API);
    setdealerCard(res.data);
    setUserGuessButton(!userGuessButton);
  }

  async function getUserCard() {
    const API = `https://www.deckofcardsapi.com/api/deck/${cardDeck.deck_id}/draw/?count=1`;
    const res = await axios.get(API);
    setUserCard(res.data);
    setuserCardButton(!userCardButton);
  }

  function setHigherGuess() {
    setUserGuess("higher");
    setuserCardButton(!userCardButton);
    setUserGuessButton(!userGuessButton);
  }

  function setLowerGuess() {
    setUserGuess("lower");
    setuserCardButton(!userCardButton);
    setUserGuessButton(!userGuessButton);
  }

  function checkResult() {
    if (dealerCard.cards[0].value > userCard.cards[0].value && userGuess === "higher") {
      setResult("lose");
    } else if (dealerCard.cards[0].value > userCard.cards[0].value && userGuess === "lower") {
      setResult("win");
    } else if (dealerCard.cards[0].value < userCard.cards[0].value && userGuess === "lower") {
      setResult("lose");
    } else if (dealerCard.cards[0].value < userCard.cards[0].value && userGuess === "higher") {
      setResult("win");
    } else {
      setResult("tie");
    }
  }

  return (
    <>
      <div className="cards">
        {!dealerCard ? (
          <img src="https://www.deckofcardsapi.com/static/img/back.png" />
        ) : (
          <img src={dealerCard.cards[0].image} />
        )}
        {!userCard ? (
          <img src="https://www.deckofcardsapi.com/static/img/back.png" />
        ) : (
          <img src={userCard.cards[0].image} />
        )}
      </div>

      <div className="options">
        {userGuessButton && (
          <>
            <button onClick={setHigherGuess}>Higher</button>
            <button onClick={setLowerGuess}>Lower</button>
          </>
        )}

        {!dealerCard && <button onClick={getDealerCard}>Start</button>}

        {userCardButton && <button onClick={getUserCard}>Reveal Card Two</button>}

        {dealerCard && userCard && <button onClick={checkResult}>check result</button>}
      </div>
      {<p>{result}</p>}
    </>
  );
}
