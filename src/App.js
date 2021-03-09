import React, { useEffect } from "react";
import "./App.css";
import Waves from "./components/Waves/Waves";
import WaveStatsLists from "./components/WaveStatsLists/WaveStatsLists";
import WeatherIcon from "./components/WeatherIcon/WeatherIcon";
import WindIcon from "./components/WindIcon/WindIcon";
import waveData from "./lib/data.json";
import TideContainer from "./components/TideContainer/TideContainer";

function App() {
  let time = new Date().getHours();

  useEffect(() => {
    if (time >= 19) {
      document.getElementById("root").className = "rootNight";
      document.getElementsByTagName("rect").fill = "aaaaaa";
    } else document.getElementById("root").className = "rootDay";
    document.getElementsByTagName("rect").fill = "aaaaaa";
  });

  const graphWidth = window.innerWidth < 1000 ? window.innerWidth * 0.9 : 300;
  const graphHeight = window.innerHeight < 750 ? 100 : 125;

  let dayGraphColor = "#ffffff";
  let nightGraphColor = "#777777";

  let data = waveData;
  let currentIndex = new Date().getHours();

  return (
    <React.Fragment>
      <TideContainer
        graphSize={{ graphHeight, graphWidth }}
        graphColors={{ dayGraphColor, nightGraphColor }}
      />
      <WaveStatsLists
        data={waveData}
        graphSize={{ graphHeight, graphWidth }}
        graphColors={{ dayGraphColor, nightGraphColor }}
      />
      <WindIcon data={data[currentIndex]} />
      <WeatherIcon data={data[currentIndex]} time={time} />
      <Waves />
    </React.Fragment>
  );
}

export default App;
