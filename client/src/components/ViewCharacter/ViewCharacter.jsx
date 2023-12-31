import { useEffect } from "react";

import "./ViewCharacter.css";

export default function ViewCharacter({ myUser, getUsers, userData }) {
  console.log(myUser);
  return (
    <div className="view-character">
      <section className="character-sheet">
        <div className="character-section">
          <div>
            <img
              className="character-img"
              src={myUser.userData.character.img}
              alt="this is you"
            />
            <div id="characterName">{myUser.userData.character.name}</div>
          </div>
          <div>
            <p>{myUser.userData.character.backstory}</p>
          </div>
        </div>
        <div className="skills">
          <p className="skill-level">
            Max Health:{" "}
            <span className="skill-number">
              {myUser.userData.character.max_health}
            </span>
          </p>
          <p className="skill-level">
            Strength:{" "}
            <span className="skill-number">
              {myUser.userData.character.str}
            </span>
          </p>
          <p className="skill-level">
            Charisma:{" "}
            <span className="skill-number">
              {myUser.userData.character.cha}
            </span>
          </p>
          <p className="skill-level">
            Dexterity:{" "}
            <span className="skill-number">
              {myUser.userData.character.dex}
            </span>
          </p>
          <p className="skill-level">
            Intelligence:{" "}
            <span className="skill-number">
              {myUser.userData.character.int}
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}

/* <section className="view-character">
{myUser.myID !== "" && (
  <div id="headerchararacter">
    <img src={myUser.character.img} alt="this is you" />
    <div id="headercharacterNameHealth">
      <p>{myUser.character.name}</p>
      <div className="health-bar">{healthDivs}</div>
    </div>
  </div>
)} */
