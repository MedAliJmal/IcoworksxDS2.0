import React, { useEffect } from "react";
import transition from "../animation/transition";
import { GiPowerLightning, GiTireTracks } from "react-icons/gi";
import { copcars, driftcars } from "../../DriftCars";
import Card from "../card/Card";
import { Link } from "react-router-dom";

const DriftCars = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          backgroundColor: "white",
          borderRadius: "30px",
          padding: "20px",
          margin: "20px",
          border: "solid 3px #af9566 ",
          marginBottom: "0px",
          width: "40%",
        }}
      >
        <h5 style={{ color: "gray", textDecoration: "underline" }}>
          Symbols Explication :
        </h5>
        <div style={{ display: "flex", margin: "5px" }}>
          <i
            class="fa-solid fa-ban"
            style={{
              color: "red",
              margin: "0 15px 0px 0px",
              fontSize: "20px",
            }}
          ></i>{" "}
          <span
            style={{
              color: "red",
            }}
          >
            This car is banned from races.
          </span>
        </div>
        <div style={{ display: "flex", margin: "5px" }}>
          <i
            class="fa-regular fa-file-audio"
            style={{
              color: "#af9566",
              margin: "0 15px 0px 0px",
              fontSize: "20px",
            }}
          ></i>
          <span
            style={{
              color: "#af9566",
            }}
          >
            This car got a special engine sound (addon).
          </span>
        </div>
        <div style={{ display: "flex", margin: "5px" }}>
          <i
            style={{
              color: "blue",
              margin: "0 15px 0px 0px",
              fontSize: "20px",
            }}
            class="fa-solid fa-building-shield"
          ></i>
          <span
            style={{
              color: "blue",
            }}
          >
            This car belongs to the government (LSPD).
          </span>
        </div>
        <div style={{ display: "flex", margin: "5px" }}>
          <GiTireTracks
            style={{
              color: "brown",
              margin: "0 15px 0px 0px",
              fontSize: "20px",
            }}
          />
          <span
            style={{
              color: "brown",
            }}
          >
            This car is made for drift only.
          </span>
        </div>
        <div style={{ display: "flex", margin: "5px" }}>
          <GiPowerLightning
            style={{
              color: "red",
              margin: "0 15px 0px 0px",
              fontSize: "20px",
            }}
          />
          <span
            style={{
              color: "red",
            }}
          >
            This vehicle is too powerfull !!! Use it vs addon cars only !!!.
          </span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "25px",
          marginBottom: "-70px",
        }}
      >
        <img
          src="https://image.pngaaa.com/851/3764851-middle.png"
          alt="lspd"
          width="50px"
          style={{ borderRadius: "50%", margin: "10px" }}
        />
        <h1
          style={{
            margin: "10px",
            color: "white",
            textShadow: "2px 2px 7px rgba(0,0,0,1)",
          }}
        >
          LSPD DEPARTMENT
        </h1>
      </div>
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          // gap: "100px 50px",
          padding: "100px 50px",
        }}
      >
        {copcars.map((el) => (
          <Link
            to={`/Category/GovermentCars/${el.name}`}
            style={{ textDecoration: "none" }}
          >
            {" "}
            <Card el={el} key={el.id} />
          </Link>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "25px",
          marginBottom: "-70px",
        }}
      >
        <img
          src="https://media4.giphy.com/media/IZNHvmfTdnpldjTKkp/giphy.gif"
          alt="lspd"
          width="50px"
          style={{
            borderRadius: "100%",
            margin: "10px",
            border: "4px solid white",
          }}
        />
        <h1
          style={{
            margin: "10px",
            color: "white",
            textShadow: "2px 2px 7px rgba(0,0,0,1)",
          }}
        >
          DRIFT CARS
        </h1>
      </div>
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          // gap: "100px 50px",
          padding: "100px 50px",
        }}
      >
        {driftcars.map((el) => (
          <Card el={el} key={el.id} />
        ))}
      </div>
    </div>
  );
};

export default transition(DriftCars);
