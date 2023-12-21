import React from "react";
import Card from "../card/Card";
import transition from "../animation/transition";
import { GiPowerLightning, GiTakeMyMoney, GiTireTracks } from "react-icons/gi";

const Home = () => {
  const car = {
    id: Math.random(),
    name: "Veto Classic",
    url: "https://gtacars.net/images/69b5a110de5256fefef24a7c64063cc1",
    accel: "65%",
    tops: "40%",
    grip: "55%",
    cat: "C",
    colorC: "red",
    avail: "Cardealer / Boosting",
    colorAv: "Orange",
    ees: true,
    ban: true,
  };
  return (
    <div
      className="home"
      style={{
        marginTop: "20%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "90%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backdropFilter: "blur(70%)",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          borderRadius: "15px",
          border: "5px solid #AF9566",
          padding: "10px",
          marginBottom: "25px",
          paddingBottom: "25px",
        }}
      >
        <h1
          style={{
            width: "70%",
            textShadow: "2px 2px 7px rgba(175,149,102,1)",
          }}
        >
          Welcome to{" "}
          <a href="https://discord.gg/dictators" style={{ color: "#fff" }}>
            DS Roleplay
          </a>{" "}
          where you're going to exprience a huge variety of cars with a close
          performance.
        </h1>
        <p
          style={{
            width: "90%",
            marginTop: "5%",
            fontSize: "20px",
            color: "white",
            textShadow: "2px 2px 7px rgba(0,0,0,1)",
          }}
        >
          Basically the are 2 cars categories supercars & sleepers (S class & B
          class), in each of those categories there are vehicles that are easy
          to obtain at the cardealer & there're is some unique cars that you
          need to Vynscratch them through boosting giving you a better driving
          experience (enhanced engine sound , a slight performance diffrence) so
          we created this website to make it clear for you ! all you need to do
          is to select the category you want and you'll get all the informations
          you need like the example shown down below :
        </p>
      </div>
      <Card el={car} />
      <div
        style={{
          width: "90%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backdropFilter: "blur(70%)",
          backgroundColor: "white",
          borderRadius: "15px",
          border: "5px solid #AF9566",
          padding: "10px",
          marginBottom: "25px",
          paddingBottom: "25px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            padding: "20px",
            margin: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h6 style={{ width: "55%" }}>
              <span style={{ color: "blue" }}>Acceleration</span> : is the rate
              at which a car or other vehicle can increase its speed, often seen
              in terms of the time that it takes to reach a particular speed.
            </h6>
            <h6 style={{ width: "55%" }}>
              <span style={{ color: "blue" }}>Top speed</span> : Maximum speed
              is the highest rate of speed a car can attain.
            </h6>
            <h6 style={{ width: "55%" }}>
              <span style={{ color: "blue" }}>Grip</span> : is the grip of the
              tire on the road. There is grip when the tire adheres well to the
              surface.
            </h6>
          </div>
          <h5 style={{ color: "gray", textDecoration: "underline" }}>
            Symbols Explication :
          </h5>
          <div
            style={{ display: "flex", margin: "5px", justifyContent: "center" }}
          >
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
          <div
            style={{ display: "flex", margin: "5px", justifyContent: "center" }}
          >
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
          <div
            style={{ display: "flex", margin: "5px", justifyContent: "center" }}
          >
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
          <div
            style={{ display: "flex", margin: "5px", justifyContent: "center" }}
          >
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
          <div
            style={{ display: "flex", margin: "5px", justifyContent: "center" }}
          >
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
          <div
            style={{ display: "flex", margin: "5px", justifyContent: "center" }}
          >
            <GiTakeMyMoney
              style={{
                color: "silver",
                margin: "0 15px 0px 0px",
                fontSize: "20px",
              }}
            />
            <span
              style={{
                color: "silver",
              }}
            >
              This vehicle is exclusive.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default transition(Home);
