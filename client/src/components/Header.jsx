import { useState } from "react";
import "../CSS/Header.css";
import Menu from "./Menu";
import characters from "../JSON/characters.json";

export default function Header({ character }) {
  const [menuStatus, setMenuStatus] = useState(false);
  return (
    <div className="headerContainer">
      <h1>DARK FRONTIER</h1>
      <img id="headerchararacter" src={`${characters[character].img}`} alt="this is you" />

      <div onClick={() => setMenuStatus(!menuStatus)} className={`menuopen${menuStatus}`}>
        {menuStatus && <Menu />}
      </div>
    </div>
  );
}
