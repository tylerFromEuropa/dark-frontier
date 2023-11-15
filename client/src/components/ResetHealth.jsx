import axios from "axios";

export default function ResetHealth({ myUser, setMyUser, setCurrentStep }) {
  async function resetHealth() {
    const API = `https://dark-frontier.onrender.com/users/${myUser.myID}`;
    try {
      await axios.put(API, myUser);
      setMyUser({
        ...myUser,
        character: {
          ...myUser.character,
          health: myUser.character.max_health,
        },
      });
    } catch (error) {
      console.error("Error updating user:", error);
    }
    setCurrentStep(7);
  }

  return (
    <>
      <div>
        <button
          class="resethealthbutton"
          onClick={() => {
            resetHealth();
          }}
        >
          Go back to ship
        </button>
      </div>
    </>
  );
}
