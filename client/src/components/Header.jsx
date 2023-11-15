import { useState } from "react";
import "../CSS/Header.css";
import Menu from "./Menu";
import characters from "../JSON/characters.json";

export default function Header({
  myUser,
  setMyUser,
  getUsers,
  userData,
  setUserData,
}) {
  const [menuStatus, setMenuStatus] = useState(false);

  const healthDivs = [];

  for (let i = 0; i < myUser.character.health; i++) {
    healthDivs.push(<div key={i} className="health-bar-segment"></div>);
  }

  return (
    <div className="headerContainer">
      {myUser.myID !== "" && (
        <div id="headerchararacter">
          <img src={myUser.character.img} alt="this is you" />
          <div id="headercharacterNameHealth">
            <p>{myUser.character.name}</p>
            <div className="health-bar">{healthDivs}</div>
          </div>
        </div>
      )}
      <div>
        <div
          onClick={() => setMenuStatus(!menuStatus)}
          className={`menuopen${menuStatus}`}
        ></div>
        <div>
          {menuStatus && (
            <Menu
              setMyUser={setMyUser}
              getUsers={getUsers}
              userData={userData}
              setUserData={setUserData}
            />
          )}
        </div>
      </div>
    </div>
  );
}
