import { useEffect, useState } from "react";
import "../CSS/Game.css";
import Header from "../components/Header";
import Characterselection from "../components/Characterselection";
import characters from "../JSON/characters.json";
import BossOne from "../components/BossFights/BossOne";
import axios from "axios";
import $1_Backstory from "../components/1_Backstory/1_Backstory";
import $2_Bar from "../components/2_Bar/2_Bar";
import $3_Skyhawk from "../components/3_Skyhawk/3_Skyhawk";
import { useAuth0 } from "@auth0/auth0-react";
import GameOver from "../components/GameOver";

export default function Game() {
  const [currentStep, setCurrentStep] = useState(0);
  const [myCharacter, setCharacter] = useState(0);

  const [userData, setUserData] = useState({});

  const { user } = useAuth0();

  // This needs to take a unique id (myID) which is set on CharacterSelection, between a very big number
  // We use myID as we need something to access the specific object inside of our database when doing updates
  const [myUser, setMyUser] = useState({
    myID: "",
    userID: "",
    character: {},
  });

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const API = `https://dark-frontier.onrender.com/users?userID=${user.email}`;
    const res = await axios.get(API);
    setUserData(res.data[0]);
  }

  return (
    <>
      <Header characters={characters} myCharacter={myCharacter} myUser={myUser} setMyUser={setMyUser} />
      <div id="gamecontainer">
        {currentStep === 0 && (
          <Characterselection
            myUser={myUser}
            setMyUser={setMyUser}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            myCharacter={myCharacter}
            setCharacter={setCharacter}
            userData={userData}
          />
        )}

        {currentStep === 1 && <$1_Backstory currentStep={currentStep} setCurrentStep={setCurrentStep} myUser={myUser} setMyUser={setMyUser} />}
        {currentStep === 2 && <$2_Bar currentStep={currentStep} setCurrentStep={setCurrentStep} myUser={myUser} setMyUser={setMyUser} />}
        {currentStep === 3 && <$3_Skyhawk currentStep={currentStep} setCurrentStep={setCurrentStep} myUser={myUser} setMyUser={setMyUser} />}
        {currentStep === 4 && (
          <BossOne myUser={myUser} setMyUser={setMyUser} myCharacter={myCharacter} setCurrentStep={setCurrentStep} currentStep={currentStep} />
        )}
        {currentStep === 5 && <VictoryScreen currentStep={currentStep} setCurrentStep={setCurrentStep} myUser={myUser} setMyUser={setMyUser} />}
        {currentStep === 100 && <GameOver setCurrentStep={setCurrentStep} myUser={myUser} setMyUser={setMyUser} />}
      </div>
    </>
  );
}
