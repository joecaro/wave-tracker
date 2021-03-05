import React from "react";
import "./WeatherIcon.css";

const Sun = ({ data }) => {
  let temp = Math.round(data.airTemperature.noaa * (9 / 5) + 32);
  return (
    <div className='Icon'>
      <div className='sun'>
        <i
          style={{
            color: "#ffd930",
            fontSize: "5em",
          }}
          className='bi bi-brightness-high-fill'></i>
      </div>
      <div className='cloud1'>
        <i className='bi bi-cloud-fill'></i>
      </div>
      <div className='cloud2'>
        <i className='bi bi-cloud-fill'></i>
      </div>
      <p>{temp}&#176; - Sunny</p>
    </div>
  );
};

export default Sun;
