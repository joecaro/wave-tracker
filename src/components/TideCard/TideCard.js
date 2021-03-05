import React from "react";
import "./TideCard.css";

const TideCard = ({ tides }) => {
  const handleMargin = (time) => {
    let [hour, minutes] = time.split(":").map((time) => parseInt(time));
    let timeInMinutes = hour * 60 + minutes;
    let margin = (timeInMinutes / 1440) * 312 - 55;

    return { marginLeft: margin + "px" };
  };

  const handleTime = (time) => {
    let tTime = time.replace(" ", "T");
    let usTime = new Date(tTime).toLocaleTimeString("en-us", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return usTime;
  };

  const handleType = (type) => {
    if (type === "high") {
      return <i style={{ color: "#1ff3e1" }} class='bi bi-caret-up-fill'></i>;
    } else
      return <i style={{ color: "#1f158d" }} class='bi bi-caret-down-fill'></i>;
  };
  return tides.map((tide) => {
    let time = new Date(tide.time.replace(" ", "T")).toLocaleTimeString(
      "en-GB",
      {
        hour: "2-digit",
        minute: "2-digit",
      }
    );

    return (
      <div
        className={
          tide.type === "noshow"
            ? "hidden"
            : tide.type === "high"
            ? "tideCardHigh"
            : "tideCardLow"
        }
        style={handleMargin(time)}
        key={tide.time}>
        <p>{Math.round((tide.height / 0.305) * 10) / 10}</p>
        {handleType(tide.type)}
        <p>{handleTime(tide.time)}</p>
      </div>
    );
  });
};
export default TideCard;
