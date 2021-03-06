import React from 'react';
import './WindIcon.css'

const WindIcon = ({data}) => {
  let speed = Math.round(data.windSpeed.noaa * 2.237) + ' MPH'

  const handleDirection = (dir) => {
    let degrees = dir - 180
    return {transform: `rotate(${degrees}deg)`}
}
  return (
    <div className='windIcon'>
      <div className='wind'  style={handleDirection(data.windDirection.noaa)}>
      <i class='bi bi-arrow-up arrow'></i>
      </div>
      <p className='speedText'>{speed}</p>
    </div>
  )
}
WindIcon.propTypes = {
}

export default WindIcon;