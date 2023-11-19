import { useEffect, useState } from "react";
import "./6_Dunecrest.css";
import storyline from "../../JSON/Storyline.json";

export default function $6_Dunecrest({ setCurrentStep, currentStep, myUser, setMyUser }) {
  const [storyChoice, setStoryChoice] = useState(0);
  const [specificChoice, setSpecificChoice] = useState(0);
  const [optionCheck, setOptionCheck] = useState(false);
  const [storyPath, setStoryPath] = useState("story");
  const [backgroundImageClass, setBackgroundImageClass] = useState("background background_town");

  const [pathArray, setPathArray] = useState({
    spareLife: false,
    attack: false,
    blasting: false,
  });

  useEffect(() => {
    checkingStory();
    changeBackground();
  }, [storyChoice]);

  function changeBackground() {
    console.log(`storyPath:`, storyPath, `storyChoice:`, storyChoice, `backgroundImageClass:`, backgroundImageClass);
    if (storyPath === "story" && storyChoice === 0) {
      setBackgroundImageClass("background background_town");
    } else if (storyPath === "story" && storyChoice === 1) {
      setBackgroundImageClass("background background_townbar");
    } else if (storyPath === "story" && storyChoice === 2) {
      setBackgroundImageClass("background background_scourge");
    } else if (storyPath === "story" && storyChoice === 3) {
      setBackgroundImageClass("background background_scourgebig");
    }
  }

  // Checking storychoice and if it is an option we change the optionCheck to true else it stays false
  function checkingStory() {
    if (storyChoice === 5 && storyPath === "story") {
      setOptionCheck(true);
      setSpecificChoice(1);
    } else if (
      (storyChoice === 2 && storyPath === "spareLife") ||
      (storyChoice === 2 && storyPath === "attack") ||
      (storyChoice === 1 && storyPath === "blasting")
    ) {
      setCurrentStep(15);
    } else {
      setOptionCheck(false);
      setSpecificChoice(0);
    }
  }

  function everyPath(optionNum) {
    if (specificChoice === 1) {
      if (optionNum === 1) {
        setStoryPath("spareLife");
        setStoryChoice(0);
      } else if (optionNum === 2) {
        setStoryPath("attack");
        setStoryChoice(0);
      } else if (optionNum === 3) {
        setStoryPath("blasting");
        setStoryChoice(0);
      }
    }
  }

  return (
    <section className="dunecrest-page">
      <section className={backgroundImageClass}>
        <img src="" alt="" />
        <p id="dunecrest_text">{storyline[0].Dunecrest[0][storyPath][storyChoice]}</p>
      </section>
      <section className="selections">
        {!optionCheck && (
          <div>
            <button
              className="useroption"
              onClick={() => {
                setStoryChoice(storyChoice + 1);
              }}
            >
              Continue
            </button>
          </div>
        )}
        {optionCheck && (
          <div>
            {specificChoice === 1 && (
              <div>
                <button
                  className="useroption"
                  onClick={() => {
                    everyPath(1);
                  }}
                >
                  Give it back!
                </button>
                <button
                  className="useroption"
                  onClick={() => {
                    everyPath(2);
                  }}
                >
                  Prepare to die!
                </button>
                <button
                  className="useroption"
                  onClick={() => {
                    everyPath(3);
                  }}
                >
                  Just start BLASTING
                </button>
              </div>
            )}
          </div>
        )}
      </section>
    </section>
  );
}
