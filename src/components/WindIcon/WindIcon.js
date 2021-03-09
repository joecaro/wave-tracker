import React from "react";
import degToCard from "../../lib/degToCard";
import "./WindIcon.css";

const WindIcon = ({ data }) => {
  let speed = Math.round(data.windSpeed.noaa * 2.237) + " mph";

  let direction = degToCard(data.windDirection.noaa);

  const handleDirection = (dir) => {
    let degrees = dir - 180;
    return { transform: `rotate(${degrees}deg)` };
  };
  return (
    <div className='windIcon'>
      <p className='directionText'>{direction}</p>
      <div className='wind' style={handleDirection(data.windDirection.noaa)}>
        <i className='bi bi-arrow-up arrow'></i>
      </div>
      <p className='speedText'>{speed}</p>
    </div>
  );
};
WindIcon.propTypes = {};

export default WindIcon;
