import { useState } from "react";
import "../../CSS/BossOne.css";
import characters from "../../JSON/characters.json";

export default function BossOne({ myCharacter }) {
  return (
    <>
      <div className="userOptionsContainer turnTrue">
        <button className="userOption">ATTACK</button>
        <button className="userOption">TALK YOUR WAY OUT</button>
      </div>
      <div className="userSide">
        <img src={`${characters[myCharacter].img}`} alt="this is your character" />
      </div>
      <div className="textContainer">
        <h1>HELLO WORLD</h1>
      </div>
    </>
  );
}
