import { useEffect, useState } from "react";
import "./5_PawnShop.css";
import storyline from "./PawnShopStoryLine.json";

export default function $5_PawnShop({ setCurrentStep, currentStep, myUser, setMyUser }) {
  const [storyChoice, setStoryChoice] = useState(0);
  const [specificChoice, setSpecificChoice] = useState(0);
  const [optionCheck, setOptionCheck] = useState(false);
  const [storyPath, setStoryPath] = useState("story");
  const [backgroundImageClass, setBackgroundImageClass] = useState("background");

  const [pathArray, setPathArray] = useState({
    buyWheel: false,
    goBar: false,
    dunecrest: false,
    spaceship: false,
  });

  useEffect(() => {
    checkingStory();
  }, [storyChoice]);

  // Checking storychoice and if it is an option we change the optionCheck to true else it stays false
  function checkingStory() {
    if (storyChoice === 2 && storyPath === "story") {
      setOptionCheck(true);
      setSpecificChoice(1);
    } else if (storyChoice === 0 && storyPath === "buyWheel") {
      setOptionCheck(true);
      setSpecificChoice(1);
    }
  }

  function everyPath(optionNum) {
    if (specificChoice === 1) {
      if (optionNum === 1) {
        setPathArray({ ...pathArray, buyWheel: true });
        setStoryPath("buyWheel");
        setStoryChoice(0);
      } else if (optionNum === 2) {
        setCurrentStep(4);
      }
    }
  }

  return (
    <section className="pawnShop-page">
      <section className={backgroundImageClass}>
        <img src="" alt="" />
        <p>{storyline[0][storyPath][storyChoice]}</p>
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
                {!pathArray.buyWheel && (
                  <button
                    className="useroption"
                    onClick={() => {
                      everyPath(1);
                    }}
                  >
                    Buy Steering Wheel
                  </button>
                )}
                <button
                  className="useroption"
                  onClick={() => {
                    everyPath(2);
                  }}
                >
                  Go back
                </button>
              </div>
            )}
          </div>
        )}
      </section>
    </section>
  );
}
