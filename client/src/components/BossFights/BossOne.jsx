import { useEffect, useState } from "react";
import "../../CSS/BossOne.css";
import characters from "../../JSON/characters.json";
import axios from "axios";
import GameOver from "./GameOver";

export default function BossOne({
  myCharacter,
  myUser,
  setMyUser,
  currentStep,
  setCurrentStep,
}) {
  const [isTurn, setIsTurn] = useState(true);
  const [bossOne, setBossOne] = useState({
    health: 15,
    attack: 1.5,
    friendly: 5,
    name: "Captain Celestial Scourge",
    img_URL: "",
  });

  async function updateUser() {
    const API = `https://dark-frontier.onrender.com/users/${myUser.myID}`;
    try {
      await axios.put(API, myUser);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  }

  // We are doing useEffect whenever the myUser state variable is changed which then runs and updates it to the database on MongoDB in the updateUser() function
  useEffect(() => {
    updateUser();
  }, [myUser]);

  function handleFight(choice) {
    setIsTurn(!isTurn);
    if (choice === "attack") {
      console.log(myUser);
      const attackValue = Math.floor(Math.random() * myUser.character.str) + 1;
      const newBossHealth = bossOne.health - attackValue;
      setBossOne({
        ...bossOne,
        health: newBossHealth,
      });
    } else if (choice === "talk") {
      const charismaCheck = bossOne.friendly + myUser.character.cha;
      if (charismaCheck >= 10) {
        // friendly screen - gives you the part
      }
    } else if (choice === "dodge") {
      const bossAttackValue = Math.floor(Math.random() * bossOne.attack) + 1;
      const dodgeEffect = Math.random() * myUser.character.dex;
      const dodgeChance = dodgeEffect / 10;
      let damageEffect = Math.floor(bossAttackValue * (1 - dodgeChance));

      // Spreads the myUser object (which has: {
      // myID: value,
      // userID: value,
      // character: object,
      // })
      // We then want to get the health to change which is inside another object (the character pair)
      // So we have to again spread character to change the health value
      setMyUser({
        ...myUser,
        character: {
          ...myUser.character,
          health: myUser.character.health - damageEffect,
        },
      });
    } else if (choice === "counter-attack") {
      const bossAttackValue = Math.floor(Math.random() * bossOne.attack) + 1;
      const counterAttackEffect = Math.random() * myUser.character.dex + 1;
      const counterChance = counterAttackEffect / 10;
      if (counterChance > 0.25) {
        const attackValue =
          Math.floor(Math.random() * myUser.character.str) + 1;
        const newBossHealth = bossOne.health - attackValue;
        setBossOne({
          ...bossOne,
          health: newBossHealth,
        });
        setMyUser({
          ...myUser,
          character: {
            ...myUser.character,
            health: myUser.character.health - bossAttackValue,
          },
        });
      } else {
        setMyUser({
          ...myUser,
          character: {
            ...myUser.character,
            health: myUser.character.health - bossAttackValue,
          },
        });
      }
    }
  }

  return (
    <>
      <p>{`Player health: ${myUser.character.health}, Boss health: ${bossOne.health}`}</p>
      <div className="userSide">
        <img
          id="leftplayer"
          src={`${characters[myCharacter].img}`}
          alt="this is your character"
        />
      </div>
      {myUser.character.health > 0 && bossOne.health > 0 && (
        <div>
          {isTurn && (
            <div className="userOptionsContainer">
              <button
                className="userOption"
                onClick={() => {
                  handleFight("attack");
                }}
              >
                ATTACK
              </button>
              <button
                className="userOption"
                onClick={() => {
                  handleFight("talk");
                }}
              >
                TALK YOUR WAY OUT
              </button>
            </div>
          )}
          {!isTurn && (
            <div className="userResponseOptionsContainer">
              <button
                className="userOption"
                onClick={() => {
                  handleFight("dodge");
                }}
              >
                DODGE
              </button>
              <button
                className="userOption"
                onClick={() => {
                  handleFight("counter-attack");
                }}
              >
                COUNTER ATTACK
              </button>
              <button
                className="userOption"
                onClick={() => {
                  handleFight("talk");
                }}
              >
                TALK YOUR WAY OUT
              </button>
            </div>
          )}
        </div>
      )}

      {myUser.character.health < 1 && (
        <GameOver setMyUser={setMyUser} myUser={myUser} />
      )}
      {bossOne.health < 1 && setCurrentStep(2)}
      {console.log(currentStep)}
    </>
  );
}
