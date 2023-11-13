import zarnok from "../../public/1_zarnok.webp";
import xylophus from "../../public/2_xylophus.webp";
import quasarax from "../../public/3_quasarax.webp";
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
            onMouseEnter={() => {
              setCharacter(1);
            }}
            onClick={() => {
              setCharacter(1), setCurrentStep(1);
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
              setCharacter(2), setCurrentStep(1);
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
              setCharacter(3), setCurrentStep(1);
            }}
          />{" "}
          <h3>Quasarax</h3>
        </div>
      </div>
    </div>
  );
}
