import zarnok from "../assets/1_zarnok.webp";
import xylophus from "../assets/2_xylophus.webp";
import quasarax from "../assets/3_quasarax.webp";
import "../CSS/Characterselection.css";

export default function Characterselection({ setCurrentStep, setCharacter }) {
  return (
    <div id="charselectcontainer">
      <h2>Select your adventurer</h2>
      <div id="charselect">
        <div className="character">
          <img
            src={zarnok}
            alt="zarnok"
            onClick={() => {
              setCharacter(0), setCurrentStep(1);
            }}
          />
          <h3>Zarnok</h3>
        </div>
        <div className="character">
          <img
            src={xylophus}
            alt="xylophus"
            onClick={() => {
              setCharacter(1), setCurrentStep(1);
            }}
          />{" "}
          <h3>Xylophus</h3>
        </div>
        <div className="character">
          <img
            src={quasarax}
            alt="quasarax"
            onClick={() => {
              setCharacter(2), setCurrentStep(1);
            }}
          />{" "}
          <h3>Quasarax</h3>
        </div>
      </div>
    </div>
  );
}
