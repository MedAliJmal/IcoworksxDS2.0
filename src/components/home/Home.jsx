import React from "react";
import Card from "../card/Card";
import transition from "../animation/transition";

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
          Basically the are 2 cars categories supercars & tuned cars (S class &
          B class), in each of those categories there are vehicles that are easy
          to obtain through the cardealer & there're is some unique cars that
          you need to Vynscratch them through boosting giving you a better
          driving experience (enhanced engine sound , a slight performance
          diffrence) so we created this website to make it clear for you ! all
          you need to do is to select the category you want and you'll get all
          the informations you need like the example shown down below :
        </p>
      </div>
      <Card el={car} />
    </div>
  );
};

export default transition(Home);
