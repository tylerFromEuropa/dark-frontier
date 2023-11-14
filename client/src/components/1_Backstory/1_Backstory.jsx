import { useState } from "react";
import "./1_Backstory.css";
import storyline from "./Backstory.json";

export default function $1_Backstory() {
  const [storyChoice, setStoryChoice] = useState(0);
  const [optionCheck, setOptionCheck] = useState(false);

  function checkingStory() {
    if (storyChoice === 1) {
      setOptionCheck(true);
    } else {
      setOptionCheck(false);
    }
    console.log(optionCheck, storyChoice);
  }

  function findWater() {
    const randomNumber = Math.random();
    if (randomNumber <= 0.5) {
      setStoryChoice(3);
    } else {
      setStoryChoice(2);
    }
    checkingStory();
  }

  return (
    <section className="backstory-page">
      <section className="background">
        <img src="" alt="" />
        <p>{storyline[storyChoice]}</p>
      </section>
      <section className="selections">
        {!optionCheck && (
          <div>
            <button
              onClick={() => {
                setStoryChoice(storyChoice + 1);
                checkingStory();
              }}
            >
              Continue
            </button>
          </div>
        )}

        {optionCheck && (
          <div>
            {storyChoice === 1 && (
              <button onClick={findWater()}>Look around the lifepod ship for some water</button>
            )}
          </div>
        )}
      </section>
    </section>
  );
}
