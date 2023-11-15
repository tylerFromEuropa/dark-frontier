import { useEffect, useState } from "react";
import "./2_Bar.css";
import storyline from "./BarStoryline.json";

export default function $2_Bar({ myUser, setMyUser }) {
  const [storyChoice, setStoryChoice] = useState(0);
  const [specificChoice, setSpecificChoice] = useState(0);
  const [optionCheck, setOptionCheck] = useState(false);
  const [storyPath, setStoryPath] = useState("hub");
  const [backgroundImageClass, setBackgroundImageClass] = useState("background");

  const [pathArray, setPathArray] = useState({
    orderDrink: false,
    askPirates: false,
    bartenderNumber: false,
  });

  useEffect(() => {
    checkingStory();
  }, [storyChoice]);

  // Checking storychoice and if it is an option we change the optionCheck to true else it stays false
  function checkingStory() {
    if (storyChoice === 0 && storyPath === "hub") {
      setOptionCheck(true);
      setSpecificChoice(1);
    } else if ((storyChoice === 1 && storyPath === "orderDrink") || (storyChoice === 1 && storyPath === "bartenderNumber")) {
      setOptionCheck(true);
      setSpecificChoice(2);
    } else {
      setOptionCheck(false);
      setSpecificChoice(0);
    }
  }

  function everyPath(optionNum) {
    if (storyPath === "hub" && storyChoice === 0) {
      if (optionNum === 1) {
        setPathArray({ ...pathArray, orderDrink: true });
        setStoryPath("orderDrink");
        setStoryChoice(1);
      } else if (optionNum === 2) {
        setPathArray({ ...pathArray, askPirates: true });
        setStoryPath("askPirates");
        setStoryChoice(1);
      } else if (optionNum === 3) {
        setPathArray({ ...pathArray, bartenderNumber: true });
        setStoryPath("bartenderNumber");
        setStoryChoice(1);
      }
    } else if ((storyChoice === 1 && storyPath === "orderDrink") || (storyChoice === 1 && storyPath === "bartenderNumber")) {
      if (optionNum === 1 || optionNum === 3) {
        setStoryPath("hub");
        setStoryChoice(0);
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
                setStoryChoice(storyChoice + 1), setBackgroundImageClass("background barBG");
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
