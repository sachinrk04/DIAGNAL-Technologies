import React from "react";
import BgImage from "../assets/Slices/nav_bar.png";
import BackArrow from "../assets/Slices/Back.png";
import Search from "../assets/Slices/search.png";

export default function Header() {
  return (
    <div
      className="flex items-center justify-between h-14 px-3 fixed top-0 left-0 right-0"
      style={{
        backgroundImage: "url(" + BgImage + ")",
        backgroundSize: "auto",
      }}
    >
      <div className="flex items-center">
        <img className="w-6 mr-3" src={BackArrow} alt="Back" />
        <h1>Romantic Comedy</h1>
      </div>
      <div>
        <img className="w-6" src={Search} alt="Search" />
      </div>
    </div>
  );
}
