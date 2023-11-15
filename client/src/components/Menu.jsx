import { useState } from "react";
import "../CSS/Menu.css";
import LogoutButton from "../components/LogoutButton";
import ViewCharacter from "./ViewCharacter/ViewCharacter";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Menu(myUser, getUsers, userData, setUserData) {
    const { user, logout } = useAuth0();
    async function deleteUser() {
        const API = `https://dark-frontier.onrender.com/users?userID=${user.email}`;

        try {
            await axios.delete(API);
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    }
    const [menuSelection, setMenuSelection] = useState("");
    return (
        <>
            <div id="menucontainer">
                <Link to="/about">
                    <div>About</div>
                </Link>
                <div onClick={() => setMenuSelection("character")}>Character</div>
                <div
                    onClick={() => {
                        deleteUser();
                        logout({ logoutParams: { returnTo: window.location.origin } });
                    }}
                >
                    Delete User
                </div>
                <LogoutButton />
            </div>
            <div id="contentcontainer">{menuSelection === "character" && <ViewCharacter myUser={myUser} getUsers={getUsers} userData={userData} />}</div>
        </>
    );
}
