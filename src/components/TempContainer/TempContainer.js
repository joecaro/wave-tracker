import React from "react";
import "./TempContainer.css";

const Temp = ({ data }) => {
  let airTemp = Math.round(data.airTemperature.noaa * (9 / 5) + 32);
  let waterTemp = Math.round(data.waterTemperature.noaa * (9 / 5) + 32);
  return (
    <div className='tempCard'>
      <h3>Temperature</h3>
      <div className='data'>
        <p>Water: {waterTemp}&#176;</p>
        <p>Air: {airTemp}&#176;</p>
      </div>
    </div>
  );
};

export default Temp;
