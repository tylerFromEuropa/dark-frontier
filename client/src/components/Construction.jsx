import "../CSS/Construction.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonDigging, faToolbox } from "@fortawesome/free-solid-svg-icons";

export default function Construction() {
  return (
    <>
      <div className="body-wrap">
        <div className="hazard-background"></div>
        <div>
          <h1>
            <FontAwesomeIcon icon={faToolbox} bounce />
            !UNDER CONSTRUCTION!
            <FontAwesomeIcon icon={faPersonDigging} shake />
          </h1>
        </div>

        <div className="hazard-background"></div>
      </div>
    </>
  );
}
