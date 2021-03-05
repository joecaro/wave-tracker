import React from "react";
import "./App.css";
import Waves from "./components/Waves/Waves";
import WaveStatsLists from "./components/WaveStatsLists/WaveStatsLists";
import WhiteBackground from "./components/WhiteBackground/WhiteBackground";
import WeatherIcon from "./components/WeatherIcon/WeatherIcon";

function App() {
  let data = {
    airTemperature: { noaa: 13.08, sg: 13.08 },
    cloudCover: { noaa: 18, sg: 18 },
    seaLevel: { meto: -0.52, sg: -0.52 },
    secondarySwellDirection: { noaa: 177.46, sg: 177.46 },
    secondarySwellHeight: { noaa: 0.17, sg: 0.17 },
    secondarySwellPeriod: { noaa: 6.37, sg: 6.37 },
    swellDirection: {
      icon: 114.62,
      meteo: 114.09,
      noaa: 109.65,
      sg: 114.09,
    },
    swellHeight: { icon: 0.25, meteo: 0.65, noaa: 0.55, sg: 0.65 },
    swellPeriod: { icon: 5.68, meteo: 6.38, noaa: 7.44, sg: 6.38 },
    time: "2021-03-05T00:00:00+00:00",
    visibility: { noaa: 24.13, sg: 24.13 },
    waterTemperature: { meto: 13.33, noaa: 11.53, sg: 13.33 },
    waveDirection: {
      icon: 114.62,
      meteo: 113.67,
      noaa: 114.59,
      sg: 113.67,
    },
    waveHeight: { icon: 0.25, meteo: 0.76, noaa: 0.61, sg: 0.76 },
    wavePeriod: { icon: 5.68, meteo: 4.26, noaa: 7.33, sg: 4.26 },
    windDirection: { icon: 300.18, noaa: 300.62, sg: 300.18 },
    windSpeed: { icon: 2.17, noaa: 2.25, sg: 2.17 },
    windWaveDirection: {
      icon: 180,
      meteo: 276.8,
      noaa: 254.76,
      sg: 276.8,
    },
    windWaveHeight: { icon: 0, meteo: 0.28, noaa: 0.19, sg: 0.28 },
  };

  return (
    <React.Fragment>
      <WaveStatsLists data={data} />
      <Waves />
      <WhiteBackground />
      <WeatherIcon data={data} />
    </React.Fragment>
  );
}

export default App;
