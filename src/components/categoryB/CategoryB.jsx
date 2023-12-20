import React, { useState } from "react";
import { carsB } from "../../ClassB";
import Card from "../card/Card";
import transition from "../animation/transition";

const CategoryB = () => {
  const [text, setText] = useState("");
  const [cd, setCd] = useState(false);
  const [boost, setBoost] = useState(false);

  const toggleCardealer = () => {
    setCd(true);
    setBoost(false);
  };
  const toggleBoost = () => {
    setCd(false);
    setBoost(true);
  };
  const resetCars = () => {
    setBoost(false);
    setCd(false);
  };

  return (
    <div
      style={{
        marginTop: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="carboost">
        <span
          className={boost && !cd ? "clicked" : "unclicked"}
          onClick={() => toggleBoost()}
        >
          Boosting Cars <i className="fa-solid fa-handcuffs"></i>
        </span>
        <span
          className={cd && !boost ? "clicked" : "unclicked"}
          onClick={() => toggleCardealer()}
        >
          Cardealer cars<i class="fa-solid fa-file-signature"></i>
        </span>
        <span
          className={!boost && !cd ? "clicked" : "unclicked"}
          onClick={() => resetCars()}
        >
          All cars<i className="fa-solid fa-car-rear"></i>
        </span>
      </div>
      <form action="" className="control">
        <input
          type="text"
          placeholder="Search for a car"
          onChange={(e) => setText(e.target.value)}
        />

        <i className="fas fa-search"></i>
      </form>
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
          marginBottom: "-75px",
        }}
      >
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
            This means the car is banned from races.
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
            This means the car got a special engine sound (addon).
          </span>
        </div>
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
        {cd === false && boost === false
          ? carsB
              .filter((el) =>
                el.name.toUpperCase().trim().includes(text.trim().toUpperCase())
              )
              .map((el) => <Card el={el} key={el.id} />)
          : cd === true && boost === false
          ? carsB
              .filter((el) =>
                el.name.toUpperCase().trim().includes(text.trim().toUpperCase())
              )
              .filter((el) => el.avail.toLowerCase().includes("cardealer"))
              .map((el) => <Card el={el} key={el.id} />)
          : carsB
              .filter((el) =>
                el.name.toUpperCase().trim().includes(text.trim().toUpperCase())
              )
              .filter((el) => el.avail.toLowerCase().includes("boosting"))
              .map((el) => <Card el={el} key={el.id} />)}
      </div>
    </div>
  );
};

export default transition(CategoryB);
