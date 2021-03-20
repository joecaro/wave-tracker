import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Menu from "./components/Menu/Menu";
import todayData from "./lib/today/data.json";
import tomorrowData from "./lib/tomorrow/data.json";
import tideDetails from "./lib/today/tide.json";
import tideExtremes from "./lib/tideExtremes.json";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  let time = 12;

  const [data, setData] = useState(todayData);

  const toggleData = (arr) => {
    setData(arr);
  };

  const [windowDemensions, setWindowDemensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    if (time >= 19) {
      document.getElementById("root").className = "rootNight";
    } else document.getElementById("root").className = "rootDay";
  });

  const graphWidth =
    windowDemensions.width < 768 ? windowDemensions.width * 0.9 : 690;
  const graphHeight = windowDemensions.height * 0.13;

  useEffect(() => {
    function handleResize() {
      setWindowDemensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  let weatherData = todayData.concat(tomorrowData);

  return (
    <React.Fragment>
      <Header data={weatherData} />
      <Main data={data} graphHeight={graphHeight} graphWidth={graphWidth} />
      <Menu
        dataSets={{ today: todayData, tomorrow: tomorrowData }}
        toggleData={toggleData}
      />
    </React.Fragment>
  );
}

export default App;

/* <Router>
        <Switch>
          <Route exact path='/'>
            <Today
              day={"today"}
              key={"today"}
              graphSize={{ graphHeight, graphWidth }}
              graphColors={{ dayGraphColor, nightGraphColor }}
              time={time}
              data={waveData}
            />
          </Route>
          <Route path='/tomorrow'>
            <Today
              day={"tomorrow"}
              key={"today"}
              graphSize={{ graphHeight, graphWidth }}
              graphColors={{ dayGraphColor, nightGraphColor }}
              time={time}
              data={tomorrowData}
            />
          </Route>
          <Route path='/threeDays'></Route>
        </Switch>
        <Waves />
      </Router>
      <WindIcon data={data[currentIndex]} />
      <WeatherIcon data={data[currentIndex]} time={time} /> */
