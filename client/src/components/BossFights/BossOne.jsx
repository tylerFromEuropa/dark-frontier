import { useEffect, useState } from "react";
import "../../CSS/BossOne.css";
import characters from "../../JSON/characters.json";
import axios from "axios";
import GameOver from "../GameOver";

export default function BossOne({ myCharacter, myUser, setMyUser, currentStep, setCurrentStep }) {
  const [isTurn, setIsTurn] = useState(true);

  const [bossOne, setBossOne] = useState({
    health: 15,
    attack: 1.5,
    friendly: 5,
    name: "Captain Celestial Scourge",
    img_URL: "",
  });
  const [fightDescription, setFightDescription] = useState(["It's bossfight o'clock, mofos!"]);

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
      const attackValue = Math.floor(Math.random() * myUser.character.str) + 1;
      const newBossHealth = bossOne.health - attackValue;
      setBossOne({
        ...bossOne,
        health: newBossHealth,
      });
      setFightDescription([...fightDescription, `You attack and inflict a damage of ${attackValue}!`]);
    } else if (choice === "talk") {
      const charismaCheck = bossOne.friendly + myUser.character.cha;
      if (charismaCheck >= 10) {
        // friendly screen - gives you the part
      }
      setFightDescription([
        ...fightDescription,
        `You try to to make the guy your friend my offering to buy him a drink. Success!
        (boss was friendly = ${bossOne.friendly} and you had a charisma of ${myUser.character.cha})`,
      ]);
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
      setFightDescription([...fightDescription, `You try to dodge the attack, but you still take a hit of ${damageEffect} damage.`]);
    } else if (choice === "counter-attack") {
      const bossAttackValue = Math.floor(Math.random() * bossOne.attack) + 1;
      const counterAttackEffect = Math.random() * myUser.character.dex + 1;
      const counterChance = counterAttackEffect / 10;
      if (counterChance > 0.25) {
        const attackValue = Math.floor(Math.random() * myUser.character.str) + 1;
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
        setFightDescription([
          ...fightDescription,
          `The boss attacks! You try to evade and counterattack, and you manage to inflict ${attackValue} to your opponent, but you still take a hit of ${bossAttackValue} damage.  `,
        ]);
      } else {
        setMyUser({
          ...myUser,
          character: {
            ...myUser.character,
            health: myUser.character.health - bossAttackValue,
          },
        });
        setFightDescription([
          ...fightDescription,
          `The boss attacks! You try to evade and counterattack, but you have a skill issue and take the full force of the hit... ${bossAttackValue} damage. That hurt! `,
        ]);
      }
    }
  }

  return (
    <div id="bossfightcontainer">
      <div id="leftside">
        <img id="leftimage" className={isTurn && "playerhighlight"} src={`${characters[myCharacter].img}`} alt="this is your character" />
        <p>{`${myUser.character.name}`}</p>
        <p>{`Player health: ${myUser.character.health}`}</p>
      </div>
      <div id="middleleft">
        <div id="middletextcontainer">
          {fightDescription.map((action) => (
            <p className="fightactiondescription">{action}</p>
          ))}
        </div>
      </div>
      <div id="middleright">
        <img id="rightimage" className={!isTurn && "playerhighlight"} src="boss1.webp" alt="this is boss1" />
        <p>Sketchy Bartender</p>
        <p>{`Boss health: ${bossOne.health}`}</p>
      </div>
      <div id="rightside">
        {myUser.character.health > 0 && bossOne.health > 0 && (
          <>
            {isTurn && (
              <>
                <button
                  className="useroption"
                  onClick={() => {
                    handleFight("attack");
                  }}
                >
                  ATTACK
                </button>
                <button
                  className="useroption"
                  onClick={() => {
                    handleFight("talk");
                  }}
                >
                  TALK YOUR WAY OUT
                </button>
              </>
            )}
            {!isTurn && (
              <>
                <button
                  className="useroption"
                  onClick={() => {
                    handleFight("dodge");
                  }}
                >
                  DODGE
                </button>
                <button
                  className="useroption"
                  onClick={() => {
                    handleFight("counter-attack");
                  }}
                >
                  COUNTER ATTACK
                </button>
                <button
                  className="useroption"
                  onClick={() => {
                    handleFight("talk");
                  }}
                >
                  TALK YOUR WAY OUT
                </button>
              </>
            )}
          </>
        )}
      </div>

      {myUser.character.health < 1 && setCurrentStep(100)}
      {bossOne.health < 1 && setCurrentStep(5)}
    </div>
  );
}
