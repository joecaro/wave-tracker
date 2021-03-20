import React from "react";
import {
  HeaderContainer,
  WindContainer,
  WeatherContainer,
  WeatherText,
  WeatherItem,
  HeaderBackground,
  Icon,
} from "./HeaderElements";

const Header = (props) => {
  let convertTIme = (time) => {
    let currentTime = new Date().getHours();
    return time === currentTime
      ? `Now`
      : time > 12
      ? `${time - 12}pm`
      : time < 12 && time > 0
      ? `${time}am`
      : time === 0
      ? `12am`
      : `12pm`;
  };
  return (
    <HeaderContainer>
      <Icon>
        <i class='bi bi-brightness-high'></i>
      </Icon>
      <WeatherContainer>
        {props.data.map((element, index) => {
          let currentTime = new Date().getHours();
          if (index < currentTime || index > currentTime + 23) return;

          return (
            <WeatherItem>
              <WeatherText>
                {(element.airTemperature.noaa * (9 / 5) + 32).toFixed(0)}
                &#176;
              </WeatherText>
              <WeatherText>{convertTIme(element.time)}</WeatherText>
            </WeatherItem>
          );
        })}
      </WeatherContainer>
      <HeaderBackground />
    </HeaderContainer>
  );
};

export default Header;
