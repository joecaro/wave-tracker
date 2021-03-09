import React, { useState, useEffect } from "react";
import "./WeatherIcon.css";

const Sun = (props) => {
  const [day, setDay] = useState(true);

useEffect(() => {
  console.log(new Date().getHours())
    if (new Date().getHours() >= 19) {
      setDay(!day);
    }
  }, [])

  let temp = Math.round(props.data.airTemperature.noaa * (9 / 5) + 32);

  function findCloudiness(clouds) {
    if (clouds <= 5) {
      return "Clear";
    } else if (clouds <= 20) {
      return "Little Clouds";
    } else if (clouds <= 40) {
      return "Scattered Clouds";
    } else if (clouds <= 70) {
      return "Cloudy";
    } else return "Overcast";
  }

  let cloudCover = props.data.cloudCover.noaa;

  return (
    <div className='Icon'>
      <div className='sun'>
        <i
          style={{
            color: "#ffd930",
            fontSize: "5em",
            display: day ? "initial" : "none",
          }}
          className='bi bi-brightness-high-fill'></i>
      </div>
      <div className='moon' >
        <i
          style={{
            color: "#cccccc",
            fontSize: "5em",
            display: day ? "none" : "initial",
          }}
          className='bi bi-moon-stars-fill'></i>
      </div>
      <div className='cloud1'>
        <i className='bi bi-cloud-fill'></i>
      </div>
      <div className='cloud2'>
        <i className='bi bi-cloud-fill'></i>
      </div>
      <p>
        {temp}&#176; - {findCloudiness(cloudCover)}
      </p>
    </div>
  );
};

export default Sun;
