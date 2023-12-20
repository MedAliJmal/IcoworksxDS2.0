import React from "react";
import "./Entete.css";
import "boxicons";
import logo from "./logo.png";
import { Link } from "react-router-dom";
const Entete = () => {
  return (
    <div className="entete">
      <img src={logo} alt="taswira" style={{ height: "40px" }} />

      <input type="checkbox" name="" id="check" />
      <label htmlFor="check" className="icons">
        <box-icon name="menu" id="menu-icon"></box-icon>
        <box-icon name="x" id="close-icon"></box-icon>
      </label>
      <nav className="navbar">
        <Link to="/">
          <a href="" id="title1">
            Home
          </a>
        </Link>
        <Link to="/Category/B">
          <a href="" id="title2">
            B Cars
          </a>
        </Link>
        <Link to="/Category/S">
          <a href="" id="title3">
            S Cars
          </a>
        </Link>
        <Link to="Category/Drift">
          <a href="" id="title4">
            Drift Cars
          </a>
        </Link>
        <Link to="Categry/AddonCars">
          <a href="" id="title5">
            Addon Cars
          </a>
        </Link>
      </nav>
    </div>
  );
};

export default Entete;
