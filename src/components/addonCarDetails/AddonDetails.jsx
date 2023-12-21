import React from "react";
import transition from "../animation/transition";
import { useParams } from "react-router-dom";
import { addoncars } from "../../AddonCars";

const AddonDetails = () => {
  const params = useParams();
  console.log(params);
  const car = addoncars.find((el) => el.name === params.name);
  console.log(car);
  return (
    <div className="details">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={car.url}
          alt="car"
          style={{ border: "2px solid white", borderRadius: "30px" }}
        />{" "}
        <div
          style={{
            marginLeft: "-25px",
            marginRight: "50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              textAlign: "center",
              color: "white",
              width: "100%",
              textShadow: "2px 2px 7px rgba(0,0,0,1)",
            }}
          >
            {car.desc}
          </p>
          <div className="w3-light-grey" style={{ margin: "5px" }}>
            <div
              className="w3-blue"
              style={{
                height: "24px",
                width: `${car.accel}`,
                textAlign: "left",
              }}
            >
              <p style={{ width: "180px", color: "black" }}>
                {" "}
                {`  Acceleration : ${car.accel}`}
              </p>
            </div>
          </div>
          <div className="w3-light-grey" style={{ margin: "5px" }}>
            <div
              className="w3-blue"
              style={{
                height: "24px",
                width: `${car.tops}`,
                textAlign: "left",
              }}
            >
              <p
                style={{ width: "180px", color: "black" }}
              >{`  Top speed : ${car.tops}`}</p>
            </div>
          </div>
          <div className="w3-light-grey" style={{ margin: "5px" }}>
            <div
              className="w3-blue"
              style={{
                height: "24px",
                width: `${car.grip}`,
                textAlign: "left",
              }}
            >
              <p style={{ width: "180px", color: "black" }}>
                {" "}
                {`  Grip : ${car.grip}`}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="youtube-container">
        <iframe
          width="854"
          height="480"
          src={`${car.vid}?si=eqQ4CW46MZm-5E1x&autoplay=1&vq=hd720`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;fullscreen"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default transition(AddonDetails);
