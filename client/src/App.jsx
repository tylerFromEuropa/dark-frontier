import "./CSS/Reset.css";
import "./CSS/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Game from "./pages/Game";
import Start from "./pages/Start";
import About from "./pages/About";

function App() {
    const { isAuthenticated } = useAuth0();
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* <Route path="/" element={<Construction />}></Route> */}
                    <Route
                        path="/"
                        element={isAuthenticated ? <Game /> : <Start />}
                        // element={<Game />}
                    ></Route>
                    <Route path="/about" element={<About />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
