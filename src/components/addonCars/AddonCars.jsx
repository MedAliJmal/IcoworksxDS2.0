import React, { useEffect, useState } from "react";
import transition from "../animation/transition";
import { TbListDetails } from "react-icons/tb";
import { addoncars } from "../../AddonCars";
import Card from "../card/Card";

const AddonCars = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const [text, setText] = useState("");

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
            <span
              className="spanbutton"
              style={{ color: "white", border: "white solid 2px" }}
            >
              <TbListDetails className="icona" style={{ color: "white" }} />{" "}
              Check Details
            </span>
          </span>{" "}
          .
        </p>
        <form action="" className="control" style={{ marginTop: "20px" }}>
          <input
            type="text"
            placeholder="Search for a car"
            onChange={(e) => setText(e.target.value)}
          />

          <i className="fas fa-search"></i>
        </form>
      </div>

      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {addoncars
          .filter((el) =>
            el.name.toUpperCase().trim().includes(text.trim().toUpperCase())
          )
          .map((el) => (
            <Card el={el} key={el.id} />
          ))}
      </div>
    </div>
  );
};

export default transition(AddonCars);
