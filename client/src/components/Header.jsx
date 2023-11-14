import { useState } from "react";
import "../CSS/Header.css";
import Menu from "./Menu";
import characters from "../JSON/characters.json";

export default function Header({ myCharacter, myUser, setMyUser }) {
  const [menuStatus, setMenuStatus] = useState(false);

  const healthDivs = [];

  for (let i = 0; i < myUser.character.health; i++) {
    healthDivs.push(<div key={i} className="health-bar-segment"></div>);
  }

  return (
    <div className="headerContainer">
      {myUser.myID !== "" && (
        <section>
          <img src="" alt="" />
          <div>
            <h2>{myUser.character.name}</h2>
            <div className="health-bar">{healthDivs}</div>
          </div>
        </section>
      )}
      <div onClick={() => setMenuStatus(!menuStatus)} className={`menuopen${menuStatus}`}>
        {menuStatus && <Menu />}
      </div>
    </div>
  );
}
