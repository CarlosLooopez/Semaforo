import React, { useState } from "react";

const TrafficLight = () => {
  const [activeColor, setActiveColor] = useState("red");

  const cycleLight = () => {
    if (activeColor === "red") {
      setActiveColor("yellow");
    } else if (activeColor === "yellow") {
      setActiveColor("green");
    } else {
      setActiveColor("red");
    }
  };

  const trafficLightStyle = {
    backgroundColor: "#333",
    padding: "20px",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
    cursor: "pointer",
  };

  const lightStyle = (color, isActive) => ({
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: isActive ? color : "#555",
    border: isActive ? `4px solid ${color}` : "4px solid #555",
    boxShadow: isActive
      ? `0 0 30px ${color}, 0 0 60px ${color}, 0 0 90px ${color}`
      : "inset 0 0 20px rgba(0,0,0,0.5)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  });

  const colors = {
    red: "#ff0000",
    yellow: "#ffff00",
    green: "#00ff00",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#1a1a1a",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <h1
        style={{
          color: "white",
          fontSize: "32px",
          marginBottom: "40px",
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
        }}
      >
        Semáforo Interactivo
      </h1>

      <div style={trafficLightStyle} onClick={cycleLight}>
        {/* Luz Roja */}
        <div
          style={lightStyle(colors.red, activeColor === "red")}
          onClick={(e) => {
            e.stopPropagation();
            setActiveColor("red");
          }}
        />

        {/* Luz Amarilla */}
        <div
          style={lightStyle(colors.yellow, activeColor === "yellow")}
          onClick={(e) => {
            e.stopPropagation();
            setActiveColor("yellow");
          }}
        />

        {/* Luz Verde */}
        <div
          style={lightStyle(colors.green, activeColor === "green")}
          onClick={(e) => {
            e.stopPropagation();
            setActiveColor("green");
          }}
        />
      </div>

      <div
        style={{
          marginTop: "30px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "white",
            fontSize: "18px",
            marginBottom: "15px",
          }}
        >
          Luz activa:{" "}
          <span
            style={{
              color: colors[activeColor],
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            {activeColor === "red"
              ? "Roja"
              : activeColor === "yellow"
              ? "Amarilla"
              : "Verde"}
          </span>
        </p>

        <button
          onClick={cycleLight}
          style={{
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            padding: "12px 24px",
            borderRadius: "6px",
            fontSize: "16px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "background-color 0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          Cambiar Luz
        </button>
      </div>
    </div>
  );
};

export default TrafficLight;
