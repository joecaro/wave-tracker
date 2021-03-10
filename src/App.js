import React, { useEffect } from "react";
import Waves from "./components/Waves/Waves";
import WeatherIcon from "./components/WeatherIcon/WeatherIcon";
import WindIcon from "./components/WindIcon/WindIcon";
import waveData from "./lib/data.json";
import Today from "./components/Today/Today";

function App() {
  let time = new Date().getHours();

  useEffect(() => {
    if (time >= 19) {
      document.getElementById("root").className = "rootNight";
    } else document.getElementById("root").className = "rootDay";
  });

  const graphWidth = window.innerWidth < 1000 ? window.innerWidth * 0.9 : 500;
  const graphHeight = window.innerHeight < 750 ? 100 : 125;

  let dayGraphColor = "#ffffff";
  let nightGraphColor = "#093f47 ";

  let data = waveData;
  let currentIndex = new Date().getHours();

  return (
    <React.Fragment>
      <Today
        graphSize={{ graphHeight, graphWidth }}
        graphColors={{ dayGraphColor, nightGraphColor }}
        time={time}
        data={waveData}
      />
      <WindIcon data={data[currentIndex]} />
      <WeatherIcon data={data[currentIndex]} time={time} />
      <Waves />
    </React.Fragment>
  );
}

export default App;
