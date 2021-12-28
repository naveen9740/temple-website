import { useState } from "react";
import { festivalCelb, infoAboutTemple } from "../data";
import { Banner } from "./Banner";
import { FestivalsCel } from "./FestivalsCel";
import { Footer } from "./Footer";
import { Info } from "./Info";
import "./Navbar.css";
import { Programs } from "./Programs";
export const Navbar = () => {
  const [menu, setMenu] = useState(false);
  console.log(menu);
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
          <li>Home</li>
          <li>About</li>
          <li>Updates</li>
          <li>Calander</li>
          <li>Contact</li>
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
      <Banner />
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {infoAboutTemple.map(({ name, desc }) => {
          return <Info key={name} name={name} desc={desc} />;
        })}
      </div>
      <Programs />
      <div>
        <h1>Festivals Celebrated</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {festivalCelb.map(({ name, desc }) => {
            return <FestivalsCel name={name} desc={desc} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};
