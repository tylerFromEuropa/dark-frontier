import { useState } from "react";
import zarnok from "../../public/1_zarnok.webp";
import xylophus from "../../public/2_xylophus.webp";
import quasarax from "../../public/3_quasarax.webp";
import "../CSS/Characterselection.css";
import { useAuth0 } from "@auth0/auth0-react";

import Characters from "../JSON/characters.json";
import axios from "axios";

export default function Characterselection({ myUser, setMyUser, myCharacter, setCurrentStep, setCharacter, userData }) {
    const { user } = useAuth0();

    // This creates a very big random number
    const ranNum = Math.floor(Math.random() * 100000000000);

    async function createUser() {
        // We use said big number in the myID part so that each user has a unique id and we can access their data with it over at server.js
        // Try and use MongoDB automatically generated ID at the end of the week
        const newUser = { myID: ranNum, userID: user.email, character: Characters[myCharacter] };
        setMyUser(newUser);
        const API = "https://dark-frontier.onrender.com/users";
        await axios.post(API, newUser);
    }

    return (
        <div id="charselectcontainer">
            <h2>Select your adventurer</h2>
            <div id="charselect">
                <div className="character">
                    <img
                        src={zarnok}
                        alt="zarnok"
                        onMouseEnter={() => {
                            setCharacter(1);
                        }}
                        onClick={() => {
                            setCharacter(1), setCurrentStep(3), createUser();
                        }}
                    />
                    <h3>Zarnok</h3>
                </div>
                <div className="character">
                    <img
                        src={xylophus}
                        alt="xylophus"
                        onMouseEnter={() => {
                            setCharacter(2);
                        }}
                        onClick={() => {
                            setCharacter(2), setCurrentStep(3), createUser();
                        }}
                    />{" "}
                    <h3>Xylophus</h3>
                </div>
                <div className="character">
                    <img
                        src={quasarax}
                        alt="quasarax"
                        onMouseEnter={() => {
                            setCharacter(3);
                        }}
                        onClick={() => {
                            setCharacter(3), setCurrentStep(3), createUser();
                        }}
                    />{" "}
                    <h3>Quasarax</h3>
                </div>
            </div>
        </div>
    );
}
