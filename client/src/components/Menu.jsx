import "../CSS/Menu.css";
import LogoutButton from "../components/LogoutButton";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div id="menucontainer">
      <div>Shop</div>
      <div>Character</div>
      <div>Profile</div>
      <LogoutButton />
    </div>
  );
}
