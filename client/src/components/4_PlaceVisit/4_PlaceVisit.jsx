import { useEffect, useState } from "react";
import "./4_PlaceVisit.css";
import storyline from "../Storyline/Storyline.json";

export default function $4_PlaceVisit({
  setCurrentStep,
  currentStep,
  myUser,
  setMyUser,
}) {
  const [storyChoice, setStoryChoice] = useState(0);
  const [specificChoice, setSpecificChoice] = useState(0);
  const [optionCheck, setOptionCheck] = useState(false);
  const [storyPath, setStoryPath] = useState("story");
  const [backgroundImageClass, setBackgroundImageClass] = useState(
    "background background_city"
  );

  const [pathArray, setPathArray] = useState({
    pawnShop: false,
    dunecrest: false,
    spaceship: false,
  });

  useEffect(() => {
    checkingStory();
  }, [storyChoice]);

  // Checking storychoice and if it is an option we change the optionCheck to true else it stays false
  function checkingStory() {
    if (storyChoice === 0 && storyPath === "story") {
      setOptionCheck(true);
      setSpecificChoice(1);
    }
  }

  function everyPath(optionNum) {
    if (specificChoice === 1) {
      if (optionNum === 1) {
        setCurrentStep(5);
      } else if (optionNum === 2) {
        setCurrentStep(6);
      } else if (optionNum === 3) {
        setCurrentStep(7);
      }
    }
  }

  return (
    <section className="placeVisit-page">
      <section className={backgroundImageClass}>
        <div
          id="dunecrestbox"
          onClick={() => {
            everyPath(2);
          }}
        >
          to Dunecrest
        </div>
        <div
          id="pawnshopbox"
          onClick={() => {
            everyPath(1);
          }}
        >
          to Pawnshop
        </div>{" "}
        <div
          id="backtoshipbox"
          onClick={() => {
            everyPath(3);
          }}
        >
          Back to your ship
        </div>
        <p id="placevisittext">
          {storyline[0].PlaceVisit[0][storyPath][storyChoice]}
        </p>
      </section>
      <section className="selections">
        {!optionCheck && (
          <div>
            <button
              className="useroption"
              onClick={() => {
                setStoryChoice(storyChoice + 1),
                  setBackgroundImageClass("background skyhawkBG");
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
                  Walk To Pawn Shop
                </button>
                <button
                  className="useroption"
                  onClick={() => {
                    everyPath(2);
                  }}
                >
                  Walk To Dunecrest
                </button>
                <button
                  className="useroption"
                  onClick={() => {
                    everyPath(3);
                  }}
                >
                  Go back to Spaceship
                </button>
              </div>
            )}
          </div>
        )}
      </section>
    </section>
  );
}
