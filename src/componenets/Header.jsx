import React from "react";
import ReactDOM from "react-dom/client";
import trollFace from "../assets/troll-face1.png";

export default function Header() {
  return (
    <header className="header">
      <img className="logo" src={trollFace} alt="" />
      <h2 className="heading--primary">Meme Generator</h2>
      <h3 className="heading--secondary">
        Get Creative, Make Memes, Spread the Fun!
      </h3>
    </header>
  );
}
