import React from "react";
import "./Card.css";
import { GiPowerLightning, GiTireTracks } from "react-icons/gi";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";

const Card = ({ el }) => {
  return (
    <div style={{ position: "relative", margin: "60px 20px" }}>
      <div className="card">
        <div className="imgBx">
          <img src={el.url} alt="imgZ" />
        </div>
        <div className="content">
          <h3 style={{ marginBottom: "15px" }}>{el.name}</h3>
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
          <h4>
            Class : <span style={{ color: `${el.colorC}` }}>{el.cat}</span>
          </h4>
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
              marginTop: "-10px",
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
              {el.power ? (
                <GiPowerLightning
                  style={{
                    color: "red",
                    marginLeft: "5px",
                    margin: "0px 0px 0px 0px",
                    fontSize: "20px",
                  }}
                />
              ) : null}
            </span>
            <span>
              {el.addon ? (
                <Link to={`/Category/AddonCars/${el.name}`}>
                  <TbListDetails
                    style={{
                      color: "green",
                      marginLeft: "5px",
                      margin: "0px 15px",
                      fontSize: "25px",
                    }}
                  />
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
