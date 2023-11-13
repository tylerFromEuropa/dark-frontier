import { useEffect, useState } from "react";
import "../../CSS/BossOne.css";
import characters from "../../JSON/characters.json";
import axios from "axios";

export default function BossOne({ myCharacter, myUser, setMyUser }) {
  const [isTurn, setIsTurn] = useState(true);
  const [bossOne, setBossOne] = useState({
    health: 10,
    attack: 3,
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
    }
  }
  return (
    <>
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
              handleFight("attack");
            }}
          >
            COUNTER ATTACK
          </button>
          <button
            className="userOption"
            onClick={() => {
              handleFight("attack");
            }}
          >
            TALK YOUR WAY OUT
          </button>
        </div>
      )}
      <div className="userSide">
        <img src={`${characters[myCharacter].img}`} alt="this is your character" />
      </div>
      <div className="textContainer">
        <h1>HELLO WORLD</h1>
      </div>
    </>
  );
}
