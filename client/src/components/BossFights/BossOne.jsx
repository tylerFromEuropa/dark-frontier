import { useState } from "react";
import "../../CSS/BossOne.css";
import characters from "../../JSON/characters.json";

export default function BossOne({ myCharacter, myUser, setMyUser }) {
  const [isTurn, setIsTurn] = useState(true);
  const [bossOne, setBossOne] = useState({
    health: 10,
    attack: 3,
    friendly: 5,
    name: "Captain Celestial Scourge",
    img_URL: "",
  });

  const [userData, setUserData] = useState({});

  const [userChoice, setUserChoice] = useState();

  function handleFight(choice) {
    setIsTurn(!isTurn);
    if (choice === "attack") {
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
      const dodgeEffect = Math.floor(Math.random() * myUser.character.dex) + 1;
      let damageEffect = bossAttackValue - dodgeEffect;
      if (damageEffect <= 0) {
        damageEffect = 0;
      }

      setMyUser({ ...myUser, health: myUser.character.health - damageEffect });
      setUserHealth();

      console.log(myUser);
    }
  }

  async function setUserHealth() {
    const API = `https://dark-frontier.onrender.com/users/id:${myUser._id}`;
    await axios.put(API, myUser);
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
