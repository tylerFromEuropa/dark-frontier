import { useState } from "react";
import "../CSS/Menu.css";
import LogoutButton from "../components/LogoutButton";
import ViewCharacter from "./ViewCharacter/ViewCharacter";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

export default function Menu(myUser, getUsers, userData, setUserData) {
  const { user } = useAuth0();
  async function deleteUser() {
    const API = `https://dark-frontier.onrender.com/users?userID=${user.email}`;
    console.log(API);

    try {
      await axios.delete(API);
      setUserData({});
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  }
  const [menuSelection, setMenuSelection] = useState("");
  return (
    <>
      <div id="menucontainer">
        <div>Shop</div>
        <div onClick={() => setMenuSelection("character")}>Character</div>
        <div onClick={() => deleteUser()}>Delete User</div>
        <LogoutButton />
      </div>
      <div id="contentcontainer">{menuSelection === "character" && <ViewCharacter myUser={myUser} getUsers={getUsers} userData={userData} />}</div>
    </>
  );
}
