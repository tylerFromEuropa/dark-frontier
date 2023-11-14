import axios from "axios";
import ResetHealth from "../ResetHealth";

export default function GameOver({ myUser, setMyUser }) {
  return (
    <>
      <div>
        <p>You died!</p>
      </div>
      <ResetHealth myUser={myUser} setMyUser={setMyUser} />
    </>
  );
}
