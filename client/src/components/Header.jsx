import { useState } from "react";
import "../CSS/Header.css";
import Menu from "./Menu";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuStatus, setMenuStatus] = useState(false);
  return (
    <div className="headerContainer">
      <h1>DARK FRONTIER</h1>

      <Link
        to={menuStatus ? `/game` : `/menu`}
        onClick={() => setMenuStatus(!menuStatus)}
        className={`menuopen${menuStatus}`}
      ></Link>
    </div>
  );
}
