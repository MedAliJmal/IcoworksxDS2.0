import React from "react";
import "./Pied.css";
import { Link } from "react-router-dom";
const Pied = () => {
  return (
    <div className="footerContainer">
      <div className="socialIcons">
        <div className="icon">
          <a href="https://www.facebook.com/Jmal.Med.Ali2/">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </div>
        <div className="icon">
          <a href="https://www.instagram.com/jicov1c/">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
        <div className="icon">
          <a href="https://www.youtube.com/@FreakzJICO/">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
        <div className="icon">
          <a href="https://discord.gg/RgYGPnkh2j">
            <i className="fa-brands fa-discord"></i>
          </a>
        </div>
      </div>
      <div className="footerNav">
        <ul>
          <li>
            <Link to="/">
              <a href="" id="title1">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link to="/Category/B">
              <a href="" id="title2">
                B Cars
              </a>
            </Link>
          </li>
          <li>
            <Link to="/Category/S">
              <a href="" id="title3">
                S Cars
              </a>
            </Link>
          </li>
          <li>
            <Link to="/Category/CxD">
              <a href="" id="title4">
                Cops & Drift
              </a>
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/Category/AddonCars">
              <a href="" id="title5">
                Addon Cars
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="footerBottom">
        <p>
          Copyright &copy;2023: Handlings & website made by{" "}
          <span className="designer">じこ Jico</span>
        </p>
      </div>
    </div>
  );
};

export default Pied;
