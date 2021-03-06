import React from "react";
import "./App.css";
import Waves from "./components/Waves/Waves";
import WaveStatsLists from "./components/WaveStatsLists/WaveStatsLists";
import WhiteBackground from "./components/WhiteBackground/WhiteBackground";
import WeatherIcon from "./components/WeatherIcon/WeatherIcon";
import WindIcon from "./components/WindIcon/WindIcon";
import Graph from "./components/Graph/Graph";
import waveData from './lib/data.json'

function App() {
  let data = waveData[0]

  return (
    <React.Fragment>
      <WaveStatsLists data={data} />
      <Waves />
      <WhiteBackground />
      <WindIcon data={data} />
      <WeatherIcon data={data} />
    </React.Fragment>
  );
}

export default App;
