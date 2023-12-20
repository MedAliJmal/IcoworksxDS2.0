import React from "react";
import "./Card.css";
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
            }}
          >
            {el.ees ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {" "}
                <span style={{ color: "#af9566" }}>Enhanced Engine Sound</span>
                <i
                  class="fa-regular fa-file-audio"
                  style={{
                    color: "#af9566",
                    margin: "0 0px 0px 15px",
                    fontSize: "20px",
                  }}
                ></i>
              </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
