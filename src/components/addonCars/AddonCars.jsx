import React from "react";
import transition from "../animation/transition";
import { TbListDetails } from "react-icons/tb";
import { addoncars } from "../../AddonCars";
import Card from "../card/Card";

const AddonCars = () => {
  return (
    <div
      style={{
        marginTop: "10%",
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
            color: "white",
            textShadow: "2px 2px 7px rgba(0,0,0,1)",
          }}
        >
          So now we are talking about the beauty of cars ! if you want yours you
          can open a ticket on{" "}
          <a href="https://discord.gg/dictators" style={{ color: "#000" }}>
            DS Roleplay
          </a>{" "}
          and they'll give you the informations needed (Car price , livery price
          etc...) and i'll make sure that you'll be satisfied.
        </h1>
        <p
          style={{
            width: "90%",
            marginTop: "5%",
            fontSize: "20px",
            color: "black",
            textShadow: "2px 2px 7px rgba(175,149,102,1)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          You can check the addon cars i created down below! all you need to do
          is to click on{" "}
          <span>
            {" "}
            <div
              style={{
                color: "green",
                fontSize: "20px",
                width: "30px",
                height: "30px",
                backgroundColor: "white",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "3px solid rgba(175,149,102,1)",
                margin: "0px 10px",
              }}
            >
              <TbListDetails />
            </div>
          </span>{" "}
          .
        </p>
      </div>
      {addoncars.map((el) => (
        <Card el={el} key={el.id} />
      ))}
    </div>
  );
};

export default transition(AddonCars);
