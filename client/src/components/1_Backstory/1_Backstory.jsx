import { useEffect, useState } from "react";
import "./1_Backstory.css";
import storyline from "./Backstory.json";

export default function $1_Backstory() {
  const [storyChoice, setStoryChoice] = useState(0);
  const [optionCheck, setOptionCheck] = useState(false);

  // Running checkingStory function whenever storyChoice changes
  useEffect(() => {
    checkingStory();
  }, [storyChoice]);

  // Checking storychoice and if it is an option we change the optionCheck to true else it stays false
  function checkingStory() {
    if (storyChoice === 1) {
      setOptionCheck(true);
    } else {
      setOptionCheck(false);
    }
    console.log(optionCheck, storyChoice);
  }

  // One of our options
  function findWater() {
    const randomNumber = Math.random();
    if (randomNumber <= 0.5) {
      setStoryChoice(3);
    } else {
      setStoryChoice(2);
    }
  }

  return (
    <section className="backstory-page">
      <section className="background">
        <img src="" alt="" />
        <p>{storyline[storyChoice]}</p>
      </section>
      <section className="selections">
        {/* Checks if the option variable is false and shows the continue button */}
        {!optionCheck && (
          <div>
            <button
              onClick={() => {
                setStoryChoice(storyChoice + 1);
                if (storyChoice === 2) {
                  setStoryChoice(storyChoice + 2);
                }
              }}
            >
              Continue
            </button>
          </div>
        )}
        {/* Checks if the option variable is true and shows these buttons */}
        {optionCheck && (
          <div className="asdgnjhasgas">{storyChoice === 1 && <button onClick={findWater}>Look around the lifepod ship for some water</button>}</div>
        )}
      </section>
    </section>
  );
}
