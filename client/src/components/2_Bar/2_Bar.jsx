import { useEffect, useState } from "react";
import "./2_Bar.css";
import storyline from "./BarStoryline.json";

export default function $2_Bar({
  setCurrentStep,
  currentStep,
  myUser,
  setMyUser,
}) {
  const [storyChoice, setStoryChoice] = useState(0);
  const [specificChoice, setSpecificChoice] = useState(0);
  const [optionCheck, setOptionCheck] = useState(false);
  const [storyPath, setStoryPath] = useState("hub");
  const [backgroundImageClass, setBackgroundImageClass] = useState(
    "background background_bar"
  );

  const [pathArray, setPathArray] = useState({
    orderDrink: false,
    askPirates: false,
    bartenderNumber: false,
  });

  useEffect(() => {
    checkingStory();
    changeBackground();
  }, [storyChoice]);

  function changeBackground() {
    console.log(
      `storyPath:`,
      storyPath,
      `storyChoice:`,
      storyChoice,
      `backgroundImageClass:`,
      backgroundImageClass
    );
    if (storyPath === "hub") {
      setBackgroundImageClass("background background_bar");
    } else if (
      (storyPath === "orderDrink" && storyChoice === 0) ||
      (storyPath === "askPirates" && storyChoice === 0) ||
      (storyPath === "bartenderNumber" && storyChoice === 0)
    ) {
      setBackgroundImageClass("background background_bartender");
    }
  }

  // Checking storychoice and if it is an option we change the optionCheck to true else it stays false
  function checkingStory() {
    if (storyChoice === 1 && storyPath === "hub") {
      setOptionCheck(true);
      setSpecificChoice(1);
    } else if (
      (storyPath === "orderDrink" && storyChoice === 0) ||
      (storyPath === "bartenderNumber" && storyChoice === 0)
    ) {
      setOptionCheck(true);
      setSpecificChoice(2);
    } else if (storyPath === "askPirates" && storyChoice === 1) {
      setCurrentStep(3);
    } else {
      setOptionCheck(false);
      setSpecificChoice(0);
    }
  }

  function everyPath(optionNum) {
    if (specificChoice === 1) {
      if (optionNum === 1) {
        setPathArray({ ...pathArray, orderDrink: true });
        setStoryPath("orderDrink");
        setStoryChoice(0);
      } else if (optionNum === 2) {
        setPathArray({ ...pathArray, askPirates: true });
        setStoryPath("askPirates");
        setStoryChoice(0);
      } else if (optionNum === 3) {
        setPathArray({ ...pathArray, bartenderNumber: true });
        setStoryPath("bartenderNumber");
        setStoryChoice(0);
      }
    } else if (specificChoice === 2) {
      if (optionNum === 1) {
        setStoryPath("hub");
        setStoryChoice(1);
      }
    }
  }

  return (
    <section className="bar-page">
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
                console.log("Continue works");
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
                {!pathArray.orderDrink && (
                  <button
                    className="useroption"
                    onClick={() => {
                      everyPath(1);
                    }}
                  >
                    Order a drink
                  </button>
                )}
                <button
                  className="useroption"
                  onClick={() => {
                    everyPath(2);
                  }}
                >
                  Ask about Pirates
                </button>
                {!pathArray.bartenderNumber && (
                  <button
                    className="useroption"
                    onClick={() => {
                      everyPath(3);
                    }}
                  >
                    Ask Bartender for their number!
                  </button>
                )}
              </div>
            )}

            {specificChoice === 2 && (
              <div>
                <button
                  className="useroption"
                  onClick={() => {
                    everyPath(1);
                  }}
                >
                  Continue
                </button>
              </div>
            )}
          </div>
        )}
      </section>
    </section>
  );
}
