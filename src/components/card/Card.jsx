import React, { useEffect } from "react";
import "./Card.css";
import { GiPowerLightning, GiTakeMyMoney, GiTireTracks } from "react-icons/gi";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";

const Card = ({ el }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div style={{ position: "relative", margin: "60px 20px" }}>
      <div className="card">
        <div className="imgBx">
          <img src={el.url} alt="imgZ" />
        </div>
        <div className="content">
          <h3 style={{ marginBottom: "15px" }}>
            <span>
              {el.power ? (
                <GiPowerLightning
                  style={{
                    color: "red",
                    marginLeft: "5px",
                    margin: "0px 4px -3px 0px",
                    fontSize: "21px",
                  }}
                />
              ) : null}
            </span>

            {el.name}
            <span>
              {el.exc ? (
                <GiTakeMyMoney
                  style={{
                    color: "silver",
                    margin: "0px 4px 0px 4px",
                    fontSize: "20px",
                  }}
                />
              ) : null}
            </span>
          </h3>
          <div className="w3-light-grey" style={{ margin: "5px" }}>
            <div
              className="w3-blue"
              style={{
                height: "24px",
                width: `${el.accel}`,
                textAlign: "left",
              }}
            >
              <p style={{ width: "180px" }}>
                {" "}
                {`  Acceleration : ${el.accel}`}
              </p>
            </div>
          </div>
          <div className="w3-light-grey" style={{ margin: "5px" }}>
            <div
              className="w3-blue"
              style={{
                height: "24px",
                width: `${el.tops}`,
                textAlign: "left",
              }}
            >
              <p style={{ width: "180px" }}>{`  Top speed : ${el.tops}`}</p>
            </div>
          </div>
          <div className="w3-light-grey" style={{ margin: "5px" }}>
            <div
              className="w3-blue"
              style={{ height: "24px", width: `${el.grip}`, textAlign: "left" }}
            >
              <p style={{ width: "180px" }}> {`  Grip : ${el.grip}`}</p>
            </div>
          </div>
          <h6>
            Class : <span style={{ color: `${el.colorC}` }}>{el.cat}</span>
          </h6>
          <h6>
            Availability :{" "}
            <span style={{ color: `${el.colorAv}` }}>{el.avail}</span>
          </h6>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              marginTop: "-4px",
            }}
          >
            {el.ees ? (
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "baseline",
                }}
              >
                {" "}
                <i
                  class="fa-regular fa-file-audio"
                  style={{
                    color: "#af9566",
                    margin: "0px 0px 0px 15px",
                    fontSize: "21px",
                  }}
                ></i>
              </span>
            ) : null}{" "}
            <span>
              {el.ban ? (
                <i
                  class="fa-solid fa-ban"
                  style={{
                    color: "red",
                    margin: "0 0px 0px 15px",
                    fontSize: "20px",
                  }}
                ></i>
              ) : null}
            </span>
            <span>
              {el.pol ? (
                <i
                  style={{
                    color: "blue",
                    margin: "0 0px 0px 15px",
                    fontSize: "20px",
                  }}
                  class="fa-solid fa-building-shield"
                ></i>
              ) : null}
            </span>
            <span>
              {el.drift ? (
                <GiTireTracks
                  style={{
                    color: "brown",
                    margin: "0 0px 0px 15px",
                    fontSize: "20px",
                  }}
                />
              ) : null}
            </span>
            <span>
              {el.addon ? (
                <Link
                  to={`/Category/AddonCars/${el.name}`}
                  style={{ textDecoration: "none" }}
                >
                  <span className="spanbutton">
                    <TbListDetails className="icona" /> Check Details
                  </span>
                </Link>
              ) : null}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
