import { useState } from "react";
import { menuItems } from "../../data";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="nav">
      <div className="nav-lineOne">
        Official Website of Sri Venkatramana Temple, Katapady.
      </div>
      <div className="nav-lineTwo">
        <div className="nav-lineTwo-name">
          <div className="name1">SRI VENKATARAMANA TEMPLE</div>
          <div className="name2">KATAPADY</div>
        </div>
        <ul className="nav-lineTwo-menu">
          {menuItems.map(({ name, endpoint }) => {
            return (
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#545e6f",
                  background: isActive ? "#f89d0e" : "",
                })}
                className="item"
                to={`${endpoint}`}
                key={name}
              >
                {name}
              </NavLink>
            );
          })}
        </ul>
        <div onClick={() => setMenu(!menu)} className="burger">
          Menu
        </div>
        {menu && (
          <ul className="nav-lineTwo-menuBurger">
            <li>Home</li>
            <li>About</li>
            <li>Updates</li>
            <li>Calander</li>
            <li>Contact</li>
          </ul>
        )}
      </div>
    </div>
  );
};
