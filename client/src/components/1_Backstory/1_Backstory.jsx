import { useEffect, useState } from "react";
import "./1_Backstory.css";
import storyline from "./Backstory.json";

export default function $1_Backstory({ setCurrentStep, currentStep, myUser, setMyUser }) {
  const [storyChoice, setStoryChoice] = useState(0);
  const [specificChoice, setSpecificChoice] = useState(0);
  const [optionCheck, setOptionCheck] = useState(false);
  const [storyPath, setStoryPath] = useState("story");
  const [backgroundImageClass, setBackgroundImageClass] = useState("background background_crash");

  useEffect(() => {
    checkingStory();
    changeBackground();
  }, [storyChoice]);

  function changeBackground() {
    console.log(`storyPath:`, storyPath, `storyChoice:`, storyChoice, `backgroundImageClass:`, backgroundImageClass);
    if (
      (storyPath === "story" && storyChoice === 0) ||
      (storyPath === "waterPathTrue" && storyChoice === 1) ||
      (storyPath === "waterPathFalse" && storyChoice === 3)
    ) {
      setBackgroundImageClass("background background_crash");
    } else if (storyPath === "story" && storyChoice === 1) {
      setBackgroundImageClass("background background_ship");
    } else if (storyPath === "waterPathTrue" && storyChoice === 0) {
      setBackgroundImageClass("background background_bottle");
    } else if (storyPath === "waterPathFalse" && storyChoice === 0) {
      setBackgroundImageClass("background background_bottlecracked");
    } else if ((storyPath === "waterPathTrue" && storyChoice === 2) || ("waterPathFalse" && storyChoice === 4)) {
      setBackgroundImageClass("background background_gates");
    } else if ("waterPathFalse" && storyChoice === 5) {
      setBackgroundImageClass("background background_gatesblur");
    } else if ("waterPathFalse" && storyChoice === 6) {
      setBackgroundImageClass("background background_doctor");
    }
  }
  // Checking storychoice and if it is an option we change the optionCheck to true else it stays false
  function checkingStory() {
    if (storyChoice === 1 && storyPath === "story") {
      setOptionCheck(true);
      setSpecificChoice(1);
    } else if (storyChoice === 3 && storyPath === "waterPathTrue") {
      setOptionCheck(true);
      setSpecificChoice(2);
    } else if (storyChoice === 6 && storyPath === "waterPathFalse") {
      setOptionCheck(true);
      setSpecificChoice(3);
    }
    //next story section
    else if (
      (storyChoice === 2 && storyPath === "guardExplain") ||
      (storyChoice === 2 && storyPath === "guardFingerGuns") ||
      (storyChoice === 2 && storyPath === "guardYell") ||
      (storyChoice === 2 && storyPath === "doctorQuestion") ||
      (storyChoice === 2 && storyPath === "doctorPanic")
    ) {
      setCurrentStep(2);
    } else {
      setOptionCheck(false);
      setSpecificChoice(0);
    }
  }

  function everyPath(optionNum) {
    const pathArray = {
      gotWater: false,
      guardExplain: false,
      guardFingerGuns: false,
      guardYell: false,
      doctorQuestion: false,
      doctorPanic: false,
    };

    const randomNumber = Math.random();
    if (randomNumber <= 0.5) {
      pathArray.gotWater = false;
    } else {
      pathArray.gotWater = true;
    }
    if (pathArray.gotWater === true && storyPath === "story") {
      setStoryChoice(0);
      setStoryPath("waterPathTrue");
    } else if (pathArray.gotWater === false && storyPath === "story") {
      setStoryChoice(0);
      setStoryPath("waterPathFalse");
    }

    if (specificChoice === 2) {
      if (optionNum === 1) {
        pathArray.guardExplain = true;
        setStoryChoice(0);
        setStoryPath("guardExplain");
      } else if (optionNum === 2) {
        pathArray.guardFingerGuns = true;
        setStoryChoice(0);
        setStoryPath("guardFingerGuns");
      } else if (optionNum === 3) {
        pathArray.guardYell = true;
        setStoryChoice(0);
        setStoryPath("guardYell");
      }
    }

    if (specificChoice === 3) {
      if (optionNum === 1) {
        pathArray.doctorQuestion = true;
        setStoryChoice(storyChoice + 1);
        setStoryChoice(0);
        setStoryPath("doctorQuestion");
      } else if (optionNum === 2) {
        pathArray.doctorPanic = true;
        setStoryChoice(0);
        setStoryPath("doctorPanic");
      }
    }
  }

  return (
    <section className="backstory-page">
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
              <button
                className="useroption"
                onClick={() => {
                  everyPath(1);
                }}
              >
                Find Some Water
              </button>
            )}

            {specificChoice === 2 && (
              <div>
                <button
                  className="useroption"
                  onClick={() => {
                    everyPath(1);
                  }}
                >
                  Explain Using Sound Effects
                </button>
                <button
                  className="useroption"
                  onClick={() => {
                    everyPath(2), setBackgroundImageClass("background background_guns");
                  }}
                >
                  Explain With Finger Guns
                </button>
                <button
                  className="useroption"
                  onClick={() => {
                    everyPath(3);
                  }}
                >
                  Yell at them!
                </button>
              </div>
            )}

            {specificChoice === 3 && (
              <div>
                <button
                  className="useroption"
                  onClick={() => {
                    everyPath(1);
                  }}
                >
                  Question Doctor
                </button>
                <button
                  className="useroption"
                  onClick={() => {
                    everyPath(2);
                  }}
                >
                  Stand Up & Remove Attached Devices
                </button>
              </div>
            )}
          </div>
        )}
      </section>
    </section>
  );
}
