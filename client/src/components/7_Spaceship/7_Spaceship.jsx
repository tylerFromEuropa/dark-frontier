import { useEffect, useState } from "react";
import "./7_Spaceship.css";
import storyline from "../Storyline/Storyline.json";

export default function $7_Spaceship({ setCurrentStep, currentStep, myUser, setMyUser }) {
  const [storyChoice, setStoryChoice] = useState(0);
  const [specificChoice, setSpecificChoice] = useState(0);
  const [optionCheck, setOptionCheck] = useState(false);
  const [storyPath, setStoryPath] = useState("story");
  const [backgroundImageClass, setBackgroundImageClass] = useState("background background_ship");

  const [pathArray, setPathArray] = useState({
    spareLife: false,
    attack: false,
    blasting: false,
  });

  useEffect(() => {
    checkingStory();
  }, [storyChoice]);

  // Checking storychoice and if it is an option we change the optionCheck to true else it stays false
  function checkingStory() {
    if (storyChoice === 1 && storyPath === "story") {
      setOptionCheck(true);
      setSpecificChoice(1);
    }
  }

  function everyPath(optionNum) {
    if (specificChoice === 1) {
      if (optionNum === 1) {
        setCurrentStep(2);
      } else if (optionNum === 2) {
        setCurrentStep(4);
      }
    }
  }

  return (
    <section className="dunecrest-page">
      <section className={backgroundImageClass}>
        <img src="" alt="" />
        <p>{storyline[0].Spaceship[0][storyPath][storyChoice]}</p>
      </section>
      <section className="selections">
        {!optionCheck && (
          <div>
            <button
              className="useroption"
              onClick={() => {
                setStoryChoice(storyChoice + 1), setBackgroundImageClass("background skyhawkBG");
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
                  Go to the Bar
                </button>
                <button
                  className="useroption"
                  onClick={() => {
                    everyPath(2);
                  }}
                >
                  Go to Places
                </button>
              </div>
            )}
          </div>
        )}
      </section>
    </section>
  );
}
