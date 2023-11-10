import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonDigging, faToolbox } from "@fortawesome/free-solid-svg-icons";

import "./Reset.css";
import "./App.css";

function App() {
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

export default App;
