import { useEffect, useState } from "react";
import "./3_Skyhawk.css";
import storyline from "../../JSON/Storyline.json";

export default function $2_Skyhawk({ setCurrentStep, currentStep, myUser, setMyUser }) {
  const [storyChoice, setStoryChoice] = useState(0);
  const [specificChoice, setSpecificChoice] = useState(0);
  const [optionCheck, setOptionCheck] = useState(false);
  const [storyPath, setStoryPath] = useState("story");
  const [backgroundImageClass, setBackgroundImageClass] = useState("background background_skyhawk");

  const [pathArray, setPathArray] = useState({
    introduced: false,
    demanded: false,
    joked: false,
  });

  useEffect(() => {
    checkingStory();
  }, [storyChoice]);

  // Checking storychoice and if it is an option we change the optionCheck to true else it stays false
  function checkingStory() {
    if (storyChoice === 1 && storyPath === "story") {
      setOptionCheck(true);
      setSpecificChoice(1);
    } else if (storyChoice === 0 && storyPath === "joked") {
      setOptionCheck(true);
      setSpecificChoice(2);
    } else if ((storyPath === "introduced" && storyChoice == 1) || (storyPath === "demanded" && storyChoice === 1)) {
      setCurrentStep(4);
    } else {
      setOptionCheck(false);
      setSpecificChoice(0);
    }
  }

  function everyPath(optionNum) {
    if (specificChoice === 1) {
      if (optionNum === 1) {
        setPathArray({ ...pathArray, introduced: true });
        setStoryPath("introduced");
        setStoryChoice(0);
      } else if (optionNum === 2) {
        setPathArray({ ...pathArray, demanded: true });
        setStoryPath("demanded");
        setStoryChoice(0);
      } else if (optionNum === 3) {
        setPathArray({ ...pathArray, joked: true });
        setStoryPath("joked");
        setStoryChoice(0);
      } else if (optionNum === 4) {
        setCurrentStep(11);
      }
    } else if (specificChoice === 2) {
      if (optionNum === 1) {
        setStoryPath("story");
        setStoryChoice(1);
      }
    }
  }

  return (
    <section className="skyhawk-page">
      <section className={backgroundImageClass}>
        <img src="" alt="" />
        <p>{storyline[0].Skyhawk[0][storyPath][storyChoice]}</p>
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
                  Introduce yourself
                </button>
                <button
                  className="useroption"
                  onClick={() => {
                    everyPath(2);
                  }}
                >
                  Demand information about Pirates!
                </button>
                {!pathArray.joked && (
                  <button
                    className="useroption"
                    onClick={() => {
                      everyPath(3);
                    }}
                  >
                    Tell a joke
                  </button>
                )}

                <button
                  className="useroption"
                  onClick={() => {
                    everyPath(4);
                  }}
                >
                  Play Cards
                </button>
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
