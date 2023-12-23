import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { copcars } from "../../DriftCars";

const GovernmentDetails = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const params = useParams();
  console.log(params);
  const veh = copcars.find((el) => el.name.includes(params.name));
  console.log(veh);
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
          src={veh.url}
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
            {veh.desc}
          </p>
          <div className="w3-light-grey" style={{ margin: "5px" }}>
            <div
              className="w3-blue"
              style={{
                height: "24px",
                width: `${veh.accel}`,
                textAlign: "left",
              }}
            >
              <p style={{ width: "180px", color: "black" }}>
                {" "}
                {`  Acceleration : ${veh.accel}`}
              </p>
            </div>
          </div>
          <div className="w3-light-grey" style={{ margin: "5px" }}>
            <div
              className="w3-blue"
              style={{
                height: "24px",
                width: `${veh.tops}`,
                textAlign: "left",
              }}
            >
              <p
                style={{ width: "180px", color: "black" }}
              >{`  Top speed : ${veh.tops}`}</p>
            </div>
          </div>
          <div className="w3-light-grey" style={{ margin: "5px" }}>
            <div
              className="w3-blue"
              style={{
                height: "24px",
                width: `${veh.grip}`,
                textAlign: "left",
              }}
            >
              <p style={{ width: "180px", color: "black" }}>
                {" "}
                {`  Grip : ${veh.grip}`}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="youtube-container">
        <iframe
          width="854"
          height="480"
          src={`${veh.vid}?si=eqQ4CW46MZm-5E1x&autoplay=1&vq=hd1080`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;fullscreen"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default GovernmentDetails;
