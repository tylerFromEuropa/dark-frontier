import { useEffect, useState } from "react";
import "../CSS/Game.css";
import Header from "../components/Header";
import Characterselection from "../components/Characterselection";
import characters from "../JSON/characters.json";
import axios from "axios";
import $1_Backstory from "../components/1_Backstory/1_Backstory";
import $2_Bar from "../components/2_Bar/2_Bar";
import $3_Skyhawk from "../components/3_Skyhawk/3_Skyhawk";
import $4_PlaceVisit from "../components/4_PlaceVisit/4_PlaceVisit";
import $5_PawnShop from "../components/5_PawnShop/5_PawnShop";
import $6_Dunecrest from "../components/6_Dunecrest/6_Dunecrest";
import $7_Spaceship from "../components/7_Spaceship/7_Spaceship";
import $10_RPS from "../components/10_Minigames/10_RPS";
import $10_Cardgame from "../components/10_Minigames/10_CardGame";
import BossOne from "../components/BossOne";
import { useAuth0 } from "@auth0/auth0-react";

import GameOver from "../components/GameResults/BossOne/GameOver";
import GameFriendly from "../components/GameResults/BossOne/GameFriendly";
import GameVictory from "../components/GameResults/BossOne/GameVictory";

import CardLoss from "../components/GameResults/CardGame/CardLoss";
import CardTie from "../components/GameResults/CardGame/CardTie";
import CardVictory from "../components/GameResults/CardGame/CardVictory";

import RPSVictory from "../components/GameResults/RPS/RPSVictory";

export default function Game() {
  const [currentStep, setCurrentStep] = useState(0);
  const [myCharacter, setCharacter] = useState(0);
  const [userData, setUserData] = useState({});
  const { user } = useAuth0();

  const [myUser, setMyUser] = useState({
    myID: "",
    userID: "",
    character: {},
  });

  useEffect(() => {
    getUsers();
  }, [userData]);

  async function getUsers() {
    const API = `https://dark-frontier.onrender.com/users?userID=${user.email}`;
    const res = await axios.get(API);
    setUserData(res.data[0]);
  }
  return (
    <>
      {currentStep > 0 && (
        <Header
          characters={characters}
          myCharacter={myCharacter}
          myUser={myUser}
          setMyUser={setMyUser}
          getUsers={getUsers}
          userData={userData}
          setUserData={setUserData}
        />
      )}
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
        {currentStep === 4 && <$4_PlaceVisit currentStep={currentStep} setCurrentStep={setCurrentStep} myUser={myUser} setMyUser={setMyUser} />}
        {currentStep === 5 && <$5_PawnShop currentStep={currentStep} setCurrentStep={setCurrentStep} myUser={myUser} setMyUser={setMyUser} />}
        {currentStep === 6 && <$6_Dunecrest currentStep={currentStep} setCurrentStep={setCurrentStep} myUser={myUser} setMyUser={setMyUser} />}
        {currentStep === 7 && <$7_Spaceship currentStep={currentStep} setCurrentStep={setCurrentStep} myUser={myUser} setMyUser={setMyUser} />}
        {currentStep === 10 && <$10_RPS currentStep={currentStep} setCurrentStep={setCurrentStep} myUser={myUser} setMyUser={setMyUser} />}
        {currentStep === 11 && <$10_Cardgame currentStep={currentStep} setCurrentStep={setCurrentStep} myUser={myUser} setMyUser={setMyUser} />}
        {currentStep === 15 && <BossOne myCharacter={myCharacter} setCurrentStep={setCurrentStep} myUser={myUser} setMyUser={setMyUser} />}
        {currentStep === 94 && <CardTie currentStep={currentStep} setCurrentStep={setCurrentStep} myUser={myUser} setMyUser={setMyUser} />}
        {currentStep === 95 && <CardLoss currentStep={currentStep} setCurrentStep={setCurrentStep} myUser={myUser} setMyUser={setMyUser} />}
        {currentStep === 96 && <CardVictory currentStep={currentStep} setCurrentStep={setCurrentStep} myUser={myUser} setMyUser={setMyUser} />}
        {currentStep === 97 && <RPSVictory currentStep={currentStep} setCurrentStep={setCurrentStep} myUser={myUser} setMyUser={setMyUser} />}
        {currentStep === 98 && <GameFriendly currentStep={currentStep} setCurrentStep={setCurrentStep} myUser={myUser} setMyUser={setMyUser} />}
        {currentStep === 99 && <GameVictory currentStep={currentStep} setCurrentStep={setCurrentStep} myUser={myUser} setMyUser={setMyUser} />}
        {currentStep === 100 && <GameOver setCurrentStep={setCurrentStep} myUser={myUser} setMyUser={setMyUser} />}
      </div>
    </>
  );
}
