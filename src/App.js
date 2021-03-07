import React from "react";
import "./App.css";
import Waves from "./components/Waves/Waves";
import WaveStatsLists from "./components/WaveStatsLists/WaveStatsLists";
import WhiteBackground from "./components/WhiteBackground/WhiteBackground";
import WeatherIcon from "./components/WeatherIcon/WeatherIcon";
import WindIcon from "./components/WindIcon/WindIcon";
import waveData from "./lib/data.json";

function App() {
  let data = waveData;

  return (
    <React.Fragment>
      <WaveStatsLists data={data} />
      <Waves />
      <WhiteBackground />
      <WindIcon data={data[0]} />
      <WeatherIcon data={data[0]} />
    </React.Fragment>
  );
}

export default App;
